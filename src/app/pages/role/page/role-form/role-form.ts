import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, inject, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
import { API } from '../../../../core/services';
import { Select } from '../../../../shared/components/form/select';
import { TextInput } from '../../../../shared/components/form/text-input';
import { MENUS_URL, ORGS_URL, ROLES_URL } from '../../../../shared/config';
import { RoleData } from '../../../../shared/form-data';
import { IHttpResponse } from '../../../../shared/interface/base/http-response';

/** Flat node with expandable and level information */
export interface MenuFlatNode {
  id: string;
  title: string;
  icon: string;
  target: string;
  isPrivate: boolean;
  level: number;
  expandable: boolean;
  children: MenuFlatNode[];
}

@Component({
  selector: 'app-role-form',
  imports: [Field, MatCardModule, MatTreeModule, MatButtonModule, MatIconModule, TextInput, Select],
  templateUrl: './role-form.html',
  styleUrl: './role-form.css',
})
export class RoleForm {
  #api = inject(API);
  #activatedRoute = inject(ActivatedRoute);

  orgsOptions = signal<any[]>([]);
  menus = signal<any[]>([]);
  formModel = signal<RoleData>({
    name: '',
    orgId: '',
  });

  formData = form(this.formModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.orgId, { message: 'Organization is required' });
  });

  treeControl = new FlatTreeControl<MenuFlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  );

  dataSource!: ArrayDataSource<any>;

  hasChild = (_: number, node: MenuFlatNode) => node.expandable;

  constructor() {
    this.#getDetail();
    this.#getOrgsOptions();
    this.#getMenus();

    // const menuTree = this.#buildMenuFlat(this.menus());
    this.dataSource = new ArrayDataSource([]);
  }

  /* #buildMenuFlat(list: any[]): MenuFlatNode[] {
    const map = new Map<string, any>();
    const childrenCount = new Map<string, number>();

    // index items
    list.forEach((item) => {
      map.set(item.id, item);

      if (item.parentId) {
        childrenCount.set(item.parentId, (childrenCount.get(item.parentId) || 0) + 1);
      }
    });

    // calculate level
    function getLevel(item: any): number {
      let level = 0;
      let current = item;

      while (current.parentId && map.has(current.parentId)) {
        level++;
        current = map.get(current.parentId);
      }

      return level;
    }

    // build flat menu
    return list.map((item) => ({
      id: item.id,
      title: item.title,
      icon: item.icon,
      target: item.target,
      isPrivate: item.isPrivate,
      parentId: item.parentId,
      level: getLevel(item),
      expandable: childrenCount.has(item.id),
      children: [],
    }));
  } */

  #buildTree(list: any[]): MenuFlatNode[] {
    const map = new Map<string, MenuFlatNode>();
    const roots: MenuFlatNode[] = [];

    // Step 1: create map
    for (const item of list) {
      map.set(item.id, {
        ...item,
        children: [],
      });
    }

    // Step 2: link children to parents
    for (const item of list) {
      const node = map.get(item.id)!;

      if (item.parentId && map.has(item.parentId)) {
        map.get(item.parentId)!.children.push(node);
      } else {
        // no parent = root (Step 1)
        roots.push(node);
      }
    }

    return roots;
  }

  #getDetail(): void {
    const id = this.#activatedRoute.snapshot.params['id'];
    if (!id) return;

    this.#api.get<IHttpResponse>(`${ROLES_URL}/${id}`).subscribe({
      next: (response: IHttpResponse) => {
        console.log('detail', response);
        // this.tableModel.dataSource = response.data?.list || [];
        // this.tableModel.hasNext(response.data?.hasNext || false);
        // this.tableModel.isLoading.set(false);
      },
    });
  }

  #getOrgsOptions(): void {
    this.#api
      .get<IHttpResponse>(ORGS_URL, {
        pageNo: 1,
        itemPerPage: 200,
      })
      .subscribe({
        next: (response: IHttpResponse) => this.orgsOptions.set(response.data?.list || []),
      });
  }

  #getMenus(): void {
    this.#api
      .get<IHttpResponse>(MENUS_URL, {
        includePrivate: true,
        pageNo: 1,
        itemPerPage: 250,
      })
      .subscribe({
        next: (response: IHttpResponse) => {
          this.menus.set(response.data?.list || []);
          console.log(...response.data?.list, this.#buildTree(this.menus()));
        },
      });
  }

  onSubmit(): void {
    this.formData.name().markAsTouched();
    this.formData.orgId().markAsTouched();

    if (this.formData().invalid()) return;

    /* const URL = this.data ? `${ROLES_URL}/${this.data.id}` : ROLES_URL;

    this.#api.post<IHttpResponse>(URL, this.formModel()).subscribe({
      next: () => {
        Swal.fire({
          title: this.data ? 'Updated!' : 'Created!',
          text: this.data
            ? 'Your changes have been saved successfully.'
            : 'The new role has been created.',
          icon: 'success',
        });

        this.dialogRef.close(true);
      },
    }); */
  }
}

import { Component, inject, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Sort } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { API } from '../../../../core/services';
import { Button } from '../../../../shared/components/button';
import { Search } from '../../../../shared/components/search';
import { Table } from '../../../../shared/components/table';
import { ROLES_URL } from '../../../../shared/config';
import { CREATE_BUTTON } from '../../../../shared/config/button';
import { ROLE_TABLE } from '../../../../shared/config/table';
import { ILogin } from '../../../../shared/interface/auth';
import { IHttpResponse } from '../../../../shared/interface/base/http-response';
import { ButtonModel, TableModel } from '../../../../shared/model';

@Component({
  selector: 'app-role-list',
  imports: [RouterLink, MatCheckboxModule, MatIconModule, MatTooltipModule, Table, Button, Search],
  templateUrl: './role-list.html',
  styleUrl: './role-list.css',
})
export class RoleList {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  #api = inject(API);
  protected readonly dialog = inject(MatDialog);

  button = {
    addNewCustomer: signal<ButtonModel>(
      CREATE_BUTTON('Add New Role', 'flat', false, '', '', 'add'),
    ),
  };

  tableModel: TableModel = ROLE_TABLE;
  searchControl = '';

  constructor() {
    this.#getSourceData();
  }

  #getSourceData(): void {
    const userAccountStr = JSON.parse(localStorage.getItem('connecta.user_account')!) as ILogin;
    const isPrivate = userAccountStr && userAccountStr?.orgId === 'ROOT';

    this.tableModel.isLoading.set(true);

    this.#api
      .get<IHttpResponse>(ROLES_URL, {
        orgId: userAccountStr?.orgId || '',
        includeGlobal: isPrivate,
        filter: this.tableModel.searchValue,
        pageNo: this.tableModel.pageIndex,
        itemPerPage: this.tableModel.pageSize,
      })
      .subscribe({
        next: (response: IHttpResponse) => {
          this.tableModel.dataSource = response.data?.list || [];
          this.tableModel.hasNext(response.data?.hasNext || false);
          this.tableModel.isLoading.set(false);
        },
      });
  }

  onRowSelection(row: any): void {
    this.tableModel.selectRow(row);
  }

  onAllSelection(isChecked: boolean): void {
    this.tableModel.selectAll(isChecked);
  }

  sortChange(event: Sort): void {
    this.tableModel.sortActive = event.active;
    this.tableModel.sortDirection = event.direction;
  }

  pageChange(event: any): void {
    if (!event) return;

    this.tableModel.pageIndex = event.pageIndex;
    this.tableModel.pageSize = event.pageSize;
  }

  onSearch(searchValue: string): void {
    this.tableModel.searchValue = searchValue;
    this.#getSourceData();
  }

  openDeleteConfirmation(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert this action!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.#deleteRowService(id);
      }
    });
  }

  #deleteRowService(id: string): void {
    this.#api.delete<IHttpResponse>(`${ROLES_URL}/${id}`).subscribe({
      next: () => {
        Swal.fire({
          title: 'Deleted!',
          text: 'The record has been removed from the system.',
          icon: 'success',
        });

        this.#getSourceData();
      },
    });
  }

  navigateToForm(data?: any): void {
    this.#router.navigate(['add', data?.id || ''], {
      relativeTo: this.#activatedRoute,
    });
  }
}

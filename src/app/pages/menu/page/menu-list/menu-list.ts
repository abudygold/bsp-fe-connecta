import { Component, inject, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Sort } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { API } from '../../../../core/services';
import { Button } from '../../../../shared/components/button';
import { Search } from '../../../../shared/components/search';
import { Table } from '../../../../shared/components/table';
import { FORM_SM_DIALOG_CONFIG, MENU_URL, MENUS_URL } from '../../../../shared/config';
import { CREATE_BUTTON } from '../../../../shared/config/button';
import { MENU_TABLE } from '../../../../shared/config/table';
import { ILogin } from '../../../../shared/interface/auth';
import { IHttpResponse } from '../../../../shared/interface/base/http-response';
import { ButtonModel, TableModel } from '../../../../shared/model';
import { MenuForm } from '../../dialog/menu-form';

@Component({
  selector: 'app-menu-list',
  imports: [RouterLink, MatCheckboxModule, MatIconModule, MatTooltipModule, Table, Button, Search],
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.css',
})
export class MenuList {
  #api = inject(API);
  protected readonly dialog = inject(MatDialog);

  button = {
    addNewCustomer: signal<ButtonModel>(
      CREATE_BUTTON('Add New Menu', 'flat', false, '', '', 'add'),
    ),
  };

  tableModel: TableModel = MENU_TABLE;
  searchControl = '';

  constructor() {
    this.#getSourceData();
  }

  #getSourceData(): void {
    const userAccountStr = localStorage.getItem('connecta.user_account');
    const isPrivate = userAccountStr && (JSON.parse(userAccountStr) as ILogin)?.orgId === 'ROOT';

    this.tableModel.isLoading.set(true);

    this.#api
      .get<IHttpResponse>(MENUS_URL, {
        includePrivate: isPrivate,
        filter: this.tableModel.searchValue,
        pageNo: this.tableModel.pageIndex,
        // itemPerPage: this.tableModel.pageSize,
        itemPerPage: 1000,
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
    this.#api.delete<IHttpResponse>(`${MENU_URL}/${id}`).subscribe({
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

  openFormDialog(data?: any): void {
    const dialogRef = this.dialog.open(MenuForm, {
      ...FORM_SM_DIALOG_CONFIG,
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      this.#getSourceData();
    });
  }
}

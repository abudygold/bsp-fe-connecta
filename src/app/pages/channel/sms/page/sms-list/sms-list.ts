import { Component, inject, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { API } from '../../../../../core/services';
import { Table } from '../../../../../shared/components/table';
import { EXAMPLE_DUMMY_DATA } from '../../../../../shared/config';
import { CHANNEL_SMS_TABLE } from '../../../../../shared/config/table';
import { ButtonModel, TableModel } from '../../../../../shared/model';
import { Button } from '../../../../../shared/components/button';
import { CREATE_BUTTON } from '../../../../../shared/config/button';

@Component({
  selector: 'app-sms-list',
  imports: [MatCheckboxModule, MatIconModule, Table, Button],
  templateUrl: './sms-list.html',
  styleUrl: './sms-list.css',
})
export class SmsList {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  #api = inject(API);

  tableModel: TableModel = CHANNEL_SMS_TABLE;
  searchControl = '';

  button = {
    addNewAccount: signal<ButtonModel>(
      CREATE_BUTTON('Add New Account', 'flat', false, '', '', 'add'),
    ),
  };

  constructor() {
    this.#getSourceData();
  }

  #getSourceData(): void {
    this.#api.get('').subscribe({
      next: () => {},
      complete: () => {},
      error: () => {},
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
    console.log(event);
  }

  onInputChange(): void {
    this.tableModel.isLoading.set(true);

    if (!this.searchControl) {
      this.tableModel.dataSource = EXAMPLE_DUMMY_DATA;
      this.tableModel.dataTotal = this.tableModel.dataSource.length;
      this.tableModel.isLoading.set(false);
      return;
    }

    setTimeout(() => {
      this.tableModel.dataSource = this.tableModel.dataSource.filter((d) =>
        d.name?.toLowerCase().includes(this.searchControl?.toLowerCase()),
      );
      this.tableModel.dataTotal = this.tableModel.dataSource.length;
      this.tableModel.isLoading.set(false);
    }, 2000);
  }

  onAction(): void {
    console.log('--- Action Clicked ---');
  }

  navigateToAdd(): void {
    this.#router.navigate(['./add'], {
      relativeTo: this.#activatedRoute,
    });
  }
}

import { Component, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { API } from '../../../../../core/services';
import { Table } from '../../../../../shared/components/table';
import { EXAMPLE_DUMMY_DATA } from '../../../../../shared/config';
import { CHANNEL_WHATSAPP_TABLE } from '../../../../../shared/config/table';
import { TableModel } from '../../../../../shared/model';

@Component({
  selector: 'app-whatsapp-list',
  imports: [MatCheckboxModule, MatIconModule, Table],
  templateUrl: './whatsapp-list.html',
  styleUrl: './whatsapp-list.css',
})
export class WhatsappList {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  #api = inject(API);

  tableModel: TableModel = CHANNEL_WHATSAPP_TABLE;
  searchControl = '';

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

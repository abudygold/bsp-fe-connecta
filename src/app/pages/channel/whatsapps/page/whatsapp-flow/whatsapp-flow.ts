import { Component, inject, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { API } from '../../../../../core/services';
import { Button } from '../../../../../shared/components/button';
import { Table } from '../../../../../shared/components/table';
import { EXAMPLE_DUMMY_DATA } from '../../../../../shared/config';
import { CREATE_BUTTON } from '../../../../../shared/config/button';
import { CHANNEL_WHATSAPP_FLOW_TABLE } from '../../../../../shared/config/table';
import { ButtonModel, TableModel } from '../../../../../shared/model';

@Component({
  selector: 'app-whatsapp-flow',
  imports: [MatCheckboxModule, MatIconModule, Table, Button],
  templateUrl: './whatsapp-flow.html',
  styleUrl: './whatsapp-flow.css',
})
export class WhatsappsFlow {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  #api = inject(API);

  tableModel: TableModel = CHANNEL_WHATSAPP_FLOW_TABLE;
  searchControl = '';

  button = {
    addNewFlow: signal<ButtonModel>(
      CREATE_BUTTON('Add New Flow', 'flat', false, '', '', 'add'),
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

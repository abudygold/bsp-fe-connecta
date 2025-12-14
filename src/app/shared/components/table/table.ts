import { DatePipe, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component, ContentChild, input, output, TemplateRef, ViewChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CurrencyIntlPipe } from '../../../core/pipes';
import { IPagination } from '../../interface';
import { TableModel } from '../../model';

@Component({
  selector: 'app-table',
  imports: [
    NgTemplateOutlet,
    DatePipe,
    TitleCasePipe,
    CurrencyIntlPipe,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  sortChange = output<Sort>();
  pageChange = output<IPagination>();
  mouseOverChange = output<any>();
  selectData = output<any>();

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  config = input.required<TableModel>();

  @ViewChild(MatSort) sort!: MatSort;

  @ContentChild('selectionTemplate')
  public selectionTemplate!: TemplateRef<any> | null;

  @ContentChild('customTemplate')
  public customTemplate!: TemplateRef<any> | null;

  public disableClick(event: Event, tableKey: string) {
    (tableKey === 'action' || tableKey === 'selection') && event.stopPropagation();
  }

  public displayValue(value: any): any {
    return value !== null && value !== undefined ? value : '-';
  }

  public getPropertyValue(obj: any, key: string): any {
    if (!key) return obj;

    const props = key.split('.');

    for (let i = 0; i < props.length; i++) {
      if (obj === null || obj === undefined) {
        return 'N/A';
      }
      obj = obj[props[i]];
    }

    return obj !== undefined ? obj : null;
  }

  get headerRow(): string[] {
    return this.config().columns.map((c) => c.key);
  }

  get pagedData(): MatTableDataSource<any> {
    const { dataSource, pageIndex, pageSize } = this.config();

    if (Array.isArray(dataSource)) {
      const start = pageIndex * pageSize;
      const end = start + pageSize;

      this.dataSource = new MatTableDataSource<any>(dataSource.slice(start, end));
      this.dataSource.sort = this.sort;
    }

    return this.dataSource;
  }

  onPageChange(page: IPagination): void {
    if (!page) return;

    if (this.config().isHttpPagination()) {
      this.pageChange.emit(page);
      return;
    }

    this.config().pageIndex = page.pageIndex;
    this.config().pageSize = page.pageSize;
    this.pagedData;
  }
}

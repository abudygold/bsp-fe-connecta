import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-filter',
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './table-filter.html',
  styleUrl: './table-filter.css',
})
export class TableFilter {}

import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-admin-header',
  imports: [NgClass, MatToolbarModule, MatIconModule],
  templateUrl: './admin-header.html',
  styleUrl: './admin-header.css',
})
export class AdminHeader {
  toggleMenu = output<void>();
  isMobile = input<boolean>(false);
}

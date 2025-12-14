import { Component, inject, input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { NAVIGATION_MENU, NavItem } from '../../../navigation';

@Component({
  selector: 'app-admin-sidebar',
  imports: [MatListModule, MatIconModule],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar implements OnInit {
  readonly router = inject(Router);

  expanded: Set<string> = new Set();
  currentUrl: string = '';

  menu = input<NavItem[]>(NAVIGATION_MENU);

  constructor() {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.#expandParentsWithActiveRoute(this.menu());
  }

  toggle(item: NavItem) {
    if (!item.submenu) return;

    if (this.expanded.has(item.label)) {
      this.expanded.delete(item.label);
    } else {
      this.expanded.add(item.label);
    }
  }

  isExpanded(item: NavItem): boolean {
    return this.expanded.has(item.label);
  }

  navigate(item: NavItem) {
    if (item.path) this.router.navigate([item.path]);
    if (item.url) window.open(item.url, '_blank');
  }

  /** Check if this menu item is active */
  isActive(item: NavItem): boolean {
    return item.path ? this.currentUrl === item.path : false;
  }

  /** Auto-expand parents if children contain active route */
  #expandParentsWithActiveRoute(items: NavItem[]) {
    items.forEach((item) => {
      if (item.submenu) {
        if (this.#containsActiveRoute(item.submenu)) {
          this.expanded.add(item.label);
        }
        this.#expandParentsWithActiveRoute(item.submenu);
      }
    });
  }

  #containsActiveRoute(items: NavItem[]): boolean {
    return items.some(
      (child) =>
        (child.path && this.currentUrl.startsWith(child.path)) ||
        (child.submenu && this.#containsActiveRoute(child.submenu)),
    );
  }
}

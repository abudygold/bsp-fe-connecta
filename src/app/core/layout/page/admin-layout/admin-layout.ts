import { MediaMatcher } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Breadcrumb } from '../../../../shared/components/breadcrumb';
import { BreadcrumbModel } from '../../../../shared/model';
import { AdminHeader } from '../../component/admin-header';
import { AdminSidebar } from '../../component/admin-sidebar';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, NgClass, MatSidenavModule, AdminHeader, AdminSidebar, Breadcrumb],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  #router = inject(Router);
  #media = inject(MediaMatcher);
  // readonly dialog = inject(MatDialog);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  protected readonly isMobile = signal(true);

  breadcrumbs: BreadcrumbModel[] = [];

  constructor() {
    this._mobileQuery = this.#media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.#router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const root = this.#router.routerState.root;
      this.buildBreadcrumbs(root.snapshot);
    });
  }

  buildBreadcrumbs(route: ActivatedRouteSnapshot | null): void {
    if (!route) return;

    const breadcrumbs = route.data['breadcrumb'];

    if (breadcrumbs) this.breadcrumbs = breadcrumbs;

    this.buildBreadcrumbs(route.firstChild);
  }

  /* openDialog() {
    const dialogRef = this.dialog.open(Confirmation, {
      ...CONFIRMATION_DIALOG_CONFIG,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  } */

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}

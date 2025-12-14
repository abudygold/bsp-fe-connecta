import { Routes } from '@angular/router';
import { DASHBOARD_BREADCRUMB } from '../../shared/config';
import { authGuard } from '../guard';
import { BROADCAST_ROUTES } from './broadcast.routes';
import { CHANNEL_ROUTES } from './channel.routes';
import { CUSTOMER_ROUTES } from './customer.routes';

export const LAYOUT_ROUTES: Routes = [
  {
    path: 'secure',
    canActivate: [authGuard],
    loadComponent: () =>
      import('../../core/layout/page/admin-layout/admin-layout').then((m) => m.AdminLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../core/layout/component/auth-login/auth-login').then((m) => m.AuthLogin),
        data: {
          breadcrumb: DASHBOARD_BREADCRUMB,
        },
      },
      ...CHANNEL_ROUTES,
      ...CUSTOMER_ROUTES,
      ...BROADCAST_ROUTES,
    ],
  },
];

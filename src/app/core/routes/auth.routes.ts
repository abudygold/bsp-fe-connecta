import { Routes } from '@angular/router';
import { guestGuard } from '../guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadComponent: () => import('../layout/page/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../core/layout/component/auth-login/auth-login').then((m) => m.AuthLogin),
      },
      {
        path: 'forgot',
        loadComponent: () =>
          import('../../core/layout/component/auth-forgot/auth-forgot').then((m) => m.AuthForgot),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../../core/layout/component/auth-register/auth-register').then(
            (m) => m.AuthRegister,
          ),
      },
      {
        path: 'reset',
        loadComponent: () =>
          import('../../core/layout/component/auth-reset').then((m) => m.AuthReset),
      },
    ],
  },
];

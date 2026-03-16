import { Routes } from '@angular/router';
import { guestGuard } from './guard';

export const AUTH_ROUTES: Routes = [
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadComponent: () => import('./page/auth-layout').then((m) => m.AuthLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/auth-login').then((m) => m.AuthLogin),
      },
      {
        path: 'forgot',
        loadComponent: () => import('./components/auth-forgot').then((m) => m.AuthForgot),
      },
      {
        path: 'register',
        loadComponent: () => import('./components/auth-register').then((m) => m.AuthRegister),
      },
      {
        path: 'reset',
        loadComponent: () => import('./components/auth-reset').then((m) => m.AuthReset),
      },
    ],
  },
];

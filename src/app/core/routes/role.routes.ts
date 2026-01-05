import { Routes } from '@angular/router';
import {
  ROLE_FORM_BREADCRUMB,
  ROLE_FORM_TITLE,
  ROLE_LIST_BREADCRUMB,
  ROLE_LIST_TITLE,
} from '../../shared/config';

export const ROLE_ROUTES: Routes = [
  {
    path: 'role',
    children: [
      {
        path: '',
        loadComponent: () => import('../../pages/role/page/role-list').then((m) => m.RoleList),
        data: {
          breadcrumb: ROLE_LIST_BREADCRUMB,
          title: ROLE_LIST_TITLE,
        },
      },
      {
        path: 'add/:id',
        loadComponent: () => import('../../pages/role/page/role-form').then((m) => m.RoleForm),
        data: {
          breadcrumb: ROLE_FORM_BREADCRUMB,
          title: ROLE_FORM_TITLE,
        },
      },
    ],
  },
];

import { Routes } from '@angular/router';
import { MENU_LIST_BREADCRUMB, MENU_LIST_TITLE } from '../../shared/config';

export const MENU_ROUTES: Routes = [
  {
    path: 'menu',
    children: [
      {
        path: '',
        loadComponent: () => import('../../pages/menu/page/menu-list').then((m) => m.MenuList),
        data: {
          breadcrumb: MENU_LIST_BREADCRUMB,
          title: MENU_LIST_TITLE,
        },
      },
    ],
  },
];

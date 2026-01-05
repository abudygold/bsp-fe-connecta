import { Routes } from '@angular/router';
import {
  CUSTOMER_GROUP_BREADCRUMB,
  CUSTOMER_GROUP_LIST_TITLE,
  CUSTOMER_LIST_BREADCRUMB,
  CUSTOMER_LIST_TITLE,
} from '../../shared/config';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: 'customer',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/customer/page/customer-list').then((m) => m.CustomerList),
        data: {
          breadcrumb: CUSTOMER_LIST_BREADCRUMB,
          title: CUSTOMER_LIST_TITLE,
        },
      },
      {
        path: 'group',
        loadComponent: () =>
          import('../../pages/customer/page/customer-group-list').then((m) => m.CustomerGroupList),
        data: {
          breadcrumb: CUSTOMER_GROUP_BREADCRUMB,
          title: CUSTOMER_GROUP_LIST_TITLE,
        },
      },
    ],
  },
];

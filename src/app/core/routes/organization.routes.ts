import { Routes } from '@angular/router';
import { ORGANIZATION_LIST_BREADCRUMB, ORGANIZATION_LIST_TITLE } from '../../shared/config';

export const ORGANIZATION_ROUTES: Routes = [
  {
    path: 'organization',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/organization/page/organization-list').then((m) => m.OrganizationList),
        data: {
          breadcrumb: ORGANIZATION_LIST_BREADCRUMB,
          title: ORGANIZATION_LIST_TITLE,
        },
      },
    ],
  },
];

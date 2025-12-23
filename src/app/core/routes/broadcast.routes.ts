import { Routes } from '@angular/router';
import { BROADCAST_LIST_BREADCRUMB, BROADCAST_LIST_TITLE } from '../../shared/config';

export const BROADCAST_ROUTES: Routes = [
  {
    path: 'broadcast',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/broadcast/page/broadcast-list/broadcast-list').then(
            (m) => m.BroadcastList,
          ),
        data: {
          breadcrumb: BROADCAST_LIST_BREADCRUMB,
          title: BROADCAST_LIST_TITLE,
        },
      },
    ],
  },
];

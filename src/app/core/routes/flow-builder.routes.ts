import { Routes } from '@angular/router';
import { FLOW_BUILDER_LIST_BREADCRUMB, FLOW_BUILDER_LIST_TITLE } from '../../shared/config';

export const FLOW_BUILDER_ROUTES: Routes = [
  {
    path: 'flow-builder',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/flow-builder/page/flow-builder').then((m) => m.FlowBuilder),
        data: {
          breadcrumb: FLOW_BUILDER_LIST_BREADCRUMB,
          title: FLOW_BUILDER_LIST_TITLE,
        },
      },
    ],
  },
];

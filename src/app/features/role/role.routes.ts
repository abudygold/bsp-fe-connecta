import { Routes } from '@angular/router';
import { ROLE_LIST_BREADCRUMB } from '../../shared/constant/global';

export const ROLE_ROUTES: Routes = [
	{
		path: 'role',
		children: [
			{
			  path: '',
			  loadComponent: () =>
			    import('./page/role-list').then((m) => m.RoleList),
			  data: {
			    breadcrumb: ROLE_LIST_BREADCRUMB,
			  },
			},
		],
	},
];

import { Routes } from '@angular/router';
import { USER_LIST_BREADCRUMB } from '../../shared/constant/global';

export const USER_ROUTES: Routes = [
	{
		path: 'user',
		children: [
			{
			  path: '',
			  loadComponent: () =>
			    import('./page/user-list').then((m) => m.UserList),
			  data: {
			    breadcrumb: USER_LIST_BREADCRUMB,
			  },
			},
		],
	},
];

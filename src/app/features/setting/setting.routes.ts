import { Routes } from '@angular/router';

export const SETTING_ROUTES: Routes = [
	{
		path: 'setting',
		children: [
			{
				path: 'users',
				children: [
					{
						path: '',
						loadComponent: () => import('./page/user-list').then((m) => m.UserList),
					},
				],
			},
			{
				path: 'api-keys',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./page/api-keys-list').then((m) => m.ApiKeysList),
					},
				],
			},
		],
	},
];

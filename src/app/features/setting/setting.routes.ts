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
				path: 'role',
				children: [
					{
						path: '',
						loadComponent: () => import('./page/role-list').then((m) => m.RoleList),
					},
				],
			},
			{
				path: 'organization',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./page/organization-list').then((m) => m.OrganizationList),
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

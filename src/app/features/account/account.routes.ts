import { Routes } from '@angular/router';
import { ACCOUNT_WA_LIST_BREADCRUMB } from '../../shared/constant/global';

export const ACCOUNT_ROUTES: Routes = [
	{
		path: 'account',
		children: [
			{
				path: 'wa',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./page/account-wa-list').then((m) => m.AccountWaList),
						data: {
							breadcrumb: ACCOUNT_WA_LIST_BREADCRUMB,
						},
					},
				],
			},
		],
	},
];

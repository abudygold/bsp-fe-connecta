import { Routes } from '@angular/router';
import { ORGANIZATION_LIST_BREADCRUMB } from '../../shared/constant/global';

export const ORGANIZATION_ROUTES: Routes = [
	{
		path: 'organization',
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./page/organization-list').then((m) => m.OrganizationList),
				data: {
					breadcrumb: ORGANIZATION_LIST_BREADCRUMB,
				},
			},
		],
	},
];

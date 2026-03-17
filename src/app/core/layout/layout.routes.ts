import { Routes } from '@angular/router';
import { ACCOUNT_ROUTES } from '../../features/account/account.routes';
import { CAMPAIGN_ROUTES } from '../../features/campaign/campaign.routes';
import { CHANNEL_ROUTES } from '../../features/channel/channel.routes';
import { MENUS_ROUTES } from '../../features/menu/menu.routes';
import { ORGANIZATION_ROUTES } from '../../features/organization/organization.routes';
import { ROLE_ROUTES } from '../../features/role/role.routes';
import { USER_ROUTES } from '../../features/user/user.routes';
import { DASHBOARD_BREADCRUMB } from '../../shared/constant/global';
import { authGuard } from '../auth/guard';

export const LAYOUT_ROUTES: Routes = [
	{
		path: 'secure',
		canActivate: [authGuard],
		loadComponent: () => import('./page/admin-layout').then((m) => m.AdminLayout),
		children: [
			{
				path: '',
				loadComponent: () =>
					import('../../features/dashboard/page/dashboard').then((m) => m.Dashboard),
				data: {
					breadcrumb: DASHBOARD_BREADCRUMB,
				},
			},
			...USER_ROUTES,
			...ROLE_ROUTES,
			...MENUS_ROUTES,
			...CHANNEL_ROUTES,
			...ACCOUNT_ROUTES,
			...CAMPAIGN_ROUTES,
			...ORGANIZATION_ROUTES,
		],
	},
];

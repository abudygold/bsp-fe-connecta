import { Routes } from '@angular/router';
import { CAMPAIGN_ROUTES } from '../../features/campaign/campaign.routes';
import { CHANNEL_ROUTES } from '../../features/channel/channel.routes';
import { CUSTOMER_ROUTES } from '../../features/customer/customer.routes';
import { REPORT_ROUTES } from '../../features/report/report.routes';
import { SETTING_ROUTES } from '../../features/setting/setting.routes';
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
			},
			...CHANNEL_ROUTES,
			...CUSTOMER_ROUTES,
			...CAMPAIGN_ROUTES,
			...REPORT_ROUTES,
			...SETTING_ROUTES,
		],
	},
];

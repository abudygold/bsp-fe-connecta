import { Routes } from '@angular/router';

export const CAMPAIGN_ROUTES: Routes = [
	{
		path: 'campaign',
		children: [
			{
				path: '',
				loadComponent: () => import('./page/campaign-list').then((m) => m.CampaignList),
			},
			{
				path: 'add',
				loadComponent: () => import('./page/campaign-form').then((m) => m.CampaignForm),
			},
			{
				path: 'edit/:id',
				loadComponent: () => import('./page/campaign-form').then((m) => m.CampaignForm),
			},
		],
	},
];

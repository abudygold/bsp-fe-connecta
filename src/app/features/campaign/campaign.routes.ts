import { Routes } from '@angular/router';
import { CAMPAIGN_LIST_BREADCRUMB } from '../../shared/constant/global';

export const CAMPAIGN_ROUTES: Routes = [
	{
		path: 'campaign',
		children: [
			{
				path: '',
				loadComponent: () => import('./page/campaign-list').then((m) => m.CampaignList),
				data: {
					breadcrumb: CAMPAIGN_LIST_BREADCRUMB,
				},
			},
		],
	},
];

import { Routes } from '@angular/router';
import { CHANNEL_WA_LIST_BREADCRUMB } from '../../shared/constant/global';

export const CHANNEL_ROUTES: Routes = [
	{
		path: 'channel',
		children: [
			{
				path: 'wa',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./page/channel-wa-list').then((m) => m.ChannelWaList),
						data: {
							breadcrumb: CHANNEL_WA_LIST_BREADCRUMB,
						},
					},
				],
			},
		],
	},
];

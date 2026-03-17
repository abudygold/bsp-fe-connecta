import { Routes } from '@angular/router';
import { CHANNEL_LIST_BREADCRUMB } from '../../shared/constant/global';

export const CHANNEL_ROUTES: Routes = [
	{
		path: 'channel',
		loadComponent: () => import('./page/channel-list').then((m) => m.ChannelList),
		data: {
			breadcrumb: CHANNEL_LIST_BREADCRUMB,
		},
	},
];

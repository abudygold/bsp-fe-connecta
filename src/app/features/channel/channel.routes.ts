import { Routes } from '@angular/router';

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
							import('./page/channel-account-list').then((m) => m.ChannelAccountList),
					},
					{
						path: 'template',
						children: [
							{
								path: '',
								loadComponent: () =>
									import('./page/channel-template-list').then(
										(m) => m.ChannelTemplateList,
									),
							},
						],
					},
				],
			},
			{
				path: 'wau',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./page/channel-account-list').then((m) => m.ChannelAccountList),
					},
					{
						path: 'group',
						loadComponent: () =>
							import('./page/channel-account-group-list').then(
								(m) => m.ChannelAccountGroupList,
							),
					},
					{
						path: 'template',
						children: [
							{
								path: '',
								loadComponent: () =>
									import('./page/channel-template-list').then(
										(m) => m.ChannelTemplateList,
									),
							},
							{
								path: 'add',
								loadComponent: () =>
									import('./page/channel-template-wau-form').then(
										(m) => m.ChannelTemplateWAUForm,
									),
							},
							{
								path: 'edit/:id',
								loadComponent: () =>
									import('./page/channel-template-wau-form').then(
										(m) => m.ChannelTemplateWAUForm,
									),
							},
						],
					},
				],
			},
		],
	},
];

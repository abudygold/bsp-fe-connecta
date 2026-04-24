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
									import('./page/channel-template-form').then(
										(m) => m.ChannelTemplateForm,
									),
							},
							{
								path: 'edit/:id',
								loadComponent: () =>
									import('./page/channel-template-form').then(
										(m) => m.ChannelTemplateForm,
									),
							},
						],
					},
				],
			},
			{
				path: 'sms',
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
							{
								path: 'add',
								loadComponent: () =>
									import('./page/channel-template-form').then(
										(m) => m.ChannelTemplateForm,
									),
							},
							{
								path: 'edit/:id',
								loadComponent: () =>
									import('./page/channel-template-form').then(
										(m) => m.ChannelTemplateForm,
									),
							},
						],
					},
				],
			},
			{
				path: 'group',
				loadComponent: () =>
					import('./page/channel-account-group-list').then(
						(m) => m.ChannelAccountGroupList,
					),
			},
		],
	},
];

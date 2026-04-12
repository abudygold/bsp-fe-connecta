import { Routes } from '@angular/router';

export const CUSTOMER_ROUTES: Routes = [
	{
		path: 'customer',
		children: [
			{
				path: '',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./page/customer-list').then((m) => m.CustomerList),
					},
					{
						path: 'add',
						loadComponent: () =>
							import('./page/customer-form').then((m) => m.CustomerForm),
					},
					{
						path: 'edit/:id',
						loadComponent: () =>
							import('./page/customer-form').then((m) => m.CustomerForm),
					},
				],
			},
			{
				path: 'group',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./page/customer-group-list').then((m) => m.CustomerGroupList),
					},
					{
						path: 'add',
						loadComponent: () =>
							import('./page/customer-group-form').then((m) => m.CustomerGroupForm),
					},
					{
						path: 'edit/:id',
						loadComponent: () =>
							import('./page/customer-group-form').then((m) => m.CustomerGroupForm),
					},
				],
			},
			{
				path: 'send-message',
				loadComponent: () =>
					import('./page/customer-send-message').then((m) => m.CustomerSendMessage),
			},
		],
	},
];

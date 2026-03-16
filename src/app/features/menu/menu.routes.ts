import { Routes } from '@angular/router';
import { MENU_LIST_BREADCRUMB } from '../../shared/constant/global';

export const MENUS_ROUTES: Routes = [
	{
		path: 'menu',
		children: [
			{
				path: '',
				loadComponent: () => import('./page/menu-list').then((m) => m.MenuList),
				data: {
					breadcrumb: MENU_LIST_BREADCRUMB,
				},
			},
		],
	},
];

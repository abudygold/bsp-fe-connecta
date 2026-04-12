import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
	faBullhorn,
	faChartPie,
	faCircleUser,
	faDashboard,
	faGear,
	faRss,
} from '@fortawesome/free-solid-svg-icons';

export interface NavItem {
	label: string;
	icon?: IconDefinition;
	url?: string; // External link
	path?: string; // Internal router link
	submenu?: NavItem[]; // Nested navigation
	hidden?: boolean; // Optional visibility control
	roles?: string[]; // Optional role-based access
}

export const NAVIGATION_MENU: NavItem[] = [
	{
		label: 'Dashboard',
		icon: faDashboard,
		path: '/secure',
	},
	{
		label: 'Channels',
		icon: faRss,
		submenu: [
			{
				label: 'Whatsapp',
				icon: faWhatsapp,
				submenu: [
					{
						label: 'Accounts',
						path: '/secure/channel/wa',
					},
					{
						label: 'Templates',
						path: '/secure/channel/wa/template',
					},
				],
			},
			{
				label: 'Whatsapp Unofficial',
				icon: faWhatsapp,
				submenu: [
					{
						label: 'Accounts',
						path: '/secure/channel/wau',
					},
					{
						label: 'Account Groups',
						path: '/secure/channel/wau/group',
					},
					{
						label: 'Templates',
						path: '/secure/channel/wau/template',
					},
				],
			},
		],
	},
	{
		label: 'Customers',
		icon: faCircleUser,
		submenu: [
			{
				label: 'List',
				path: '/secure/customer',
			},
			{
				label: 'Groups',
				path: '/secure/customer/group',
			},
		],
	},
	{
		label: 'Campaigns',
		icon: faBullhorn,
		submenu: [
			{
				label: 'List',
				path: '/secure/campaign',
			},
		],
	},
	{
		label: 'Reports',
		icon: faChartPie,
		submenu: [
			{
				label: 'Message Log',
				path: '/secure/report/message-log',
			},
		],
	},
	{
		label: 'Setting',
		icon: faGear,
		submenu: [
			{
				label: 'Users',
				path: '/secure/setting/users',
			},
			{
				label: 'API Keys',
				path: '/secure/setting/api-keys',
			},
		],
	},
	/* {
		label: 'Accounts',
		icon: faCircleUser,
		submenu: [
			{
				label: 'Whatsapp',
				icon: faWhatsapp,
				submenu: [
					{
						label: 'Accounts',
						icon: faChevronRight,
						path: '/secure/account/wa',
					},
				],
			},
		],
	},
	{
		label: 'Campaign',
		icon: faFacebookMessenger,
		path: '/secure/campaign',
	},
	{
		label: 'Administration',
		icon: 'analytics',
		submenu: [
			{
				label: 'Menu Management',
				icon: 'view_list',
				path: '/secure/menu',
			},
			{
				label: 'Role Management',
				icon: 'view_list',
				path: '/secure/role',
			},
			{
				label: 'Organization Management',
				icon: 'view_list',
				path: '/secure/organization',
			},
		],
	}, */
];

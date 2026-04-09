import { BreadcrumbModel } from '@devkitify/angular-ui-kit';

/* MENUS */
const DASHBOARD_LINK: BreadcrumbModel = { label: 'Dashboard', url: '/secure' };
const ACCOUNT_WA_LINK: BreadcrumbModel = { label: 'WhatsApp Accounts', url: '/secure/channel/wa' };
const ACCOUNT_WAU_LINK: BreadcrumbModel = {
	label: 'WhatsApp Unofficial Accounts',
	url: '/secure/channel/wau',
};
const ACCOUNT_GROUP_LINK: BreadcrumbModel = {
	label: 'Customer Groups',
	url: '/secure/channel/wau/group',
};
const ACCOUNT_TEMPLATE_WA_LINK: BreadcrumbModel = {
	label: 'WhatsApp Templates',
	url: '/secure/channel/wau/template',
};
const ACCOUNT_TEMPLATE_WAU_LINK: BreadcrumbModel = {
	label: 'WhatsApp Unofficial Templates',
	url: '/secure/channel/wau/template',
};
const ACCOUNT_TEMPLATE_WAU_ADD_LINK: BreadcrumbModel = { label: 'New Template' };
const ACCOUNT_TEMPLATE_WAU_EDIT_LINK: BreadcrumbModel = { label: 'Edit Template' };
const CUSTOMER_LINK: BreadcrumbModel = { label: 'Customer List', url: '/secure/customer' };
const CUSTOMER_ADD_LINK: BreadcrumbModel = { label: 'New Customer' };
const CUSTOMER_EDIT_LINK: BreadcrumbModel = { label: 'Edit Customer' };
const CUSTOMER_GROUP_LINK: BreadcrumbModel = {
	label: 'Customer Groups',
	url: '/secure/customer/group',
};
const USERS_LINK: BreadcrumbModel = { label: 'Users List', url: '/secure/setting/users' };
const API_KEYS_LINK: BreadcrumbModel = { label: 'API Keys List', url: '/secure/setting/api-keys' };

/* BREADCRUMBS */
export const BREADCRUMBS = (path: string = '', id: string = ''): BreadcrumbModel[] => {
	const breadcrumbs = {
		'/secure': [DASHBOARD_LINK],
		/* WA */
		'/secure/channel/wa': [DASHBOARD_LINK, ACCOUNT_WA_LINK],
		'/secure/channel/wa/template': [DASHBOARD_LINK, ACCOUNT_TEMPLATE_WA_LINK],
		/* WAU */
		'/secure/channel/wau': [DASHBOARD_LINK, ACCOUNT_WAU_LINK],
		'/secure/channel/wau/group': [DASHBOARD_LINK, ACCOUNT_GROUP_LINK],
		'/secure/channel/wau/template': [DASHBOARD_LINK, ACCOUNT_TEMPLATE_WAU_LINK],
		'/secure/channel/wau/template/add': [
			DASHBOARD_LINK,
			ACCOUNT_TEMPLATE_WAU_LINK,
			ACCOUNT_TEMPLATE_WAU_ADD_LINK,
		],
		['/secure/channel/wau/template/edit/' + id]: [
			DASHBOARD_LINK,
			ACCOUNT_TEMPLATE_WAU_LINK,
			ACCOUNT_TEMPLATE_WAU_EDIT_LINK,
		],
		/* CUSTOMER */
		'/secure/customer': [DASHBOARD_LINK, CUSTOMER_LINK],
		'/secure/customer/add': [DASHBOARD_LINK, CUSTOMER_LINK, CUSTOMER_ADD_LINK],
		['/secure/customer/edit/' + id]: [DASHBOARD_LINK, CUSTOMER_LINK, CUSTOMER_EDIT_LINK],
		'/secure/customer/group': [DASHBOARD_LINK, CUSTOMER_GROUP_LINK],
		'/secure/setting/users': [DASHBOARD_LINK, USERS_LINK],
		'/secure/setting/api-keys': [DASHBOARD_LINK, API_KEYS_LINK],
	};

	return breadcrumbs[path];
};

/************ OLD **********/
// /* MENUS MENU */
// export const MENU_LIST_BREADCRUMB: BreadcrumbModel[] = [DASHBOARD_LINK, { label: 'Menus' }];

// /* USER MENU */
// export const USER_LIST_BREADCRUMB: BreadcrumbModel[] = [DASHBOARD_LINK, { label: 'Dashboard' }];

// /* ROLE MENU */
// export const ROLE_LIST_BREADCRUMB: BreadcrumbModel[] = [DASHBOARD_LINK, { label: 'Roles' }];

// /* ORGANIZATION MENU */
// export const ORGANIZATION_LIST_BREADCRUMB: BreadcrumbModel[] = [
// 	DASHBOARD_LINK,
// 	{ label: 'Organization' },
// ];

// /* CAMPAIGN MENU */
// export const CAMPAIGN_LIST_BREADCRUMB: BreadcrumbModel[] = [DASHBOARD_LINK, { label: 'Campaign' }];
/************ ./ OLD **********/

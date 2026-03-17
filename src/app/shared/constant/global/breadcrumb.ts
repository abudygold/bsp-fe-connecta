import { BreadcrumbModel } from '@devkitify/angular-ui-kit';

/* DASHBOARD MENU */
const DASHBOARD_LINK: BreadcrumbModel = { label: 'Dashboard', url: '/secure' };
export const DASHBOARD_BREADCRUMB: BreadcrumbModel[] = [{ label: 'Dashboard' }];

/* MENUS MENU */
export const MENU_LIST_BREADCRUMB: BreadcrumbModel[] = [DASHBOARD_LINK, { label: 'Menus' }];

/* USER MENU */
export const USER_LIST_BREADCRUMB: BreadcrumbModel[] = [DASHBOARD_LINK, { label: 'Dashboard' }];

/* ROLE MENU */
export const ROLE_LIST_BREADCRUMB: BreadcrumbModel[] = [DASHBOARD_LINK, { label: 'Roles' }];

/* ORGANIZATION MENU */
export const ORGANIZATION_LIST_BREADCRUMB: BreadcrumbModel[] = [
	DASHBOARD_LINK,
	{ label: 'Organization' },
];

/* CAMPAIGN MENU */
export const CAMPAIGN_LIST_BREADCRUMB: BreadcrumbModel[] = [DASHBOARD_LINK, { label: 'Campaign' }];

/* CHANNEL MENU */
export const CHANNEL_LIST_BREADCRUMB: BreadcrumbModel[] = [DASHBOARD_LINK, { label: 'Channels' }];

/* ACCOUNT WA MENU */
export const ACCOUNT_WA_LIST_BREADCRUMB: BreadcrumbModel[] = [
	DASHBOARD_LINK,
	{ label: 'Account WA' },
];

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
const CUSTOMER_SEND_MESSAGE_LINK: BreadcrumbModel = { label: 'Send Message' };
const CUSTOMER_GROUP_LINK: BreadcrumbModel = {
	label: 'Customer Groups',
	url: '/secure/customer/group',
};
const CAMPAIGN_LINK: BreadcrumbModel = { label: 'Campaign List', url: '/secure/campaign' };
const CAMPAIGN_ADD_LINK: BreadcrumbModel = { label: 'New Campaign' };
const CAMPAIGN_EDIT_LINK: BreadcrumbModel = { label: 'Edit Campaign' };
const USERS_LINK: BreadcrumbModel = { label: 'Users List', url: '/secure/setting/users' };
const API_KEYS_LINK: BreadcrumbModel = { label: 'API Keys List', url: '/secure/setting/api-keys' };
const MESSAGE_LOG_REPORT_LINK: BreadcrumbModel = {
	label: 'Message Log Report',
};

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
		['/secure/customer/send-message/' + id]: [
			DASHBOARD_LINK,
			CUSTOMER_LINK,
			CUSTOMER_SEND_MESSAGE_LINK,
		],
		'/secure/customer/group': [DASHBOARD_LINK, CUSTOMER_GROUP_LINK],
		/* CAMPAIGN */
		'/secure/campaign': [DASHBOARD_LINK, CAMPAIGN_LINK],
		'/secure/campaign/add': [DASHBOARD_LINK, CAMPAIGN_LINK, CAMPAIGN_ADD_LINK],
		['/secure/campaign/edit/' + id]: [DASHBOARD_LINK, CAMPAIGN_LINK, CAMPAIGN_EDIT_LINK],
		/* REPORT */
		'/secure/report/message-log': [DASHBOARD_LINK, MESSAGE_LOG_REPORT_LINK],
		/* SETTING */
		'/secure/setting/users': [DASHBOARD_LINK, USERS_LINK],
		'/secure/setting/api-keys': [DASHBOARD_LINK, API_KEYS_LINK],
	};

	return breadcrumbs[path];
};

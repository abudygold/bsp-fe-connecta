import { BreadcrumbModel } from '../model';

/* DASHBOARD MENU */
const DASHBOARD_LINK: BreadcrumbModel = { label: 'Dashboard', icon: 'dashboard', url: '/secure' };
export const DASHBOARD_BREADCRUMB: BreadcrumbModel[] = [{ label: 'Dashboard', icon: 'dashboard' }];

/* CHANNEL MENU */
export const WHATAPPS_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'WhatsApp Accounts', icon: 'chat' },
];

export const WHATAPPS_TEMPLATE_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'WhatsApp Templates', icon: 'chat' },
];

export const WHATAPPS_FLOW_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'WA Flows', icon: 'chat' },
];

export const INSTAGRAM_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Instagram Accounts', icon: 'chat' },
];

export const FACEBOOK_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Facebook Messenger Accounts', icon: 'chat' },
];

export const SMS_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'SMS Accounts', icon: 'chat' },
];

export const SMS_TEMPLATE_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'SMS Templates', icon: 'chat' },
];

export const EMAIL_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Email Accounts', icon: 'chat' },
];

export const EMAIL_TEMPLATE_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Email Templates', icon: 'chat' },
];

/* BROADCAST MENU */
export const BROADCAST_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Broadcast Messaging', icon: 'chat' },
];

/* CUSTOMER MENU */
export const CUSTOMER_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Customer List', icon: 'view_list' },
];

export const CUSTOMER_GROUP_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Customer Groups', icon: 'groups' },
];

/* FLOW BUILDER MENU */
export const FLOW_BUILDER_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Flow Builder', icon: 'account_tree' },
];

/* MENUS MENU */
export const MENU_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Menu Management', icon: 'view_list' },
];

/* ROLES MENU */
export const ROLE_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Role Management', icon: 'view_list' },
];

export const ROLE_FORM_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  {
    ...ROLE_LIST_BREADCRUMB[1],
    url: '',
  },
  { label: 'Form', icon: 'wysiwyg' },
];

/* ORGANIZATION MENU */
export const ORGANIZATION_LIST_BREADCRUMB: BreadcrumbModel[] = [
  DASHBOARD_LINK,
  { label: 'Organization Management', icon: 'view_list' },
];

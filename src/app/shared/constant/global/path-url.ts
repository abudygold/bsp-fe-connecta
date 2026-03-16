import { environment } from '../../../../environments/environment';

/* AUTH */
export const LOGIN_URL = `${environment.api.baseUrl}users/login`;
export const LOGOUT_URL = `${environment.api.baseUrl}users/logout`;
export const REFRESH_TOKEN_URL = `${environment.api.baseUrl}users/refresh`;

/* USERS */
export const USERS_URL = `${environment.api.baseUrl}users`;
export const INVITE_URL = `${environment.api.baseUrl}users/invite`;
export const SWITCH_ORG_URL = `${environment.api.baseUrl}users/switchorg`;

/* ORGS */
export const ORGS_URL = `${environment.api.baseUrl}orgs`;

/* MENUS */
export const MENUS_URL = `${environment.api.baseUrl}menus`;

/* ROLES */
export const ROLES_URL = `${environment.api.baseUrl}roles`;

/* CHANNELS */
export const CHANNELS_URL = `${environment.api.baseUrl}channels`;

/* ACCOUNTS */
export const ACCOUNTS_URL = `${environment.api.baseUrl}accounts`;

/* CAMPAIGN */
export const CAMPAIGN_URL = `${environment.api.baseUrl}campaign`;

import { environment } from '../../../../environments/environment';

/* AUTH */
export const LOGIN_URL = `${environment.api.baseUrl}users/login`;
export const LOGOUT_URL = `${environment.api.baseUrl}users/logout`;
export const REFRESH_TOKEN_URL = `${environment.api.baseUrl}users/refresh`;

/* ACCOUNTS */
export const ACCOUNTS_URL = `${environment.api.baseUrl}accounts`;
export const ACCOUNTS_GROUP_URL = `${environment.api.baseUrl}accgroup`;

/* CHANNEL */
export const CHANNEL_URL = `${environment.api.baseUrl}channels`;

/* CUSTOMER */
export const CUSTOMER_URL = `${environment.api.baseUrl}customer`;
export const CUSTOMER_GROUP_URL = `${environment.api.baseUrl}customergroup`;

/* SETTING */
export const API_KEYS_URL = `${environment.api.baseUrl}apikey`;

/* TEMPLATE */
export const TEMPLATE_URL = `${environment.api.baseUrl}wau/template`;

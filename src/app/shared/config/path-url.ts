import { environment } from '../../../environments/environment';

/* USERS */
export const LOGIN_URL = `${environment.api.baseUrl}users/login`;
export const LOGOUT_URL = `${environment.api.baseUrl}users/logout`;
export const REFRESH_TOKEN_URL = `${environment.api.baseUrl}users/refresh`;

/* ME */
export const ME_MENUS_URL = `${environment.api.baseUrl}me/menus`;

/* MENU */
export const MENU_URL = `${environment.api.baseUrl}menu`;
export const MENUS_URL = `${environment.api.baseUrl}menus`;
export const MENUS_TREE_URL = `${environment.api.baseUrl}menus/tree`;

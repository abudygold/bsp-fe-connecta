import { TableModel } from '@devkitify/angular-ui-kit';

/* API KEYS LIST */
export const API_KEYS_CUSTOM_TYPE = {
	selection: {
		type: 'custom',
	},
	token: {
		type: 'custom',
	},
	expiredDate: {
		type: 'date',
		format: 'd MMM, yyyy',
	},
	actions: {
		type: 'custom',
	},
};

export const API_KEYS_TABLE: TableModel = new TableModel();
API_KEYS_TABLE.columns = [
	{
		key: 'selection',
		label: '',
		sortable: false,
	},
	{
		key: 'name',
		label: 'Name',
		sortable: true,
	},
	{
		key: 'token',
		label: 'Token',
		sortable: true,
	},
	{
		key: 'expiredDate',
		label: 'Expired',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
API_KEYS_TABLE.sortActive = 'name';
API_KEYS_TABLE.sortDirection = 'asc';
API_KEYS_TABLE.isServerSide.set(true);
API_KEYS_TABLE.isPagination.set(true);

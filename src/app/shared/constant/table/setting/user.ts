import { TableModel } from '@devkitify/angular-ui-kit';

/* USERS LIST */
export const USERS_CUSTOM_TYPE = {
	actions: {
		type: 'custom',
	},
};

export const USERS_TABLE: TableModel = new TableModel();
USERS_TABLE.columns = [
	{
		key: 'name',
		label: 'Name',
		sortable: true,
	},
	{
		key: 'email',
		label: 'Email',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
USERS_TABLE.sortActive = 'name';
USERS_TABLE.sortDirection = 'asc';
USERS_TABLE.isServerSide.set(true);
USERS_TABLE.isPagination.set(true);

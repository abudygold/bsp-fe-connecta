import { TableModel } from '@devkitify/angular-ui-kit';

export const CUSTOM_TYPE_ROLE = {
	selection: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const ROLE_TABLE: TableModel = new TableModel();
ROLE_TABLE.columns = [
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
		key: 'orgId',
		label: 'Org ID',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
ROLE_TABLE.sortActive = 'name';
ROLE_TABLE.sortDirection = 'asc';
ROLE_TABLE.isServerSide.set(true);
ROLE_TABLE.isPagination.set(true);

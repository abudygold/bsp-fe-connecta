import { TableModel } from '@devkitify/angular-ui-kit';

export const CUSTOM_TYPE_ORGANIZATION = {
	selection: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const ORGANIZATION_TABLE: TableModel = new TableModel();
ORGANIZATION_TABLE.columns = [
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
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
ORGANIZATION_TABLE.sortActive = 'name';
ORGANIZATION_TABLE.sortDirection = 'asc';
ORGANIZATION_TABLE.isServerSide.set(true);
ORGANIZATION_TABLE.isPagination.set(true);

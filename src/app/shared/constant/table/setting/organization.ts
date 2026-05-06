import { TableModel } from '@devkitify/angular-ui-kit';

/* ORGANIZATION LIST */
export const ORGANIZATION_CUSTOM_TYPE = {
	actions: {
		type: 'custom',
	},
};

export const ORGANIZATION_TABLE: TableModel = new TableModel();
ORGANIZATION_TABLE.columns = [
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

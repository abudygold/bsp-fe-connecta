import { TableModel } from '@devkitify/angular-ui-kit';

/* CUSTOMER LIST */
export const CUSTOMER_CUSTOM_TYPE = {
	channels: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const CUSTOMER_TABLE: TableModel = new TableModel();
CUSTOMER_TABLE.columns = [
	{
		key: 'name',
		label: 'Name',
		sortable: true,
	},
	{
		key: 'channels',
		label: 'Channels',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CUSTOMER_TABLE.sortActive = 'name';
CUSTOMER_TABLE.sortDirection = 'asc';
CUSTOMER_TABLE.isServerSide.set(true);
CUSTOMER_TABLE.isPagination.set(true);

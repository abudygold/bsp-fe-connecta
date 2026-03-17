import { TableModel } from '@devkitify/angular-ui-kit';

export const CUSTOM_TYPE_CHANNEL = {
	selection: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const CHANNEL_TABLE: TableModel = new TableModel();
CHANNEL_TABLE.columns = [
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
CHANNEL_TABLE.sortActive = 'name';
CHANNEL_TABLE.sortDirection = 'asc';
CHANNEL_TABLE.isServerSide.set(true);
CHANNEL_TABLE.isPagination.set(true);

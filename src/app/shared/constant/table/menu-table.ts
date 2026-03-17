import { TableModel } from '@devkitify/angular-ui-kit';

export const CUSTOM_TYPE_MENU = {
	selection: {
		type: 'custom',
	},
	icon: {
		type: 'custom',
	},
	target: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const MENU_TABLE: TableModel = new TableModel();
MENU_TABLE.columns = [
	{
		key: 'selection',
		label: '',
		sortable: false,
	},
	{
		key: 'title',
		label: 'Title',
		sortable: true,
	},
	{
		key: 'parentTitle',
		label: 'Parent Title',
		sortable: false,
	},
	{
		key: 'target',
		label: 'Target',
		sortable: false,
	},
	{
		key: 'icon',
		label: 'Icon',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
MENU_TABLE.sortActive = 'title';
MENU_TABLE.sortDirection = 'asc';
MENU_TABLE.isServerSide.set(true);
MENU_TABLE.isPagination.set(true);

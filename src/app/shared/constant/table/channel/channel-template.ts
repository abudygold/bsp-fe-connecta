import { TableModel } from '@devkitify/angular-ui-kit';

export const CHANNEL_TEMPLATE_CUSTOM_TYPE = {
	name: {
		type: 'custom',
	},
	lang: {
		type: 'custom',
	},
	category: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

/* CHANNEL TEMPLATE WHATSAPP LIST */
export const CHANNEL_TEMPLATE_WA_TABLE: TableModel = new TableModel();
CHANNEL_TEMPLATE_WA_TABLE.columns = [
	{
		key: 'name',
		label: 'Name',
		sortable: true,
	},
	{
		key: 'lang',
		label: 'Lang',
		sortable: false,
	},
	{
		key: 'category',
		label: 'Category',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CHANNEL_TEMPLATE_WA_TABLE.sortActive = 'name';
CHANNEL_TEMPLATE_WA_TABLE.sortDirection = 'asc';
CHANNEL_TEMPLATE_WA_TABLE.isServerSide.set(true);
CHANNEL_TEMPLATE_WA_TABLE.isPagination.set(true);

/* CHANNEL TEMPLATE WHATSAPP UNOFICIAL LIST */
export const CHANNEL_TEMPLATE_WAU_TABLE: TableModel = new TableModel();
CHANNEL_TEMPLATE_WAU_TABLE.columns = [
	{
		key: 'name',
		label: 'Name',
		sortable: true,
	},
	{
		key: 'lang',
		label: 'Lang',
		sortable: false,
	},
	{
		key: 'category',
		label: 'Category',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CHANNEL_TEMPLATE_WAU_TABLE.sortActive = 'name';
CHANNEL_TEMPLATE_WAU_TABLE.sortDirection = 'asc';
CHANNEL_TEMPLATE_WAU_TABLE.isServerSide.set(true);
CHANNEL_TEMPLATE_WAU_TABLE.isPagination.set(true);

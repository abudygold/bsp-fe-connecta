import { TableModel } from '@devkitify/angular-ui-kit';

export const CUSTOM_TYPE_ACCOUNT_WA = {
	createdAt: {
		type: 'date',
		format: 'dd MMM yyyy',
	},
	isPublish: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const ACCOUNT_WA_TABLE: TableModel = new TableModel();
ACCOUNT_WA_TABLE.columns = [
	{
		key: 'title',
		label: 'Title',
		sortable: true,
	},
	{
		key: 'category',
		label: 'Category',
		sortable: true,
	},
	{
		key: 'authorName',
		label: 'Author',
		sortable: true,
	},
	{
		key: 'isPublish',
		label: 'Publish',
		sortable: true,
	},
	{
		key: 'createdAt',
		label: 'Created At',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
ACCOUNT_WA_TABLE.sortActive = 'title';
ACCOUNT_WA_TABLE.sortDirection = 'asc';
ACCOUNT_WA_TABLE.isServerSide.set(true);
ACCOUNT_WA_TABLE.isPagination.set(true);

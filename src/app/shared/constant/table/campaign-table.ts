import { TableModel } from '@devkitify/angular-ui-kit';

export const CUSTOM_TYPE_CAMPAIGN = {
	selection: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const CAMPAIGN_TABLE: TableModel = new TableModel();
CAMPAIGN_TABLE.columns = [
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
		key: 'accountId',
		label: 'Account Id',
		sortable: true,
	},
	{
		key: 'channel',
		label: 'Channel',
		sortable: true,
	},
	{
		key: 'targetType',
		label: 'Target Type',
		sortable: true,
	},
	{
		key: 'status',
		label: 'Status',
		sortable: true,
	},
	{
		key: 'created_at',
		label: 'Created At',
		sortable: true,
	},
	{
		key: 'created_by',
		label: 'Created By',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CAMPAIGN_TABLE.sortActive = 'name';
CAMPAIGN_TABLE.sortDirection = 'desc';
CAMPAIGN_TABLE.isServerSide.set(true);
CAMPAIGN_TABLE.isPagination.set(true);

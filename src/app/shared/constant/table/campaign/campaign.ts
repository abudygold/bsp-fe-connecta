import { TableModel } from '@devkitify/angular-ui-kit';

export const CAMPAIGN_CUSTOM_TYPE = {
	selection: {
		type: 'custom',
	},
	channel: {
		type: 'custom',
	},
	accountNo: {
		type: 'custom',
	},
	status: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

/* CAMPAIGN TABLE */
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
		key: 'channel',
		label: 'Channel',
		sortable: true,
	},
	{
		key: 'accountNo',
		label: 'Account No',
		sortable: true,
	},
	{
		key: 'created_at',
		label: 'Created Date',
		sortable: true,
	},
	{
		key: 'targetType',
		label: 'Target Type',
		sortable: true,
	},
	{
		key: 'creatorName',
		label: 'Creator',
		sortable: true,
	},
	{
		key: 'status',
		label: 'Status',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CAMPAIGN_TABLE.sortActive = 'accountName';
CAMPAIGN_TABLE.sortDirection = 'asc';
CAMPAIGN_TABLE.isServerSide.set(true);
CAMPAIGN_TABLE.isPagination.set(true);

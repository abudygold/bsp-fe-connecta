import { TableModel } from '@devkitify/angular-ui-kit';

export const CHANNEL_ACCOUNT_CUSTOM_TYPE = {
	status: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

/* CHANNEL ACCOUNT WHATSAPP */
export const CHANNEL_ACCOUNT_WA_TABLE: TableModel = new TableModel();
CHANNEL_ACCOUNT_WA_TABLE.columns = [
	{
		key: 'accountNo',
		label: 'Phone No',
		sortable: true,
	},
	{
		key: 'accountName',
		label: 'Display Name',
		sortable: true,
	},
	{
		key: 'nativeId',
		label: 'Native ID',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CHANNEL_ACCOUNT_WA_TABLE.sortActive = 'accountName';
CHANNEL_ACCOUNT_WA_TABLE.sortDirection = 'asc';
CHANNEL_ACCOUNT_WA_TABLE.isServerSide.set(true);
CHANNEL_ACCOUNT_WA_TABLE.isPagination.set(true);

/* CHANNEL ACCOUNT WHATSAPP UNOFFICIAL */
export const CHANNEL_ACCOUNT_WAU_TABLE: TableModel = new TableModel();
CHANNEL_ACCOUNT_WAU_TABLE.columns = [
	{
		key: 'accountNo',
		label: 'Phone No',
		sortable: true,
	},
	{
		key: 'accountName',
		label: 'Display Name',
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
CHANNEL_ACCOUNT_WAU_TABLE.sortActive = 'accountName';
CHANNEL_ACCOUNT_WAU_TABLE.sortDirection = 'asc';
CHANNEL_ACCOUNT_WAU_TABLE.isServerSide.set(true);
CHANNEL_ACCOUNT_WAU_TABLE.isPagination.set(true);

/* CHANNEL ACCOUNT SMS */
export const CHANNEL_ACCOUNT_SMS_TABLE: TableModel = new TableModel();
CHANNEL_ACCOUNT_SMS_TABLE.columns = [
	{
		key: 'accountNo',
		label: 'Phone No',
		sortable: true,
	},
	{
		key: 'accountName',
		label: 'Display Name',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CHANNEL_ACCOUNT_SMS_TABLE.sortActive = 'accountName';
CHANNEL_ACCOUNT_SMS_TABLE.sortDirection = 'asc';
CHANNEL_ACCOUNT_SMS_TABLE.isServerSide.set(true);
CHANNEL_ACCOUNT_SMS_TABLE.isPagination.set(true);

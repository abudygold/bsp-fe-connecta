import { TableModel } from '@devkitify/angular-ui-kit';

/* CHANNEL ACCOUNT GROUP WHATSAPP UNOFFICIAL TABLE */
export const CHANNEL_ACCOUNT_GROUP_CUSTOM_TYPE = {
	selection: {
		type: 'custom',
	},
	name: {
		type: 'custom',
	},
	members: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const CHANNEL_ACCOUNT_GROUP_WAU_TABLE: TableModel = new TableModel();
CHANNEL_ACCOUNT_GROUP_WAU_TABLE.columns = [
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
		key: 'members',
		label: 'Members',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CHANNEL_ACCOUNT_GROUP_WAU_TABLE.sortActive = 'name';
CHANNEL_ACCOUNT_GROUP_WAU_TABLE.sortDirection = 'asc';
CHANNEL_ACCOUNT_GROUP_WAU_TABLE.isServerSide.set(true);
CHANNEL_ACCOUNT_GROUP_WAU_TABLE.isPagination.set(true);

/* CHANNEL GROUP MEMBER LIST */
export const CHANNEL_ACCOUNT_GROUP_MEMBERS_CUSTOM_TYPE = {
	actions: {
		type: 'custom',
	},
};

export const CHANNEL_ACCOUNT_GROUP_MEMBERS_TABLE: TableModel = new TableModel();
CHANNEL_ACCOUNT_GROUP_MEMBERS_TABLE.columns = [
	{
		key: 'accountName',
		label: 'Account Name',
		sortable: true,
	},
	{
		key: 'accountNo',
		label: 'Account No',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CHANNEL_ACCOUNT_GROUP_MEMBERS_TABLE.isServerSide.set(false);
CHANNEL_ACCOUNT_GROUP_MEMBERS_TABLE.isPagination.set(false);

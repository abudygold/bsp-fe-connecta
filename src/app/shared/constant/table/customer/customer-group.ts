import { TableModel } from '@devkitify/angular-ui-kit';

/* CUSTOMER GROUP LIST */
export const CUSTOMER_GROUP_CUSTOM_TYPE = {
	actions: {
		type: 'custom',
	},
};

export const CUSTOMER_GROUP_TABLE: TableModel = new TableModel();
CUSTOMER_GROUP_TABLE.columns = [
	{
		key: 'name',
		label: 'Name',
		sortable: true,
	},
	{
		key: 'memberCount',
		label: 'Members',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CUSTOMER_GROUP_TABLE.sortActive = 'name';
CUSTOMER_GROUP_TABLE.sortDirection = 'asc';
CUSTOMER_GROUP_TABLE.isServerSide.set(true);
CUSTOMER_GROUP_TABLE.isPagination.set(true);

/* CUSTOMER GROUP MEMBERS LIST */
export const CUSTOMER_GROUP_MEMBERS_CUSTOM_TYPE = {
	contacts: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const CUSTOMER_GROUP_MEMBERS_TABLE: TableModel = new TableModel();
CUSTOMER_GROUP_MEMBERS_TABLE.columns = [
	{
		key: 'name',
		label: 'Name',
		sortable: true,
	},
	{
		key: 'contacts',
		label: 'Contacts',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CUSTOMER_GROUP_MEMBERS_TABLE.isServerSide.set(true);
CUSTOMER_GROUP_MEMBERS_TABLE.isPagination.set(true);

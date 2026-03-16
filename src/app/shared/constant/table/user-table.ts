import { TableModel } from '@devkitify/angular-ui-kit';

export const CUSTOM_TYPE_USER = {
	invoiceNumber: {
		type: 'custom',
	},
	paymentStatus: {
		type: 'custom',
	},
	totalAmount: {
		type: 'custom',
	},
	totalPaid: {
		type: 'custom',
	},
	remainingAmount: {
		type: 'custom',
	},
	bookingStatus: {
		type: 'custom',
	},
	actions: {
		type: 'custom',
	},
};

export const USER_TABLE: TableModel = new TableModel();
USER_TABLE.columns = [
	{
		key: 'invoiceNumber',
		label: 'Transaction Number',
		sortable: true,
	},
	{
		key: 'packageName',
		label: 'Package',
		sortable: true,
	},
	/* {
		key: 'mainJamaah',
		label: 'Main Jamaah',
		sortable: false,
	}, */
	{
		key: 'totalParticipant',
		label: 'Pax',
		sortable: false,
	},
	{
		key: 'totalAmount',
		label: 'Total',
		sortable: false,
	},
	{
		key: 'totalPaid',
		label: 'Paid',
		sortable: false,
	},
	{
		key: 'remainingAmount',
		label: 'Remaining',
		sortable: false,
	},
	{
		key: 'paymentStatus',
		label: 'Status',
		sortable: false,
	},
	{
		key: 'bookingStatus',
		label: 'Booking Status',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
USER_TABLE.sortActive = 'createdAt';
USER_TABLE.sortDirection = 'asc';
USER_TABLE.isServerSide.set(true);
USER_TABLE.isPagination.set(true);

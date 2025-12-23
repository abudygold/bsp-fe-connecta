import { TableModel } from '../../model';
import { EXAMPLE_DUMMY_DATA } from '../dummy-data';

export const CHANNEL_WHATSAPP_TABLE: TableModel = new TableModel();
CHANNEL_WHATSAPP_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Profile Image',
    sortable: true,
  },
  {
    key: 'statusName',
    label: 'Business Name',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Broadcast Name',
    sortable: false,
  },
  {
    key: 'total',
    label: 'Account Name',
    sortable: true,
  },
  {
    key: 'total1',
    label: 'Account Number',
    sortable: true,
  },
  {
    key: 'total2',
    label: 'WABA ID',
    sortable: true,
  },
  {
    key: 'total3',
    label: 'Phone ID',
    sortable: true,
  },
  {
    key: 'total4',
    label: 'Created Date',
    sortable: true,
  },
  {
    key: 'totalf',
    label: 'Updated Date',
    sortable: true,
  },
  {
    key: 'totalg',
    label: 'Status',
    sortable: true,
  },
  {
    key: 'totalh',
    label: 'Approved Date',
    sortable: true,
  },
  {
    key: 'totalc',
    label: 'Rejected Date',
    sortable: true,
  },
  {
    key: 'totalu',
    label: 'Reject Reason',
    sortable: true,
  },
  {
    key: 'totali',
    label: 'Account Status',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CHANNEL_WHATSAPP_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CHANNEL_WHATSAPP_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CHANNEL_WHATSAPP_TABLE.sortActive = 'name';
CHANNEL_WHATSAPP_TABLE.sortDirection = 'asc';
CHANNEL_WHATSAPP_TABLE.isHttpPagination.set(false);
CHANNEL_WHATSAPP_TABLE.generateDataType();
CHANNEL_WHATSAPP_TABLE.dataType = {
  ...CHANNEL_WHATSAPP_TABLE.dataType,
  createdDate: {
    type: 'date',
    format: 'M/d/yyyy hh:mma',
  },
  statusName: {
    type: 'custom',
  },
  selection: {
    type: 'custom',
  },
  total: {
    type: 'currency',
    currency: 'IDR',
    locale: 'id-ID',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
  actions: {
    type: 'custom',
  },
};

export const CHANNEL_WHATSAPP_TEMPLATE_TABLE: TableModel = new TableModel();
CHANNEL_WHATSAPP_TEMPLATE_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Template Name',
    sortable: true,
  },
  {
    key: 'statusName',
    label: 'Category',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Created Date',
    sortable: false,
  },
  {
    key: 'total',
    label: 'Waba ID',
    sortable: true,
  },
  {
    key: 'total1',
    label: 'Language',
    sortable: true,
  },
  {
    key: 'total2',
    label: 'TTL',
    sortable: true,
  },
  {
    key: 'total3',
    label: 'Status',
    sortable: true,
  },
  {
    key: 'total4',
    label: 'Meta API',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CHANNEL_WHATSAPP_TEMPLATE_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CHANNEL_WHATSAPP_TEMPLATE_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CHANNEL_WHATSAPP_TEMPLATE_TABLE.sortActive = 'name';
CHANNEL_WHATSAPP_TEMPLATE_TABLE.sortDirection = 'asc';
CHANNEL_WHATSAPP_TEMPLATE_TABLE.isHttpPagination.set(false);
CHANNEL_WHATSAPP_TEMPLATE_TABLE.generateDataType();
CHANNEL_WHATSAPP_TEMPLATE_TABLE.dataType = {
  ...CHANNEL_WHATSAPP_TEMPLATE_TABLE.dataType,
  createdDate: {
    type: 'date',
    format: 'M/d/yyyy hh:mma',
  },
  statusName: {
    type: 'custom',
  },
  selection: {
    type: 'custom',
  },
  total: {
    type: 'currency',
    currency: 'IDR',
    locale: 'id-ID',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
  actions: {
    type: 'custom',
  },
};

export const CHANNEL_WHATSAPP_FLOW_TABLE: TableModel = new TableModel();
CHANNEL_WHATSAPP_FLOW_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Flow ID',
    sortable: true,
  },
  {
    key: 'statusName',
    label: 'Flow Name',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Categories',
    sortable: false,
  },
  {
    key: 'total',
    label: 'Created Date',
    sortable: true,
  },
  {
    key: 'total1',
    label: 'Status',
    sortable: true,
  },
  {
    key: 'total2',
    label: 'Published Date',
    sortable: true,
  },
  {
    key: 'total3',
    label: 'Updated Date',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CHANNEL_WHATSAPP_FLOW_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CHANNEL_WHATSAPP_FLOW_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CHANNEL_WHATSAPP_FLOW_TABLE.sortActive = 'name';
CHANNEL_WHATSAPP_FLOW_TABLE.sortDirection = 'asc';
CHANNEL_WHATSAPP_FLOW_TABLE.isHttpPagination.set(false);
CHANNEL_WHATSAPP_FLOW_TABLE.generateDataType();
CHANNEL_WHATSAPP_FLOW_TABLE.dataType = {
  ...CHANNEL_WHATSAPP_FLOW_TABLE.dataType,
  createdDate: {
    type: 'date',
    format: 'M/d/yyyy hh:mma',
  },
  statusName: {
    type: 'custom',
  },
  selection: {
    type: 'custom',
  },
  total: {
    type: 'currency',
    currency: 'IDR',
    locale: 'id-ID',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
  actions: {
    type: 'custom',
  },
};

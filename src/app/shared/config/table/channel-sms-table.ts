import { TableModel } from '../../model';
import { EXAMPLE_DUMMY_DATA } from '../dummy-data';

export const CHANNEL_SMS_TABLE: TableModel = new TableModel();
CHANNEL_SMS_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Sender',
    sortable: true,
  },
  {
    key: 'statusName',
    label: 'Sender Type',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Created Date',
    sortable: false,
  },
  {
    key: 'total',
    label: 'Updated Date',
    sortable: true,
  },
  {
    key: 'total1',
    label: 'Status',
    sortable: true,
  },
  {
    key: 'total2',
    label: 'Approved Date',
    sortable: true,
  },
  {
    key: 'total3',
    label: 'Rejected Date',
    sortable: true,
  },
  {
    key: 'total4',
    label: 'Reject Reason',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CHANNEL_SMS_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CHANNEL_SMS_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CHANNEL_SMS_TABLE.sortActive = 'name';
CHANNEL_SMS_TABLE.sortDirection = 'asc';
CHANNEL_SMS_TABLE.isHttpPagination.set(false);
CHANNEL_SMS_TABLE.generateDataType();
CHANNEL_SMS_TABLE.dataType = {
  ...CHANNEL_SMS_TABLE.dataType,
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

export const CHANNEL_SMS_TEMPLATE_TABLE: TableModel = new TableModel();
CHANNEL_SMS_TEMPLATE_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Message Template Name',
    sortable: true,
  },
  {
    key: 'statusName',
    label: 'Template Type',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Created Date',
    sortable: false,
  },
  {
    key: 'total',
    label: 'Updated Date',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CHANNEL_SMS_TEMPLATE_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CHANNEL_SMS_TEMPLATE_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CHANNEL_SMS_TEMPLATE_TABLE.sortActive = 'name';
CHANNEL_SMS_TEMPLATE_TABLE.sortDirection = 'asc';
CHANNEL_SMS_TEMPLATE_TABLE.isHttpPagination.set(false);
CHANNEL_SMS_TEMPLATE_TABLE.generateDataType();
CHANNEL_SMS_TEMPLATE_TABLE.dataType = {
  ...CHANNEL_SMS_TEMPLATE_TABLE.dataType,
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

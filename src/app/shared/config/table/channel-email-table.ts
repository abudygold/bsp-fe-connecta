import { TableModel } from '../../model';
import { EXAMPLE_DUMMY_DATA } from '../dummy-data';

export const CHANNEL_EMAIL_TABLE: TableModel = new TableModel();
CHANNEL_EMAIL_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Domain Name',
    sortable: true,
  },
  {
    key: 'statusName',
    label: 'Status',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Created Date',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CHANNEL_EMAIL_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CHANNEL_EMAIL_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CHANNEL_EMAIL_TABLE.sortActive = 'name';
CHANNEL_EMAIL_TABLE.sortDirection = 'asc';
CHANNEL_EMAIL_TABLE.isHttpPagination.set(false);
CHANNEL_EMAIL_TABLE.generateDataType();
CHANNEL_EMAIL_TABLE.dataType = {
  ...CHANNEL_EMAIL_TABLE.dataType,
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


export const CHANNEL_EMAIL_TEMPLATE_TABLE: TableModel = new TableModel();
CHANNEL_EMAIL_TEMPLATE_TABLE.columns = [
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
    label: 'Template Type',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Created Date',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CHANNEL_EMAIL_TEMPLATE_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CHANNEL_EMAIL_TEMPLATE_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CHANNEL_EMAIL_TEMPLATE_TABLE.sortActive = 'name';
CHANNEL_EMAIL_TEMPLATE_TABLE.sortDirection = 'asc';
CHANNEL_EMAIL_TEMPLATE_TABLE.isHttpPagination.set(false);
CHANNEL_EMAIL_TEMPLATE_TABLE.generateDataType();
CHANNEL_EMAIL_TEMPLATE_TABLE.dataType = {
  ...CHANNEL_EMAIL_TEMPLATE_TABLE.dataType,
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

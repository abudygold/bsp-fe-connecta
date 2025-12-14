import { TableModel } from '../../model';
import { EXAMPLE_DUMMY_DATA } from '../dummy-data';

export const CHANNEL_FACEBOOK_TABLE: TableModel = new TableModel();
CHANNEL_FACEBOOK_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Business Name',
    sortable: true,
  },
  {
    key: 'statusName',
    label: 'Account Name',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Account No',
    sortable: false,
  },
  {
    key: 'total',
    label: 'Status',
    sortable: true,
  },
  {
    key: 'total1',
    label: 'Created Date',
    sortable: true,
  },
  {
    key: 'total2',
    label: 'Updated Date',
    sortable: true,
  },
  {
    key: 'total3',
    label: 'Approved Date',
    sortable: true,
  },
  {
    key: 'total4',
    label: 'Rejected Date',
    sortable: true,
  },
  {
    key: 'totalf',
    label: 'Reject Reason',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CHANNEL_FACEBOOK_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CHANNEL_FACEBOOK_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CHANNEL_FACEBOOK_TABLE.sortActive = 'name';
CHANNEL_FACEBOOK_TABLE.sortDirection = 'asc';
CHANNEL_FACEBOOK_TABLE.isHttpPagination.set(false);
CHANNEL_FACEBOOK_TABLE.generateDataType();
CHANNEL_FACEBOOK_TABLE.dataType = {
  ...CHANNEL_FACEBOOK_TABLE.dataType,
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

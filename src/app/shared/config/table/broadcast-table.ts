import { TableModel } from '../../model';
import { EXAMPLE_DUMMY_DATA } from '../dummy-data';

export const BROADCAST_TABLE: TableModel = new TableModel();
BROADCAST_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Broadcast ID',
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
    label: 'Template Name',
    sortable: true,
  },
  {
    key: 'total1',
    label: 'Channel',
    sortable: true,
  },
  {
    key: 'total2',
    label: 'Status',
    sortable: true,
  },
  {
    key: 'total3',
    label: 'Number Count',
    sortable: true,
  },
  {
    key: 'total4',
    label: 'On Progress',
    sortable: true,
  },
  {
    key: 'totalf',
    label: 'Sent',
    sortable: true,
  },
  {
    key: 'totalg',
    label: 'Delivered',
    sortable: true,
  },
  {
    key: 'totalh',
    label: 'Read',
    sortable: true,
  },
  {
    key: 'totalc',
    label: 'Failed',
    sortable: true,
  },
  {
    key: 'totalu',
    label: 'Repeat Count',
    sortable: true,
  },
  {
    key: 'totali',
    label: 'Start Date',
    sortable: true,
  },
  {
    key: 'totalo',
    label: 'End Date',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
BROADCAST_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
BROADCAST_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
BROADCAST_TABLE.sortActive = 'name';
BROADCAST_TABLE.sortDirection = 'asc';
BROADCAST_TABLE.isHttpPagination.set(false);
BROADCAST_TABLE.generateDataType();
BROADCAST_TABLE.dataType = {
  ...BROADCAST_TABLE.dataType,
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

import { TableModel } from '../../model';
import { EXAMPLE_DUMMY_DATA } from '../dummy-data';

export const FLOW_BUILDER_TABLE: TableModel = new TableModel();
FLOW_BUILDER_TABLE.columns = [
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
    label: 'Project Name',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Keyword',
    sortable: false,
  },
  {
    key: 'total',
    label: 'Published',
    sortable: true,
  },
  {
    key: 'total1',
    label: 'Publish Date',
    sortable: true,
  },
  {
    key: 'total2',
    label: 'Download QR',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
FLOW_BUILDER_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
FLOW_BUILDER_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
FLOW_BUILDER_TABLE.sortActive = 'name';
FLOW_BUILDER_TABLE.sortDirection = 'asc';
FLOW_BUILDER_TABLE.isHttpPagination.set(false);
FLOW_BUILDER_TABLE.generateDataType();
FLOW_BUILDER_TABLE.dataType = {
  ...FLOW_BUILDER_TABLE.dataType,
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

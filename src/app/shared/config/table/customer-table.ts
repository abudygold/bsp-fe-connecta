import { TableModel } from '../../model';
import { EXAMPLE_DUMMY_DATA } from '../dummy-data';

export const CUSTOMER_TABLE: TableModel = new TableModel();
CUSTOMER_TABLE.columns = [
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
    label: 'Name',
    sortable: true,
  },
  {
    key: 'total1',
    label: 'Channel',
    sortable: true,
  },
  {
    key: 'total2',
    label: 'Customer Group',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CUSTOMER_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CUSTOMER_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CUSTOMER_TABLE.sortActive = 'name';
CUSTOMER_TABLE.sortDirection = 'asc';
CUSTOMER_TABLE.isHttpPagination.set(false);
CUSTOMER_TABLE.generateDataType();
CUSTOMER_TABLE.dataType = {
  ...CUSTOMER_TABLE.dataType,
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

import { TableModel } from '../../model';
import { EXAMPLE_DUMMY_DATA } from '../dummy-data';

export const CUSTOMER_GROUP_TABLE: TableModel = new TableModel();
CUSTOMER_GROUP_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'statusName',
    label: 'Business Name',
    sortable: true,
  },
  {
    key: 'createdDate',
    label: 'Cust. Group Name',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
CUSTOMER_GROUP_TABLE.dataTotal = EXAMPLE_DUMMY_DATA.length;
CUSTOMER_GROUP_TABLE.dataSource = EXAMPLE_DUMMY_DATA;
CUSTOMER_GROUP_TABLE.sortActive = 'name';
CUSTOMER_GROUP_TABLE.sortDirection = 'asc';
CUSTOMER_GROUP_TABLE.isHttpPagination.set(false);
CUSTOMER_GROUP_TABLE.generateDataType();
CUSTOMER_GROUP_TABLE.dataType = {
  ...CUSTOMER_GROUP_TABLE.dataType,
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

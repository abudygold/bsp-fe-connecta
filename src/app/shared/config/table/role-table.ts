import { TableModel } from '../../model';

export const ROLE_TABLE: TableModel = new TableModel();
ROLE_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true,
  },
  {
    key: 'orgId',
    label: 'Org ID',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
ROLE_TABLE.sortActive = 'name';
ROLE_TABLE.sortDirection = 'asc';
ROLE_TABLE.isHttpPagination.set(true);
ROLE_TABLE.generateDataType();
ROLE_TABLE.dataType = {
  ...ROLE_TABLE.dataType,
  selection: {
    type: 'custom',
  },
  actions: {
    type: 'custom',
  },
};

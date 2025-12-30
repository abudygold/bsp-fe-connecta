import { TableModel } from '../../model';

export const ORGANIZATION_TABLE: TableModel = new TableModel();
ORGANIZATION_TABLE.columns = [
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
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
ORGANIZATION_TABLE.sortActive = 'name';
ORGANIZATION_TABLE.sortDirection = 'asc';
ORGANIZATION_TABLE.isHttpPagination.set(true);
ORGANIZATION_TABLE.generateDataType();
ORGANIZATION_TABLE.dataType = {
  ...ORGANIZATION_TABLE.dataType,
  selection: {
    type: 'custom',
  },
  actions: {
    type: 'custom',
  },
};

import { TableModel } from '../../model';

export const MENU_TABLE: TableModel = new TableModel();
MENU_TABLE.columns = [
  {
    key: 'selection',
    label: '',
    sortable: false,
  },
  {
    key: 'title',
    label: 'Title',
    sortable: true,
  },
  {
    key: 'target',
    label: 'Target',
    sortable: true,
  },
  {
    key: 'icon',
    label: 'Icon',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
  },
];
MENU_TABLE.sortActive = 'title';
MENU_TABLE.sortDirection = 'asc';
MENU_TABLE.isHttpPagination.set(true);
MENU_TABLE.generateDataType();
MENU_TABLE.dataType = {
  ...MENU_TABLE.dataType,
  selection: {
    type: 'custom',
  },
  actions: {
    type: 'custom',
  },
};

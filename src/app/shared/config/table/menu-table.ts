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
    key: 'parentTitle',
    label: 'Parent Title',
    sortable: false,
  },
  {
    key: 'target',
    label: 'Target',
    sortable: false,
  },
  {
    key: 'icon',
    label: 'Icon',
    sortable: false,
  },
  {
    key: 'order',
    label: 'Order',
    sortable: false,
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
  icon: {
    type: 'custom',
  },
  target: {
    type: 'custom',
  },
  actions: {
    type: 'custom',
  },
};

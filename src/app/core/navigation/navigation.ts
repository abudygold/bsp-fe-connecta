export interface NavItem {
  label: string;
  icon?: string;
  url?: string; // External link
  path?: string; // Internal router link
  submenu?: NavItem[]; // Nested navigation
  hidden?: boolean; // Optional visibility control
  roles?: string[]; // Optional role-based access
}

export const NAVIGATION_MENU: NavItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/secure',
  },
  {
    label: 'Channels',
    icon: 'rss_feed',
    submenu: [
      {
        label: 'Whatsapp',
        icon: 'send',
        submenu: [
          {
            label: 'Whatsapp Accounts',
            icon: 'view_list',
            path: '/secure/whatsapp',
          },
          {
            label: 'Whatsapp Templates',
            icon: 'table_chart',
            path: '/secure/whatsapp/template',
          },
          {
            label: 'Whatsapp Flows',
            icon: 'account_tree',
            path: '/secure/whatsapp/flow',
          },
        ],
      },
      {
        label: 'Instagram',
        icon: 'send',
        submenu: [
          {
            label: 'Instagram Accounts',
            icon: 'view_list',
            path: '/secure/instagram',
          },
        ],
      },
      {
        label: 'Facebook',
        icon: 'send',
        submenu: [
          {
            label: 'Facebook Accounts',
            icon: 'view_list',
            path: '/secure/facebook',
          },
        ],
      },
      {
        label: 'SMS',
        icon: 'sms',
        submenu: [
          {
            label: 'SMS Accounts',
            icon: 'view_list',
            path: '/secure/sms',
          },
          {
            label: 'SMS Templates',
            icon: 'table_chart',
            path: '/secure/sms/template',
          },
        ],
      },
      {
        label: 'Email',
        icon: 'mail',
        submenu: [
          {
            label: 'Email Accounts',
            icon: 'view_list',
            path: '/secure/email',
          },
          {
            label: 'Email Templates',
            icon: 'table_chart',
            path: '/secure/email/template',
          },
        ],
      },
    ],
  },
  {
    label: 'Customer',
    icon: 'account_box',
    submenu: [
      {
        label: 'Customer List',
        icon: 'view_list',
        path: '/secure/customer',
      },
      {
        label: 'Customer Groups',
        icon: 'groups',
        path: '/secure/customer/group',
      },
    ],
  },
  {
    label: 'Broadcast Messaging',
    icon: 'chat',
    path: '/secure/broadcast',
  },
  {
    label: 'Flow Builder',
    icon: 'account_tree',
    url: 'https://your-support-page.com',
  },
  {
    label: 'Reports',
    icon: 'analytics',
    submenu: [
      {
        label: 'Sales Report',
        icon: 'bar_chart',
        path: '/reports/sales',
      },
      {
        label: 'Customer Report',
        icon: 'bar_chart',
        path: '/reports/customers',
      },
    ],
  },
];

import { Routes } from '@angular/router';
import {
  EMAIL_LIST_BREADCRUMB,
  EMAIL_TEMPLATE_BREADCRUMB,
  FACEBOOK_LIST_BREADCRUMB,
  INSTAGRAM_LIST_BREADCRUMB,
  SMS_LIST_BREADCRUMB,
  SMS_TEMPLATE_BREADCRUMB,
  WHATAPPS_FLOW_BREADCRUMB,
  WHATAPPS_LIST_BREADCRUMB,
  WHATAPPS_TEMPLATE_BREADCRUMB,
} from '../../shared/config';

export const CHANNEL_ROUTES: Routes = [
  {
    path: 'whatsapp',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/channels/whatsapps/page/whatsapps-list/whatsapps-list').then(
            (m) => m.WhatsappsList,
          ),
        data: {
          breadcrumb: WHATAPPS_LIST_BREADCRUMB,
        },
      },
      {
        path: 'template',
        loadComponent: () =>
          import('../../pages/channels/whatsapps/page/whatsapps-template/whatsapps-template').then(
            (m) => m.WhatsappsTemplate,
          ),
        data: {
          breadcrumb: WHATAPPS_TEMPLATE_BREADCRUMB,
        },
      },
      {
        path: 'flow',
        loadComponent: () =>
          import('../../pages/channels/whatsapps/page/whatsapps-flow/whatsapps-flow').then(
            (m) => m.WhatsappsFlow,
          ),
        data: {
          breadcrumb: WHATAPPS_FLOW_BREADCRUMB,
        },
      },
    ],
  },
  {
    path: 'instagram',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/channels/instagram/page/instagram-list/instagram-list').then(
            (m) => m.InstagramList,
          ),
        data: {
          breadcrumb: INSTAGRAM_LIST_BREADCRUMB,
        },
      },
    ],
  },
  {
    path: 'facebook',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/channels/facebook/page/facebook-list/facebook-list').then(
            (m) => m.FacebookList,
          ),
        data: {
          breadcrumb: FACEBOOK_LIST_BREADCRUMB,
        },
      },
    ],
  },
  {
    path: 'sms',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/channels/sms/page/sms-list/sms-list').then((m) => m.SmsList),
        data: {
          breadcrumb: SMS_LIST_BREADCRUMB,
        },
      },
      {
        path: 'template',
        loadComponent: () =>
          import('../../pages/channels/sms/page/sms-template/sms-template').then(
            (m) => m.SmsTemplate,
          ),
        data: {
          breadcrumb: SMS_TEMPLATE_BREADCRUMB,
        },
      },
    ],
  },
  {
    path: 'email',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/channels/email/page/email-list/email-list').then((m) => m.EmailList),
        data: {
          breadcrumb: EMAIL_LIST_BREADCRUMB,
        },
      },
      {
        path: 'template',
        loadComponent: () =>
          import('../../pages/channels/email/page/email-template/email-template').then(
            (m) => m.EmailTemplate,
          ),
        data: {
          breadcrumb: EMAIL_TEMPLATE_BREADCRUMB,
        },
      },
    ],
  },
];

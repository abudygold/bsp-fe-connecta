import { Routes } from '@angular/router';
import {
  EMAIL_LIST_BREADCRUMB,
  EMAIL_LIST_TITLE,
  EMAIL_TEMPLATE_BREADCRUMB,
  EMAIL_TEMPLATE_TITLE,
  FACEBOOK_LIST_BREADCRUMB,
  FACEBOOK_LIST_TITLE,
  INSTAGRAM_LIST_BREADCRUMB,
  INSTAGRAM_LIST_TITLE,
  SMS_LIST_BREADCRUMB,
  SMS_LIST_TITLE,
  SMS_TEMPLATE_BREADCRUMB,
  SMS_TEMPLATE_TITLE,
  WHATAPPS_FLOW_BREADCRUMB,
  WHATAPPS_FLOW_TITLE,
  WHATAPPS_LIST_BREADCRUMB,
  WHATAPPS_LIST_TITLE,
  WHATAPPS_TEMPLATE_BREADCRUMB,
  WHATAPPS_TEMPLATE_TITLE,
} from '../../shared/config';

export const CHANNEL_ROUTES: Routes = [
  {
    path: 'whatsapp',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../pages/channel/whatsapps/page/whatsapp-list/whatsapp-list').then(
            (m) => m.WhatsappList,
          ),
        data: {
          breadcrumb: WHATAPPS_LIST_BREADCRUMB,
          title: WHATAPPS_LIST_TITLE,
        },
      },
      {
        path: 'template',
        loadComponent: () =>
          import('../../pages/channel/whatsapps/page/whatsapp-template/whatsapp-template').then(
            (m) => m.WhatsappTemplate,
          ),
        data: {
          breadcrumb: WHATAPPS_TEMPLATE_BREADCRUMB,
          title: WHATAPPS_TEMPLATE_TITLE,
        },
      },
      {
        path: 'flow',
        loadComponent: () =>
          import('../../pages/channel/whatsapps/page/whatsapp-flow/whatsapp-flow').then(
            (m) => m.WhatsappsFlow,
          ),
        data: {
          breadcrumb: WHATAPPS_FLOW_BREADCRUMB,
          title: WHATAPPS_FLOW_TITLE,
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
          import('../../pages/channel/instagram/page/instagram-list/instagram-list').then(
            (m) => m.InstagramList,
          ),
        data: {
          breadcrumb: INSTAGRAM_LIST_BREADCRUMB,
          title: INSTAGRAM_LIST_TITLE,
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
          import('../../pages/channel/facebook/page/facebook-list/facebook-list').then(
            (m) => m.FacebookList,
          ),
        data: {
          breadcrumb: FACEBOOK_LIST_BREADCRUMB,
          title: FACEBOOK_LIST_TITLE,
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
          import('../../pages/channel/sms/page/sms-list/sms-list').then((m) => m.SmsList),
        data: {
          breadcrumb: SMS_LIST_BREADCRUMB,
          title: SMS_LIST_TITLE,
        },
      },
      {
        path: 'template',
        loadComponent: () =>
          import('../../pages/channel/sms/page/sms-template/sms-template').then(
            (m) => m.SmsTemplate,
          ),
        data: {
          breadcrumb: SMS_TEMPLATE_BREADCRUMB,
          title: SMS_TEMPLATE_TITLE,
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
          import('../../pages/channel/email/page/email-list/email-list').then((m) => m.EmailList),
        data: {
          breadcrumb: EMAIL_LIST_BREADCRUMB,
          title: EMAIL_LIST_TITLE,
        },
      },
      {
        path: 'template',
        loadComponent: () =>
          import('../../pages/channel/email/page/email-template/email-template').then(
            (m) => m.EmailTemplate,
          ),
        data: {
          breadcrumb: EMAIL_TEMPLATE_BREADCRUMB,
          title: EMAIL_TEMPLATE_TITLE,
        },
      },
    ],
  },
];

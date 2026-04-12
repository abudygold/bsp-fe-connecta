import { Routes } from '@angular/router';

export const REPORT_ROUTES: Routes = [
	{
		path: 'report',
		children: [
			{
				path: 'message-log',
				loadComponent: () =>
					import('./page/report-message-log-list').then((m) => m.ReportMessageLogList),
			},
		],
	},
];

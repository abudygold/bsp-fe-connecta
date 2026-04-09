import { Component, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { StatusBadge } from '../../../../shared/components/status-badge';
import { ACCOUNTS_URL, FORM_SM_DIALOG_CONFIG } from '../../../../shared/constant/global';
import {
	CHANNEL_ACCOUNT_CUSTOM_TYPE,
	CHANNEL_ACCOUNT_WA_TABLE,
	CHANNEL_ACCOUNT_WAU_TABLE,
} from '../../../../shared/constant/table/channel';
import { ChannelAccountWAUForm } from '../../dialog/channel-account-wau-form';

@Component({
	selector: 'app-channel-account-list',
	imports: [
		Table,
		Search,
		Button,
		StatusBadge,
		MatIconModule,
		MatCheckboxModule,
		FontAwesomeModule,
	],
	templateUrl: './channel-account-list.html',
	styleUrl: './channel-account-list.css',
})
export class ChannelAccountList extends BaseTable {
	channel = signal<string>('');

	constructor() {
		// Default WA Channel
		super(ACCOUNTS_URL, CHANNEL_ACCOUNT_WA_TABLE, CHANNEL_ACCOUNT_CUSTOM_TYPE, false);
		this.#initChannel();

		this.tableModel.filters = {
			...this.tableModel.filters,
			...{ channel: this.channel() },
		};
		this.fetchData();
	}

	#initChannel(): void {
		const path = this.router.url.split('/');
		this.channel.set(path.at(-1)?.toUpperCase() || '');

		if (this.channel() === 'WAU') {
			this.tableModel = CHANNEL_ACCOUNT_WAU_TABLE;
		}

		this.initAddButton('Add New Account', () => this.openDialog());
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(ChannelAccountWAUForm, {
			...FORM_SM_DIALOG_CONFIG,
			data: {
				row: data,
				channel: this.channel(),
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;

			this.fetchData();
		});
	}
}

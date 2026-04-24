import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { StatusBadge } from '../../../../shared/components/status-badge';
import { ACCOUNTS_URL, FORM_SM_DIALOG_CONFIG } from '../../../../shared/constant/global';
import {
	CHANNEL_ACCOUNT_CUSTOM_TYPE,
	CHANNEL_ACCOUNT_SMS_TABLE,
	CHANNEL_ACCOUNT_WA_TABLE,
	CHANNEL_ACCOUNT_WAU_TABLE,
} from '../../../../shared/constant/table/channel';
import { ChannelAccountForm } from '../../dialog/channel-account-form';

@Component({
	selector: 'app-channel-account-list',
	imports: [Table, Search, Button, StatusBadge, MatIconModule, FontAwesomeModule],
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

		switch (this.channel()) {
			case 'WAU':
				this.tableModel = CHANNEL_ACCOUNT_WAU_TABLE;
				break;
			case 'SMS':
				this.tableModel = CHANNEL_ACCOUNT_SMS_TABLE;
				break;
		}

		this.initAddButton('New Account', () => this.openDialog());
	}

	#initTitle(row: any): string {
		switch (this.channel()) {
			case 'WAU':
				return row ? 'Edit WhatsApp Unofficial Account' : 'Add WhatsApp Unofficial Account';
			case 'SMS':
				return row ? 'Edit SMS Account' : 'Add SMS Account';
			default:
				return row ? `Edit ${this.channel()} Account` : `Add ${this.channel()} Account`;
		}
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(ChannelAccountForm, {
			...FORM_SM_DIALOG_CONFIG,
			data: {
				row: data,
				channel: this.channel(),
				title: this.#initTitle(data),
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;
			this.fetchData();
		});
	}
}

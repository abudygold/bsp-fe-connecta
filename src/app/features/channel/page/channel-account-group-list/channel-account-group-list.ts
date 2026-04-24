import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { ACCOUNTS_GROUP_URL, FORM_MD_DIALOG_CONFIG } from '../../../../shared/constant/global';
import {
	CHANNEL_ACCOUNT_GROUP_CUSTOM_TYPE,
	CHANNEL_ACCOUNT_GROUP_TABLE,
} from '../../../../shared/constant/table/channel';
import { ChannelAccountGroupForm } from '../../dialog/channel-account-group-form';

@Component({
	selector: 'app-channel-account-group-list',
	imports: [Table, Search, Button, MatIconModule, FontAwesomeModule],
	templateUrl: './channel-account-group-list.html',
	styleUrl: './channel-account-group-list.css',
})
export class ChannelAccountGroupList extends BaseTable {
	constructor() {
		super(
			ACCOUNTS_GROUP_URL,
			CHANNEL_ACCOUNT_GROUP_TABLE,
			CHANNEL_ACCOUNT_GROUP_CUSTOM_TYPE,
		);
		this.initAddButton('New Group', () => this.openDialog());
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(ChannelAccountGroupForm, {
			...FORM_MD_DIALOG_CONFIG,
			data: {
				row: data,
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;

			this.fetchData();
		});
	}
}

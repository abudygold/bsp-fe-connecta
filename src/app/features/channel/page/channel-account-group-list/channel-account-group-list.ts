import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { ACCOUNTS_GROUP_URL, FORM_MD_DIALOG_CONFIG } from '../../../../shared/constant/global';
import {
	CHANNEL_ACCOUNT_GROUP_CUSTOM_TYPE,
	CHANNEL_ACCOUNT_GROUP_WAU_TABLE,
} from '../../../../shared/constant/table/channel';
import { ChannelAccountGroupWAUForm } from '../../dialog/channel-account-group-wau-form/channel-account-group-wau-form';

@Component({
	selector: 'app-channel-account-group-list',
	imports: [Table, Search, Button, MatIconModule, MatCheckboxModule, FontAwesomeModule],
	templateUrl: './channel-account-group-list.html',
	styleUrl: './channel-account-group-list.css',
})
export class ChannelAccountGroupList extends BaseTable {
	constructor() {
		super(
			ACCOUNTS_GROUP_URL,
			CHANNEL_ACCOUNT_GROUP_WAU_TABLE,
			CHANNEL_ACCOUNT_GROUP_CUSTOM_TYPE,
		);
		this.initAddButton('Add New Group', () => this.openDialog());
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(ChannelAccountGroupWAUForm, {
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

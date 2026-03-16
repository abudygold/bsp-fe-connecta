import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { ACCOUNTS_URL } from '../../../../shared/constant/global';
import { CHANNEL_WA_TABLE, CUSTOM_TYPE_CHANNEL_WA } from '../../../../shared/constant/table';

@Component({
	selector: 'app-channel-wa-list',
	imports: [MatCheckboxModule, Table, Search, Button, FontAwesomeModule],
	templateUrl: './channel-wa-list.html',
	styleUrl: './channel-wa-list.css',
})
export class ChannelWaList extends BaseTable {
	constructor() {
		const orgId = localStorage.getItem('connecta.user_account')
			? JSON.parse(localStorage.getItem('connecta.user_account') as any)?.orgId
			: null;

		super(
			`${ACCOUNTS_URL}?channel=WA&orgId=${orgId}`,
			CHANNEL_WA_TABLE,
			CUSTOM_TYPE_CHANNEL_WA,
		);
		this.initAddButton('Add Account', () => this.navigateToPage(['./add']));
	}
}

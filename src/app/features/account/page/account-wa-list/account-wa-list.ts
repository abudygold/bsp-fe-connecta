import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { FORM_SM_DIALOG_CONFIG } from '../../../../shared/constant';
import { ACCOUNTS_URL } from '../../../../shared/constant/global';
import { ACCOUNT_WA_TABLE, CUSTOM_TYPE_ACCOUNT_WA } from '../../../../shared/constant/table';
import { AccountWaForm } from '../../dialog/account-wa-form';

@Component({
	selector: 'app-account-wa-list',
	imports: [MatCheckboxModule, Table, Search, Button, FontAwesomeModule],
	templateUrl: './account-wa-list.html',
	styleUrl: './account-wa-list.css',
})
export class AccountWaList extends BaseTable {
	constructor() {
		const orgId = localStorage.getItem('connecta.user_account')
			? JSON.parse(localStorage.getItem('connecta.user_account') as any)?.orgId
			: null;

		super(
			`${ACCOUNTS_URL}?channel=WA&orgId=${orgId}`,
			ACCOUNT_WA_TABLE,
			CUSTOM_TYPE_ACCOUNT_WA,
		);
		this.initAddButton('Add Account', () => this.openDialog());
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(AccountWaForm, {
			...FORM_SM_DIALOG_CONFIG,
			data,
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;

			this.fetchData();
		});
	}
}

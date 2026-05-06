import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { BaseTable } from '../../../../core/common';
import { TruncatePipe } from '../../../../core/pipes';
import { Search } from '../../../../shared/components/search';
import { FORM_MD_DIALOG_CONFIG, USERS_URL } from '../../../../shared/constant/global';
import { USERS_CUSTOM_TYPE, USERS_TABLE } from '../../../../shared/constant/table/setting';
import { ApiKeysForm } from '../../dialog/api-keys-form';

@Component({
	selector: 'app-user-list',
	imports: [Table, Search, Button, MatIconModule, FontAwesomeModule, TruncatePipe],
	templateUrl: './user-list.html',
	styleUrl: './user-list.css',
})
export class UserList extends BaseTable {
	constructor() {
		super(USERS_URL, USERS_TABLE, USERS_CUSTOM_TYPE);
		this.initAddButton('New User', () => this.openDialog());

		this.faIcon = {
			...this.faIcon,
			faCopy,
		};
	}

	onClipboardClick(token: string): void {
		navigator.clipboard.writeText(token);
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(ApiKeysForm, {
			...FORM_MD_DIALOG_CONFIG,
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;
			this.fetchData();
		});
	}
}

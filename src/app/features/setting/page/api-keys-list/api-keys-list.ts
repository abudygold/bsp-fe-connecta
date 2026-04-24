import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { BaseTable } from '../../../../core/common';
import { TruncatePipe } from '../../../../core/pipes';
import { Search } from '../../../../shared/components/search';
import { API_KEYS_URL, FORM_MD_DIALOG_CONFIG } from '../../../../shared/constant/global';
import { API_KEYS_CUSTOM_TYPE, API_KEYS_TABLE } from '../../../../shared/constant/table/setting';
import { ApiKeysForm } from '../../dialog/api-keys-form';

@Component({
	selector: 'app-api-keys-list',
	imports: [Table, Search, Button, MatIconModule, FontAwesomeModule, TruncatePipe],
	templateUrl: './api-keys-list.html',
	styleUrl: './api-keys-list.css',
})
export class ApiKeysList extends BaseTable {
	constructor() {
		super(API_KEYS_URL, API_KEYS_TABLE, API_KEYS_CUSTOM_TYPE);
		this.initAddButton('New API Key', () => this.openDialog());

		this.faIcon = {
			...this.faIcon,
			faCopy,
		};
	}

	onClipboardClick(token: string): void {
		navigator.clipboard.writeText(token);
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(ApiKeysForm, {
			...FORM_MD_DIALOG_CONFIG,
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;
			this.fetchData();
		});
	}
}

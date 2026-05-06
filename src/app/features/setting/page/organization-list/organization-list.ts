import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { FORM_MD_DIALOG_CONFIG, ORGS_URL } from '../../../../shared/constant/global';
import { ORGANIZATION_TABLE } from '../../../../shared/constant/table/setting';
import { OrganizationForm } from '../../dialog/organization-form';

@Component({
	selector: 'app-organization-list',
	imports: [Table, Search, Button, MatIconModule, FontAwesomeModule],
	templateUrl: './organization-list.html',
	styleUrl: './organization-list.css',
})
export class OrganizationList extends BaseTable {
	constructor() {
		super(ORGS_URL, ORGANIZATION_TABLE, ORGANIZATION_TABLE);
		this.initAddButton('New Organization', () => this.openDialog());

		this.faIcon = {
			...this.faIcon,
			faCopy,
		};
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(OrganizationForm, {
			...FORM_MD_DIALOG_CONFIG,
			data,
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;
			this.fetchData();
		});
	}
}

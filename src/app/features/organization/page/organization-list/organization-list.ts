import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { FORM_SM_DIALOG_CONFIG } from '../../../../shared/constant';
import { ORGS_URL } from '../../../../shared/constant/global';
import { CUSTOM_TYPE_ORGANIZATION, ORGANIZATION_TABLE } from '../../../../shared/constant/table';
import { OrganizationForm } from '../../dialog/organization-form';

@Component({
	selector: 'app-organization-list',
	imports: [MatCheckboxModule, Table, Search, Button, FontAwesomeModule],
	templateUrl: './organization-list.html',
	styleUrl: './organization-list.css',
})
export class OrganizationList extends BaseTable {
	constructor() {
		super(ORGS_URL, ORGANIZATION_TABLE, CUSTOM_TYPE_ORGANIZATION);
		this.initAddButton('Add Organization', () => this.openDialog());
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(OrganizationForm, {
			...FORM_SM_DIALOG_CONFIG,
			data,
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;

			this.fetchData();
		});
	}
}

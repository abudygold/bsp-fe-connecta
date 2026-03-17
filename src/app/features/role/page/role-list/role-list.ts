import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { FORM_SM_DIALOG_CONFIG } from '../../../../shared/constant';
import { ROLES_URL } from '../../../../shared/constant/global';
import { CUSTOM_TYPE_ROLE, ROLE_TABLE } from '../../../../shared/constant/table';
import { RoleForm } from '../../dialog/role-form';

@Component({
	selector: 'app-role-list',
	imports: [MatCheckboxModule, Table, Search, Button, FontAwesomeModule],
	templateUrl: './role-list.html',
	styleUrl: './role-list.css',
})
export class RoleList extends BaseTable {
	constructor() {
		super(ROLES_URL, ROLE_TABLE, CUSTOM_TYPE_ROLE);
		this.initAddButton('Add Role', () => this.openDialog());
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(RoleForm, {
			...FORM_SM_DIALOG_CONFIG,
			data,
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;

			this.fetchData();
		});
	}
}

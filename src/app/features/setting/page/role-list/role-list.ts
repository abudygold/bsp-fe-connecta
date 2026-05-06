import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { FORM_MD_DIALOG_CONFIG, ROLES_URL } from '../../../../shared/constant/global';
import { ROLE_CUSTOM_TYPE, ROLE_TABLE } from '../../../../shared/constant/table/setting';
import { RoleForm } from '../../dialog/role-form';

@Component({
	selector: 'app-role-list',
	imports: [Table, Search, Button, MatIconModule, FontAwesomeModule],
	templateUrl: './role-list.html',
	styleUrl: './role-list.css',
})
export class RoleList extends BaseTable {
	constructor() {
		super(ROLES_URL, ROLE_TABLE, ROLE_CUSTOM_TYPE);
		this.initAddButton('New Role', () => this.openDialog());

		this.faIcon = {
			...this.faIcon,
			faCopy,
		};
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(RoleForm, {
			...FORM_MD_DIALOG_CONFIG,
			data,
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;
			this.fetchData();
		});
	}
}

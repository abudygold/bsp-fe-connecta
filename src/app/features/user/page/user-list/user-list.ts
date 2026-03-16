import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { USERS_URL } from '../../../../shared/constant/global';
import { CUSTOM_TYPE_USER, USER_TABLE } from '../../../../shared/constant/table';

@Component({
	selector: 'app-user-list',
	imports: [MatCheckboxModule, Table, Search, Button, FontAwesomeModule],
	templateUrl: './user-list.html',
	styleUrl: './user-list.css',
})
export class UserList extends BaseTable {
	constructor() {
		super(USERS_URL, USER_TABLE, CUSTOM_TYPE_USER);
		this.initAddButton('Add User', () => this.navigateToPage(['./add']));
	}
}

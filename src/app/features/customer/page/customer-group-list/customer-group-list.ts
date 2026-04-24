import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { CUSTOMER_GROUP_URL } from '../../../../shared/constant/global';
import {
	CUSTOMER_GROUP_CUSTOM_TYPE,
	CUSTOMER_GROUP_TABLE,
} from '../../../../shared/constant/table/customer';

@Component({
	selector: 'app-customer-group-list',
	imports: [Table, Search, Button, MatIconModule, FontAwesomeModule],
	templateUrl: './customer-group-list.html',
	styleUrl: './customer-group-list.css',
})
export class CustomerGroupList extends BaseTable {
	constructor() {
		super(CUSTOMER_GROUP_URL, CUSTOMER_GROUP_TABLE, CUSTOMER_GROUP_CUSTOM_TYPE);
		this.initAddButton('New Template', () => this.navigateToPage(['./add']));
	}
}

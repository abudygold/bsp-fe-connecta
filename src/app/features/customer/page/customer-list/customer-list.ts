import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { StatusBadge } from '../../../../shared/components/status-badge';
import { CUSTOMER_URL } from '../../../../shared/constant/global';
import { CUSTOMER_CUSTOM_TYPE, CUSTOMER_TABLE } from '../../../../shared/constant/table/customer';

@Component({
	selector: 'app-customer-list',
	imports: [
		Table,
		Search,
		Button,
		StatusBadge,
		MatIconModule,
		MatCheckboxModule,
		FontAwesomeModule,
	],
	templateUrl: './customer-list.html',
	styleUrl: './customer-list.css',
})
export class CustomerList extends BaseTable {
	constructor() {
		super(CUSTOMER_URL, CUSTOMER_TABLE, CUSTOMER_CUSTOM_TYPE);
		this.initAddButton('Add New Template', () => this.navigateToPage(['./add']));

		this.faIcon = {
			...this.faIcon,
			faStar,
			faPaperPlane,
		};
	}

	sendMessage(data: any): void {
		if (!data) return;
		this.navigateToPage(['./send-message'], {
			data: btoa(JSON.stringify(data?.contacts || [])),
		});
	}
}

import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Button, ButtonModel, Dialog } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { API } from '../../../../core/services';
import { CANCEL_BUTTON, CUSTOMER_URL, SAVE_BUTTON } from '../../../../shared/constant/global';

@Component({
	selector: 'app-customer-group-members',
	imports: [
		Dialog,
		Button,
		FormField,
		MatFormFieldModule,
		MatSelectModule,
		MatDividerModule,
		FontAwesomeModule,
	],
	templateUrl: './customer-group-members.html',
	styleUrl: './customer-group-members.css',
})
export class CustomerGroupMembers {
	protected dialogRef = inject(MatDialogRef<CustomerGroupMembers>);
	protected data = inject(MAT_DIALOG_DATA);
	protected api = inject(API);

	formModel = signal({
		customers: [],
	});
	formData = form(this.formModel);

	opt = {
		customers: signal<any[]>([]),
	};

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.dialogRef.close())),
	};

	constructor() {
		this.getCustomerOptionService();
	}

	getCustomerOptionService() {
		this.api
			.get(CUSTOMER_URL, {
				pageNo: 1,
				itemPerPage: 250,
			})
			.subscribe({
				next: (res: any) => {
					this.opt.customers.set(res.data.list);
				},
			});
	}

	handleSubmit(): void {
		this.dialogRef.close({
			customers: this.formModel().customers,
		});
	}
}

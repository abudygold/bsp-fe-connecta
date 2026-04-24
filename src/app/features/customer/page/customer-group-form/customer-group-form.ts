import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { Button, ButtonModel, Table, TableModel, Textbox } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
	BaseAlert,
	BaseForm,
	ConfirmAlert,
	DEFAULT_MESSAGE_CREATE,
	DEFAULT_MESSAGE_DELETE,
} from '../../../../core/common';
import { MessageValidation } from '../../../../shared/components/message-validation';
import { StatusBadge } from '../../../../shared/components/status-badge';
import {
	CUSTOMER_EDIT_STATE,
	CUSTOMER_GROUP_DEFAULT_STATE,
	CUSTOMER_GROUP_SCHEMA_FORM,
	ICustomerGroupForm,
} from '../../../../shared/constant/formly/customer';
import {
	ADD_NEW_BUTTON,
	CANCEL_BUTTON,
	CUSTOMER_GROUP_URL,
	FORM_SM_DIALOG_CONFIG,
	SAVE_BUTTON,
} from '../../../../shared/constant/global';
import {
	CUSTOMER_GROUP_MEMBERS_CUSTOM_TYPE,
	CUSTOMER_GROUP_MEMBERS_TABLE,
} from '../../../../shared/constant/table/customer';
import { IHttpResponse } from '../../../../shared/interface/base';
import { CustomerGroupMembers } from '../../dialog/customer-group-members/customer-group-members';

@Component({
	selector: 'app-customer-group-form',
	imports: [
		Textbox,
		Button,
		Table,
		StatusBadge,
		MatDividerModule,
		MessageValidation,
		FontAwesomeModule,
	],
	templateUrl: './customer-group-form.html',
	styleUrl: './customer-group-form.css',
	encapsulation: ViewEncapsulation.None,
})
export class CustomerGroupForm extends BaseForm<ICustomerGroupForm> {
	dialog = inject(MatDialog);

	tableModel: TableModel = CUSTOMER_GROUP_MEMBERS_TABLE;

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.navigateToList())),
		members: signal<ButtonModel>(ADD_NEW_BUTTON('Members', () => this.openMembersDialog())),
	};

	faIcon = {
		faTrash,
		faStar,
	};

	constructor() {
		super(CUSTOMER_GROUP_DEFAULT_STATE, (schemaPath) => CUSTOMER_GROUP_SCHEMA_FORM(schemaPath));

		this.id() && this.getDetailService(CUSTOMER_GROUP_URL, CUSTOMER_EDIT_STATE);
		this.id() && this.getMembersService();

		setTimeout(() => this.tableModel.isLoading.set(false), 600);
	}

	getMembersService() {
		this.tableModel.isLoading.set(true);

		const filters: Record<string, any> = {
			...{
				pageNo: this.tableModel.pageIndex + 1,
				itemPerPage: this.tableModel.pageSize,
			},
			...this.tableModel.filters,
		};

		this.api
			.get<IHttpResponse>(`${CUSTOMER_GROUP_URL}/${this.id()}/member`, filters)
			.subscribe({
				next: (res: any) => {
					this.tableModel.dataSource = res?.data?.list || [];
					this.tableModel.hasNext(res?.data?.hasNext || false);
					this.tableModel.generateDataType();
				},
				complete: () => {
					this.tableModel.dataType = {
						...this.tableModel.dataType,
						...(CUSTOMER_GROUP_MEMBERS_CUSTOM_TYPE as object),
					};
					this.tableModel.isLoading.set(false);
				},
				error: () => this.tableModel.isLoading.set(false),
			});
	}

	addMemberService(customers: object): void {
		this.api
			.post<IHttpResponse>(`${CUSTOMER_GROUP_URL}/${this.id()}/member`, { ...customers })
			.subscribe({
				next: (res) => {
					BaseAlert('Success!', res?.msg || DEFAULT_MESSAGE_CREATE, 'success');

					this.tableModel.pageIndex = 0;
					this.getMembersService();
				},
				error: (err) => console.log(err),
			});
	}

	removeMemberService(id: string): void {
		ConfirmAlert().then((result) => {
			result.isConfirmed &&
				this.api
					.post<IHttpResponse>(`${CUSTOMER_GROUP_URL}/${this.id()}/member/remove`, {
						customers: [id],
					})
					.subscribe({
						next: (res) => {
							BaseAlert('Success!', res?.msg || DEFAULT_MESSAGE_DELETE, 'success');

							this.tableModel.pageIndex = 0;
							this.getMembersService();
						},
						error: (err) => console.log(err),
					});
		});
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(
			CUSTOMER_GROUP_URL,
			this.formModel(),
			{},
			() => this.navigateToList(),
			() => {
				this.btn.save().disabled?.update((_) => false);
				this.btn.cancel().disabled?.update((_) => false);
			},
		);
	}

	openMembersDialog(): void {
		const dialogRef = this.dialog.open(CustomerGroupMembers, {
			...FORM_SM_DIALOG_CONFIG,
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;
			this.addMemberService(result);
		});
	}

	navigateToList(): void {
		this.router.navigate([this.id() ? '../../' : '../'], { relativeTo: this.activatedRoute });
	}
}

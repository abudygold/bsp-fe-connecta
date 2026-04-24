import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import {
	Button,
	ButtonModel,
	Dialog,
	Dropdown,
	Table,
	TableModel,
	Textbox,
} from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BaseForm } from '../../../../core/common';
import { MessageValidation } from '../../../../shared/components/message-validation';
import {
	ACCOUNT_GROUP_DEFAULT_STATE,
	ACCOUNT_GROUP_EDIT_STATE,
	ACCOUNT_GROUP_SCHEMA_FORM,
	IAccountGroupForm,
} from '../../../../shared/constant/formly/channel';
import {
	ACCOUNTS_GROUP_URL,
	ACCOUNTS_URL,
	CANCEL_BUTTON,
	SAVE_BUTTON,
} from '../../../../shared/constant/global';
import {
	CHANNEL_ACCOUNT_GROUP_MEMBERS_CUSTOM_TYPE,
	CHANNEL_ACCOUNT_GROUP_MEMBERS_TABLE,
} from '../../../../shared/constant/table/channel';

@Component({
	selector: 'app-channel-account-group-form',
	imports: [
		Textbox,
		Dropdown,
		Dialog,
		Button,
		Table,
		MatDividerModule,
		MessageValidation,
		FontAwesomeModule,
	],
	templateUrl: './channel-account-group-form.html',
	styleUrl: './channel-account-group-form.css',
	encapsulation: ViewEncapsulation.None,
})
export class ChannelAccountGroupForm extends BaseForm<IAccountGroupForm> {
	protected dialogRef = inject(MatDialogRef<ChannelAccountGroupForm>);
	protected data = inject(MAT_DIALOG_DATA);

	tableModel: TableModel = CHANNEL_ACCOUNT_GROUP_MEMBERS_TABLE;

	opt = {
		accounts: signal<any[]>([]),
	};

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.dialogRef.close())),
	};

	faIcon: any = {
		faTrash,
	};

	constructor() {
		super(ACCOUNT_GROUP_DEFAULT_STATE, (schemaPath) => ACCOUNT_GROUP_SCHEMA_FORM(schemaPath));

		this.id.set(this.data?.row?.id || null);
		this.formModel.set(ACCOUNT_GROUP_EDIT_STATE(this.data?.row));
		this.#loadOptions();
	}

	#loadOptions(): void {
		this.mapOptions(
			ACCOUNTS_URL,
			this.opt.accounts,
			{
				pageNo: 1,
				itemPerPage: 100,
			},
			(item) => `${item.accountName} (${item.accountNo})`,
			'accountNo',
			() => this.addMember(''),
		);
	}

	addMember(_id: string) {
		this.tableModel.isLoading.set(true);
		this.tableModel.dataSource =
			this.opt.accounts().filter((item: any) => {
				return this.formModel().accounts.includes(item.id);
			}) || [];

		this.tableModel.generateDataType();
		this.tableModel.dataType = {
			...this.tableModel.dataType,
			...(CHANNEL_ACCOUNT_GROUP_MEMBERS_CUSTOM_TYPE as object),
		};
		this.tableModel.isLoading.set(false);
	}

	removeMember(id: string) {
		this.tableModel.isLoading.set(true);
		this.formData
			.accounts()
			.value.update((accounts) => accounts.filter((item: string) => item !== id));
		this.tableModel.dataSource =
			this.tableModel.dataSource.filter((item: any) => item.id !== id) || [];
		this.tableModel.isLoading.set(false);
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(
			ACCOUNTS_GROUP_URL,
			this.formModel(),
			{},
			() => this.dialogRef.close(true),
			() => {
				this.btn.save().disabled?.update((_) => false);
				this.btn.cancel().disabled?.update((_) => false);
			},
		);
	}
}

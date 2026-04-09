import { Component, inject, signal, WritableSignal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Button, ButtonModel, Dialog, Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { BaseForm } from '../../../../core/common';
import {
	ACCOUNT_WAU_CREATE_SCHEMA_FORM,
	ACCOUNT_WAU_EDIT_SCHEMA_FORM,
	ACCOUNT_WAU_EDIT_STATE,
	ACCOUNT_WAU_INIT_FORM,
	IAccountWAUForm,
} from '../../../../shared/constant/formly/channel';
import { ACCOUNTS_URL, CANCEL_BUTTON, SAVE_BUTTON } from '../../../../shared/constant/global';

@Component({
	selector: 'app-channel-account-wau-form',
	imports: [Formly, Dialog, Button],
	templateUrl: './channel-account-wau-form.html',
	styleUrl: './channel-account-wau-form.css',
})
export class ChannelAccountWAUForm extends BaseForm<IAccountWAUForm> {
	protected dialogRef = inject(MatDialogRef<ChannelAccountWAUForm>);
	protected data = inject(MAT_DIALOG_DATA);

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.dialogRef.close())),
	};

	formConfig!: WritableSignal<FormlyFormConfig>;

	constructor() {
		super(null, (schemaPath) => ACCOUNT_WAU_CREATE_SCHEMA_FORM(schemaPath));

		this.id.set(this.data?.row?.id || null);
		this.id() &&
			(this.formData = form(this.formModel, (schemaPath) =>
				ACCOUNT_WAU_EDIT_SCHEMA_FORM(schemaPath),
			));

		this.formModel.set(ACCOUNT_WAU_EDIT_STATE(this.data?.row));
		this.formData.channel().value.set(this.data?.channel || '');
		this.formConfig = signal(ACCOUNT_WAU_INIT_FORM(this.formData));
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(
			ACCOUNTS_URL,
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

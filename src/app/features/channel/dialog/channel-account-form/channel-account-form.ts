import { Component, inject, signal, WritableSignal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Button, ButtonModel, Dialog, Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { BaseForm } from '../../../../core/common';
import {
	ACCOUNT_EDIT_STATE,
	ACCOUNT_INIT_FORM,
	ACCOUNT_SCHEMA_FORM,
	IAccountForm,
} from '../../../../shared/constant/formly/channel';
import { ACCOUNTS_URL, CANCEL_BUTTON, SAVE_BUTTON } from '../../../../shared/constant/global';

@Component({
	selector: 'app-channel-account-form',
	imports: [Formly, Dialog, Button],
	templateUrl: './channel-account-form.html',
	styleUrl: './channel-account-form.css',
})
export class ChannelAccountForm extends BaseForm<IAccountForm> {
	protected dialogRef = inject(MatDialogRef<ChannelAccountForm>);
	protected data = inject(MAT_DIALOG_DATA);

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.dialogRef.close())),
	};

	formConfig!: WritableSignal<FormlyFormConfig>;

	constructor() {
		super(null, () => {});
		this.id.set(this.data?.row?.id || null);
		this.initFormByChannel();
	}

	initFormByChannel(): void {
		const channel = this.data?.channel || '';

		this.formData = form(this.formModel, (schemaPath) =>
			ACCOUNT_SCHEMA_FORM(schemaPath, this.id() ? true : false, channel),
		);
		this.formModel.set(ACCOUNT_EDIT_STATE(this.data?.row));
		this.formConfig = signal(ACCOUNT_INIT_FORM(this.formData));
		this.formData.channel().value.set(channel);

		if (channel === 'SMS') {
			this.formConfig.update((config) => {
				const accountNoField = config.fields?.find((f) => f.key === 'accountNo');
				if (accountNoField) {
					accountNoField.config = {
						...accountNoField.config,
						label: 'Phone No',
					};
				}
				return config;
			});
		}
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

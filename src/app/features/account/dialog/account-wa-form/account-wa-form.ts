import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Button, ButtonModel, Dialog, Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { BaseForm } from '../../../../core/common';
import { CANCEL_BUTTON, SAVE_BUTTON } from '../../../../shared/constant/button';
import {
	ACCOUNT_EDIT_STATE,
	ACCOUNT_INIT_FORM,
	ACCOUNT_SCHEMA_FORM,
	IAccountReq,
} from '../../../../shared/constant/formly';
import { ACCOUNTS_URL, CHANNELS_URL, ORGS_URL } from '../../../../shared/constant/global';

@Component({
	selector: 'app-account-wa-form',
	imports: [Formly, Dialog, Button],
	templateUrl: './account-wa-form.html',
	styleUrl: './account-wa-form.css',
})
export class AccountWaForm extends BaseForm<IAccountReq> {
	protected dialogRef = inject(MatDialogRef<AccountWaForm>);
	protected data = inject(MAT_DIALOG_DATA);

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Close', () => this.dialogRef.close())),
	};

	formConfig!: WritableSignal<FormlyFormConfig>;

	constructor() {
		super({} as IAccountReq, (schemaPath) => ACCOUNT_SCHEMA_FORM(schemaPath));

		this.id.set(this.data?.id || null);
		this.formModel.set(ACCOUNT_EDIT_STATE(this.data));
		this.formConfig = signal(ACCOUNT_INIT_FORM(this.formData));

		this.getAsyncOptions(ORGS_URL, this.formConfig, 'orgId');
		this.getAsyncOptions(CHANNELS_URL, this.formConfig, 'channel');
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(ACCOUNTS_URL, this.formModel(), {}, () => {
			this.dialogRef.close(true);
		});
	}
}

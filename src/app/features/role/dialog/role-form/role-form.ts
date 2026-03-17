import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Button, ButtonModel, Dialog, Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { BaseForm } from '../../../../core/common';
import { CANCEL_BUTTON, SAVE_BUTTON } from '../../../../shared/constant/button';
import {
	IRoleReq,
	ROLE_EDIT_STATE,
	ROLE_INIT_FORM,
	ROLE_SCHEMA_FORM,
} from '../../../../shared/constant/formly';
import { ORGS_URL, ROLES_URL } from '../../../../shared/constant/global';

@Component({
	selector: 'app-role-form',
	imports: [Formly, Dialog, Button],
	templateUrl: './role-form.html',
	styleUrl: './role-form.css',
})
export class RoleForm extends BaseForm<IRoleReq> {
	protected dialogRef = inject(MatDialogRef<RoleForm>);
	protected data = inject(MAT_DIALOG_DATA);

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Close', () => this.dialogRef.close())),
	};

	formConfig!: WritableSignal<FormlyFormConfig>;

	constructor() {
		super({} as IRoleReq, (schemaPath) => ROLE_SCHEMA_FORM(schemaPath));

		this.id.set(this.data?.id || null);
		this.formModel.set(ROLE_EDIT_STATE(this.data));
		this.formConfig = signal(ROLE_INIT_FORM(this.formData));

		this.getAsyncOptions(ORGS_URL, this.formConfig, 'orgId');
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(ROLES_URL, this.formModel(), {}, () => {
			this.dialogRef.close(true);
		});
	}
}

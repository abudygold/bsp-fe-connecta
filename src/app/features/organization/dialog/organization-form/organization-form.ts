import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Button, ButtonModel, Dialog, Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { BaseForm } from '../../../../core/common';
import { CANCEL_BUTTON, SAVE_BUTTON } from '../../../../shared/constant/button';
import {
	IOrganizationReq,
	ORGANIZATION_EDIT_STATE,
	ORGANIZATION_INIT_FORM,
	ORGANIZATION_SCHEMA_FORM,
} from '../../../../shared/constant/formly';
import { ORGS_URL } from '../../../../shared/constant/global';
import { PASSWORD_RULES_CHECK } from '../../../../shared/constant';

@Component({
	selector: 'app-organization-form',
	imports: [Formly, Dialog, Button],
	templateUrl: './organization-form.html',
	styleUrl: './organization-form.css',
})
export class OrganizationForm extends BaseForm<IOrganizationReq> {
	protected dialogRef = inject(MatDialogRef<OrganizationForm>);
	protected data = inject(MAT_DIALOG_DATA);

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Close', () => this.dialogRef.close())),
	};

	passwordRule = computed<any[]>(() => {
		const password = this.formData.owner.pass();
		return PASSWORD_RULES_CHECK(password.value());
	});

	formConfig!: WritableSignal<FormlyFormConfig>;

	constructor() {
		super({} as IOrganizationReq, (schemaPath) => ORGANIZATION_SCHEMA_FORM(schemaPath));

		this.id.set(this.data?.id || null);
		this.formModel.set(ORGANIZATION_EDIT_STATE(this.data));
		this.formConfig = signal(ORGANIZATION_INIT_FORM(this.formData));
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(ORGS_URL, this.formModel(), {}, () => {
			this.dialogRef.close(true);
		});
	}
}

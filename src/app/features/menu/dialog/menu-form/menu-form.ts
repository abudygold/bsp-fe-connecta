import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Button, ButtonModel, Dialog, Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { BaseForm } from '../../../../core/common';
import { CANCEL_BUTTON, SAVE_BUTTON } from '../../../../shared/constant/button';
import {
	IMenuReq,
	MENU_EDIT_STATE,
	MENU_INIT_FORM,
	MENU_SCHEMA_FORM,
} from '../../../../shared/constant/formly';
import { MENUS_URL } from '../../../../shared/constant/global';

@Component({
	selector: 'app-menu-form',
	imports: [Formly, Dialog, Button],
	templateUrl: './menu-form.html',
	styleUrl: './menu-form.css',
})
export class MenuForm extends BaseForm<IMenuReq> {
	protected dialogRef = inject(MatDialogRef<MenuForm>);
	protected data = inject(MAT_DIALOG_DATA);

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Close', () => this.dialogRef.close())),
	};

	formConfig!: WritableSignal<FormlyFormConfig>;

	constructor() {
		super({} as IMenuReq, (schemaPath) => MENU_SCHEMA_FORM(schemaPath));

		this.id.set(this.data?.id || null);
		this.formModel.set(MENU_EDIT_STATE(this.data));
		this.formConfig = signal(MENU_INIT_FORM(this.formData));

		this.getAsyncOptions(MENUS_URL, this.formConfig, 'parentId');
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(MENUS_URL, this.formModel(), {}, () => {
			this.dialogRef.close(true);
		});
	}
}

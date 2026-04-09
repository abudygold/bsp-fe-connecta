import { DatePipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Button, ButtonModel, Dialog, Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faClipboard, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { BaseForm } from '../../../../core/common';
import {
	API_KEY_EDIT_STATE,
	API_KEY_INIT_FORM,
	API_KEY_SCHEMA_FORM,
	IAPIKeyForm,
} from '../../../../shared/constant/formly/setting';
import { API_KEYS_URL, CANCEL_BUTTON, SAVE_BUTTON } from '../../../../shared/constant/global';

@Component({
	selector: 'app-api-keys-form',
	imports: [DatePipe, Formly, Dialog, Button, FaIconComponent],
	templateUrl: './api-keys-form.html',
	styleUrl: './api-keys-form.css',
})
export class ApiKeysForm extends BaseForm<IAPIKeyForm> {
	protected dialogRef = inject(MatDialogRef<ApiKeysForm>);
	protected data = inject(MAT_DIALOG_DATA);

	isCreated = signal<boolean>(false);
	apiKey = signal<{
		access: string;
		expiredDate: string;
		name: string;
		token: string;
	}>({
		access: '',
		expiredDate: '',
		name: '',
		token: '',
	});

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.dialogRef.close())),
		close: signal<ButtonModel>(CANCEL_BUTTON('Close', () => this.dialogRef.close(true))),
	};

	faIcon = {
		faInfoCircle,
		faClipboard,
	};

	formConfig!: WritableSignal<FormlyFormConfig>;

	constructor() {
		super(null, (schemaPath) => API_KEY_SCHEMA_FORM(schemaPath));

		this.id.set(this.data?.row?.id || null);
		this.formModel.set(API_KEY_EDIT_STATE(this.data?.row));
		this.formConfig = signal(API_KEY_INIT_FORM(this.formData));
	}

	onClipboardClick(): void {
		navigator.clipboard.writeText(this.apiKey().token);
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(
			API_KEYS_URL,
			this.formModel(),
			{},
			(res) => {
				this.isCreated.set(true);
				this.apiKey.set(res.data);
			},
			() => {
				this.btn.save().disabled?.update((_) => false);
				this.btn.cancel().disabled?.update((_) => false);
			},
		);
	}
}

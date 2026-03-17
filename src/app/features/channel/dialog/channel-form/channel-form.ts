import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Button, ButtonModel, Dialog, Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { BaseForm } from '../../../../core/common';
import { CANCEL_BUTTON, SAVE_BUTTON } from '../../../../shared/constant/button';
import {
	CHANNEL_EDIT_STATE,
	CHANNEL_INIT_FORM,
	CHANNEL_SCHEMA_FORM,
	IChannelReq,
} from '../../../../shared/constant/formly';
import { CHANNELS_URL } from '../../../../shared/constant/global';

@Component({
	selector: 'app-channel-form',
	imports: [Formly, Dialog, Button],
	templateUrl: './channel-form.html',
	styleUrl: './channel-form.css',
})
export class ChannelForm extends BaseForm<IChannelReq> {
	protected dialogRef = inject(MatDialogRef<ChannelForm>);
	protected data = inject(MAT_DIALOG_DATA);

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Close', () => this.dialogRef.close())),
	};

	formConfig!: WritableSignal<FormlyFormConfig>;

	constructor() {
		super({} as IChannelReq, (schemaPath) => CHANNEL_SCHEMA_FORM(schemaPath));

		this.id.set(this.data?.id || null);
		this.formModel.set(CHANNEL_EDIT_STATE(this.data));
		this.formConfig = signal(CHANNEL_INIT_FORM(this.formData));
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(CHANNELS_URL, this.formModel(), {}, () => {
			this.dialogRef.close(true);
		});
	}
}

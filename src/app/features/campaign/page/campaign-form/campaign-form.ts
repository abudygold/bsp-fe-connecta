import { Component, signal } from '@angular/core';
import { Button, ButtonModel, Dropdown, Textarea, Textbox } from '@devkitify/angular-ui-kit';
import { saveAs } from 'file-saver';
import { firstValueFrom } from 'rxjs';
import { BaseAlert, BaseForm } from '../../../../core/common';
import { MessageValidation } from '../../../../shared/components/message-validation';
import {
	CAMPAIGN_DEFAULT_STATE,
	CAMPAIGN_SCHEMA_FORM,
	ICampaignForm,
} from '../../../../shared/constant/formly/campaign';
import {
	ACCOUNTS_URL,
	ADD_NEW_BUTTON,
	CAMPAIGN_URL,
	CANCEL_BUTTON,
	CHANNEL_URL,
	FILE_URL,
	SAVE_BUTTON,
} from '../../../../shared/constant/global';

@Component({
	selector: 'app-campaign-form',
	imports: [Textbox, Dropdown, Textarea, Button, MessageValidation],
	templateUrl: './campaign-form.html',
	styleUrl: './campaign-form.css',
})
export class CampaignForm extends BaseForm<ICampaignForm> {
	selectedFile = signal<File | null>(null);

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.navigateToList())),
		downloadTemplate: signal<ButtonModel>(
			ADD_NEW_BUTTON('Download Template', () => this.#downloadTemplate(), 'download'),
		),
	};

	opt = {
		channel: signal<any[]>([]),
		accountNo: signal<any[]>([]),
	};

	constructor() {
		super(CAMPAIGN_DEFAULT_STATE, (schemaPath) => CAMPAIGN_SCHEMA_FORM(schemaPath));
		this.#loadOptions();
	}

	#loadOptions(): void {
		this.mapOptions(CHANNEL_URL, this.opt.channel);
		this.mapOptions(
			ACCOUNTS_URL,
			this.opt.accountNo,
			{
				channel: this.formData.channel().value(),
				itemPerPage: 100,
			},
			(item) => `${item.accountNo} - ${item.accountName}`,
			'accountNo',
			() => {
				this.formData.from().value.set(this.opt.accountNo()?.at(0)?.value);
			},
		);
	}

	openFileBrowser(): void {
		document.getElementById('campaign-file-upload')?.click()
	}

	onFileChange(event: Event): void {
		const input = event.target as HTMLInputElement;
		const file = input.files?.item(0) || null;

		this.selectedFile.set(file);
	}

	#downloadTemplate(): void {
		if (!this.#validateDownload()) return;

		this.api
			.download(`${CAMPAIGN_URL}/template`, {
				channel: this.formData.channel().value(),
				msgType: this.formData.payload.msgType().value(),
				text: this.formData.payload.text().value(),
			})
			.subscribe({
				next: (res: any) => saveAs(res, 'upload_template.xlsx'),
			});
	}

	async handleSubmit(): Promise<void> {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		const { groupId, ...bodyReq } = this.formModel();
		const fileId = await this.#uploadFile();

		this.sendToApi(
			CAMPAIGN_URL,
			{
				...bodyReq,
				...(fileId ? { fileId } : {}),
			},
			{},
			() => this.navigateToList(),
			() => {
				this.btn.save().disabled?.update((_) => false);
				this.btn.cancel().disabled?.update((_) => false);
			},
		);
	}

	async #uploadFile(): Promise<string | null> {
		const selectedFile = this.selectedFile();
		if (!selectedFile) return null;

		const formData = new FormData();
		formData.append('file', selectedFile);

		const response = await firstValueFrom(this.api.post<any>(FILE_URL, formData));
		return response?.data?.id || null;
	}

	#validateDownload(): boolean {
		const rules = [
			{
				condition: !this.formData.channel().value(),
				message: 'Please select channel first.',
			},
			{
				condition: !this.formData.payload.msgType().value(),
				message: 'Please select a valid message type.',
			},
			{
				condition: !this.formData.payload.text().value(),
				message: 'Please input message body first.',
			},
		];

		for (const rule of rules) {
			if (rule.condition) {
				BaseAlert('Error', rule.message, 'error');
				return false;
			}
		}

		return true;
	}

	navigateToList(): void {
		this.router.navigate(['../'], { relativeTo: this.activatedRoute });
	}
}

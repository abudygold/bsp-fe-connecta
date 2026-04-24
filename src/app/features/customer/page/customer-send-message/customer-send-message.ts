import { Component, OnInit, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Button, ButtonModel, Dropdown, Textarea, Textbox } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { forkJoin } from 'rxjs';
import { BaseForm } from '../../../../core/common';
import { MessageValidation } from '../../../../shared/components/message-validation';
import {
	ISendMessageForm,
	SEND_MESSAGE_DEFAULT_STATE,
	SEND_MESSAGE_SCHEMA_FORM,
} from '../../../../shared/constant/formly/customer';
import {
	ACCOUNTS_GROUP_URL,
	ACCOUNTS_URL,
	CANCEL_BUTTON,
	CHANNEL_URL,
	MESSAGE_URL,
	SAVE_BUTTON,
	TEMPLATE_SMS_URL,
	TEMPLATE_WAU_URL,
} from '../../../../shared/constant/global';
import { IHttpResponse, IOptionList } from '../../../../shared/interface/base';

@Component({
	selector: 'app-customer-send-message',
	imports: [
		MatFormFieldModule,
		MatSelectModule,
		Textarea,
		Dropdown,
		Textbox,
		Button,
		MessageValidation,
		FontAwesomeModule,
		FormField,
	],
	templateUrl: './customer-send-message.html',
	styleUrl: './customer-send-message.css',
})
export class CustomerSendMessage extends BaseForm<ISendMessageForm> implements OnInit {
	opt = {
		from: signal<
			{
				name: string;
				options: IOptionList[];
			}[]
		>([]),
		to: signal<IOptionList[]>([]),
		channel: signal<any[]>([]),
		template: signal<any[]>([]),
	};

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.navigateToList())),
	};

	customer = signal<any>(null);
	templateSelected = signal<any>(null);

	constructor() {
		super(SEND_MESSAGE_DEFAULT_STATE, (schemaPath) => SEND_MESSAGE_SCHEMA_FORM(schemaPath));

		this.customer.set(
			this.activatedRoute.snapshot.queryParams['data']
				? JSON.parse(atob(this.activatedRoute.snapshot.queryParams['data']))
				: null,
		);

		this.#getOptionService();
		this.#getTemplateOptionService();
	}

	ngOnInit(): void {
		this.toOptions();
	}

	#getOptionService(): void {
		forkJoin({
			channel: this.api.get<IHttpResponse>(CHANNEL_URL),
			account: this.api.get<IHttpResponse>(ACCOUNTS_URL, { itemPerPage: 100 }),
			accountGroup: this.api.get<IHttpResponse>(ACCOUNTS_GROUP_URL, { itemPerPage: 100 }),
		}).subscribe({
			next: (res) => {
				this.opt.channel.set(res.channel?.data?.list || []);
				this.opt.from.update((from) => [
					...from,
					{
						name: 'Accounts',
						options:
							res.account?.data?.list?.map((item: any) => ({
								value: item.accountNo,
								label: `${item.accountName} (${item.accountNo})`,
							})) || [],
					},
					{
						name: 'Groups',
						options:
							res.accountGroup?.data?.list?.map((item: any) => ({
								value: item.name,
								label: `${item.name} [Group]`,
							})) || [],
					},
				]);

				this.formData.from().value.set(res.account?.data?.list.at(0).accountNo);
			},
		});
	}

	#getTemplateOptionService(): void {
		let URL = '';
		const channel = this.formData.channel().value();

		switch (channel) {
			case 'WA':
			case 'WAU':
				URL = TEMPLATE_WAU_URL;
				break;
			case 'SMS':
				URL = TEMPLATE_SMS_URL;
				break;
			default:
				URL = '';
		}

		this.api.get<IHttpResponse>(URL, { itemPerPage: 100 }).subscribe({
			next: (res) => {
				this.opt.template.set(res?.data?.list || []);

				if (['WA', 'WAU'].includes(channel)) {
					this.opt.template.update((template) => [
						{
							id: 'randomOTP',
							name: 'Random OTP',
						},
						...template,
					]);
				}
			},
		});
	}

	changeChannelHandler(event: MatSelectChange): void {
		this.formData.to().value.set('');
		this.toOptions();
		this.#getTemplateOptionService();
	}

	changeMsgTypeHandler(event: MatSelectChange): void {
		const msgType = event.value;

		if (msgType === 'text') {
			this.formData.template.lang().value.set('');
			this.formData.template.name().value.set('');
			this.formData.template.body.parameters().value.set([]);
			return;
		}

		this.formData.text().value.set('');
		this.formData.template.lang().value.set('id');
		this.formData.template.name().value.set(this.opt.template().at(0)?.id || '');

		if (this.formData.template.name().value() === 'randomOTP') {
			this.formData.template.body.parameters().value.set([
				{
					name: '',
				},
			]);
		} else if (this.formData.template.name().value() !== 'randomOTP') {
			const template = this.opt
				.template()
				.find((item) => item.id === this.formData.template.name().value());
			const paramters = this.parameterCount(template?.payload?.body || '');

			for (let i = 0; i < paramters; i++) {
				this.formData.template.body.parameters().value.update((parameters) => [
					...parameters,
					{
						name: '',
					},
				]);
			}
		}
		return;
	}

	changeTemplateHandler(event: MatSelectChange) {
		if (this.formData.template.name().value() === 'randomOTP') {
			this.templateSelected.set('');
			return;
		}

		this.templateSelected.set(this.opt.template().find((item) => item.id === event.value));
	}

	toOptions(): void {
		if (!this.customer()) this.opt.to.set([]);

		const options = this.customer()
			.filter((item: any) => this.formData.channel().value() === item.channel)
			.map((item: any) => item.contactNo);

		this.opt.to.set(options);
		options.length && this.formData.to().value.set(options.at(0));
	}

	parameterCount(text: string) {
		// Regex ini mencari pola {{ diikuti angka, lalu }}
		const regex = /\{\{\d+\}\}/g;
		const matches = text.match(regex);

		return matches ? matches.length : 0;
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		let bodyReq = null;
		const { template, text, ...forms } = {
			...this.formModel(),
		};

		if (forms.msgType === 'text') bodyReq = { ...forms, text };
		else
			bodyReq = {
				...forms,
				template: {
					...template,
					name: this.opt.template().find((item) => item.id === template.name)?.name,
					body: {
						...template.body,
						parameters: template.body.parameters.map((item) => item.name),
					},
				},
			};

		this.sendToApi(
			MESSAGE_URL,
			bodyReq,
			{},
			() => this.navigateToList(),
			() => {
				this.btn.save().disabled?.update((_) => false);
				this.btn.cancel().disabled?.update((_) => false);
			},
		);
	}

	navigateToList(): void {
		this.router.navigate(['../'], { relativeTo: this.activatedRoute });
	}
}

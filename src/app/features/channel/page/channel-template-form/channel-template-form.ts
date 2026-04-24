import { NgTemplateOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Button, ButtonModel, Dropdown, Textarea, Textbox } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilePdf, faPlay } from '@fortawesome/free-solid-svg-icons';
import { BaseForm } from '../../../../core/common';
import { MessageValidation } from '../../../../shared/components/message-validation';
import {
	ITemplateForm,
	TEMPLATE_DEFAULT_STATE,
	TEMPLATE_EDIT_STATE,
	TEMPLATE_SCHEMA_FORM,
} from '../../../../shared/constant/formly/channel';
import {
	CANCEL_BUTTON,
	SAVE_BUTTON,
	TEMPLATE_SMS_URL,
	TEMPLATE_WAU_URL,
} from '../../../../shared/constant/global';
import { ChannelTemplatePreview } from '../../components/channel-template-preview';

@Component({
	selector: 'app-channel-template-form',
	imports: [
		NgTemplateOutlet,
		Textarea,
		Dropdown,
		Textbox,
		Button,
		MessageValidation,
		FontAwesomeModule,
		ChannelTemplatePreview,
	],
	templateUrl: './channel-template-form.html',
	styleUrl: './channel-template-form.css',
})
export class ChannelTemplateForm extends BaseForm<ITemplateForm> {
	channel = signal<string>('');

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.navigateToList())),
	};

	faIcon = {
		faPlay,
		faFilePdf,
	};

	constructor() {
		super(TEMPLATE_DEFAULT_STATE, (schemaPath) => TEMPLATE_SCHEMA_FORM(schemaPath));
		this.channel.set(this.router.url.split('/').at(3)?.toUpperCase() || '');
		this.id() && this.#getDetailByChannel();
	}

	#getDetailByChannel(): void {
		let URL = '';
		switch (this.channel()) {
			case 'WAU':
				URL = TEMPLATE_WAU_URL;
				break;
			case 'SMS':
				URL = TEMPLATE_SMS_URL;
				break;
			default:
				break;
		}

		this.getDetailService(URL, TEMPLATE_EDIT_STATE);
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		let URL = '';
		switch (this.channel()) {
			case 'WAU':
				URL = TEMPLATE_WAU_URL;
				break;
			case 'SMS':
				URL = TEMPLATE_SMS_URL;
				break;
			default:
				break;
		}

		this.sendToApi(
			URL,
			this.formModel(),
			{},
			() => this.navigateToList(),
			() => {
				this.btn.save().disabled?.update((_) => false);
				this.btn.cancel().disabled?.update((_) => false);
			},
		);
	}

	navigateToList(): void {
		this.router.navigate([this.id() ? '../../' : '../'], { relativeTo: this.activatedRoute });
	}
}

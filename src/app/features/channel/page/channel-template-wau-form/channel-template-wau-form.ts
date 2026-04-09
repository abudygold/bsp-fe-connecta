import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Button, ButtonModel, Dropdown, Textarea, Textbox } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilePdf, faPlay } from '@fortawesome/free-solid-svg-icons';
import { BaseForm } from '../../../../core/common';
import { MessageValidation } from '../../../../shared/components/message-validation';
import {
	ITemplateWAUForm,
	TEMPLATE_WAU_DEFAULT_STATE,
	TEMPLATE_WAU_EDIT_STATE,
	TEMPLATE_WAU_SCHEMA_FORM,
} from '../../../../shared/constant/formly/channel';
import { CANCEL_BUTTON, SAVE_BUTTON, TEMPLATE_URL } from '../../../../shared/constant/global';

@Component({
	selector: 'app-channel-template-wau-form',
	imports: [Textarea, Dropdown, Textbox, Button, MessageValidation, FontAwesomeModule],
	templateUrl: './channel-template-wau-form.html',
	styleUrl: './channel-template-wau-form.css',
})
export class ChannelTemplateWAUForm extends BaseForm<ITemplateWAUForm> {
	protected readonly sanitizer = inject(DomSanitizer);

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.navigateToList())),
	};

	faIcon = {
		faPlay,
		faFilePdf,
	};

	constructor() {
		super(TEMPLATE_WAU_DEFAULT_STATE, (schemaPath) => TEMPLATE_WAU_SCHEMA_FORM(schemaPath));
		this.id() && this.getDetailService(TEMPLATE_URL, TEMPLATE_WAU_EDIT_STATE);
	}

	get safeVideoUrl(): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(
			this.formData.payload.header().value(),
		);
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(
			TEMPLATE_URL,
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
		this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
	}
}

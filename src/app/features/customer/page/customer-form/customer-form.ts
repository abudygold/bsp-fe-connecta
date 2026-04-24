import { Component, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Button, ButtonModel, Dropdown, SlideToggle, Textbox } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BaseForm } from '../../../../core/common';
import { MessageValidation } from '../../../../shared/components/message-validation';
import {
	CUSTOMER_DEFAULT_STATE,
	CUSTOMER_EDIT_STATE,
	CUSTOMER_SCHEMA_FORM,
	ICustomerForm,
} from '../../../../shared/constant/formly/customer';
import {
	ADD_NEW_BUTTON,
	CANCEL_BUTTON,
	CHANNEL_URL,
	CUSTOMER_URL,
	SAVE_BUTTON,
} from '../../../../shared/constant/global';
import { IOptionList } from '../../../../shared/interface/base';

@Component({
	selector: 'app-customer-form',
	imports: [
		Dropdown,
		Textbox,
		Button,
		SlideToggle,
		MatDividerModule,
		MessageValidation,
		FontAwesomeModule,
	],
	templateUrl: './customer-form.html',
	styleUrl: './customer-form.css',
})
export class CustomerForm extends BaseForm<ICustomerForm> {
	opt = {
		channel: signal<IOptionList[]>([]),
	};

	btn = {
		save: signal<ButtonModel>(SAVE_BUTTON('Submit', () => this.handleSubmit())),
		cancel: signal<ButtonModel>(CANCEL_BUTTON('Cancel', () => this.navigateToList())),
		members: signal<ButtonModel>(ADD_NEW_BUTTON('Members', () => this.addMember())),
	};

	faIcon = {
		faTrash,
	};

	constructor() {
		super(CUSTOMER_DEFAULT_STATE, (schemaPath) => CUSTOMER_SCHEMA_FORM(schemaPath));
		this.id() && this.getDetailService(CUSTOMER_URL, CUSTOMER_EDIT_STATE);
		this.#loadOptions();
	}

	#loadOptions(): void {
		this.mapOptions(CHANNEL_URL, this.opt.channel);
	}

	addMember(): void {
		this.formData
			.contacts()
			.value.update((contacts) => [
				...contacts,
				{ channel: 'WA', contactNo: '', displayName: '', isPrimary: 0 },
			]);
	}

	removeMember(index: number): void {
		this.formData.contacts().value.update((contacts) => contacts.filter((_, i) => i !== index));
	}

	handleSubmit(): void {
		this.btn.save().disabled?.update((_) => true);
		this.btn.cancel().disabled?.update((_) => true);

		this.sendToApi(
			CUSTOMER_URL,
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
		this.router.navigate(['../'], { relativeTo: this.activatedRoute });
	}
}

import { Component, computed } from '@angular/core';
import { submit } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import {
	FORMLY_REGISTER_FORM,
	IRegisterForm,
	REGISTER_DEFAULT_STATE,
	REGISTER_SCHEMA_FORM,
} from '../../../../shared/constant/formly/auth';
import { PASSWORD_RULES_CHECK } from '../../../../shared/constant/global';
import { BaseForm } from '../../../common';

@Component({
	selector: 'app-auth-register',
	imports: [MatButtonModule, MatIconModule, Formly],
	templateUrl: './auth-register.html',
	styleUrl: './auth-register.css',
})
export class AuthRegister extends BaseForm<IRegisterForm> {
	formConfig!: FormlyFormConfig;

	constructor() {
		super(REGISTER_DEFAULT_STATE, (schemaPath) => REGISTER_SCHEMA_FORM(schemaPath));
		this.formConfig = FORMLY_REGISTER_FORM(this.formData);
	}

	passwordRule = computed<any[]>(() => {
		const password = this.formData.password();
		return PASSWORD_RULES_CHECK(password.value());
	});

	doRegister(): void {
		submit(this.formData, async () => this.#registerService());
	}

	#registerService(): void {
		console.log('-- Submit the form --', this.formModel());
	}

	navigateToLogin(): void {
		this.router.navigate(['/'], {
			relativeTo: this.activatedRoute,
		});
	}
}

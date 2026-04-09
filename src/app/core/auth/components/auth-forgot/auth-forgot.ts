import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import {
	FORGOT_DEFAULT_STATE,
	FORGOT_SCHEMA_FORM,
	FORMLY_FORGOT_FORM,
	IForgotForm,
} from '../../../../shared/constant/formly/auth';
import { BaseForm } from '../../../common';

@Component({
	selector: 'app-auth-forgot',
	imports: [MatButtonModule, MatIconModule, Formly],
	templateUrl: './auth-forgot.html',
	styleUrl: './auth-forgot.css',
})
export class AuthForgot extends BaseForm<IForgotForm> {
	formConfig!: FormlyFormConfig;

	constructor() {
		super(FORGOT_DEFAULT_STATE, (schemaPath) => FORGOT_SCHEMA_FORM(schemaPath));
		this.formConfig = FORMLY_FORGOT_FORM(this.formData);
	}

	doResetPassword(): void {
		/* this.sendToApi(
			LOGIN_URL,
			{
				email: this.formModel().email,
				pass: this.formModel().password,
			},
			{},
			(response: any) => {
				this.#auth.setTokens(response.data);
				this.route.navigate(['./secure']);
			},
		); */
	}

	navigateToLogin(): void {
		this.router.navigate(['/'], {
			relativeTo: this.activatedRoute,
		});
	}
}

import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Formly, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import {
	FORMLY_LOGIN_FORM,
	ILoginForm,
	LOGIN_DEFAULT_STATE,
	LOGIN_SCHEMA_FORM,
} from '../../../../shared/constant/formly';
import { LOGIN_URL } from '../../../../shared/constant/global';
import { BaseForm } from '../../../common';
import { Auth } from '../../../services';

@Component({
	selector: 'app-auth-login',
	imports: [MatButtonModule, MatDividerModule, Formly],
	templateUrl: './auth-login.html',
	styleUrl: './auth-login.css',
})
export class AuthLogin extends BaseForm<ILoginForm> {
	#auth = inject(Auth);

	formConfig!: FormlyFormConfig;

	constructor() {
		super(LOGIN_DEFAULT_STATE, (schemaPath) => LOGIN_SCHEMA_FORM(schemaPath));
		this.formConfig = FORMLY_LOGIN_FORM(this.formData);
	}

	doLoginByGoogleAccount(): void {
		console.log('-- Login by Google Account --');
	}

	doLogin(): void {
		this.sendToApi(
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
		);
	}

	navigateToAuth(page: 'forgot' | 'register'): void {
		this.route.navigate([`./${page}`], {
			relativeTo: this.activatedRoute,
		});
	}
}

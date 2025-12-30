import { Component, inject, signal } from '@angular/core';
import { email, Field, form, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkbox } from '../../../../shared/components/form/checkbox';
import { TextInput } from '../../../../shared/components/form/text-input';
import { TextPassword } from '../../../../shared/components/form/text-password';
import { LOGIN_URL } from '../../../../shared/config';
import { LoginData } from '../../../../shared/form-data';
import { API, Auth } from '../../../services';

@Component({
  selector: 'app-auth-login',
  imports: [Field, MatButtonModule, MatDividerModule, TextInput, TextPassword, Checkbox],
  templateUrl: './auth-login.html',
  styleUrl: './auth-login.css',
})
export class AuthLogin {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  #auth = inject(Auth);
  #api = inject(API);

  formModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  formData = form(this.formModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
  });

  doLoginByGoogleAccount(): void {
    console.log('-- Login by Google Account --');
  }

  doLogin(): void {
    this.formData.email().markAsTouched();
    this.formData.password().markAsTouched();

    if (this.formData().invalid()) return;

    console.log(this.formData().value());

    this.#api
      .post(LOGIN_URL, {
        email: this.formModel().email,
        pass: this.formModel().password,
      })
      .subscribe({
        next: (response: any) => this.#auth.setTokens(response.data),
        complete: () => this.#router.navigate(['./secure']),
      });
  }

  navigateToAuth(page: 'forgot' | 'register'): void {
    this.#router.navigate([`./${page}`], {
      relativeTo: this.#activatedRoute,
    });
  }
}

import { Component, inject, signal } from '@angular/core';
import { email, Field, form, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkbox } from '../../../../shared/components/form/checkbox';
import { TextInput } from '../../../../shared/components/form/text-input';
import { TextPassword } from '../../../../shared/components/form/text-password';
import { LoginData } from '../../../../shared/form/form-data';
import { Auth } from '../../../services';

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

  loginModel = signal<LoginData>({
    email: 'example@gmail.com',
    password: '@eX4mPL3@',
    rememberMe: false,
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
  });

  doLoginByGoogleAccount(): void {
    console.log('-- Login by Google Account --');
  }

  doLogin(): void {
    this.loginForm.email().markAsTouched();
    this.loginForm.password().markAsTouched();

    const formData = this.loginModel();

    if (this.loginForm().invalid()) return;

    console.log('-- Submit the form --', formData);
    this.#auth.setTokens(
      btoa(this.loginForm.password().value() + 'access'),
      btoa(this.loginForm.password().value() + 'refresh'),
    );
    this.#router.navigate(['./secure']);
  }

  navigateToAuth(page: 'forgot' | 'register'): void {
    this.#router.navigate([`./${page}`], {
      relativeTo: this.#activatedRoute,
    });
  }
}

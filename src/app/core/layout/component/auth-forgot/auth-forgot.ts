import { Component, inject, signal } from '@angular/core';
import { email, Field, form, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { TextInput } from '../../../../shared/components/form/text-input';
import { ForgotData } from '../../../../shared/form-data';

@Component({
  selector: 'app-auth-forgot',
  imports: [Field, MatButtonModule, MatIconModule, TextInput],
  templateUrl: './auth-forgot.html',
  styleUrl: './auth-forgot.css',
})
export class AuthForgot {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  loginModel = signal<ForgotData>({
    email: '',
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
  });

  doResetPassword(): void {
    this.loginForm.email().markAsTouched();

    const formData = this.loginModel();

    if (this.loginForm().invalid()) return;

    console.log('-- Submit the form --', formData);
  }

  navigateToLogin(): void {
    this.#router.navigate(['/'], {
      relativeTo: this.#activatedRoute,
    });
  }
}

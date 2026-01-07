import { Component, computed, inject, signal } from '@angular/core';
import { email, Field, form, required, submit, validate } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Select } from '../../../../shared/components/form/select';
import { TextArea } from '../../../../shared/components/form/text-area';
import { TextInput } from '../../../../shared/components/form/text-input';
import { TextPassword } from '../../../../shared/components/form/text-password';
import { PASSWORD_RULES_CHECK, PASSWORD_VALIDATION } from '../../../../shared/config';
import { RegisterData } from '../../../../shared/form-data';

@Component({
  selector: 'app-auth-register',
  imports: [Field, MatButtonModule, MatIconModule, TextInput, TextArea, Select, TextPassword],
  templateUrl: './auth-register.html',
  styleUrl: './auth-register.css',
})
export class AuthRegister {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  formModel = signal<RegisterData>({
    clientName: '',
    ownerName: '',
    country: {},
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  formData = form(this.formModel, (schemaPath) => {
    required(schemaPath.clientName, { message: 'Client name is required' });
    required(schemaPath.ownerName, { message: 'Owner name is required' });
    required(schemaPath.country, { message: 'Country is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    validate(schemaPath.password, ({ value, valueOf }) => {
      const password = value();
      const confirmPassword = valueOf(schemaPath.confirmPassword);

      return PASSWORD_VALIDATION(password, confirmPassword);
    });
    validate(schemaPath.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword = value();
      const password = valueOf(schemaPath.password);

      return PASSWORD_VALIDATION(confirmPassword, password);
    });
  });

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
    this.#router.navigate(['/'], {
      relativeTo: this.#activatedRoute,
    });
  }
}

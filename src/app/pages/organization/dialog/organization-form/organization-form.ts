import { Component, computed, inject, signal } from '@angular/core';
import { email, Field, form, required, validate } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { API } from '../../../../core/services';
import { TextInput } from '../../../../shared/components/form/text-input';
import { TextPassword } from '../../../../shared/components/form/text-password';
import { ORGS_URL, PASSWORD_RULES_CHECK, PASSWORD_VALIDATION } from '../../../../shared/config';
import { OrganizationData } from '../../../../shared/form-data';
import { IHttpResponse } from '../../../../shared/interface/base/http-response';

@Component({
  selector: 'app-organization-form',
  imports: [
    Field,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    TextInput,
    TextPassword,
  ],
  templateUrl: './organization-form.html',
  styleUrl: './organization-form.css',
})
export class OrganizationForm {
  #api = inject(API);
  data = inject<any>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<OrganizationForm>);

  formModel = signal<OrganizationData>({
    name: this.data?.name || '',
    owner: {
      name: this.data?.owner.name || '',
      email: this.data?.owner.email || '',
      pass: this.data?.owner.pass || '',
    },
  });

  formData = form(this.formModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.owner.name, { message: 'Owner Name is required' });
    required(schemaPath.owner.email, { message: 'Owner Email is required' });
    email(schemaPath.owner.email, { message: 'Enter a valid email address' });
    validate(schemaPath.owner.pass, ({ value }) => PASSWORD_VALIDATION(value()));
  });

  passwordRule = computed<any[]>(() => {
    const password = this.formData.owner.pass();
    return PASSWORD_RULES_CHECK(password.value());
  });

  onSubmit(): void {
    this.formData.name().markAsTouched();
    this.formData.owner.name().markAsTouched();
    this.formData.owner.email().markAsTouched();
    this.formData.owner.pass().markAsTouched();

    if (this.formData().invalid()) return;

    const URL = this.data ? `${ORGS_URL}/${this.data.id}` : ORGS_URL;

    this.#api.post<IHttpResponse>(URL, this.formModel()).subscribe({
      next: () => {
        Swal.fire({
          title: this.data ? 'Updated!' : 'Created!',
          text: this.data
            ? 'Your changes have been saved successfully.'
            : 'The new role has been created.',
          icon: 'success',
        });

        this.dialogRef.close(true);
      },
    });
  }
}

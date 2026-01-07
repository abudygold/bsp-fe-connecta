import { Component, inject, signal } from '@angular/core';
import { Field, form, required, submit } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { API } from '../../../../core/services';
import { Select } from '../../../../shared/components/form/select';
import { TextInput } from '../../../../shared/components/form/text-input';
import { ORGS_URL, ROLES_URL } from '../../../../shared/config';
import { RoleData } from '../../../../shared/form-data';
import { IHttpResponse } from '../../../../shared/interface/base/http-response';

@Component({
  selector: 'app-role-form',
  imports: [
    Field,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    TextInput,
    Select,
  ],
  templateUrl: './role-form.html',
  styleUrl: './role-form.css',
})
export class RoleForm {
  #api = inject(API);
  data = inject<any>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<RoleForm>);

  formModel = signal<RoleData>({
    name: this.data?.name || '',
    orgId: this.data?.orgId || '',
  });

  formData = form(this.formModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.orgId, { message: 'Organization is required' });
  });

  orgsOptions = signal<any[]>([]);

  constructor() {
    this.#getParentMenu();
  }

  #getParentMenu(): void {
    this.#api
      .get<IHttpResponse>(ORGS_URL, {
        pageNo: 1,
        itemPerPage: 200,
      })
      .subscribe({
        next: (response: IHttpResponse) => this.orgsOptions.set(response.data?.list || []),
      });
  }

  onSubmit(): void {
    submit(this.formData, async () => this.#roleService());
  }

  #roleService(): void {
    const URL = this.data ? `${ROLES_URL}/${this.data.id}` : ROLES_URL;

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

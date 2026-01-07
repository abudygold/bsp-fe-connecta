import { Component, inject, signal } from '@angular/core';
import { Field, form, required, submit } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { API } from '../../../../core/services';
import { Select } from '../../../../shared/components/form/select';
import { SlideToggle } from '../../../../shared/components/form/slide-toggle';
import { TextInput } from '../../../../shared/components/form/text-input';
import { MENUS_URL } from '../../../../shared/config';
import { MenuData } from '../../../../shared/form-data';
import { IHttpResponse } from '../../../../shared/interface/base/http-response';

@Component({
  selector: 'app-menu-form',
  imports: [
    Field,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    TextInput,
    Select,
    SlideToggle,
  ],
  templateUrl: './menu-form.html',
  styleUrl: './menu-form.css',
})
export class MenuForm {
  #api = inject(API);
  data = inject<any>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<MenuForm>);

  formModel = signal<MenuData>({
    title: this.data?.title || '',
    parentId: this.data?.parentId || '',
    icon: this.data?.icon || '',
    target: this.data?.target || '',
    orderNo: this.data?.orderNo || 0,
    isPrivate: this.data?.isPrivate || false,
  });

  formData = form(this.formModel, (schemaPath) => {
    required(schemaPath.title, { message: 'Title is required' });
  });

  parentOptions = signal<any[]>([]);

  constructor() {
    this.#getParentMenu();
  }

  #getParentMenu(): void {
    this.#api
      .get<IHttpResponse>(MENUS_URL, {
        pageNo: 1,
        itemPerPage: 200,
        includePrivate: true,
      })
      .subscribe({
        next: (response: IHttpResponse) => this.parentOptions.set(response.data?.list || []),
      });
  }

  onSubmit(): void {
    submit(this.formData, async () => this.#menuService());
  }

  #menuService(): void {
    const URL = this.data ? `${MENUS_URL}/${this.data.id}` : MENUS_URL;

    this.#api.post<IHttpResponse>(URL, this.formModel()).subscribe({
      next: () => {
        Swal.fire({
          title: this.data ? 'Updated!' : 'Created!',
          text: this.data
            ? 'Your changes have been saved successfully.'
            : 'The new menu has been created.',
          icon: 'success',
        });

        this.dialogRef.close(true);
      },
    });
  }
}

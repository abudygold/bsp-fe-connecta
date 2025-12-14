import { Component, input, model } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-checkbox',
  imports: [Field, MatFormFieldModule, MatCheckboxModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class Checkbox {
  label = input.required<string>();
  field = model.required<any>();
  icon = input<string>();

  get fieldControl(): any {
    return this.field();
  }
}

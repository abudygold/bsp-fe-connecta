import { Component, input, model } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select',
  imports: [Field, MatFormFieldModule, MatSelectModule],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  label = input.required<string>();
  key = input<{
    label: string;
    value?: string;
  }>();
  options = input<any[]>([]);
  field = model.required<any>();

  get fieldControl(): any {
    return this.field();
  }

  get isObject(): boolean {
    return typeof this.options().at(0) === 'object' && this.key() !== undefined;
  }
}

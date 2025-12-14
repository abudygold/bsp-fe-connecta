import { Component, input, model } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-input',
  imports: [Field, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.css',
})
export class TextInput {
  label = input.required<string>();
  field = model.required<any>();
  icon = input<string>();

  get fieldControl(): any {
    return this.field();
  }
}

import { Component, input, model } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-area',
  imports: [Field, MatFormFieldModule, MatInputModule],
  templateUrl: './text-area.html',
  styleUrl: './text-area.css',
})
export class TextArea {
  label = input.required<string>();
  field = model.required<any>();

  get fieldControl(): any {
    return this.field();
  }
}

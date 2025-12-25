import { Component, input, model } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slide-toggle',
  imports: [Field, MatSlideToggleModule],
  templateUrl: './slide-toggle.html',
  styleUrl: './slide-toggle.css',
})
export class SlideToggle {
  label = input.required<string>();
  field = model.required<any>();
  labelPosition = input<'before' | 'after'>('after');
  disabled = input<boolean>(false);

  get fieldControl(): any {
    return this.field();
  }
}

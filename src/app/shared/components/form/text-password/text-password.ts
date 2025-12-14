import { Component, input, model, signal } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-password',
  imports: [Field, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './text-password.html',
  styleUrl: './text-password.css',
})
export class TextPassword {
  label = input.required<string>();
  field = model.required<any>();

  hide = signal(true);

  get fieldControl(): any {
    return this.field();
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}

import { NgTemplateOutlet } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModel } from '../../model';

@Component({
  selector: 'app-button',
  imports: [NgTemplateOutlet, MatButtonModule, MatIconModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  onClick = output<void>();

  config = input.required<ButtonModel>();
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirmation',
  imports: [MatDialogModule, MatDividerModule, MatButtonModule, MatIconModule],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
})
export class Confirmation {}

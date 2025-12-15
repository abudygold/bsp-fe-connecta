import { NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { API, Auth } from '../../../services';

@Component({
  selector: 'app-admin-header',
  imports: [NgClass, MatToolbarModule, MatIconModule],
  templateUrl: './admin-header.html',
  styleUrl: './admin-header.css',
})
export class AdminHeader {
  #router = inject(Router);
  #api = inject(API);
  #auth = inject(Auth);

  toggleMenu = output<void>();
  isMobile = input<boolean>(false);

  onLogout(): void {
    this.#auth.clearTokens();
    this.#router.navigate(['./auth']);
    /* this.#auth.logoutApi().subscribe({
      next: () => {
        console.log('Logged out successfully');
      },
      error: (err) => {
        console.error('Logout failed', err);
      },
    }); */
  }
}

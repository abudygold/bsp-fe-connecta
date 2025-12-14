import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-reset',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './auth-reset.html',
  styleUrl: './auth-reset.css',
})
export class AuthReset {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  navigateToLogin(): void {
    this.#router.navigate(['/'], {
      relativeTo: this.#activatedRoute,
    });
  }
}

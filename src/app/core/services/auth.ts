import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LOGOUT_PATH, REFRESH_TOKEN_PATH } from '../../shared/config';
import { RefreshTokenResponse } from '../../shared/interface';
import { API } from './api';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  #api = inject(API);

  get accessToken(): string {
    return localStorage.getItem('access_token') || '';
  }

  get refreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  get isLoggedIn(): boolean {
    return !!this.accessToken;
  }

  setTokens(access: string, refresh?: string) {
    localStorage.setItem('access_token', access);
    if (refresh) {
      localStorage.setItem('refresh_token', refresh);
    }
  }

  clearTokens() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  refreshTokenApi() {
    return this.#api
      .post<RefreshTokenResponse>(REFRESH_TOKEN_PATH, {
        refreshToken: this.refreshToken,
      })
      .pipe(
        tap((res) => {
          this.setTokens(res.accessToken, res.refreshToken);
        }),
      );
  }

  logoutApi() {
    return this.#api.post(LOGOUT_PATH, {}).pipe(
      tap(() => {
        this.clearTokens();
      }),
    );
  }
}

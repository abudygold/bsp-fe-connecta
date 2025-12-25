import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LOGOUT_URL, REFRESH_TOKEN_URL } from '../../shared/config';
import { RefreshTokenResponse } from '../../shared/interface';
import { ILogin } from '../../shared/interface/auth';
import { API } from './api';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  #api = inject(API);

  get accessToken(): string {
    return localStorage.getItem('connecta.access_token') || '';
  }

  get refreshToken(): string | null {
    return localStorage.getItem('connecta.refresh_token');
  }

  get isLoggedIn(): boolean {
    return !!this.accessToken;
  }

  setTokens(account: ILogin) {
    localStorage.setItem('connecta.access_token', account.authToken);
    localStorage.setItem('connecta.refresh_token', account.refreshToken);
    localStorage.setItem('connecta.user_account', JSON.stringify(account));
  }

  clearTokens() {
    localStorage.clear();
  }

  refreshTokenApi() {
    return this.#api
      .post<RefreshTokenResponse>(REFRESH_TOKEN_URL, {
        refreshToken: this.refreshToken,
      })
      .pipe(
        tap((res) => {
          // this.setTokens(res.accessToken, res.refreshToken);
        }),
      );
  }

  logoutApi() {
    return this.#api.post(LOGOUT_URL, {}).pipe(
      tap(() => {
        this.clearTokens();
      }),
    );
  }
}

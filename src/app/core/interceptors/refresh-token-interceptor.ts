import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { REFRESH_TOKEN_URL } from '../../shared/config';
import { Auth } from '../services';

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status !== 401 || req.url.includes(REFRESH_TOKEN_URL)) {
        return throwError(() => error);
      }

      if (!isRefreshing) {
        isRefreshing = true;
        refreshTokenSubject.next(null);

        return auth.refreshTokenApi().pipe(
          switchMap((res) => {
            isRefreshing = false;
            refreshTokenSubject.next(res.accessToken);

            return next(
              req.clone({
                setHeaders: {
                  Authorization: `Bearer ${res.accessToken}`,
                },
              }),
            );
          }),
          catchError((err) => {
            isRefreshing = false;
            auth.clearTokens();
            router.navigate(['/auth']);
            return throwError(() => err);
          }),
        );
      }

      // WAIT until refresh token finished
      return refreshTokenSubject.pipe(
        filter((token) => token !== null),
        take(1),
        switchMap((token) =>
          next(
            req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
              },
            }),
          ),
        ),
      );
    }),
  );
};

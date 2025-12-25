import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideSweetAlert2 } from '@sweetalert2/ngx-sweetalert2';
import { routes } from './app.routes';
import { authInterceptor, errorInterceptor, refreshTokenInterceptor } from './core/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor, errorInterceptor, refreshTokenInterceptor]),
    ),
    provideSweetAlert2({
      dismissOnDestroy: true, // This ensures all alerts close when their hosting component is destroyed
    }),
  ],
};

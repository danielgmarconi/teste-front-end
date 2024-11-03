import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { loadingInterceptor } from './interceptor/loading.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes),
              provideAnimationsAsync(),
              provideToastr(),
              provideHttpClient(withInterceptorsFromDi()),
              {
                provide:HTTP_INTERCEPTORS,
                useClass:loadingInterceptor,
                multi:true
              }]
};

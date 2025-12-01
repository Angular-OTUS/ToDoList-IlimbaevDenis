import {
  ApplicationConfig,
  isDevMode,
  provideBrowserGlobalErrorListeners, provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {  provideHttpClient, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from '../interceptors/header-interceptor';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import {provideTranslateService} from '@ngx-translate/core'
import {provideTranslateHttpLoader } from "@ngx-translate/http-loader";
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimations(),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withInterceptors([headerInterceptor])),
    provideTranslateService(),
    provideTranslateHttpLoader(),
    provideRouter(routes),
   
],
};


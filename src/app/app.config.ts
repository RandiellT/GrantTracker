import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideHttpClient(withFetch())]
};

function provideHttpClient(arg0: any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
    throw new Error('Function not implemented.');
}

function withFetch(): any {
    throw new Error('Function not implemented.');
}


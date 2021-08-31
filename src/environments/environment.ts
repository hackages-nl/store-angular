// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { InjectionToken } from '@angular/core';

export const environment = {
  production: false,
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const BOOKS_API_URL = new InjectionToken<string>('BooksApiUrl', {
  providedIn: 'root',
  factory: () => 'api/books',
});

export const BOOKSEARCH_API_URL = new InjectionToken<string>(
  'BookSearchApiUrl',
  {
    providedIn: 'root',
    factory: () => 'api/books?title=',
  }
);

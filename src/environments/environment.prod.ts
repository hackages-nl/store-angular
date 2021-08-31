import { InjectionToken } from '@angular/core';

export const environment = {
  production: true,
};

export const BOOKS_API_URL = new InjectionToken<string>('BooksApiUrl', {
  providedIn: 'root',
  factory: () => 'https://myapp.com/api/books',
});

export const BOOKSEARCH_API_URL = new InjectionToken<string>(
  'BookSearchApiUrl',
  {
    providedIn: 'root',
    factory: () => 'https://myapp.com/api/books?title=',
  }
);

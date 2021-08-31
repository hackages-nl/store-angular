import { Injectable, Inject } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/types/book';
import { Observable, of } from 'rxjs';
import {
  BOOKSEARCH_API_URL,
  BOOKS_API_URL,
} from 'src/environments/environment';

@Injectable()
export class BookService {
  constructor(
    private http: HttpClient,
    @Inject(BOOKS_API_URL) private booksUrl: string,
    @Inject(BOOKSEARCH_API_URL) private searchUrl: string
  ) {}
  getUser() {
    return of({ name: 'Joseph' }); // this.http.get('https://api.github.com/users/davyengone');
  }

  getBooks() {
    return this.http.get<Book[]>(this.booksUrl);
  }
  search(title: string) {
    return this.http.get<Book[]>(this.searchUrl + title).pipe(
      delay(500),
      map((books) => {
        return books.map((book) => {
          return {
            id: book.id,
            title: book.title,
            category: book.category,
          };
        });
      })
    );
  }

  // Gets a book by its id from our mock server
  getBook(id: number): Observable<Book> {
    const url = this.booksUrl + '/' + id;
    return this.http.get<Book>(url);
  }

  // Update a book and re-fetch the list of books.
  update({ id, title }: { id: number; title: string }): Observable<Book[]> {
    const url = `${this.booksUrl}/${id}`;
    throw new Error('Oops. Not yet implemented...');
  }
}

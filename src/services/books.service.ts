import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/types/book';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {
  booksUrl = 'api/books';
  searchUrl = 'api/books?title=';
  constructor(private http: HttpClient) {}
  getUser() {
    return this.http.get('https://api.github.com/users/davyengone');
  }

  getBooks() {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      map((books) => {
        return books.map((book) => {
          return {
            title: book.title,
            category: book.category,
          };
        });
      })
    );
  }
  search(title: string) {
    return this.http.get<Book[]>(this.searchUrl + title).pipe(
      delay(500),
      map((books) => {
        return books.map((book) => {
          return {
            title: book.title,
            category: book.category,
          };
        });
      })
    );
  }

  // Gets a book by its id from our mock server
  getBook(id: number): Observable<Book> {
    throw new Error('Oops. Not yet implemented...');
  }

  // Update a book and re-fetch the list of books.
  update({ id, title }: { id: number; title: string }): Observable<Book[]> {
    const url = `${this.booksUrl}/${id}`;
    throw new Error('Oops. Not yet implemented...');
  }
}

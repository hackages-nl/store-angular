import { Injectable } from '@angular/core';
import { books as mockBooks } from '../mocks/books';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/types/book';

@Injectable()
export class BookService {
  booksUrl = 'api/books';
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
    const filteredBooks = mockBooks.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );

    return filteredBooks;
  }
}

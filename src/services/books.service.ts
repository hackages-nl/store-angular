import { Injectable } from '@angular/core';
import { books as mockBooks } from '../mocks/books';

@Injectable()
export class BookService {
  search(title: string) {
    const filteredBooks = mockBooks.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );

    return filteredBooks;
  }
}

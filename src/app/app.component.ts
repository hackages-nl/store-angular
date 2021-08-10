import { Component } from '@angular/core';
import { Book } from '../types/book';
import { books as mockBooks } from '../mocks/books';
import { BookService } from 'src/services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bookstore by Nalys';

  // const bs = new BookService()
  // this.bs = bs;
  constructor(private bs: BookService) {
    ///
  }

  // Use mock data
  books: Book[] = mockBooks;

  search(value: string) {
    this.books = this.bs.search(value);
  }
}

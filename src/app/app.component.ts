import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BookService } from 'src/services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Bookstore by ';
  books: Book[] = [];

  // const bs = new BookService()
  constructor(private bs: BookService) {}

  ngOnInit() {
    // 5€
    this.bs.getUser().subscribe((userInfo: any) => {
      this.title += userInfo.name;
    });

    this.bs.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  search(value: string) {
    this.books = this.bs.search(value);
  }
}

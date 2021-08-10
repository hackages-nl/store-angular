import { Component, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BookService } from 'src/services/books.service';
import { merge } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Bookstore by ';
  books: Book[] = [];
  searchEventEmitter: EventEmitter<string> = new EventEmitter();

  // const bs = new BookService()
  constructor(private bs: BookService) {}

  ngOnInit() {
    // 5€
    this.bs.getUser().subscribe((userInfo: any) => {
      this.title += userInfo.name;
    });

    const searchBooks = this.searchEventEmitter.pipe(
      switchMap((title) => this.bs.search(title)),
      tap(console.log)
    );
    const getBooks = this.bs.getBooks();

    merge(getBooks, searchBooks).subscribe((books) => (this.books = books));
  }
}

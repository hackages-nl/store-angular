import { Component, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BookService } from 'src/services/books.service';
import { merge, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Bookstore by ';
  books$: Observable<Book[]> = of([]);
  searchEventEmitter: EventEmitter<string> = new EventEmitter();
  userInfo$: Observable<any> = of({});

  // const bs = new BookService()
  constructor(private bs: BookService) {}

  ngOnInit() {
    this.userInfo$ = this.bs.getUser();

    const searchBooks = this.searchEventEmitter.pipe(
      switchMap((title) => this.bs.search(title)),
      tap(console.log)
    );
    const getBooks = this.bs.getBooks();

    this.books$ = merge(getBooks, searchBooks);
  }
}

import { Component, OnInit, EventEmitter } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { BookService } from 'src/services/books.service';
import { Book } from 'src/types/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
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

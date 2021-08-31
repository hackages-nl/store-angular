import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { BookService } from 'src/services/books.service';
import { Book } from 'src/types/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book$!: Observable<Book | null>;
  constructor(
    private route: ActivatedRoute,
    private bs: BookService,
    private location: Location
  ) {}
  subscription!: Subscription;
  error!: string;

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.bs.getBook(params.bookId)),
      catchError((err) => {
        this.error = err;
        return of(null);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  save() {}

  goBack() {
    this.location.back();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @Input() books: Book[] = [];

  constructor() {}

  ngOnInit(): void {}
}

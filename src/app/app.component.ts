import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services/books.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Bookstore by ';
  userInfo$: Observable<any> = of({});

  // const bs = new BookService()
  constructor(private bs: BookService) {}

  ngOnInit() {
    this.userInfo$ = this.bs.getUser();
  }
}

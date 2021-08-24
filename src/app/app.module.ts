import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookService } from 'src/services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from 'src/services/api.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InputBookComponent } from './input-book/input-book.component';
import { routes } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [AppComponent, InputBookComponent, DashboardComponent, BookDetailComponent, HeaderComponent, BooksComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
    }),
  ],
  providers: [BookService, InMemoryDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

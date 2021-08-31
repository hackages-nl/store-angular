import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InjectionToken, Injector, NgModule } from '@angular/core';
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
import { UpperCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InputBookComponent,
    DashboardComponent,
    BookDetailComponent,
    HeaderComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
    }),
  ],
  providers: [
    { provide: BookService, useClass: BookService },
    InMemoryDataService,
    UpperCasePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

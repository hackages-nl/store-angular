import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookService } from 'src/services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from 'src/services/api.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
    }),
  ],
  providers: [BookService, InMemoryDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookService } from 'src/services/books.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}

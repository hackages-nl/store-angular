import { books } from './../mocks/books';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      books,
    };
  }
}

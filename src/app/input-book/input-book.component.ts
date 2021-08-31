import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-book',
  templateUrl: './input-book.component.html',
  styleUrls: ['./input-book.component.css'],
})
export class InputBookComponent {
  @Input()
  searchEvent!: EventEmitter<string>;
}

import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnChanges {
  @Input() title!: string;
  price: number = 100;
  userCurrency = window.navigator.language;

  constructor(private uppercasePipe: UpperCasePipe) {}

  ngOnChanges() {
    this.title = this.uppercasePipe.transform(this.title);
  }
}

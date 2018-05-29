import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // options = { allowedTypes: '.csv, .xml, .json', multiple: false };
  options = { allowedTypes: 'image/*', multiple: 'false' };
  constructor() {

  }
}

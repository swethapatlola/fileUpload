import { Component, Output, EventEmitter } from '@angular/core';
import { FileOptions } from '../../projects/file-lib/src/lib/file-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 // options: FileOptions[] = [new FileOptions('image/*', 'false')];
  options: FileOptions[] = [
    {
      allowType: 'image/*',
      isMultiple: 'multiple'
    }
  ];

  constructor() {
  }
}

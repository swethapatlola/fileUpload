import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-file-lib',
  templateUrl: './file-lib.component.html',
  styles: []
})
export class FileLibComponent implements OnInit {
  url: any;
  constructor() { }

  ngOnInit() { }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      /* Call your http service to save file on server side */
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        let target: any = event.target;
        this.url = target.result;
      };
    }
  }
}

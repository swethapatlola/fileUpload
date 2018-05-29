import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Message } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';
import { FileOptions } from './file-options';

@Component({
  selector: 'lib-file-lib',
  templateUrl: './file-lib.component.html',
  styleUrls: ['./file-lib.component.css']
})
export class FileLibComponent implements OnInit {
  url: any;
  @Input() fileOptions: FileOptions;

  msgs: Message[];

  uploadedFiles: any[] = [];

  constructor() { console.log(this.fileOptions); }

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

  myUploader(event) {
    // console.log('event.target.files', event.files);
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(file);
      this.url = file.objectURL.changingThisBreaksApplicationSecurity;
      /* Call your http service to save file on server side */
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }
  }
  onBeforeUpload(ev) {
    // ev.formData.append('field', JSON.stringify(field));
    ev.xhr.withCredentials = true;
    ev['Content-Type'] = undefined;
    // console.log(ev);
  }
}

import { NgModule } from '@angular/core';
import { FileLibComponent } from './file-lib.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { GrowlModule } from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    GrowlModule
  ],
  declarations: [FileLibComponent],
  exports: [FileLibComponent]
})
export class FileLibModule { }

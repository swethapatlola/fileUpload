import { NgModule } from '@angular/core';
import { FileLibComponent } from './file-lib.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileLibComponent],
  exports: [FileLibComponent]
})
export class FileLibModule { }

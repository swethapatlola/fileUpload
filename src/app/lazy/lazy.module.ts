import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompFourComponent } from '../comp-four/comp-four.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompFourComponent],
  exports : [CompFourComponent]
})
export class LazyModule { }

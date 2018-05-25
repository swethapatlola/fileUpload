import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from '../comp-one/comp-one.component';
import { CompFourComponent } from '../comp-four/comp-four.component';
import { LazyModule } from '../lazy/lazy.module';

const routes: Routes = [
  {
    path: '',
    component: CompFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), LazyModule],
  exports: [RouterModule]
})
export class SecondRoutingModule { }

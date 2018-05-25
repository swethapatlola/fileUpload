import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from '../comp-one/comp-one.component';
import { CompTwoComponent } from '../comp-two/comp-two.component';
import { CompThreeComponent } from '../comp-three/comp-three.component';
import { SecondModule } from '../second/second.module';

const routes: Routes = [

  {
    path : '',
    loadChildren: () => SecondModule
  },
  {
    path : 'comp-three',
    component : CompThreeComponent
  },
  {
    path : 'comp-two',
    component : CompTwoComponent
  },
  {
    path: 'lazyModule',
    loadChildren: () => SecondModule
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }

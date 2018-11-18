import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {CounterViewComponent} from './views/counterView.component';

const routes: Routes = [
  {
    path: 'counter-view',
    component: CounterViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

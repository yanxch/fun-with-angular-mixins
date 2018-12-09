import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterViewComponent} from './views/counterView.component';
import {CounterViewComponent2} from './views/counterView2.component';

const routes: Routes = [
  {
    path: 'counter-view',
    component: CounterViewComponent
  },
  {
    path: 'counter-view-2',
    component: CounterViewComponent2
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

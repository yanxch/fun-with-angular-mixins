import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterContainer} from './container/counter.container';

const routes: Routes = [
  {
    path: 'counter-view',
    component: CounterContainer
  },
  { path: '', redirectTo: '/counter-view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

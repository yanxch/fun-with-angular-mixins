import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterContainer} from './container/counter.container';
import {CounterHookContainer} from './container/counter-hook/counter-hook.container';

const routes: Routes = [
  {
    path: 'counter-view',
    component: CounterContainer
  },
  {
    path: 'counter-hook-view',
    component: CounterHookContainer
  },
  { path: '', redirectTo: '/counter-view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

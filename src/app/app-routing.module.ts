import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterViewComponent} from './views/counterView.component';

const routes: Routes = [
  {
    path: 'counter-view',
    component: CounterViewComponent
  },
  { path: '', redirectTo: '/counter-view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

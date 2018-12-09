import {NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from 'src/state';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {CounterViewComponent} from './views/counterView.component';
import {CounterViewComponent2} from './views/counterView2.component';
import {ComponentState} from 'src/lib/mixins/captain-hook';
import {LetDirective} from 'src/lib/directives/let.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterViewComponent,
    CounterViewComponent2,
    LetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer}),
  ],
  providers: [
    ComponentState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

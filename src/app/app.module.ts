import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from 'src/state';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {CounterViewComponent} from './views/counterView.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

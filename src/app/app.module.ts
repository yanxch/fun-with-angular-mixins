import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {LetDirective} from 'src/lib/directives/let.directive';
import {counterReducer} from 'src/state';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {ViewContainer} from './view/view.component';
import {CounterContainer} from './container/counter.container';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterContainer,
    LetDirective,
    ViewContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

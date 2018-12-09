import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {mixinConnect} from 'src/lib/mixins/captain-mixin';
import {AppState, counterSelector, decrementActionCreator, incrementActionCreator, resetActionCreator} from 'src/state';

export class CounterViewBase {
  constructor(public store: Store<AppState>) {}
}

export const CounterViewComponentMixins = mixinConnect(CounterViewBase, 
  { counter: counterSelector }, 
  { 
    increment: incrementActionCreator,
    decrement: decrementActionCreator,
    reset: resetActionCreator 
  });


@Component({
  selector: 'counter-view',
  templateUrl: 'counterView.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterViewComponent extends CounterViewComponentMixins {


  constructor(public store: Store<AppState>) {
    super(store);
  }

  test() {
    console.log('test');
  }
}
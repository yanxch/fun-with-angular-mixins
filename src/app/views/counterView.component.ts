import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, counterSelector, incrementActionCreator, decrementActionCreator, resetActionCreator} from 'src/state';
import {mixinConnect} from 'src/lib/hooks/captain-hook';

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
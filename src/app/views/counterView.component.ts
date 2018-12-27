import {ChangeDetectionStrategy, Component, Injector, OnInit} from '@angular/core';
import {mixinConnect} from 'src/lib/mixins/captain-mixin';
import {counterSelector, decrementActionCreator, incrementActionCreator, resetActionCreator} from 'src/state';
import {interval} from 'rxjs';
import {map} from 'rxjs/operators';

export class CounterViewBase {
  constructor(public injector: Injector) {}
}

export const CounterViewMixins = mixinConnect(CounterViewBase, 
  select => ({ 
    counter: select(counterSelector) 
  }), 
  dispatch => ({ 
    increment: (payload: number) => dispatch(incrementActionCreator(payload)),
    decrement: (payload: number) => dispatch(decrementActionCreator(payload)),
    reset: (payload: number) => dispatch(resetActionCreator(payload))
  }));


@Component({
  selector: 'counter-view',
  templateUrl: 'counterView.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterViewContainer extends CounterViewMixins {
  constructor(public injector: Injector) {
    super(injector);
  }
}
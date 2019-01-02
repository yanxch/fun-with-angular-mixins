import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
import {mixinConnect} from 'src/lib/mixins/captain-mixin';
import {counterSelector, decrementActionCreator, incrementActionCreator, resetActionCreator} from 'src/state';

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
  templateUrl: 'counter.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterContainer extends CounterViewMixins {
  constructor(public injector: Injector) {
    super(injector);
  }
}

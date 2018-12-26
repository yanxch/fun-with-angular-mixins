import {ChangeDetectionStrategy, Component, Injector, OnInit} from '@angular/core';
import {mixinConnect} from 'src/lib/mixins/captain-mixin';
import {counterSelector, decrementActionCreator, incrementActionCreator, resetActionCreator} from 'src/state';

export class CounterViewBase {
  constructor(public injector: Injector) {}
}

export const CounterViewComponentMixins = mixinConnect(CounterViewBase, 
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
export class CounterViewComponent extends CounterViewComponentMixins implements OnInit{

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    console.log(this.vm);
  }

  increment(count) {
    this.vm.increment(++count);
  }

  decrement(count) {
    this.vm.decrement(--count);
  }

  reset() {
    this.vm.reset(1);
  }
}
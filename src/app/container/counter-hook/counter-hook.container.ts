import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
import {useState} from 'tng-hooks';
import {mixinHook} from 'src/lib/mixins/captain-hook-mixin';

export class CounterViewBase {
  constructor() {}
}

export const HookedUp = mixinHook(CounterViewBase, appState);

@Component({
  selector: 'counter-hook-view',
  templateUrl: 'counter-hook.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterHookContainer extends HookedUp {
  constructor() {
    super();
  }

  ngDoCheck() {
    super.ngDoCheck();
  }

  increment() {
    console.log('increment', this.counter);
    this.setCounter(this.counter + 1);
  }

  decrement() {
    this.setCounter(this.counter - 1);
  }

  reset() {
    this.setCounter(0);
  }
}

function appState() {
  const [counter, setCounter] = useState(1);

  return {
    counter,
    setCounter
  };
}
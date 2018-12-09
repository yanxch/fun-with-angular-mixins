import {ChangeDetectionStrategy, Component, ChangeDetectorRef} from '@angular/core';
import {ComponentState} from 'src/lib/mixins/captain-hook';

@Component({
  selector: 'counter-view-2',
  templateUrl: 'counterView2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterViewComponent2 {

  vm: any = {
    // counter: 3000
  };
    
  constructor(state: ComponentState, changedetector: ChangeDetectorRef) {
    const useState = state.useState;

    const [counter, setCounter] = useState(0);

    Object.assign(this.vm, counter, setCounter);


    //this.vm.counterState = useState(0);

    // this.vm.counter = this.vm.counterState[0];
    // this.vm.setCounter = this.vm.counterState[1];

  }

  test() {
    console.log('test');
  }
}

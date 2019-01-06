import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div>Current Count: {{ count }}</div>
    <button (click)="onIncrement.emit()">Increment</button>
    <button (click)="onDecrement.emit()">Decrement</button>
    <button (click)="onReset.emit()">Reset Counter</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  @Input()
  count: number;

  @Output()
  onIncrement = new EventEmitter<any>();
  @Output()
  onDecrement = new EventEmitter<any>();
  @Output()
  onReset = new EventEmitter<any>();

  constructor() {}

  ngDoCheck() {
    console.log('CounterComponent ngDoCheck');
  }

}
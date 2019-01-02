import {Constructor} from './captain-mixin';
import { TNG } from 'tng-hooks'


export function mixinHook<T extends Constructor<any>, R>(base: T, hookedFunction: () => R): T & Constructor<R> {
  return class extends base {

    state: () => R;

    constructor(...args: any[]) {
      super(...args);

      this.state = TNG(hookedFunction.bind(this));
      
      const result = this.state();
      Object.assign(this, result);
    }

    ngDoCheck() {
      const result = this.state();
      Object.assign(this, result);
    }
  }
}
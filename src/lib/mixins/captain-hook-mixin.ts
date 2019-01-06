import {Constructor} from './captain-mixin';
import { TNG } from 'tng-hooks'

interface HasNgDoCheck {
  ngDoCheck();
}

export function mixinHook<T extends Constructor<any>, R>(base: T, hookedFunction: () => R): T & Constructor<R & HasNgDoCheck> {
  return class extends base {

    hook: () => R;

    constructor(...args: any[]) {
      super(...args);

      this.hook = TNG(hookedFunction.bind(this));
      
      const result = this.hook();
      Object.assign(this, result);
    }

    ngDoCheck() {
      console.log('Do check');
      const result = this.hook();
      Object.assign(this, result);
    }
  }
}
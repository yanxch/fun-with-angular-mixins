import {Injector} from '@angular/core';
import {Action, Store} from '@ngrx/store';

export function mixinConnect<T extends Constructor<HasInjector>, I, O>(base: T, inputs: Inputs<I>, outputs: Outputs<O>): T & Constructor<HasViewModel<I & O>> {
  return class extends base {
      
      vm: I & O;

      store: Store<any>;

      constructor(...args: any[]) {
          super(...args);
          
          this.store = this.injector.get(Store);

          // Bind inputs
          const selectedInputs: I = inputs(this.store.select.bind(this.store));

          // Bind outputs
          const boundOutputs: O = outputs(this.store.dispatch.bind(this.store));

          this.vm = Object.assign({}, boundOutputs, selectedInputs);
      }
  };
}

/*––––––––––––––––––––––––––––––– */
/*––     Types & Interfaces   ––– */
/*––––––––––––––––––––––––––––––– */
export type Constructor<T> = new(...args: any[]) => T;

export interface HasInjector {
  injector: Injector;
}

export interface HasViewModel<T> {
  vm: T;
} 

export interface Payload<T> { 
  payload: T; 
};

export type ActionCreator<T> = (payload: T) => Action & Payload<T>;

export type BoundActionCreator<T> = (payload: T) => void;

export type Actions = {
  [key: string]: ActionCreator<any>;
}

const store: Store<any> = null;
type DispathFn = typeof store.dispatch;
type SelectFn = typeof store.select;

type Outputs<O> = (dispatch: DispathFn) => O; 
type Inputs<I> = (select: SelectFn) => I;

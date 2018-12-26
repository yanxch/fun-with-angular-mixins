import {Injector} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {AppState} from 'src/state';

export function mixinConnect<T extends Constructor<HasInjector>, I, O>(base: T, inputs: Inputs<I>, outputs: Outputs<O>): T & Constructor<HasViewModel<I & O>> {
  return class extends base {
      
      vm: I & O;

      store: Store<AppState>;

      constructor(...args: any[]) {
          super(...args);
          
          this.store = this.injector.get(Store) as Store<AppState>;

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

export interface HasNgrx {
  store: Store<AppState>;
}

export interface HasInjector {
  injector: Injector;
}

export interface HasViewModel<T> {
  vm: T;
} 

export type Selector = (state: AppState) => any;

export interface Payload<T> { 
  payload: T; 
};

export type ActionCreator<T> = (payload: T) => Action & Payload<T>;

export type BoundActionCreator<T> = (payload: T) => void;

export type Actions = {
  [key: string]: ActionCreator<any>;
}

export function bindAction<T>(store: Store<any>, actionCreator: ActionCreator<T>): BoundActionCreator<T> {
  return (payload: T) => {
    store.dispatch(actionCreator(payload));
  };
}

const store: Store<any> = null;
type DispathFn = typeof store.dispatch;
type SelectFn = typeof store.select;

type Outputs<R> = (dispatch: DispathFn) => R; 
type Inputs<I> = (select: SelectFn) => I;
//
//
/*
const outputs = (dispatch) => ({
  increment: (n: number) => dispatch(incrementActionCreator(n)),
  decrement: (s: string) => dispatch(decrementActionCreator(s))
});

const inputs = {
  counter: 0
};



function test1<O, I, R>(inputs: I, outputs:Outputs<R>): R & I {
  console.log(outputs);


 
  const r: R = outputs(store.dispatch);

  return {
    ...r,
    ...inputs,
  };
}

const ass = test1(inputs, outputs);
ass.increment(1);
ass.decrement('lol');
// ass.decrement('test');
// ass.increment(1);

//   [K in keyof T]: DeepTypeOrString<T[K]>
*/
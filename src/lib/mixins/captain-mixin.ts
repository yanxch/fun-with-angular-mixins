import {Store, Action} from '@ngrx/store';
import {AppState} from 'src/state';

export type Constructor<T> = new(...args: any[]) => T;

export interface HasNgrx {
  store: Store<AppState>;
}

export interface HasViewModel {
  vm: any;
}

export type Selector = (state: AppState) => any;

export type Selectors = {
  [key: string]: Selector;
}

export type Payload<T> = { 
  payload: T; 
};

export type ActionCreator<T> = (payload: T) => Action & Payload<T>;

export type Actions = {
  [key: string]: ActionCreator<any>;
}

export function bindAction<T>(store: Store<any>, actionCreator: ActionCreator<T>) {
  return (payload: T) => {
    store.dispatch(actionCreator(payload));
  };
}

export function mixinConnect<T extends Constructor<HasNgrx>>(base: T, inputs: Selectors, outputs: Actions): Constructor<HasNgrx & HasViewModel> & T {
  return class extends base {
      vm: any = {};

      constructor(...args: any[]) {
          super(...args);

          Object
            .keys(inputs)
            .forEach(key => {
              Object.assign(this.vm, {
                [key]: this.store.select(inputs[key])
              });
            });

          Object
            .keys(outputs)
            .forEach(key => {
              Object.assign(this.vm, {
                [key]: bindAction(this.store, outputs[key])
              });
            });
      }
  };
}


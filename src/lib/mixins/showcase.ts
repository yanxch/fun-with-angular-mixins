import {Selectors, Actions} from './captain-mixin';

class View {}

const ConnectedView = mixinConnect(mixinView(View), {}, {});

const view = new ConnectedView();
view.connect({}, {});
view.viewMode;

function mixinView<B extends Constructor>(Base: B) {
  return class extends Base {
    // every view has a viewMode
    viewMode: 'create' | 'show' | 'edit';
  }
}

function mixinConnect<B extends Constructor>(Base: B, inputs: Selectors, outputs: Actions) {
  return class extends Base {
    
    constructor(...args: any []) {
      super(...args);
      // Every Connect-Mixin connects to the specific store implementation
      this.connect(inputs, outputs);
    }
    
    connect(selectors, actions) {
      // TBD
      // 1. Read values with selectors
      // 2. Bind Actions to the Redux Dispatch function and the result to the Base class
    }
  }
}

type Constructor<T = {}> = new (...args: any[]) => T;


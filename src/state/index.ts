import {Action} from '@ngrx/store';
import {Payload} from 'src/lib/hooks/captain-hook';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface AppState {
  counter: number;
}

const initialState = 5;

export function counterReducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      console.log('increment');
      return state + 1;

    case DECREMENT:
      console.log('decrement');
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}

export function counterSelector(state: AppState) {
  return state.counter;
}

export function incrementActionCreator(payload): Action & Payload<any> {
  return {
    type: INCREMENT,
    payload
  }; 
}

export function decrementActionCreator(payload): Action & Payload<any> {
  return {
    type: DECREMENT,
    payload
  }; 
}

export function resetActionCreator(payload): Action & Payload<any> {
  return {
    type: RESET,
    payload
  }; 
}

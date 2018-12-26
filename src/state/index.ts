import {Action} from '@ngrx/store';
import {Payload, ActionCreator} from 'src/lib/mixins/captain-mixin';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface AppState {
  counter: number;
}

const initialState = 5;

export function counterReducer(state: number = initialState, action: Action & Payload<any>) {
  switch (action.type) {
    case INCREMENT:
      console.log('increment');
      return action.payload;

    case DECREMENT:
      console.log('decrement');
      return action.payload;

    case RESET:
      return action.payload;

    default:
      return state;
  }
}

export function counterSelector(state: AppState) {
  return state.counter;
}

export function incrementActionCreator(payload: number): Action & Payload<number> {
  return {
    type: INCREMENT,
    payload
  }; 
}

export function decrementActionCreator(payload: number): Action & Payload<number> {
  return {
    type: DECREMENT,
    payload
  }; 
}

export function resetActionCreator(payload: number): Action & Payload<number> {
  return {
    type: RESET,
    payload
  }; 
}

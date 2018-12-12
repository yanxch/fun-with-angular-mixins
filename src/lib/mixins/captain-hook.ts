import {inject, ChangeDetectorRef, Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ValueConverter} from '@angular/compiler/src/render3/view/template';

export function useState(initialValue) {

}

export function useReducer(reducer: Function, initialValue: any) {

}

@Injectable()
export class ComponentState {
  constructor() {}

  useState(initialValue) {
    
    const value = initialValue;

    const state = [
      initialValue,
      setState
    ];

    function setState(newValue) {
      state[0] = newValue;
      // changedetector.detectChanges();      
    }

    return state;
  }
}
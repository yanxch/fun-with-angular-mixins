import {Component, Input} from '@angular/core';

@Component({
  selector: 'View',
  template: `
    <ng-content></ng-content>
  `
})
export class ViewContainer {
  
  @Input() 
  set variables(newVariables) {
    this._variables = newVariables;
    Object.assign(this, this._variables);
  } 

  get variables() {
    return this._variables;
  }

  private _variables: any;
}
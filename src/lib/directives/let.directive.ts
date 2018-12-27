import {Directive, TemplateRef, ViewContainerRef, OnInit, Input} from '@angular/core';

export class LetContext {
  $implicit: any = null;
  [key: string]: any;
};

@Directive({
  selector: '[let]'
})
export class LetDirective implements OnInit {

  private _letContext = new LetContext();

  @Input()
  set letFrom(value: any) {
    this._letContext.$implicit = value;
    Object.assign(this._letContext, value);
  }

  constructor(private template: TemplateRef<LetContext>,
              private viewContainer: ViewContainerRef) {}
  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.template, this._letContext);
  }
}
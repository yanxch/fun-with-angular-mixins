import {Directive, TemplateRef, ViewContainerRef, OnInit, Input} from '@angular/core';

export type LetContext = {
  $implicit: any;
  [key: string]: any;
};

@Directive({
  selector: '[let]'
})
export class LetDirective implements OnInit {

  @Input('letFrom') from: any;

  @Input('let')
  set let(value: any) {
    console.log(value);
  }

  constructor(private template: TemplateRef<LetContext>,
              private viewContainer: ViewContainerRef) {}
  ngOnInit() {
     
    this.viewContainer.createEmbeddedView(this.template, 
      {
        $implicit: this.from,
        ...this.from
      });
  }
}
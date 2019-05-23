import {
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  AfterContentInit,
  ContentChild,
  TemplateRef,
  Directive, Input, ViewChildren, ViewContainerRef, AfterViewInit, AfterContentChecked, ChangeDetectorRef
} from '@angular/core';


@Directive({
  selector: '[pTemplate2]',
})
export class PrimeTemplate2 {

  @Input() type: string;

  @Input('pTemplate2') name: string;

  constructor(public template: TemplateRef<any>) {
    console.log(template);
  }

  getType(): string {
    return this.name;
  }
}

@Directive({
  selector: '[pContainer]',
})
export class PrimeContainer {

  @Input() type: string;
  constructor(public containerRef: ViewContainerRef) {
    console.log(containerRef);
  }
}


@Component({
  selector: '[app-attr-component]',
  templateUrl: './attr-component.component.html',
  styleUrls: ['./attr-component.component.scss']
})
export class AttrComponentComponent implements OnInit , AfterContentInit ,AfterContentChecked, AfterViewInit {
  @ContentChildren('header') header : QueryList<ElementRef>;
  @ContentChildren(PrimeTemplate2, {read: TemplateRef}) childCmp: QueryList<TemplateRef<any>>;
  @ViewChildren(PrimeContainer, {read: ViewContainerRef}) viewCmp: QueryList<ViewContainerRef>;
  text1 = 555;
  text2 = 666;
  text3 = 777;
  constructor(  private cdr: ChangeDetectorRef,) {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.viewCmp);
  }
  ngAfterContentChecked(): void {
    //console.log(this.viewCmp);
  }

  ngAfterViewInit(): void {
    console.log(this.viewCmp);
    this.viewCmp.forEach((item, index) => {
      let tmpView =  this.childCmp.toArray()[index].createEmbeddedView(null);
      item.insert(tmpView);
    });
  }

}



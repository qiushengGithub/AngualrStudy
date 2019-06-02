import {
  Component, AfterViewInit, TemplateRef, ViewChild, ViewContainerRef, ComponentRef, ViewRef,
} from '@angular/core';
import {
  CdkPortalOutletAttachedRef, ComponentPortal, DomPortalOutlet, Portal, TemplatePortal,
} from '@angular/cdk/portal';

/**
 * @title Portal overview
 */
@Component({
  selector: 'cdk-portal-overview-example',
  templateUrl: 'cdk-portal-overview-example.component.html',
  styleUrls: ['cdk-portal-overview-example.component.scss'],
})
export class CdkPortalOverviewExample implements AfterViewInit {
  @ViewChild('templatePortalContent', {read: false}) templatePortalContent: TemplateRef<any>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<ComponentPortalExample>;
  templatePortal: TemplatePortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef,{name:'qiusheng'});
  }

  changeData($event:ViewRef){
   console.log($event);
    //$event.context.name = 'qiusheng';
  }
}

@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal{{name}}'
})
export class ComponentPortalExample {}





import {
  Component, AfterViewInit, TemplateRef, ViewChild, ViewContainerRef, ComponentRef, ViewRef, Inject,
  ComponentFactoryResolver, Injector, ApplicationRef, InjectionToken,
} from '@angular/core';
import {
  CdkPortalOutletAttachedRef, ComponentPortal, DomPortalOutlet, Portal, PortalInjector, TemplatePortal,
} from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

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

  changeData($event:ComponentRef<any>){
   console.log($event);
   setTimeout(()=>{
  $event.instance.name = 'qiusheng';
},2000)
}
}

@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal{{name}}'
})
export class ComponentPortalExample {}





let DATA = new InjectionToken<any>('Sharing Data with Component Portal');

@Component({
  selector: 'portal-dialog-sharing-data',
  template: `
    <p>Component Portal Sharing Data is: {{data}}<p>
  `
})
export class DialogComponentWithSharingData {
  data;
  constructor() {} // <--- key point
}

@Component({
  selector: 'portal-outside',
  template: `
    <h2>Open a ComponentPortal Outside Angular Context with Sharing Data</h2>
    <button (click)="openComponentPortalOutSideAngularContextWithSharingData()">Open a ComponentPortal Outside Angular
      Context with Sharing Data
    </button>
    <input [value]="sharingComponentData" (change)="setComponentSharingData($event.target.value)"/>
  `,
})
export class PortalOutsideComponent {
  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
    @Inject(DOCUMENT) private _document) {}
  private _appRef: ApplicationRef;
  sharingComponentData: string = 'lx1036';
  setComponentSharingData(value) {
    this.sharingComponentData = value;
  }
  openComponentPortalOutSideAngularContextWithSharingData() {
    let container = this._document.createElement('div');
    container.classList.add('component-portal-with-sharing-data');
    container = this._document.body.appendChild(container);
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }
    // Sharing data by Injector(Dependency Injection)
    const map = new WeakMap();
    map.set(DATA, this.sharingComponentData); // <--- key point
    const injector = new PortalInjector(this._injector, map);
    // instantiate a DomPortalOutlet
    const portalOutlet = new DomPortalOutlet(container, this._componentFactoryResolver, this._appRef, this._injector); // <--- key point
    // instantiate a ComponentPortal<DialogComponentWithSharingData>
    const componentPortal = new ComponentPortal(DialogComponentWithSharingData);
    // attach a ComponentPortal to a DomPortalOutlet
    let result  = portalOutlet.attach(componentPortal);
    setTimeout(()=>{
      result.instance.data = 'qiusheng';
    },2000)
  }
}

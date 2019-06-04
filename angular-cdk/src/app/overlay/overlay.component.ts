import { Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import set = Reflect.set;
import { ComponentPortal, TemplatePortal, TemplatePortalDirective } from '@angular/cdk/portal';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class OverlayComponent  {
  isMenuOpen = false;
  top = 0;
  overlayRef: OverlayRef;
  @ViewChild('overlayGlobalTemplate') overlayGlobalTemplate: TemplateRef<any>;
  @ViewChild('origin') origin: ElementRef<any>;
  constructor(public overlay: Overlay,
              private viewContainer: ViewContainerRef
    ) {
  }


  showOverlayGlobalPanelCenter() {
    const positionStrategy: PositionStrategy = this.overlay.position().global().centerHorizontally().top(`${this.top}px`);
    this.top += 30;
    const config = new OverlayConfig();
    config.height='100px';
    config.width='100px';
    config.panelClass=['dasda','ewewe'];
    config.positionStrategy = positionStrategy;
    //config.hasBackdrop = true;
    this.overlayRef = this.overlay.create(config);
    console.log(this.overlayRef);
    const templatePortal = new TemplatePortal(this.overlayGlobalTemplate, this.viewContainer);
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.dispose();
    }
    this.overlayRef.attach(templatePortal);

   /* this.overlayRef.backdropClick().subscribe((event) => {
      this.overlayRef.dispose();
    });*/
    console.log(this.overlayRef);

  }


  /**
   * overlay 在整个屏幕位置，自己控制位置
   */
  showOverlayGlobalPanelPosition() {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
                                  .global()
                                  .left(`${this.top}px`)
                                  .top(`${this.top}px`);
    this.top += 30;
    config.hasBackdrop = true;
    const overlayRef = this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
    overlayRef.attach(new ComponentPortal(PanelComponent, this.viewContainer));
  }

  dismissOverlayPanelTemplate() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.dispose();
    }
  }


  /**
   * overlay connect origin 显示，依附某个组件显示
   */
  showOverlayPanelConnectComponent() {
    const strategy = this.overlay.position()
                         .flexibleConnectedTo(this.origin.nativeElement)
                         .withPositions([{
                           originX: 'center',
                           originY: 'bottom',
                           overlayX: 'center',
                           overlayY: 'top',
                           offsetX: 0,
                           offsetY: 0
                         }]);
    strategy.withLockedPosition(true);
    const config = new OverlayConfig({positionStrategy: strategy});
    config.scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.overlayRef = this.overlay.create(config);
    this.overlayRef.attach(new ComponentPortal(PanelComponent, this.viewContainer));
  }
}

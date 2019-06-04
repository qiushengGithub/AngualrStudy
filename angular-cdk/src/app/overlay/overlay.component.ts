import {Component, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import set = Reflect.set;
import {TemplatePortal, TemplatePortalDirective} from "@angular/cdk/portal";

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
  constructor(public overlay: Overlay,
              private viewContainer: ViewContainerRef
    ) {
  }


  showOverlayGlobalPanelCenter() {
    const positionStrategy: PositionStrategy = this.overlay.position().global().centerHorizontally().top(`${this.top}px`);
    this.top += 30;
    const config = new OverlayConfig();
    config.positionStrategy = positionStrategy;
    //config.hasBackdrop = true;
    this.overlayRef = this.overlay.create(config);
    console.log(this.overlayRef);
    const templatePortal = new TemplatePortal(this.overlayGlobalTemplate, this.viewContainer);
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
    this.overlayRef.attach(templatePortal);

   /* this.overlayRef.backdropClick().subscribe((event) => {
      this.overlayRef.dispose();
    });*/
    console.log(this.overlayRef);

  }
}

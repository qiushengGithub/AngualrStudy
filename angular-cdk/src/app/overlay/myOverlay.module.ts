import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay.component';
import { PanelComponent } from './panel/panel.component';
import { OverlayModule } from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';

@NgModule({
  declarations: [OverlayComponent, PanelComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  exports: [OverlayComponent, PanelComponent],
  entryComponents: [PanelComponent]
})
export class MyOverlayModule { }

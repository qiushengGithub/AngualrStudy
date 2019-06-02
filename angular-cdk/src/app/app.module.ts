import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import {
  CdkPortalOverviewExample, ComponentPortalExample, DialogComponentWithSharingData, PortalOutsideComponent,
} from './cdk-portal-overview-example/cdk-portal-overview-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CdkPortalOverviewExample,
    ComponentPortalExample,
    PortalOutsideComponent,
    DialogComponentWithSharingData
  ],
  imports: [
    BrowserModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ComponentPortalExample,PortalOutsideComponent,DialogComponentWithSharingData]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import {
  CdkPortalOverviewExample, ComponentPortalExample, DialogComponentWithSharingData, PortalOutsideComponent,
} from './portal/cdk-portal-overview-example.component';
import {MyOverlayModule} from './overlay/myOverlay.module';
import {NZ_MESSAGE_CONFIG, NzMessageModule} from './components/message';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

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
    PortalModule,
    NzMessageModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PortalModule,
    MyOverlayModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    {provide: NZ_MESSAGE_CONFIG, useValue: {nzDuration: 300000}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ComponentPortalExample, PortalOutsideComponent, DialogComponentWithSharingData]
})
export class AppModule { }

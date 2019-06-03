import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import {
  CdkPortalOverviewExample, ComponentPortalExample, DialogComponentWithSharingData, PortalOutsideComponent,
} from './cdk-portal-overview-example/cdk-portal-overview-example.component';
import { NzMessageModule } from './components/message';
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
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  entryComponents:[ComponentPortalExample,PortalOutsideComponent,DialogComponentWithSharingData]
})
export class AppModule { }

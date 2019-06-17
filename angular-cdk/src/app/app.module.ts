import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';
import { AppRoutingModule } from './app-routing.module';
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
import {MyMessageModule} from './components/my-message/my-message.module';
import { NgxEchartsModule } from 'ngx-echarts';
import {EchartsComponent} from './components/echarts/echarts.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CdkPortalOverviewExample,
    ComponentPortalExample,
    PortalOutsideComponent,
    DialogComponentWithSharingData,
    EchartsComponent
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
    MyOverlayModule,
    MyMessageModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    {provide: NZ_MESSAGE_CONFIG, useValue: {nzDuration: 100000}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ComponentPortalExample, PortalOutsideComponent, DialogComponentWithSharingData]
})
export class AppModule { }

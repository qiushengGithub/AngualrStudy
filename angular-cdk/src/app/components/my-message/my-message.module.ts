import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MyMessageContainerComponent } from './my-message-container.component';
import { MyMessageComponent } from './my-message.component';
import {MyMessageService} from './my-message.service';

@NgModule({
  declarations: [MyMessageContainerComponent, MyMessageComponent],
  imports: [
    CommonModule,
    OverlayModule,
    NzAddOnModule,
    NzIconModule
  ],
  entryComponents: [MyMessageContainerComponent],
  providers: [MyMessageService]
})
export class MyMessageModule { }

import { Component, AfterViewInit } from '@angular/core';
import { NzMessageService } from './components/message';
import {MyMessageDataOptions} from './components/my-message/nz-message.definitions';
import {MyMessageService} from './components/my-message/my-message.service';
import {MyMessageContainerComponent} from './components/my-message/my-message-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private message: MyMessageService, private message2: NzMessageService) {};
  ngAfterViewInit(): void {
   // this.message.success('qiusheng');
  }

  showMessage() {
    this.message.success('qiusheng');
    //sthis.message2.success('qiusheng');
  }
}

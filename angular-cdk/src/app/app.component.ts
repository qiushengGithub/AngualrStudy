import { Component, AfterViewInit } from '@angular/core';
import { NzMessageService } from './components/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor() {};
  ngAfterViewInit(): void {
    //this.message.success('qiusheng');
  }

}

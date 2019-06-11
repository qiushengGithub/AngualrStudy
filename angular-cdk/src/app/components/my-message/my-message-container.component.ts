import {Component, Input, OnInit} from '@angular/core';
import {MyMessageDataFilled} from './nz-message.definitions';

@Component({
  selector: 'my-message-container',
  templateUrl: './my-message-container.component.html',
  styleUrls: ['./my-message-container.component.scss']
})
export class MyMessageContainerComponent implements OnInit {

  @Input() messages: Array<any> = [];
  @Input() top = '20px';
  constructor() { }

  ngOnInit() {
  }

  createMessage(message: MyMessageDataFilled) {
    this.messages.push(message);
  }
}

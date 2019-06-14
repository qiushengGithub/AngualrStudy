import {Component, Input, OnInit} from '@angular/core';
import {MyMessageDataFilled} from "./nz-message.definitions";
import { moveUpMotion } from 'ng-zorro-antd/core';
@Component({
  selector: 'my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.scss'],
  animations: [moveUpMotion],
})
export class MyMessageComponent implements OnInit {
  @Input() message: MyMessageDataFilled;
  @Input() index;
  constructor() { }

  ngOnInit() {
    this.message.state = 'enter';
  }

}

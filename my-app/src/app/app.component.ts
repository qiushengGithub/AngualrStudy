import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  text1 = 111;
  text2 = 222;
  text3 = 333;
  temps = [1, 2, 3, 4, 5, 6];
  title = 'my-app';
  myValue: any = 1;
  count = 0;

  ngOnInit(): void {
    /*setInterval(() => {
      this.myValue = new Date();
    }, 1000);*/
  }

  changeCount() {
    ++this.count;
  }
  show() {
    console.log(this.count);
    console.log(1111);
  }
}

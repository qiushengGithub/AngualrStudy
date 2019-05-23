import { Component, OnInit, OnChanges, DoCheck , Input, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-sunzi',
  templateUrl: './sunzi.component.html',
  styleUrls: ['./sunzi.component.scss']
})
export class SunziComponent implements OnInit, OnChanges, DoCheck {
  @Input() count ;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('sunzi checked:');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('sunzi changes:' + changes);
  }
}

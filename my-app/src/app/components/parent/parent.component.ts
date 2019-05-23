import { Component, OnInit, OnChanges, DoCheck , Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  @Input() count ;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('parent checked:' + this.count);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent changes:' + changes);
  }
}

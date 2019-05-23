import { Component, OnInit, OnChanges, DoCheck , Input, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() count ;
  count2 = 333;
  constructor(public cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('child checked:');
    this.count2 = ++this.count2;
    //this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child changes:' + changes);
  }
}

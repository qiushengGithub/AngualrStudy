import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrComponentComponent } from './attr-component.component';

describe('AttrComponentComponent', () => {
  let component: AttrComponentComponent;
  let fixture: ComponentFixture<AttrComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

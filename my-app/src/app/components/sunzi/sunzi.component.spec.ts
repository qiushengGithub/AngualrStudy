import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunziComponent } from './sunzi.component';

describe('SunziComponent', () => {
  let component: SunziComponent;
  let fixture: ComponentFixture<SunziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

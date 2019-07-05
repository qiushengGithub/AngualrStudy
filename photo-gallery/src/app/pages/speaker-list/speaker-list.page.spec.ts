import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerListPage } from './speaker-list.page';

describe('SpeakerListPage', () => {
  let component: SpeakerListPage;
  let fixture: ComponentFixture<SpeakerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserEventExperementsComponent } from './browser-event-experements.component';

describe('BrowserEventExperementsComponent', () => {
  let component: BrowserEventExperementsComponent;
  let fixture: ComponentFixture<BrowserEventExperementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserEventExperementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserEventExperementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

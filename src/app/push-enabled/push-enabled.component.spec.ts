import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushEnabledComponent } from './push-enabled.component';

describe('PushEnabledComponent', () => {
  let component: PushEnabledComponent;
  let fixture: ComponentFixture<PushEnabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushEnabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushEnabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

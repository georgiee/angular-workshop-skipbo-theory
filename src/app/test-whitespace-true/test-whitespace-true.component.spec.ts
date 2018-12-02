import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWhitespaceTrueComponent } from './test-whitespace-true.component';

describe('TestWhitespaceTrueComponent', () => {
  let component: TestWhitespaceTrueComponent;
  let fixture: ComponentFixture<TestWhitespaceTrueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWhitespaceTrueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWhitespaceTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWhitespaceComponent } from './test-whitespace.component';

describe('TestWhitespaceComponent', () => {
  let component: TestWhitespaceComponent;
  let fixture: ComponentFixture<TestWhitespaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWhitespaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWhitespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

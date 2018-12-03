import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some.component';
import { ViewChild, Component } from '@angular/core';

describe('SomeComponent', () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponent, TestSomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create v2', () => {
    const myFixture: ComponentFixture<TestSomeComponent> = TestBed.createComponent(TestSomeComponent);
    const testHostInstance: TestSomeComponent = myFixture.componentInstance;

    expect(testHostInstance.componentInstance).toBeTruthy();
  });
});


@Component({
  template: `<app-some></app-some>`
})
class TestSomeComponent {
  @ViewChild(SomeComponent) componentInstance: SomeComponent;
}


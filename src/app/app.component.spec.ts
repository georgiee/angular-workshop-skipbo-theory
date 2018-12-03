import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, ViewChild } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AppTestComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('test02', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppTestComponent);
    const app: AppComponent = fixture.componentInstance.instance;

    // app.elementRef.nativeElement.click();
    // app.elementRef.nativeElement.click();
    app.elementRef.nativeElement.dispatchEvent(new Event('click'));
    app.elementRef.nativeElement.dispatchEvent(new Event('click'));
  }));
});


@Component({
  template: `<app-root></app-root>`
})
class AppTestComponent {
  @ViewChild(AppComponent) instance: AppComponent;
}

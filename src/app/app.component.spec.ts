import { TestBed, async, fakeAsync, tick, flushMicrotasks } from '@angular/core/testing';
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

  it('setTimeout & tick & flushMicrotasks', fakeAsync(() => {
    let state = [];

    // add to the micro task queue — will be the first thing executed after this script block is done
    Promise.resolve().then(function() {
      state.push('promise result');
    });

    // add to the task queue — will be executed after this task and when the micro task queue is emptied
    setTimeout(() => { state.push('timeout called'); });

    // add to the task queue after 2 seconds
    setTimeout(() => { state.push('timeout called after 2s'); }, 2000);


    expect(state).toEqual([]);

    flushMicrotasks();
    expect(state).toEqual(['promise result']);

    tick();
    expect(state).toEqual(['promise result', 'timeout called']);

    tick(2000);
    expect(state).toEqual(['promise result', 'timeout called', 'timeout called after 2s']);
  }));
});


@Component({
  template: `<app-root></app-root>`
})
class AppTestComponent {
  @ViewChild(AppComponent) instance: AppComponent;
}

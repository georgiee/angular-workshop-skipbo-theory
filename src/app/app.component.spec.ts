import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, ViewChild } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppTestComponent
      ],
    }).compileComponents();
  }));

  it('counter should increment when clicked', () => {
    const fixture = TestBed.createComponent(AppTestComponent);
    fixture.detectChanges();

    const app: AppComponent = fixture.componentInstance.instance;

    const nativeElementCounter: HTMLElement = fixture.nativeElement.querySelector('.counter');
    expect(nativeElementCounter.textContent.trim()).toBe('0');

    app.doSomething();
    fixture.detectChanges();

    // rxjs implementation is not important just test the effect
    expect(nativeElementCounter.textContent.trim()).toBe('1');
  });

  fit('changes should be true', () => {
    const fixture = TestBed.createComponent(AppTestComponent);
    fixture.detectChanges();

    const app: AppComponent = fixture.componentInstance.instance;

    let result = false;
    app.change$.subscribe( value => {
      result = value;
    });

    app.doSomething();

    expect(result).toBe(true);
  });
});


@Component({
  template: '<app-root></app-root>'
})
class AppTestComponent {
  @ViewChild(AppComponent) instance: AppComponent;
}

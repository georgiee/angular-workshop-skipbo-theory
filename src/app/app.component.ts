import { Component } from '@angular/core';
import { fromEvent, Observable, interval, Subject, ConnectableObservable, BehaviorSubject, range, timer } from 'rxjs';
import { take, refCount, publish, tap, multicast, toArray, switchMap } from 'rxjs/operators';
import { tag } from 'rxjs-spy/operators/tag';
import { create } from 'rxjs-spy';


const spy = create();
spy.log();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-theory';
  changed$ = new Subject();

  constructor() {
    range(1, 10)
    .pipe(
      toArray()
    ).subscribe(values => console.log(values));

    // this.buildVariantA();
    this.buildVariantB();
  }

  buildVariantB() {
    timer(0, 5000)
    .pipe(
      tag('outer observable'),
      // create an inner observable
      switchMap(value => {
        return interval(500)
          .pipe(
            take(2),
            tag('inner observable'),
            toArray()
          );
      }),
      // here you will see only one value arriving from the
      // inner observable. toArray blocks until it completes after 2 values are produced.
      tag('after the switch'),
    ).subscribe();
  }

  buildVariantA() {
    timer(0, 5000)
    .pipe(
      tag('outer observable'),
      // create an inner observable
      switchMap(value => {
        return interval(500)
          .pipe(
            take(2),
            tag('inner observable')
          );
      }),
      // at this point you will only receive values form the inner observable here
      // that's how switch map works
      // you get one value per each interval as long as the outer observable
      // won't emit a new value — when this happens then the inner observable is unsubscribed
      // and a new interval will be subscribed instead
      tag('→ after the switch'),
    ).subscribe();
  }
}

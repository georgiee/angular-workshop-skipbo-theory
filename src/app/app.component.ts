import { Component } from '@angular/core';
import { fromEvent, Observable, interval, Subject, ConnectableObservable } from 'rxjs';
import { take, refCount, publish, tap, multicast } from 'rxjs/operators';
import { tag } from 'rxjs-spy/operators/tag';
import { create } from 'rxjs-spy';


const spy = create();
spy.log();

class Producer {
  _counter = 0;
  nextValue = (value) => {};

  constructor(private _speed = 1000) {
    console.log('new producer created');
    this.next = this.next.bind(this);
  }

  next() {
    this._counter++;
    this.nextValue(this._counter);
  }

  start() {
    setInterval(this.next, this._speed);
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-theory';

  constructor() {
    // this.makeCold();
    // this.makeHot();
    // this.makeColdHot();
    this.makeColdHotV2();
  }

  makeColdHotV2() {
    const myInterval2 = interval(500).pipe(
      take(5),
      tap(value => console.log('interval produced a value')),
      multicast(new Subject()) // make it a ConnectableObservable
    ) as ConnectableObservable<number>;

    myInterval2.subscribe(value => console.log('received a value', value));
    myInterval2.subscribe(value => console.log('received a value', value));
    myInterval2.subscribe(value => console.log('received a value', value));

    // let the internal subject subscribe to the given interval
    myInterval2.connect();
  }

  makeColdHot() {
    const myInterval = interval(500).pipe(
      take(5),
      tap(value => console.log('interval produced a value'))
    );

    // this will produce three intervals each delivering its own stream of numbers (1,2,3, ..)
    // myInterval.subscribe(value => console.log('received a value', value));
    // myInterval.subscribe(value => console.log('received a value', value));
    // myInterval.subscribe(value => console.log('received a value', value));
    /**
      interval produced a value
      received a value 0
      interval produced a value
      received a value 0
      interval produced a value
      received a value 0
      interval produced a value
     */

     // Now look at this
    const subject = new Subject();

    // 1. let this subject susbcribe to the cold observable
    myInterval.subscribe(subject);
    // 2. now let future observables subscribe to the subject instead of the interval
    subject.subscribe(value => console.log('received a value', value));
    subject.subscribe(value => console.log('received a value', value));
    subject.subscribe(value => console.log('received a value', value));

    /**
      interval produced a value
      received a value 0
      received a value 0
      received a value 0
     */
  }

  makeCold() {
    console.log('make cold');

    const cold = new Observable((observer) => {
      const producer = new Producer();

      producer.start();
      producer.nextValue = value => {
        observer.next(value);
      };
    });

    // this will create a new producer
    setTimeout(() => {
      cold.subscribe(value => console.log('first subscribe', value));
    }, 1000);

    // this will create another producer
    setTimeout(() => {
      cold.subscribe(value => console.log('second subscribe', value));
    }, 2000);
  }

  makeHot() {
    console.log('make hot');

    const producer = new Producer(50);
    producer.start();

    const hot = new Observable((observer) => {
      producer.nextValue = value => {
        observer.next(value);
      };
    });

    // some time later we subscribe
    setTimeout(() => {
      hot.subscribe(value => console.log('first subscribe', value));
    }, 1000);

    // this will override the callback as there is only one producer
    setTimeout(() => {
      hot.subscribe(value => console.log('second subscribe', value));
    }, 2000);

  }
}

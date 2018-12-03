import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
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
    this.makeCold();
    // this.makeHot();
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

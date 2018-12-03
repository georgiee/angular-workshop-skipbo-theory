import { Component } from '@angular/core';
import { fromEvent, Observable, interval, Subject, ConnectableObservable, BehaviorSubject } from 'rxjs';
import { take, refCount, publish, tap, multicast } from 'rxjs/operators';
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
    const subjectA = new Subject();
    const subjectB = new BehaviorSubject(null);

    subjectA.next('your loaded data');
    subjectB.next('your loaded data');

    subjectA.subscribe(value => console.log('value from subjectA:', value));
    subjectB.subscribe(value => console.log('value from subjectB:', value));

    // result:
    // value from subjectB: your loaded data
  }
}

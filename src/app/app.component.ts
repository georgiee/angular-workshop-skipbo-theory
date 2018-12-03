import { Component } from '@angular/core';
import { fromEvent, Observable, interval, Subject, ConnectableObservable } from 'rxjs';
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

    this.changed$.subscribe(() => {
      console.log('something changed')
    });

    this.changed$.next();
    setTimeout(() => this.changed$.next(), 500);
    setTimeout(() => this.changed$.next(), 1200);
  }
}

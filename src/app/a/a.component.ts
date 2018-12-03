import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit, OnDestroy {
  _destroy$ = new Subject();
  _subscription = Subscription.EMPTY;

  constructor() { }

  ngOnInit() {
    // subscribe but never unsubscribe
    // interval(500).subscribe((value) => console.log(value));

    // manual unsubscribe
    // this._subscription = interval(500).subscribe((value) => console.log(value));

    // reactive way of unsubscribing
    interval(500)
    .pipe(takeUntil(this._destroy$))
    .subscribe((value) => console.log(value));

    // imagine many different subscriptions. YOu will only have to maintain one destroy subject.
    // compared to an array of subscriptions.
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._subscription.unsubscribe();
  }

}

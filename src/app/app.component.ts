import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { create } from 'rxjs-spy';

// causes an async timeout in tests
// const spy = create();
// spy.log();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-theory';
  counter = 0;
  change$ = new Subject<boolean>();

  constructor() {
    this.change$.subscribe(value => {
      this.counter++;
    });
  }

  doSomething() {
    this.change$.next(true);
  }
}

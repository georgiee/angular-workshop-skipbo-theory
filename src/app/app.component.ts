import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
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

  constructor() {
    fromEvent(window, 'keydown')
      .pipe(
        tag('🎹 Key Pressed'),
        take(2)
    ).subscribe();

  }
}

import { Component, ElementRef } from '@angular/core';
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

  constructor(
    public elementRef: ElementRef
  ) {
    // this.test01();
    this.test02();
  }
  test02() {
    // you never would listen for clicks like this — demonstration purposes :)
    this.elementRef.nativeElement.addEventListener('click', function() {
      console.log('body clicked');
      Promise.resolve().then(() => console.log('micro task'));
    });
  }

  test01() {
    console.log('script start');

    setTimeout(function() {
      console.log('setTimeout');
    }, 0);

    Promise.resolve().then(function() {
      console.log('promise1');
    }).then(function() {
      console.log('promise2');
    });

    console.log('script end');
  }
}

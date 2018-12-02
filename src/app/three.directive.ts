import { Directive } from '@angular/core';

@Directive({
  selector: '[appThree]'
})
export class ThreeDirective {

  constructor() {
    console.log('directive two mounted');
  }

  probe() {
    console.log('probe received in ThreeDirective');
  }
}

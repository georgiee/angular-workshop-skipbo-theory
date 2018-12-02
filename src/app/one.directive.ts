import { Directive } from '@angular/core';

@Directive({
  selector: '[appOne]'
})
export class OneDirective {

  constructor() {
    console.log('directive one mounted');
  }

  probe() {
    console.log('probe received in OneDirective');
  }

}

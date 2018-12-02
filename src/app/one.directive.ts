import { Directive } from '@angular/core';

@Directive({
  selector: '[appOne]',
  exportAs: 'myAppOne'
})
export class OneDirective {

  constructor() {
    console.log('directive one mounted');
  }

  probe() {
    console.log('probe received in OneDirective');
  }

}

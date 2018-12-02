import { Directive } from '@angular/core';

@Directive({
  selector: '[appTwo]',
  exportAs: 'myAppTwo'
})
export class TwoDirective {

  constructor() {
    console.log('directive three mounted');
  }

  probe() {
    console.log('probe received in TwoDirective');
  }
}

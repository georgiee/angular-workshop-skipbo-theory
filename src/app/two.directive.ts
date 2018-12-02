import { Directive } from '@angular/core';

@Directive({
  selector: '[appTwo]'
})
export class TwoDirective {

  constructor() {
    console.log('directive three mounted');
  }

  probe() {
    console.log('probe received in TwoDirective');
  }
}

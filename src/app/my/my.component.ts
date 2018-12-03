import { HostBinding, Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-my',
  template: 'hello my',
  animations: [
    trigger('stateAnimation', [
      state('on', style({
        backgroundColor: 'red'
      })),

      state('off', style({
        backgroundColor: 'green'
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ])
  ]
})
export class MyComponent {
  @HostBinding('@stateAnimation')
  public state = 'on';

  @HostListener('click')
  toggleState() {
    this.state = this.state === 'on' ? 'off' : 'on';
  }
}

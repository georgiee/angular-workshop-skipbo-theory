import { HostBinding, Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-my',
  templateUrl: 'my.component.html',
  animations: [
    trigger('stateAnimation', [
      state('on', style({
        backgroundColor: 'red'
      })),

      state('off', style({
        backgroundColor: 'green'
      })),
      transition('void => *', [
        style({
          height: 0,
          overflow: 'hidden'
        }),
        animate('1s',
          style({
            height: '*',
            overflow: 'auto'
          })
        )
      ])
    ])
  ]
})
export class MyComponent {
  @HostBinding('@stateAnimation')
  public state = 'on';

}

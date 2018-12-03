import { HostBinding, Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-my',
  templateUrl: 'my.component.html',
  styleUrls: ['my.component.scss'],
  animations: [
    trigger('boxAddRemoveAnimation', [
      transition(':enter', [
        style({
          height: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.4s', style({
          height: '*',
          transform: 'translateX(0)',
        })),
      ]),
      transition(':leave', [
        animate('0.4s', style({
          height: 0,
        }))
      ])
    ]),
    trigger('stateAnimation', [
      state('on', style({
        backgroundColor: 'yellow'
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
  showAll = false

}

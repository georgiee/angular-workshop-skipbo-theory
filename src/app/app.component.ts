import { Component } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),

          query(':leave', [
            animate('0.5s ease-in-out', style({
              transform: 'translateY(100%)',
              opacity: 0
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'workshop-theory';

  start(event) {
    console.log('start', event);
  }

  end(event) {
    console.log('end', event);
  }
}

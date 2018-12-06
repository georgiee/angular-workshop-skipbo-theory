import { HostBinding, Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, sequence, stagger } from '@angular/animations';

@Component({
  selector: 'app-my',
  templateUrl: 'my.component.html',
  styleUrls: ['my.component.scss'],
  animations: [

  ]
})
export class MyComponent {
  public counter = 0;

  increment() {
    console.log('increment');
    this.counter++;
  }

  start(event) {
    console.log('start', event);
  }

  end(event) {
    console.log('end', event);
  }
}

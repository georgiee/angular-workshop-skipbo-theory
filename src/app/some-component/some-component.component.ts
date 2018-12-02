import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.scss']
})
export class SomeComponentComponent {
  probe() {
    console.log('probe received in SomeComponentComponent');
  }
}

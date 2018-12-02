import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ComponentOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

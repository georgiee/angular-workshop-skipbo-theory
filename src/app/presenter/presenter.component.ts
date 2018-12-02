import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.scss']
})
export class PresenterComponent implements OnInit {
  @Input() clients = [];

  constructor() { }

  ngOnInit() {
  }

}

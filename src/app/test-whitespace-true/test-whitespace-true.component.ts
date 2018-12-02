import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-whitespace-true',
  templateUrl: './test-whitespace-true.component.html',
  styleUrls: ['./test-whitespace-true.component.scss'],
  preserveWhitespaces: false
})
export class TestWhitespaceTrueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-whitespace',
  templateUrl: './test-whitespace.component.html',
  styleUrls: ['./test-whitespace.component.scss'],
  preserveWhitespaces: true
})
export class TestWhitespaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

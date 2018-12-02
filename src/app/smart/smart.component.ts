import { Component, OnInit, Inject } from '@angular/core';
import { BusinessStuffService } from '../business-stuff.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {

  constructor(
    private _service: BusinessStuffService
  ) { }

  ngOnInit() {
  }

  get client$() {
    return this._service.client$;
  }
}

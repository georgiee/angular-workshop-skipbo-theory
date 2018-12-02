import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessStuffService {
  _clients = ['bmw', 'mercedes', 'vw', 'porsche'];

  constructor() { }

  get client$() {
    return of(this._clients);
  }
}

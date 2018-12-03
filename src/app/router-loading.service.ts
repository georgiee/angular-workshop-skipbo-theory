import { Injectable } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, ResolveStart, ResolveEnd } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterLoadingService {


  routerLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.routerLoading.asObservable();

  constructor (private router: Router) {
    this.init();
  }

  init () {
    this.router.events.subscribe(event => {
      console.log(event);

        if (event instanceof ResolveStart) {
            this.routerLoading.next(true);
        } else if (event instanceof ResolveEnd) {
          this.routerLoading.next(false);
        }
    });
  }
}

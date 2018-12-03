import { Component, NgModuleFactory, NgModuleFactoryLoader, ViewContainerRef, ViewChild, Injector, NgModuleRef } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { RouterLoadingService } from './router-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-theory';
  loading$;

  @ViewChild('container', { read: ViewContainerRef }) viewRef: ViewContainerRef;

  constructor(
    private loader:     NgModuleFactoryLoader,
    private injector:   Injector,
    private moduleRef:  NgModuleRef<any>,
    private routerLoading: RouterLoadingService
    ) {

      this.loading$ = this.routerLoading.loading$;
  }
}

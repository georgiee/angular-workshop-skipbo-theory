import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { UnicornComponent } from './unicorn/unicorn.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'workshop-theory';
  @ViewChild('unicorns', {read: ViewContainerRef}) unicornsContainer: ViewContainerRef;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
      const unicornComponent = this.componentFactoryResolver.resolveComponentFactory(UnicornComponent);
      this.unicornsContainer.createComponent(unicornComponent);
  }
}

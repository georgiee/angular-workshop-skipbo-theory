import { Component, NgModuleFactory, NgModuleFactoryLoader, ViewContainerRef, ViewChild, Injector, NgModuleRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-theory';
  @ViewChild('container', { read: ViewContainerRef }) viewRef: ViewContainerRef;

  constructor(
    private loader:     NgModuleFactoryLoader,
    private injector:   Injector,
    private moduleRef:  NgModuleRef<any>) {
  }
  load() {
    console.log('load');

    const path = 'src/app/lazy-feature/lazy-feature.module#LazyFeatureModule';

    this.loader.load(path).then((moduleFactory: NgModuleFactory<any>) => {
      // myEntry & otherComponent are static properties we defined on the module
      // to get access to the references of the components.
      const entryComponent = (<any>moduleFactory.moduleType).myEntry;
      const otherComponent = (<any>moduleFactory.moduleType).otherComponent;
      console.log('otherComponent');

      const moduleRef = moduleFactory.create(this.injector);
      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      this.viewRef.createComponent(compFactory);

      const compFactoryA = moduleRef.componentFactoryResolver.resolveComponentFactory(otherComponent.a);
      this.viewRef.createComponent(compFactoryA);

      const compFactoryB = moduleRef.componentFactoryResolver.resolveComponentFactory(otherComponent.b);
      this.viewRef.createComponent(compFactoryB);
    });
  }
}

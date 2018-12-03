import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { LazyFeatureComponent } from './lazy-feature/lazy-feature.component';

@NgModule({
  declarations: [AComponent, BComponent, LazyFeatureComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    // we already learned, that whenever you want to creat a dynamic component
    // it must appear in this list.
    LazyFeatureComponent,
    AComponent,
    BComponent
  ]
})
export class LazyFeatureModule {
  static myEntry = LazyFeatureComponent;
  static otherComponent = {
    a: AComponent,
    b: BComponent
  };
}

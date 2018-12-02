import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponentComponent } from './private-component/private-component.component';
import { PublicComponentComponent } from './public-component/public-component.component';

@NgModule({
  declarations: [
    PrivateComponentComponent, // private can be used by public but by no other component.
    PublicComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PublicComponentComponent // only this component will be available outside
  ]
})
export class SharedModule { }

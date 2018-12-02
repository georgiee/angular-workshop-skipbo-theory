import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [
    AbcComponent,
    DefComponent,
    FooComponent,
    BarComponent
  ],
  exports: [
    AbcComponent,
    DefComponent,
    FooComponent,
    BarComponent,
    ButtonModule // reexport what ButtonModule already exports.
  ],
  imports: [
    CommonModule,
    ButtonModule // only required if any other component defined here needs a button
  ],
})
export class UiModule { }

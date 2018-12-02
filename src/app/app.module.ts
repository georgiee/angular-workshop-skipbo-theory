import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneDirective } from './one.directive';
import { TwoDirective } from './two.directive';
import { ThreeDirective } from './three.directive';
import { SomeComponentComponent } from './some-component/some-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OneDirective,
    TwoDirective,
    ThreeDirective,
    SomeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

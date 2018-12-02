import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsualComponentComponent } from './usual-component/usual-component.component';
import { UnicornComponent } from './unicorn/unicorn.component';

@NgModule({
  declarations: [
    AppComponent,
    UsualComponentComponent,
    UnicornComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    UnicornComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

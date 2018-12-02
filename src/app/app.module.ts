import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PushEnabledComponent } from './push-enabled/push-enabled.component';

@NgModule({
  declarations: [
    AppComponent,
    PushEnabledComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

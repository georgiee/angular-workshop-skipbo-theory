import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestWhitespaceComponent } from './test-whitespace/test-whitespace.component';
import { TestWhitespaceTrueComponent } from './test-whitespace-true/test-whitespace-true.component';

@NgModule({
  declarations: [
    AppComponent,
    TestWhitespaceComponent,
    TestWhitespaceTrueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';

@Component({
  selector: `other-app-root`,
  template: `I'm a full Angular application 🤪`
})
class OtherAppComponent {

}

@NgModule({
  declarations: [
    AppComponent, OtherAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, OtherAppComponent]
})
export class AppModule { }

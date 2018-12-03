import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';

const routes: Route[] = [
  { path: 'a', component: AComponent}
];
@NgModule({
  declarations: [
    AppComponent,
     AComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

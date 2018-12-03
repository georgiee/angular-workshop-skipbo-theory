import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { AComponent } from './lazy-feature/a/a.component';
import { MyProtectorGuard } from './my-protector.guard';

const routes: Route[] = [
  {
    path: 'some-route', component: AComponent,
    canActivate: [MyProtectorGuard],
    resolve: [MyProtectorGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent, AComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

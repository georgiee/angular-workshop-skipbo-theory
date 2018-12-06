import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { BComponent } from './b/b.component';

const routes: Route[] = [
  {
    path: 'a', component: MyComponent
  },
  {
    path: 'b', component: BComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

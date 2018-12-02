import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutedContentComponent } from './routed-content/routed-content.component';
const routes = [
  {path: 'abc', component: RoutedContentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    RoutedContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

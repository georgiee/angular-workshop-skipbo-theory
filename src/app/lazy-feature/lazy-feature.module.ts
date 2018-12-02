import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { LazyFeatureComponent } from './lazy-feature/lazy-feature.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '', component: LazyFeatureComponent,
    children: [
      {
        path: '', redirectTo: 'a', pathMatch: 'full'
      },
      {
        path: 'a', component: AComponent,
      },
      {
        path: 'b', component: BComponent,
      }
    ]
  },
]
@NgModule({
  declarations: [AComponent, BComponent, LazyFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyFeatureModule { }

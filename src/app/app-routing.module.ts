import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { CComponent } from './pages/c/c.component';

const routes: Routes = [
  // Route de base - Page A
  {
    path: '',
    component: AComponent
  },

  // Page - B
  {
    path: 'page-b',
    component: BComponent
  },

  // Page - C
  {
    path: 'page-c',
    component: CComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

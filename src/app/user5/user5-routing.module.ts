import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { User5Page } from './user5.page';

const routes: Routes = [
  {
    path: '',
    component: User5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class User5PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { User4Page } from './user4.page';

const routes: Routes = [
  {
    path: '',
    component: User4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class User4PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { User1Page } from './user1.page';

const routes: Routes = [
  {
    path: '',
    component: User1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class User1PageRoutingModule {}

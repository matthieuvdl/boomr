import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { User2Page } from './user2.page';

const routes: Routes = [
  {
    path: '',
    component: User2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class User2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { User3Page } from './user3.page';

const routes: Routes = [
  {
    path: '',
    component: User3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class User3PageRoutingModule {}

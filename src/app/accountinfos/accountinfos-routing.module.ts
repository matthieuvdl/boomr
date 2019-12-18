import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountinfosPage } from './accountinfos.page';

const routes: Routes = [
  {
    path: '',
    component: AccountinfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountinfosPageRoutingModule {}

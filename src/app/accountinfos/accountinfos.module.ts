import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountinfosPageRoutingModule } from './accountinfos-routing.module';

import { AccountinfosPage } from './accountinfos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountinfosPageRoutingModule
  ],
  declarations: [AccountinfosPage]
})
export class AccountinfosPageModule {}

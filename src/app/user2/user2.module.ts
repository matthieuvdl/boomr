import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { User2PageRoutingModule } from './user2-routing.module';

import { User2Page } from './user2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    User2PageRoutingModule
  ],
  declarations: [User2Page]
})
export class User2PageModule {}

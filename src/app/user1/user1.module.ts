import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { User1PageRoutingModule } from './user1-routing.module';

import { User1Page } from './user1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    User1PageRoutingModule
  ],
  declarations: [User1Page]
})
export class User1PageModule {}

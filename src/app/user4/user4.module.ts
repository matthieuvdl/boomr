import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { User4PageRoutingModule } from './user4-routing.module';

import { User4Page } from './user4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    User4PageRoutingModule
  ],
  declarations: [User4Page]
})
export class User4PageModule {}

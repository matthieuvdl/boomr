import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { User5PageRoutingModule } from './user5-routing.module';

import { User5Page } from './user5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    User5PageRoutingModule
  ],
  declarations: [User5Page]
})
export class User5PageModule {}

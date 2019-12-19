import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { User3PageRoutingModule } from './user3-routing.module';

import { User3Page } from './user3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    User3PageRoutingModule
  ],
  declarations: [User3Page]
})
export class User3PageModule {}

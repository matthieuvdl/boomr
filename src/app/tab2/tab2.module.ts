import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}

@Component({
  selector: 'slider',
  templateUrl: './accountinfos.page.html',
  styleUrls: ['./accountinfos.page.scss'],
})
export class SlideExample {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
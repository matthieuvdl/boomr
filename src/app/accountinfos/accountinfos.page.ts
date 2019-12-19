import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountinfos',
  templateUrl: './accountinfos.page.html',
  styleUrls: ['./accountinfos.page.scss'],
})
export class AccountinfosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

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




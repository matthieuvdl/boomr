import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  nbrProfile = 5;
  profileId = 0;

  constructor() {
    
    function RandomGen(max)
    {
      return Math.floor(Math.random() * Math.floor(max));
    }
    this.profileId = RandomGen(this.nbrProfile);

  } 

  ngOnInit(){}

}

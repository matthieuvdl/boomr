import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  maxProfile = 5;
  profileId = 0;
  age = 0;
  name = "test";
  ville = "test";
  genreId1 = "";
  genreId2 = "";
  genreId3 = "";
  albumId1 = "";
  albumId2 = "";
  albumId3 = "";
  albumId4 = "";

  constructor() {

    this.profileId = this.RandomGen(this.maxProfile);
    this.infoSet(this.maxProfile);

  } 

  RandomGen(max)
    {
      return Math.floor(Math.random() * Math.floor(max));
    }
  infoSet(x)
    {
      x = this.RandomGen(this.maxProfile)
      if(x == 0)
      {
        this.name = "Jean";
        this.age = 18;
        this.ville = "Paris";
        this.genreId1 = "rock";
        this.genreId2 = "electro";
        this.genreId3 = "jazz";
        this.albumId1 = "Test";
        this.albumId2 = "Test3";
        this.albumId3 = "Test2";
        this.albumId4 = "Test1";
      }
      if(x == 1)
      {
        this.name = "Alexis";
        this.age = 24;
        this.ville = "Lyon";
        this.genreId1 = "rock";
        this.genreId2 = "metal";
        this.genreId3 = "rnb";
        this.albumId1 = "Test";
        this.albumId2 = "Test3";
        this.albumId3 = "Test2";
        this.albumId4 = "Test1";
      }
      if(x == 2)
      {
        this.name = "Matthieu";
        this.age = 20;
        this.ville = "Villejuif";
        this.genreId1 = "jazz";
        this.genreId2 = "funk";
        this.genreId3 = "rnb";
        this.albumId1 = "Test";
        this.albumId2 = "Test3";
        this.albumId3 = "Test2";
        this.albumId4 = "Test1";
      }
      if(x == 3)
      {
        this.name = "Magalie";
        this.age = 31;
        this.ville = "St-Pierre-du-Perray";
        this.genreId1 = "pop";
        this.genreId2 = "electro";
        this.genreId3 = "disco";
        this.albumId1 = "Test";
        this.albumId2 = "Test3";
        this.albumId3 = "Test2";
        this.albumId4 = "Test1";
      }
      if(x == 4)
      {
        this.name = "Sarah";
        this.age = 25;
        this.ville = "Villeurbanne"
        this.genreId1 = "rnb";
        this.genreId2 = "jazz";
        this.genreId3 = "electro";
        this.albumId1 = "Test";
        this.albumId2 = "Test3";
        this.albumId3 = "Test2";
        this.albumId4 = "Test1";
      }
      if(x == 5)
      {
        this.name = "Killian";
        this.age = 22;
        this.ville = "Marly-Gomont";
        this.genreId1 = "rock";
        this.genreId2 = "pop";
        this.genreId3 = "reggae";
        this.albumId1 = "Test";
        this.albumId2 = "Test3";
        this.albumId3 = "Test2";
        this.albumId4 = "Test1";
      }
    }

  launchInfoset(){
    this.infoSet(this.maxProfile);
  }

  ngOnInit(){}

}
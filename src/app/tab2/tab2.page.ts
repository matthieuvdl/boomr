import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  maxProfile = 6;
  profileId = 0;
  age = 0;
  name = "test";
  ville = "test";
  avatar = "";
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
        this.avatar = "jean.jpg";
        this.age = 24;
        this.ville = "Paris";
        this.genreId1 = "rock";
        this.genreId2 = "electro";
        this.genreId3 = "jazz";
        this.albumId1 = "daftpunk";
        this.albumId2 = "muse";
        this.albumId3 = "ram";
        this.albumId4 = "lolozouai";
      }
      if(x == 1)
      {
        this.name = "Alexis";
        this.avatar = "alexis.jpg";
        this.age = 24;
        this.ville = "Lyon";
        this.genreId1 = "rock";
        this.genreId2 = "metal";
        this.genreId3 = "rnb";
        this.albumId1 = "nirvana";
        this.albumId2 = "toxicity";
        this.albumId3 = "drake";
        this.albumId4 = "linkinpark";
      }
      if(x == 2)
      {
        this.name = "Axel";
        this.avatar = "axel.jpg";
        this.age = 20;
        this.ville = "Villiers-sur-Marne";
        this.genreId1 = "jazz";
        this.genreId2 = "funk";
        this.genreId3 = "rnb";
        this.albumId1 = "kindofblue";
        this.albumId2 = "givemethenight";
        this.albumId3 = "rhfactor";
        this.albumId4 = "coltrane";
      }
      if(x == 3)
      {
        this.name = "Magalie";
        this.avatar = "magalie.jpg";
        this.age = 31;
        this.ville = "St-Pierre-du-Perray";
        this.genreId1 = "pop";
        this.genreId2 = "electro";
        this.genreId3 = "disco";
        this.albumId1 = "koolandthegang";
        this.albumId2 = "brunomars";
        this.albumId3 = "ewf";
        this.albumId4 = "faces";
      }
      if(x == 4)
      {
        this.name = "Sarah";
        this.age = 25;
        this.avatar = "sarah.jpg";
        this.ville = "Villeurbanne"
        this.genreId1 = "rnb";
        this.genreId2 = "jazz";
        this.genreId3 = "electro";
        this.albumId1 = "billevans";
        this.albumId2 = "rihanna";
        this.albumId3 = "biscuit";
        this.albumId4 = "ram";
      }
      if(x == 5)
      {
        this.name = "Killian";
        this.age = 33;
        this.avatar = "killian.jpg";
        this.ville = "Marly-Gomont";
        this.genreId1 = "rock";
        this.genreId2 = "pop";
        this.genreId3 = "reggae";
        this.albumId1 = "mika";
        this.albumId2 = "nirvana";
        this.albumId3 = "acdc";
        this.albumId4 = "rolling";
      }
    }

  launchInfoset(){
    this.infoSet(this.maxProfile);
  }

  ngOnInit(){}

}
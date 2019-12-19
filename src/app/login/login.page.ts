import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicNativePlugin } from '@ionic-native/core';
import { Deeplinks } from '@ionic-native/deeplinks/ngx'
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';
import { NavController } from '@ionic/angular';
declare var cordova: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  result: {};

  constructor(private spotifyAuth: SpotifyAuth,
    public navCtrl : NavController) { }

  ngOnInit() {
  }

  authWithSpotify() 
  {
    const config = 
    {
      clientId: "0b01c7fd4b9c40adb2d36a4003389a16",
      redirectUrl: "boomrapp://callback",
      scopes: ["streaming", "playlist-read-private", "user-read-email", "user-read-private", "user-top-read", "user-read-recently-played", "user-library-read"],
      tokenExchangeUrl: "http://boomr.herokuapp.com/exchange",
      tokenRefreshUrl: "http://boomr.herokuapp.com/refresh",
    };
 
    this.spotifyAuth.authorize(config)
      .then(({ accessToken, encryptedRefreshToken, expiresAt }) => 
      {
        // console.log(`Got an access token, its ${accessToken}!`);
        // console.log(`Its going to expire in ${expiresAt - Date.now()}ms.`);
        this.result = { access_token: accessToken, expires_in: expiresAt, ref: encryptedRefreshToken };
      });
    console.log(`Its going to expire in`);
  }

}

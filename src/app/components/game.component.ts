import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';
import {SafeResourceUrl, DomSanitizer}  from "@angular/platform-browser";
import {APIService}                     from '../services/api.service';

@Component({
  selector:    'movies',
  templateUrl: '../partials/game.component.html',
  styleUrls:   ['../css/game.component.css'],
  providers:   [APIService]
})
export class GameComponent implements OnInit {

  router:   Router;
  gamesId:  string;
  game:     any;
  url:      SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, _router: Router, private _gamesService: APIService) {
    this.router  = _router;
    this.gamesId = this.router.url;
  }

  ngOnInit() {
    this.getGameById(this.gamesId);
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getGameById(name: string) {
    this._gamesService.getGameById(name)
        .subscribe(
            response => {
              this.game = response;
              if(!this.game) return;
              this.url =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.cherrycasino.com/en/play/" + this.game.id);
              console.log(this.url);
            },
            error    => { console.log(error); },
            ()       => { console.log("game loading completed"); }
        );
  }

}
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {APIService}          from '../services/api.service';
import {gamePipe}            from '../pipes/gamePipe';

@Component({
  selector:    'movies',
  templateUrl: '../partials/games.component.html',
  styleUrls:   ['../css/games.component.css'],
  providers:   [APIService]
})
export class GamesComponent implements OnInit {

  router:   Router;
  gamesId:  string;
  title:    string;
  games:    any;

  constructor(_router: Router, private _gamesService: APIService) {
    this.router  = _router;
    this.gamesId = this.router.url;
    this.title   = this.gamesId.replace("-", " ").replace("/", "").toUpperCase();
  }

  ngOnInit() {
    this.getGameById(this.gamesId);
  }

  getGameById(name: string) {
    this._gamesService.getGamesByCategoryName(name)
        .subscribe(
            response => {
              if(!response) return;

              /*var filtered =  {};
              for(let i=0; i<response.length; i++) {
                if(response[i] && response[i].enabled) {
                  filtered[i] = response[i];
                }
              }*/

              //this.games = filtered;
              this.games = response;

            },
            error    => { console.log(error); },
            ()       => { console.log("games loading completed"); }
        );
  }

}
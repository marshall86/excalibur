import { Component, OnInit }    from '@angular/core';
import {Globals}                from '../globals/info';
import {APIService}             from '../services/api.service';

@Component({
  selector:    'navigation',
  templateUrl: '../partials/navigation.component.html',
  styleUrls:   ['../css/navigation.component.css'],
  providers:   [APIService]
})

export class NavigationComponent implements OnInit {

  globals:    Globals;
  categories: any;
  site_name:  string;

  constructor(private globalSettings: Globals, private _gamesService: APIService) {
    this.globals    = globalSettings;
    this.site_name  = this.globals.SITE_NAME;
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {

    this._gamesService.getCategories()
        .subscribe(
            response => { this.categories = response; },
            error    => { console.log(error); },
            ()       => { console.log("categories loading completed"); }
        );

  }

}

import { Component } from '@angular/core';
import {Globals}     from '../globals/info';

@Component({
  selector:    'app-root',
  templateUrl: '../partials/app.component.html',
  styleUrls:   ['../css/app.component.css']
})
export class AppComponent {
  globals: Globals;

  constructor(private globalSettings: Globals) {
    this.globals = globalSettings;
  }
}
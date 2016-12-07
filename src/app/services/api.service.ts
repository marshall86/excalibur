import { Injectable }   from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class APIService {

  private _APIURL:        string;
  private _CATEGORIESURL: string;
  private headers:        Headers;

  constructor(private http:Http) {

    this._APIURL        = 'https://staging-frontapi.cherrytech.com';
    this._CATEGORIESURL = this._APIURL + "/game-categories";
    this.headers        = new Headers({ 'CherryTech-Brand': 'cherrycasino.desktop', 'Accept-Language':  'en-GB' });

  }

  getCategories() {
    return this.http
        .get(this._CATEGORIESURL, this.getHeaders())
        .map(
            (res:Response) => {
              var catsRes = res.json();
              return catsRes ? catsRes._embedded.game_categories : {};
            }
        );
  }

  getGamesByCategoryName(name: string) {
    return this.http
        .get(this._CATEGORIESURL + name, this.getHeaders())
        .map(
            (res:Response) => {
              var catGames = res.json();
              return catGames ? catGames._embedded.games : {};
            }
        );
  }

  getGameById(name: string) {

    return this.http
        .get(this._APIURL + name, this.getHeaders())
        .map(
            (res:Response) => { return res.json(); }
        );
  }

  getHeaders() {
    return new RequestOptions({ headers: this.headers });
  }

  handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
  }

}
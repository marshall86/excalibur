var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var APIService = (function () {
    function APIService(http) {
        this.http = http;
        this._APIURL = 'https://staging-frontapi.cherrytech.com';
        this._CATEGORIESURL = this._APIURL + "/game-categories";
        this.headers = new http_1.Headers({ 'CherryTech-Brand': 'cherrycasino.desktop', 'Accept-Language': 'en-GB' });
    }
    APIService.prototype.getCategories = function () {
        return this.http
            .get(this._CATEGORIESURL, this.getHeaders())
            .map(function (res) {
            var catsRes = res.json();
            return catsRes ? catsRes._embedded.game_categories : {};
        });
    };
    APIService.prototype.getGamesByCategoryName = function (name) {
        return this.http
            .get(this._CATEGORIESURL + name, this.getHeaders())
            .map(function (res) {
            var catGames = res.json();
            return catGames ? catGames._embedded.games : {};
        });
    };
    APIService.prototype.getGameById = function (name) {
        return this.http
            .get(this._APIURL + name, this.getHeaders())
            .map(function (res) { return res.json(); });
    };
    APIService.prototype.getHeaders = function () {
        return new http_1.RequestOptions({ headers: this.headers });
    };
    APIService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return errMsg;
    };
    APIService = __decorate([
        core_1.Injectable()
    ], APIService);
    return APIService;
})();
exports.APIService = APIService;
//# sourceMappingURL=api.service.js.map
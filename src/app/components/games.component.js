var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var api_service_1 = require('../services/api.service');
var GamesComponent = (function () {
    function GamesComponent(_router, _gamesService) {
        this._gamesService = _gamesService;
        this.router = _router;
        this.gamesId = this.router.url;
        this.title = this.gamesId.replace("-", " ").replace("/", "").toUpperCase();
    }
    GamesComponent.prototype.ngOnInit = function () {
        this.getGameById(this.gamesId);
    };
    GamesComponent.prototype.getGameById = function (name) {
        var _this = this;
        this._gamesService.getGamesByCategoryName(name)
            .subscribe(function (response) {
            if (!response)
                return;
            /*var filtered =  {};
            for(let i=0; i<response.length; i++) {
              if(response[i] && response[i].enabled) {
                filtered[i] = response[i];
              }
            }*/
            //this.games = filtered;
            _this.games = response;
        }, function (error) { console.log(error); }, function () { console.log("games loading completed"); });
    };
    GamesComponent = __decorate([
        core_1.Component({
            selector: 'movies',
            templateUrl: '../partials/games.component.html',
            styleUrls: ['../css/games.component.css'],
            providers: [api_service_1.APIService]
        })
    ], GamesComponent);
    return GamesComponent;
})();
exports.GamesComponent = GamesComponent;
//# sourceMappingURL=games.component.js.map
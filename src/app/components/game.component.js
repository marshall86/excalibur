var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var api_service_1 = require('../services/api.service');
var GameComponent = (function () {
    function GameComponent(sanitizer, _router, _gamesService) {
        this.sanitizer = sanitizer;
        this._gamesService = _gamesService;
        this.router = _router;
        this.gamesId = this.router.url;
    }
    GameComponent.prototype.ngOnInit = function () {
        this.getGameById(this.gamesId);
    };
    GameComponent.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    GameComponent.prototype.getGameById = function (name) {
        var _this = this;
        this._gamesService.getGameById(name)
            .subscribe(function (response) {
            _this.game = response;
            if (!_this.game)
                return;
            _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl("https://www.cherrycasino.com/en/play/" + _this.game.id);
            console.log(_this.url);
        }, function (error) { console.log(error); }, function () { console.log("game loading completed"); });
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'movies',
            templateUrl: '../partials/game.component.html',
            styleUrls: ['../css/game.component.css'],
            providers: [api_service_1.APIService]
        })
    ], GameComponent);
    return GameComponent;
})();
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map
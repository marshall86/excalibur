var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var games_component_1 = require('../components/games.component');
var game_component_1 = require('../components/game.component');
var about_component_1 = require('../components/about.component');
var appRoutes = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'games/:id', component: game_component_1.GameComponent },
    { path: 'popular-games', component: games_component_1.GamesComponent },
    { path: 'video-slots', component: games_component_1.GamesComponent },
    { path: 'table-games', component: games_component_1.GamesComponent },
    { path: 'video-poker', component: games_component_1.GamesComponent },
    { path: 'classic-slots', component: games_component_1.GamesComponent },
    { path: 'jackpot-games', component: games_component_1.GamesComponent },
    { path: 'other-games', component: games_component_1.GamesComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
})();
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map
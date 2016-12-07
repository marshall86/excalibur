var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var info_1 = require('./globals/info');
var app_component_1 = require('./components/app.component');
var navigation_component_1 = require('./components/navigation.component');
var app_routing_module_1 = require('./modules/app.routing.module');
var game_component_1 = require('./components/game.component');
var games_component_1 = require('./components/games.component');
var about_component_1 = require('./components/about.component');
var api_service_1 = require('./services/api.service');
var gamePipe_1 = require('./pipes/gamePipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                game_component_1.GameComponent,
                games_component_1.GamesComponent,
                about_component_1.AboutComponent,
                gamePipe_1.gamePipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [info_1.Globals, http_1.HttpModule, api_service_1.APIService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var api_service_1 = require('../services/api.service');
var NavigationComponent = (function () {
    function NavigationComponent(globalSettings, _gamesService) {
        this.globalSettings = globalSettings;
        this._gamesService = _gamesService;
        this.globals = globalSettings;
        this.site_name = this.globals.SITE_NAME;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    NavigationComponent.prototype.getCategories = function () {
        var _this = this;
        this._gamesService.getCategories()
            .subscribe(function (response) { _this.categories = response; }, function (error) { console.log(error); }, function () { console.log("categories loading completed"); });
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation',
            templateUrl: '../partials/navigation.component.html',
            styleUrls: ['../css/navigation.component.css'],
            providers: [api_service_1.APIService]
        })
    ], NavigationComponent);
    return NavigationComponent;
})();
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map
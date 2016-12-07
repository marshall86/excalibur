var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AboutComponent = (function () {
    function AboutComponent(globalSettings) {
        this.globalSettings = globalSettings;
        this.globals = globalSettings;
        this.site_name = this.globals.SITE_NAME;
        this.description = "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.";
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            templateUrl: '../partials/about.component.html',
            styleUrls: ['../css/about.component.css']
        })
    ], AboutComponent);
    return AboutComponent;
})();
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map
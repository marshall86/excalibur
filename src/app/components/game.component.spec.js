/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var game_component_ts_1 = require('./game.component.ts');
describe('GameComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [game_component_ts_1.GameComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(game_component_ts_1.GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=game.component.spec.js.map
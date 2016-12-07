/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var games_component_ts_1 = require('./games.component.ts');
describe('DescriptionComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [games_component_ts_1.DescriptionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(games_component_ts_1.DescriptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=games.component.spec.js.map
/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var about_component_ts_1 = require('./about.component.ts');
describe('AboutComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [about_component_ts_1.AboutComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(about_component_ts_1.AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=about.component.spec.js.map
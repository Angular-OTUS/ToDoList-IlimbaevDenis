import {
  ToDoButtonComponent,
  init_to_do_button_component
} from "./chunk-JPWMAFZO.js";
import "./chunk-B35VPU4W.js";
import {
  TestBed,
  init_testing
} from "./chunk-L3LV6A5L.js";
import {
  __async,
  __commonJS
} from "./chunk-A5WWXBEI.js";

// src/components/to-do-button-component/to-do-button-component.spec.ts
var require_to_do_button_component_spec = __commonJS({
  "src/components/to-do-button-component/to-do-button-component.spec.ts"(exports) {
    init_testing();
    init_to_do_button_component();
    describe("ToDoButtonComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ToDoButtonComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ToDoButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_to_do_button_component_spec();
//# sourceMappingURL=spec-to-do-button-component.spec.js.map

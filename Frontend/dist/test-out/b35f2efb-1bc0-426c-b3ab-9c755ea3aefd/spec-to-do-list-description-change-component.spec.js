import {
  ToDoListDescriptionChangeComponent,
  init_to_do_list_description_change_component
} from "./chunk-EAB44FRC.js";
import "./chunk-R6H6Z5JE.js";
import "./chunk-OMREFKDU.js";
import "./chunk-JPWMAFZO.js";
import "./chunk-B35VPU4W.js";
import {
  TestBed,
  init_testing
} from "./chunk-L3LV6A5L.js";
import {
  __async,
  __commonJS
} from "./chunk-A5WWXBEI.js";

// src/components/to-do-list-description-change-component/to-do-list-description-change-component.spec.ts
var require_to_do_list_description_change_component_spec = __commonJS({
  "src/components/to-do-list-description-change-component/to-do-list-description-change-component.spec.ts"(exports) {
    init_testing();
    init_to_do_list_description_change_component();
    describe("ToDoListDescriptionChangeComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ToDoListDescriptionChangeComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ToDoListDescriptionChangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_to_do_list_description_change_component_spec();
//# sourceMappingURL=spec-to-do-list-description-change-component.spec.js.map

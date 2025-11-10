import {
  ToDoListToastComponent,
  init_to_do_list_toast_component
} from "./chunk-524G23TH.js";
import "./chunk-ZIT4Y74U.js";
import "./chunk-B35VPU4W.js";
import {
  TestBed,
  init_testing
} from "./chunk-L3LV6A5L.js";
import {
  __async,
  __commonJS
} from "./chunk-A5WWXBEI.js";

// src/components/to-do-list-toast-component/to-do-list-toast-component.spec.ts
var require_to_do_list_toast_component_spec = __commonJS({
  "src/components/to-do-list-toast-component/to-do-list-toast-component.spec.ts"(exports) {
    init_testing();
    init_to_do_list_toast_component();
    describe("ToDoListToastComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ToDoListToastComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ToDoListToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_to_do_list_toast_component_spec();
//# sourceMappingURL=spec-to-do-list-toast-component.spec.js.map

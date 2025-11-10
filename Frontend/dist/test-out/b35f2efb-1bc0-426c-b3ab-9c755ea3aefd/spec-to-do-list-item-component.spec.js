import {
  ToDoListItemComponent,
  init_to_do_list_item_component
} from "./chunk-QFNTR64F.js";
import "./chunk-2YVCCKDX.js";
import "./chunk-R6H6Z5JE.js";
import "./chunk-OMREFKDU.js";
import "./chunk-JPWMAFZO.js";
import "./chunk-B35VPU4W.js";
import "./chunk-ZWMIUOJR.js";
import {
  TestBed,
  init_testing
} from "./chunk-L3LV6A5L.js";
import {
  __async,
  __commonJS
} from "./chunk-A5WWXBEI.js";

// src/components/to-do-list-item-component/to-do-list-item-component.spec.ts
var require_to_do_list_item_component_spec = __commonJS({
  "src/components/to-do-list-item-component/to-do-list-item-component.spec.ts"(exports) {
    init_testing();
    init_to_do_list_item_component();
    describe("ToDoListItemComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ToDoListItemComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ToDoListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_to_do_list_item_component_spec();
//# sourceMappingURL=spec-to-do-list-item-component.spec.js.map

import {
  ToDoListItemCheckboxComponent,
  init_to_do_list_item_checkbox_component
} from "./chunk-ZWMIUOJR.js";
import {
  TestBed,
  init_testing
} from "./chunk-L3LV6A5L.js";
import {
  __async,
  __commonJS
} from "./chunk-A5WWXBEI.js";

// src/components/to-do-list-item-checkbox-component/to-do-list-item-checkbox-component.spec.ts
var require_to_do_list_item_checkbox_component_spec = __commonJS({
  "src/components/to-do-list-item-checkbox-component/to-do-list-item-checkbox-component.spec.ts"(exports) {
    init_testing();
    init_to_do_list_item_checkbox_component();
    describe("ToDoListItemCheckboxComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ToDoListItemCheckboxComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ToDoListItemCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_to_do_list_item_checkbox_component_spec();
//# sourceMappingURL=spec-to-do-list-item-checkbox-component.spec.js.map

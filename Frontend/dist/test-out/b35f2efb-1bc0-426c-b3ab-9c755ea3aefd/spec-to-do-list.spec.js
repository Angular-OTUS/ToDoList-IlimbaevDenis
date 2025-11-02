import {
  ToDoList,
  init_to_do_list
} from "./chunk-KQWJS3B6.js";
import "./chunk-HMNTVYXX.js";
import "./chunk-CIJU22KD.js";
import "./chunk-ZIT4Y74U.js";
import "./chunk-WNPJNAHE.js";
import "./chunk-QFNTR64F.js";
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

// src/components/to-do-list/to-do-list.spec.ts
var require_to_do_list_spec = __commonJS({
  "src/components/to-do-list/to-do-list.spec.ts"(exports) {
    init_testing();
    init_to_do_list();
    describe("ToDoList", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ToDoList]
        }).compileComponents();
        fixture = TestBed.createComponent(ToDoList);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_to_do_list_spec();
//# sourceMappingURL=spec-to-do-list.spec.js.map

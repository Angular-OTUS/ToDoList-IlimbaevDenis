import {
  ToDoListToastComponent,
  init_to_do_list_toast_component
} from "./chunk-524G23TH.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-CIJU22KD.js";
import "./chunk-ZIT4Y74U.js";
import "./chunk-WNPJNAHE.js";
import {
  FormsModule,
  init_forms
} from "./chunk-OMREFKDU.js";
import "./chunk-B35VPU4W.js";
import {
  TestBed,
  init_testing
} from "./chunk-L3LV6A5L.js";
import {
  ChangeDetectionStrategy,
  Component,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __name,
  init_core,
  init_tslib_es6,
  provideZonelessChangeDetection
} from "./chunk-A5WWXBEI.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "<app-to-do-list-toast-component />\r\n<router-outlet />\r\n";
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n:host {\n  background-color: rgb(168, 165, 165);\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var _a, App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_to_do_list_toast_component();
    init_forms();
    App = (_a = class {
    }, __name(_a, "App"), _a);
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [
          RouterOutlet,
          ToDoListToastComponent,
          FormsModule
        ],
        template: app_default,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_core();
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, toDoListApp");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map

import {
  TestBed,
  init_testing
} from "./chunk-L3LV6A5L.js";
import {
  __name
} from "./chunk-A5WWXBEI.js";

// src/interceptors/header-interceptor.spec.ts
init_testing();

// src/interceptors/header-interceptor.ts
var headerInterceptor = /* @__PURE__ */ __name((req, next) => {
  console.log(req.headers);
  return next(req);
}, "headerInterceptor");

// src/interceptors/header-interceptor.spec.ts
describe("headerInterceptor", () => {
  const interceptor = /* @__PURE__ */ __name((req, next) => TestBed.runInInjectionContext(() => headerInterceptor(req, next)), "interceptor");
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it("should be created", () => {
    expect(interceptor).toBeTruthy();
  });
});
//# sourceMappingURL=spec-header-interceptor.spec.js.map

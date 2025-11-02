import {
  Injectable,
  __decorate,
  __esm,
  __name,
  init_core,
  init_tslib_es6
} from "./chunk-A5WWXBEI.js";

// src/services/toast-service.ts
var _a, ToastService;
var init_toast_service = __esm({
  "src/services/toast-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    ToastService = (_a = class {
      textArray = [];
      addToast(text) {
        this.textArray.push({ id: this.textArray.length - 1, text });
      }
      updateToast(id, text) {
        const obj = this.textArray[id];
        obj.text = text;
      }
      deleteToast(id) {
        this.textArray.splice(id, 1);
      }
    }, __name(_a, "ToastService"), _a);
    ToastService = __decorate([
      Injectable({ providedIn: "root" })
    ], ToastService);
  }
});

export {
  ToastService,
  init_toast_service
};
//# sourceMappingURL=chunk-ZIT4Y74U.js.map

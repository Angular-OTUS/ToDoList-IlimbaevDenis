import {
  ToastService,
  init_toast_service
} from "./chunk-ZIT4Y74U.js";
import {
  CommonModule,
  init_common
} from "./chunk-B35VPU4W.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Renderer2,
  ViewChild,
  __decorate,
  __esm,
  __name,
  __publicField,
  init_core,
  init_tslib_es6,
  inject,
  signal
} from "./chunk-A5WWXBEI.js";

// angular:jit:template:src\components\to-do-list-toast-component\to-do-list-toast-component.html
var to_do_list_toast_component_default;
var init_to_do_list_toast_component = __esm({
  "angular:jit:template:src\\components\\to-do-list-toast-component\\to-do-list-toast-component.html"() {
    to_do_list_toast_component_default = '<ul #mylist class="toast-list"></ul>\r\n';
  }
});

// angular:jit:style:src\components\to-do-list-toast-component\to-do-list-toast-component.css
var to_do_list_toast_component_default2;
var init_to_do_list_toast_component2 = __esm({
  "angular:jit:style:src\\components\\to-do-list-toast-component\\to-do-list-toast-component.css"() {
    to_do_list_toast_component_default2 = '/* src/components/to-do-list-toast-component/to-do-list-toast-component.css */\n.toast-list {\n  width: 60%;\n  position: absolute;\n  top: 30px;\n  left: 30px;\n  list-style: none;\n}\n.toast-list__item {\n  color: black;\n  padding-bottom: 15px;\n  width: 40%;\n  max-height: 40px;\n  border: solid 4px;\n  border-radius: 3px;\n  animation: slide-in 0.5s ease-out forwards;\n  margin-bottom: 10px;\n}\n.toast-list__item p {\n  font-size: 18px;\n  text-align: center;\n  font-family:\n    "Times New Roman",\n    Times,\n    serif;\n  font-weight: 600;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes exit {\n  0% {\n    transform: translateX(0%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(-100%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=to-do-list-toast-component.css.map */\n';
  }
});

// src/components/to-do-list-toast-component/to-do-list-toast-component.ts
var _a, ToDoListToastComponent;
var init_to_do_list_toast_component3 = __esm({
  "src/components/to-do-list-toast-component/to-do-list-toast-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_to_do_list_toast_component();
    init_to_do_list_toast_component2();
    init_core();
    init_toast_service();
    init_common();
    ToDoListToastComponent = (_a = class {
      appColor = [
        "#007bff",
        "#2d0de0ff",
        "#28a745",
        "#dc3545",
        "#ffc107",
        "#17a2b8",
        "#e218b0ff"
      ];
      interavalForOutputToast = 2e3;
      // ms
      toastService = inject(ToastService);
      renderer = inject(Renderer2);
      changeDetection = inject(ChangeDetectorRef);
      itemCounter = 0;
      intervalId;
      toastes = signal(this.toastService.textArray);
      nativeEl;
      ngAfterViewInit() {
        this.showToast();
      }
      ngOnDestroy() {
        clearInterval(this.intervalId);
      }
      showToast() {
        this.intervalId = setInterval(() => {
          this.ChangeDisplayItem();
        }, this.interavalForOutputToast);
      }
      ChangeDisplayItem() {
        this.changeDetection.detectChanges();
        if (this.itemCounter >= this.toastes().length)
          return;
        console.log(this.nativeEl);
        const item = this.toastes()[this.itemCounter];
        const li = this.renderer.createElement("li");
        const p = this.renderer.createElement("p");
        this.renderer.addClass(li, "toast-list__item");
        this.renderer.setStyle(li, "background-color", this.colorRandomiser());
        this.renderer.appendChild(p, this.renderer.createText(item.text));
        this.renderer.appendChild(li, p);
        this.renderer.appendChild(this.nativeEl?.nativeElement, li);
        this.renderer.removeChild(li, p);
        this.renderer.removeChild(this.nativeEl?.nativeElement, li);
        this.itemCounter++;
      }
      colorRandomiser() {
        const randomid = Math.floor(Math.random() * this.appColor.length);
        return this.appColor[randomid];
      }
    }, __name(_a, "ToDoListToastComponent"), __publicField(_a, "propDecorators", {
      nativeEl: [{ type: ViewChild, args: ["mylist", { static: false }] }]
    }), _a);
    ToDoListToastComponent = __decorate([
      Component({
        selector: "app-to-do-list-toast-component",
        imports: [CommonModule],
        template: to_do_list_toast_component_default,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [to_do_list_toast_component_default2]
      })
    ], ToDoListToastComponent);
  }
});

export {
  ToDoListToastComponent,
  init_to_do_list_toast_component3 as init_to_do_list_toast_component
};
//# sourceMappingURL=chunk-524G23TH.js.map

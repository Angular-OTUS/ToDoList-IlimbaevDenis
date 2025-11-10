import {
  CommonModule,
  init_common
} from "./chunk-B35VPU4W.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  Output,
  __decorate,
  __esm,
  __name,
  __publicField,
  computed,
  contentChild,
  init_core,
  init_tslib_es6,
  model,
  output
} from "./chunk-A5WWXBEI.js";

// angular:jit:template:src\components\to-do-button-component\to-do-button-component.html
var to_do_button_component_default;
var init_to_do_button_component = __esm({
  "angular:jit:template:src\\components\\to-do-button-component\\to-do-button-component.html"() {
    to_do_button_component_default = '  <button\r\n    type="submit"\r\n     [ngStyle]="styles()"\r\n    (click)="myClick()"\r\n    >\r\n    <p>{{tilte()}}</p>\r\n  </button>\r\n';
  }
});

// angular:jit:style:src\components\to-do-button-component\to-do-button-component.css
var to_do_button_component_default2;
var init_to_do_button_component2 = __esm({
  "angular:jit:style:src\\components\\to-do-button-component\\to-do-button-component.css"() {
    to_do_button_component_default2 = '/* src/components/to-do-button-component/to-do-button-component.css */\nbutton:hover {\n  opacity: 0.5;\n}\nbutton p {\n  font-family: "Roboto Serif", serif;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=to-do-button-component.css.map */\n';
  }
});

// src/components/to-do-button-component/to-do-button-component.ts
var _a, ToDoButtonComponent;
var init_to_do_button_component3 = __esm({
  "src/components/to-do-button-component/to-do-button-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_to_do_button_component();
    init_to_do_button_component2();
    init_common();
    init_core();
    init_core();
    ToDoButtonComponent = (_a = class {
      titleWithAttribute = model("", { alias: "myTitle" });
      titleWithContent = contentChild(ElementRef);
      tilte = computed(() => this.computedValue());
      myClickChange = output();
      styles = model({
        "width": "200px",
        "height": "100px",
        "background-color": "white"
      });
      myClick() {
        this.myClickChange.emit();
      }
      computedValue() {
        return this.titleWithAttribute()?.trim() !== "" ? this.titleWithAttribute() : this.titleWithContent()?.nativeElement;
      }
    }, __name(_a, "ToDoButtonComponent"), __publicField(_a, "propDecorators", {
      titleWithAttribute: [{ type: Input, args: [{ isSignal: true, alias: "myTitle", required: false }] }, { type: Output, args: ["myTitleChange"] }],
      titleWithContent: [{ type: ContentChild, args: [ElementRef, { isSignal: true }] }],
      myClickChange: [{ type: Output, args: ["myClickChange"] }],
      styles: [{ type: Input, args: [{ isSignal: true, alias: "styles", required: false }] }, { type: Output, args: ["stylesChange"] }]
    }), _a);
    ToDoButtonComponent = __decorate([
      Component({
        selector: "app-to-do-button-component",
        imports: [CommonModule],
        template: to_do_button_component_default,
        changeDetection: ChangeDetectionStrategy.OnPush,
        standalone: true,
        styles: [to_do_button_component_default2]
      })
    ], ToDoButtonComponent);
  }
});

export {
  ToDoButtonComponent,
  init_to_do_button_component3 as init_to_do_button_component
};
//# sourceMappingURL=chunk-JPWMAFZO.js.map

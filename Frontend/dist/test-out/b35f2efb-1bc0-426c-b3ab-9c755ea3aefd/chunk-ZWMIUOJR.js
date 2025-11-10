import {
  ChangeDetectionStrategy,
  Component,
  Output,
  __decorate,
  __esm,
  __name,
  __publicField,
  init_core,
  init_tslib_es6,
  output
} from "./chunk-A5WWXBEI.js";

// angular:jit:template:src\components\to-do-list-item-checkbox-component\to-do-list-item-checkbox-component.html
var to_do_list_item_checkbox_component_default;
var init_to_do_list_item_checkbox_component = __esm({
  "angular:jit:template:src\\components\\to-do-list-item-checkbox-component\\to-do-list-item-checkbox-component.html"() {
    to_do_list_item_checkbox_component_default = '<div class="to-list__item__status-box">\r\n  <label for="to-list__item__status-box__input__id">Are you complete?</label>\r\n  <input\r\n    id="to-list__item__status-box__input__id"\r\n    class="to-list__item__status-box__input"\r\n    type="checkbox"\r\n    [checked]="checkTask"\r\n    (change)="changeStatus()"\r\n  />\r\n</div>\r\n';
  }
});

// angular:jit:style:src\components\to-do-list-item-checkbox-component\to-do-list-item-checkbox-component.css
var to_do_list_item_checkbox_component_default2;
var init_to_do_list_item_checkbox_component2 = __esm({
  "angular:jit:style:src\\components\\to-do-list-item-checkbox-component\\to-do-list-item-checkbox-component.css"() {
    to_do_list_item_checkbox_component_default2 = '/* src/components/to-do-list-item-checkbox-component/to-do-list-item-checkbox-component.css */\n.to-list__item__status-box {\n  width: 50px;\n  padding: 10px;\n  background-color: white;\n  border: solid;\n  border-color: white;\n  border-radius: 12px;\n  margin-right: 10px;\n  height: 72%;\n  -webkit-box-shadow: 3px 13px 8px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 3px 13px 8px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 3px 13px 8px 0px rgba(34, 60, 80, 0.2);\n  overflow-x: hidden;\n}\ninput[type=checkbox] {\n  transform: scale(1.5);\n}\n.to-list__item__status-box label {\n  color: black;\n  font-family: "Roboto Serif", serif;\n  font-size: 10px;\n  font-weight: 600;\n}\n.to-list__item__status-box__input {\n  background-color: black;\n}\n.to-list__item__status-box__input:checked {\n  background-color: black;\n}\n/*# sourceMappingURL=to-do-list-item-checkbox-component.css.map */\n';
  }
});

// src/components/to-do-list-item-checkbox-component/to-do-list-item-checkbox-component.ts
var _a, ToDoListItemCheckboxComponent;
var init_to_do_list_item_checkbox_component3 = __esm({
  "src/components/to-do-list-item-checkbox-component/to-do-list-item-checkbox-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_to_do_list_item_checkbox_component();
    init_to_do_list_item_checkbox_component2();
    init_core();
    init_core();
    ToDoListItemCheckboxComponent = (_a = class {
      checkTask = false;
      statusTaskChange = output();
      changeStatus() {
        this.checkTask = !this.checkTask;
        this.statusTaskChange.emit(this.checkTask);
      }
    }, __name(_a, "ToDoListItemCheckboxComponent"), __publicField(_a, "propDecorators", {
      statusTaskChange: [{ type: Output, args: ["statusTaskChange"] }]
    }), _a);
    ToDoListItemCheckboxComponent = __decorate([
      Component({
        selector: "app-to-do-list-item-checkbox-component",
        imports: [],
        template: to_do_list_item_checkbox_component_default,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [to_do_list_item_checkbox_component_default2]
      })
    ], ToDoListItemCheckboxComponent);
  }
});

export {
  ToDoListItemCheckboxComponent,
  init_to_do_list_item_checkbox_component3 as init_to_do_list_item_checkbox_component
};
//# sourceMappingURL=chunk-ZWMIUOJR.js.map

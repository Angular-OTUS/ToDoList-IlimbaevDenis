import {
  MatFormFieldModule,
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-R6H6Z5JE.js";
import {
  FormsModule,
  init_forms
} from "./chunk-OMREFKDU.js";
import {
  ToDoButtonComponent,
  init_to_do_button_component
} from "./chunk-JPWMAFZO.js";
import {
  CommonModule,
  init_common
} from "./chunk-B35VPU4W.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  __decorate,
  __esm,
  __name,
  __publicField,
  init_core,
  init_tslib_es6,
  model,
  output
} from "./chunk-A5WWXBEI.js";

// angular:jit:template:src\components\to-do-list-description-change-component\to-do-list-description-change-component.html
var to_do_list_description_change_component_default;
var init_to_do_list_description_change_component = __esm({
  "angular:jit:template:src\\components\\to-do-list-description-change-component\\to-do-list-description-change-component.html"() {
    to_do_list_description_change_component_default = '<div class="container">\r\n  <mat-form-field>\r\n    <mat-label> {{ task()?.description }}</mat-label>\r\n    <textarea appEnterControl matInput [(ngModel)]="innerDescription"></textarea>\r\n  </mat-form-field>\r\n  <app-to-do-button-component\r\n    myTitle="Change description"\r\n    [(styles)]="stylesForButton"\r\n    (myClickChange)="onChange()"\r\n  />\r\n</div>\r\n';
  }
});

// angular:jit:style:src\components\to-do-list-description-change-component\to-do-list-description-change-component.css
var to_do_list_description_change_component_default2;
var init_to_do_list_description_change_component2 = __esm({
  "angular:jit:style:src\\components\\to-do-list-description-change-component\\to-do-list-description-change-component.css"() {
    to_do_list_description_change_component_default2 = "/* src/components/to-do-list-description-change-component/to-do-list-description-change-component.css */\n.container {\n  border: solid;\n  border-color: white;\n  border-radius: 5px;\n  background-color: white;\n  -webkit-box-shadow: 3px 13px 8px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 3px 13px 8px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 3px 13px 8px 0px rgba(34, 60, 80, 0.2);\n  max-width: 100%;\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0px;\n}\n.container textarea {\n  height: 190px;\n}\n/*# sourceMappingURL=to-do-list-description-change-component.css.map */\n";
  }
});

// src/components/to-do-list-description-change-component/to-do-list-description-change-component.ts
var _a, ToDoListDescriptionChangeComponent;
var init_to_do_list_description_change_component3 = __esm({
  "src/components/to-do-list-description-change-component/to-do-list-description-change-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_to_do_list_description_change_component();
    init_to_do_list_description_change_component2();
    init_core();
    init_input();
    init_form_field();
    init_common();
    init_forms();
    init_to_do_button_component();
    init_core();
    ToDoListDescriptionChangeComponent = (_a = class {
      stylesForButton = {
        width: "100%",
        height: "80%",
        "background-color": "#91415bff",
        color: "white",
        border: "solid",
        "border-radius": "8px",
        "border-color": "white"
      };
      innerDescription = "";
      task = model();
      descriptionChange = output();
      onChange() {
        if (this.innerDescription === null || this.innerDescription?.trim() === "") {
          console.log(this.innerDescription);
          return;
        }
        this.descriptionChange.emit(this.innerDescription);
      }
    }, __name(_a, "ToDoListDescriptionChangeComponent"), __publicField(_a, "propDecorators", {
      task: [{ type: Input, args: [{ isSignal: true, alias: "task", required: false }] }, { type: Output, args: ["taskChange"] }],
      descriptionChange: [{ type: Output, args: ["descriptionChange"] }]
    }), _a);
    ToDoListDescriptionChangeComponent = __decorate([
      Component({
        selector: "app-to-do-list-description-change-component",
        imports: [MatInputModule, MatFormFieldModule, CommonModule, FormsModule, ToDoButtonComponent],
        template: to_do_list_description_change_component_default,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [to_do_list_description_change_component_default2]
      })
    ], ToDoListDescriptionChangeComponent);
  }
});

export {
  ToDoListDescriptionChangeComponent,
  init_to_do_list_description_change_component3 as init_to_do_list_description_change_component
};
//# sourceMappingURL=chunk-EAB44FRC.js.map

import {
  MyTooltip,
  init_my_tooltip
} from "./chunk-2YVCCKDX.js";
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
  ToDoListItemCheckboxComponent,
  init_to_do_list_item_checkbox_component
} from "./chunk-ZWMIUOJR.js";
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
  input,
  model,
  output
} from "./chunk-A5WWXBEI.js";

// angular:jit:template:src\components\to-do-list-item-component\to-do-list-item-component.html
var to_do_list_item_component_default;
var init_to_do_list_item_component = __esm({
  "angular:jit:template:src\\components\\to-do-list-item-component\\to-do-list-item-component.html"() {
    to_do_list_item_component_default = '\r\n<li class="to-list__item">\r\n  @if(isStart()){\r\n  <ng-container [ngTemplateOutlet]="myTemplate"/>\r\n  } \r\n  @else if (conditionForChangeTitle() === true) {\r\n@if(!statusIsCompleted() && visibleChanger()){<app-to-do-list-item-checkbox-component (statusTaskChange)="changeStatus($event)"/>}\r\n @if(needTooltip()){\r\n  <div\r\n    appMyTooltip\r\n    class="to-list__item__text"\r\n    style="display: flex; width: 50%"\r\n    [myTooltipText]="textDiscriprion()"\r\n    [styles]="tooltipStyles"\r\n    [verticalOffset]="-28"\r\n  >\r\n  @if(visibleChanger()){\r\n    <mat-form-field class="to-list__item__text__input">\r\n      <mat-label>Change your title</mat-label>\r\n      <input appEnterControl matInput [(ngModel)]="newTitle" />\r\n    </mat-form-field>\r\n    <app-to-do-button-component\r\n      myTitle="Change title"\r\n      [(styles)]="stylesForButtonChangeTitle"\r\n      (myClickChange)="changeText()"\r\n    />\r\n  }\r\n  </div>\r\n }\r\n @else {\r\n  <div\r\n    class="to-list__item__text"\r\n    style="display: flex; width: 50%"\r\n  >\r\n  @if(visibleChanger()){\r\n    <mat-form-field class="to-list__item__text__input">\r\n      <mat-label>Change your title</mat-label>\r\n      <input appEnterControl matInput [(ngModel)]="newTitle" />\r\n    </mat-form-field>\r\n    <app-to-do-button-component\r\n      myTitle="Change title"\r\n      [(styles)]="stylesForButtonChangeTitle"\r\n      (myClickChange)="changeText()"\r\n    />\r\n  }\r\n  </div>\r\n }\r\n }\r\n  @else {\r\n  <ng-container [ngTemplateOutlet]="myTemplate"/>\r\n  }\r\n  @if(visibleChanger()){\r\n    <app-to-do-button-component\r\n    myTitle="Delete task"\r\n    [(styles)]="stylesForButton"\r\n    (myClickChange)="deleteTask()"\r\n  />\r\n  }\r\n  \r\n</li>\r\n<ng-template #myTemplate>\r\n  @if(needTooltip()){\r\n     <span\r\n    appMyTooltip\r\n    class="to-list__item__text"\r\n    [myTooltipText]="textDiscriprion()"\r\n    [styles]="tooltipStyles"\r\n    [verticalOffset]="40"\r\n  >\r\n    <p>{{ textTask() }}</p>\r\n  </span>\r\n  }\r\n  @else {\r\n     <span\r\n    class="to-list__item__text"\r\n  >\r\n    <p>{{ textTask() }}</p>\r\n  </span>\r\n  }\r\n \r\n</ng-template>';
  }
});

// angular:jit:style:src\components\to-do-list-item-component\to-do-list-item-component.css
var to_do_list_item_component_default2;
var init_to_do_list_item_component2 = __esm({
  "angular:jit:style:src\\components\\to-do-list-item-component\\to-do-list-item-component.css"() {
    to_do_list_item_component_default2 = "/* src/components/to-do-list-item-component/to-do-list-item-component.css */\n:host {\n  display: flex;\n}\n.to-list__item {\n  background-color: white;\n  -webkit-box-shadow: 3px 13px 8px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 3px 13px 8px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 3px 13px 8px 0px rgba(34, 60, 80, 0.2);\n  display: flex;\n  width: 100%;\n  border: solid;\n  border-color: white;\n  border-radius: 5px;\n  justify-content: space-between;\n  flex-direction: row;\n  padding-right: 15px;\n  padding-left: 10px;\n  margin-bottom: 10px;\n}\n.to-list__item:active {\n  background-color: rgb(108, 127, 135);\n}\n.to-list__item__change-title {\n  display: flex;\n}\n.to-list__item__text {\n  width: 30%;\n  overflow-wrap: break-word;\n  text-align: center;\n}\n.to-list__item__text p {\n  text-align: center;\n  color: black;\n  font-weight: 600;\n  font-size: 18px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n/*# sourceMappingURL=to-do-list-item-component.css.map */\n";
  }
});

// src/components/to-do-list-item-component/to-do-list-item-component.ts
var _a, ToDoListItemComponent;
var init_to_do_list_item_component3 = __esm({
  "src/components/to-do-list-item-component/to-do-list-item-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_to_do_list_item_component();
    init_to_do_list_item_component2();
    init_core();
    init_to_do_button_component();
    init_common();
    init_input();
    init_form_field();
    init_forms();
    init_my_tooltip();
    init_to_do_list_item_checkbox_component();
    init_core();
    ToDoListItemComponent = (_a = class {
      newTitle = "";
      stylesForButton = {
        width: "100px",
        height: "80px",
        "margin-top": "10px",
        "background-color": "#68339e",
        border: "solid",
        "border-radius": "8px",
        "padding-bottom": "50px",
        "border-color": "white",
        color: "white"
      };
      stylesForButtonChangeTitle = {
        width: "100%",
        height: "80%",
        "margin-bottom": "30px",
        "background-color": "#91415bff",
        color: "white",
        border: "solid",
        "border-radius": "8px",
        "border-color": "white"
      };
      conditionForChangeTitle = model(false);
      isStart = model.required();
      textDiscriprion = input();
      taskId = model.required();
      sharedId = model.required();
      textTask = model();
      statusIsCompleted = input.required();
      needTooltip = input(true);
      visibleChanger = input(true);
      textTaskChange = output();
      statusTaskChange = output();
      tasksChange = output();
      deleteTask() {
        this.tasksChange.emit(this.taskId());
      }
      changeText() {
        if (this.newTitle === null || this.newTitle.trim() === "") {
          return;
        }
        this.textTaskChange.emit(this.newTitle);
        this.endChange();
      }
      endChange() {
        this.conditionForChangeTitle.set(false);
      }
      changeStatus(status) {
        this.statusTaskChange.emit(status);
      }
      get tooltipStyles() {
        return {
          "background-color": "black",
          border: "5px inset #2C2057",
          "border-radius": "14px 14px 14px 0",
          color: "white",
          "font-family": "arial",
          "font-size": "14px",
          "font-weight": "bold"
        };
      }
    }, __name(_a, "ToDoListItemComponent"), __publicField(_a, "propDecorators", {
      conditionForChangeTitle: [{ type: Input, args: [{ isSignal: true, alias: "conditionForChangeTitle", required: false }] }, { type: Output, args: ["conditionForChangeTitleChange"] }],
      isStart: [{ type: Input, args: [{ isSignal: true, alias: "isStart", required: true }] }, { type: Output, args: ["isStartChange"] }],
      textDiscriprion: [{ type: Input, args: [{ isSignal: true, alias: "textDiscriprion", required: false, transform: void 0 }] }],
      taskId: [{ type: Input, args: [{ isSignal: true, alias: "taskId", required: true }] }, { type: Output, args: ["taskIdChange"] }],
      sharedId: [{ type: Input, args: [{ isSignal: true, alias: "sharedId", required: true }] }, { type: Output, args: ["sharedIdChange"] }],
      textTask: [{ type: Input, args: [{ isSignal: true, alias: "textTask", required: false }] }, { type: Output, args: ["textTaskChange"] }],
      statusIsCompleted: [{ type: Input, args: [{ isSignal: true, alias: "statusIsCompleted", required: true, transform: void 0 }] }],
      needTooltip: [{ type: Input, args: [{ isSignal: true, alias: "needTooltip", required: false, transform: void 0 }] }],
      visibleChanger: [{ type: Input, args: [{ isSignal: true, alias: "visibleChanger", required: false, transform: void 0 }] }],
      textTaskChange: [{ type: Output, args: ["textTaskChange"] }],
      statusTaskChange: [{ type: Output, args: ["statusTaskChange"] }],
      tasksChange: [{ type: Output, args: ["tasksChange"] }]
    }), _a);
    ToDoListItemComponent = __decorate([
      Component({
        selector: "app-to-do-list-item-component",
        imports: [
          ToDoButtonComponent,
          CommonModule,
          MatInputModule,
          MatFormFieldModule,
          FormsModule,
          MatInputModule,
          MyTooltip,
          ToDoListItemCheckboxComponent
        ],
        template: to_do_list_item_component_default,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [to_do_list_item_component_default2]
      })
    ], ToDoListItemComponent);
  }
});

export {
  ToDoListItemComponent,
  init_to_do_list_item_component3 as init_to_do_list_item_component
};
//# sourceMappingURL=chunk-QFNTR64F.js.map

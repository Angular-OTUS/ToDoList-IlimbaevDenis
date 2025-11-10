import {
  TaskServices,
  init_tasks_services
} from "./chunk-HMNTVYXX.js";
import {
  ActivatedRoute,
  Router,
  init_router
} from "./chunk-CIJU22KD.js";
import {
  ToastService,
  init_toast_service
} from "./chunk-ZIT4Y74U.js";
import "./chunk-WNPJNAHE.js";
import {
  ToDoListDescriptionChangeComponent,
  init_to_do_list_description_change_component
} from "./chunk-EAB44FRC.js";
import {
  ToDoListItemComponent,
  init_to_do_list_item_component
} from "./chunk-QFNTR64F.js";
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
  ChangeDetectionStrategy,
  Component,
  ViewChildren,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __name,
  __publicField,
  computed,
  init_core,
  init_tslib_es6,
  inject,
  signal,
  viewChildren
} from "./chunk-A5WWXBEI.js";

// angular:jit:template:src\components\to-do-item-view\to-do-item-view.html
var to_do_item_view_default;
var init_to_do_item_view = __esm({
  "angular:jit:template:src\\components\\to-do-item-view\\to-do-item-view.html"() {
    to_do_item_view_default = `<div class="container-for-item">\r
<app-to-do-list-item-component\r
    [conditionForChangeTitle] = 'isWantChangeTitle'\r
    [isStart]="isStart"\r
    [needTooltip]="false"\r
    [sharedId]="id()"\r
    [statusIsCompleted]="status() === 'Completed'"\r
    [taskId]="id()"\r
    [textDiscriprion]="description()"\r
    [textTask]="title()"\r
    [visibleChanger]="true"\r
    (dblclick)="activeChangeTitle()"\r
    (tasksChange)="deleteTask($event)"\r
    (textTaskChange)="changeTitle($event)"\r
  />\r
</div>\r
 <div class="container-for-des">\r
  <app-to-do-list-description-change-component\r
  [task]="task()"\r
  (descriptionChange)="updateDescription($event)"\r
/>\r
 </div>\r
\r
`;
  }
});

// angular:jit:style:src\components\to-do-item-view\to-do-item-view.css
var to_do_item_view_default2;
var init_to_do_item_view2 = __esm({
  "angular:jit:style:src\\components\\to-do-item-view\\to-do-item-view.css"() {
    to_do_item_view_default2 = "/* src/components/to-do-item-view/to-do-item-view.css */\n:host {\n  padding-top: 10%;\n  padding-right: 20%;\n  padding-left: 20%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  gap: 30px;\n}\n.container-for-item {\n  width: 50%;\n  padding: 200px;\n}\n.container-for-des {\n  width: 20%;\n}\n/*# sourceMappingURL=to-do-item-view.css.map */\n";
  }
});

// src/components/to-do-item-view/to-do-item-view.ts
var _a, ToDoItemView;
var init_to_do_item_view3 = __esm({
  "src/components/to-do-item-view/to-do-item-view.ts"() {
    "use strict";
    init_tslib_es6();
    init_to_do_item_view();
    init_to_do_item_view2();
    init_core();
    init_to_do_list_description_change_component();
    init_to_do_list_item_component();
    init_router();
    init_tasks_services();
    init_toast_service();
    init_core();
    ToDoItemView = (_a = class {
      isStart = true;
      isWantChangeTitle = false;
      route = inject(ActivatedRoute);
      listService = inject(TaskServices);
      toastService = inject(ToastService);
      router = inject(Router);
      id = signal(0);
      task = signal(null);
      title = computed(() => this.task()?.title);
      description = computed(() => this.task()?.description);
      status = computed(() => this.task()?.status);
      todoItems = viewChildren(ToDoListItemComponent);
      activeChangeTitle() {
        this.isWantChangeTitle = true;
        this.isStart = false;
      }
      deleteTask(id) {
        if (!this.task()) {
          return;
        }
        this.task.update(() => {
          this.listService.delNewElId(id);
          return null;
        });
        this.toastService.addToast(`Delete task with id: ${id}`);
        this.router.navigate(["tasks"]);
      }
      changeTitle(title) {
        if (!this.task()) {
          return;
        }
        this.task.update((t) => {
          if (!t) {
            console.log("Task is null now: " + t);
            return t;
          }
          const taskNew = {
            description: t?.description,
            status: t.status,
            id: t.id,
            title: ""
          };
          if (!title) {
            console.log("Title is null: " + title);
            return t;
          }
          taskNew.title = title;
          this.listService.updateElPropId(this.id(), "title", title);
          return taskNew;
        });
        this.toastService.addToast(`Change title element id: ${this.id()}`);
      }
      updateDescription(descriptionArg) {
        this.task.update((t) => {
          this.listService.updateElPropId(this.id(), "description", descriptionArg);
          if (!t) {
            return t;
          }
          t.description = descriptionArg;
          return t;
        });
        this.toastService.addToast(`Change desc element id: ${this.id()}`);
      }
      ngOnInit() {
        const id = this.route.snapshot.params["id"];
        this.id.set(id);
        this.listService.getTask(id, (t) => {
          this.task.set(t);
        });
      }
    }, __name(_a, "ToDoItemView"), __publicField(_a, "propDecorators", {
      todoItems: [{ type: ViewChildren, args: [ToDoListItemComponent, { isSignal: true }] }]
    }), _a);
    ToDoItemView = __decorate([
      Component({
        selector: "app-to-do-item-view",
        imports: [ToDoListDescriptionChangeComponent, ToDoListItemComponent],
        template: to_do_item_view_default,
        providers: [Router],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [to_do_item_view_default2]
      })
    ], ToDoItemView);
  }
});

// src/components/to-do-item-view/to-do-item-view.spec.ts
var require_to_do_item_view_spec = __commonJS({
  "src/components/to-do-item-view/to-do-item-view.spec.ts"(exports) {
    init_testing();
    init_to_do_item_view3();
    describe("ToDoItemView", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ToDoItemView]
        }).compileComponents();
        fixture = TestBed.createComponent(ToDoItemView);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_to_do_item_view_spec();
//# sourceMappingURL=spec-to-do-item-view.spec.js.map

import {
  TaskServices,
  init_tasks_services
} from "./chunk-HMNTVYXX.js";
import {
  ActivatedRoute,
  DomSanitizer,
  Router,
  init_platform_browser,
  init_router
} from "./chunk-CIJU22KD.js";
import {
  ToastService,
  init_toast_service
} from "./chunk-ZIT4Y74U.js";
import {
  ToDoListItemComponent,
  init_to_do_list_item_component
} from "./chunk-QFNTR64F.js";
import {
  BidiModule,
  Directionality,
  FocusMonitor,
  MatCommonModule,
  MatFormFieldModule,
  MatInputModule,
  Platform,
  RtlScrollAxisType,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _animationsDisabled,
  _getEventTarget,
  coerceElement,
  coerceNumberProperty,
  getRtlScrollAxisType,
  init_a11y,
  init_animation,
  init_bidi,
  init_coercion,
  init_common_module,
  init_directionality,
  init_element,
  init_form_field,
  init_input,
  init_platform,
  init_platform2,
  init_private,
  init_scrolling2,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  normalizePassiveListenerOptions,
  supportsScrollBehavior
} from "./chunk-R6H6Z5JE.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  init_forms
} from "./chunk-OMREFKDU.js";
import {
  ToDoButtonComponent,
  init_to_do_button_component
} from "./chunk-JPWMAFZO.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  init_common
} from "./chunk-B35VPU4W.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  BehaviorSubject,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Pipe,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __decorate,
  __esm,
  __name,
  __publicField,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  core_exports,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  inject,
  isObservable,
  model,
  numberAttribute,
  of,
  pairwise,
  shareReplay,
  signal,
  startWith,
  switchMap,
  takeUntil,
  untracked,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule,
  ɵɵngDeclarePipe
} from "./chunk-A5WWXBEI.js";

// angular:jit:template:src\components\to-do-list\to-do-list.html
var to_do_list_default;
var init_to_do_list = __esm({
  "angular:jit:template:src\\components\\to-do-list\\to-do-list.html"() {
    to_do_list_default = `<div class="radio-group">\r
  <mat-radio-group\r
    aria-label="Filter tasks"\r
    [(ngModel)]="filterOption"\r
    (change)="clickOnRadioButton()"\r
  >\r
    <mat-radio-button value="Progress">Progress</mat-radio-button>\r
    <mat-radio-button value="Completed">Completed</mat-radio-button>\r
  </mat-radio-group>\r
</div>\r
<h2 class="header">Todo List</h2>\r
<ul class="to-list">\r
  @if (isLoading()) {\r
  <ngx-spinner color="#000000" type="ball-spin" />\r
  } @else { \r
    @for (task of tasks(); track task) {\r
    @if(task.status === filter()){\r
  <app-to-do-list-item-component\r
    [isStart]="isStart"\r
    [sharedId]="task.id"\r
    [statusIsCompleted]="task.status === 'Completed'"\r
    [taskId]="task.id"\r
    [textDiscriprion]="task.description"\r
    [textTask]="task.title"\r
    [visibleChanger]="false"\r
    (click)="changeToDoListItemOnPreview(task.id)"\r
  />\r
    }\r
  <!-- click \u0442\u0440\u0438\u0433\u0435\u0440\u0438\u0442 \u043F\u0435\u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430  -->\r
  } @empty {\r
  <li class="to-list-item-notfound " style="color: black">elements not found</li>\r
  } }\r
</ul>\r
<div class="container-for-adding-task">\r
  <div class="container-for-adding-task__inputs">\r
    <mat-form-field class="container-for-adding-task__inputs__input">\r
      <mat-label> Add your new todo</mat-label>\r
      <input appEnterControl matInput [(ngModel)]="article" />\r
    </mat-form-field>\r
    <mat-form-field class="container-for-adding-task__inputs__textarea">\r
      <mat-label> Add description for your todo</mat-label>\r
      <input appEnterControl matInput [(ngModel)]="description" />\r
    </mat-form-field>\r
  </div>\r
  <app-to-do-button-component\r
    myTitle="Add task"\r
    [(styles)]="stylesForButton"\r
    (myClickChange)="addTask()"\r
  />\r
</div>`;
  }
});

// angular:jit:style:src\components\to-do-list\to-do-list.css
var to_do_list_default2;
var init_to_do_list2 = __esm({
  "angular:jit:style:src\\components\\to-do-list\\to-do-list.css"() {
    to_do_list_default2 = '/* src/components/to-do-list/to-do-list.css */\n:host {\n  display: block;\n  padding: 30px;\n  padding-bottom: 40px;\n  margin: auto;\n  width: 30%;\n  overflow: hidden;\n}\n.header {\n  text-align: center;\n  font-size: 30px;\n  font-family: "Roboto Serif", serif;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #68339e;\n  margin-bottom: 60px;\n}\n.to-list {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  list-style: none;\n  padding: 0;\n}\n.to-list-item-notfound {\n  color: black;\n  font-size: 24px;\n  font-family: "Roboto Serif", serif;\n  font-weight: bold;\n}\n.container-for-adding-task {\n  display: flex;\n  flex-direction: row;\n  max-width: 100%;\n  max-height: 100px;\n}\n.container-for-adding-task__inputs {\n  display: flex;\n  width: 70%;\n  padding: 3px;\n  height: 300px;\n  flex-direction: column;\n}\n.container-for-adding-task__inputs__textarea,\n.container-for-adding-task__inputs__input {\n  resize: both;\n  font-size: 16px;\n  overflow: auto;\n  width: 90%;\n  margin-right: 5px;\n}\n.container-for-adding-task__button {\n  background-color: rgba(68, 74, 80, 0.671);\n  border: 2px;\n  max-height: 50px;\n  padding: 5px;\n  padding-top: 0px;\n}\n.container-for-adding-task__button:active {\n  opacity: 0.5;\n}\n.container-for-adding-task__button p {\n  color: white;\n  font-size: 18px;\n  text-align: center;\n  white-space: nowrap;\n}\n.radio-group {\n  background-color: white;\n  border: solid;\n  border-color: white;\n  border-radius: 20px;\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 300px;\n  margin-bottom: 60px;\n  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n}\n/*# sourceMappingURL=to-do-list.css.map */\n';
  }
});

// node_modules/@angular/animations/fesm2022/private_export.mjs
function trigger(name, definitions) {
  return { type: AnimationMetadataType.Trigger, name, definitions, options: {} };
}
function animate(timings, styles = null) {
  return { type: AnimationMetadataType.Animate, styles, timings };
}
function sequence(steps, options = null) {
  return { type: AnimationMetadataType.Sequence, steps, options };
}
function style(tokens) {
  return { type: AnimationMetadataType.Style, styles: tokens, offset: null };
}
function state(name, styles, options) {
  return { type: AnimationMetadataType.State, name, styles, options };
}
function transition(stateChangeExpr, steps, options = null) {
  return { type: AnimationMetadataType.Transition, expr: stateChangeExpr, animation: steps, options };
}
var AnimationMetadataType;
var init_private_export = __esm({
  "node_modules/@angular/animations/fesm2022/private_export.mjs"() {
    "use strict";
    (function(AnimationMetadataType2) {
      AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
      AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
      AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
      AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
      AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
      AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
      AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
      AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
      AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
      AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
      AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
      AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
      AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
    })(AnimationMetadataType || (AnimationMetadataType = {}));
    __name(trigger, "trigger");
    __name(animate, "animate");
    __name(sequence, "sequence");
    __name(style, "style");
    __name(state, "state");
    __name(transition, "transition");
  }
});

// node_modules/@angular/animations/fesm2022/animations.mjs
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}
var _AnimationBuilder, AnimationBuilder, _AnimationFactory, AnimationFactory, _BrowserAnimationBuilder, BrowserAnimationBuilder, _BrowserAnimationFactory, BrowserAnimationFactory, _RendererAnimationPlayer, RendererAnimationPlayer;
var init_animations = __esm({
  "node_modules/@angular/animations/fesm2022/animations.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_private_export();
    init_private_export();
    _AnimationBuilder = class _AnimationBuilder {
    };
    __name(_AnimationBuilder, "AnimationBuilder");
    __publicField(_AnimationBuilder, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.0", ngImport: core_exports, type: _AnimationBuilder, deps: [], target: FactoryTarget.Injectable }));
    __publicField(_AnimationBuilder, "\u0275prov", \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.0", ngImport: core_exports, type: _AnimationBuilder, providedIn: "root", useFactory: /* @__PURE__ */ __name(() => inject(BrowserAnimationBuilder), "useFactory") }));
    AnimationBuilder = _AnimationBuilder;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.0", ngImport: core_exports, type: AnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: /* @__PURE__ */ __name(() => inject(BrowserAnimationBuilder), "useFactory") }]
    }] });
    _AnimationFactory = class _AnimationFactory {
    };
    __name(_AnimationFactory, "AnimationFactory");
    AnimationFactory = _AnimationFactory;
    _BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
      animationModuleType = inject(ANIMATION_MODULE_TYPE, { optional: true });
      _nextAnimationId = 0;
      _renderer;
      constructor(rootRenderer, doc) {
        super();
        const typeData = {
          id: "0",
          encapsulation: ViewEncapsulation.None,
          styles: [],
          data: { animation: [] }
        };
        this._renderer = rootRenderer.createRenderer(doc.body, typeData);
        if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
          throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
        }
      }
      build(animation2) {
        const id = this._nextAnimationId;
        this._nextAnimationId++;
        const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
        issueAnimationCommand(this._renderer, null, id, "register", [entry]);
        return new BrowserAnimationFactory(id, this._renderer);
      }
    };
    __name(_BrowserAnimationBuilder, "BrowserAnimationBuilder");
    __publicField(_BrowserAnimationBuilder, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.0", ngImport: core_exports, type: _BrowserAnimationBuilder, deps: [{ token: RendererFactory2 }, { token: DOCUMENT }], target: FactoryTarget.Injectable }));
    __publicField(_BrowserAnimationBuilder, "\u0275prov", \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.0", ngImport: core_exports, type: _BrowserAnimationBuilder, providedIn: "root" }));
    BrowserAnimationBuilder = _BrowserAnimationBuilder;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.0", ngImport: core_exports, type: BrowserAnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [{ type: RendererFactory2 }, { type: Document, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }], "ctorParameters") });
    _BrowserAnimationFactory = class _BrowserAnimationFactory extends AnimationFactory {
      _id;
      _renderer;
      constructor(_id, _renderer) {
        super();
        this._id = _id;
        this._renderer = _renderer;
      }
      create(element, options) {
        return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
      }
    };
    __name(_BrowserAnimationFactory, "BrowserAnimationFactory");
    BrowserAnimationFactory = _BrowserAnimationFactory;
    _RendererAnimationPlayer = class _RendererAnimationPlayer {
      id;
      element;
      _renderer;
      parentPlayer = null;
      _started = false;
      constructor(id, element, options, _renderer) {
        this.id = id;
        this.element = element;
        this._renderer = _renderer;
        this._command("create", options);
      }
      _listen(eventName, callback) {
        return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
      }
      _command(command, ...args) {
        issueAnimationCommand(this._renderer, this.element, this.id, command, args);
      }
      onDone(fn) {
        this._listen("done", fn);
      }
      onStart(fn) {
        this._listen("start", fn);
      }
      onDestroy(fn) {
        this._listen("destroy", fn);
      }
      init() {
        this._command("init");
      }
      hasStarted() {
        return this._started;
      }
      play() {
        this._command("play");
        this._started = true;
      }
      pause() {
        this._command("pause");
      }
      restart() {
        this._command("restart");
      }
      finish() {
        this._command("finish");
      }
      destroy() {
        this._command("destroy");
      }
      reset() {
        this._command("reset");
        this._started = false;
      }
      setPosition(p) {
        this._command("setPosition", p);
      }
      getPosition() {
        return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
      }
      totalTime = 0;
    };
    __name(_RendererAnimationPlayer, "RendererAnimationPlayer");
    RendererAnimationPlayer = _RendererAnimationPlayer;
    __name(issueAnimationCommand, "issueAnimationCommand");
    __name(unwrapAnimationRenderer, "unwrapAnimationRenderer");
    __name(isAnimationRenderer, "isAnimationRenderer");
  }
});

// node_modules/ngx-spinner/fesm2022/ngx-spinner.mjs
var LOADERS, DEFAULTS, PRIMARY_SPINNER, _NgxSpinner, NgxSpinner, _NgxSpinnerService, NgxSpinnerService, NGX_SPINNER_CONFIG, _SafeHtmlPipe, SafeHtmlPipe, _NgxSpinnerComponent, NgxSpinnerComponent, _NgxSpinnerModule, NgxSpinnerModule;
var init_ngx_spinner = __esm({
  "node_modules/ngx-spinner/fesm2022/ngx-spinner.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_animations();
    init_platform_browser();
    init_common();
    LOADERS = {
      "ball-8bits": 16,
      "ball-atom": 4,
      "ball-beat": 3,
      "ball-circus": 5,
      "ball-climbing-dot": 4,
      "ball-clip-rotate": 1,
      "ball-clip-rotate-multiple": 2,
      "ball-clip-rotate-pulse": 2,
      "ball-elastic-dots": 5,
      "ball-fall": 3,
      "ball-fussion": 4,
      "ball-grid-beat": 9,
      "ball-grid-pulse": 9,
      "ball-newton-cradle": 4,
      "ball-pulse": 3,
      "ball-pulse-rise": 5,
      "ball-pulse-sync": 3,
      "ball-rotate": 1,
      "ball-running-dots": 5,
      "ball-scale": 1,
      "ball-scale-multiple": 3,
      "ball-scale-pulse": 2,
      "ball-scale-ripple": 1,
      "ball-scale-ripple-multiple": 3,
      "ball-spin": 8,
      "ball-spin-clockwise": 8,
      "ball-spin-clockwise-fade": 8,
      "ball-spin-clockwise-fade-rotating": 8,
      "ball-spin-fade": 8,
      "ball-spin-fade-rotating": 8,
      "ball-spin-rotate": 2,
      "ball-square-clockwise-spin": 8,
      "ball-square-spin": 8,
      "ball-triangle-path": 3,
      "ball-zig-zag": 2,
      "ball-zig-zag-deflect": 2,
      cog: 1,
      "cube-transition": 2,
      fire: 3,
      "line-scale": 5,
      "line-scale-party": 5,
      "line-scale-pulse-out": 5,
      "line-scale-pulse-out-rapid": 5,
      "line-spin-clockwise-fade": 8,
      "line-spin-clockwise-fade-rotating": 8,
      "line-spin-fade": 8,
      "line-spin-fade-rotating": 8,
      pacman: 6,
      "square-jelly-box": 2,
      "square-loader": 1,
      "square-spin": 1,
      timer: 1,
      "triangle-skew-spin": 1
    };
    DEFAULTS = {
      BD_COLOR: "rgba(51,51,51,0.8)",
      SPINNER_COLOR: "#fff",
      Z_INDEX: 99999
    };
    PRIMARY_SPINNER = "primary";
    _NgxSpinner = class _NgxSpinner {
      constructor(init) {
        Object.assign(this, init);
      }
      static create(init) {
        if (!init?.template && !init?.type) {
          console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`);
        }
        return new _NgxSpinner(init);
      }
    };
    __name(_NgxSpinner, "NgxSpinner");
    NgxSpinner = _NgxSpinner;
    _NgxSpinnerService = class _NgxSpinnerService {
      /**
       * Creates an instance of NgxSpinnerService.
       * @memberof NgxSpinnerService
       */
      constructor() {
        this.spinnerObservable = new BehaviorSubject(null);
      }
      /**
       * Get subscription of desired spinner
       * @memberof NgxSpinnerService
       **/
      getSpinner(name) {
        return this.spinnerObservable.asObservable().pipe(filter((x) => x && x.name === name));
      }
      /**
       * To show spinner
       *
       * @memberof NgxSpinnerService
       */
      show(name = PRIMARY_SPINNER, spinner) {
        return new Promise((resolve, _reject) => {
          setTimeout(() => {
            if (spinner && Object.keys(spinner).length) {
              spinner["name"] = name;
              this.spinnerObservable.next(new NgxSpinner(__spreadProps(__spreadValues({}, spinner), { show: true })));
              resolve(true);
            } else {
              this.spinnerObservable.next(new NgxSpinner({ name, show: true }));
              resolve(true);
            }
          }, 10);
        });
      }
      /**
       * To hide spinner
       *
       * @memberof NgxSpinnerService
       */
      hide(name = PRIMARY_SPINNER, debounce = 10) {
        return new Promise((resolve, _reject) => {
          setTimeout(() => {
            this.spinnerObservable.next(new NgxSpinner({ name, show: false }));
            resolve(true);
          }, debounce);
        });
      }
    };
    __name(_NgxSpinnerService, "NgxSpinnerService");
    _NgxSpinnerService.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: _NgxSpinnerService, deps: [], target: FactoryTarget.Injectable });
    _NgxSpinnerService.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: _NgxSpinnerService, providedIn: "root" });
    NgxSpinnerService = _NgxSpinnerService;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: NgxSpinnerService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters") });
    NGX_SPINNER_CONFIG = new InjectionToken("NGX_SPINNER_CONFIG");
    _SafeHtmlPipe = class _SafeHtmlPipe {
      constructor(sanitizer) {
        this.sanitizer = sanitizer;
      }
      transform(value) {
        return value ? this.sanitizer.bypassSecurityTrustHtml(value) : "";
      }
    };
    __name(_SafeHtmlPipe, "SafeHtmlPipe");
    _SafeHtmlPipe.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: _SafeHtmlPipe, deps: [{ token: DomSanitizer }], target: FactoryTarget.Pipe });
    _SafeHtmlPipe.\u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "19.1.6", ngImport: core_exports, type: _SafeHtmlPipe, isStandalone: true, name: "safeHtml" });
    SafeHtmlPipe = _SafeHtmlPipe;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: SafeHtmlPipe, decorators: [{
      type: Pipe,
      args: [{
        name: "safeHtml",
        standalone: true
      }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [{ type: DomSanitizer }], "ctorParameters") });
    _NgxSpinnerComponent = class _NgxSpinnerComponent {
      // TODO: https://github.com/Napster2210/ngx-spinner/issues/259
      // @HostListener("document:keydown", ["$event"])
      // handleKeyboardEvent(event: KeyboardEvent) {
      //   if (this.spinnerDOM && this.spinnerDOM.nativeElement) {
      //     if (
      //       this.fullScreen ||
      //       (!this.fullScreen && this.isSpinnerZone(event.target))
      //     ) {
      //       event.returnValue = false;
      //       event.preventDefault();
      //     }
      //   }
      // }
      /**
       * Creates an instance of NgxSpinnerComponent.
       *
       * @memberof NgxSpinnerComponent
       */
      constructor(spinnerService, changeDetector, elementRef, globalConfig) {
        this.spinnerService = spinnerService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.globalConfig = globalConfig;
        this.disableAnimation = false;
        this.spinner = new NgxSpinner();
        this.ngUnsubscribe = new Subject();
        this.setDefaultOptions = () => {
          const { type } = this.globalConfig ?? {};
          this.spinner = NgxSpinner.create({
            name: this.name,
            bdColor: this.bdColor,
            size: this.size,
            color: this.color,
            type: this.type ?? type,
            fullScreen: this.fullScreen,
            divArray: this.divArray,
            divCount: this.divCount,
            show: this.show,
            zIndex: this.zIndex,
            template: this.template,
            showSpinner: this.showSpinner
          });
        };
        this.bdColor = DEFAULTS.BD_COLOR;
        this.zIndex = DEFAULTS.Z_INDEX;
        this.color = DEFAULTS.SPINNER_COLOR;
        this.size = "large";
        this.fullScreen = true;
        this.name = PRIMARY_SPINNER;
        this.template = null;
        this.showSpinner = false;
        this.divArray = [];
        this.divCount = 0;
        this.show = false;
      }
      initObservable() {
        this.spinnerService.getSpinner(this.name).pipe(takeUntil(this.ngUnsubscribe)).subscribe((spinner) => {
          this.setDefaultOptions();
          Object.assign(this.spinner, spinner);
          if (spinner.show) {
            this.onInputChange();
          }
          this.changeDetector.detectChanges();
        });
      }
      /**
       * Initialization method
       *
       * @memberof NgxSpinnerComponent
       */
      ngOnInit() {
        this.setDefaultOptions();
        this.initObservable();
      }
      /**
       * To check event triggers inside the Spinner Zone
       *
       * @param {*} element
       * @returns {boolean}
       * @memberof NgxSpinnerComponent
       */
      isSpinnerZone(element) {
        if (element === this.elementRef.nativeElement.parentElement) {
          return true;
        }
        return element.parentNode && this.isSpinnerZone(element.parentNode);
      }
      /**
       * On changes event for input variables
       *
       * @memberof NgxSpinnerComponent
       */
      ngOnChanges(changes) {
        for (const propName in changes) {
          if (propName) {
            const changedProp = changes[propName];
            if (changedProp.isFirstChange()) {
              return;
            } else if (typeof changedProp.currentValue !== "undefined" && changedProp.currentValue !== changedProp.previousValue) {
              if (changedProp.currentValue !== "") {
                this.spinner[propName] = changedProp.currentValue;
                if (propName === "showSpinner") {
                  if (changedProp.currentValue) {
                    this.spinnerService.show(this.spinner.name, this.spinner);
                  } else {
                    this.spinnerService.hide(this.spinner.name);
                  }
                }
                if (propName === "name") {
                  this.initObservable();
                }
              }
            }
          }
        }
      }
      /**
       * To get class for spinner
       *
       * @memberof NgxSpinnerComponent
       */
      getClass(type, size) {
        this.spinner.divCount = LOADERS[type];
        this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((_, i) => i);
        let sizeClass = "";
        switch (size.toLowerCase()) {
          case "small":
            sizeClass = "la-sm";
            break;
          case "medium":
            sizeClass = "la-2x";
            break;
          case "large":
            sizeClass = "la-3x";
            break;
          default:
            break;
        }
        return "la-" + type + " " + sizeClass;
      }
      /**
       * Check if input variables have changed
       *
       * @memberof NgxSpinnerComponent
       */
      onInputChange() {
        this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
      }
      /**
       * Component destroy event
       *
       * @memberof NgxSpinnerComponent
       */
      ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      }
    };
    __name(_NgxSpinnerComponent, "NgxSpinnerComponent");
    _NgxSpinnerComponent.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: _NgxSpinnerComponent, deps: [{ token: NgxSpinnerService }, { token: ChangeDetectorRef }, { token: ElementRef }, { token: NGX_SPINNER_CONFIG, optional: true }], target: FactoryTarget.Component });
    _NgxSpinnerComponent.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "19.1.6", type: _NgxSpinnerComponent, isStandalone: true, selector: "ngx-spinner", inputs: { bdColor: "bdColor", size: "size", color: "color", type: "type", fullScreen: "fullScreen", name: "name", zIndex: "zIndex", template: "template", showSpinner: "showSpinner", disableAnimation: "disableAnimation" }, viewQueries: [{ propertyName: "spinnerDOM", first: true, predicate: ["overlay"], descendants: true }], usesOnChanges: true, ngImport: core_exports, template: `<div
  [@.disabled]="disableAnimation"
  [@fadeIn]="'in'"
  *ngIf="spinner.show"
  class="ngx-spinner-overlay"
  [style.background-color]="spinner.bdColor"
  [style.z-index]="spinner.zIndex"
  [style.position]="spinner.fullScreen ? 'fixed' : 'absolute'"
  #overlay
>
  <div *ngIf="!template" [class]="spinner.class" [style.color]="spinner.color">
    <div *ngFor="let index of spinner.divArray"></div>
  </div>
  <div *ngIf="template" [innerHTML]="template | safeHtml"></div>
  <div class="loading-text" [style.z-index]="spinner.zIndex">
    <ng-content></ng-content>
  </div>
</div>
`, styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}\n"], dependencies: [{ kind: "pipe", type: SafeHtmlPipe, name: "safeHtml" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], animations: [
      trigger("fadeIn", [
        state("in", style({ opacity: 1 })),
        transition(":enter", [style({ opacity: 0 }), animate(300)]),
        transition(":leave", animate(200, style({ opacity: 0 })))
      ])
    ], changeDetection: ChangeDetectionStrategy.OnPush });
    NgxSpinnerComponent = _NgxSpinnerComponent;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: NgxSpinnerComponent, decorators: [{
      type: Component,
      args: [{ imports: [SafeHtmlPipe, NgIf, NgForOf], selector: "ngx-spinner", changeDetection: ChangeDetectionStrategy.OnPush, animations: [
        trigger("fadeIn", [
          state("in", style({ opacity: 1 })),
          transition(":enter", [style({ opacity: 0 }), animate(300)]),
          transition(":leave", animate(200, style({ opacity: 0 })))
        ])
      ], template: `<div
  [@.disabled]="disableAnimation"
  [@fadeIn]="'in'"
  *ngIf="spinner.show"
  class="ngx-spinner-overlay"
  [style.background-color]="spinner.bdColor"
  [style.z-index]="spinner.zIndex"
  [style.position]="spinner.fullScreen ? 'fixed' : 'absolute'"
  #overlay
>
  <div *ngIf="!template" [class]="spinner.class" [style.color]="spinner.color">
    <div *ngFor="let index of spinner.divArray"></div>
  </div>
  <div *ngIf="template" [innerHTML]="template | safeHtml"></div>
  <div class="loading-text" [style.z-index]="spinner.zIndex">
    <ng-content></ng-content>
  </div>
</div>
`, styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}\n"] }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [{ type: NgxSpinnerService }, { type: ChangeDetectorRef }, { type: ElementRef }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_SPINNER_CONFIG]
    }] }], "ctorParameters"), propDecorators: { bdColor: [{
      type: Input
    }], size: [{
      type: Input
    }], color: [{
      type: Input
    }], type: [{
      type: Input
    }], fullScreen: [{
      type: Input
    }], name: [{
      type: Input
    }], zIndex: [{
      type: Input
    }], template: [{
      type: Input
    }], showSpinner: [{
      type: Input
    }], disableAnimation: [{
      type: Input
    }], spinnerDOM: [{
      type: ViewChild,
      args: ["overlay"]
    }] } });
    _NgxSpinnerModule = class _NgxSpinnerModule {
      static forRoot(config) {
        return {
          ngModule: _NgxSpinnerModule,
          providers: [{ provide: NGX_SPINNER_CONFIG, useValue: config }]
        };
      }
    };
    __name(_NgxSpinnerModule, "NgxSpinnerModule");
    _NgxSpinnerModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: _NgxSpinnerModule, deps: [], target: FactoryTarget.NgModule });
    _NgxSpinnerModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.6", ngImport: core_exports, type: _NgxSpinnerModule, imports: [NgxSpinnerComponent, SafeHtmlPipe], exports: [NgxSpinnerComponent] });
    _NgxSpinnerModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: _NgxSpinnerModule });
    NgxSpinnerModule = _NgxSpinnerModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.6", ngImport: core_exports, type: NgxSpinnerModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [NgxSpinnerComponent, SafeHtmlPipe],
        exports: [NgxSpinnerComponent]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/data-source.mjs
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var _DataSource, DataSource;
var init_data_source = __esm({
  "node_modules/@angular/cdk/fesm2022/data-source.mjs"() {
    "use strict";
    init_esm();
    _DataSource = class _DataSource {
    };
    __name(_DataSource, "DataSource");
    DataSource = _DataSource;
    __name(isDataSource, "isDataSource");
  }
});

// node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy.mjs
var _ArrayDataSource, ArrayDataSource, _ViewRepeaterOperation, _VIEW_REPEATER_STRATEGY, __RecycleViewRepeaterStrategy, _RecycleViewRepeaterStrategy;
var init_recycle_view_repeater_strategy = __esm({
  "node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy.mjs"() {
    "use strict";
    init_esm();
    init_data_source();
    init_core();
    _ArrayDataSource = class _ArrayDataSource extends DataSource {
      _data;
      constructor(_data) {
        super();
        this._data = _data;
      }
      connect() {
        return isObservable(this._data) ? this._data : of(this._data);
      }
      disconnect() {
      }
    };
    __name(_ArrayDataSource, "ArrayDataSource");
    ArrayDataSource = _ArrayDataSource;
    (function(_ViewRepeaterOperation2) {
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
    })(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
    _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
    __RecycleViewRepeaterStrategy = class __RecycleViewRepeaterStrategy {
      /**
       * The size of the cache used to store unused views.
       * Setting the cache size to `0` will disable caching. Defaults to 20 views.
       */
      viewCacheSize = 20;
      /**
       * View cache that stores embedded view instances that have been previously stamped out,
       * but don't are not currently rendered. The view repeater will reuse these views rather than
       * creating brand new ones.
       *
       * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
       */
      _viewCache = [];
      /** Apply changes to the DOM. */
      applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
          let view;
          let operation;
          if (record.previousIndex == null) {
            const viewArgsFactory = /* @__PURE__ */ __name(() => itemContextFactory(record, adjustedPreviousIndex, currentIndex), "viewArgsFactory");
            view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
            operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
          } else if (currentIndex == null) {
            this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
            operation = _ViewRepeaterOperation.REMOVED;
          } else {
            view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
            operation = _ViewRepeaterOperation.MOVED;
          }
          if (itemViewChanged) {
            itemViewChanged({
              context: view?.context,
              operation,
              record
            });
          }
        });
      }
      detach() {
        for (const view of this._viewCache) {
          view.destroy();
        }
        this._viewCache = [];
      }
      /**
       * Inserts a view for a new item, either from the cache or by creating a new
       * one. Returns `undefined` if the item was inserted into a cached view.
       */
      _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
        const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
        if (cachedView) {
          cachedView.context.$implicit = value;
          return void 0;
        }
        const viewArgs = viewArgsFactory();
        return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
      }
      /** Detaches the view at the given index and inserts into the view cache. */
      _detachAndCacheView(index, viewContainerRef) {
        const detachedView = viewContainerRef.detach(index);
        this._maybeCacheView(detachedView, viewContainerRef);
      }
      /** Moves view at the previous index to the current index. */
      _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
        const view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        view.context.$implicit = value;
        return view;
      }
      /**
       * Cache the given detached view. If the cache is full, the view will be
       * destroyed.
       */
      _maybeCacheView(view, viewContainerRef) {
        if (this._viewCache.length < this.viewCacheSize) {
          this._viewCache.push(view);
        } else {
          const index = viewContainerRef.indexOf(view);
          if (index === -1) {
            view.destroy();
          } else {
            viewContainerRef.remove(index);
          }
        }
      }
      /** Inserts a recycled view from the cache at the given index. */
      _insertViewFromCache(index, viewContainerRef) {
        const cachedView = this._viewCache.pop();
        if (cachedView) {
          viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
      }
    };
    __name(__RecycleViewRepeaterStrategy, "_RecycleViewRepeaterStrategy");
    _RecycleViewRepeaterStrategy = __RecycleViewRepeaterStrategy;
  }
});

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var VIRTUAL_SCROLL_STRATEGY, _FixedSizeVirtualScrollStrategy, FixedSizeVirtualScrollStrategy, _CdkFixedSizeVirtualScroll, CdkFixedSizeVirtualScroll, DEFAULT_SCROLL_TIME, _ScrollDispatcher, ScrollDispatcher, _CdkScrollable, CdkScrollable, DEFAULT_RESIZE_TIME, _ViewportRuler, ViewportRuler, VIRTUAL_SCROLLABLE, _CdkVirtualScrollable, CdkVirtualScrollable, SCROLL_SCHEDULER, _CdkVirtualScrollViewport, CdkVirtualScrollViewport, _CdkVirtualForOf, CdkVirtualForOf, _CdkVirtualScrollableElement, CdkVirtualScrollableElement, _CdkVirtualScrollableWindow, CdkVirtualScrollableWindow, _CdkScrollableModule, CdkScrollableModule, _ScrollingModule, ScrollingModule;
var init_scrolling = __esm({
  "node_modules/@angular/cdk/fesm2022/scrolling.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_element();
    init_platform2();
    init_directionality();
    init_scrolling2();
    init_bidi();
    init_recycle_view_repeater_strategy();
    init_data_source();
    VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
    _FixedSizeVirtualScrollStrategy = class _FixedSizeVirtualScrollStrategy {
      _scrolledIndexChange = new Subject();
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
      /** The attached viewport. */
      _viewport = null;
      /** The size of the items in the virtually scrolling list. */
      _itemSize;
      /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
      _minBufferPx;
      /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
      _maxBufferPx;
      /**
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      constructor(itemSize, minBufferPx, maxBufferPx) {
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param viewport The viewport to attach this strategy to.
       */
      attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** Detaches this scroll strategy from the currently attached viewport. */
      detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
      }
      /**
       * Update the item size and buffer size.
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentScrolled() {
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentRendered() {
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onRenderedOffsetChanged() {
      }
      /**
       * Scroll to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling.
       */
      scrollToIndex(index, behavior) {
        if (this._viewport) {
          this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
      }
      /** Update the viewport's total content size. */
      _updateTotalContentSize() {
        if (!this._viewport) {
          return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
      }
      /** Update the viewport's rendered range. */
      _updateRenderedRange() {
        if (!this._viewport) {
          return;
        }
        const renderedRange = this._viewport.getRenderedRange();
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        const viewportSize = this._viewport.getViewportSize();
        const dataLength = this._viewport.getDataLength();
        let scrollOffset = this._viewport.measureScrollOffset();
        let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
        if (newRange.end > dataLength) {
          const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
          const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
          if (firstVisibleIndex != newVisibleIndex) {
            firstVisibleIndex = newVisibleIndex;
            scrollOffset = newVisibleIndex * this._itemSize;
            newRange.start = Math.floor(firstVisibleIndex);
          }
          newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
        }
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
          const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
          newRange.start = Math.max(0, newRange.start - expandStart);
          newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        } else {
          const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
          if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
            const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
            if (expandEnd > 0) {
              newRange.end = Math.min(dataLength, newRange.end + expandEnd);
              newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
            }
          }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
      }
    };
    __name(_FixedSizeVirtualScrollStrategy, "FixedSizeVirtualScrollStrategy");
    FixedSizeVirtualScrollStrategy = _FixedSizeVirtualScrollStrategy;
    __name(_fixedSizeVirtualScrollStrategyFactory, "_fixedSizeVirtualScrollStrategyFactory");
    _CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
      /** The size of the items in the list (in pixels). */
      get itemSize() {
        return this._itemSize;
      }
      set itemSize(value) {
        this._itemSize = coerceNumberProperty(value);
      }
      _itemSize = 20;
      /**
       * The minimum amount of buffer rendered beyond the viewport (in pixels).
       * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
       */
      get minBufferPx() {
        return this._minBufferPx;
      }
      set minBufferPx(value) {
        this._minBufferPx = coerceNumberProperty(value);
      }
      _minBufferPx = 100;
      /**
       * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
       */
      get maxBufferPx() {
        return this._maxBufferPx;
      }
      set maxBufferPx(value) {
        this._maxBufferPx = coerceNumberProperty(value);
      }
      _maxBufferPx = 200;
      /** The scroll strategy used by this directive. */
      _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
    };
    __name(_CdkFixedSizeVirtualScroll, "CdkFixedSizeVirtualScroll");
    __publicField(_CdkFixedSizeVirtualScroll, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkFixedSizeVirtualScroll, deps: [], target: FactoryTarget.Directive }));
    __publicField(_CdkFixedSizeVirtualScroll, "\u0275dir", \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkFixedSizeVirtualScroll, isStandalone: true, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, providers: [
      {
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
      }
    ], usesOnChanges: true, ngImport: core_exports }));
    CdkFixedSizeVirtualScroll = _CdkFixedSizeVirtualScroll;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkFixedSizeVirtualScroll, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[itemSize]",
        providers: [
          {
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
          }
        ]
      }]
    }], propDecorators: { itemSize: [{
      type: Input
    }], minBufferPx: [{
      type: Input
    }], maxBufferPx: [{
      type: Input
    }] } });
    DEFAULT_SCROLL_TIME = 20;
    _ScrollDispatcher = class _ScrollDispatcher {
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cleanupGlobalListener;
      constructor() {
      }
      /** Subject for notifying that a registered scrollable reference element has been scrolled. */
      _scrolled = new Subject();
      /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
      _scrolledCount = 0;
      /**
       * Map of all the scrollable references that are registered with the service and their
       * scroll event subscriptions.
       */
      scrollContainers = /* @__PURE__ */ new Map();
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param scrollable Scrollable instance to be registered.
       */
      register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
          this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
        }
      }
      /**
       * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
       * @param scrollable Scrollable instance to be deregistered.
       */
      deregister(scrollable) {
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
          scrollableReference.unsubscribe();
          this.scrollContainers.delete(scrollable);
        }
      }
      /**
       * Returns an observable that emits an event whenever any of the registered Scrollable
       * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
       * to override the default "throttle" time.
       *
       * **Note:** in order to avoid hitting change detection for every scroll event,
       * all of the events emitted from this stream will be run outside the Angular zone.
       * If you need to update any data bindings as a result of a scroll event, you have
       * to run the callback using `NgZone.run`.
       */
      scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
          return of();
        }
        return new Observable((observer) => {
          if (!this._cleanupGlobalListener) {
            this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
          }
          const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
          this._scrolledCount++;
          return () => {
            subscription.unsubscribe();
            this._scrolledCount--;
            if (!this._scrolledCount) {
              this._cleanupGlobalListener?.();
              this._cleanupGlobalListener = void 0;
            }
          };
        });
      }
      ngOnDestroy() {
        this._cleanupGlobalListener?.();
        this._cleanupGlobalListener = void 0;
        this.scrollContainers.forEach((_, container) => this.deregister(container));
        this._scrolled.complete();
      }
      /**
       * Returns an observable that emits whenever any of the
       * scrollable ancestors of an element are scrolled.
       * @param elementOrElementRef Element whose ancestors to listen for.
       * @param auditTimeInMs Time to throttle the scroll events.
       */
      ancestorScrolled(elementOrElementRef, auditTimeInMs) {
        const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
        return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
      }
      /** Returns all registered Scrollables that contain the provided element. */
      getAncestorScrollContainers(elementOrElementRef) {
        const scrollingContainers = [];
        this.scrollContainers.forEach((_subscription, scrollable) => {
          if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
            scrollingContainers.push(scrollable);
          }
        });
        return scrollingContainers;
      }
      /** Returns true if the element is contained within the provided Scrollable. */
      _scrollableContainsElement(scrollable, elementOrElementRef) {
        let element = coerceElement(elementOrElementRef);
        let scrollableElement = scrollable.getElementRef().nativeElement;
        do {
          if (element == scrollableElement) {
            return true;
          }
        } while (element = element.parentElement);
        return false;
      }
    };
    __name(_ScrollDispatcher, "ScrollDispatcher");
    __publicField(_ScrollDispatcher, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollDispatcher, deps: [], target: FactoryTarget.Injectable }));
    __publicField(_ScrollDispatcher, "\u0275prov", \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollDispatcher, providedIn: "root" }));
    ScrollDispatcher = _ScrollDispatcher;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ScrollDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters") });
    _CdkScrollable = class _CdkScrollable {
      elementRef = inject(ElementRef);
      scrollDispatcher = inject(ScrollDispatcher);
      ngZone = inject(NgZone);
      dir = inject(Directionality, { optional: true });
      _scrollElement = this.elementRef.nativeElement;
      _destroyed = new Subject();
      _renderer = inject(Renderer2);
      _cleanupScroll;
      _elementScrolled = new Subject();
      constructor() {
      }
      ngOnInit() {
        this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
        this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this._cleanupScroll?.();
        this._elementScrolled.complete();
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Returns observable that emits when a scroll event is fired on the host element. */
      elementScrolled() {
        return this._elementScrolled;
      }
      /** Gets the ElementRef for the viewport. */
      getElementRef() {
        return this.elementRef;
      }
      /**
       * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
       * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param options specified the offsets to scroll to.
       */
      scrollTo(options) {
        const el = this.elementRef.nativeElement;
        const isRtl = this.dir && this.dir.value == "rtl";
        if (options.left == null) {
          options.left = isRtl ? options.end : options.start;
        }
        if (options.right == null) {
          options.right = isRtl ? options.start : options.end;
        }
        if (options.bottom != null) {
          options.top = el.scrollHeight - el.clientHeight - options.bottom;
        }
        if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
          if (options.left != null) {
            options.right = el.scrollWidth - el.clientWidth - options.left;
          }
          if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
            options.left = options.right;
          } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
            options.left = options.right ? -options.right : options.right;
          }
        } else {
          if (options.right != null) {
            options.left = el.scrollWidth - el.clientWidth - options.right;
          }
        }
        this._applyScrollToOptions(options);
      }
      _applyScrollToOptions(options) {
        const el = this.elementRef.nativeElement;
        if (supportsScrollBehavior()) {
          el.scrollTo(options);
        } else {
          if (options.top != null) {
            el.scrollTop = options.top;
          }
          if (options.left != null) {
            el.scrollLeft = options.left;
          }
        }
      }
      /**
       * Measures the scroll offset relative to the specified edge of the viewport. This method can be
       * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
       * about what scrollLeft means in RTL. The values returned by this method are normalized such that
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param from The edge to measure from.
       */
      measureScrollOffset(from) {
        const LEFT = "left";
        const RIGHT = "right";
        const el = this.elementRef.nativeElement;
        if (from == "top") {
          return el.scrollTop;
        }
        if (from == "bottom") {
          return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        const isRtl = this.dir && this.dir.value == "rtl";
        if (from == "start") {
          from = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
          if (from == LEFT) {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          } else {
            return el.scrollLeft;
          }
        } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
          if (from == LEFT) {
            return el.scrollLeft + el.scrollWidth - el.clientWidth;
          } else {
            return -el.scrollLeft;
          }
        } else {
          if (from == LEFT) {
            return el.scrollLeft;
          } else {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          }
        }
      }
    };
    __name(_CdkScrollable, "CdkScrollable");
    __publicField(_CdkScrollable, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollable, deps: [], target: FactoryTarget.Directive }));
    __publicField(_CdkScrollable, "\u0275dir", \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkScrollable, isStandalone: true, selector: "[cdk-scrollable], [cdkScrollable]", ngImport: core_exports }));
    CdkScrollable = _CdkScrollable;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkScrollable, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-scrollable], [cdkScrollable]"
      }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters") });
    DEFAULT_RESIZE_TIME = 20;
    _ViewportRuler = class _ViewportRuler {
      _platform = inject(Platform);
      _listeners;
      /** Cached viewport dimensions. */
      _viewportSize;
      /** Stream of viewport change events. */
      _change = new Subject();
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      constructor() {
        const ngZone = inject(NgZone);
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        ngZone.runOutsideAngular(() => {
          if (this._platform.isBrowser) {
            const changeListener = /* @__PURE__ */ __name((event) => this._change.next(event), "changeListener");
            this._listeners = [
              renderer.listen("window", "resize", changeListener),
              renderer.listen("window", "orientationchange", changeListener)
            ];
          }
          this.change().subscribe(() => this._viewportSize = null);
        });
      }
      ngOnDestroy() {
        this._listeners?.forEach((cleanup) => cleanup());
        this._change.complete();
      }
      /** Returns the viewport's width and height. */
      getViewportSize() {
        if (!this._viewportSize) {
          this._updateViewportSize();
        }
        const output = { width: this._viewportSize.width, height: this._viewportSize.height };
        if (!this._platform.isBrowser) {
          this._viewportSize = null;
        }
        return output;
      }
      /** Gets a DOMRect for the viewport's bounds. */
      getViewportRect() {
        const scrollPosition = this.getViewportScrollPosition();
        const { width, height } = this.getViewportSize();
        return {
          top: scrollPosition.top,
          left: scrollPosition.left,
          bottom: scrollPosition.top + height,
          right: scrollPosition.left + width,
          height,
          width
        };
      }
      /** Gets the (top, left) scroll position of the viewport. */
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) {
          return { top: 0, left: 0 };
        }
        const document2 = this._document;
        const window2 = this._getWindow();
        const documentElement = document2.documentElement;
        const documentRect = documentElement.getBoundingClientRect();
        const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
        const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
        return { top, left };
      }
      /**
       * Returns a stream that emits whenever the size of the viewport changes.
       * This stream emits outside of the Angular zone.
       * @param throttleTime Time in milliseconds to throttle the stream.
       */
      change(throttleTime = DEFAULT_RESIZE_TIME) {
        return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
      }
      /** Use defaultView of injected document if available or fallback to global window reference */
      _getWindow() {
        return this._document.defaultView || window;
      }
      /** Updates the cached viewport size. */
      _updateViewportSize() {
        const window2 = this._getWindow();
        this._viewportSize = this._platform.isBrowser ? { width: window2.innerWidth, height: window2.innerHeight } : { width: 0, height: 0 };
      }
    };
    __name(_ViewportRuler, "ViewportRuler");
    __publicField(_ViewportRuler, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ViewportRuler, deps: [], target: FactoryTarget.Injectable }));
    __publicField(_ViewportRuler, "\u0275prov", \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ViewportRuler, providedIn: "root" }));
    ViewportRuler = _ViewportRuler;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ViewportRuler, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters") });
    VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
    _CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
      constructor() {
        super();
      }
      /**
       * Measure the viewport size for the provided orientation.
       *
       * @param orientation The orientation to measure the size from.
       */
      measureViewportSize(orientation) {
        const viewportEl = this.elementRef.nativeElement;
        return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
      }
    };
    __name(_CdkVirtualScrollable, "CdkVirtualScrollable");
    __publicField(_CdkVirtualScrollable, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollable, deps: [], target: FactoryTarget.Directive }));
    __publicField(_CdkVirtualScrollable, "\u0275dir", \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualScrollable, isStandalone: true, usesInheritance: true, ngImport: core_exports }));
    CdkVirtualScrollable = _CdkVirtualScrollable;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollable, decorators: [{
      type: Directive
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters") });
    __name(rangesEqual, "rangesEqual");
    SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
    _CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
      elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
        optional: true
      });
      scrollable = inject(VIRTUAL_SCROLLABLE, { optional: true });
      _platform = inject(Platform);
      /** Emits when the viewport is detached from a CdkVirtualForOf. */
      _detachedSubject = new Subject();
      /** Emits when the rendered range changes. */
      _renderedRangeSubject = new Subject();
      /** The direction the viewport scrolls. */
      get orientation() {
        return this._orientation;
      }
      set orientation(orientation) {
        if (this._orientation !== orientation) {
          this._orientation = orientation;
          this._calculateSpacerSize();
        }
      }
      _orientation = "vertical";
      /**
       * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
       * will be removed.
       */
      appendOnly = false;
      // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
      // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
      // depending on how the strategy calculates the scrolled index, it may come at a cost to
      // performance.
      /** Emits when the index of the first element visible in the viewport changes. */
      scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
      /** The element that wraps the rendered content. */
      _contentWrapper;
      /** A stream that emits whenever the rendered range changes. */
      renderedRangeStream = this._renderedRangeSubject;
      /**
       * The total size of all content (in pixels), including content that is not currently rendered.
       */
      _totalContentSize = 0;
      /** A string representing the `style.width` property value to be used for the spacer element. */
      _totalContentWidth = signal("", ...ngDevMode ? [{ debugName: "_totalContentWidth" }] : []);
      /** A string representing the `style.height` property value to be used for the spacer element. */
      _totalContentHeight = signal("", ...ngDevMode ? [{ debugName: "_totalContentHeight" }] : []);
      /**
       * The CSS transform applied to the rendered subset of items so that they appear within the bounds
       * of the visible viewport.
       */
      _renderedContentTransform;
      /** The currently rendered range of indices. */
      _renderedRange = { start: 0, end: 0 };
      /** The length of the data bound to this viewport (in number of items). */
      _dataLength = 0;
      /** The size of the viewport (in pixels). */
      _viewportSize = 0;
      /** the currently attached CdkVirtualScrollRepeater. */
      _forOf;
      /** The last rendered content offset that was set. */
      _renderedContentOffset = 0;
      /**
       * Whether the last rendered content offset was to the end of the content (and therefore needs to
       * be rewritten as an offset to the start of the content).
       */
      _renderedContentOffsetNeedsRewrite = false;
      _changeDetectionNeeded = signal(false, ...ngDevMode ? [{ debugName: "_changeDetectionNeeded" }] : []);
      /** A list of functions to run after the next change detection cycle. */
      _runAfterChangeDetection = [];
      /** Subscription to changes in the viewport size. */
      _viewportChanges = Subscription.EMPTY;
      _injector = inject(Injector);
      _isDestroyed = false;
      constructor() {
        super();
        const viewportRuler = inject(ViewportRuler);
        if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        this._viewportChanges = viewportRuler.change().subscribe(() => {
          this.checkViewportSize();
        });
        if (!this.scrollable) {
          this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
          this.scrollable = this;
        }
        const ref = effect(() => {
          if (this._changeDetectionNeeded()) {
            this._doChangeDetection();
          }
        }, ...ngDevMode ? [{ debugName: "ref", injector: inject(ApplicationRef).injector }] : [
          // Using ApplicationRef injector is important here because we want this to be a root
          // effect that runs before change detection of any application views (since we're depending on markForCheck marking parents dirty)
          { injector: inject(ApplicationRef).injector }
        ]);
        inject(DestroyRef).onDestroy(() => void ref.destroy());
      }
      ngOnInit() {
        if (!this._platform.isBrowser) {
          return;
        }
        if (this.scrollable === this) {
          super.ngOnInit();
        }
        this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
          this._measureViewportSize();
          this._scrollStrategy.attach(this);
          this.scrollable.elementScrolled().pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            startWith(null),
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            auditTime(0, SCROLL_SCHEDULER),
            // Usually `elementScrolled` is completed when the scrollable is destroyed, but
            // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
            // to unsubscribe here just in case.
            takeUntil(this._destroyed)
          ).subscribe(() => this._scrollStrategy.onContentScrolled());
          this._markChangeDetectionNeeded();
        }));
      }
      ngOnDestroy() {
        this.detach();
        this._scrollStrategy.detach();
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        this._viewportChanges.unsubscribe();
        this._isDestroyed = true;
        super.ngOnDestroy();
      }
      /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
      attach(forOf) {
        if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CdkVirtualScrollViewport is already attached.");
        }
        this.ngZone.runOutsideAngular(() => {
          this._forOf = forOf;
          this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
            const newLength = data.length;
            if (newLength !== this._dataLength) {
              this._dataLength = newLength;
              this._scrollStrategy.onDataLengthChanged();
            }
            this._doChangeDetection();
          });
        });
      }
      /** Detaches the current `CdkVirtualForOf`. */
      detach() {
        this._forOf = null;
        this._detachedSubject.next();
      }
      /** Gets the length of the data bound to this viewport (in number of items). */
      getDataLength() {
        return this._dataLength;
      }
      /** Gets the size of the viewport (in pixels). */
      getViewportSize() {
        return this._viewportSize;
      }
      // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
      // cycle happens. I'm being careful to only call it after the render cycle is complete and before
      // setting it to something else, but its error prone and should probably be split into
      // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
      /** Get the current rendered range of items. */
      getRenderedRange() {
        return this._renderedRange;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
      /**
       * Sets the total size of all content (in pixels), including content that is not currently
       * rendered.
       */
      setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
          this._totalContentSize = size;
          this._calculateSpacerSize();
          this._markChangeDetectionNeeded();
        }
      }
      /** Sets the currently rendered range of indices. */
      setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
          if (this.appendOnly) {
            range = { start: 0, end: Math.max(this._renderedRange.end, range.end) };
          }
          this._renderedRangeSubject.next(this._renderedRange = range);
          this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
        }
      }
      /**
       * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
       */
      getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
      }
      /**
       * Sets the offset from the start of the viewport to either the start or end of the rendered data
       * (in pixels).
       */
      setRenderedContentOffset(offset, to = "to-start") {
        offset = this.appendOnly && to === "to-start" ? 0 : offset;
        const isRtl = this.dir && this.dir.value == "rtl";
        const isHorizontal = this.orientation == "horizontal";
        const axis = isHorizontal ? "X" : "Y";
        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
        this._renderedContentOffset = offset;
        if (to === "to-end") {
          transform += ` translate${axis}(-100%)`;
          this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
          this._renderedContentTransform = transform;
          this._markChangeDetectionNeeded(() => {
            if (this._renderedContentOffsetNeedsRewrite) {
              this._renderedContentOffset -= this.measureRenderedContentSize();
              this._renderedContentOffsetNeedsRewrite = false;
              this.setRenderedContentOffset(this._renderedContentOffset);
            } else {
              this._scrollStrategy.onRenderedOffsetChanged();
            }
          });
        }
      }
      /**
       * Scrolls to the given offset from the start of the viewport. Please note that this is not always
       * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
       * direction, this would be the equivalent of setting a fictional `scrollRight` property.
       * @param offset The offset to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToOffset(offset, behavior = "auto") {
        const options = { behavior };
        if (this.orientation === "horizontal") {
          options.start = offset;
        } else {
          options.top = offset;
        }
        this.scrollable.scrollTo(options);
      }
      /**
       * Scrolls to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToIndex(index, behavior = "auto") {
        this._scrollStrategy.scrollToIndex(index, behavior);
      }
      /**
       * Gets the current scroll offset from the start of the scrollable (in pixels).
       * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
       *     in horizontal mode.
       */
      measureScrollOffset(from) {
        let measureScrollOffset;
        if (this.scrollable == this) {
          measureScrollOffset = /* @__PURE__ */ __name((_from) => super.measureScrollOffset(_from), "measureScrollOffset");
        } else {
          measureScrollOffset = /* @__PURE__ */ __name((_from) => this.scrollable.measureScrollOffset(_from), "measureScrollOffset");
        }
        return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
      }
      /**
       * Measures the offset of the viewport from the scrolling container
       * @param from The edge to measure from.
       */
      measureViewportOffset(from) {
        let fromRect;
        const LEFT = "left";
        const RIGHT = "right";
        const isRtl = this.dir?.value == "rtl";
        if (from == "start") {
          fromRect = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          fromRect = isRtl ? LEFT : RIGHT;
        } else if (from) {
          fromRect = from;
        } else {
          fromRect = this.orientation === "horizontal" ? "left" : "top";
        }
        const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
        const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
        return viewportClientRect - scrollerClientRect;
      }
      /** Measure the combined size of all of the rendered items. */
      measureRenderedContentSize() {
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
      }
      /**
       * Measure the total combined size of the given range. Throws if the range includes items that are
       * not rendered.
       */
      measureRangeSize(range) {
        if (!this._forOf) {
          return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
      }
      /** Update the viewport dimensions and re-render. */
      checkViewportSize() {
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
      }
      /** Measure the viewport size. */
      _measureViewportSize() {
        this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
      }
      /** Queue up change detection to run. */
      _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
          this._runAfterChangeDetection.push(runAfter);
        }
        if (untracked(this._changeDetectionNeeded)) {
          return;
        }
        this.ngZone.runOutsideAngular(() => {
          Promise.resolve().then(() => {
            this.ngZone.run(() => {
              this._changeDetectionNeeded.set(true);
            });
          });
        });
      }
      /** Run change detection. */
      _doChangeDetection() {
        if (this._isDestroyed) {
          return;
        }
        this.ngZone.run(() => {
          this._changeDetectorRef.markForCheck();
          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
          afterNextRender(() => {
            this._changeDetectionNeeded.set(false);
            const runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];
            for (const fn of runAfterChangeDetection) {
              fn();
            }
          }, { injector: this._injector });
        });
      }
      /** Calculates the `style.width` and `style.height` for the spacer element. */
      _calculateSpacerSize() {
        this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
        this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
      }
    };
    __name(_CdkVirtualScrollViewport, "CdkVirtualScrollViewport");
    __publicField(_CdkVirtualScrollViewport, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollViewport, deps: [], target: FactoryTarget.Component }));
    __publicField(_CdkVirtualScrollViewport, "\u0275cmp", \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _CdkVirtualScrollViewport, isStandalone: true, selector: "cdk-virtual-scroll-viewport", inputs: { orientation: "orientation", appendOnly: ["appendOnly", "appendOnly", booleanAttribute] }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, host: { properties: { "class.cdk-virtual-scroll-orientation-horizontal": 'orientation === "horizontal"', "class.cdk-virtual-scroll-orientation-vertical": 'orientation !== "horizontal"' }, classAttribute: "cdk-virtual-scroll-viewport" }, providers: [
      {
        provide: CdkScrollable,
        useFactory: /* @__PURE__ */ __name((virtualScrollable, viewport) => virtualScrollable || viewport, "useFactory"),
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
      }
    ], viewQueries: [{ propertyName: "_contentWrapper", first: true, predicate: ["contentWrapper"], descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None }));
    CdkVirtualScrollViewport = _CdkVirtualScrollViewport;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollViewport, decorators: [{
      type: Component,
      args: [{ selector: "cdk-virtual-scroll-viewport", host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        {
          provide: CdkScrollable,
          useFactory: /* @__PURE__ */ __name((virtualScrollable, viewport) => virtualScrollable || viewport, "useFactory"),
          deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
        }
      ], template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"] }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters"), propDecorators: { orientation: [{
      type: Input
    }], appendOnly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], scrolledIndexChange: [{
      type: Output
    }], _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", { static: true }]
    }] } });
    __name(getOffset, "getOffset");
    _CdkVirtualForOf = class _CdkVirtualForOf {
      _viewContainerRef = inject(ViewContainerRef);
      _template = inject(TemplateRef);
      _differs = inject(IterableDiffers);
      _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
      _viewport = inject(CdkVirtualScrollViewport, { skipSelf: true });
      /** Emits when the rendered view of the data changes. */
      viewChange = new Subject();
      /** Subject that emits when a new DataSource instance is given. */
      _dataSourceChanges = new Subject();
      /** The DataSource to display. */
      get cdkVirtualForOf() {
        return this._cdkVirtualForOf;
      }
      set cdkVirtualForOf(value) {
        this._cdkVirtualForOf = value;
        if (isDataSource(value)) {
          this._dataSourceChanges.next(value);
        } else {
          this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
        }
      }
      _cdkVirtualForOf;
      /**
       * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
       * the item and produces a value to be used as the item's identity when tracking changes.
       */
      get cdkVirtualForTrackBy() {
        return this._cdkVirtualForTrackBy;
      }
      set cdkVirtualForTrackBy(fn) {
        this._needsUpdate = true;
        this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
      }
      _cdkVirtualForTrackBy;
      /** The template used to stamp out new elements. */
      set cdkVirtualForTemplate(value) {
        if (value) {
          this._needsUpdate = true;
          this._template = value;
        }
      }
      /**
       * The size of the cache used to store templates that are not being used for re-use later.
       * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
       */
      get cdkVirtualForTemplateCacheSize() {
        return this._viewRepeater.viewCacheSize;
      }
      set cdkVirtualForTemplateCacheSize(size) {
        this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
      }
      /** Emits whenever the data in the current DataSource changes. */
      dataStream = this._dataSourceChanges.pipe(
        // Start off with null `DataSource`.
        startWith(null),
        // Bundle up the previous and current data sources so we can work with both.
        pairwise(),
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
        // Replay the last emitted data when someone subscribes.
        shareReplay(1)
      );
      /** The differ used to calculate changes to the data. */
      _differ = null;
      /** The most recent data emitted from the DataSource. */
      _data;
      /** The currently rendered items. */
      _renderedItems;
      /** The currently rendered range of indices. */
      _renderedRange;
      /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
      _needsUpdate = false;
      _destroyed = new Subject();
      constructor() {
        const ngZone = inject(NgZone);
        this.dataStream.subscribe((data) => {
          this._data = data;
          this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
          this._renderedRange = range;
          if (this.viewChange.observers.length) {
            ngZone.run(() => this.viewChange.next(this._renderedRange));
          }
          this._onRenderedDataChange();
        });
        this._viewport.attach(this);
      }
      /**
       * Measures the combined size (width for horizontal orientation, height for vertical) of all items
       * in the specified range. Throws an error if the range includes items that are not currently
       * rendered.
       */
      measureRangeSize(range, orientation) {
        if (range.start >= range.end) {
          return 0;
        }
        if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Error: attempted to measure an item that isn't rendered.`);
        }
        const renderedStartIndex = range.start - this._renderedRange.start;
        const rangeLen = range.end - range.start;
        let firstNode;
        let lastNode;
        for (let i = 0; i < rangeLen; i++) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            firstNode = lastNode = view.rootNodes[0];
            break;
          }
        }
        for (let i = rangeLen - 1; i > -1; i--) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            lastNode = view.rootNodes[view.rootNodes.length - 1];
            break;
          }
        }
        return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
      }
      ngDoCheck() {
        if (this._differ && this._needsUpdate) {
          const changes = this._differ.diff(this._renderedItems);
          if (!changes) {
            this._updateContext();
          } else {
            this._applyChanges(changes);
          }
          this._needsUpdate = false;
        }
      }
      ngOnDestroy() {
        this._viewport.detach();
        this._dataSourceChanges.next(void 0);
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        this._viewRepeater.detach();
      }
      /** React to scroll state changes in the viewport. */
      _onRenderedDataChange() {
        if (!this._renderedRange) {
          return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
          this._differ = this._differs.find(this._renderedItems).create((index, item) => {
            return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
          });
        }
        this._needsUpdate = true;
      }
      /** Swap out one `DataSource` for another. */
      _changeDataSource(oldDs, newDs) {
        if (oldDs) {
          oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : of();
      }
      /** Update the `CdkVirtualForOfContext` for all views. */
      _updateContext() {
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
          view.detectChanges();
        }
      }
      /** Apply changes to the DOM. */
      _applyChanges(changes) {
        this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
        changes.forEachIdentityChange((record) => {
          const view = this._viewContainerRef.get(record.currentIndex);
          view.context.$implicit = record.item;
        });
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
        }
      }
      /** Update the computed properties on the `CdkVirtualForOfContext`. */
      _updateComputedContextProperties(context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
      }
      _getEmbeddedViewArgs(record, index) {
        return {
          templateRef: this._template,
          context: {
            $implicit: record.item,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          },
          index
        };
      }
      static ngTemplateContextGuard(directive, context) {
        return true;
      }
    };
    __name(_CdkVirtualForOf, "CdkVirtualForOf");
    __publicField(_CdkVirtualForOf, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualForOf, deps: [], target: FactoryTarget.Directive }));
    __publicField(_CdkVirtualForOf, "\u0275dir", \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualForOf, isStandalone: true, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" }, providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }], ngImport: core_exports }));
    CdkVirtualForOf = _CdkVirtualForOf;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualForOf, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualFor][cdkVirtualForOf]",
        providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }]
      }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters"), propDecorators: { cdkVirtualForOf: [{
      type: Input
    }], cdkVirtualForTrackBy: [{
      type: Input
    }], cdkVirtualForTemplate: [{
      type: Input
    }], cdkVirtualForTemplateCacheSize: [{
      type: Input
    }] } });
    _CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
      constructor() {
        super();
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
      }
    };
    __name(_CdkVirtualScrollableElement, "CdkVirtualScrollableElement");
    __publicField(_CdkVirtualScrollableElement, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollableElement, deps: [], target: FactoryTarget.Directive }));
    __publicField(_CdkVirtualScrollableElement, "\u0275dir", \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualScrollableElement, isStandalone: true, selector: "[cdkVirtualScrollingElement]", host: { classAttribute: "cdk-virtual-scrollable" }, providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableElement }], usesInheritance: true, ngImport: core_exports }));
    CdkVirtualScrollableElement = _CdkVirtualScrollableElement;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollableElement, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualScrollingElement]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableElement }],
        host: {
          "class": "cdk-virtual-scrollable"
        }
      }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters") });
    _CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
      constructor() {
        super();
        const document2 = inject(DOCUMENT);
        this.elementRef = new ElementRef(document2.documentElement);
        this._scrollElement = document2;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
    };
    __name(_CdkVirtualScrollableWindow, "CdkVirtualScrollableWindow");
    __publicField(_CdkVirtualScrollableWindow, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollableWindow, deps: [], target: FactoryTarget.Directive }));
    __publicField(_CdkVirtualScrollableWindow, "\u0275dir", \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualScrollableWindow, isStandalone: true, selector: "cdk-virtual-scroll-viewport[scrollWindow]", providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableWindow }], usesInheritance: true, ngImport: core_exports }));
    CdkVirtualScrollableWindow = _CdkVirtualScrollableWindow;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollableWindow, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[scrollWindow]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableWindow }]
      }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters") });
    _CdkScrollableModule = class _CdkScrollableModule {
    };
    __name(_CdkScrollableModule, "CdkScrollableModule");
    __publicField(_CdkScrollableModule, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollableModule, deps: [], target: FactoryTarget.NgModule }));
    __publicField(_CdkScrollableModule, "\u0275mod", \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollableModule, imports: [CdkScrollable], exports: [CdkScrollable] }));
    __publicField(_CdkScrollableModule, "\u0275inj", \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollableModule }));
    CdkScrollableModule = _CdkScrollableModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkScrollableModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [CdkScrollable],
        imports: [CdkScrollable]
      }]
    }] });
    _ScrollingModule = class _ScrollingModule {
    };
    __name(_ScrollingModule, "ScrollingModule");
    __publicField(_ScrollingModule, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollingModule, deps: [], target: FactoryTarget.NgModule }));
    __publicField(_ScrollingModule, "\u0275mod", \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollingModule, imports: [
      BidiModule,
      CdkScrollableModule,
      CdkVirtualScrollViewport,
      CdkFixedSizeVirtualScroll,
      CdkVirtualForOf,
      CdkVirtualScrollableWindow,
      CdkVirtualScrollableElement
    ], exports: [
      BidiModule,
      CdkScrollableModule,
      CdkFixedSizeVirtualScroll,
      CdkVirtualForOf,
      CdkVirtualScrollViewport,
      CdkVirtualScrollableWindow,
      CdkVirtualScrollableElement
    ] }));
    __publicField(_ScrollingModule, "\u0275inj", \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollingModule, imports: [
      BidiModule,
      CdkScrollableModule,
      BidiModule,
      CdkScrollableModule
    ] }));
    ScrollingModule = _ScrollingModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ScrollingModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          BidiModule,
          CdkScrollableModule,
          CdkVirtualScrollViewport,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ],
        exports: [
          BidiModule,
          CdkScrollableModule,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollViewport,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/unique-selection-dispatcher.mjs
var _UniqueSelectionDispatcher, UniqueSelectionDispatcher;
var init_unique_selection_dispatcher = __esm({
  "node_modules/@angular/cdk/fesm2022/unique-selection-dispatcher.mjs"() {
    "use strict";
    init_core();
    init_core();
    _UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
      _listeners = [];
      /**
       * Notify other items that selection for the given name has been set.
       * @param id ID of the item.
       * @param name Name of the item.
       */
      notify(id, name) {
        for (let listener of this._listeners) {
          listener(id, name);
        }
      }
      /**
       * Listen for future changes to item selection.
       * @return Function used to deregister listener
       */
      listen(listener) {
        this._listeners.push(listener);
        return () => {
          this._listeners = this._listeners.filter((registered) => {
            return listener !== registered;
          });
        };
      }
      ngOnDestroy() {
        this._listeners = [];
      }
    };
    __name(_UniqueSelectionDispatcher, "UniqueSelectionDispatcher");
    __publicField(_UniqueSelectionDispatcher, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _UniqueSelectionDispatcher, deps: [], target: FactoryTarget.Injectable }));
    __publicField(_UniqueSelectionDispatcher, "\u0275prov", \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _UniqueSelectionDispatcher, providedIn: "root" }));
    UniqueSelectionDispatcher = _UniqueSelectionDispatcher;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: UniqueSelectionDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/collections.mjs
var init_collections = __esm({
  "node_modules/@angular/cdk/fesm2022/collections.mjs"() {
    "use strict";
    init_unique_selection_dispatcher();
  }
});

// node_modules/@angular/material/fesm2022/structural-styles.mjs
var __StructuralStylesLoader, _StructuralStylesLoader;
var init_structural_styles = __esm({
  "node_modules/@angular/material/fesm2022/structural-styles.mjs"() {
    "use strict";
    init_core();
    init_core();
    __StructuralStylesLoader = class __StructuralStylesLoader {
    };
    __name(__StructuralStylesLoader, "_StructuralStylesLoader");
    __publicField(__StructuralStylesLoader, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __StructuralStylesLoader, deps: [], target: FactoryTarget.Component }));
    __publicField(__StructuralStylesLoader, "\u0275cmp", \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __StructuralStylesLoader, isStandalone: true, selector: "structural-styles", ngImport: core_exports, template: "", isInline: true, styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None }));
    _StructuralStylesLoader = __StructuralStylesLoader;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _StructuralStylesLoader, decorators: [{
      type: Component,
      args: [{ selector: "structural-styles", encapsulation: ViewEncapsulation.None, template: "", changeDetection: ChangeDetectionStrategy.OnPush, styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'] }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/ripple.mjs
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var RippleState, _RippleRef, RippleRef, passiveCapturingEventOptions$1, _RippleEventManager, RippleEventManager, defaultRippleAnimationConfig, ignoreMouseEventsTimeout, passiveCapturingEventOptions, pointerDownEvents, pointerUpEvents, __MatRippleStylesLoader, _MatRippleStylesLoader, _RippleRenderer, RippleRenderer, MAT_RIPPLE_GLOBAL_OPTIONS, _MatRipple, MatRipple;
var init_ripple = __esm({
  "node_modules/@angular/material/fesm2022/ripple.mjs"() {
    "use strict";
    init_platform();
    init_core();
    init_core();
    init_a11y();
    init_coercion();
    init_private();
    init_animation();
    (function(RippleState2) {
      RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
      RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
      RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
      RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
    })(RippleState || (RippleState = {}));
    _RippleRef = class _RippleRef {
      _renderer;
      element;
      config;
      _animationForciblyDisabledThroughCss;
      /** Current state of the ripple. */
      state = RippleState.HIDDEN;
      constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
      }
      /** Fades out the ripple element. */
      fadeOut() {
        this._renderer.fadeOutRipple(this);
      }
    };
    __name(_RippleRef, "RippleRef");
    RippleRef = _RippleRef;
    passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    _RippleEventManager = class _RippleEventManager {
      _events = /* @__PURE__ */ new Map();
      /** Adds an event handler. */
      addHandler(ngZone, name, element, handler) {
        const handlersForEvent = this._events.get(name);
        if (handlersForEvent) {
          const handlersForElement = handlersForEvent.get(element);
          if (handlersForElement) {
            handlersForElement.add(handler);
          } else {
            handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
          }
        } else {
          this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
          ngZone.runOutsideAngular(() => {
            document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
          });
        }
      }
      /** Removes an event handler. */
      removeHandler(name, element, handler) {
        const handlersForEvent = this._events.get(name);
        if (!handlersForEvent) {
          return;
        }
        const handlersForElement = handlersForEvent.get(element);
        if (!handlersForElement) {
          return;
        }
        handlersForElement.delete(handler);
        if (handlersForElement.size === 0) {
          handlersForEvent.delete(element);
        }
        if (handlersForEvent.size === 0) {
          this._events.delete(name);
          document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
        }
      }
      /** Event handler that is bound and which dispatches the events to the different targets. */
      _delegateEventHandler = /* @__PURE__ */ __name((event) => {
        const target = _getEventTarget(event);
        if (target) {
          this._events.get(event.type)?.forEach((handlers, element) => {
            if (element === target || element.contains(target)) {
              handlers.forEach((handler) => handler.handleEvent(event));
            }
          });
        }
      }, "_delegateEventHandler");
    };
    __name(_RippleEventManager, "RippleEventManager");
    RippleEventManager = _RippleEventManager;
    defaultRippleAnimationConfig = {
      enterDuration: 225,
      exitDuration: 150
    };
    ignoreMouseEventsTimeout = 800;
    passiveCapturingEventOptions = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    pointerDownEvents = ["mousedown", "touchstart"];
    pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
    __MatRippleStylesLoader = class __MatRippleStylesLoader {
    };
    __name(__MatRippleStylesLoader, "_MatRippleStylesLoader");
    __publicField(__MatRippleStylesLoader, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __MatRippleStylesLoader, deps: [], target: FactoryTarget.Component }));
    __publicField(__MatRippleStylesLoader, "\u0275cmp", \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __MatRippleStylesLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "mat-ripple-style-loader": "" } }, ngImport: core_exports, template: "", isInline: true, styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None }));
    _MatRippleStylesLoader = __MatRippleStylesLoader;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleStylesLoader, decorators: [{
      type: Component,
      args: [{ template: "", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: { "mat-ripple-style-loader": "" }, styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"] }]
    }] });
    _RippleRenderer = class _RippleRenderer {
      _target;
      _ngZone;
      _platform;
      /** Element where the ripples are being added to. */
      _containerElement;
      /** Element which triggers the ripple elements on mouse events. */
      _triggerElement;
      /** Whether the pointer is currently down or not. */
      _isPointerDown = false;
      /**
       * Map of currently active ripple references.
       * The ripple reference is mapped to its element event listeners.
       * The reason why `| null` is used is that event listeners are added only
       * when the condition is truthy (see the `_startFadeOutTransition` method).
       */
      _activeRipples = /* @__PURE__ */ new Map();
      /** Latest non-persistent ripple that was triggered. */
      _mostRecentTransientRipple;
      /** Time in milliseconds when the last touchstart event happened. */
      _lastTouchStartEvent;
      /** Whether pointer-up event listeners have been registered. */
      _pointerUpEventsRegistered = false;
      /**
       * Cached dimensions of the ripple container. Set when the first
       * ripple is shown and cleared once no more ripples are visible.
       */
      _containerRect;
      constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
        this._target = _target;
        this._ngZone = _ngZone;
        this._platform = _platform;
        if (_platform.isBrowser) {
          this._containerElement = coerceElement(elementOrElementRef);
        }
        if (injector) {
          injector.get(_CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
        }
      }
      /**
       * Fades in a ripple at the given coordinates.
       * @param x Coordinate within the element, along the X axis at which to start the ripple.
       * @param y Coordinate within the element, along the Y axis at which to start the ripple.
       * @param config Extra ripple options.
       */
      fadeInRipple(x, y, config = {}) {
        const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
        const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
        if (config.centered) {
          x = containerRect.left + containerRect.width / 2;
          y = containerRect.top + containerRect.height / 2;
        }
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        const offsetX = x - containerRect.left;
        const offsetY = y - containerRect.top;
        const enterDuration = animationConfig.enterDuration;
        const ripple = document.createElement("div");
        ripple.classList.add("mat-ripple-element");
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        if (config.color != null) {
          ripple.style.backgroundColor = config.color;
        }
        ripple.style.transitionDuration = `${enterDuration}ms`;
        this._containerElement.appendChild(ripple);
        const computedStyles = window.getComputedStyle(ripple);
        const userTransitionProperty = computedStyles.transitionProperty;
        const userTransitionDuration = computedStyles.transitionDuration;
        const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
        // some browsers expand the duration for every property (in our case `opacity` and `transform`).
        userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
        containerRect.width === 0 && containerRect.height === 0;
        const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
        ripple.style.transform = "scale3d(1, 1, 1)";
        rippleRef.state = RippleState.FADING_IN;
        if (!config.persistent) {
          this._mostRecentTransientRipple = rippleRef;
        }
        let eventListeners = null;
        if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
          this._ngZone.runOutsideAngular(() => {
            const onTransitionEnd = /* @__PURE__ */ __name(() => {
              if (eventListeners) {
                eventListeners.fallbackTimer = null;
              }
              clearTimeout(fallbackTimer);
              this._finishRippleTransition(rippleRef);
            }, "onTransitionEnd");
            const onTransitionCancel = /* @__PURE__ */ __name(() => this._destroyRipple(rippleRef), "onTransitionCancel");
            const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
            ripple.addEventListener("transitionend", onTransitionEnd);
            ripple.addEventListener("transitioncancel", onTransitionCancel);
            eventListeners = { onTransitionEnd, onTransitionCancel, fallbackTimer };
          });
        }
        this._activeRipples.set(rippleRef, eventListeners);
        if (animationForciblyDisabledThroughCss || !enterDuration) {
          this._finishRippleTransition(rippleRef);
        }
        return rippleRef;
      }
      /** Fades out a ripple reference. */
      fadeOutRipple(rippleRef) {
        if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
          return;
        }
        const rippleEl = rippleRef.element;
        const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = "0";
        rippleRef.state = RippleState.FADING_OUT;
        if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
          this._finishRippleTransition(rippleRef);
        }
      }
      /** Fades out all currently active ripples. */
      fadeOutAll() {
        this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
      }
      /** Fades out all currently active non-persistent ripples. */
      fadeOutAllNonPersistent() {
        this._getActiveRipples().forEach((ripple) => {
          if (!ripple.config.persistent) {
            ripple.fadeOut();
          }
        });
      }
      /** Sets up the trigger event listeners */
      setupTriggerEvents(elementOrElementRef) {
        const element = coerceElement(elementOrElementRef);
        if (!this._platform.isBrowser || !element || element === this._triggerElement) {
          return;
        }
        this._removeTriggerEvents();
        this._triggerElement = element;
        pointerDownEvents.forEach((type) => {
          _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
        });
      }
      /**
       * Handles all registered events.
       * @docs-private
       */
      handleEvent(event) {
        if (event.type === "mousedown") {
          this._onMousedown(event);
        } else if (event.type === "touchstart") {
          this._onTouchStart(event);
        } else {
          this._onPointerUp();
        }
        if (!this._pointerUpEventsRegistered) {
          this._ngZone.runOutsideAngular(() => {
            pointerUpEvents.forEach((type) => {
              this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
            });
          });
          this._pointerUpEventsRegistered = true;
        }
      }
      /** Method that will be called if the fade-in or fade-in transition completed. */
      _finishRippleTransition(rippleRef) {
        if (rippleRef.state === RippleState.FADING_IN) {
          this._startFadeOutTransition(rippleRef);
        } else if (rippleRef.state === RippleState.FADING_OUT) {
          this._destroyRipple(rippleRef);
        }
      }
      /**
       * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
       * is not held down anymore.
       */
      _startFadeOutTransition(rippleRef) {
        const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
        const { persistent } = rippleRef.config;
        rippleRef.state = RippleState.VISIBLE;
        if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
          rippleRef.fadeOut();
        }
      }
      /** Destroys the given ripple by removing it from the DOM and updating its state. */
      _destroyRipple(rippleRef) {
        const eventListeners = this._activeRipples.get(rippleRef) ?? null;
        this._activeRipples.delete(rippleRef);
        if (!this._activeRipples.size) {
          this._containerRect = null;
        }
        if (rippleRef === this._mostRecentTransientRipple) {
          this._mostRecentTransientRipple = null;
        }
        rippleRef.state = RippleState.HIDDEN;
        if (eventListeners !== null) {
          rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
          rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
          if (eventListeners.fallbackTimer !== null) {
            clearTimeout(eventListeners.fallbackTimer);
          }
        }
        rippleRef.element.remove();
      }
      /** Function being called whenever the trigger is being pressed using mouse. */
      _onMousedown(event) {
        const isFakeMousedown = isFakeMousedownFromScreenReader(event);
        const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
        if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
          this._isPointerDown = true;
          this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
        }
      }
      /** Function being called whenever the trigger is being pressed using touch. */
      _onTouchStart(event) {
        if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
          this._lastTouchStartEvent = Date.now();
          this._isPointerDown = true;
          const touches = event.changedTouches;
          if (touches) {
            for (let i = 0; i < touches.length; i++) {
              this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
            }
          }
        }
      }
      /** Function being called whenever the trigger is being released. */
      _onPointerUp() {
        if (!this._isPointerDown) {
          return;
        }
        this._isPointerDown = false;
        this._getActiveRipples().forEach((ripple) => {
          const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
          if (!ripple.config.persistent && isVisible) {
            ripple.fadeOut();
          }
        });
      }
      _getActiveRipples() {
        return Array.from(this._activeRipples.keys());
      }
      /** Removes previously registered event listeners from the trigger element. */
      _removeTriggerEvents() {
        const trigger2 = this._triggerElement;
        if (trigger2) {
          pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger2, this));
          if (this._pointerUpEventsRegistered) {
            pointerUpEvents.forEach((type) => trigger2.removeEventListener(type, this, passiveCapturingEventOptions));
            this._pointerUpEventsRegistered = false;
          }
        }
      }
    };
    __name(_RippleRenderer, "RippleRenderer");
    __publicField(_RippleRenderer, "_eventManager", new RippleEventManager());
    RippleRenderer = _RippleRenderer;
    __name(distanceToFurthestCorner, "distanceToFurthestCorner");
    MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
    _MatRipple = class _MatRipple {
      _elementRef = inject(ElementRef);
      _animationsDisabled = _animationsDisabled();
      /** Custom color for all ripples. */
      color;
      /** Whether the ripples should be visible outside the component's bounds. */
      unbounded;
      /**
       * Whether the ripple always originates from the center of the host element's bounds, rather
       * than originating from the location of the click event.
       */
      centered;
      /**
       * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
       * will be the distance from the center of the ripple to the furthest corner of the host element's
       * bounding rectangle.
       */
      radius = 0;
      /**
       * Configuration for the ripple animation. Allows modifying the enter and exit animation
       * duration of the ripples. The animation durations will be overwritten if the
       * `NoopAnimationsModule` is being used.
       */
      animation;
      /**
       * Whether click events will not trigger the ripple. Ripples can be still launched manually
       * by using the `launch()` method.
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        if (value) {
          this.fadeOutAllNonPersistent();
        }
        this._disabled = value;
        this._setupTriggerEventsIfEnabled();
      }
      _disabled = false;
      /**
       * The element that triggers the ripple when click events are received.
       * Defaults to the directive's host element.
       */
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(trigger2) {
        this._trigger = trigger2;
        this._setupTriggerEventsIfEnabled();
      }
      _trigger;
      /** Renderer for the ripple DOM manipulations. */
      _rippleRenderer;
      /** Options that are set globally for all ripples. */
      _globalOptions;
      /** @docs-private Whether ripple directive is initialized and the input bindings are set. */
      _isInitialized = false;
      constructor() {
        const ngZone = inject(NgZone);
        const platform = inject(Platform);
        const globalOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, { optional: true });
        const injector = inject(Injector);
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
      }
      ngOnInit() {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      /** Fades out all currently showing ripple elements. */
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      /** Fades out all currently showing non-persistent ripple elements. */
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      /**
       * Ripple configuration from the directive's input values.
       * @docs-private Implemented as part of RippleTarget
       */
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationsDisabled ? { enterDuration: 0, exitDuration: 0 } : {}), this.animation),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
        };
      }
      /**
       * Whether ripples on pointer-down are disabled or not.
       * @docs-private Implemented as part of RippleTarget
       */
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      /** Sets up the trigger event listeners if ripples are enabled. */
      _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
          this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
      }
      /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
      launch(configOrX, y = 0, config) {
        if (typeof configOrX === "number") {
          return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
        } else {
          return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
        }
      }
    };
    __name(_MatRipple, "MatRipple");
    __publicField(_MatRipple, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRipple, deps: [], target: FactoryTarget.Directive }));
    __publicField(_MatRipple, "\u0275dir", \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatRipple, isStandalone: true, selector: "[mat-ripple], [matRipple]", inputs: { color: ["matRippleColor", "color"], unbounded: ["matRippleUnbounded", "unbounded"], centered: ["matRippleCentered", "centered"], radius: ["matRippleRadius", "radius"], animation: ["matRippleAnimation", "animation"], disabled: ["matRippleDisabled", "disabled"], trigger: ["matRippleTrigger", "trigger"] }, host: { properties: { "class.mat-ripple-unbounded": "unbounded" }, classAttribute: "mat-ripple" }, exportAs: ["matRipple"], ngImport: core_exports }));
    MatRipple = _MatRipple;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatRipple, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-ripple], [matRipple]",
        exportAs: "matRipple",
        host: {
          "class": "mat-ripple",
          "[class.mat-ripple-unbounded]": "unbounded"
        }
      }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters"), propDecorators: { color: [{
      type: Input,
      args: ["matRippleColor"]
    }], unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }], centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }], radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }], animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }], disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }], trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/internal-form-field.mjs
var __MatInternalFormField, _MatInternalFormField;
var init_internal_form_field = __esm({
  "node_modules/@angular/material/fesm2022/internal-form-field.mjs"() {
    "use strict";
    init_core();
    init_core();
    __MatInternalFormField = class __MatInternalFormField {
      /** Position of the label relative to the content. */
      labelPosition;
    };
    __name(__MatInternalFormField, "_MatInternalFormField");
    __publicField(__MatInternalFormField, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __MatInternalFormField, deps: [], target: FactoryTarget.Component }));
    __publicField(__MatInternalFormField, "\u0275cmp", \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __MatInternalFormField, isStandalone: true, selector: "div[mat-internal-form-field]", inputs: { labelPosition: "labelPosition" }, host: { properties: { "class.mdc-form-field--align-end": 'labelPosition === "before"' }, classAttribute: "mdc-form-field mat-internal-form-field" }, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None }));
    _MatInternalFormField = __MatInternalFormField;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatInternalFormField, decorators: [{
      type: Component,
      args: [{ selector: "div[mat-internal-form-field]", template: "<ng-content></ng-content>", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      }, styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"] }]
    }], propDecorators: { labelPosition: [{
      type: Input,
      args: [{ required: true }]
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/ripple-module.mjs
var _MatRippleModule, MatRippleModule;
var init_ripple_module = __esm({
  "node_modules/@angular/material/fesm2022/ripple-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common_module();
    init_ripple();
    _MatRippleModule = class _MatRippleModule {
    };
    __name(_MatRippleModule, "MatRippleModule");
    __publicField(_MatRippleModule, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleModule, deps: [], target: FactoryTarget.NgModule }));
    __publicField(_MatRippleModule, "\u0275mod", \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleModule, imports: [MatCommonModule, MatRipple], exports: [MatRipple, MatCommonModule] }));
    __publicField(_MatRippleModule, "\u0275inj", \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleModule, imports: [MatCommonModule, MatCommonModule] }));
    MatRippleModule = _MatRippleModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatRippleModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatRipple],
        exports: [MatRipple, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/radio.mjs
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    disabledInteractive: false
  };
}
var _MatRadioChange, MatRadioChange, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MAT_RADIO_GROUP, MAT_RADIO_DEFAULT_OPTIONS, _MatRadioGroup, MatRadioGroup, _MatRadioButton, MatRadioButton, _MatRadioModule, MatRadioModule;
var init_radio = __esm({
  "node_modules/@angular/material/fesm2022/radio.mjs"() {
    "use strict";
    init_a11y();
    init_collections();
    init_core();
    init_core();
    init_forms();
    init_private();
    init_animation();
    init_structural_styles();
    init_ripple();
    init_internal_form_field();
    init_common_module();
    init_ripple_module();
    _MatRadioChange = class _MatRadioChange {
      source;
      value;
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }
    };
    __name(_MatRadioChange, "MatRadioChange");
    MatRadioChange = _MatRadioChange;
    MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatRadioGroup),
      multi: true
    };
    MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
    MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
      providedIn: "root",
      factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
    });
    __name(MAT_RADIO_DEFAULT_OPTIONS_FACTORY, "MAT_RADIO_DEFAULT_OPTIONS_FACTORY");
    _MatRadioGroup = class _MatRadioGroup {
      _changeDetector = inject(ChangeDetectorRef);
      /** Selected value for the radio group. */
      _value = null;
      /** The HTML name attribute applied to radio buttons in this group. */
      _name = inject(_IdGenerator).getId("mat-radio-group-");
      /** The currently selected radio button. Should match value. */
      _selected = null;
      /** Whether the `value` has been set to its initial value. */
      _isInitialized = false;
      /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
      _labelPosition = "after";
      /** Whether the radio group is disabled. */
      _disabled = false;
      /** Whether the radio group is required. */
      _required = false;
      /** Subscription to changes in amount of radio buttons. */
      _buttonChanges;
      /** The method to be called in order to update ngModel */
      _controlValueAccessorChangeFn = /* @__PURE__ */ __name(() => {
      }, "_controlValueAccessorChangeFn");
      /**
       * onTouch function registered via registerOnTouch (ControlValueAccessor).
       * @docs-private
       */
      onTouched = /* @__PURE__ */ __name(() => {
      }, "onTouched");
      /**
       * Event emitted when the group value changes.
       * Change events are only emitted when the value changes due to user interaction with
       * a radio button (the same behavior as `<input type-"radio">`).
       */
      change = new EventEmitter();
      /** Child radio buttons. */
      _radios;
      /**
       * Theme color of the radio buttons in the group. This API is supported in M2
       * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/radio/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Name of the radio button group. All radio buttons inside this group will use this name. */
      get name() {
        return this._name;
      }
      set name(value) {
        this._name = value;
        this._updateRadioButtonNames();
      }
      /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
      get labelPosition() {
        return this._labelPosition;
      }
      set labelPosition(v) {
        this._labelPosition = v === "before" ? "before" : "after";
        this._markRadiosForCheck();
      }
      /**
       * Value for the radio-group. Should equal the value of the selected radio button if there is
       * a corresponding radio button with a matching value. If there is not such a corresponding
       * radio button, this value persists to be applied in case a new radio button is added with a
       * matching value.
       */
      get value() {
        return this._value;
      }
      set value(newValue) {
        if (this._value !== newValue) {
          this._value = newValue;
          this._updateSelectedRadioFromValue();
          this._checkSelectedRadioButton();
        }
      }
      _checkSelectedRadioButton() {
        if (this._selected && !this._selected.checked) {
          this._selected.checked = true;
        }
      }
      /**
       * The currently selected radio button. If set to a new radio button, the radio group value
       * will be updated to match the new selected button.
       */
      get selected() {
        return this._selected;
      }
      set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
      }
      /** Whether the radio group is disabled */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._markRadiosForCheck();
      }
      /** Whether the radio group is required */
      get required() {
        return this._required;
      }
      set required(value) {
        this._required = value;
        this._markRadiosForCheck();
      }
      /** Whether buttons in the group should be interactive while they're disabled. */
      get disabledInteractive() {
        return this._disabledInteractive;
      }
      set disabledInteractive(value) {
        this._disabledInteractive = value;
        this._markRadiosForCheck();
      }
      _disabledInteractive = false;
      constructor() {
      }
      /**
       * Initialize properties once content children are available.
       * This allows us to propagate relevant attributes to associated buttons.
       */
      ngAfterContentInit() {
        this._isInitialized = true;
        this._buttonChanges = this._radios.changes.subscribe(() => {
          if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
            this._selected = null;
          }
        });
      }
      ngOnDestroy() {
        this._buttonChanges?.unsubscribe();
      }
      /**
       * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
       * radio buttons upon their blur.
       */
      _touch() {
        if (this.onTouched) {
          this.onTouched();
        }
      }
      _updateRadioButtonNames() {
        if (this._radios) {
          this._radios.forEach((radio) => {
            radio.name = this.name;
            radio._markForCheck();
          });
        }
      }
      /** Updates the `selected` radio button from the internal _value state. */
      _updateSelectedRadioFromValue() {
        const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
          this._selected = null;
          this._radios.forEach((radio) => {
            radio.checked = this.value === radio.value;
            if (radio.checked) {
              this._selected = radio;
            }
          });
        }
      }
      /** Dispatch change event with current selection and group value. */
      _emitChangeEvent() {
        if (this._isInitialized) {
          this.change.emit(new MatRadioChange(this._selected, this._value));
        }
      }
      _markRadiosForCheck() {
        if (this._radios) {
          this._radios.forEach((radio) => radio._markForCheck());
        }
      }
      /**
       * Sets the model value. Implemented as part of ControlValueAccessor.
       * @param value
       */
      writeValue(value) {
        this.value = value;
        this._changeDetector.markForCheck();
      }
      /**
       * Registers a callback to be triggered when the model value changes.
       * Implemented as part of ControlValueAccessor.
       * @param fn Callback to be registered.
       */
      registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
      }
      /**
       * Registers a callback to be triggered when the control is touched.
       * Implemented as part of ControlValueAccessor.
       * @param fn Callback to be registered.
       */
      registerOnTouched(fn) {
        this.onTouched = fn;
      }
      /**
       * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
       * @param isDisabled Whether the control should be disabled.
       */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetector.markForCheck();
      }
    };
    __name(_MatRadioGroup, "MatRadioGroup");
    __publicField(_MatRadioGroup, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRadioGroup, deps: [], target: FactoryTarget.Directive }));
    __publicField(_MatRadioGroup, "\u0275dir", \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatRadioGroup, isStandalone: true, selector: "mat-radio-group", inputs: { color: "color", name: "name", labelPosition: "labelPosition", value: "value", selected: "selected", disabled: ["disabled", "disabled", booleanAttribute], required: ["required", "required", booleanAttribute], disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute] }, outputs: { change: "change" }, host: { attributes: { "role": "radiogroup" }, classAttribute: "mat-mdc-radio-group" }, providers: [
      MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
      { provide: MAT_RADIO_GROUP, useExisting: _MatRadioGroup }
    ], queries: [{ propertyName: "_radios", predicate: forwardRef(() => MatRadioButton), descendants: true }], exportAs: ["matRadioGroup"], ngImport: core_exports }));
    MatRadioGroup = _MatRadioGroup;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatRadioGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-radio-group",
        exportAs: "matRadioGroup",
        providers: [
          MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
          { provide: MAT_RADIO_GROUP, useExisting: MatRadioGroup }
        ],
        host: {
          "role": "radiogroup",
          "class": "mat-mdc-radio-group"
        }
      }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters"), propDecorators: { change: [{
      type: Output
    }], _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), { descendants: true }]
    }], color: [{
      type: Input
    }], name: [{
      type: Input
    }], labelPosition: [{
      type: Input
    }], value: [{
      type: Input
    }], selected: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    _MatRadioButton = class _MatRadioButton {
      _elementRef = inject(ElementRef);
      _changeDetector = inject(ChangeDetectorRef);
      _focusMonitor = inject(FocusMonitor);
      _radioDispatcher = inject(UniqueSelectionDispatcher);
      _defaultOptions = inject(MAT_RADIO_DEFAULT_OPTIONS, {
        optional: true
      });
      _ngZone = inject(NgZone);
      _renderer = inject(Renderer2);
      _uniqueId = inject(_IdGenerator).getId("mat-radio-");
      _cleanupClick;
      /** The unique ID for the radio button. */
      id = this._uniqueId;
      /** Analog to HTML 'name' attribute used to group radios for unique selection. */
      name;
      /** Used to set the 'aria-label' attribute on the underlying input element. */
      ariaLabel;
      /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
      ariaLabelledby;
      /** The 'aria-describedby' attribute is read after the element's label and field type. */
      ariaDescribedby;
      /** Whether ripples are disabled inside the radio button */
      disableRipple = false;
      /** Tabindex of the radio button. */
      tabIndex = 0;
      /** Whether this radio button is checked. */
      get checked() {
        return this._checked;
      }
      set checked(value) {
        if (this._checked !== value) {
          this._checked = value;
          if (value && this.radioGroup && this.radioGroup.value !== this.value) {
            this.radioGroup.selected = this;
          } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
            this.radioGroup.selected = null;
          }
          if (value) {
            this._radioDispatcher.notify(this.id, this.name);
          }
          this._changeDetector.markForCheck();
        }
      }
      /** The value of this radio button. */
      get value() {
        return this._value;
      }
      set value(value) {
        if (this._value !== value) {
          this._value = value;
          if (this.radioGroup !== null) {
            if (!this.checked) {
              this.checked = this.radioGroup.value === value;
            }
            if (this.checked) {
              this.radioGroup.selected = this;
            }
          }
        }
      }
      /** Whether the label should appear after or before the radio button. Defaults to 'after' */
      get labelPosition() {
        return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
      }
      set labelPosition(value) {
        this._labelPosition = value;
      }
      _labelPosition;
      /** Whether the radio button is disabled. */
      get disabled() {
        return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
      }
      set disabled(value) {
        this._setDisabled(value);
      }
      /** Whether the radio button is required. */
      get required() {
        return this._required || this.radioGroup && this.radioGroup.required;
      }
      set required(value) {
        if (value !== this._required) {
          this._changeDetector.markForCheck();
        }
        this._required = value;
      }
      /**
       * Theme color of the radio button. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/radio/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      get color() {
        return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
      }
      set color(newValue) {
        this._color = newValue;
      }
      _color;
      /** Whether the radio button should remain interactive when it is disabled. */
      get disabledInteractive() {
        return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
      }
      set disabledInteractive(value) {
        this._disabledInteractive = value;
      }
      _disabledInteractive;
      /**
       * Event emitted when the checked state of this radio button changes.
       * Change events are only emitted when the value changes due to user interaction with
       * the radio button (the same behavior as `<input type-"radio">`).
       */
      change = new EventEmitter();
      /** The parent radio group. May or may not be present. */
      radioGroup;
      /** ID of the native input element inside `<mat-radio-button>` */
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      /** Whether this radio is checked. */
      _checked = false;
      /** Whether this radio is disabled. */
      _disabled;
      /** Whether this radio is required. */
      _required;
      /** Value assigned to this radio. */
      _value = null;
      /** Unregister function for _radioDispatcher */
      _removeUniqueSelectionListener = /* @__PURE__ */ __name(() => {
      }, "_removeUniqueSelectionListener");
      /** Previous value of the input's tabindex. */
      _previousTabIndex;
      /** The native `<input type=radio>` element */
      _inputElement;
      /** Trigger elements for the ripple events. */
      _rippleTrigger;
      /** Whether animations are disabled. */
      _noopAnimations = _animationsDisabled();
      _injector = inject(Injector);
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const radioGroup = inject(MAT_RADIO_GROUP, { optional: true });
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        this.radioGroup = radioGroup;
        this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
        if (tabIndex) {
          this.tabIndex = numberAttribute(tabIndex, 0);
        }
      }
      /** Focuses the radio button. */
      focus(options, origin) {
        if (origin) {
          this._focusMonitor.focusVia(this._inputElement, origin, options);
        } else {
          this._inputElement.nativeElement.focus(options);
        }
      }
      /**
       * Marks the radio button as needing checking for change detection.
       * This method is exposed because the parent radio group will directly
       * update bound properties of the radio button.
       */
      _markForCheck() {
        this._changeDetector.markForCheck();
      }
      ngOnInit() {
        if (this.radioGroup) {
          this.checked = this.radioGroup.value === this._value;
          if (this.checked) {
            this.radioGroup.selected = this;
          }
          this.name = this.radioGroup.name;
        }
        this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
          if (id !== this.id && name === this.name) {
            this.checked = false;
          }
        });
      }
      ngDoCheck() {
        this._updateTabIndex();
      }
      ngAfterViewInit() {
        this._updateTabIndex();
        this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
          if (!focusOrigin && this.radioGroup) {
            this.radioGroup._touch();
          }
        });
        this._ngZone.runOutsideAngular(() => {
          this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, "click", this._onInputClick);
        });
      }
      ngOnDestroy() {
        this._cleanupClick?.();
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._removeUniqueSelectionListener();
      }
      /** Dispatch change event with current value. */
      _emitChangeEvent() {
        this.change.emit(new MatRadioChange(this, this._value));
      }
      _isRippleDisabled() {
        return this.disableRipple || this.disabled;
      }
      /** Triggered when the radio button receives an interaction from the user. */
      _onInputInteraction(event) {
        event.stopPropagation();
        if (!this.checked && !this.disabled) {
          const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
          this.checked = true;
          this._emitChangeEvent();
          if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            if (groupValueChanged) {
              this.radioGroup._emitChangeEvent();
            }
          }
        }
      }
      /** Triggered when the user clicks on the touch target. */
      _onTouchTargetClick(event) {
        this._onInputInteraction(event);
        if (!this.disabled || this.disabledInteractive) {
          this._inputElement?.nativeElement.focus();
        }
      }
      /** Sets the disabled state and marks for check if a change occurred. */
      _setDisabled(value) {
        if (this._disabled !== value) {
          this._disabled = value;
          this._changeDetector.markForCheck();
        }
      }
      /** Called when the input is clicked. */
      _onInputClick = /* @__PURE__ */ __name((event) => {
        if (this.disabled && this.disabledInteractive) {
          event.preventDefault();
        }
      }, "_onInputClick");
      /** Gets the tabindex for the underlying input element. */
      _updateTabIndex() {
        const group2 = this.radioGroup;
        let value;
        if (!group2 || !group2.selected || this.disabled) {
          value = this.tabIndex;
        } else {
          value = group2.selected === this ? this.tabIndex : -1;
        }
        if (value !== this._previousTabIndex) {
          const input = this._inputElement?.nativeElement;
          if (input) {
            input.setAttribute("tabindex", value + "");
            this._previousTabIndex = value;
            afterNextRender(() => {
              queueMicrotask(() => {
                if (group2 && group2.selected && group2.selected !== this && document.activeElement === input) {
                  group2.selected?._inputElement.nativeElement.focus();
                  if (document.activeElement === input) {
                    this._inputElement.nativeElement.blur();
                  }
                }
              });
            }, { injector: this._injector });
          }
        }
      }
    };
    __name(_MatRadioButton, "MatRadioButton");
    __publicField(_MatRadioButton, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRadioButton, deps: [], target: FactoryTarget.Component }));
    __publicField(_MatRadioButton, "\u0275cmp", \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatRadioButton, isStandalone: true, selector: "mat-radio-button", inputs: { id: "id", name: "name", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)], checked: ["checked", "checked", booleanAttribute], value: "value", labelPosition: "labelPosition", disabled: ["disabled", "disabled", booleanAttribute], required: ["required", "required", booleanAttribute], color: "color", disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute] }, outputs: { change: "change" }, host: { listeners: { "focus": "_inputElement.nativeElement.focus()" }, properties: { "attr.id": "id", "class.mat-primary": 'color === "primary"', "class.mat-accent": 'color === "accent"', "class.mat-warn": 'color === "warn"', "class.mat-mdc-radio-checked": "checked", "class.mat-mdc-radio-disabled": "disabled", "class.mat-mdc-radio-disabled-interactive": "disabledInteractive", "class._mat-animation-noopable": "_noopAnimations", "attr.tabindex": "null", "attr.aria-label": "null", "attr.aria-labelledby": "null", "attr.aria-describedby": "null" }, classAttribute: "mat-mdc-radio-button" }, viewQueries: [{ propertyName: "_inputElement", first: true, predicate: ["input"], descendants: true }, { propertyName: "_rippleTrigger", first: true, predicate: ["formField"], descendants: true, read: ElementRef, static: true }], exportAs: ["matRadioButton"], ngImport: core_exports, template: '<div mat-internal-form-field [labelPosition]="labelPosition" #formField>\n  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">\n    <!-- Render this element first so the input is on top. -->\n    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>\n    <!--\n      Note that we set `aria-invalid="false"` on the input, because otherwise some screen readers\n      will read out "required, invalid data" for each radio button that hasn\'t been checked.\n      An alternate approach is to use `aria-required` instead of `required`, however we have an\n      internal check which enforces that elements marked as `aria-required` also have the `required`\n      attribute which ends up re-introducing the issue for us.\n    -->\n    <input #input class="mdc-radio__native-control" type="radio"\n           [id]="inputId"\n           [checked]="checked"\n           [disabled]="disabled && !disabledInteractive"\n           [attr.name]="name"\n           [attr.value]="value"\n           [required]="required"\n           aria-invalid="false"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           [attr.aria-disabled]="disabled && disabledInteractive ? \'true\' : null"\n           (change)="_onInputInteraction($event)">\n    <div class="mdc-radio__background">\n      <div class="mdc-radio__outer-circle"></div>\n      <div class="mdc-radio__inner-circle"></div>\n    </div>\n    <div mat-ripple class="mat-radio-ripple mat-focus-indicator"\n         [matRippleTrigger]="_rippleTrigger.nativeElement"\n         [matRippleDisabled]="_isRippleDisabled()"\n         [matRippleCentered]="true">\n      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>\n    </div>\n  </div>\n  <label class="mdc-label" [for]="inputId">\n    <ng-content></ng-content>\n  </label>\n</div>\n', styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),background-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}@media(forced-colors: active){.mat-mdc-radio-button .mdc-radio__inner-circle{background-color:CanvasText !important}}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-radio-touch-target-size, 48px);width:var(--mat-radio-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n'], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "component", type: _MatInternalFormField, selector: "div[mat-internal-form-field]", inputs: ["labelPosition"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None }));
    MatRadioButton = _MatRadioButton;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatRadioButton, decorators: [{
      type: Component,
      args: [{ selector: "mat-radio-button", host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        "(focus)": "_inputElement.nativeElement.focus()"
      }, exportAs: "matRadioButton", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatRipple, _MatInternalFormField], template: '<div mat-internal-form-field [labelPosition]="labelPosition" #formField>\n  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">\n    <!-- Render this element first so the input is on top. -->\n    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>\n    <!--\n      Note that we set `aria-invalid="false"` on the input, because otherwise some screen readers\n      will read out "required, invalid data" for each radio button that hasn\'t been checked.\n      An alternate approach is to use `aria-required` instead of `required`, however we have an\n      internal check which enforces that elements marked as `aria-required` also have the `required`\n      attribute which ends up re-introducing the issue for us.\n    -->\n    <input #input class="mdc-radio__native-control" type="radio"\n           [id]="inputId"\n           [checked]="checked"\n           [disabled]="disabled && !disabledInteractive"\n           [attr.name]="name"\n           [attr.value]="value"\n           [required]="required"\n           aria-invalid="false"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           [attr.aria-disabled]="disabled && disabledInteractive ? \'true\' : null"\n           (change)="_onInputInteraction($event)">\n    <div class="mdc-radio__background">\n      <div class="mdc-radio__outer-circle"></div>\n      <div class="mdc-radio__inner-circle"></div>\n    </div>\n    <div mat-ripple class="mat-radio-ripple mat-focus-indicator"\n         [matRippleTrigger]="_rippleTrigger.nativeElement"\n         [matRippleDisabled]="_isRippleDisabled()"\n         [matRippleCentered]="true">\n      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>\n    </div>\n  </div>\n  <label class="mdc-label" [for]="inputId">\n    <ng-content></ng-content>\n  </label>\n</div>\n', styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),background-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}@media(forced-colors: active){.mat-mdc-radio-button .mdc-radio__inner-circle{background-color:CanvasText !important}}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-radio-touch-target-size, 48px);width:var(--mat-radio-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n'] }]
    }], ctorParameters: /* @__PURE__ */ __name(() => [], "ctorParameters"), propDecorators: { id: [{
      type: Input
    }], name: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: /* @__PURE__ */ __name((value) => value == null ? 0 : numberAttribute(value), "transform")
      }]
    }], checked: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], value: [{
      type: Input
    }], labelPosition: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], color: [{
      type: Input
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], change: [{
      type: Output
    }], _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }], _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", { read: ElementRef, static: true }]
    }] } });
    _MatRadioModule = class _MatRadioModule {
    };
    __name(_MatRadioModule, "MatRadioModule");
    __publicField(_MatRadioModule, "\u0275fac", \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRadioModule, deps: [], target: FactoryTarget.NgModule }));
    __publicField(_MatRadioModule, "\u0275mod", \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRadioModule, imports: [MatCommonModule, MatRippleModule, MatRadioGroup, MatRadioButton], exports: [MatCommonModule, MatRadioGroup, MatRadioButton] }));
    __publicField(_MatRadioModule, "\u0275inj", \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRadioModule, imports: [MatCommonModule, MatRippleModule, MatRadioButton, MatCommonModule] }));
    MatRadioModule = _MatRadioModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatRadioModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
        exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
      }]
    }] });
  }
});

// src/components/to-do-list/to-do-list.ts
var _a, ToDoList;
var init_to_do_list3 = __esm({
  "src/components/to-do-list/to-do-list.ts"() {
    "use strict";
    init_tslib_es6();
    init_to_do_list();
    init_to_do_list2();
    init_core();
    init_forms();
    init_to_do_list_item_component();
    init_input();
    init_form_field();
    init_ngx_spinner();
    init_common();
    init_to_do_button_component();
    init_enter_control();
    init_scrolling();
    init_tasks_services();
    init_toast_service();
    init_router();
    init_radio();
    init_core();
    ToDoList = (_a = class {
      listService = inject(TaskServices);
      toastService = inject(ToastService);
      changeDetection = inject(ChangeDetectorRef);
      spinner = inject(NgxSpinnerService);
      router = inject(Router);
      route = inject(ActivatedRoute);
      article = "";
      isActiveChangeTitle = false;
      filterOption = "Progress";
      isStart = false;
      stylesForButton = {
        width: "200px",
        height: "100px",
        "background-color": "#a245b4ff",
        border: "solid",
        "border-radius": "8px",
        "border-color": "white",
        color: "white"
      };
      description = model();
      filter = signal("Progress");
      selectedItemId = signal(0);
      isLoading = signal(true);
      tasks = signal(null);
      ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
          this.isLoading.set(false);
        }, 500);
        this.listService.getTasks((list) => {
          console.log(list);
          this.tasks.set(list);
        });
      }
      addTask() {
        if (this.article === null || this.article?.trim() === "") {
          return;
        }
        if (!this.tasks()) {
          return;
        }
        this.tasks.update((arr) => this.listService.addNewEl(arr, {
          id: this.tasks().length,
          title: this.article,
          description: this.description(),
          status: "Progress"
        }));
        this.toastService.addToast(`Add task: ${this.article}`);
      }
      changeToDoListItemOnPreview(id) {
        console.log(this.tasks()?.find((x) => x.id == id));
        this.router.navigate(["tasks/", id]);
      }
      clickOnRadioButton() {
        console.log(this.filterOption);
        this.filter.set(this.filterOption);
      }
    }, __name(_a, "ToDoList"), __publicField(_a, "propDecorators", {
      description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }, { type: Output, args: ["descriptionChange"] }]
    }), _a);
    ToDoList = __decorate([
      Component({
        selector: "app-to-do-list",
        imports: [
          FormsModule,
          ToDoListItemComponent,
          ToDoButtonComponent,
          MatInputModule,
          MatFormFieldModule,
          MatRadioModule,
          NgxSpinnerModule,
          CommonModule,
          EnterControl,
          ScrollingModule
        ],
        providers: [
          Router
        ],
        template: to_do_list_default,
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        styles: [to_do_list_default2]
      })
    ], ToDoList);
  }
});

// src/directives/enter-control-directive/enter-control.ts
var _a2, EnterControl;
var init_enter_control = __esm({
  "src/directives/enter-control-directive/enter-control.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_to_do_list3();
    EnterControl = (_a2 = class {
      parentEl = inject(ToDoList);
      textarea = inject(ElementRef);
      OnKeyDownEnter() {
        this.parentEl.addTask();
        this.parentEl.article = "";
        this.textarea.nativeElement["value"] = "";
      }
    }, __name(_a2, "EnterControl"), __publicField(_a2, "propDecorators", {
      OnKeyDownEnter: [{ type: HostListener, args: ["window:keydown.enter"] }]
    }), _a2);
    EnterControl = __decorate([
      Directive({
        selector: "[appEnterControl]"
      })
    ], EnterControl);
  }
});

export {
  EnterControl,
  init_enter_control,
  ToDoList,
  init_to_do_list3 as init_to_do_list
};
/*! Bundled license information:

@angular/animations/fesm2022/private_export.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.3.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-KQWJS3B6.js.map

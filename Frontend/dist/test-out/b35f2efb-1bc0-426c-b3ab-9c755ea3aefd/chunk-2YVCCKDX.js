import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  __decorate,
  __esm,
  __name,
  __publicField,
  init_core,
  init_tslib_es6,
  inject,
  input
} from "./chunk-A5WWXBEI.js";

// src/directives/my-tooltip/my-tooltip.ts
var _a, MyTooltip;
var init_my_tooltip = __esm({
  "src/directives/my-tooltip/my-tooltip.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_core();
    MyTooltip = (_a = class {
      renderer = inject(Renderer2);
      host = inject(ElementRef);
      hasEffectRun = false;
      tooltip = this.renderer.createElement("div");
      wrapper = this.renderer.createElement("div");
      content = this.renderer.createElement("p");
      myTooltipText = "";
      styles = input();
      verticalOffset = input();
      ngOnChanges(changes) {
        if (changes["myTooltipText"] && changes["myTooltipText"].isFirstChange()) {
          return;
        }
        if (changes["myTooltipText"] && changes["myTooltipText"].currentValue !== changes["myTooltipText"].previousValue) {
          this.clearContent();
          this.createContent();
        }
      }
      ngOnInit() {
        this.createTooltip();
        this.setStyle();
        this.hideEl();
      }
      show() {
        this.showEl();
      }
      hide() {
        this.hideEl();
      }
      showEl() {
        setTimeout(() => {
          this.renderer.setStyle(this.tooltip, "opacity", "1");
        }, 10);
      }
      hideEl() {
        this.renderer.setStyle(this.tooltip, "opacity", "0");
      }
      clearContent() {
        this.renderer.removeChild(this.tooltip, this.content);
        this.renderer.setProperty(this.content, "innerHTML", "");
      }
      createTooltip() {
        this.renderer.appendChild(this.host.nativeElement, this.wrapper);
        this.renderer.appendChild(this.wrapper, this.tooltip);
        this.createContent();
      }
      createContent() {
        this.renderer.appendChild(this.content, this.renderer.createText(this.myTooltipText));
        this.renderer.appendChild(this.tooltip, this.content);
      }
      setStyle() {
        this.setStyleWrapper();
        this.setStyleToolTip();
        this.setStyleContent();
      }
      setStyleToolTip() {
        this.renderer.setStyle(this.tooltip, "background-color", this.styles()?.["background-color"]);
        this.renderer.setStyle(this.tooltip, "border", this.styles()?.border);
        this.renderer.setStyle(this.tooltip, "opacity", this.styles()?.opacity);
        this.renderer.setStyle(this.tooltip, "border-radius", this.styles()?.["border-radius"]);
        this.renderer.setStyle(this.tooltip, "transition", "opacity 0.3s ease-in-out");
      }
      setStyleWrapper() {
        this.renderer.setStyle(this.wrapper, "position", "absolute");
        this.renderer.setStyle(this.wrapper, "z-index", "1000");
        this.setPosition();
      }
      setStyleContent() {
        this.renderer.setStyle(this.content, "color", this.styles()?.color);
        this.renderer.setStyle(this.content, "font-size", this.styles()?.["font-size"]);
        this.renderer.setStyle(this.content, "font-family", this.styles()?.["font-family"]);
        this.renderer.setStyle(this.content, "font-weight", this.styles()?.["font-weight"]);
      }
      setPosition() {
        const hostRect = this.host.nativeElement.getBoundingClientRect();
        const tooltipRect = this.wrapper.getBoundingClientRect();
        const top = hostRect.top - window.scrollY - tooltipRect.height + this.verticalOffset();
        const left = hostRect.left - window.scrollX + hostRect.width / 2 - tooltipRect.width / 2;
        this.renderer.setStyle(this.wrapper, "top", `${top}px`);
        this.renderer.setStyle(this.wrapper, "left", `${left}px`);
      }
    }, __name(_a, "MyTooltip"), __publicField(_a, "propDecorators", {
      myTooltipText: [{ type: Input }],
      styles: [{ type: Input, args: [{ isSignal: true, alias: "styles", required: false, transform: void 0 }] }],
      verticalOffset: [{ type: Input, args: [{ isSignal: true, alias: "verticalOffset", required: false, transform: void 0 }] }],
      show: [{ type: HostListener, args: ["mouseenter"] }],
      hide: [{ type: HostListener, args: ["mouseleave"] }]
    }), _a);
    MyTooltip = __decorate([
      Directive({
        selector: "[appMyTooltip]"
      })
    ], MyTooltip);
  }
});

export {
  MyTooltip,
  init_my_tooltip
};
//# sourceMappingURL=chunk-2YVCCKDX.js.map

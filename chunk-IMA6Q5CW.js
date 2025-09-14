import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/animations-package/auto-height.component.ts
var _AutoHeightComponent = class _AutoHeightComponent {
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
};
__name(_AutoHeightComponent, "AutoHeightComponent");
__publicField(_AutoHeightComponent, "\u0275fac", /* @__PURE__ */ __name(function AutoHeightComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoHeightComponent)();
}, "AutoHeightComponent_Factory"));
__publicField(_AutoHeightComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoHeightComponent, selectors: [["app-open-close"]], decls: 8, vars: 2, consts: [["type", "button", 3, "click"], [1, "container"], [1, "content"]], template: /* @__PURE__ */ __name(function AutoHeightComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Auto Height Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function AutoHeightComponent_Template_button_click_2_listener() {
      return ctx.toggle();
    }, "AutoHeightComponent_Template_button_click_2_listener"));
    \u0275\u0275text(3, "Toggle Open/Close");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 1)(5, "div", 2)(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("@openClose", ctx.isOpen() ? true : false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("The box is now ", ctx.isOpen() ? "Open" : "Closed", "!");
  }
}, "AutoHeightComponent_Template"), styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 1em;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: blue;\n  color: #ebebeb;\n}\n/*# sourceMappingURL=auto-height.component.css.map */"], data: { animation: [
  trigger("openClose", [
    state("true", style({ height: "*" })),
    state("false", style({ height: "0px" })),
    transition("false <=> true", animate(1e3))
  ])
] } }));
var AutoHeightComponent = _AutoHeightComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoHeightComponent, [{
    type: Component,
    args: [{ selector: "app-open-close", animations: [
      trigger("openClose", [
        state("true", style({ height: "*" })),
        state("false", style({ height: "0px" })),
        transition("false <=> true", animate(1e3))
      ])
    ], template: `<!-- #docplaster -->
<h2>Auto Height Example</h2>

<button type="button" (click)="toggle()">Toggle Open/Close</button>

<div class="container" [@openClose]="isOpen() ? true : false">
  <div class="content">
    <p>The box is now {{ isOpen() ? 'Open' : 'Closed' }}!</p>
  </div>
</div>
`, styles: ["/* src/content/examples/animations/src/app/animations-package/auto-height.component.css */\n.container {\n  display: block;\n  overflow: hidden;\n}\n.container .content {\n  padding: 20px;\n  margin-top: 1em;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: blue;\n  color: #ebebeb;\n}\n/*# sourceMappingURL=auto-height.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoHeightComponent, { className: "AutoHeightComponent", filePath: "src/content/examples/animations/src/app/animations-package/auto-height.component.ts", lineNumber: 16 });
})();
export {
  AutoHeightComponent
};
//# sourceMappingURL=chunk-IMA6Q5CW.js.map

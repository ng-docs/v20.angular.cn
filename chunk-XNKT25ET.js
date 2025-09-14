import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/native-css/auto-height.component.ts
var _AutoHeightComponent = class _AutoHeightComponent {
  isOpen = signal(true, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
};
__name(_AutoHeightComponent, "AutoHeightComponent");
__publicField(_AutoHeightComponent, "\u0275fac", /* @__PURE__ */ __name(function AutoHeightComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoHeightComponent)();
}, "AutoHeightComponent_Factory"));
__publicField(_AutoHeightComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoHeightComponent, selectors: [["app-auto-height"]], decls: 8, vars: 3, consts: [["type", "button", 3, "click"], [1, "container"], [1, "content"]], template: /* @__PURE__ */ __name(function AutoHeightComponent_Template(rf, ctx) {
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
    \u0275\u0275classProp("open", ctx.isOpen());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("The box is now ", ctx.isOpen() ? "Open" : "Closed", "!");
  }
}, "AutoHeightComponent_Template"), styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 0fr;\n  overflow: hidden;\n  transition: grid-template-rows 1s;\n}\n.container.open[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-height: 0;\n  transition: visibility 1s;\n  padding: 0 20px;\n  visibility: hidden;\n  margin-top: 1em;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: blue;\n  color: #ebebeb;\n  overflow: hidden;\n}\n.container.open[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=auto-height.component.css.map */"] }));
var AutoHeightComponent = _AutoHeightComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoHeightComponent, [{
    type: Component,
    args: [{ selector: "app-auto-height", template: `<!-- #docplaster -->
<h2>Auto Height Example</h2>

<button type="button" (click)="toggle()">Toggle Open/Close</button>

<div class="container" [class.open]="isOpen()">
  <div class="content">
    <p>The box is now {{ isOpen() ? 'Open' : 'Closed' }}!</p>
  </div>
</div>
`, styles: ["/* src/content/examples/animations/src/app/native-css/auto-height.component.css */\n.container {\n  display: grid;\n  grid-template-rows: 0fr;\n  overflow: hidden;\n  transition: grid-template-rows 1s;\n}\n.container.open {\n  grid-template-rows: 1fr;\n}\n.container .content {\n  min-height: 0;\n  transition: visibility 1s;\n  padding: 0 20px;\n  visibility: hidden;\n  margin-top: 1em;\n  font-weight: bold;\n  font-size: 20px;\n  background-color: blue;\n  color: #ebebeb;\n  overflow: hidden;\n}\n.container.open .content {\n  visibility: visible;\n}\n/*# sourceMappingURL=auto-height.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoHeightComponent, { className: "AutoHeightComponent", filePath: "src/content/examples/animations/src/app/native-css/auto-height.component.ts", lineNumber: 9 });
})();
export {
  AutoHeightComponent
};
//# sourceMappingURL=chunk-XNKT25ET.js.map

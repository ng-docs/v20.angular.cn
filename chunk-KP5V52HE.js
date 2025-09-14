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

// src/content/examples/animations/src/app/native-css/open-close.component.ts
var _OpenCloseComponent = class _OpenCloseComponent {
  isOpen = signal(true, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
};
__name(_OpenCloseComponent, "OpenCloseComponent");
__publicField(_OpenCloseComponent, "\u0275fac", /* @__PURE__ */ __name(function OpenCloseComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenCloseComponent)();
}, "OpenCloseComponent_Factory"));
__publicField(_OpenCloseComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpenCloseComponent, selectors: [["app-open-close"]], decls: 7, vars: 3, consts: [["type", "button", 3, "click"], [1, "open-close-container"]], template: /* @__PURE__ */ __name(function OpenCloseComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Open / Close Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function OpenCloseComponent_Template_button_click_2_listener() {
      return ctx.toggle();
    }, "OpenCloseComponent_Template_button_click_2_listener"));
    \u0275\u0275text(3, "Toggle Open/Close");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 1)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx.isOpen());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("The box is now ", ctx.isOpen() ? "Open" : "Closed", "!");
  }
}, "OpenCloseComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  height: 100px;\n  opacity: 0.8;\n  background-color: blue;\n  color: #ebebeb;\n  transition-property:\n    height,\n    opacity,\n    background-color,\n    color;\n  transition-duration: 1s;\n}\n.open[_ngcontent-%COMP%] {\n  transition-duration: 0.5s;\n  height: 200px;\n  opacity: 1;\n  background-color: yellow;\n  color: #000000;\n}\n/*# sourceMappingURL=open-close.component.css.map */"] }));
var OpenCloseComponent = _OpenCloseComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenCloseComponent, [{
    type: Component,
    args: [{ selector: "app-open-close", template: `<!-- #docplaster -->
<h2>Open / Close Example</h2>

<button type="button" (click)="toggle()">Toggle Open/Close</button>

<div class="open-close-container" [class.open]="isOpen()">
  <p>The box is now {{ isOpen() ? 'Open' : 'Closed' }}!</p>
</div>
`, styles: ["/* src/content/examples/animations/src/app/native-css/open-close.component.css */\n:host {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  height: 100px;\n  opacity: 0.8;\n  background-color: blue;\n  color: #ebebeb;\n  transition-property:\n    height,\n    opacity,\n    background-color,\n    color;\n  transition-duration: 1s;\n}\n.open {\n  transition-duration: 0.5s;\n  height: 200px;\n  opacity: 1;\n  background-color: yellow;\n  color: #000000;\n}\n/*# sourceMappingURL=open-close.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpenCloseComponent, { className: "OpenCloseComponent", filePath: "src/content/examples/animations/src/app/native-css/open-close.component.ts", lineNumber: 9 });
})();
export {
  OpenCloseComponent
};
//# sourceMappingURL=chunk-KP5V52HE.js.map

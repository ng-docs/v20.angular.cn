import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/native-css/insert.component.ts
function InsertComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275animateEnter("enter-animation");
    \u0275\u0275domElementStart(1, "p");
    \u0275\u0275text(2, "The box is inserted");
    \u0275\u0275domElementEnd()();
  }
}
__name(InsertComponent_Conditional_5_Template, "InsertComponent_Conditional_5_Template");
var _InsertComponent = class _InsertComponent {
  isShown = signal(false, ...ngDevMode ? [{ debugName: "isShown" }] : []);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
};
__name(_InsertComponent, "InsertComponent");
__publicField(_InsertComponent, "\u0275fac", /* @__PURE__ */ __name(function InsertComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InsertComponent)();
}, "InsertComponent_Factory"));
__publicField(_InsertComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InsertComponent, selectors: [["app-insert"]], decls: 6, vars: 1, consts: [["type", "button", 3, "click"], [1, "insert-container"]], template: /* @__PURE__ */ __name(function InsertComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Insert Element Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "nav")(3, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function InsertComponent_Template_button_click_3_listener() {
      return ctx.toggle();
    }, "InsertComponent_Template_button_click_3_listener"));
    \u0275\u0275text(4, "Toggle Element");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(5, InsertComponent_Conditional_5_Template, 3, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isShown() ? 5 : -1);
  }
}, "InsertComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.insert-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n}\n.enter-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slide-fade 1s;\n}\n@keyframes _ngcontent-%COMP%_slide-fade {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=insert.component.css.map */"] }));
var InsertComponent = _InsertComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InsertComponent, [{
    type: Component,
    args: [{ selector: "app-insert", template: '<!-- #docplaster -->\n<h2>Insert Element Example</h2>\n\n<nav>\n  <button type="button" (click)="toggle()">Toggle Element</button>\n</nav>\n\n@if (isShown()) {\n  <div class="insert-container" animate.enter="enter-animation">\n    <p>The box is inserted</p>\n  </div>\n}\n', styles: ["/* src/content/examples/animations/src/app/native-css/insert.component.css */\n:host {\n  display: block;\n}\n.insert-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n}\n.enter-animation {\n  animation: slide-fade 1s;\n}\n@keyframes slide-fade {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=insert.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InsertComponent, { className: "InsertComponent", filePath: "src/content/examples/animations/src/app/native-css/insert.component.ts", lineNumber: 9 });
})();
export {
  InsertComponent
};
//# sourceMappingURL=chunk-LDMDHHEQ.js.map

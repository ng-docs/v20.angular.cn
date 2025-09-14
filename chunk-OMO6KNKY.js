import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵanimateLeave,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/enter-and-leave/leave.ts
function Leave_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275animateLeave("leaving");
    \u0275\u0275domElementStart(1, "p");
    \u0275\u0275text(2, "Goodbye");
    \u0275\u0275domElementEnd()();
  }
}
__name(Leave_Conditional_6_Template, "Leave_Conditional_6_Template");
var _Leave = class _Leave {
  isShown = signal(false, ...ngDevMode ? [{ debugName: "isShown" }] : []);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
};
__name(_Leave, "Leave");
__publicField(_Leave, "\u0275fac", /* @__PURE__ */ __name(function Leave_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Leave)();
}, "Leave_Factory"));
__publicField(_Leave, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Leave, selectors: [["app-leave"]], decls: 7, vars: 1, consts: [["type", "button", 3, "click"], [1, "leave-container"]], template: /* @__PURE__ */ __name(function Leave_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2")(1, "code");
    \u0275\u0275text(2, "animate.leave");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function Leave_Template_button_click_4_listener() {
      return ctx.toggle();
    }, "Leave_Template_button_click_4_listener"));
    \u0275\u0275text(5, "Toggle Element");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, Leave_Conditional_6_Template, 3, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.isShown() ? 6 : -1);
  }
}, "Leave_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 200px;\n}\n.leave-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 200ms ease-in;\n}\n@starting-style {\n  .leave-container[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n}\n.leaving[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 500ms ease-out, transform 500ms ease-out;\n}\n/*# sourceMappingURL=leave.css.map */"] }));
var Leave = _Leave;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Leave, [{
    type: Component,
    args: [{ selector: "app-leave", template: '<!-- #docplaster -->\n<h2><code>animate.leave</code> Example</h2>\n\n<button type="button" (click)="toggle()">Toggle Element</button>\n\n@if (isShown()) {\n  <div class="leave-container" animate.leave="leaving">\n    <p>Goodbye</p>\n  </div>\n}\n', styles: ["/* src/content/examples/animations/src/app/enter-and-leave/leave.css */\n:host {\n  display: block;\n  height: 200px;\n}\n.leave-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 200ms ease-in;\n}\n@starting-style {\n  .leave-container {\n    opacity: 0;\n  }\n}\n.leaving {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 500ms ease-out, transform 500ms ease-out;\n}\n/*# sourceMappingURL=leave.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Leave, { className: "Leave", filePath: "src/content/examples/animations/src/app/enter-and-leave/leave.ts", lineNumber: 9 });
})();
export {
  Leave
};
//# sourceMappingURL=chunk-OMO6KNKY.js.map

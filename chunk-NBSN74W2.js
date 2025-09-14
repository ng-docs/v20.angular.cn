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
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/enter-and-leave/leave-binding.ts
function LeaveBinding_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275animateLeave(/* @__PURE__ */ __name(function LeaveBinding_Conditional_6_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.farewell());
    }, "LeaveBinding_Conditional_6_Template_animateleave_cb"));
    \u0275\u0275domElementStart(1, "p");
    \u0275\u0275text(2, "Goodbye");
    \u0275\u0275domElementEnd()();
  }
}
__name(LeaveBinding_Conditional_6_Template, "LeaveBinding_Conditional_6_Template");
var _LeaveBinding = class _LeaveBinding {
  isShown = signal(false, ...ngDevMode ? [{ debugName: "isShown" }] : []);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
  farewell = signal("leaving", ...ngDevMode ? [{ debugName: "farewell" }] : []);
};
__name(_LeaveBinding, "LeaveBinding");
__publicField(_LeaveBinding, "\u0275fac", /* @__PURE__ */ __name(function LeaveBinding_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeaveBinding)();
}, "LeaveBinding_Factory"));
__publicField(_LeaveBinding, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveBinding, selectors: [["app-leave-binding"]], decls: 7, vars: 1, consts: [["type", "button", 3, "click"], [1, "leave-container"]], template: /* @__PURE__ */ __name(function LeaveBinding_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2")(1, "code");
    \u0275\u0275text(2, "animate.leave");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Binding Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function LeaveBinding_Template_button_click_4_listener() {
      return ctx.toggle();
    }, "LeaveBinding_Template_button_click_4_listener"));
    \u0275\u0275text(5, "Toggle Element");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, LeaveBinding_Conditional_6_Template, 3, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.isShown() ? 6 : -1);
  }
}, "LeaveBinding_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 200px;\n}\n.leave-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 200ms ease-in;\n}\n@starting-style {\n  .leave-container[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n}\n.leaving[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 500ms ease-out, transform 500ms ease-out;\n}\n/*# sourceMappingURL=leave-binding.css.map */"] }));
var LeaveBinding = _LeaveBinding;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveBinding, [{
    type: Component,
    args: [{ selector: "app-leave-binding", template: '<!-- #docplaster -->\n<h2><code>animate.leave</code> Binding Example</h2>\n\n<button type="button" (click)="toggle()">Toggle Element</button>\n\n@if (isShown()) {\n  <div class="leave-container" [animate.leave]="farewell()">\n    <p>Goodbye</p>\n  </div>\n}\n', styles: ["/* src/content/examples/animations/src/app/enter-and-leave/leave-binding.css */\n:host {\n  display: block;\n  height: 200px;\n}\n.leave-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 200ms ease-in;\n}\n@starting-style {\n  .leave-container {\n    opacity: 0;\n  }\n}\n.leaving {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 500ms ease-out, transform 500ms ease-out;\n}\n/*# sourceMappingURL=leave-binding.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveBinding, { className: "LeaveBinding", filePath: "src/content/examples/animations/src/app/enter-and-leave/leave-binding.ts", lineNumber: 9 });
})();
export {
  LeaveBinding
};
//# sourceMappingURL=chunk-NBSN74W2.js.map

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
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/enter-and-leave/enter-binding.ts
function EnterBinding_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275animateEnter(/* @__PURE__ */ __name(function EnterBinding_Conditional_6_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enterClass());
    }, "EnterBinding_Conditional_6_Template_animateenter_cb"));
    \u0275\u0275domElementStart(1, "p");
    \u0275\u0275text(2, "The box is entering.");
    \u0275\u0275domElementEnd()();
  }
}
__name(EnterBinding_Conditional_6_Template, "EnterBinding_Conditional_6_Template");
var _EnterBinding = class _EnterBinding {
  isShown = signal(false, ...ngDevMode ? [{ debugName: "isShown" }] : []);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
  enterClass = signal("enter-animation", ...ngDevMode ? [{ debugName: "enterClass" }] : []);
};
__name(_EnterBinding, "EnterBinding");
__publicField(_EnterBinding, "\u0275fac", /* @__PURE__ */ __name(function EnterBinding_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EnterBinding)();
}, "EnterBinding_Factory"));
__publicField(_EnterBinding, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnterBinding, selectors: [["app-enter-binding"]], decls: 7, vars: 1, consts: [["type", "button", 3, "click"], [1, "enter-container"]], template: /* @__PURE__ */ __name(function EnterBinding_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2")(1, "code");
    \u0275\u0275text(2, "animate.enter");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Binding Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function EnterBinding_Template_button_click_4_listener() {
      return ctx.toggle();
    }, "EnterBinding_Template_button_click_4_listener"));
    \u0275\u0275text(5, "Toggle Element");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, EnterBinding_Conditional_6_Template, 3, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.isShown() ? 6 : -1);
  }
}, "EnterBinding_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 200px;\n}\n.enter-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n}\n.enter-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slide-fade 1s;\n}\n@keyframes _ngcontent-%COMP%_slide-fade {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=enter-binding.css.map */"] }));
var EnterBinding = _EnterBinding;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnterBinding, [{
    type: Component,
    args: [{ selector: "app-enter-binding", template: '<!-- #docplaster -->\n<h2><code>animate.enter</code> Binding Example</h2>\n\n<button type="button" (click)="toggle()">Toggle Element</button>\n\n@if (isShown()) {\n  <div class="enter-container" [animate.enter]="enterClass()">\n    <p>The box is entering.</p>\n  </div>\n}\n', styles: ["/* src/content/examples/animations/src/app/enter-and-leave/enter-binding.css */\n:host {\n  display: block;\n  height: 200px;\n}\n.enter-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n}\n.enter-animation {\n  animation: slide-fade 1s;\n}\n@keyframes slide-fade {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=enter-binding.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnterBinding, { className: "EnterBinding", filePath: "src/content/examples/animations/src/app/enter-and-leave/enter-binding.ts", lineNumber: 9 });
})();
export {
  EnterBinding
};
//# sourceMappingURL=chunk-DZBH5ZTO.js.map

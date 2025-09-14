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

// src/content/examples/animations/src/app/native-css/remove.component.ts
function RemoveComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275animateLeave("deleting");
    \u0275\u0275domElementStart(1, "p");
    \u0275\u0275text(2, "The box is inserted");
    \u0275\u0275domElementEnd()();
  }
}
__name(RemoveComponent_Conditional_5_Template, "RemoveComponent_Conditional_5_Template");
var _RemoveComponent = class _RemoveComponent {
  isShown = signal(false, ...ngDevMode ? [{ debugName: "isShown" }] : []);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
};
__name(_RemoveComponent, "RemoveComponent");
__publicField(_RemoveComponent, "\u0275fac", /* @__PURE__ */ __name(function RemoveComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RemoveComponent)();
}, "RemoveComponent_Factory"));
__publicField(_RemoveComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoveComponent, selectors: [["app-remove"]], decls: 6, vars: 1, consts: [["type", "button", 3, "click"], [1, "insert-container"]], template: /* @__PURE__ */ __name(function RemoveComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Remove Element Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "nav")(3, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function RemoveComponent_Template_button_click_3_listener() {
      return ctx.toggle();
    }, "RemoveComponent_Template_button_click_3_listener"));
    \u0275\u0275text(4, "Toggle Element");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(5, RemoveComponent_Conditional_5_Template, 3, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isShown() ? 5 : -1);
  }
}, "RemoveComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.insert-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 200ms ease-in;\n}\n@starting-style {\n  .insert-container[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n}\n.deleting[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 500ms ease-out, transform 500ms ease-out;\n}\n/*# sourceMappingURL=remove.component.css.map */"] }));
var RemoveComponent = _RemoveComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoveComponent, [{
    type: Component,
    args: [{ selector: "app-remove", template: '<!-- #docplaster -->\n<h2>Remove Element Example</h2>\n\n<nav>\n  <button type="button" (click)="toggle()">Toggle Element</button>\n</nav>\n\n\n@if (isShown()) {\n  <div class="insert-container" animate.leave="deleting">\n    <p>The box is inserted</p>\n  </div>\n}\n', styles: ["/* src/content/examples/animations/src/app/native-css/remove.component.css */\n:host {\n  display: block;\n}\n.insert-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  font-weight: bold;\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 200ms ease-in;\n}\n@starting-style {\n  .insert-container {\n    opacity: 0;\n  }\n}\n.deleting {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 500ms ease-out, transform 500ms ease-out;\n}\n/*# sourceMappingURL=remove.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoveComponent, { className: "RemoveComponent", filePath: "src/content/examples/animations/src/app/native-css/remove.component.ts", lineNumber: 9 });
})();
export {
  RemoveComponent
};
//# sourceMappingURL=chunk-LNGXAYKW.js.map

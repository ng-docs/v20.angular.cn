import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/insert-remove.component.ts
function InsertRemoveComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "p");
    \u0275\u0275text(2, "The box is inserted");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("@myInsertRemoveTrigger", void 0);
  }
}
__name(InsertRemoveComponent_Conditional_5_Template, "InsertRemoveComponent_Conditional_5_Template");
var _InsertRemoveComponent = class _InsertRemoveComponent {
  isShown = false;
  toggle() {
    this.isShown = !this.isShown;
  }
};
__name(_InsertRemoveComponent, "InsertRemoveComponent");
__publicField(_InsertRemoveComponent, "\u0275fac", /* @__PURE__ */ __name(function InsertRemoveComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InsertRemoveComponent)();
}, "InsertRemoveComponent_Factory"));
__publicField(_InsertRemoveComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InsertRemoveComponent, selectors: [["app-insert-remove"]], decls: 6, vars: 1, consts: [["type", "button", 3, "click"], [1, "insert-remove-container"]], template: /* @__PURE__ */ __name(function InsertRemoveComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Insert/Remove");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "nav")(3, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function InsertRemoveComponent_Template_button_click_3_listener() {
      return ctx.toggle();
    }, "InsertRemoveComponent_Template_button_click_3_listener"));
    \u0275\u0275text(4, "Toggle Insert/Remove");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(5, InsertRemoveComponent_Conditional_5_Template, 3, 1, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isShown ? 5 : -1);
  }
}, "InsertRemoveComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.insert-remove-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=insert-remove.component.css.map */"], data: { animation: [
  // #docregion enter-leave-trigger
  trigger("myInsertRemoveTrigger", [
    transition(":enter", [style({ opacity: 0 }), animate("100ms", style({ opacity: 1 }))]),
    transition(":leave", [animate("100ms", style({ opacity: 0 }))])
  ])
  // #enddocregion enter-leave-trigger
] } }));
var InsertRemoveComponent = _InsertRemoveComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InsertRemoveComponent, [{
    type: Component,
    args: [{ selector: "app-insert-remove", animations: [
      // #docregion enter-leave-trigger
      trigger("myInsertRemoveTrigger", [
        transition(":enter", [style({ opacity: 0 }), animate("100ms", style({ opacity: 1 }))]),
        transition(":leave", [animate("100ms", style({ opacity: 0 }))])
      ])
      // #enddocregion enter-leave-trigger
    ], template: '<!-- #docplaster -->\n\n<h2>Insert/Remove</h2>\n\n<nav>\n  <button type="button" (click)="toggle()">Toggle Insert/Remove</button>\n</nav>\n\n<!-- #docregion insert-remove-->\n@if (isShown) {\n  <div @myInsertRemoveTrigger class="insert-remove-container">\n    <p>The box is inserted</p>\n  </div>\n}\n<!-- #enddocregion insert-remove-->\n', styles: ["/* src/content/examples/animations/src/app/insert-remove.component.css */\n:host {\n  display: block;\n}\n.insert-remove-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=insert-remove.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InsertRemoveComponent, { className: "InsertRemoveComponent", filePath: "src/content/examples/animations/src/app/insert-remove.component.ts", lineNumber: 18 });
})();
export {
  InsertRemoveComponent
};
//# sourceMappingURL=chunk-S6PTC73K.js.map

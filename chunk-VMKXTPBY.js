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

// src/content/examples/animations/src/app/open-close.component.2.ts
var _OpenCloseBooleanComponent = class _OpenCloseBooleanComponent {
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
};
__name(_OpenCloseBooleanComponent, "OpenCloseBooleanComponent");
__publicField(_OpenCloseBooleanComponent, "\u0275fac", /* @__PURE__ */ __name(function OpenCloseBooleanComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenCloseBooleanComponent)();
}, "OpenCloseBooleanComponent_Factory"));
__publicField(_OpenCloseBooleanComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpenCloseBooleanComponent, selectors: [["app-open-close-boolean"]], decls: 6, vars: 2, consts: [["type", "button", 3, "click"], [1, "open-close-container"]], template: /* @__PURE__ */ __name(function OpenCloseBooleanComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "nav")(1, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function OpenCloseBooleanComponent_Template_button_click_1_listener() {
      return ctx.toggle();
    }, "OpenCloseBooleanComponent_Template_button_click_1_listener"));
    \u0275\u0275text(2, "Toggle Boolean/Close");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(3, "div", 1)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("@openClose", ctx.isOpen ? true : false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("The box is now ", ctx.isOpen ? "Open" : "Closed", "!");
  }
}, "OpenCloseBooleanComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */"], data: { animation: [
  trigger("openClose", [
    state("true", style({ height: "*" })),
    state("false", style({ height: "0px" })),
    transition("false <=> true", animate(500))
  ])
] } }));
var OpenCloseBooleanComponent = _OpenCloseBooleanComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenCloseBooleanComponent, [{
    type: Component,
    args: [{ selector: "app-open-close-boolean", animations: [
      trigger("openClose", [
        state("true", style({ height: "*" })),
        state("false", style({ height: "0px" })),
        transition("false <=> true", animate(500))
      ])
    ], template: `<!-- #docplaster -->
<nav>
  <button type="button" (click)="toggle()">Toggle Boolean/Close</button>
</nav>

<!-- #docregion trigger-boolean -->
<div [@openClose]="isOpen ? true : false" class="open-close-container">
<!-- #enddocregion trigger-boolean -->
  <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>
<!-- #docregion trigger-boolean -->
</div>
<!-- #enddocregion trigger-boolean -->
`, styles: ["/* src/content/examples/animations/src/app/open-close.component.css */\n:host {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpenCloseBooleanComponent, { className: "OpenCloseBooleanComponent", filePath: "src/content/examples/animations/src/app/open-close.component.2.ts", lineNumber: 18 });
})();
export {
  OpenCloseBooleanComponent
};
//# sourceMappingURL=chunk-VMKXTPBY.js.map

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

// src/content/examples/animations/src/app/animations-package/increment-decrement.component.ts
var _IncrementDecrementComponent = class _IncrementDecrementComponent {
  num = signal(0, ...ngDevMode ? [{ debugName: "num" }] : []);
  modify(n) {
    this.num.update((v) => v += n);
  }
};
__name(_IncrementDecrementComponent, "IncrementDecrementComponent");
__publicField(_IncrementDecrementComponent, "\u0275fac", /* @__PURE__ */ __name(function IncrementDecrementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IncrementDecrementComponent)();
}, "IncrementDecrementComponent_Factory"));
__publicField(_IncrementDecrementComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncrementDecrementComponent, selectors: [["app-increment-decrement"]], decls: 10, vars: 2, consts: [[1, "controls"], ["type", "button", 3, "click"]], template: /* @__PURE__ */ __name(function IncrementDecrementComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h3");
    \u0275\u0275text(1, "Increment and Decrement Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section")(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 0)(6, "button", 1);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function IncrementDecrementComponent_Template_button_click_6_listener() {
      return ctx.modify(1);
    }, "IncrementDecrementComponent_Template_button_click_6_listener"));
    \u0275\u0275text(7, "+");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "button", 1);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function IncrementDecrementComponent_Template_button_click_8_listener() {
      return ctx.modify(-1);
    }, "IncrementDecrementComponent_Template_button_click_8_listener"));
    \u0275\u0275text(9, "-");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("@incrementAnimation", ctx.num());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Number ", ctx.num());
  }
}, "IncrementDecrementComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  font-size: 32px;\n  margin: 20px;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\np[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 2rem 0;\n  text-transform: uppercase;\n}\n.controls[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\nbutton[_ngcontent-%COMP%] {\n  font: inherit;\n  border: 0;\n  background: lightgray;\n  width: 50px;\n  border-radius: 10px;\n}\nbutton[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=increment-decrement.component.css.map */"], data: { animation: [
  trigger("incrementAnimation", [
    transition(":increment", [
      animate("300ms ease-out", style({ color: "green", transform: "scale(1.3, 1.2)" }))
    ]),
    transition(":decrement", [
      animate("300ms ease-out", style({ color: "red", transform: "scale(0.8, 0.9)" }))
    ])
  ])
] } }));
var IncrementDecrementComponent = _IncrementDecrementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncrementDecrementComponent, [{
    type: Component,
    args: [{ selector: "app-increment-decrement", animations: [
      trigger("incrementAnimation", [
        transition(":increment", [
          animate("300ms ease-out", style({ color: "green", transform: "scale(1.3, 1.2)" }))
        ]),
        transition(":decrement", [
          animate("300ms ease-out", style({ color: "red", transform: "scale(0.8, 0.9)" }))
        ])
      ])
    ], template: '<h3>Increment and Decrement Example</h3>\n<section>\n  <p [@incrementAnimation]="num()">Number {{ num() }}</p>\n  <div class="controls">\n    <button type="button" (click)="modify(1)">+</button>\n    <button type="button" (click)="modify(-1)">-</button>\n  </div>\n</section>\n', styles: ["/* src/content/examples/animations/src/app/animations-package/increment-decrement.component.css */\n:host {\n  display: block;\n  font-size: 32px;\n  margin: 20px;\n  text-align: center;\n}\nsection {\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\np {\n  display: inline-block;\n  margin: 2rem 0;\n  text-transform: uppercase;\n}\n.controls {\n  padding-bottom: 2rem;\n}\nbutton {\n  font: inherit;\n  border: 0;\n  background: lightgray;\n  width: 50px;\n  border-radius: 10px;\n}\nbutton + button {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=increment-decrement.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncrementDecrementComponent, { className: "IncrementDecrementComponent", filePath: "src/content/examples/animations/src/app/animations-package/increment-decrement.component.ts", lineNumber: 21 });
})();
export {
  IncrementDecrementComponent
};
//# sourceMappingURL=chunk-OJSJ7STP.js.map

import {
  transitionAnimation
} from "./chunk-TSYR54P6.js";
import {
  transition,
  trigger,
  useAnimation
} from "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/open-close.component.3.ts
var _OpenCloseBooleanComponent = class _OpenCloseBooleanComponent {
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  logging = input(false, ...ngDevMode ? [{ debugName: "logging" }] : []);
  onAnimationEvent(event) {
    if (!this.logging) {
      return;
    }
  }
};
__name(_OpenCloseBooleanComponent, "OpenCloseBooleanComponent");
__publicField(_OpenCloseBooleanComponent, "\u0275fac", /* @__PURE__ */ __name(function OpenCloseBooleanComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenCloseBooleanComponent)();
}, "OpenCloseBooleanComponent_Factory"));
__publicField(_OpenCloseBooleanComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpenCloseBooleanComponent, selectors: [["app-open-close-reusable"]], inputs: { logging: [1, "logging"] }, decls: 5, vars: 2, consts: [["type", "button", 3, "click"], [1, "open-close-container"]], template: /* @__PURE__ */ __name(function OpenCloseBooleanComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function OpenCloseBooleanComponent_Template_button_click_0_listener() {
      return ctx.toggle();
    }, "OpenCloseBooleanComponent_Template_button_click_0_listener"));
    \u0275\u0275text(1, "Toggle Open/Close");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 1);
    \u0275\u0275listener("@openClose.start", /* @__PURE__ */ __name(function OpenCloseBooleanComponent_Template_div_animation_openClose_start_2_listener($event) {
      return ctx.onAnimationEvent($event);
    }, "OpenCloseBooleanComponent_Template_div_animation_openClose_start_2_listener"))("@openClose.done", /* @__PURE__ */ __name(function OpenCloseBooleanComponent_Template_div_animation_openClose_done_2_listener($event) {
      return ctx.onAnimationEvent($event);
    }, "OpenCloseBooleanComponent_Template_div_animation_openClose_done_2_listener"));
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("@openClose", ctx.isOpen ? "open" : "closed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("The box is now ", ctx.isOpen ? "Open" : "Closed", "!");
  }
}, "OpenCloseBooleanComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */"], data: { animation: [
  trigger("openClose", [
    transition("open => closed", [
      useAnimation(transitionAnimation, {
        params: {
          height: 0,
          opacity: 1,
          backgroundColor: "red",
          time: "1s"
        }
      })
    ])
  ])
] } }));
var OpenCloseBooleanComponent = _OpenCloseBooleanComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenCloseBooleanComponent, [{
    type: Component,
    args: [{ selector: "app-open-close-reusable", animations: [
      trigger("openClose", [
        transition("open => closed", [
          useAnimation(transitionAnimation, {
            params: {
              height: 0,
              opacity: 1,
              backgroundColor: "red",
              time: "1s"
            }
          })
        ])
      ])
    ], template: `<button type="button" (click)="toggle()">Toggle Open/Close</button>

<div [@openClose]="isOpen ? 'open' : 'closed'"
  (@openClose.start)="onAnimationEvent($event)"
  (@openClose.done)="onAnimationEvent($event)"
  class="open-close-container">
  <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>
</div>
`, styles: ["/* src/content/examples/animations/src/app/open-close.component.css */\n:host {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpenCloseBooleanComponent, { className: "OpenCloseBooleanComponent", filePath: "src/content/examples/animations/src/app/open-close.component.3.ts", lineNumber: 27 });
})();
export {
  OpenCloseBooleanComponent
};
//# sourceMappingURL=chunk-VCKVZ4IL.js.map

import {
  animate,
  keyframes,
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

// src/content/examples/animations/src/app/animations-package/open-close.component.ts
var _OpenCloseComponent = class _OpenCloseComponent {
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
};
__name(_OpenCloseComponent, "OpenCloseComponent");
__publicField(_OpenCloseComponent, "\u0275fac", /* @__PURE__ */ __name(function OpenCloseComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenCloseComponent)();
}, "OpenCloseComponent_Factory"));
__publicField(_OpenCloseComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpenCloseComponent, selectors: [["app-open-close"]], decls: 6, vars: 2, consts: [["type", "button", 3, "click"], [1, "open-close-container"]], template: /* @__PURE__ */ __name(function OpenCloseComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "nav")(1, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function OpenCloseComponent_Template_button_click_1_listener() {
      return ctx.toggle();
    }, "OpenCloseComponent_Template_button_click_1_listener"));
    \u0275\u0275text(2, "Toggle Open/Close");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(3, "div", 1)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("@openClose", ctx.isOpen() ? "open" : "closed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("The box is now ", ctx.isOpen() ? "Open" : "Closed", "!");
  }
}, "OpenCloseComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */"], data: { animation: [
  trigger("openClose", [
    state("open", style({
      height: "200px",
      opacity: 1,
      backgroundColor: "yellow"
    })),
    state("closed", style({
      height: "100px",
      opacity: 0.5,
      backgroundColor: "green"
    })),
    // ...
    transition("* => *", [
      animate("1s", keyframes([
        style({ opacity: 0.1, offset: 0.1 }),
        style({ opacity: 0.6, offset: 0.2 }),
        style({ opacity: 1, offset: 0.5 }),
        style({ opacity: 0.2, offset: 0.7 })
      ]))
    ])
  ])
] } }));
var OpenCloseComponent = _OpenCloseComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenCloseComponent, [{
    type: Component,
    args: [{ selector: "app-open-close", animations: [
      trigger("openClose", [
        state("open", style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })),
        state("closed", style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green"
        })),
        // ...
        transition("* => *", [
          animate("1s", keyframes([
            style({ opacity: 0.1, offset: 0.1 }),
            style({ opacity: 0.6, offset: 0.2 }),
            style({ opacity: 1, offset: 0.5 }),
            style({ opacity: 0.2, offset: 0.7 })
          ]))
        ])
      ])
    ], template: `<!-- #docplaster -->
<nav>
  <button type="button" (click)="toggle()">Toggle Open/Close</button>
</nav>

<div [@openClose]="isOpen() ? 'open' : 'closed'" class="open-close-container">
  <p>The box is now {{ isOpen() ? 'Open' : 'Closed' }}!</p>
</div>
`, styles: ["/* src/content/examples/animations/src/app/animations-package/open-close.component.css */\n:host {\n  display: block;\n  margin-top: 1rem;\n}\n.open-close-container {\n  border: 1px solid #dddddd;\n  margin-top: 1em;\n  padding: 20px 20px 0px 20px;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=open-close.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpenCloseComponent, { className: "OpenCloseComponent", filePath: "src/content/examples/animations/src/app/animations-package/open-close.component.ts", lineNumber: 41 });
})();
export {
  OpenCloseComponent
};
//# sourceMappingURL=chunk-WFYM2QVY.js.map

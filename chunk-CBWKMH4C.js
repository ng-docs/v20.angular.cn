import {
  OpenCloseComponent
} from "./chunk-2EKQVVLY.js";
import "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/open-close-page.component.ts
var _OpenClosePageComponent = class _OpenClosePageComponent {
  logging = false;
  toggleLogging() {
    this.logging = !this.logging;
  }
};
__name(_OpenClosePageComponent, "OpenClosePageComponent");
__publicField(_OpenClosePageComponent, "\u0275fac", /* @__PURE__ */ __name(function OpenClosePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OpenClosePageComponent)();
}, "OpenClosePageComponent_Factory"));
__publicField(_OpenClosePageComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpenClosePageComponent, selectors: [["app-open-close-page"]], decls: 7, vars: 2, consts: [["type", "checkbox", "id", "log-checkbox", 3, "click", "checked"], ["for", "log-checkbox"], [3, "logging"]], template: /* @__PURE__ */ __name(function OpenClosePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "h2");
    \u0275\u0275text(2, "Open Close Component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 0);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function OpenClosePageComponent_Template_input_click_3_listener() {
      return ctx.toggleLogging();
    }, "OpenClosePageComponent_Template_input_click_3_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 1);
    \u0275\u0275text(5, "Console Log Animation Events");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-open-close", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx.logging);
    \u0275\u0275advance(3);
    \u0275\u0275property("logging", ctx.logging);
  }
}, "OpenClosePageComponent_Template"), dependencies: [OpenCloseComponent], encapsulation: 2 }));
var OpenClosePageComponent = _OpenClosePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenClosePageComponent, [{
    type: Component,
    args: [{
      selector: "app-open-close-page",
      template: `
    <section>
      <h2>Open Close Component</h2>
      <input type="checkbox" id="log-checkbox" [checked]="logging" (click)="toggleLogging()"/>
      <label for="log-checkbox">Console Log Animation Events</label>

      <app-open-close [logging]="logging"></app-open-close>
    </section>
  `,
      imports: [OpenCloseComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpenClosePageComponent, { className: "OpenClosePageComponent", filePath: "src/content/examples/animations/src/app/open-close-page.component.ts", lineNumber: 17 });
})();
export {
  OpenClosePageComponent
};
//# sourceMappingURL=chunk-CBWKMH4C.js.map

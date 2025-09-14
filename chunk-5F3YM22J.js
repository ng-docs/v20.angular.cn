import {
  OpenCloseChildComponent
} from "./chunk-BFADVANU.js";
import "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/toggle-animations-page.component.ts
var _ToggleAnimationsPageComponent = class _ToggleAnimationsPageComponent {
};
__name(_ToggleAnimationsPageComponent, "ToggleAnimationsPageComponent");
__publicField(_ToggleAnimationsPageComponent, "\u0275fac", /* @__PURE__ */ __name(function ToggleAnimationsPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToggleAnimationsPageComponent)();
}, "ToggleAnimationsPageComponent_Factory"));
__publicField(_ToggleAnimationsPageComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToggleAnimationsPageComponent, selectors: [["app-toggle-animations-child-page"]], decls: 4, vars: 0, template: /* @__PURE__ */ __name(function ToggleAnimationsPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "h2");
    \u0275\u0275text(2, "Toggle Animations");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-open-close-toggle");
    \u0275\u0275elementEnd();
  }
}, "ToggleAnimationsPageComponent_Template"), dependencies: [OpenCloseChildComponent], encapsulation: 2 }));
var ToggleAnimationsPageComponent = _ToggleAnimationsPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleAnimationsPageComponent, [{
    type: Component,
    args: [{
      selector: "app-toggle-animations-child-page",
      template: `
    <section>
      <h2>Toggle Animations</h2>

      <app-open-close-toggle></app-open-close-toggle>
    </section>
  `,
      imports: [OpenCloseChildComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToggleAnimationsPageComponent, { className: "ToggleAnimationsPageComponent", filePath: "src/content/examples/animations/src/app/toggle-animations-page.component.ts", lineNumber: 15 });
})();
export {
  ToggleAnimationsPageComponent
};
//# sourceMappingURL=chunk-5F3YM22J.js.map

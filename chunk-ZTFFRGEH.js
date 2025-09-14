import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/about.component.ts
var _AboutComponent = class _AboutComponent {
};
__name(_AboutComponent, "AboutComponent");
__publicField(_AboutComponent, "\u0275fac", /* @__PURE__ */ __name(function AboutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutComponent)();
}, "AboutComponent_Factory"));
__publicField(_AboutComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: /* @__PURE__ */ __name(function AboutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, " Angular's animations library makes it easy to define and apply animation effects such as page and list transitions.\n");
    \u0275\u0275domElementEnd();
  }
}, "AboutComponent_Template"), encapsulation: 2 }));
var AboutComponent = _AboutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", template: "<p>\n  Angular's animations library makes it easy to define and apply animation effects such as page and list transitions.\n</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/content/examples/animations/src/app/about.component.ts", lineNumber: 8 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-ZTFFRGEH.js.map

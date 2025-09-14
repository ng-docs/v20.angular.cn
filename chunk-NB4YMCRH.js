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

// src/content/examples/animations/src/app/home.component.ts
var _HomeComponent = class _HomeComponent {
};
__name(_HomeComponent, "HomeComponent");
__publicField(_HomeComponent, "\u0275fac", /* @__PURE__ */ __name(function HomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeComponent)();
}, "HomeComponent_Factory"));
__publicField(_HomeComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: /* @__PURE__ */ __name(function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, " Welcome to Animations in Angular!\n");
    \u0275\u0275domElementEnd();
  }
}, "HomeComponent_Template"), encapsulation: 2 }));
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", template: "<p>\n  Welcome to Animations in Angular!\n</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/content/examples/animations/src/app/home.component.ts", lineNumber: 8 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-NB4YMCRH.js.map

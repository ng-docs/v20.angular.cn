import {
  BypassSecurityComponent
} from "./chunk-7X7OWWT7.js";
import {
  InnerHtmlBindingComponent
} from "./chunk-O4D43ZXP.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-OV2CFM4K.js";
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

// src/content/examples/security/src/app/app.component.ts
var _AppComponent = class _AppComponent {
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "\u0275fac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Security");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "app-inner-html-binding")(3, "app-bypass-security");
  }
}, "AppComponent_Template"), dependencies: [BypassSecurityComponent, InnerHtmlBindingComponent], encapsulation: 2 }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      template: `
    <h1>Security</h1>
    <app-inner-html-binding></app-inner-html-binding>
    <app-bypass-security></app-bypass-security>
  `,
      imports: [BypassSecurityComponent, InnerHtmlBindingComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/security/src/app/app.component.ts", lineNumber: 15 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-HBODEFXN.js.map

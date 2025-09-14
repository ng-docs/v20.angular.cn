import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/security/src/app/inner-html-binding.component.ts
var _InnerHtmlBindingComponent = class _InnerHtmlBindingComponent {
  // For example, a user/attacker-controlled value from a URL.
  htmlSnippet = 'Template <script>alert("0wned")<\/script> <b>Syntax</b>';
};
__name(_InnerHtmlBindingComponent, "InnerHtmlBindingComponent");
__publicField(_InnerHtmlBindingComponent, "\u0275fac", /* @__PURE__ */ __name(function InnerHtmlBindingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InnerHtmlBindingComponent)();
}, "InnerHtmlBindingComponent_Factory"));
__publicField(_InnerHtmlBindingComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InnerHtmlBindingComponent, selectors: [["app-inner-html-binding"]], decls: 9, vars: 2, consts: [[1, "e2e-inner-html-interpolated"], [1, "e2e-inner-html-bound", 3, "innerHTML"]], template: /* @__PURE__ */ __name(function InnerHtmlBindingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h3");
    \u0275\u0275text(1, "Binding innerHTML");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Bound value:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 0);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7, "Result of binding to innerHTML:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(8, "p", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.htmlSnippet);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("innerHTML", ctx.htmlSnippet, \u0275\u0275sanitizeHtml);
  }
}, "InnerHtmlBindingComponent_Template"), encapsulation: 2 }));
var InnerHtmlBindingComponent = _InnerHtmlBindingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InnerHtmlBindingComponent, [{
    type: Component,
    args: [{ selector: "app-inner-html-binding", template: '<!-- #docregion -->\n<h3>Binding innerHTML</h3>\n<p>Bound value:</p>\n<p class="e2e-inner-html-interpolated">{{ htmlSnippet }}</p>\n<p>Result of binding to innerHTML:</p>\n<p class="e2e-inner-html-bound" [innerHTML]="htmlSnippet"></p>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InnerHtmlBindingComponent, { className: "InnerHtmlBindingComponent", filePath: "src/content/examples/security/src/app/inner-html-binding.component.ts", lineNumber: 9 });
})();

export {
  InnerHtmlBindingComponent
};
//# sourceMappingURL=chunk-O4D43ZXP.js.map

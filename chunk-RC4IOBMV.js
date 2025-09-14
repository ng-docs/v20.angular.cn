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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/hello-world/src/app/app.component.ts
var _HelloWorldComponent = class _HelloWorldComponent {
  message = "Hello Angular World!";
};
__name(_HelloWorldComponent, "HelloWorldComponent");
__publicField(_HelloWorldComponent, "\u0275fac", /* @__PURE__ */ __name(function HelloWorldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelloWorldComponent)();
}, "HelloWorldComponent_Factory"));
__publicField(_HelloWorldComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelloWorldComponent, selectors: [["hello-world"]], decls: 2, vars: 1, template: /* @__PURE__ */ __name(function HelloWorldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.message);
  }
}, "HelloWorldComponent_Template"), styles: ["\n\nh1[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #8514f5,\n      #a029f1,\n      #bc33ed 50%,\n      #f637e3);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var HelloWorldComponent = _HelloWorldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelloWorldComponent, [{
    type: Component,
    args: [{ selector: "hello-world", template: "<h1>{{ message }}</h1>\n", styles: ["/* src/content/examples/hello-world/src/app/app.component.css */\nh1 {\n  background-image:\n    linear-gradient(\n      to right,\n      #8514f5,\n      #a029f1,\n      #bc33ed 50%,\n      #f637e3);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelloWorldComponent, { className: "HelloWorldComponent", filePath: "src/content/examples/hello-world/src/app/app.component.ts", lineNumber: 8 });
})();
export {
  HelloWorldComponent
};
//# sourceMappingURL=chunk-RC4IOBMV.js.map

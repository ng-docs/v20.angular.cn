import {
  Component,
  __name,
  __publicField,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵstyleProp
} from "./chunk-2CX5BJWG.js";

// src/content/examples/accessibility/src/app/progress-bar.component.ts
var _ExampleProgressbarComponent = class _ExampleProgressbarComponent {
  /** Current value of the progressbar. */
  value = input(0, ...ngDevMode ? [{ debugName: "value" }] : []);
};
__name(_ExampleProgressbarComponent, "ExampleProgressbarComponent");
__publicField(_ExampleProgressbarComponent, "\u0275fac", /* @__PURE__ */ __name(function ExampleProgressbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleProgressbarComponent)();
}, "ExampleProgressbarComponent_Factory"));
__publicField(_ExampleProgressbarComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleProgressbarComponent, selectors: [["app-example-progressbar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100"], hostVars: 1, hostBindings: /* @__PURE__ */ __name(function ExampleProgressbarComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275attribute("aria-valuenow", ctx.value);
  }
}, "ExampleProgressbarComponent_HostBindings"), inputs: { value: [1, "value"] }, decls: 1, vars: 2, consts: [[1, "bar"]], template: /* @__PURE__ */ __name(function ExampleProgressbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275styleProp("width", ctx.value(), "%");
  }
}, "ExampleProgressbarComponent_Template"), styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 300px;\n  height: 25px;\n  border: 1px solid black;\n  margin-top: 16px;\n}\n.bar[_ngcontent-%COMP%] {\n  background: blue;\n  height: 100%;\n}\n/*# sourceMappingURL=progress-bar.component.css.map */"] }));
var ExampleProgressbarComponent = _ExampleProgressbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleProgressbarComponent, [{
    type: Component,
    args: [{ selector: "app-example-progressbar", template: '<div class="bar" [style.width.%]="value()"></div>', host: {
      // Sets the role for this component to "progressbar"
      role: "progressbar",
      // Sets the minimum and maximum values for the progressbar role.
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      // Binding that updates the current value of the progressbar.
      "[attr.aria-valuenow]": "value"
    }, styles: ["/* src/content/examples/accessibility/src/app/progress-bar.component.css */\n:host {\n  display: block;\n  width: 300px;\n  height: 25px;\n  border: 1px solid black;\n  margin-top: 16px;\n}\n.bar {\n  background: blue;\n  height: 100%;\n}\n/*# sourceMappingURL=progress-bar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleProgressbarComponent, { className: "ExampleProgressbarComponent", filePath: "src/content/examples/accessibility/src/app/progress-bar.component.ts", lineNumber: 24 });
})();

export {
  ExampleProgressbarComponent
};
//# sourceMappingURL=chunk-4D2BACS2.js.map

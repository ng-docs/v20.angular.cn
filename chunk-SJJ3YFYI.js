import {
  DatePipe
} from "./chunk-OV2CFM4K.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/birthday.component.ts
var _BirthdayComponent = class _BirthdayComponent {
  birthday = new Date(1988, 3, 15);
};
__name(_BirthdayComponent, "BirthdayComponent");
// April 15, 1988 -- since month parameter is zero-based
__publicField(_BirthdayComponent, "\u0275fac", /* @__PURE__ */ __name(function BirthdayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BirthdayComponent)();
}, "BirthdayComponent_Factory"));
__publicField(_BirthdayComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BirthdayComponent, selectors: [["app-birthday"]], decls: 3, vars: 3, template: /* @__PURE__ */ __name(function BirthdayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("The hero's birthday is ", \u0275\u0275pipeBind1(2, 1, ctx.birthday));
  }
}, "BirthdayComponent_Template"), dependencies: [DatePipe], encapsulation: 2 }));
var BirthdayComponent = _BirthdayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BirthdayComponent, [{
    type: Component,
    args: [{ selector: "app-birthday", imports: [DatePipe], template: "<p>The hero's birthday is {{ birthday | date }}</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BirthdayComponent, { className: "BirthdayComponent", filePath: "src/content/examples/pipes/src/app/birthday.component.ts", lineNumber: 9 });
})();

export {
  BirthdayComponent
};
//# sourceMappingURL=chunk-SJJ3YFYI.js.map

import {
  DatePipe,
  UpperCasePipe
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
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/birthday-pipe-chaining.component.ts
var _BirthdayPipeChainingComponent = class _BirthdayPipeChainingComponent {
  birthday = new Date(1988, 3, 15);
};
__name(_BirthdayPipeChainingComponent, "BirthdayPipeChainingComponent");
// April 15, 1988 -- since month parameter is zero-based
__publicField(_BirthdayPipeChainingComponent, "\u0275fac", /* @__PURE__ */ __name(function BirthdayPipeChainingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BirthdayPipeChainingComponent)();
}, "BirthdayPipeChainingComponent_Factory"));
__publicField(_BirthdayPipeChainingComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BirthdayPipeChainingComponent, selectors: [["app-birthday-pipe-chaining"]], decls: 8, vars: 11, template: /* @__PURE__ */ __name(function BirthdayPipeChainingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "uppercase");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" The chained hero's uppercase birthday is ", \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, ctx.birthday)), "\n");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(` The chained hero's uppercase birthday in "fullDate" format is `, \u0275\u0275pipeBind1(7, 9, \u0275\u0275pipeBind2(6, 6, ctx.birthday, "fullDate")), "\n");
  }
}, "BirthdayPipeChainingComponent_Template"), dependencies: [DatePipe, UpperCasePipe], encapsulation: 2 }));
var BirthdayPipeChainingComponent = _BirthdayPipeChainingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BirthdayPipeChainingComponent, [{
    type: Component,
    args: [{ selector: "app-birthday-pipe-chaining", imports: [DatePipe, UpperCasePipe], template: `<p>
  The chained hero's uppercase birthday is
  {{ birthday | date | uppercase }}
</p>

<p>
  The chained hero's uppercase birthday in "fullDate" format is
  {{ birthday | date:'fullDate' | uppercase }}
</p>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BirthdayPipeChainingComponent, { className: "BirthdayPipeChainingComponent", filePath: "src/content/examples/pipes/src/app/birthday-pipe-chaining.component.ts", lineNumber: 9 });
})();

export {
  BirthdayPipeChainingComponent
};
//# sourceMappingURL=chunk-N5XE7LWZ.js.map

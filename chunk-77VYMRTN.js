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
  ɵɵdomListener,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/birthday-formatting.component.ts
var _BirthdayFormattingComponent = class _BirthdayFormattingComponent {
  birthday = new Date(1988, 3, 15);
  // April 15, 1988 -- since month parameter is zero-based
  toggle = true;
  get format() {
    return this.toggle ? "mediumDate" : "fullDate";
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
};
__name(_BirthdayFormattingComponent, "BirthdayFormattingComponent");
__publicField(_BirthdayFormattingComponent, "\u0275fac", /* @__PURE__ */ __name(function BirthdayFormattingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BirthdayFormattingComponent)();
}, "BirthdayFormattingComponent_Factory"));
__publicField(_BirthdayFormattingComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BirthdayFormattingComponent, selectors: [["app-birthday-formatting"]], decls: 8, vars: 9, consts: [["type", "button", 3, "click"]], template: /* @__PURE__ */ __name(function BirthdayFormattingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function BirthdayFormattingComponent_Template_button_click_6_listener() {
      return ctx.toggleFormat();
    }, "BirthdayFormattingComponent_Template_button_click_6_listener"));
    \u0275\u0275text(7, "Toggle Format");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("The hero's birthday is ", \u0275\u0275pipeBind2(2, 3, ctx.birthday, "shortDate"), ' in the "shortDate" format.');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("The hero's birthday is ", \u0275\u0275pipeBind2(5, 6, ctx.birthday, ctx.format), ' in "', ctx.format, '" format. Click the toggle button to change formats.');
  }
}, "BirthdayFormattingComponent_Template"), dependencies: [DatePipe], encapsulation: 2 }));
var BirthdayFormattingComponent = _BirthdayFormattingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BirthdayFormattingComponent, [{
    type: Component,
    args: [{ selector: "app-birthday-formatting", imports: [DatePipe], template: `<p>The hero's birthday is {{ birthday | date:"shortDate" }} in the "shortDate" format.</p>

<p>The hero's birthday is {{ birthday | date:format }} in "{{ format }}" format.
  Click the toggle button to change formats.</p>

<button type="button" (click)="toggleFormat()">Toggle Format</button>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BirthdayFormattingComponent, { className: "BirthdayFormattingComponent", filePath: "src/content/examples/pipes/src/app/birthday-formatting.component.ts", lineNumber: 9 });
})();

export {
  BirthdayFormattingComponent
};
//# sourceMappingURL=chunk-77VYMRTN.js.map

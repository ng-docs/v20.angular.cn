import {
  Directive,
  ElementRef,
  HostListener,
  __name,
  __publicField,
  inject,
  input,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-2CX5BJWG.js";

// src/content/examples/attribute-directives/src/app/highlight.directive.ts
var _HighlightDirective = class _HighlightDirective {
  el = inject(ElementRef);
  // #docregion defaultColor
  defaultColor = input("", ...ngDevMode ? [{ debugName: "defaultColor" }] : []);
  // #enddocregion defaultColor
  appHighlight = input("", ...ngDevMode ? [{ debugName: "appHighlight" }] : []);
  // #docregion mouse-enter
  onMouseEnter() {
    this.highlight(this.appHighlight() || this.defaultColor() || "red");
  }
  // #enddocregion mouse-enter
  onMouseLeave() {
    this.highlight("");
  }
  highlight(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
};
__name(_HighlightDirective, "HighlightDirective");
__publicField(_HighlightDirective, "\u0275fac", /* @__PURE__ */ __name(function HighlightDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightDirective)();
}, "HighlightDirective_Factory"));
__publicField(_HighlightDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HighlightDirective, selectors: [["", "appHighlight", ""]], hostBindings: /* @__PURE__ */ __name(function HighlightDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mouseenter", /* @__PURE__ */ __name(function HighlightDirective_mouseenter_HostBindingHandler() {
      return ctx.onMouseEnter();
    }, "HighlightDirective_mouseenter_HostBindingHandler"))("mouseleave", /* @__PURE__ */ __name(function HighlightDirective_mouseleave_HostBindingHandler() {
      return ctx.onMouseLeave();
    }, "HighlightDirective_mouseleave_HostBindingHandler"));
  }
}, "HighlightDirective_HostBindings"), inputs: { defaultColor: [1, "defaultColor"], appHighlight: [1, "appHighlight"] } }));
var HighlightDirective = _HighlightDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightDirective, [{
    type: Directive,
    args: [{
      selector: "[appHighlight]"
    }]
  }], null, { onMouseEnter: [{
    type: HostListener,
    args: ["mouseenter"]
  }], onMouseLeave: [{
    type: HostListener,
    args: ["mouseleave"]
  }] });
})();

export {
  HighlightDirective
};
//# sourceMappingURL=chunk-YVDGH5GJ.js.map

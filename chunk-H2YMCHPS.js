import {
  Component,
  __name,
  __publicField,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/structural-directives/src/app/hero-switch.components.ts
var _HappyHeroComponent = class _HappyHeroComponent {
  hero = input.required(...ngDevMode ? [{ debugName: "hero" }] : []);
};
__name(_HappyHeroComponent, "HappyHeroComponent");
__publicField(_HappyHeroComponent, "\u0275fac", /* @__PURE__ */ __name(function HappyHeroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HappyHeroComponent)();
}, "HappyHeroComponent_Factory"));
__publicField(_HappyHeroComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HappyHeroComponent, selectors: [["app-happy-hero"]], inputs: { hero: [1, "hero"] }, decls: 1, vars: 1, template: /* @__PURE__ */ __name(function HappyHeroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1("Wow. You like ", ctx.hero().name, ". What a happy hero ... just like you.");
  }
}, "HappyHeroComponent_Template"), encapsulation: 2 }));
var HappyHeroComponent = _HappyHeroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HappyHeroComponent, [{
    type: Component,
    args: [{
      selector: "app-happy-hero",
      template: "Wow. You like {{hero().name}}. What a happy hero ... just like you."
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HappyHeroComponent, { className: "HappyHeroComponent", filePath: "src/content/examples/structural-directives/src/app/hero-switch.components.ts", lineNumber: 9 });
})();
var _SadHeroComponent = class _SadHeroComponent {
  hero = input.required(...ngDevMode ? [{ debugName: "hero" }] : []);
};
__name(_SadHeroComponent, "SadHeroComponent");
__publicField(_SadHeroComponent, "\u0275fac", /* @__PURE__ */ __name(function SadHeroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SadHeroComponent)();
}, "SadHeroComponent_Factory"));
__publicField(_SadHeroComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SadHeroComponent, selectors: [["app-sad-hero"]], inputs: { hero: [1, "hero"] }, decls: 1, vars: 1, template: /* @__PURE__ */ __name(function SadHeroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1("You like ", ctx.hero().name, "? Such a sad hero. Are you sad too?");
  }
}, "SadHeroComponent_Template"), encapsulation: 2 }));
var SadHeroComponent = _SadHeroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SadHeroComponent, [{
    type: Component,
    args: [{
      selector: "app-sad-hero",
      template: "You like {{hero().name}}? Such a sad hero. Are you sad too?"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SadHeroComponent, { className: "SadHeroComponent", filePath: "src/content/examples/structural-directives/src/app/hero-switch.components.ts", lineNumber: 17 });
})();
var _ConfusedHeroComponent = class _ConfusedHeroComponent {
  hero = input.required(...ngDevMode ? [{ debugName: "hero" }] : []);
};
__name(_ConfusedHeroComponent, "ConfusedHeroComponent");
__publicField(_ConfusedHeroComponent, "\u0275fac", /* @__PURE__ */ __name(function ConfusedHeroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfusedHeroComponent)();
}, "ConfusedHeroComponent_Factory"));
__publicField(_ConfusedHeroComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfusedHeroComponent, selectors: [["app-confused-hero"]], inputs: { hero: [1, "hero"] }, decls: 1, vars: 1, template: /* @__PURE__ */ __name(function ConfusedHeroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1("Are you as confused as ", ctx.hero().name, "?");
  }
}, "ConfusedHeroComponent_Template"), encapsulation: 2 }));
var ConfusedHeroComponent = _ConfusedHeroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfusedHeroComponent, [{
    type: Component,
    args: [{
      selector: "app-confused-hero",
      template: "Are you as confused as {{hero().name}}?"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfusedHeroComponent, { className: "ConfusedHeroComponent", filePath: "src/content/examples/structural-directives/src/app/hero-switch.components.ts", lineNumber: 25 });
})();
var _UnknownHeroComponent = class _UnknownHeroComponent {
  hero = input.required(...ngDevMode ? [{ debugName: "hero" }] : []);
  message = computed(() => {
    const heroName = this.hero()?.name;
    return heroName ? `${heroName} is strange and mysterious.` : "Are you feeling indecisive?";
  }, ...ngDevMode ? [{ debugName: "message" }] : []);
};
__name(_UnknownHeroComponent, "UnknownHeroComponent");
__publicField(_UnknownHeroComponent, "\u0275fac", /* @__PURE__ */ __name(function UnknownHeroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UnknownHeroComponent)();
}, "UnknownHeroComponent_Factory"));
__publicField(_UnknownHeroComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnknownHeroComponent, selectors: [["app-unknown-hero"]], inputs: { hero: [1, "hero"] }, decls: 1, vars: 1, template: /* @__PURE__ */ __name(function UnknownHeroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(ctx.message());
  }
}, "UnknownHeroComponent_Template"), encapsulation: 2 }));
var UnknownHeroComponent = _UnknownHeroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnknownHeroComponent, [{
    type: Component,
    args: [{
      selector: "app-unknown-hero",
      template: "{{message()}}"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnknownHeroComponent, { className: "UnknownHeroComponent", filePath: "src/content/examples/structural-directives/src/app/hero-switch.components.ts", lineNumber: 33 });
})();
var heroSwitchComponents = [
  HappyHeroComponent,
  SadHeroComponent,
  ConfusedHeroComponent,
  UnknownHeroComponent
];

export {
  HappyHeroComponent,
  SadHeroComponent,
  ConfusedHeroComponent,
  UnknownHeroComponent,
  heroSwitchComponents
};
//# sourceMappingURL=chunk-H2YMCHPS.js.map

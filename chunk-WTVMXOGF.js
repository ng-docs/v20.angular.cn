import {
  Component,
  Pipe,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/exponential-strength.pipe.ts
var _ExponentialStrengthPipe = class _ExponentialStrengthPipe {
  transform(value, exponent = 1) {
    return Math.pow(value, exponent);
  }
};
__name(_ExponentialStrengthPipe, "ExponentialStrengthPipe");
__publicField(_ExponentialStrengthPipe, "\u0275fac", /* @__PURE__ */ __name(function ExponentialStrengthPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExponentialStrengthPipe)();
}, "ExponentialStrengthPipe_Factory"));
__publicField(_ExponentialStrengthPipe, "\u0275pipe", /* @__PURE__ */ \u0275\u0275definePipe({ name: "exponentialStrength", type: _ExponentialStrengthPipe, pure: true }));
var ExponentialStrengthPipe = _ExponentialStrengthPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExponentialStrengthPipe, [{
    type: Pipe,
    args: [{
      name: "exponentialStrength"
    }]
  }], null, null);
})();

// src/content/examples/pipes/src/app/power-booster.component.ts
var _PowerBoosterComponent = class _PowerBoosterComponent {
};
__name(_PowerBoosterComponent, "PowerBoosterComponent");
__publicField(_PowerBoosterComponent, "\u0275fac", /* @__PURE__ */ __name(function PowerBoosterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PowerBoosterComponent)();
}, "PowerBoosterComponent_Factory"));
__publicField(_PowerBoosterComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PowerBoosterComponent, selectors: [["app-power-booster"]], decls: 5, vars: 4, template: /* @__PURE__ */ __name(function PowerBoosterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Power Booster");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "exponentialStrength");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Super power boost: ", \u0275\u0275pipeBind2(4, 1, 2, 10));
  }
}, "PowerBoosterComponent_Template"), dependencies: [ExponentialStrengthPipe], encapsulation: 2 }));
var PowerBoosterComponent = _PowerBoosterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBoosterComponent, [{
    type: Component,
    args: [{
      selector: "app-power-booster",
      template: `
    <h2>Power Booster</h2>
    <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  `,
      imports: [ExponentialStrengthPipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PowerBoosterComponent, { className: "PowerBoosterComponent", filePath: "src/content/examples/pipes/src/app/power-booster.component.ts", lineNumber: 12 });
})();

export {
  PowerBoosterComponent
};
//# sourceMappingURL=chunk-WTVMXOGF.js.map

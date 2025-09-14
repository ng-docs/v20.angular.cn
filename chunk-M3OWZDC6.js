import {
  JsonPipe
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  Directive,
  TemplateRef,
  ViewContainerRef,
  __name,
  __publicField,
  effect,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/structural-directives/src/app/if-loaded.directive.ts
var _IfLoadedDirective = class _IfLoadedDirective {
  viewContainerRef;
  templateRef;
  isViewCreated = false;
  state = input.required(...ngDevMode ? [{ debugName: "state", alias: "appIfLoaded" }] : [{ alias: "appIfLoaded" }]);
  constructor(viewContainerRef, templateRef) {
    this.viewContainerRef = viewContainerRef;
    this.templateRef = templateRef;
    effect(() => {
      if (!this.isViewCreated && this.state().type === "loaded") {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.isViewCreated = true;
      } else if (this.isViewCreated && this.state().type !== "loaded") {
        this.viewContainerRef.clear();
        this.isViewCreated = false;
      }
    });
  }
  static ngTemplateGuard_appIfLoaded(dir, state) {
    return true;
  }
};
__name(_IfLoadedDirective, "IfLoadedDirective");
__publicField(_IfLoadedDirective, "\u0275fac", /* @__PURE__ */ __name(function IfLoadedDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IfLoadedDirective)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(TemplateRef));
}, "IfLoadedDirective_Factory"));
__publicField(_IfLoadedDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({ type: _IfLoadedDirective, selectors: [["", "appIfLoaded", ""]], inputs: { state: [1, "appIfLoaded", "state"] } }));
var IfLoadedDirective = _IfLoadedDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IfLoadedDirective, [{
    type: Directive,
    args: [{
      selector: "[appIfLoaded]"
    }]
  }], () => [{ type: ViewContainerRef }, { type: TemplateRef }], null);
})();

// src/content/examples/structural-directives/src/app/hero.ts
var heroes = [
  { id: 1, name: "Dr. Nice", emotion: "happy" },
  { id: 2, name: "RubberMan", emotion: "sad" },
  { id: 3, name: "Windstorm", emotion: "confused" },
  { id: 4, name: "Magneta" }
];

// src/content/examples/structural-directives/src/app/hero.component.ts
function HeroComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.heroLoadingState.data));
  }
}
__name(HeroComponent_p_2_Template, "HeroComponent_p_2_Template");
var _HeroComponent = class _HeroComponent {
  heroLoadingState = { type: "loading" };
  onLoadHero() {
    this.heroLoadingState = { type: "loaded", data: heroes[0] };
  }
};
__name(_HeroComponent, "HeroComponent");
__publicField(_HeroComponent, "\u0275fac", /* @__PURE__ */ __name(function HeroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeroComponent)();
}, "HeroComponent_Factory"));
__publicField(_HeroComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], decls: 3, vars: 1, consts: [[3, "click"], [4, "appIfLoaded"]], template: /* @__PURE__ */ __name(function HeroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function HeroComponent_Template_button_click_0_listener() {
      return ctx.onLoadHero();
    }, "HeroComponent_Template_button_click_0_listener"));
    \u0275\u0275text(1, "Load Hero");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, HeroComponent_p_2_Template, 3, 3, "p", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("appIfLoaded", ctx.heroLoadingState);
  }
}, "HeroComponent_Template"), dependencies: [IfLoadedDirective, JsonPipe], encapsulation: 2 }));
var HeroComponent = _HeroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{
      selector: "app-hero",
      template: `
    <button (click)="onLoadHero()">Load Hero</button>
    <p *appIfLoaded="heroLoadingState">{{ heroLoadingState.data | json }}</p>
  `,
      imports: [IfLoadedDirective, JsonPipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/content/examples/structural-directives/src/app/hero.component.ts", lineNumber: 17 });
})();

export {
  heroes,
  HeroComponent
};
//# sourceMappingURL=chunk-M3OWZDC6.js.map

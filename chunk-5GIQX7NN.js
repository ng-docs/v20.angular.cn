import {
  HeroListEnterLeaveComponent
} from "./chunk-VIZ2PULT.js";
import {
  HEROES
} from "./chunk-LMTCVBF2.js";
import "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/hero-list-enter-leave-page.component.ts
var _HeroListEnterLeavePageComponent = class _HeroListEnterLeavePageComponent {
  heroes = HEROES.slice();
  onRemove(id) {
    this.heroes = this.heroes.filter((hero) => hero.id !== id);
  }
};
__name(_HeroListEnterLeavePageComponent, "HeroListEnterLeavePageComponent");
__publicField(_HeroListEnterLeavePageComponent, "\u0275fac", /* @__PURE__ */ __name(function HeroListEnterLeavePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeroListEnterLeavePageComponent)();
}, "HeroListEnterLeavePageComponent_Factory"));
__publicField(_HeroListEnterLeavePageComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroListEnterLeavePageComponent, selectors: [["app-hero-list-enter-leave-page"]], decls: 4, vars: 1, consts: [[3, "remove", "heroes"]], template: /* @__PURE__ */ __name(function HeroListEnterLeavePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "h2");
    \u0275\u0275text(2, "Enter/Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-hero-list-enter-leave", 0);
    \u0275\u0275listener("remove", /* @__PURE__ */ __name(function HeroListEnterLeavePageComponent_Template_app_hero_list_enter_leave_remove_3_listener($event) {
      return ctx.onRemove($event);
    }, "HeroListEnterLeavePageComponent_Template_app_hero_list_enter_leave_remove_3_listener"));
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("heroes", ctx.heroes);
  }
}, "HeroListEnterLeavePageComponent_Template"), dependencies: [HeroListEnterLeaveComponent], encapsulation: 2 }));
var HeroListEnterLeavePageComponent = _HeroListEnterLeavePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroListEnterLeavePageComponent, [{
    type: Component,
    args: [{
      selector: "app-hero-list-enter-leave-page",
      template: `
    <section>
      <h2>Enter/Leave</h2>

      <app-hero-list-enter-leave [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-enter-leave>
    </section>
  `,
      imports: [HeroListEnterLeaveComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroListEnterLeavePageComponent, { className: "HeroListEnterLeavePageComponent", filePath: "src/content/examples/animations/src/app/hero-list-enter-leave-page.component.ts", lineNumber: 16 });
})();
export {
  HeroListEnterLeavePageComponent
};
//# sourceMappingURL=chunk-5GIQX7NN.js.map

import {
  HeroListGroupsComponent
} from "./chunk-T3HVBVKN.js";
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

// src/content/examples/animations/src/app/hero-list-group-page.component.ts
var _HeroListGroupPageComponent = class _HeroListGroupPageComponent {
  heroes = HEROES.slice();
  onRemove(id) {
    this.heroes = this.heroes.filter((hero) => hero.id !== id);
  }
};
__name(_HeroListGroupPageComponent, "HeroListGroupPageComponent");
__publicField(_HeroListGroupPageComponent, "\u0275fac", /* @__PURE__ */ __name(function HeroListGroupPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeroListGroupPageComponent)();
}, "HeroListGroupPageComponent_Factory"));
__publicField(_HeroListGroupPageComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroListGroupPageComponent, selectors: [["app-hero-list-groups-page"]], decls: 4, vars: 1, consts: [[3, "remove", "heroes"]], template: /* @__PURE__ */ __name(function HeroListGroupPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "h2");
    \u0275\u0275text(2, "Hero List Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-hero-list-groups", 0);
    \u0275\u0275listener("remove", /* @__PURE__ */ __name(function HeroListGroupPageComponent_Template_app_hero_list_groups_remove_3_listener($event) {
      return ctx.onRemove($event);
    }, "HeroListGroupPageComponent_Template_app_hero_list_groups_remove_3_listener"));
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("heroes", ctx.heroes);
  }
}, "HeroListGroupPageComponent_Template"), dependencies: [HeroListGroupsComponent], encapsulation: 2 }));
var HeroListGroupPageComponent = _HeroListGroupPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroListGroupPageComponent, [{
    type: Component,
    args: [{
      selector: "app-hero-list-groups-page",
      template: `
    <section>
      <h2>Hero List Group</h2>

      <app-hero-list-groups [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-groups>
    </section>
  `,
      imports: [HeroListGroupsComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroListGroupPageComponent, { className: "HeroListGroupPageComponent", filePath: "src/content/examples/animations/src/app/hero-list-group-page.component.ts", lineNumber: 16 });
})();
export {
  HeroListGroupPageComponent
};
//# sourceMappingURL=chunk-3QODDQWN.js.map

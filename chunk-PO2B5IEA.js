import {
  HEROES
} from "./chunk-LMTCVBF2.js";
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from "./chunk-Q2QHJBJV.js";
import {
  Component,
  HostBinding,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsyntheticHostProperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/hero-list-page.component.ts
function HeroListPageComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const hero_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hero_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hero_r3.name);
  }
}
__name(HeroListPageComponent_For_8_Template, "HeroListPageComponent_For_8_Template");
var _HeroListPageComponent = class _HeroListPageComponent {
  // #enddocregion filter-animations
  animatePage = true;
  // #docregion filter-animations
  heroesTotal = -1;
  get heroes() {
    return this._heroes;
  }
  _heroes = [];
  ngOnInit() {
    this._heroes = HEROES;
  }
  updateCriteria(criteria) {
    criteria = criteria ? criteria.trim() : "";
    this._heroes = HEROES.filter((hero) => hero.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.heroes.length;
    if (this.heroesTotal !== newTotal) {
      this.heroesTotal = newTotal;
    } else if (!criteria) {
      this.heroesTotal = -1;
    }
  }
};
__name(_HeroListPageComponent, "HeroListPageComponent");
__publicField(_HeroListPageComponent, "\u0275fac", /* @__PURE__ */ __name(function HeroListPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeroListPageComponent)();
}, "HeroListPageComponent_Factory"));
__publicField(_HeroListPageComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroListPageComponent, selectors: [["app-hero-list-page"]], hostVars: 1, hostBindings: /* @__PURE__ */ __name(function HeroListPageComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275syntheticHostProperty("@pageAnimations", ctx.animatePage);
  }
}, "HeroListPageComponent_HostBindings"), decls: 9, vars: 1, consts: [["criteria", ""], ["for", "search"], ["type", "text", "id", "search", "placeholder", "Search heroes", 3, "input"], [1, "heroes"], [1, "hero"], [1, "inner"], [1, "badge"], [1, "name"]], template: /* @__PURE__ */ __name(function HeroListPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Filter/Stagger");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "label", 1);
    \u0275\u0275text(3, "Search heroes: ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "input", 2, 0);
    \u0275\u0275domListener("input", /* @__PURE__ */ __name(function HeroListPageComponent_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r1);
      const criteria_r2 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(ctx.updateCriteria(criteria_r2.value));
    }, "HeroListPageComponent_Template_input_input_4_listener"));
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "ul", 3);
    \u0275\u0275repeaterCreate(7, HeroListPageComponent_For_8_Template, 6, 2, "li", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("@filterAnimation", ctx.heroesTotal);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.heroes);
  }
}, "HeroListPageComponent_Template"), styles: ["\n\n.heroes[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n.heroes[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #EEE;\n  margin: .5em;\n  padding: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: stretch;\n}\n.heroes[_ngcontent-%COMP%]   button.inner[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: inherit;\n}\n.heroes[_ngcontent-%COMP%]   button.inner[_ngcontent-%COMP%]:hover {\n  color: #2c3a41;\n  background-color: #e6e6e6;\n  left: .1em;\n}\n.heroes[_ngcontent-%COMP%]   button.inner[_ngcontent-%COMP%]:active {\n  background-color: #525252;\n  color: #fafafa;\n}\n.heroes[_ngcontent-%COMP%]   button.inner.selected[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%]   button.inner.selected[_ngcontent-%COMP%]:hover {\n  background-color: #505050;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%]   button.inner.selected[_ngcontent-%COMP%]:active {\n  background-color: black;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #405061;\n  line-height: 1em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n.heroes[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  min-width: max-content;\n  padding: 0.5rem 0;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding-bottom: .5rem;\n}\ninput[_ngcontent-%COMP%] {\n  font-size: 100%;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=hero-list-page.component.css.map */"], data: { animation: [
  // #enddocregion filter-animations
  trigger("pageAnimations", [
    transition(":enter", [
      query(".hero", [
        style({ opacity: 0, transform: "translateY(-100px)" }),
        stagger(30, [
          animate("500ms cubic-bezier(0.35, 0, 0.25, 1)", style({ opacity: 1, transform: "none" }))
        ])
      ])
    ])
  ]),
  // #enddocregion page-animations
  // #docregion increment
  // #docregion filter-animations
  trigger("filterAnimation", [
    transition(":enter, * => 0, * => -1", []),
    transition(":increment", [
      query(":enter", [
        style({ opacity: 0, width: 0 }),
        stagger(50, [animate("300ms ease-out", style({ opacity: 1, width: "*" }))])
      ], { optional: true })
    ]),
    transition(":decrement", [
      query(":leave", [stagger(50, [animate("300ms ease-out", style({ opacity: 0, width: 0 }))])])
    ])
  ])
  // #enddocregion  increment
] } }));
var HeroListPageComponent = _HeroListPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroListPageComponent, [{
    type: Component,
    args: [{ selector: "app-hero-list-page", animations: [
      // #enddocregion filter-animations
      trigger("pageAnimations", [
        transition(":enter", [
          query(".hero", [
            style({ opacity: 0, transform: "translateY(-100px)" }),
            stagger(30, [
              animate("500ms cubic-bezier(0.35, 0, 0.25, 1)", style({ opacity: 1, transform: "none" }))
            ])
          ])
        ])
      ]),
      // #enddocregion page-animations
      // #docregion increment
      // #docregion filter-animations
      trigger("filterAnimation", [
        transition(":enter, * => 0, * => -1", []),
        transition(":increment", [
          query(":enter", [
            style({ opacity: 0, width: 0 }),
            stagger(50, [animate("300ms ease-out", style({ opacity: 1, width: "*" }))])
          ], { optional: true })
        ]),
        transition(":decrement", [
          query(":leave", [stagger(50, [animate("300ms ease-out", style({ opacity: 0, width: 0 }))])])
        ])
      ])
      // #enddocregion  increment
    ], template: '<!-- #docplaster -->\n<h2>Filter/Stagger</h2>\n\n<!-- #docregion filter-animations -->\n<label for="search">Search heroes: </label>\n<input type="text" id="search" #criteria\n       (input)="updateCriteria(criteria.value)"\n       placeholder="Search heroes">\n\n<ul class="heroes" [@filterAnimation]="heroesTotal">\n  @for (hero of heroes; track hero) {\n    <li class="hero">\n      <div class="inner">\n        <span class="badge">{{ hero.id }}</span>\n        <span class="name">{{ hero.name }}</span>\n      </div>\n    </li>\n  }\n</ul>\n<!-- #enddocregion filter-animations -->\n', styles: ["/* src/content/examples/animations/src/app/hero-list-page.component.css */\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n.heroes .inner {\n  flex: 1;\n  background-color: #EEE;\n  margin: .5em;\n  padding: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: stretch;\n}\n.heroes button.inner {\n  cursor: pointer;\n  font-size: inherit;\n}\n.heroes button.inner:hover {\n  color: #2c3a41;\n  background-color: #e6e6e6;\n  left: .1em;\n}\n.heroes button.inner:active {\n  background-color: #525252;\n  color: #fafafa;\n}\n.heroes button.inner.selected {\n  background-color: black;\n  color: white;\n}\n.heroes button.inner.selected:hover {\n  background-color: #505050;\n  color: white;\n}\n.heroes button.inner.selected:active {\n  background-color: black;\n  color: white;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #405061;\n  line-height: 1em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n.heroes .name {\n  min-width: max-content;\n  padding: 0.5rem 0;\n}\nlabel {\n  display: block;\n  padding-bottom: .5rem;\n}\ninput {\n  font-size: 100%;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=hero-list-page.component.css.map */\n"] }]
  }], null, { animatePage: [{
    type: HostBinding,
    args: ["@pageAnimations"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroListPageComponent, { className: "HeroListPageComponent", filePath: "src/content/examples/animations/src/app/hero-list-page.component.ts", lineNumber: 49 });
})();
export {
  HeroListPageComponent
};
//# sourceMappingURL=chunk-PO2B5IEA.js.map

import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-Q2QHJBJV.js";
import {
  Component,
  EventEmitter,
  Output,
  __name,
  __publicField,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/hero-list-auto.component.ts
function HeroListAutoComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li")(1, "button", 1);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function HeroListAutoComponent_For_2_Template_button_click_1_listener() {
      const hero_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeHero(hero_r2.id));
    }, "HeroListAutoComponent_For_2_Template_button_click_1_listener"));
    \u0275\u0275domElementStart(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const hero_r2 = ctx.$implicit;
    \u0275\u0275property("@shrinkOut", "in");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hero_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hero_r2.name);
  }
}
__name(HeroListAutoComponent_For_2_Template, "HeroListAutoComponent_For_2_Template");
var _HeroListAutoComponent = class _HeroListAutoComponent {
  heroes = input([], ...ngDevMode ? [{ debugName: "heroes" }] : []);
  remove = new EventEmitter();
  removeHero(id) {
    this.remove.emit(id);
  }
};
__name(_HeroListAutoComponent, "HeroListAutoComponent");
__publicField(_HeroListAutoComponent, "\u0275fac", /* @__PURE__ */ __name(function HeroListAutoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeroListAutoComponent)();
}, "HeroListAutoComponent_Factory"));
__publicField(_HeroListAutoComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroListAutoComponent, selectors: [["app-hero-list-auto"]], inputs: { heroes: [1, "heroes"] }, outputs: { remove: "remove" }, decls: 3, vars: 0, consts: [[1, "heroes"], ["type", "button", 1, "inner", 3, "click"], [1, "badge"], [1, "name"]], template: /* @__PURE__ */ __name(function HeroListAutoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 0);
    \u0275\u0275repeaterCreate(1, HeroListAutoComponent_For_2_Template, 6, 3, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.heroes());
  }
}, "HeroListAutoComponent_Template"), styles: ["\n\n.heroes[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n.heroes[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #EEE;\n  margin: .5em;\n  padding: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: stretch;\n}\n.heroes[_ngcontent-%COMP%]   button.inner[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: inherit;\n}\n.heroes[_ngcontent-%COMP%]   button.inner[_ngcontent-%COMP%]:hover {\n  color: #2c3a41;\n  background-color: #e6e6e6;\n  left: .1em;\n}\n.heroes[_ngcontent-%COMP%]   button.inner[_ngcontent-%COMP%]:active {\n  background-color: #525252;\n  color: #fafafa;\n}\n.heroes[_ngcontent-%COMP%]   button.inner.selected[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%]   button.inner.selected[_ngcontent-%COMP%]:hover {\n  background-color: #505050;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%]   button.inner.selected[_ngcontent-%COMP%]:active {\n  background-color: black;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #405061;\n  line-height: 1em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n.heroes[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  min-width: max-content;\n  padding: 0.5rem 0;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  padding-bottom: .5rem;\n}\ninput[_ngcontent-%COMP%] {\n  font-size: 100%;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=hero-list-page.component.css.map */"], data: { animation: [
  trigger("shrinkOut", [
    state("in", style({ height: "*" })),
    transition("* => void", [style({ height: "*" }), animate(250, style({ height: 0 }))])
  ])
] } }));
var HeroListAutoComponent = _HeroListAutoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroListAutoComponent, [{
    type: Component,
    args: [{ selector: "app-hero-list-auto", animations: [
      trigger("shrinkOut", [
        state("in", style({ height: "*" })),
        transition("* => void", [style({ height: "*" }), animate(250, style({ height: 0 }))])
      ])
    ], template: `<ul class="heroes">
  @for (hero of heroes(); track hero) {
    <li
      [@shrinkOut]="'in'">
      <button class="inner" type="button" (click)="removeHero(hero.id)">
        <span class="badge">{{ hero.id }}</span>
        <span class="name">{{ hero.name }}</span>
      </button>
    </li>
  }
</ul>
`, styles: ["/* src/content/examples/animations/src/app/hero-list-page.component.css */\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n.heroes .inner {\n  flex: 1;\n  background-color: #EEE;\n  margin: .5em;\n  padding: 0;\n  border-radius: 4px;\n  display: flex;\n  align-items: stretch;\n}\n.heroes button.inner {\n  cursor: pointer;\n  font-size: inherit;\n}\n.heroes button.inner:hover {\n  color: #2c3a41;\n  background-color: #e6e6e6;\n  left: .1em;\n}\n.heroes button.inner:active {\n  background-color: #525252;\n  color: #fafafa;\n}\n.heroes button.inner.selected {\n  background-color: black;\n  color: white;\n}\n.heroes button.inner.selected:hover {\n  background-color: #505050;\n  color: white;\n}\n.heroes button.inner.selected:active {\n  background-color: black;\n  color: white;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #405061;\n  line-height: 1em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n.heroes .name {\n  min-width: max-content;\n  padding: 0.5rem 0;\n}\nlabel {\n  display: block;\n  padding-bottom: .5rem;\n}\ninput {\n  font-size: 100%;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=hero-list-page.component.css.map */\n"] }]
  }], null, { remove: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroListAutoComponent, { className: "HeroListAutoComponent", filePath: "src/content/examples/animations/src/app/hero-list-auto.component.ts", lineNumber: 19 });
})();

export {
  HeroListAutoComponent
};
//# sourceMappingURL=chunk-7MEFCESB.js.map

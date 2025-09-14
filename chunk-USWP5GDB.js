import {
  HEROES
} from "./chunk-LMTCVBF2.js";
import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger
} from "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/querying.component.ts
function QueryingComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "I am a child element that enters and leaves with its parent");
    \u0275\u0275domElementEnd();
  }
}
__name(QueryingComponent_Conditional_3_Conditional_3_Template, "QueryingComponent_Conditional_3_Conditional_3_Template");
function QueryingComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "section");
    \u0275\u0275listener("@query.start", /* @__PURE__ */ __name(function QueryingComponent_Conditional_3_Template_section_animation_query_start_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDisabled = true);
    }, "QueryingComponent_Conditional_3_Template_section_animation_query_start_0_listener"))("@query.done", /* @__PURE__ */ __name(function QueryingComponent_Conditional_3_Template_section_animation_query_done_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDisabled = false);
    }, "QueryingComponent_Conditional_3_Template_section_animation_query_done_0_listener"));
    \u0275\u0275domElementStart(1, "p");
    \u0275\u0275text(2, "I am a simple child element");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, QueryingComponent_Conditional_3_Conditional_3_Template, 2, 0, "p");
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5, "I am a child element with an animation trigger");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 1)(7, "span", 2);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span", 3);
    \u0275\u0275text(10);
    \u0275\u0275domElementStart(11, "small");
    \u0275\u0275text(12, "(heroes are always animated!)");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@query", void 0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.show ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("@animateMe", void 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.hero.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.hero.name, " ");
  }
}
__name(QueryingComponent_Conditional_3_Template, "QueryingComponent_Conditional_3_Template");
var _QueryingComponent = class _QueryingComponent {
  toggleDisabled = false;
  show = true;
  hero = HEROES[0];
};
__name(_QueryingComponent, "QueryingComponent");
__publicField(_QueryingComponent, "\u0275fac", /* @__PURE__ */ __name(function QueryingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QueryingComponent)();
}, "QueryingComponent_Factory"));
__publicField(_QueryingComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QueryingComponent, selectors: [["app-querying"]], decls: 4, vars: 2, consts: [[1, "toggle", 3, "click", "disabled"], [1, "hero"], [1, "badge"], [1, "name"]], template: /* @__PURE__ */ __name(function QueryingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "nav")(1, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function QueryingComponent_Template_button_click_1_listener() {
      return ctx.show = !ctx.show;
    }, "QueryingComponent_Template_button_click_1_listener"));
    \u0275\u0275text(2, "Toggle View");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(3, QueryingComponent_Conditional_3_Template, 13, 5, "section");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx.toggleDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.show ? 3 : -1);
  }
}, "QueryingComponent_Template"), styles: ["\n\nsection[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  overflow: hidden;\n}\nsection[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  color: black;\n  background-color: #DDD;\n}\n.hero[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.5rem;\n  background-color: #3d5157;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n  align-self: stretch;\n}\n.hero[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  height: min-content;\n}\n/*# sourceMappingURL=querying.component.css.map */"], data: { animation: [
  trigger("query", [
    transition(":enter", [
      style({ height: 0 }),
      group([
        animate(500, style({ height: "*" })),
        query(":enter", [
          style({ opacity: 0, transform: "scale(0)" }),
          animate(2e3, style({ opacity: 1, transform: "scale(1)" }))
        ]),
        query(".hero", [
          style({ transform: "translateX(-100%)" }),
          animate(".7s 500ms ease-in", style({ transform: "translateX(0)" }))
        ])
      ]),
      query("@animateMe", animateChild())
    ]),
    transition(":leave", [
      style({ height: "*" }),
      query("@animateMe", animateChild()),
      group([
        animate("500ms 500ms", style({ height: "0", padding: "0" })),
        query(":leave", [
          style({ opacity: 1, transform: "scale(1)" }),
          animate("1s", style({ opacity: 0, transform: "scale(0)" }))
        ]),
        query(".hero", [
          style({ transform: "translateX(0)" }),
          animate(".7s ease-out", style({ transform: "translateX(-100%)" }))
        ])
      ])
    ])
  ]),
  trigger("animateMe", [
    transition("* <=> *", animate("500ms cubic-bezier(.68,-0.73,.26,1.65)", keyframes([
      style({ backgroundColor: "transparent", color: "*", offset: 0 }),
      style({ backgroundColor: "blue", color: "white", offset: 0.2 }),
      style({ backgroundColor: "transparent", color: "*", offset: 1 })
    ])))
  ])
] } }));
var QueryingComponent = _QueryingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QueryingComponent, [{
    type: Component,
    args: [{ selector: "app-querying", template: `
    <nav>
      <button class="toggle" (click)="show = !show" [disabled]="toggleDisabled">Toggle View</button>
    </nav>
    @if (show) {
      <section @query (@query.start)="toggleDisabled = true" (@query.done)="toggleDisabled = false">
        <p>I am a simple child element</p>
        @if (show) {
          <p>I am a child element that enters and leaves with its parent</p>
        }
        <p @animateMe>I am a child element with an animation trigger</p>
        <div class="hero">
          <span class="badge">{{ hero.id }}</span>
          <span class="name">{{ hero.name }} <small>(heroes are always animated!)</small></span>
        </div>
      </section>
    }
  `, animations: [
      trigger("query", [
        transition(":enter", [
          style({ height: 0 }),
          group([
            animate(500, style({ height: "*" })),
            query(":enter", [
              style({ opacity: 0, transform: "scale(0)" }),
              animate(2e3, style({ opacity: 1, transform: "scale(1)" }))
            ]),
            query(".hero", [
              style({ transform: "translateX(-100%)" }),
              animate(".7s 500ms ease-in", style({ transform: "translateX(0)" }))
            ])
          ]),
          query("@animateMe", animateChild())
        ]),
        transition(":leave", [
          style({ height: "*" }),
          query("@animateMe", animateChild()),
          group([
            animate("500ms 500ms", style({ height: "0", padding: "0" })),
            query(":leave", [
              style({ opacity: 1, transform: "scale(1)" }),
              animate("1s", style({ opacity: 0, transform: "scale(0)" }))
            ]),
            query(".hero", [
              style({ transform: "translateX(0)" }),
              animate(".7s ease-out", style({ transform: "translateX(-100%)" }))
            ])
          ])
        ])
      ]),
      trigger("animateMe", [
        transition("* <=> *", animate("500ms cubic-bezier(.68,-0.73,.26,1.65)", keyframes([
          style({ backgroundColor: "transparent", color: "*", offset: 0 }),
          style({ backgroundColor: "blue", color: "white", offset: 0.2 }),
          style({ backgroundColor: "transparent", color: "*", offset: 1 })
        ])))
      ])
    ], styles: ["/* src/content/examples/animations/src/app/querying.component.css */\nsection {\n  border: 1px solid black;\n  overflow: hidden;\n}\nsection > * {\n  margin: 1rem;\n}\n.hero {\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  color: black;\n  background-color: #DDD;\n}\n.hero .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.5rem;\n  background-color: #3d5157;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n  align-self: stretch;\n}\n.hero .name {\n  height: min-content;\n}\n/*# sourceMappingURL=querying.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QueryingComponent, { className: "QueryingComponent", filePath: "src/content/examples/animations/src/app/querying.component.ts", lineNumber: 84 });
})();
export {
  QueryingComponent
};
//# sourceMappingURL=chunk-USWP5GDB.js.map

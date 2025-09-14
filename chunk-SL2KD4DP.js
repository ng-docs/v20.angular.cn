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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsyntheticHostProperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/animations-package/stagger.component.ts
function StaggerComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
__name(StaggerComponent_For_4_Template, "StaggerComponent_For_4_Template");
var _StaggerComponent = class _StaggerComponent {
  items = [1, 2, 3];
};
__name(_StaggerComponent, "StaggerComponent");
__publicField(_StaggerComponent, "\u0275fac", /* @__PURE__ */ __name(function StaggerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaggerComponent)();
}, "StaggerComponent_Factory"));
__publicField(_StaggerComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaggerComponent, selectors: [["app-stagger"]], hostVars: 1, hostBindings: /* @__PURE__ */ __name(function StaggerComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275syntheticHostProperty("@pageAnimations", ctx.items);
  }
}, "StaggerComponent_HostBindings"), decls: 5, vars: 0, consts: [[1, "items"], [1, "item"]], template: /* @__PURE__ */ __name(function StaggerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2");
    \u0275\u0275text(1, "Stagger Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "ul", 0);
    \u0275\u0275repeaterCreate(3, StaggerComponent_For_4_Template, 2, 1, "li", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.items);
  }
}, "StaggerComponent_Template"), styles: ["\n\n.items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=stagger.component.css.map */"], data: { animation: [
  trigger("pageAnimations", [
    transition(":enter", [
      query(".item", [
        style({ opacity: 0, transform: "translateY(-10px)" }),
        stagger(200, [animate("500ms ease-in", style({ opacity: 1, transform: "none" }))])
      ])
    ])
  ])
] } }));
var StaggerComponent = _StaggerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaggerComponent, [{
    type: Component,
    args: [{ selector: "app-stagger", animations: [
      trigger("pageAnimations", [
        transition(":enter", [
          query(".item", [
            style({ opacity: 0, transform: "translateY(-10px)" }),
            stagger(200, [animate("500ms ease-in", style({ opacity: 1, transform: "none" }))])
          ])
        ])
      ])
    ], template: '<!-- #docplaster -->\n<h2>Stagger Example</h2>\n\n<ul class="items">\n  @for(item of items; track item) {\n    <li class="item">{{ item }}</li>\n  }\n</ul>\n\n', styles: ["/* src/content/examples/animations/src/app/animations-package/stagger.component.css */\n.items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=stagger.component.css.map */\n"] }]
  }], null, { items: [{
    type: HostBinding,
    args: ["@pageAnimations"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaggerComponent, { className: "StaggerComponent", filePath: "src/content/examples/animations/src/app/animations-package/stagger.component.ts", lineNumber: 21 });
})();
export {
  StaggerComponent
};
//# sourceMappingURL=chunk-SL2KD4DP.js.map

import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-Q2QHJBJV.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/animations/src/app/animations-package/reorder.component.ts
function ReorderComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("@itemAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
__name(ReorderComponent_For_6_Template, "ReorderComponent_For_6_Template");
var _ReorderComponent = class _ReorderComponent {
  show = signal(true, ...ngDevMode ? [{ debugName: "show" }] : []);
  items = ["stuff", "things", "cheese", "paper", "scissors", "rock"];
  randomize() {
    const randItems = [...this.items];
    const newItems = [];
    for (let i of this.items) {
      const max = this.items.length - newItems.length;
      const randNum = Math.floor(Math.random() * max);
      newItems.push(...randItems.splice(randNum, 1));
    }
    this.items = newItems;
  }
};
__name(_ReorderComponent, "ReorderComponent");
__publicField(_ReorderComponent, "\u0275fac", /* @__PURE__ */ __name(function ReorderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReorderComponent)();
}, "ReorderComponent_Factory"));
__publicField(_ReorderComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReorderComponent, selectors: [["app-reorder"]], decls: 7, vars: 0, consts: [["type", "button", 3, "click"], [1, "items"], [1, "item"]], template: /* @__PURE__ */ __name(function ReorderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "Reordering List Example");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function ReorderComponent_Template_button_click_2_listener() {
      return ctx.randomize();
    }, "ReorderComponent_Template_button_click_2_listener"));
    \u0275\u0275text(3, "Randomize");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "ul", 1);
    \u0275\u0275repeaterCreate(5, ReorderComponent_For_6_Template, 2, 2, "li", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.items);
  }
}, "ReorderComponent_Template"), styles: ["\n\n.items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=reorder.component.css.map */"], data: { animation: [
  trigger("itemAnimation", [
    transition(":enter", [
      style({ opacity: 0, transform: "translateX(-10px)" }),
      animate("300ms", style({ opacity: 1, transform: "translateX(none)" }))
    ]),
    transition(":leave", [
      style({ opacity: 1, transform: "translateX(none)" }),
      animate("300ms", style({ opacity: 0, transform: "translateX(-10px)" }))
    ])
  ])
] } }));
var ReorderComponent = _ReorderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderComponent, [{
    type: Component,
    args: [{ selector: "app-reorder", animations: [
      trigger("itemAnimation", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateX(-10px)" }),
          animate("300ms", style({ opacity: 1, transform: "translateX(none)" }))
        ]),
        transition(":leave", [
          style({ opacity: 1, transform: "translateX(none)" }),
          animate("300ms", style({ opacity: 0, transform: "translateX(-10px)" }))
        ])
      ])
    ], template: '<!-- #docplaster -->\n<h1>Reordering List Example</h1>\n<button type="button" (click)="randomize()">Randomize</button>\n\n<ul class="items">\n  @for(item of items; track item) {\n    <li @itemAnimation class="item">{{ item }}</li>\n  }\n</ul>\n', styles: ["/* src/content/examples/animations/src/app/animations-package/reorder.component.css */\n.items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=reorder.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReorderComponent, { className: "ReorderComponent", filePath: "src/content/examples/animations/src/app/animations-package/reorder.component.ts", lineNumber: 22 });
})();
export {
  ReorderComponent
};
//# sourceMappingURL=chunk-6MRNDNRH.js.map

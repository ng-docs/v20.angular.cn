import {
  Component,
  __name,
  __publicField,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/built-in-directives/src/app/item-detail/item-detail.component.ts
var _ItemDetailComponent = class _ItemDetailComponent {
  item = input(...ngDevMode ? [void 0, { debugName: "item" }] : []);
};
__name(_ItemDetailComponent, "ItemDetailComponent");
__publicField(_ItemDetailComponent, "\u0275fac", /* @__PURE__ */ __name(function ItemDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ItemDetailComponent)();
}, "ItemDetailComponent_Factory"));
__publicField(_ItemDetailComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemDetailComponent, selectors: [["app-item-detail"]], inputs: { item: [1, "item"] }, decls: 3, vars: 1, template: /* @__PURE__ */ __name(function ItemDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_0_0 = ctx.item()) == null ? null : tmp_0_0.name);
  }
}, "ItemDetailComponent_Template"), encapsulation: 2 }));
var ItemDetailComponent = _ItemDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemDetailComponent, [{
    type: Component,
    args: [{ selector: "app-item-detail", template: "<div>\n  <span>{{ item()?.name }}</span>\n</div>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemDetailComponent, { className: "ItemDetailComponent", filePath: "src/content/examples/built-in-directives/src/app/item-detail/item-detail.component.ts", lineNumber: 10 });
})();

export {
  ItemDetailComponent
};
//# sourceMappingURL=chunk-3FMQLJ57.js.map

import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IP3YSDXJ.js";
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
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2CX5BJWG.js";

// src/content/examples/forms-overview/src/app/template/favorite-color/favorite-color.component.ts
var _FavoriteColorTemplateComponent = class _FavoriteColorTemplateComponent {
  favoriteColor = "";
};
__name(_FavoriteColorTemplateComponent, "FavoriteColorTemplateComponent");
__publicField(_FavoriteColorTemplateComponent, "\u0275fac", /* @__PURE__ */ __name(function FavoriteColorTemplateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FavoriteColorTemplateComponent)();
}, "FavoriteColorTemplateComponent_Factory"));
__publicField(_FavoriteColorTemplateComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoriteColorTemplateComponent, selectors: [["app-template-favorite-color"]], decls: 2, vars: 1, consts: [["type", "text", 3, "ngModelChange", "ngModel"]], template: /* @__PURE__ */ __name(function FavoriteColorTemplateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Favorite Color: ");
    \u0275\u0275elementStart(1, "input", 0);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function FavoriteColorTemplateComponent_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.favoriteColor, $event) || (ctx.favoriteColor = $event);
      return $event;
    }, "FavoriteColorTemplateComponent_Template_input_ngModelChange_1_listener"));
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.favoriteColor);
  }
}, "FavoriteColorTemplateComponent_Template"), dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 }));
var FavoriteColorTemplateComponent = _FavoriteColorTemplateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoriteColorTemplateComponent, [{
    type: Component,
    args: [{
      selector: "app-template-favorite-color",
      template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `,
      imports: [FormsModule]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoriteColorTemplateComponent, { className: "FavoriteColorTemplateComponent", filePath: "src/content/examples/forms-overview/src/app/template/favorite-color/favorite-color.component.ts", lineNumber: 11 });
})();

export {
  FavoriteColorTemplateComponent
};
//# sourceMappingURL=chunk-XWLAOEZ6.js.map

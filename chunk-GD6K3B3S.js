import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-IP3YSDXJ.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/forms-overview/src/app/reactive/favorite-color/favorite-color.component.ts
var _FavoriteColorReactiveComponent = class _FavoriteColorReactiveComponent {
  favoriteColorControl = new FormControl("");
};
__name(_FavoriteColorReactiveComponent, "FavoriteColorReactiveComponent");
__publicField(_FavoriteColorReactiveComponent, "\u0275fac", /* @__PURE__ */ __name(function FavoriteColorReactiveComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FavoriteColorReactiveComponent)();
}, "FavoriteColorReactiveComponent_Factory"));
__publicField(_FavoriteColorReactiveComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoriteColorReactiveComponent, selectors: [["app-reactive-favorite-color"]], decls: 2, vars: 1, consts: [["type", "text", 3, "formControl"]], template: /* @__PURE__ */ __name(function FavoriteColorReactiveComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Favorite Color: ");
    \u0275\u0275element(1, "input", 0);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx.favoriteColorControl);
  }
}, "FavoriteColorReactiveComponent_Template"), dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective], encapsulation: 2 }));
var FavoriteColorReactiveComponent = _FavoriteColorReactiveComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoriteColorReactiveComponent, [{
    type: Component,
    args: [{
      selector: "app-reactive-favorite-color",
      template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `,
      imports: [ReactiveFormsModule]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoriteColorReactiveComponent, { className: "FavoriteColorReactiveComponent", filePath: "src/content/examples/forms-overview/src/app/reactive/favorite-color/favorite-color.component.ts", lineNumber: 11 });
})();

export {
  FavoriteColorReactiveComponent
};
//# sourceMappingURL=chunk-GD6K3B3S.js.map

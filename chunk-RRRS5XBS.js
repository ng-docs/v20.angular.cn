import {
  CrisisListComponent
} from "./chunk-HD5KY4DZ.js";
import {
  HeroesListComponent
} from "./chunk-LSSNOEPG.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/router-tutorial/src/app/app.component.ts
var _AppComponent = class _AppComponent {
  title = "angular-router-sample";
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "\u0275fac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 18, vars: 0, consts: [["routerLink", "/crisis-list", "routerLinkActive", "activebutton", "ariaCurrentWhenActive", "page", 1, "button"], ["routerLink", "/heroes-list", "routerLinkActive", "activebutton", "ariaCurrentWhenActive", "page", 1, "button"], [2, "display", "none"], ["routerLink", "/crisis-list", 1, "button"], ["routerLink", "/heroes-list", 1, "button"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Angular Router Sample");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "nav")(3, "a", 0);
    \u0275\u0275text(4, " Crisis Center ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " | ");
    \u0275\u0275elementStart(6, "a", 1);
    \u0275\u0275text(7, " Heroes ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "router-outlet");
    \u0275\u0275elementStart(9, "div", 2);
    \u0275\u0275element(10, "app-crisis-list")(11, "app-heroes-list");
    \u0275\u0275elementStart(12, "nav")(13, "a", 3);
    \u0275\u0275text(14, "Crisis Center");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " | ");
    \u0275\u0275elementStart(16, "a", 4);
    \u0275\u0275text(17, "Heroes");
    \u0275\u0275elementEnd()()();
  }
}, "AppComponent_Template"), dependencies: [RouterOutlet, RouterLink, RouterLinkActive, CrisisListComponent, HeroesListComponent], styles: ["\n\n.button[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 0 0 #ffffff;\n  background:\n    #ffffff linear-gradient(\n      to bottom,\n      #ffffff 5%,\n      #f6f6f6 100%);\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  font-family: Arial, sans-serif;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0 1px 0 #ffffff;\n  outline: 0;\n}\n.activebutton[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 0 0 #dcecfb;\n  background:\n    #bddbfa linear-gradient(\n      to bottom,\n      #bddbfa 5%,\n      #80b5ea 100%);\n  border: 1px solid #84bbf3;\n  color: #ffffff;\n  text-shadow: 0 1px 0 #528ecc;\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, RouterLink, RouterLinkActive, CrisisListComponent, HeroesListComponent], template: '<!-- #docplaster -->\n<!-- #docregion setup -->\n<h1>Angular Router Sample</h1>\n<!-- #enddocregion setup-->\n<!-- #docregion routeractivelink -->\n<nav>\n  <a class="button"\n     routerLink="/crisis-list"\n     routerLinkActive="activebutton"\n     ariaCurrentWhenActive="page">\n    Crisis Center\n  </a> |\n  <a class="button"\n     routerLink="/heroes-list"\n     routerLinkActive="activebutton"\n     ariaCurrentWhenActive="page">\n    Heroes\n  </a>\n</nav>\n<!-- #enddocregion routeractivelink-->\n<!-- #docregion router-outlet -->\n<router-outlet></router-outlet>\n<!-- #enddocregion router-outlet -->\n\n<div style="display: none;">\n<!-- This HTML represents the initial state for the tutorial. It is not intended to appear in the app. -->\n<!-- #docregion setup, components -->\n<app-crisis-list></app-crisis-list>\n<app-heroes-list></app-heroes-list>\n<!-- #enddocregion setup, components -->\n\n<!-- This HTML snippet is for when the user first adds the routerlink navigation. -->\n<!-- #docregion nav -->\n<nav>\n  <a class="button" routerLink="/crisis-list">Crisis Center</a> |\n  <a class="button" routerLink="/heroes-list">Heroes</a>\n</nav>\n<!-- #enddocregion nav-->\n\n\n</div>', styles: ["/* src/content/examples/router-tutorial/src/app/app.component.css */\n.button {\n  box-shadow: inset 0 1px 0 0 #ffffff;\n  background:\n    #ffffff linear-gradient(\n      to bottom,\n      #ffffff 5%,\n      #f6f6f6 100%);\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  font-family: Arial, sans-serif;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0 1px 0 #ffffff;\n  outline: 0;\n}\n.activebutton {\n  box-shadow: inset 0 1px 0 0 #dcecfb;\n  background:\n    #bddbfa linear-gradient(\n      to bottom,\n      #bddbfa 5%,\n      #80b5ea 100%);\n  border: 1px solid #84bbf3;\n  color: #ffffff;\n  text-shadow: 0 1px 0 #528ecc;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/router-tutorial/src/app/app.component.ts", lineNumber: 13 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-RRRS5XBS.js.map

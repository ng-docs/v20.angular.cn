import {
  HighlightDirective
} from "./chunk-YVDGH5GJ.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdisableBindings,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵenableBindings,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/attribute-directives/src/app/app.component.ts
var _AppComponent = class _AppComponent {
  color = "";
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "\u0275fac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 33, vars: 4, consts: [["type", "radio", "name", "colors", 3, "click"], [3, "appHighlight"], ["defaultColor", "violet", 3, "appHighlight"], ["appHighlight", "orange"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "My First Attribute Directive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Pick a highlight color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "input", 0);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_input_click_5_listener() {
      return ctx.color = "lightgreen";
    }, "AppComponent_Template_input_click_5_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "Green ");
    \u0275\u0275elementStart(7, "input", 0);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_input_click_7_listener() {
      return ctx.color = "yellow";
    }, "AppComponent_Template_input_click_7_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Yellow ");
    \u0275\u0275elementStart(9, "input", 0);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_input_click_9_listener() {
      return ctx.color = "cyan";
    }, "AppComponent_Template_input_click_9_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "Cyan\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 1);
    \u0275\u0275text(12, "Highlight me!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 2);
    \u0275\u0275text(14, " Highlight me too!\n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "hr");
    \u0275\u0275elementStart(16, "h2");
    \u0275\u0275text(17, "Mouse over the following lines to see fixed highlights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 1);
    \u0275\u0275text(19, "Highlighted in yellow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 3);
    \u0275\u0275text(21, "Highlighted in orange");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "hr");
    \u0275\u0275elementStart(23, "h2");
    \u0275\u0275text(24, "ngNonBindable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, "Use ngNonBindable to stop evaluation.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275disableBindings();
    \u0275\u0275text(28, "This should not evaluate: {{ 1 + 1 }}");
    \u0275\u0275enableBindings();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "h3");
    \u0275\u0275text(30, "ngNonBindable with a directive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 1);
    \u0275\u0275disableBindings();
    \u0275\u0275text(32, "This should not evaluate: {{ 1 +1 }}, but will highlight yellow.\n");
    \u0275\u0275enableBindings();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("appHighlight", ctx.color);
    \u0275\u0275advance(2);
    \u0275\u0275property("appHighlight", ctx.color);
    \u0275\u0275advance(5);
    \u0275\u0275property("appHighlight", "yellow");
    \u0275\u0275advance(13);
    \u0275\u0275property("appHighlight", "yellow");
  }
}, "AppComponent_Template"), dependencies: [HighlightDirective], encapsulation: 2 }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [HighlightDirective], template: `<!-- #docregion v2, -->
<h1>My First Attribute Directive</h1>

<h2>Pick a highlight color</h2>
<div>
  <input type="radio" name="colors" (click)="color='lightgreen'">Green
  <input type="radio" name="colors" (click)="color='yellow'">Yellow
  <input type="radio" name="colors" (click)="color='cyan'">Cyan
</div>
<!-- #docregion color -->
<p [appHighlight]="color">Highlight me!</p>
<!-- #enddocregion color, v2 -->

<!-- #docregion defaultColor -->
<p [appHighlight]="color" defaultColor="violet">
  Highlight me too!
</p>
<!-- #enddocregion defaultColor, -->

<hr>
<h2>Mouse over the following lines to see fixed highlights</h2>

<p [appHighlight]="'yellow'">Highlighted in yellow</p>
<p appHighlight="orange">Highlighted in orange</p>

<hr>

<h2>ngNonBindable</h2>
<!-- #docregion ngNonBindable -->
<p>Use ngNonBindable to stop evaluation.</p>
<p ngNonBindable>This should not evaluate: {{ 1 + 1 }}</p>
<!-- #enddocregion ngNonBindable -->

<!-- #docregion ngNonBindable-with-directive -->
<h3>ngNonBindable with a directive</h3>
<div ngNonBindable [appHighlight]="'yellow'">This should not evaluate: {{ 1 +1 }}, but will highlight yellow.
</div>
<!-- #enddocregion ngNonBindable-with-directive -->
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/attribute-directives/src/app/app.component.ts", lineNumber: 11 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-K2SIPO3N.js.map

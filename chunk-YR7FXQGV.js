import {
  UpperCasePipe
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/precedence.component.ts
var _PrecedenceComponent = class _PrecedenceComponent {
  isLeft = true;
  toggleDirection() {
    this.isLeft = !this.isLeft;
  }
  isGood = true;
  toggleGood() {
    this.isGood = !this.isGood;
  }
  isUpper = true;
  toggleCase() {
    this.isUpper = !this.isUpper;
  }
};
__name(_PrecedenceComponent, "PrecedenceComponent");
__publicField(_PrecedenceComponent, "\u0275fac", /* @__PURE__ */ __name(function PrecedenceComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrecedenceComponent)();
}, "PrecedenceComponent_Factory"));
__publicField(_PrecedenceComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrecedenceComponent, selectors: [["app-pipe-precedence"]], decls: 40, vars: 12, consts: [["type", "button", 3, "click"]], template: /* @__PURE__ */ __name(function PrecedenceComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, " In most cases, you'll wrap the entire ternary expression in parentheses before passing the result to a pipe.\n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, " Example: ");
    \u0275\u0275domElementStart(4, "code");
    \u0275\u0275text(5, "(isLeft ? 'left' : 'right') | uppercase");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "uppercase");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function PrecedenceComponent_Template_button_click_9_listener() {
      return ctx.toggleDirection();
    }, "PrecedenceComponent_Template_button_click_9_listener"));
    \u0275\u0275text(10, "Toggle 'isLeft'");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p");
    \u0275\u0275text(12, "Without parentheses, only the second value is uppercased.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "p");
    \u0275\u0275text(14, "Example: ");
    \u0275\u0275domElementStart(15, "code");
    \u0275\u0275text(16, "isGood ? 'good' : 'bad' | uppercase");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "b");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "uppercase");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "p");
    \u0275\u0275text(21, "Same as: ");
    \u0275\u0275domElementStart(22, "code");
    \u0275\u0275text(23, "isGood ? 'good' : ('bad' | uppercase)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "b");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "uppercase");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function PrecedenceComponent_Template_button_click_27_listener() {
      return ctx.toggleGood();
    }, "PrecedenceComponent_Template_button_click_27_listener"));
    \u0275\u0275text(28, "Toggle 'isGood'");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "p");
    \u0275\u0275text(30, "If only one of the values should be passed to a pipe, be explicit and surround that value with parentheses.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "p");
    \u0275\u0275text(32, "Example: ");
    \u0275\u0275domElementStart(33, "code");
    \u0275\u0275text(34, "isUpper ? ('upper' | uppercase) : 'lower'");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "b");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "uppercase");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(38, "button", 0);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function PrecedenceComponent_Template_button_click_38_listener() {
      return ctx.toggleCase();
    }, "PrecedenceComponent_Template_button_click_38_listener"));
    \u0275\u0275text(39, "Toggle 'isUpper'");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, ctx.isLeft ? "left" : "right"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx.isGood ? "good" : \u0275\u0275pipeBind1(19, 6, "bad"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx.isGood ? "good" : \u0275\u0275pipeBind1(26, 8, "bad"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx.isUpper ? \u0275\u0275pipeBind1(37, 10, "upper") : "lower", " ");
  }
}, "PrecedenceComponent_Template"), dependencies: [UpperCasePipe], styles: ["\n\ncode[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background-color: #eee;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=precedence.component.css.map */"] }));
var PrecedenceComponent = _PrecedenceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrecedenceComponent, [{
    type: Component,
    args: [{ selector: "app-pipe-precedence", imports: [UpperCasePipe], template: `<!-- #docregion -->
<!-- #docregion precedence -->
<p>
  In most cases, you'll wrap the entire ternary expression in parentheses before passing the result to a pipe.
</p>

<p>
  Example: <code>(isLeft ? 'left' : 'right') | uppercase</code>
  <b>
    {{ (isLeft ? 'left' : 'right') | uppercase }}
  </b>
</p>
<button type="button" (click)="toggleDirection()">Toggle 'isLeft'</button>


<p>Without parentheses, only the second value is uppercased.</p>

<p>Example: <code>isGood ? 'good' : 'bad' | uppercase</code>
  <b>
    {{ isGood ? 'good' : 'bad' | uppercase }}
  </b>
</p>

<p>Same as: <code>isGood ? 'good' : ('bad' | uppercase)</code>
  <b>
    {{ isGood ? 'good' : ('bad' | uppercase) }}
  </b>
</p>
<button type="button" (click)="toggleGood()">Toggle 'isGood'</button>


<p>If only one of the values should be passed to a pipe,
  be explicit and surround that value with parentheses.</p>

<p>Example: <code>isUpper ? ('upper' | uppercase) : 'lower'</code>
  <b>
    {{ isUpper ? ('upper' | uppercase) : 'lower' }}
  </b>
</p>
<button type="button" (click)="toggleCase()">Toggle 'isUpper'</button>
<!-- #enddocregion precedence -->
`, styles: ["/* angular:styles/component:scss;eadff12050fc79ed49d20cfcea816375d9fc8cc98718f40bdbf0b999f670ab4d;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/2/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/precedence.component.ts */\ncode {\n  font-family: monospace;\n  background-color: #eee;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=precedence.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrecedenceComponent, { className: "PrecedenceComponent", filePath: "src/content/examples/pipes/src/app/precedence.component.ts", lineNumber: 10 });
})();

export {
  PrecedenceComponent
};
//# sourceMappingURL=chunk-YR7FXQGV.js.map

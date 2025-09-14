import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarAction,
  MatSnackBarRef
} from "./chunk-UTU76KKQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  __name,
  __publicField,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/app/core/services/errors-handling/error-snack-bar.ts
var _ErrorSnackBar = class _ErrorSnackBar {
  snackBarRef = inject(MatSnackBarRef);
  message;
  actionText;
  constructor() {
    const data = inject(MAT_SNACK_BAR_DATA);
    this.message = data.message;
    this.actionText = data.actionText;
  }
};
__name(_ErrorSnackBar, "ErrorSnackBar");
__publicField(_ErrorSnackBar, "\u0275fac", /* @__PURE__ */ __name(function ErrorSnackBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ErrorSnackBar)();
}, "ErrorSnackBar_Factory"));
__publicField(_ErrorSnackBar, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorSnackBar, selectors: [["error-snack-bar"]], decls: 3, vars: 3, consts: [["type", "button", "matSnackBarAction", "", 1, "docs-primary-btn", 3, "click"]], template: /* @__PURE__ */ __name(function ErrorSnackBar_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "button", 0);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ErrorSnackBar_Template_button_click_1_listener() {
      return ctx.snackBarRef.dismissWithAction();
    }, "ErrorSnackBar_Template_button_click_1_listener"));
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", ctx.message, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("text", ctx.actionText);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.actionText, " ");
  }
}, "ErrorSnackBar_Template"), dependencies: [MatSnackBarAction], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=error-snack-bar.css.map */"], changeDetection: 0 }));
var ErrorSnackBar = _ErrorSnackBar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorSnackBar, [{
    type: Component,
    args: [{ selector: "error-snack-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    {{ message }}
    <button
      class="docs-primary-btn"
      type="button"
      matSnackBarAction
      [attr.text]="actionText"
      (click)="snackBarRef.dismissWithAction()"
    >
      {{ actionText }}
    </button>
  `, imports: [MatSnackBarAction], styles: ["/* angular:styles/component:scss;b074d81338880dfa567b47f66ab7b4c3813171015a1ed71aa777d6bcae809cd7;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/217/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/app/core/services/errors-handling/error-snack-bar.ts */\n:host {\n  display: flex;\n  align-items: center;\n}\n:host button {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=error-snack-bar.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorSnackBar, { className: "ErrorSnackBar", filePath: "src/app/core/services/errors-handling/error-snack-bar.ts", lineNumber: 35 });
})();

export {
  ErrorSnackBar
};
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-77HKTVJH.js.map

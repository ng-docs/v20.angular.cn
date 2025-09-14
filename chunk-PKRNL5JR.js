import {
  CdkDrag
} from "./chunk-B2C7H6VM.js";
import "./chunk-H7FALWCD.js";
import "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/axis-lock/app/app.component.ts
var _CdkDragDropAxisLockExample = class _CdkDragDropAxisLockExample {
};
__name(_CdkDragDropAxisLockExample, "CdkDragDropAxisLockExample");
__publicField(_CdkDragDropAxisLockExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropAxisLockExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropAxisLockExample)();
}, "CdkDragDropAxisLockExample_Factory"));
__publicField(_CdkDragDropAxisLockExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropAxisLockExample, selectors: [["cdk-drag-drop-axis-lock-example"]], decls: 4, vars: 0, consts: [["cdkDragLockAxis", "y", "cdkDrag", "", 1, "example-box"], ["cdkDragLockAxis", "x", "cdkDrag", "", 1, "example-box"]], template: /* @__PURE__ */ __name(function CdkDragDropAxisLockExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, " I can only be dragged up/down\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275text(3, " I can only be dragged left/right\n");
    \u0275\u0275elementEnd();
  }
}, "CdkDragDropAxisLockExample_Template"), dependencies: [CdkDrag], styles: ["\n\n.example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropAxisLockExample = _CdkDragDropAxisLockExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropAxisLockExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-axis-lock-example", standalone: true, imports: [CdkDrag], template: '<div class="example-box" cdkDragLockAxis="y" cdkDrag>\n  I can only be dragged up/down\n</div>\n\n<div class="example-box" cdkDragLockAxis="x" cdkDrag>\n  I can only be dragged left/right\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/axis-lock/app/app.component.css */\n.example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropAxisLockExample, { className: "CdkDragDropAxisLockExample", filePath: "src/content/examples/drag-drop/src/axis-lock/app/app.component.ts", lineNumber: 14 });
})();
export {
  CdkDragDropAxisLockExample
};
//# sourceMappingURL=chunk-PKRNL5JR.js.map

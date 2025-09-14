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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/delay-drag/app/app.component.ts
var _CdkDragDropDelayExample = class _CdkDragDropDelayExample {
};
__name(_CdkDragDropDelayExample, "CdkDragDropDelayExample");
__publicField(_CdkDragDropDelayExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropDelayExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropDelayExample)();
}, "CdkDragDropDelayExample_Factory"));
__publicField(_CdkDragDropDelayExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropDelayExample, selectors: [["cdk-drag-drop-delay-example"]], decls: 2, vars: 1, consts: [["cdkDrag", "", 1, "example-box", 3, "cdkDragStartDelay"]], template: /* @__PURE__ */ __name(function CdkDragDropDelayExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, " Dragging starts after one second\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("cdkDragStartDelay", 1e3);
  }
}, "CdkDragDropDelayExample_Template"), dependencies: [CdkDrag], styles: ["\n\n.example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropDelayExample = _CdkDragDropDelayExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropDelayExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-delay-example", standalone: true, imports: [CdkDrag], template: '<div class="example-box" cdkDrag [cdkDragStartDelay]="1000">\n  Dragging starts after one second\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/delay-drag/app/app.component.css */\n.example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropDelayExample, { className: "CdkDragDropDelayExample", filePath: "src/content/examples/drag-drop/src/delay-drag/app/app.component.ts", lineNumber: 14 });
})();
export {
  CdkDragDropDelayExample
};
//# sourceMappingURL=chunk-PNOB6QZJ.js.map

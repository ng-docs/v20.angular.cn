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

// src/content/examples/drag-drop/src/boundary/app/app.component.ts
var _CdkDragDropBoundaryExample = class _CdkDragDropBoundaryExample {
};
__name(_CdkDragDropBoundaryExample, "CdkDragDropBoundaryExample");
__publicField(_CdkDragDropBoundaryExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropBoundaryExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropBoundaryExample)();
}, "CdkDragDropBoundaryExample_Factory"));
__publicField(_CdkDragDropBoundaryExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropBoundaryExample, selectors: [["cdk-drag-drop-boundary-example"]], decls: 3, vars: 0, consts: [[1, "example-boundary"], ["cdkDragBoundary", ".example-boundary", "cdkDrag", "", 1, "example-box"]], template: /* @__PURE__ */ __name(function CdkDragDropBoundaryExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2, " I can only be dragged within the dotted container ");
    \u0275\u0275elementEnd()();
  }
}, "CdkDragDropBoundaryExample_Template"), dependencies: [CdkDrag], styles: ["\n\n.example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.example-boundary[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropBoundaryExample = _CdkDragDropBoundaryExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropBoundaryExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-boundary-example", standalone: true, imports: [CdkDrag], template: '<div class="example-boundary">\n  <div class="example-box" cdkDragBoundary=".example-boundary" cdkDrag>\n    I can only be dragged within the dotted container\n  </div>\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/boundary/app/app.component.css */\n.example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropBoundaryExample, { className: "CdkDragDropBoundaryExample", filePath: "src/content/examples/drag-drop/src/boundary/app/app.component.ts", lineNumber: 14 });
})();
export {
  CdkDragDropBoundaryExample
};
//# sourceMappingURL=chunk-CTZ5WCO7.js.map

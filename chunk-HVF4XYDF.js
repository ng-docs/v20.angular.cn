import {
  CdkDrag,
  CdkDragHandle
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/custom-handle/app/app.component.ts
var _CdkDragDropHandleExample = class _CdkDragDropHandleExample {
};
__name(_CdkDragDropHandleExample, "CdkDragDropHandleExample");
__publicField(_CdkDragDropHandleExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropHandleExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropHandleExample)();
}, "CdkDragDropHandleExample_Factory"));
__publicField(_CdkDragDropHandleExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropHandleExample, selectors: [["cdk-drag-drop-handle-example"]], decls: 6, vars: 0, consts: [["cdkDrag", "", 1, "example-box"], ["cdkDragHandle", "", 1, "example-handle"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"]], template: /* @__PURE__ */ __name(function CdkDragDropHandleExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, " I can only be dragged using the handle ");
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 2);
    \u0275\u0275element(4, "path", 3)(5, "path", 4);
    \u0275\u0275elementEnd()()();
  }
}, "CdkDragDropHandleExample_Template"), dependencies: [CdkDrag, CdkDragHandle], styles: ["\n\n.example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.example-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropHandleExample = _CdkDragDropHandleExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropHandleExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-handle-example", standalone: true, imports: [CdkDrag, CdkDragHandle], template: '<div class="example-box" cdkDrag>\n  I can only be dragged using the handle\n\n  <div class="example-handle" cdkDragHandle>\n    <svg width="24px" fill="currentColor" viewBox="0 0 24 24">\n      <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path>\n      <path d="M0 0h24v24H0z" fill="none"></path>\n    </svg>\n  </div>\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/custom-handle/app/app.component.css */\n.example-box {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.example-handle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropHandleExample, { className: "CdkDragDropHandleExample", filePath: "src/content/examples/drag-drop/src/custom-handle/app/app.component.ts", lineNumber: 14 });
})();
export {
  CdkDragDropHandleExample
};
//# sourceMappingURL=chunk-HVF4XYDF.js.map

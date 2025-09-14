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
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/free-drag-position/app/app.component.ts
var _CdkDragDropFreeDragPositionExample = class _CdkDragDropFreeDragPositionExample {
  dragPosition = { x: 0, y: 0 };
  changePosition() {
    this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
  }
};
__name(_CdkDragDropFreeDragPositionExample, "CdkDragDropFreeDragPositionExample");
__publicField(_CdkDragDropFreeDragPositionExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropFreeDragPositionExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropFreeDragPositionExample)();
}, "CdkDragDropFreeDragPositionExample_Factory"));
__publicField(_CdkDragDropFreeDragPositionExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropFreeDragPositionExample, selectors: [["cdk-drag-drop-free-drag-position-example"]], decls: 5, vars: 1, consts: [[3, "click"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragFreeDragPosition"]], template: /* @__PURE__ */ __name(function CdkDragDropFreeDragPositionExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "button", 0);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function CdkDragDropFreeDragPositionExample_Template_button_click_1_listener() {
      return ctx.changePosition();
    }, "CdkDragDropFreeDragPositionExample_Template_button_click_1_listener"));
    \u0275\u0275text(2, "Change element position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275text(4, " Drag me around\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("cdkDragFreeDragPosition", ctx.dragPosition);
  }
}, "CdkDragDropFreeDragPositionExample_Template"), dependencies: [CdkDrag], styles: ["\n\n.example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropFreeDragPositionExample = _CdkDragDropFreeDragPositionExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropFreeDragPositionExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-free-drag-position-example", standalone: true, imports: [CdkDrag], template: '<p>\n  <button (click)="changePosition()">Change element position</button>\n</p>\n\n<div class="example-box" cdkDrag [cdkDragFreeDragPosition]="dragPosition">\n  Drag me around\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/free-drag-position/app/app.component.css */\n.example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropFreeDragPositionExample, { className: "CdkDragDropFreeDragPositionExample", filePath: "src/content/examples/drag-drop/src/free-drag-position/app/app.component.ts", lineNumber: 14 });
})();
export {
  CdkDragDropFreeDragPositionExample
};
//# sourceMappingURL=chunk-7YKBZWLK.js.map

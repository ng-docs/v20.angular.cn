import {
  CdkDrag,
  CdkDropList,
  moveItemInArray
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/mixed-sorting/app/app.component.ts
function CdkDragDropMixedSortingExample_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
__name(CdkDragDropMixedSortingExample_For_2_Template, "CdkDragDropMixedSortingExample_For_2_Template");
var _CdkDragDropMixedSortingExample = class _CdkDragDropMixedSortingExample {
  items = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  drop(event) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
};
__name(_CdkDragDropMixedSortingExample, "CdkDragDropMixedSortingExample");
__publicField(_CdkDragDropMixedSortingExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropMixedSortingExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropMixedSortingExample)();
}, "CdkDragDropMixedSortingExample_Factory"));
__publicField(_CdkDragDropMixedSortingExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropMixedSortingExample, selectors: [["cdk-drag-drop-mixed-sorting-example"]], decls: 3, vars: 0, consts: [["cdkDropList", "", "cdkDropListOrientation", "mixed", 1, "example-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box"]], template: /* @__PURE__ */ __name(function CdkDragDropMixedSortingExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropMixedSortingExample_Template_div_cdkDropListDropped_0_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropMixedSortingExample_Template_div_cdkDropListDropped_0_listener"));
    \u0275\u0275repeaterCreate(1, CdkDragDropMixedSortingExample_For_2_Template, 2, 1, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.items);
  }
}, "CdkDragDropMixedSortingExample_Template"), dependencies: [CdkDropList, CdkDrag], styles: ["\n\n.example-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 505px;\n  max-width: 100%;\n  gap: 15px;\n  padding: 15px;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border: solid 1px #ccc;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, 0.87);\n  display: inline-block;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  text-align: center;\n  font-size: 14px;\n  min-width: 115px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropMixedSortingExample = _CdkDragDropMixedSortingExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropMixedSortingExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-mixed-sorting-example", standalone: true, imports: [CdkDropList, CdkDrag], template: '<div cdkDropList cdkDropListOrientation="mixed" class="example-list" (cdkDropListDropped)="drop($event)">\n  @for (item of items; track item) {\n    <div class="example-box" cdkDrag>{{item}}</div>\n  }\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/mixed-sorting/app/app.component.css */\n.example-list {\n  display: flex;\n  flex-wrap: wrap;\n  width: 505px;\n  max-width: 100%;\n  gap: 15px;\n  padding: 15px;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.example-box {\n  padding: 20px 10px;\n  border: solid 1px #ccc;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, 0.87);\n  display: inline-block;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  text-align: center;\n  font-size: 14px;\n  min-width: 115px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropMixedSortingExample, { className: "CdkDragDropMixedSortingExample", filePath: "src/content/examples/drag-drop/src/mixed-sorting/app/app.component.ts", lineNumber: 14 });
})();
export {
  CdkDragDropMixedSortingExample
};
//# sourceMappingURL=chunk-KK7ZNTTP.js.map

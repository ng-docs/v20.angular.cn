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

// src/content/examples/drag-drop/src/horizontal-sorting/app/app.component.ts
function CdkDragDropHorizontalSortingExample_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timePeriod_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(timePeriod_r1);
  }
}
__name(CdkDragDropHorizontalSortingExample_For_2_Template, "CdkDragDropHorizontalSortingExample_For_2_Template");
var _CdkDragDropHorizontalSortingExample = class _CdkDragDropHorizontalSortingExample {
  timePeriods = [
    "Bronze age",
    "Iron age",
    "Middle ages",
    "Early modern period",
    "Long nineteenth century"
  ];
  drop(event) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
};
__name(_CdkDragDropHorizontalSortingExample, "CdkDragDropHorizontalSortingExample");
__publicField(_CdkDragDropHorizontalSortingExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropHorizontalSortingExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropHorizontalSortingExample)();
}, "CdkDragDropHorizontalSortingExample_Factory"));
__publicField(_CdkDragDropHorizontalSortingExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropHorizontalSortingExample, selectors: [["cdk-drag-drop-horizontal-sorting-example"]], decls: 3, vars: 0, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box"]], template: /* @__PURE__ */ __name(function CdkDragDropHorizontalSortingExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropHorizontalSortingExample_Template_div_cdkDropListDropped_0_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropHorizontalSortingExample_Template_div_cdkDropListDropped_0_listener"));
    \u0275\u0275repeaterCreate(1, CdkDragDropHorizontalSortingExample_For_2_Template, 2, 1, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.timePeriods);
  }
}, "CdkDragDropHorizontalSortingExample_Template"), dependencies: [CdkDropList, CdkDrag], styles: ["\n\n.example-list[_ngcontent-%COMP%] {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropHorizontalSortingExample = _CdkDragDropHorizontalSortingExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropHorizontalSortingExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-horizontal-sorting-example", standalone: true, imports: [CdkDropList, CdkDrag], template: '<div cdkDropList cdkDropListOrientation="horizontal" class="example-list" (cdkDropListDropped)="drop($event)">\n  @for (timePeriod of timePeriods; track timePeriod) {\n    <div class="example-box" cdkDrag>{{timePeriod}}</div>\n  }\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/horizontal-sorting/app/app.component.css */\n.example-list {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.example-box {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropHorizontalSortingExample, { className: "CdkDragDropHorizontalSortingExample", filePath: "src/content/examples/drag-drop/src/horizontal-sorting/app/app.component.ts", lineNumber: 14 });
})();
export {
  CdkDragDropHorizontalSortingExample
};
//# sourceMappingURL=chunk-XZU6WYTR.js.map

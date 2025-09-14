import {
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  transferArrayItem
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/connected-sorting/app/app.component.ts
var _c0 = /* @__PURE__ */ __name((a0) => [a0], "_c0");
function CdkDragDropConnectedSortingExample_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
__name(CdkDragDropConnectedSortingExample_For_6_Template, "CdkDragDropConnectedSortingExample_For_6_Template");
function CdkDragDropConnectedSortingExample_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3);
  }
}
__name(CdkDragDropConnectedSortingExample_For_13_Template, "CdkDragDropConnectedSortingExample_For_13_Template");
var _CdkDragDropConnectedSortingExample = class _CdkDragDropConnectedSortingExample {
  todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];
  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];
  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
};
__name(_CdkDragDropConnectedSortingExample, "CdkDragDropConnectedSortingExample");
__publicField(_CdkDragDropConnectedSortingExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropConnectedSortingExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropConnectedSortingExample)();
}, "CdkDragDropConnectedSortingExample_Factory"));
__publicField(_CdkDragDropConnectedSortingExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropConnectedSortingExample, selectors: [["cdk-drag-drop-connected-sorting-example"]], decls: 14, vars: 8, consts: [["todoList", "cdkDropList"], ["doneList", "cdkDropList"], [1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "example-box"]], template: /* @__PURE__ */ __name(function CdkDragDropConnectedSortingExample_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h2");
    \u0275\u0275text(2, "To do");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3, 0);
    \u0275\u0275listener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.drop($event));
    }, "CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_3_listener"));
    \u0275\u0275repeaterCreate(5, CdkDragDropConnectedSortingExample_For_6_Template, 2, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 2)(8, "h2");
    \u0275\u0275text(9, "Done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 3, 1);
    \u0275\u0275listener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.drop($event));
    }, "CdkDragDropConnectedSortingExample_Template_div_cdkDropListDropped_10_listener"));
    \u0275\u0275repeaterCreate(12, CdkDragDropConnectedSortingExample_For_13_Template, 2, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const todoList_r4 = \u0275\u0275reference(4);
    const doneList_r5 = \u0275\u0275reference(11);
    \u0275\u0275advance(3);
    \u0275\u0275property("cdkDropListData", ctx.todo)("cdkDropListConnectedTo", \u0275\u0275pureFunction1(4, _c0, doneList_r5));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.todo);
    \u0275\u0275advance(5);
    \u0275\u0275property("cdkDropListData", ctx.done)("cdkDropListConnectedTo", \u0275\u0275pureFunction1(6, _c0, todoList_r4));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.done);
  }
}, "CdkDragDropConnectedSortingExample_Template"), dependencies: [CdkDropList, CdkDrag], styles: ["\n\n.example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropConnectedSortingExample = _CdkDragDropConnectedSortingExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropConnectedSortingExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-connected-sorting-example", standalone: true, imports: [CdkDropList, CdkDrag], template: '<div class="example-container">\n  <h2>To do</h2>\n\n  <div\n    cdkDropList\n    #todoList="cdkDropList"\n    [cdkDropListData]="todo"\n    [cdkDropListConnectedTo]="[doneList]"\n    class="example-list"\n    (cdkDropListDropped)="drop($event)">\n    @for (item of todo; track item) {\n      <div class="example-box" cdkDrag>{{item}}</div>\n    }\n  </div>\n</div>\n\n<div class="example-container">\n  <h2>Done</h2>\n\n  <div\n    cdkDropList\n    #doneList="cdkDropList"\n    [cdkDropListData]="done"\n    [cdkDropListConnectedTo]="[todoList]"\n    class="example-list"\n    (cdkDropListDropped)="drop($event)">\n    @for (item of done; track item) {\n      <div class="example-box" cdkDrag>{{item}}</div>\n    }\n  </div>\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/connected-sorting/app/app.component.css */\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropConnectedSortingExample, { className: "CdkDragDropConnectedSortingExample", filePath: "src/content/examples/drag-drop/src/connected-sorting/app/app.component.ts", lineNumber: 20 });
})();
export {
  CdkDragDropConnectedSortingExample
};
//# sourceMappingURL=chunk-RUL7O7BW.js.map

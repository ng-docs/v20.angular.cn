import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/connected-sorting-group/app/app.component.ts
function CdkDragDropConnectedSortingGroupExample_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
__name(CdkDragDropConnectedSortingGroupExample_For_6_Template, "CdkDragDropConnectedSortingGroupExample_For_6_Template");
function CdkDragDropConnectedSortingGroupExample_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
__name(CdkDragDropConnectedSortingGroupExample_For_12_Template, "CdkDragDropConnectedSortingGroupExample_For_12_Template");
var _CdkDragDropConnectedSortingGroupExample = class _CdkDragDropConnectedSortingGroupExample {
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
__name(_CdkDragDropConnectedSortingGroupExample, "CdkDragDropConnectedSortingGroupExample");
__publicField(_CdkDragDropConnectedSortingGroupExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropConnectedSortingGroupExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropConnectedSortingGroupExample)();
}, "CdkDragDropConnectedSortingGroupExample_Factory"));
__publicField(_CdkDragDropConnectedSortingGroupExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropConnectedSortingGroupExample, selectors: [["cdk-drag-drop-connected-sorting-group-example"]], decls: 13, vars: 2, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 1, "example-box"]], template: /* @__PURE__ */ __name(function CdkDragDropConnectedSortingGroupExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "To do");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275listener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_4_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_4_listener"));
    \u0275\u0275repeaterCreate(5, CdkDragDropConnectedSortingGroupExample_For_6_Template, 2, 1, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 1)(8, "h2");
    \u0275\u0275text(9, "Done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 2);
    \u0275\u0275listener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_10_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_10_listener"));
    \u0275\u0275repeaterCreate(11, CdkDragDropConnectedSortingGroupExample_For_12_Template, 2, 1, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("cdkDropListData", ctx.todo);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.todo);
    \u0275\u0275advance(5);
    \u0275\u0275property("cdkDropListData", ctx.done);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.done);
  }
}, "CdkDragDropConnectedSortingGroupExample_Template"), dependencies: [CdkDropListGroup, CdkDropList, CdkDrag], styles: ["\n\n.example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropConnectedSortingGroupExample = _CdkDragDropConnectedSortingGroupExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropConnectedSortingGroupExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-connected-sorting-group-example", standalone: true, imports: [CdkDropListGroup, CdkDropList, CdkDrag], template: '<div cdkDropListGroup>\n  <div class="example-container">\n    <h2>To do</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]="todo"\n      class="example-list"\n      (cdkDropListDropped)="drop($event)">\n      @for (item of todo; track item) {\n        <div class="example-box" cdkDrag>{{item}}</div>\n      }\n    </div>\n  </div>\n\n  <div class="example-container">\n    <h2>Done</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]="done"\n      class="example-list"\n      (cdkDropListDropped)="drop($event)">\n      @for (item of done; track item) {\n        <div class="example-box" cdkDrag>{{item}}</div>\n      }\n    </div>\n  </div>\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/connected-sorting-group/app/app.component.css */\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropConnectedSortingGroupExample, { className: "CdkDragDropConnectedSortingGroupExample", filePath: "src/content/examples/drag-drop/src/connected-sorting-group/app/app.component.ts", lineNumber: 21 });
})();
export {
  CdkDragDropConnectedSortingGroupExample
};
//# sourceMappingURL=chunk-GAVOAUXK.js.map

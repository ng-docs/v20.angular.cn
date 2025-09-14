import {
  Overlay,
  TemplatePortal
} from "./chunk-UGE24TTQ.js";
import {
  CdkDrag
} from "./chunk-B2C7H6VM.js";
import "./chunk-H7FALWCD.js";
import "./chunk-OV2CFM4K.js";
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  __name,
  __publicField,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/root-element/app/app.component.ts
function CdkDragDropRootElementExample_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, " Drag the dialog around! ");
    \u0275\u0275elementEnd();
  }
}
__name(CdkDragDropRootElementExample_ng_template_2_Template, "CdkDragDropRootElementExample_ng_template_2_Template");
var _CdkDragDropRootElementExample = class _CdkDragDropRootElementExample {
  _overlay = inject(Overlay);
  _viewContainerRef = inject(ViewContainerRef);
  _dialogTemplate;
  _overlayRef;
  _portal;
  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
    this._overlayRef = this._overlay.create({
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
  }
  ngOnDestroy() {
    this._overlayRef.dispose();
  }
  openDialog() {
    this._overlayRef.attach(this._portal);
  }
};
__name(_CdkDragDropRootElementExample, "CdkDragDropRootElementExample");
__publicField(_CdkDragDropRootElementExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropRootElementExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropRootElementExample)();
}, "CdkDragDropRootElementExample_Factory"));
__publicField(_CdkDragDropRootElementExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropRootElementExample, selectors: [["cdk-drag-drop-root-element-example"]], viewQuery: /* @__PURE__ */ __name(function CdkDragDropRootElementExample_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(TemplateRef, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._dialogTemplate = _t.first);
  }
}, "CdkDragDropRootElementExample_Query"), decls: 3, vars: 0, consts: [[3, "click"], ["cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", 1, "example-dialog-content"]], template: /* @__PURE__ */ __name(function CdkDragDropRootElementExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function CdkDragDropRootElementExample_Template_button_click_0_listener() {
      return ctx.openDialog();
    }, "CdkDragDropRootElementExample_Template_button_click_0_listener"));
    \u0275\u0275text(1, "Open a draggable dialog");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, CdkDragDropRootElementExample_ng_template_2_Template, 2, 0, "ng-template");
  }
}, "CdkDragDropRootElementExample_Template"), dependencies: [CdkDrag], styles: ["\n\n.example-dialog-content[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-dialog-content[_ngcontent-%COMP%]:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropRootElementExample = _CdkDragDropRootElementExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropRootElementExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-root-element-example", standalone: true, imports: [CdkDrag], template: '<button (click)="openDialog()">Open a draggable dialog</button>\n\n<ng-template>\n  <div class="example-dialog-content" cdkDrag cdkDragRootElement=".cdk-overlay-pane">\n    Drag the dialog around!\n  </div>\n</ng-template>\n', styles: ["/* src/content/examples/drag-drop/src/root-element/app/app.component.css */\n.example-dialog-content {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-dialog-content:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, { _dialogTemplate: [{
    type: ViewChild,
    args: [TemplateRef]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropRootElementExample, { className: "CdkDragDropRootElementExample", filePath: "src/content/examples/drag-drop/src/root-element/app/app.component.ts", lineNumber: 24 });
})();
export {
  CdkDragDropRootElementExample
};
//# sourceMappingURL=chunk-PMCJOOHG.js.map

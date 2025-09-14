import {
  DocViewer
} from "./chunk-A6VPSR6T.js";
import "./chunk-7F6UZAKO.js";
import "./chunk-UGE24TTQ.js";
import "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-IP3YSDXJ.js";
import "./chunk-H7FALWCD.js";
import "./chunk-OV2CFM4K.js";
import {
  ChangeDetectionStrategy,
  Component,
  __name,
  __publicField,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵstoreLet
} from "./chunk-2CX5BJWG.js";

// src/app/features/docs/docs.component.ts
function DocsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "main", 0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const docContent_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("docContent", docContent_r1.contents)("hasToc", true);
  }
}
__name(DocsComponent_Conditional_1_Template, "DocsComponent_Conditional_1_Template");
var _DocsComponent = class _DocsComponent {
  // Based on current route, proper static content for doc page is fetched.
  // In case when exists example-viewer placeholders, then ExampleViewer
  // components are going to be rendered.
  docContent = input(...ngDevMode ? [void 0, { debugName: "docContent" }] : []);
};
__name(_DocsComponent, "DocsComponent");
__publicField(_DocsComponent, "\u0275fac", /* @__PURE__ */ __name(function DocsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocsComponent)();
}, "DocsComponent_Factory"));
__publicField(_DocsComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocsComponent, selectors: [["docs-docs"]], inputs: { docContent: [1, "docContent"] }, decls: 2, vars: 2, consts: [["docsViewer", "", 1, "docs-viewer", 3, "docContent", "hasToc"]], template: /* @__PURE__ */ __name(function DocsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, DocsComponent_Conditional_1_Template, 1, 2, "main", 0);
  }
  if (rf & 2) {
    const docContent_r2 = \u0275\u0275storeLet(ctx.docContent());
    \u0275\u0275advance();
    \u0275\u0275conditional(docContent_r2 ? 1 : -1);
  }
}, "DocsComponent_Template"), dependencies: [DocViewer], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding-top: var(--layout-padding);\n  padding-bottom: var(--layout-padding);\n}\n[_nghost-%COMP%]   .docs-viewer.docs-animate-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 500ms;\n}\n@media (min-width: 1430.01px) {\n  [_nghost-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=docs.component.css.map */"], changeDetection: 0 }));
var DocsComponent = _DocsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocsComponent, [{
    type: Component,
    args: [{ selector: "docs-docs", changeDetection: ChangeDetectionStrategy.OnPush, imports: [DocViewer], template: '@let docContent = this.docContent();\n@if (docContent) {\n  <main docsViewer\n    class="docs-viewer"\n    [docContent]="docContent.contents"\n    [hasToc]="true"></main>\n}\n', styles: ["/* src/app/features/docs/docs.component.scss */\n:host {\n  display: block;\n  padding-top: var(--layout-padding);\n  padding-bottom: var(--layout-padding);\n}\n:host .docs-viewer.docs-animate-content {\n  animation: fade-in 500ms;\n}\n@media (min-width: 1430.01px) {\n  :host {\n    display: flex;\n    justify-content: center;\n  }\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=docs.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocsComponent, { className: "DocsComponent", filePath: "src/app/features/docs/docs.component.ts", lineNumber: 19 });
})();
export {
  DocsComponent as default
};
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-J6IQKPD6.js.map

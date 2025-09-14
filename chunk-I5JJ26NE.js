import {
  EmbeddedEditor,
  injectEmbeddedTutorialManager,
  injectNodeRuntimeSandbox
} from "./chunk-Q2GMJ2AP.js";
import "./chunk-4CBXRCG6.js";
import "./chunk-G7P5OSF4.js";
import "./chunk-4QI4G4N7.js";
import "./chunk-RMPG5AWL.js";
import "./chunk-4ONR2TF5.js";
import "./chunk-VVHPPJ64.js";
import "./chunk-NAIJRLAM.js";
import "./chunk-A6VPSR6T.js";
import {
  takeUntilDestroyed
} from "./chunk-7F6UZAKO.js";
import "./chunk-UGE24TTQ.js";
import "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-IP3YSDXJ.js";
import "./chunk-H7FALWCD.js";
import "./chunk-OV2CFM4K.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EnvironmentInjector,
  __name,
  __publicField,
  forkJoin,
  inject,
  input,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-2CX5BJWG.js";

// src/app/features/home/components/home-editor.component.ts
var _CodeEditorComponent = class _CodeEditorComponent {
  cdRef = inject(ChangeDetectorRef);
  environmentInjector = inject(EnvironmentInjector);
  destroyRef = inject(DestroyRef);
  tutorialFiles = input.required(...ngDevMode ? [{ debugName: "tutorialFiles" }] : []);
  constructor() {
    this.loadEmbeddedEditor();
  }
  loadEmbeddedEditor() {
    forkJoin([
      injectNodeRuntimeSandbox(this.environmentInjector),
      injectEmbeddedTutorialManager(this.environmentInjector)
    ]).pipe(switchMap(([nodeRuntimeSandbox, embeddedTutorialManager]) => embeddedTutorialManager.fetchAndSetTutorialFiles(this.tutorialFiles()).then(() => nodeRuntimeSandbox)), takeUntilDestroyed(this.destroyRef)).subscribe((nodeRuntimeSandbox) => {
      this.cdRef.markForCheck();
      nodeRuntimeSandbox.init();
    });
  }
};
__name(_CodeEditorComponent, "CodeEditorComponent");
__publicField(_CodeEditorComponent, "\u0275fac", /* @__PURE__ */ __name(function CodeEditorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CodeEditorComponent)();
}, "CodeEditorComponent_Factory"));
__publicField(_CodeEditorComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeEditorComponent, selectors: [["adev-code-editor"]], inputs: { tutorialFiles: [1, "tutorialFiles"] }, decls: 1, vars: 0, template: /* @__PURE__ */ __name(function CodeEditorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "embedded-editor");
  }
}, "CodeEditorComponent_Template"), dependencies: [EmbeddedEditor], encapsulation: 2, changeDetection: 0 }));
var CodeEditorComponent = _CodeEditorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeEditorComponent, [{
    type: Component,
    args: [{
      selector: "adev-code-editor",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [EmbeddedEditor],
      template: `<embedded-editor />`
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeEditorComponent, { className: "CodeEditorComponent", filePath: "src/app/features/home/components/home-editor.component.ts", lineNumber: 33 });
})();
export {
  CodeEditorComponent
};
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-I5JJ26NE.js.map

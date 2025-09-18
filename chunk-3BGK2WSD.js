import {
  injectNodeRuntimeSandbox
} from "./chunk-7VKIJXIH.js";
import {
  LoadingStep,
  NodeRuntimeState
} from "./chunk-Q4BJRFYF.js";
import "./chunk-G7P5OSF4.js";
import {
  EmbeddedTutorialManager
} from "./chunk-4QI4G4N7.js";
import "./chunk-5F3EYLXG.js";
import {
  PAGE_PREFIX
} from "./chunk-XUJDBDVC.js";
import "./chunk-UTU76KKQ.js";
import "./chunk-CKZVQYF5.js";
import "./chunk-BQZYSKAP.js";
import {
  ClickOutside,
  DocViewer,
  FocusMonitor,
  IconComponent,
  NavigationList
} from "./chunk-FSDA2DZH.js";
import {
  takeUntilDestroyed
} from "./chunk-7F6UZAKO.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-UGE24TTQ.js";
import "./chunk-IP3YSDXJ.js";
import "./chunk-H7FALWCD.js";
import {
  NgComponentOutlet,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-OV2CFM4K.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  EnvironmentInjector,
  Injectable,
  PLATFORM_ID,
  __name,
  __publicField,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  combineLatest,
  computed,
  filter,
  finalize,
  from,
  fromEvent,
  inject,
  map,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-2CX5BJWG.js";

// src/app/features/tutorial/split-resizer-handler.service.ts
var MIN_WIDTH_OF_CONTENT_IN_PX = 300;
var MAX_WIDTH_OF_CONTENT_IN_PX = 800;
var _SplitResizerHandler = class _SplitResizerHandler {
  destroyRef = inject(DestroyRef);
  document = inject(DOCUMENT);
  focusMonitor = inject(FocusMonitor);
  container;
  content;
  editor;
  resizer;
  resizeData = signal({
    initialContentContainerWidthInPercentage: 0,
    initialDividerPosition: 0,
    initialEditorContainerWidthInPercentage: 0,
    isProgress: false
  }, ...ngDevMode ? [{ debugName: "resizeData" }] : []);
  init(container, content, resizer, editor) {
    this.container = container;
    this.content = content;
    this.resizer = resizer;
    this.editor = editor;
    this.listenToResizeStart();
    this.listenToResize();
    this.listenToResizeEnd();
    this.resizeContainersUsingKeyArrows();
  }
  listenToResizeStart() {
    fromEvent(this.resizer.nativeElement, "mousedown").pipe(map((event) => ({ editor: this.editor, event })), filter((eventAndEditor) => !!eventAndEditor.editor?.nativeElement), takeUntilDestroyed(this.destroyRef)).subscribe(({ event }) => {
      const contentWidthInPercentage = this.getCurrentContainerWidth(this.content.nativeElement);
      const editorWidthInPercentage = this.getCurrentContainerWidth(this.editor.nativeElement);
      this.content.nativeElement.style.minWidth = `${MIN_WIDTH_OF_CONTENT_IN_PX}px`;
      this.resizeData.update((data) => {
        data.initialDividerPosition = event.pageX;
        data.isProgress = true;
        data.initialContentContainerWidthInPercentage = contentWidthInPercentage;
        data.initialEditorContainerWidthInPercentage = editorWidthInPercentage;
        return __spreadValues({}, data);
      });
    });
  }
  listenToResize() {
    fromEvent(this.document, "mousemove").pipe(map((event) => ({ editor: this.editor, event })), filter((eventAndEditor) => !!eventAndEditor.editor?.nativeElement), takeUntilDestroyed(this.destroyRef)).subscribe(({ event }) => {
      if (this.resizeData().isProgress) {
        const newDividerPosition = event.pageX;
        const containerWidth = this.getParentContainerWidth();
        const shift = (newDividerPosition - this.resizeData().initialDividerPosition) / containerWidth * 100;
        const newContentWidthInPercentage = this.resizeData().initialContentContainerWidthInPercentage + shift;
        const newEditorWidthInPercentage = this.resizeData().initialEditorContainerWidthInPercentage - shift;
        this.setWidthOfTheContainers(newContentWidthInPercentage, newEditorWidthInPercentage);
      }
    });
  }
  listenToResizeEnd() {
    fromEvent(this.document, "mouseup").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.resizeData().isProgress) {
        this.content.nativeElement.style.minWidth = `${MIN_WIDTH_OF_CONTENT_IN_PX}px`;
        this.resizeData.update((data) => {
          data.isProgress = false;
          data.initialDividerPosition = 0;
          data.initialContentContainerWidthInPercentage = 0;
          data.initialEditorContainerWidthInPercentage = 0;
          return __spreadValues({}, data);
        });
      }
    });
  }
  // When resizer bar is focused, resize containers when user presses key arrows.
  resizeContainersUsingKeyArrows() {
    combineLatest([
      this.focusMonitor.monitor(this.resizer),
      fromEvent(this.document, "keydown")
    ]).pipe(filter(([origin, keyEvent]) => !!origin && (keyEvent.key === "ArrowLeft" || keyEvent.key === "ArrowRight")), takeUntilDestroyed(this.destroyRef), finalize(() => this.focusMonitor.stopMonitoring(this.resizer))).subscribe(([_, keyEvent]) => {
      const shift = keyEvent.key === "ArrowLeft" ? -1 : 1;
      const contentWidth = this.getCurrentContainerWidth(this.content.nativeElement);
      const editorWidth = this.getCurrentContainerWidth(this.editor.nativeElement);
      this.setWidthOfTheContainers(contentWidth + shift, editorWidth - shift);
    });
  }
  setWidthOfTheContainers(newContentWidthInPercentage, newEditorWidthInPercentage) {
    const containerWidth = this.container.nativeElement.offsetWidth;
    const newContentWidthInPx = containerWidth * newContentWidthInPercentage / 100;
    if (newContentWidthInPx > MIN_WIDTH_OF_CONTENT_IN_PX && newContentWidthInPx < MAX_WIDTH_OF_CONTENT_IN_PX && this.editor) {
      this.content.nativeElement.style.width = `${newContentWidthInPercentage}%`;
      this.editor.nativeElement.style.width = `${newEditorWidthInPercentage}%`;
    }
  }
  getCurrentContainerWidth(element) {
    const savedWidth = Number(element.style.width.replace("%", ""));
    return savedWidth > 0 ? savedWidth : element.offsetWidth / this.getParentContainerWidth() * 100;
  }
  getParentContainerWidth() {
    return this.resizer.nativeElement.offsetWidth + this.content.nativeElement.offsetWidth + this.editor.nativeElement.offsetWidth;
  }
};
__name(_SplitResizerHandler, "SplitResizerHandler");
__publicField(_SplitResizerHandler, "\u0275fac", /* @__PURE__ */ __name(function SplitResizerHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SplitResizerHandler)();
}, "SplitResizerHandler_Factory"));
__publicField(_SplitResizerHandler, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SplitResizerHandler, factory: _SplitResizerHandler.\u0275fac }));
var SplitResizerHandler = _SplitResizerHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitResizerHandler, [{
    type: Injectable
  }], null, null);
})();

// src/app/features/tutorial/tutorial.component.ts
var _c0 = ["content"];
var _c1 = ["editor"];
var _c2 = ["resizer"];
var _c3 = ["revealAnswerButton"];
var _c4 = /* @__PURE__ */ __name((a0) => ({ restrictedMode: a0 }), "_c4");
function Tutorial_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(Tutorial_ng_container_1_Template, "Tutorial_ng_container_1_Template");
function Tutorial_Conditional_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(Tutorial_Conditional_2_ng_container_2_Template, "Tutorial_Conditional_2_ng_container_2_Template");
function Tutorial_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "main", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("docContent", ctx);
  }
}
__name(Tutorial_Conditional_2_Conditional_3_Template, "Tutorial_Conditional_2_Conditional_3_Template");
function Tutorial_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10, 2);
    \u0275\u0275template(2, Tutorial_Conditional_2_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275conditionalCreate(3, Tutorial_Conditional_2_Conditional_3_Template, 1, 1, "main", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const tutorialNav_r2 = \u0275\u0275reference(7);
    \u0275\u0275classProp("adev-nav-open", ctx_r0.showNavigationDropdown());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", tutorialNav_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r0.documentContent()) ? 3 : -1, tmp_6_0);
  }
}
__name(Tutorial_Conditional_2_Template, "Tutorial_Conditional_2_Template");
function Tutorial_Conditional_5_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(Tutorial_Conditional_5_Conditional_2_ng_container_0_Template, "Tutorial_Conditional_5_Conditional_2_ng_container_0_Template");
function Tutorial_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tutorial_Conditional_5_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.embeddedEditorComponent)("ngComponentOutletInputs", \u0275\u0275pureFunction1(2, _c4, ctx_r0.restrictedMode()));
  }
}
__name(Tutorial_Conditional_5_Conditional_2_Template, "Tutorial_Conditional_5_Conditional_2_Template");
function Tutorial_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12, 3);
    \u0275\u0275conditionalCreate(2, Tutorial_Conditional_5_Conditional_2_Template, 1, 4, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("adev-split-tutorial", ctx_r0.shouldRenderContent());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.embeddedEditorComponent ? 2 : -1);
  }
}
__name(Tutorial_Conditional_5_Template, "Tutorial_Conditional_5_Template");
function Tutorial_ng_template_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26, 4);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function Tutorial_ng_template_6_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.answerRevealed() ? ctx_r0.handleResetAnswer() : ctx_r0.handleRevealAnswer());
    }, "Tutorial_ng_template_6_Conditional_10_Template_button_click_0_listener"));
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("adev-reset-answer-button", ctx_r0.answerRevealed());
    \u0275\u0275property("disabled", !ctx_r0.canRevealAnswer());
    \u0275\u0275attribute("text", ctx_r0.answerRevealed() ? "\u91CD\u7F6E" : "\u663E\u793A\u7B54\u6848")("aria-label", ctx_r0.answerRevealed() ? "\u91CD\u7F6E" : "\u663E\u793A\u7B54\u6848");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.answerRevealed() ? "\u91CD\u7F6E" : "\u663E\u793A\u7B54\u6848", " ");
  }
}
__name(Tutorial_ng_template_6_Conditional_10_Template, "Tutorial_ng_template_6_Conditional_10_Template");
function Tutorial_ng_template_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "button", 27)(2, "docs-icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("download", ctx_r0.stepName() + ".zip")("href", ctx_r0.localTutorialZipUrl(), \u0275\u0275sanitizeUrl);
  }
}
__name(Tutorial_ng_template_6_Conditional_11_Template, "Tutorial_ng_template_6_Conditional_11_Template");
function Tutorial_ng_template_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21)(1, "button", 28)(2, "docs-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.previousStepPath);
  }
}
__name(Tutorial_ng_template_6_Conditional_13_Template, "Tutorial_ng_template_6_Conditional_13_Template");
function Tutorial_ng_template_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 22)(1, "docs-icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
}
__name(Tutorial_ng_template_6_Conditional_14_Template, "Tutorial_ng_template_6_Conditional_14_Template");
function Tutorial_ng_template_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21)(1, "button", 28)(2, "docs-icon");
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.nextStepPath);
  }
}
__name(Tutorial_ng_template_6_Conditional_15_Template, "Tutorial_ng_template_6_Conditional_15_Template");
function Tutorial_ng_template_6_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 22)(1, "docs-icon");
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
}
__name(Tutorial_ng_template_6_Conditional_16_Template, "Tutorial_ng_template_6_Conditional_16_Template");
function Tutorial_ng_template_6_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29, 4);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function Tutorial_ng_template_6_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.answerRevealed() ? ctx_r0.handleResetAnswer() : ctx_r0.handleRevealAnswer());
    }, "Tutorial_ng_template_6_Conditional_18_Template_button_click_0_listener"));
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("adev-reset-answer-button", ctx_r0.answerRevealed());
    \u0275\u0275property("disabled", !ctx_r0.canRevealAnswer());
    \u0275\u0275attribute("text", ctx_r0.answerRevealed() ? "\u91CD\u7F6E" : "\u663E\u793A\u7B54\u6848")("aria-label", ctx_r0.answerRevealed() ? "\u91CD\u7F6E" : "\u663E\u793A\u7B54\u6848");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.answerRevealed() ? "\u91CD\u7F6E" : "\u663E\u793A\u7B54\u6848", " ");
  }
}
__name(Tutorial_ng_template_6_Conditional_18_Template, "Tutorial_ng_template_6_Conditional_18_Template");
function Tutorial_ng_template_6_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21);
    \u0275\u0275text(1, "\u4E0B\u4E00\u4E2A\u6559\u7A0B");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", "/" + ctx_r0.nextTutorialPath());
  }
}
__name(Tutorial_ng_template_6_Conditional_19_Conditional_2_Template, "Tutorial_ng_template_6_Conditional_19_Conditional_2_Template");
function Tutorial_ng_template_6_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("docsClickOutside", /* @__PURE__ */ __name(function Tutorial_ng_template_6_Conditional_19_Template_div_docsClickOutside_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hideNavigationDropdown());
    }, "Tutorial_ng_template_6_Conditional_19_Template_div_docsClickOutside_0_listener"));
    \u0275\u0275element(1, "docs-navigation-list", 31);
    \u0275\u0275conditionalCreate(2, Tutorial_ng_template_6_Conditional_19_Conditional_2_Template, 2, 1, "a", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("isDropdownView", true)("navigationItems", ctx_r0.tutorialNavigationItems());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nextTutorialPath() ? 2 : -1);
  }
}
__name(Tutorial_ng_template_6_Conditional_19_Template, "Tutorial_ng_template_6_Conditional_19_Template");
function Tutorial_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "button", 16);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function Tutorial_ng_template_6_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleNavigationDropdown($event));
    }, "Tutorial_ng_template_6_Template_button_click_2_listener"));
    \u0275\u0275elementStart(3, "docs-icon");
    \u0275\u0275text(4, "unfold_more");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, Tutorial_ng_template_6_Conditional_10_Template, 3, 6, "button", 18);
    \u0275\u0275conditionalCreate(11, Tutorial_ng_template_6_Conditional_11_Template, 4, 2, "a", 19);
    \u0275\u0275elementStart(12, "div", 20);
    \u0275\u0275conditionalCreate(13, Tutorial_ng_template_6_Conditional_13_Template, 4, 1, "a", 21);
    \u0275\u0275conditionalCreate(14, Tutorial_ng_template_6_Conditional_14_Template, 3, 0, "button", 22);
    \u0275\u0275conditionalCreate(15, Tutorial_ng_template_6_Conditional_15_Template, 4, 1, "a", 21);
    \u0275\u0275conditionalCreate(16, Tutorial_ng_template_6_Conditional_16_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 23);
    \u0275\u0275conditionalCreate(18, Tutorial_ng_template_6_Conditional_18_Template, 3, 6, "button", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, Tutorial_ng_template_6_Conditional_19_Template, 3, 3, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("adev-nav-open", ctx_r0.showNavigationDropdown());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.tutorialName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.stepName());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.shouldRenderRevealAnswer() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.localTutorialZipUrl() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.previousStepPath ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.previousStepPath ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nextStepPath ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.nextStepPath ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.shouldRenderRevealAnswer() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showNavigationDropdown() ? 19 : -1);
  }
}
__name(Tutorial_ng_template_6_Template, "Tutorial_ng_template_6_Template");
var INTRODUCTION_LABEL = "\u7B80\u4ECB";
var _Tutorial = class _Tutorial {
  content = viewChild("content", ...ngDevMode ? [{ debugName: "content" }] : []);
  editor = viewChild("editor", ...ngDevMode ? [{ debugName: "editor" }] : []);
  resizer = viewChild.required("resizer");
  revealAnswerButton = viewChild("revealAnswerButton", ...ngDevMode ? [{ debugName: "revealAnswerButton" }] : []);
  changeDetectorRef = inject(ChangeDetectorRef);
  environmentInjector = inject(EnvironmentInjector);
  elementRef = inject(ElementRef);
  embeddedTutorialManager = inject(EmbeddedTutorialManager);
  nodeRuntimeState = inject(NodeRuntimeState);
  route = inject(ActivatedRoute);
  splitResizerHandler = inject(SplitResizerHandler);
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  documentContent = signal(null, ...ngDevMode ? [{ debugName: "documentContent" }] : []);
  localTutorialZipUrl = signal(void 0, ...ngDevMode ? [{ debugName: "localTutorialZipUrl" }] : []);
  nextTutorialPath = signal(null, ...ngDevMode ? [{ debugName: "nextTutorialPath" }] : []);
  stepName = signal(null, ...ngDevMode ? [{ debugName: "stepName" }] : []);
  tutorialName = signal(null, ...ngDevMode ? [{ debugName: "tutorialName" }] : []);
  tutorialNavigationItems = signal([], ...ngDevMode ? [{ debugName: "tutorialNavigationItems" }] : []);
  showNavigationDropdown = signal(false, ...ngDevMode ? [{ debugName: "showNavigationDropdown" }] : []);
  shouldRenderContent = signal(false, ...ngDevMode ? [{ debugName: "shouldRenderContent" }] : []);
  shouldRenderEmbeddedEditor = signal(false, ...ngDevMode ? [{ debugName: "shouldRenderEmbeddedEditor" }] : []);
  shouldRenderRevealAnswer = signal(false, ...ngDevMode ? [{ debugName: "shouldRenderRevealAnswer" }] : []);
  restrictedMode = signal(false, ...ngDevMode ? [{ debugName: "restrictedMode" }] : []);
  nextStepPath;
  previousStepPath;
  embeddedEditorComponent;
  canRevealAnswer = signal(false, ...ngDevMode ? [{ debugName: "canRevealAnswer" }] : []);
  answerRevealed = signal(false, ...ngDevMode ? [{ debugName: "answerRevealed" }] : []);
  constructor() {
    this.route.data.pipe(filter(() => Boolean(this.route?.routeConfig?.path?.startsWith(`${PAGE_PREFIX.TUTORIALS}/`))), takeUntilDestroyed()).subscribe((data) => {
      const docContent = data["docContent"]?.contents ?? null;
      this.documentContent.set(docContent);
      this.setTutorialData(data);
    });
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      this.splitResizerHandler.init(this.elementRef, this.content(), this.resizer(), this.editor());
      from(this.loadEmbeddedEditorComponent()).pipe(takeUntilDestroyed(destroyRef)).subscribe((editorComponent) => {
        this.embeddedEditorComponent = editorComponent;
        this.changeDetectorRef.markForCheck();
      });
    });
  }
  toggleNavigationDropdown($event) {
    $event.stopPropagation();
    this.showNavigationDropdown.update((state) => !state);
  }
  hideNavigationDropdown() {
    this.showNavigationDropdown.set(false);
  }
  async handleRevealAnswer() {
    if (!this.canRevealAnswer())
      return;
    this.embeddedTutorialManager.revealAnswer();
    const nodeRuntimeSandbox = await injectNodeRuntimeSandbox(this.environmentInjector);
    await Promise.all(Object.entries(this.embeddedTutorialManager.answerFiles()).map(([path, contents]) => nodeRuntimeSandbox.writeFile(path, contents)));
    this.answerRevealed.set(true);
  }
  async handleResetAnswer() {
    if (!this.canRevealAnswer())
      return;
    this.embeddedTutorialManager.resetRevealAnswer();
    const nodeRuntimeSandbox = await injectNodeRuntimeSandbox(this.environmentInjector);
    await Promise.all(Object.entries(this.embeddedTutorialManager.tutorialFiles()).map(([path, contents]) => nodeRuntimeSandbox.writeFile(path, contents)));
    this.answerRevealed.set(false);
  }
  /**
   * Set tutorial data based on current tutorial
   */
  async setTutorialData(tutorialNavigationItem) {
    this.showNavigationDropdown.set(false);
    this.answerRevealed.set(false);
    this.restrictedMode.set(tutorialNavigationItem.tutorialData.restrictedMode);
    this.setRouteData(tutorialNavigationItem);
    const { tutorialData: routeData } = tutorialNavigationItem;
    if (routeData.type === "local") {
      this.setLocalTutorialData(routeData);
    } else if ((routeData.type === "editor" || routeData.type === "cli") && this.isBrowser) {
      await this.setEditorTutorialData(tutorialNavigationItem.path.replace(`${PAGE_PREFIX.TUTORIALS}/`, ""));
    }
  }
  /**
   * Set tutorial data from route data
   */
  setRouteData(tutorialNavigationItem) {
    const { tutorialData: routeData } = tutorialNavigationItem;
    const tutorialName = tutorialNavigationItem.parent ? tutorialNavigationItem.parent.label : tutorialNavigationItem.label;
    const stepName = routeData.title === tutorialName ? INTRODUCTION_LABEL : routeData.title;
    this.tutorialName.set(tutorialName);
    this.stepName.set(stepName);
    this.tutorialNavigationItems.set(tutorialNavigationItem.parent ? [__spreadProps(__spreadValues({}, tutorialNavigationItem.parent), { label: INTRODUCTION_LABEL })] : [__spreadProps(__spreadValues({}, tutorialNavigationItem), { label: INTRODUCTION_LABEL })]);
    this.shouldRenderContent.set(
      routeData.type !== "editor-only"
      /* TutorialType.EDITOR_ONLY */
    );
    this.nextStepPath = routeData.nextStep ? `/${routeData.nextStep}` : void 0;
    this.previousStepPath = routeData.previousStep ? `/${routeData.previousStep}` : void 0;
    this.nextTutorialPath.set(routeData.nextTutorial ? `/${routeData.nextTutorial}` : null);
  }
  /**
   * Set values for tutorials that do not use the embedded editor
   */
  setLocalTutorialData(routeData) {
    this.localTutorialZipUrl.set(routeData.sourceCodeZipPath);
    this.shouldRenderEmbeddedEditor.set(false);
    this.shouldRenderRevealAnswer.set(false);
  }
  /**
   * Set values for tutorials that use the embedded editor
   */
  async setEditorTutorialData(tutorialPath) {
    this.shouldRenderEmbeddedEditor.set(true);
    const currentTutorial = tutorialPath.replace(`${PAGE_PREFIX.TUTORIALS}/`, "");
    await this.embeddedTutorialManager.fetchAndSetTutorialFiles(currentTutorial);
    const hasAnswers = Object.keys(this.embeddedTutorialManager.answerFiles()).length > 0;
    this.shouldRenderRevealAnswer.set(hasAnswers);
    await this.loadEmbeddedEditor();
  }
  async loadEmbeddedEditor() {
    const nodeRuntimeSandbox = await injectNodeRuntimeSandbox(this.environmentInjector);
    this.canRevealAnswer = computed(() => this.nodeRuntimeState.loadingStep() > LoadingStep.BOOT, ...ngDevMode ? [{ debugName: "canRevealAnswer" }] : []);
    await nodeRuntimeSandbox.init();
  }
  async loadEmbeddedEditorComponent() {
    return await import("./chunk-PJWF6GGR.js").then((c) => c.EmbeddedEditor);
  }
};
__name(_Tutorial, "Tutorial");
__publicField(_Tutorial, "\u0275fac", /* @__PURE__ */ __name(function Tutorial_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tutorial)();
}, "Tutorial_Factory"));
__publicField(_Tutorial, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tutorial, selectors: [["adev-tutorial"]], viewQuery: /* @__PURE__ */ __name(function Tutorial_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.content, _c0, 5);
    \u0275\u0275viewQuerySignal(ctx.editor, _c1, 5);
    \u0275\u0275viewQuerySignal(ctx.resizer, _c2, 5);
    \u0275\u0275viewQuerySignal(ctx.revealAnswerButton, _c3, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(4);
  }
}, "Tutorial_Query"), features: [\u0275\u0275ProvidersFeature([SplitResizerHandler])], decls: 8, vars: 7, consts: [["resizer", ""], ["tutorialNav", ""], ["content", ""], ["editor", ""], ["revealAnswerButton", ""], [1, "adev-page-content"], [4, "ngTemplateOutlet"], [1, "docs-tutorial-content", 3, "adev-nav-open"], ["role", "separator", 1, "adev-tutorial-resizer"], [1, "docs-tutorial-editor", 3, "adev-split-tutorial"], [1, "docs-tutorial-content"], ["docsViewer", "", 1, "docs-viewer", "docs-viewer-scroll-margin-large", 3, "docContent"], [1, "docs-tutorial-editor"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [1, "adev-tutorial-nav-container"], [1, "adev-tutorial-nav"], [1, "adev-unfold-button", 3, "click"], [1, "adev-current-tutorial"], [1, "docs-reveal-answer-button", "adev-reveal-desktop-button", "docs-primary-btn", 3, "disabled", "adev-reset-answer-button"], [3, "download", "href"], [1, "adev-nav-arrows"], [3, "routerLink"], ["disabled", "", 1, "docs-primary-btn"], [1, "adev-reveal-mobile-button-container"], [1, "docs-reveal-answer-button", "adev-reveal-mobile-button", "docs-primary-btn", 3, "disabled", "adev-reset-answer-button"], [1, "adev-tutorial-nav-list-dropdown"], [1, "docs-reveal-answer-button", "adev-reveal-desktop-button", "docs-primary-btn", 3, "click", "disabled"], [1, "adev-download-button", "docs-primary-btn"], [1, "docs-primary-btn"], [1, "docs-reveal-answer-button", "adev-reveal-mobile-button", "docs-primary-btn", 3, "click", "disabled"], [1, "adev-tutorial-nav-list-dropdown", 3, "docsClickOutside"], [1, "adev-nav-list", 3, "isDropdownView", "navigationItems"]], template: /* @__PURE__ */ __name(function Tutorial_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, Tutorial_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275conditionalCreate(2, Tutorial_Conditional_2_Template, 4, 4, "div", 7);
    \u0275\u0275element(3, "button", 8, 0);
    \u0275\u0275conditionalCreate(5, Tutorial_Conditional_5_Template, 3, 3, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Tutorial_ng_template_6_Template, 20, 12, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const tutorialNav_r2 = \u0275\u0275reference(7);
    \u0275\u0275classProp("adev-nav-open", ctx.showNavigationDropdown());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tutorialNav_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.shouldRenderContent() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("adev-tutorial-resizer-hidden", !ctx.shouldRenderEmbeddedEditor() || !ctx.shouldRenderContent());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.shouldRenderEmbeddedEditor() ? 5 : -1);
  }
}, "Tutorial_Template"), dependencies: [
  NgComponentOutlet,
  NgTemplateOutlet,
  DocViewer,
  NavigationList,
  ClickOutside,
  RouterLink,
  IconComponent
], styles: ['\n\n.adev-page-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: row;\n  position: relative;\n  padding: 0 var(--layout-padding) var(--layout-padding);\n  max-width: calc(100vw - var(--layout-padding) * 2);\n  container: page-content/inline-size;\n}\n@media (max-width: 900px) {\n  .adev-page-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (min-width: 900.01px) {\n  .adev-page-content[_ngcontent-%COMP%]    > .adev-tutorial-nav-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.adev-page-content.adev-nav-open[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.adev-page-content[_ngcontent-%COMP%]:has(.docs-tutorial-editor)   .docs-tutorial-content[_ngcontent-%COMP%] {\n  width: calc(50% - 0.0625rem - var(--layout-padding));\n}\n@media (max-width: 900px) {\n  .adev-page-content[_ngcontent-%COMP%]:has(.docs-tutorial-editor)   .docs-tutorial-content[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n@media (max-width: 900px) {\n  .adev-page-content[_ngcontent-%COMP%]:has(.adev-tutorial-nav-container)   .docs-tutorial-editor[_ngcontent-%COMP%] {\n    height: calc(100vh - 200px);\n  }\n}\n@media (max-width: 700px) {\n  .adev-page-content[_ngcontent-%COMP%]:has(.adev-tutorial-nav-container)   .docs-tutorial-editor[_ngcontent-%COMP%] {\n    height: calc(100vh - 200px);\n  }\n}\n.docs-tutorial-content[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 100%;\n  box-sizing: content-box;\n  container: tutorial-content/inline-size;\n  z-index: var(--z-index-content);\n}\n@media (max-width: 900px) {\n  .docs-tutorial-content[_ngcontent-%COMP%]    > .adev-tutorial-nav-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.docs-tutorial-content.adev-nav-open[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n@media (min-width: 1430.01px) {\n  .docs-tutorial-content[_ngcontent-%COMP%]   .docs-viewer[_ngcontent-%COMP%] {\n    margin-left: 0rem;\n    width: unset;\n  }\n}\n.docs-viewer[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.adev-tutorial-resizer[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--layout-padding);\n  width: 0.0625rem;\n  padding-inline: 1.56rem;\n  margin-block-start: var(--layout-padding);\n  cursor: col-resize;\n  align-self: stretch;\n  height: 100vh;\n}\n.adev-tutorial-resizer[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: calc(50% - 0.5px);\n  top: 0;\n  bottom: 0;\n  background: var(--senary-contrast);\n  transition: background 0.3s ease;\n  width: 1px;\n}\n.adev-tutorial-resizer-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 900px) {\n  .adev-tutorial-resizer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.docs-tutorial-editor[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  min-width: 300px;\n  padding-block-start: var(--layout-padding);\n  height: calc(100vh - var(--layout-padding));\n  z-index: var(--z-index-nav);\n}\n.adev-split-tutorial[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (min-width: 1800.01px) {\n  .adev-split-tutorial[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 900px) {\n  .adev-split-tutorial[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=tutorial.component.css.map */', "\n\n.adev-tutorial-nav-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  background-color: var(--page-background);\n  padding-block-start: var(--layout-padding);\n  padding-block-end: calc(1.5rem + 50px);\n  margin-block-end: 1rem;\n  border-block-end: 1px solid var(--septenary-contrast);\n  z-index: var(--z-index-nav);\n  transition: background-color 0.3s ease;\n  container: nav-container/inline-size;\n}\n@media (max-width: 900px) {\n  .adev-tutorial-nav-container[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n}\n@media (max-width: 700px) {\n  .adev-tutorial-nav-container[_ngcontent-%COMP%] {\n    top: 55px;\n  }\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-tutorial-nav-container[_ngcontent-%COMP%]:has(.docs-reveal-answer-button) {\n    padding-block-end: calc(1.5rem + 85px);\n  }\n}\n@container page-content (max-width: 430px) {\n  .adev-tutorial-nav-container[_ngcontent-%COMP%]:has(.docs-reveal-answer-button) {\n    padding-block-end: calc(1.5rem + 85px);\n  }\n}\n.adev-tutorial-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  flex-wrap: wrap;\n  z-index: var(--z-index-nav);\n}\n.adev-unfold-button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  padding-inline: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  flex: 1;\n  z-index: var(--z-index-nav);\n}\n.adev-unfold-button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  min-width: 1.5rem;\n  color: var(--quinary-contrast);\n  transition: color 0.2s ease-in-out;\n}\n.adev-nav-open[_ngcontent-%COMP%]   .adev-unfold-button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%], \n.adev-unfold-button[_ngcontent-%COMP%]:hover   docs-icon[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n}\n.adev-current-tutorial[_ngcontent-%COMP%] {\n  text-align: left;\n  letter-spacing: 0.00875rem;\n}\n.adev-current-tutorial[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-block-end: 0.2rem;\n  color: var(--quaternary-contrast);\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adev-current-tutorial[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n  font-weight: 500;\n  font-size: 0.875rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adev-download-button[_ngcontent-%COMP%] {\n  width: 2.875rem;\n  height: 2.875rem;\n  padding: 0;\n}\n@container nav-container (max-width: 430px) {\n  .adev-reveal-desktop-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.adev-reveal-mobile-button-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n@container nav-container (max-width: 430px) {\n  .adev-reveal-mobile-button-container[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: end;\n  }\n}\n@container nav-container (min-width: 430px) {\n  .adev-reveal-mobile-button-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.docs-reveal-answer-button[_ngcontent-%COMP%] {\n  height: 2.875rem;\n  width: 120px;\n}\n.adev-reset-answer-button[_ngcontent-%COMP%] {\n  background: var(--senary-contrast);\n  transition: opacity 0.3s ease, background 0.3s ease;\n}\n.adev-reset-answer-button[_ngcontent-%COMP%]:hover {\n  background: var(--quinary-contrast);\n}\n.adev-reset-answer-button[_ngcontent-%COMP%]:hover::after {\n  opacity: 0;\n}\n.adev-reset-answer-button[_ngcontent-%COMP%]:hover::before {\n  background: var(--octonary-contrast);\n}\n.adev-nav-arrows[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n.adev-nav-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 2.875rem;\n  height: 2.875rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.adev-nav-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background: var(--quinary-contrast);\n}\n.adev-nav-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   docs-icon[_ngcontent-%COMP%] {\n  color: var(--quinary-contrast);\n}\n.adev-nav-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  z-index: var(--z-index-icon);\n  color: var(--primary-contrast);\n}\n/*# sourceMappingURL=tutorial-navigation.css.map */", '\n\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%] {\n  background-color: var(--page-background);\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  z-index: var(--z-index-nav);\n  margin-top: 1rem;\n  width: 100%;\n  box-shadow: 10px 4px 40px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-block-end: 1rem;\n}\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: sticky;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  color: var(--gray-400);\n  background-color: var(--page-background);\n  border-block-start: 1px solid var(--senary-contrast);\n  border-radius: 0 0 0.25rem 0.25rem;\n  text-align: right;\n  padding: 1rem;\n  font-size: 0.875rem;\n  transition: color 0.3s ease;\n}\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-contrast);\n  background-color: var(--octonary-contrast);\n}\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: "chevron_right";\n  font-family: var(--icons);\n  font-size: 1.3rem;\n  margin-inline-start: 0.2rem;\n}\n.adev-nav-list[_ngcontent-%COMP%] {\n  height: max-content;\n  max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 67px);\n  padding-block-start: 1rem;\n  padding-block-end: 0;\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-nav-list[_ngcontent-%COMP%] {\n    max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 105px);\n  }\n}\n@media (max-width: 900px) {\n  .adev-nav-list[_ngcontent-%COMP%] {\n    max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 167px);\n  }\n}\n.adev-nav-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--senary-contrast);\n}\n/*# sourceMappingURL=tutorial-navigation-list.css.map */'], changeDetection: 0 }));
var Tutorial = _Tutorial;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tutorial, [{
    type: Component,
    args: [{ selector: "adev-tutorial", imports: [
      NgComponentOutlet,
      NgTemplateOutlet,
      DocViewer,
      NavigationList,
      ClickOutside,
      RouterLink,
      IconComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [SplitResizerHandler], template: `<div class="adev-page-content" [class.adev-nav-open]="showNavigationDropdown()">
  <ng-container *ngTemplateOutlet="tutorialNav" />
  @if (shouldRenderContent()) {
    <div #content class="docs-tutorial-content" [class.adev-nav-open]="showNavigationDropdown()">
      <!-- Tutorial Nav: Current Tutorial Title and Nav Buttons -->
      <ng-container *ngTemplateOutlet="tutorialNav" />

      <!-- Tutorial Content -->
      @if (documentContent(); as documentContent) {
        <main docsViewer
          [docContent]="documentContent"
          class="docs-viewer docs-viewer-scroll-margin-large"></main>
      }
    </div>
  }

  <!-- Split View Resizer -->
  <button
    role="separator"
    #resizer
    class="adev-tutorial-resizer"
    [class.adev-tutorial-resizer-hidden]="!shouldRenderEmbeddedEditor() || !shouldRenderContent()"
  ></button>

  <!-- Embedded Editor -->
  @if (shouldRenderEmbeddedEditor()) {
    <div #editor class="docs-tutorial-editor" [class.adev-split-tutorial]="shouldRenderContent()">
      @if (embeddedEditorComponent) {
        <ng-container
          *ngComponentOutlet="embeddedEditorComponent; inputs:{restrictedMode:restrictedMode()}"
        />
      }
    </div>
  }
</div>

<!-- Tutorial Nav Template -->
<ng-template #tutorialNav>
  <div class="adev-tutorial-nav-container">
    <div class="adev-tutorial-nav" [class.adev-nav-open]="showNavigationDropdown()">
      <!-- Toggle Nav Button -->
      <button class="adev-unfold-button" (click)="toggleNavigationDropdown($event)">
        <docs-icon>unfold_more</docs-icon>
        <div class="adev-current-tutorial">
          <span>{{ tutorialName() }}</span>
          <span>{{ stepName() }}</span>
        </div>
      </button>

      <!-- Reveal Answer Button -->
      @if (shouldRenderRevealAnswer()) {
        <button
          #revealAnswerButton
          (click)="answerRevealed() ? handleResetAnswer() : handleRevealAnswer()"
          [disabled]="!canRevealAnswer()"
          class="docs-reveal-answer-button adev-reveal-desktop-button docs-primary-btn"
          [attr.text]="answerRevealed() ? '\u91CD\u7F6E' : '\u663E\u793A\u7B54\u6848'"
          [attr.aria-label]="answerRevealed() ? '\u91CD\u7F6E' : '\u663E\u793A\u7B54\u6848'"
          [class.adev-reset-answer-button]="answerRevealed()"
        >
          {{ answerRevealed() ? '\u91CD\u7F6E' : '\u663E\u793A\u7B54\u6848' }}
        </button>
      }

      <!-- Download code -->
      @if (localTutorialZipUrl()) {
        <a [download]="stepName() + '.zip'" [href]="localTutorialZipUrl()">
          <button class="adev-download-button docs-primary-btn">
            <docs-icon>download</docs-icon>
          </button>
        </a>
      }

      <div class="adev-nav-arrows">
        @if (previousStepPath) {
          <a [routerLink]="previousStepPath">
            <button class="docs-primary-btn">
              <docs-icon>chevron_left</docs-icon>
            </button>
          </a>
        }
        @if (!previousStepPath) {
          <button class="docs-primary-btn" disabled>
            <docs-icon>chevron_left</docs-icon>
          </button>
        }

        @if (nextStepPath) {
          <a [routerLink]="nextStepPath">
            <button class="docs-primary-btn">
              <docs-icon>chevron_right</docs-icon>
            </button>
          </a>
        }
        @if (!nextStepPath) {
          <button class="docs-primary-btn" disabled>
            <docs-icon>chevron_right</docs-icon>
          </button>
        }
      </div>

      <!-- Reveal Answer Button: for smaller container -->
      <div class="adev-reveal-mobile-button-container">
        @if (shouldRenderRevealAnswer()) {
          <button
            #revealAnswerButton
            (click)="answerRevealed() ? handleResetAnswer() : handleRevealAnswer()"
            [disabled]="!canRevealAnswer()"
            class="docs-reveal-answer-button adev-reveal-mobile-button docs-primary-btn"
            [attr.text]="answerRevealed() ? '\u91CD\u7F6E' : '\u663E\u793A\u7B54\u6848'"
            [attr.aria-label]="answerRevealed() ? '\u91CD\u7F6E' : '\u663E\u793A\u7B54\u6848'"
            [class.adev-reset-answer-button]="answerRevealed()"
          >
            {{ answerRevealed() ? '\u91CD\u7F6E' : '\u663E\u793A\u7B54\u6848' }}
          </button>
        }
      </div>

      <!-- Tutorial Nav: List -->
      @if (showNavigationDropdown()) {
        <div class="adev-tutorial-nav-list-dropdown" (docsClickOutside)="hideNavigationDropdown()">
          <docs-navigation-list
            [isDropdownView]="true"
            [navigationItems]="tutorialNavigationItems()"
            class="adev-nav-list"
          />
          @if (nextTutorialPath()) {
            <a [routerLink]="'/' + nextTutorialPath()">\u4E0B\u4E00\u4E2A\u6559\u7A0B</a>
          }
        </div>
      }
    </div>
  </div>
</ng-template>
`, styles: ['/* src/app/features/tutorial/tutorial.component.scss */\n.adev-page-content {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: row;\n  position: relative;\n  padding: 0 var(--layout-padding) var(--layout-padding);\n  max-width: calc(100vw - var(--layout-padding) * 2);\n  container: page-content/inline-size;\n}\n@media (max-width: 900px) {\n  .adev-page-content {\n    flex-direction: column;\n  }\n}\n@media (min-width: 900.01px) {\n  .adev-page-content > .adev-tutorial-nav-container {\n    display: none;\n  }\n}\n.adev-page-content.adev-nav-open::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.adev-page-content:has(.docs-tutorial-editor) .docs-tutorial-content {\n  width: calc(50% - 0.0625rem - var(--layout-padding));\n}\n@media (max-width: 900px) {\n  .adev-page-content:has(.docs-tutorial-editor) .docs-tutorial-content {\n    width: 100% !important;\n  }\n}\n@media (max-width: 900px) {\n  .adev-page-content:has(.adev-tutorial-nav-container) .docs-tutorial-editor {\n    height: calc(100vh - 200px);\n  }\n}\n@media (max-width: 700px) {\n  .adev-page-content:has(.adev-tutorial-nav-container) .docs-tutorial-editor {\n    height: calc(100vh - 200px);\n  }\n}\n.docs-tutorial-content {\n  min-width: 300px;\n  width: 100%;\n  box-sizing: content-box;\n  container: tutorial-content/inline-size;\n  z-index: var(--z-index-content);\n}\n@media (max-width: 900px) {\n  .docs-tutorial-content > .adev-tutorial-nav-container {\n    display: none;\n  }\n}\n.docs-tutorial-content.adev-nav-open::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n@media (min-width: 1430.01px) {\n  .docs-tutorial-content .docs-viewer {\n    margin-left: 0rem;\n    width: unset;\n  }\n}\n.docs-viewer {\n  padding: 0;\n}\n.adev-tutorial-resizer {\n  position: sticky;\n  top: var(--layout-padding);\n  width: 0.0625rem;\n  padding-inline: 1.56rem;\n  margin-block-start: var(--layout-padding);\n  cursor: col-resize;\n  align-self: stretch;\n  height: 100vh;\n}\n.adev-tutorial-resizer::before {\n  content: "";\n  position: absolute;\n  left: calc(50% - 0.5px);\n  top: 0;\n  bottom: 0;\n  background: var(--senary-contrast);\n  transition: background 0.3s ease;\n  width: 1px;\n}\n.adev-tutorial-resizer-hidden {\n  display: none;\n}\n@media (max-width: 900px) {\n  .adev-tutorial-resizer {\n    display: none;\n  }\n}\n.docs-tutorial-editor {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  min-width: 300px;\n  padding-block-start: var(--layout-padding);\n  height: calc(100vh - var(--layout-padding));\n  z-index: var(--z-index-nav);\n}\n.adev-split-tutorial {\n  width: 50%;\n}\n@media (min-width: 1800.01px) {\n  .adev-split-tutorial {\n    width: 100%;\n  }\n}\n@media (max-width: 900px) {\n  .adev-split-tutorial {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=tutorial.component.css.map */\n', "/* src/app/features/tutorial/tutorial-navigation.scss */\n.adev-tutorial-nav-container {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  background-color: var(--page-background);\n  padding-block-start: var(--layout-padding);\n  padding-block-end: calc(1.5rem + 50px);\n  margin-block-end: 1rem;\n  border-block-end: 1px solid var(--septenary-contrast);\n  z-index: var(--z-index-nav);\n  transition: background-color 0.3s ease;\n  container: nav-container/inline-size;\n}\n@media (max-width: 900px) {\n  .adev-tutorial-nav-container {\n    top: 60px;\n  }\n}\n@media (max-width: 700px) {\n  .adev-tutorial-nav-container {\n    top: 55px;\n  }\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-tutorial-nav-container:has(.docs-reveal-answer-button) {\n    padding-block-end: calc(1.5rem + 85px);\n  }\n}\n@container page-content (max-width: 430px) {\n  .adev-tutorial-nav-container:has(.docs-reveal-answer-button) {\n    padding-block-end: calc(1.5rem + 85px);\n  }\n}\n.adev-tutorial-nav {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  flex-wrap: wrap;\n  z-index: var(--z-index-nav);\n}\n.adev-unfold-button {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  padding-inline: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  flex: 1;\n  z-index: var(--z-index-nav);\n}\n.adev-unfold-button docs-icon {\n  min-width: 1.5rem;\n  color: var(--quinary-contrast);\n  transition: color 0.2s ease-in-out;\n}\n.adev-nav-open .adev-unfold-button docs-icon,\n.adev-unfold-button:hover docs-icon {\n  color: var(--primary-contrast);\n}\n.adev-current-tutorial {\n  text-align: left;\n  letter-spacing: 0.00875rem;\n}\n.adev-current-tutorial span:first-child {\n  margin-block-end: 0.2rem;\n  color: var(--quaternary-contrast);\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adev-current-tutorial span {\n  color: var(--primary-contrast);\n  font-weight: 500;\n  font-size: 0.875rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adev-download-button {\n  width: 2.875rem;\n  height: 2.875rem;\n  padding: 0;\n}\n@container nav-container (max-width: 430px) {\n  .adev-reveal-desktop-button {\n    display: none;\n  }\n}\n.adev-reveal-mobile-button-container {\n  display: flex;\n}\n@container nav-container (max-width: 430px) {\n  .adev-reveal-mobile-button-container {\n    width: 100%;\n    justify-content: end;\n  }\n}\n@container nav-container (min-width: 430px) {\n  .adev-reveal-mobile-button-container {\n    display: none;\n  }\n}\n.docs-reveal-answer-button {\n  height: 2.875rem;\n  width: 120px;\n}\n.adev-reset-answer-button {\n  background: var(--senary-contrast);\n  transition: opacity 0.3s ease, background 0.3s ease;\n}\n.adev-reset-answer-button:hover {\n  background: var(--quinary-contrast);\n}\n.adev-reset-answer-button:hover::after {\n  opacity: 0;\n}\n.adev-reset-answer-button:hover::before {\n  background: var(--octonary-contrast);\n}\n.adev-nav-arrows {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n.adev-nav-arrows button {\n  width: 2.875rem;\n  height: 2.875rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.adev-nav-arrows button:disabled {\n  background: var(--quinary-contrast);\n}\n.adev-nav-arrows button:disabled docs-icon {\n  color: var(--quinary-contrast);\n}\n.adev-nav-arrows button docs-icon {\n  z-index: var(--z-index-icon);\n  color: var(--primary-contrast);\n}\n/*# sourceMappingURL=tutorial-navigation.css.map */\n", '/* src/app/features/tutorial/tutorial-navigation-list.scss */\n.adev-tutorial-nav-list-dropdown {\n  background-color: var(--page-background);\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  z-index: var(--z-index-nav);\n  margin-top: 1rem;\n  width: 100%;\n  box-shadow: 10px 4px 40px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-tutorial-nav-list-dropdown {\n    margin-top: 0;\n  }\n}\n.adev-tutorial-nav-list-dropdown ul {\n  padding-block-end: 1rem;\n}\n.adev-tutorial-nav-list-dropdown a {\n  position: sticky;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  color: var(--gray-400);\n  background-color: var(--page-background);\n  border-block-start: 1px solid var(--senary-contrast);\n  border-radius: 0 0 0.25rem 0.25rem;\n  text-align: right;\n  padding: 1rem;\n  font-size: 0.875rem;\n  transition: color 0.3s ease;\n}\n.adev-tutorial-nav-list-dropdown a:hover {\n  color: var(--primary-contrast);\n  background-color: var(--octonary-contrast);\n}\n.adev-tutorial-nav-list-dropdown a::after {\n  content: "chevron_right";\n  font-family: var(--icons);\n  font-size: 1.3rem;\n  margin-inline-start: 0.2rem;\n}\n.adev-nav-list {\n  height: max-content;\n  max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 67px);\n  padding-block-start: 1rem;\n  padding-block-end: 0;\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-nav-list {\n    max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 105px);\n  }\n}\n@media (max-width: 900px) {\n  .adev-nav-list {\n    max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 167px);\n  }\n}\n.adev-nav-list::-webkit-scrollbar-thumb {\n  background-color: var(--senary-contrast);\n}\n/*# sourceMappingURL=tutorial-navigation-list.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tutorial, { className: "Tutorial", filePath: "src/app/features/tutorial/tutorial.component.ts", lineNumber: 74 });
})();
export {
  Tutorial as default
};
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-3BGK2WSD.js.map

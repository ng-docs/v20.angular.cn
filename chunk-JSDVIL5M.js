import {
  injectAsync,
  injectNodeRuntimeSandbox
} from "./chunk-Q2GMJ2AP.js";
import "./chunk-4CBXRCG6.js";
import "./chunk-G7P5OSF4.js";
import "./chunk-4QI4G4N7.js";
import "./chunk-RMPG5AWL.js";
import "./chunk-4ONR2TF5.js";
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuTrigger
} from "./chunk-VVHPPJ64.js";
import "./chunk-NAIJRLAM.js";
import {
  IconComponent
} from "./chunk-A6VPSR6T.js";
import {
  takeUntilDestroyed
} from "./chunk-7F6UZAKO.js";
import "./chunk-UGE24TTQ.js";
import "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-IP3YSDXJ.js";
import "./chunk-H7FALWCD.js";
import {
  NgComponentOutlet,
  isPlatformServer
} from "./chunk-OV2CFM4K.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EnvironmentInjector,
  PLATFORM_ID,
  __name,
  __publicField,
  forkJoin,
  inject,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/assets/tutorials/playground/routes.json
var routes_default = { templates: [{ path: "playground/0-hello-world", label: "Hello world" }, { path: "playground/1-signals", label: "Signals" }, { path: "playground/3-minigame", label: "Minigame" }, { path: "playground/2-control-flow", label: "Control flow" }], defaultTemplate: { path: "playground/0-hello-world", label: "Hello world" }, starterTemplate: { path: "playground/2-control-flow", label: "Control flow" } };

// src/app/features/playground/playground.component.ts
var _forTrack0 = /* @__PURE__ */ __name(($index, $item) => $item.path, "_forTrack0");
function PlaygroundComponent_Conditional_12_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(PlaygroundComponent_Conditional_12_ng_container_0_Template, "PlaygroundComponent_Conditional_12_ng_container_0_Template");
function PlaygroundComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PlaygroundComponent_Conditional_12_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngComponentOutlet", ctx_r0.embeddedEditorComponent);
  }
}
__name(PlaygroundComponent_Conditional_12_Template, "PlaygroundComponent_Conditional_12_Template");
function PlaygroundComponent_ng_template_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 8);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function PlaygroundComponent_ng_template_13_For_2_Template_button_click_1_listener() {
      const template_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeTemplate(template_r3));
    }, "PlaygroundComponent_ng_template_13_For_2_Template_button_click_1_listener"));
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const template_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(template_r3.label);
  }
}
__name(PlaygroundComponent_ng_template_13_For_2_Template, "PlaygroundComponent_ng_template_13_For_2_Template");
function PlaygroundComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275repeaterCreate(1, PlaygroundComponent_ng_template_13_For_2_Template, 4, 1, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.templates);
  }
}
__name(PlaygroundComponent_ng_template_13_Template, "PlaygroundComponent_ng_template_13_Template");
var _PlaygroundComponent = class _PlaygroundComponent {
  changeDetectorRef = inject(ChangeDetectorRef);
  environmentInjector = inject(EnvironmentInjector);
  destroyRef = inject(DestroyRef);
  isServer = isPlatformServer(inject(PLATFORM_ID));
  templates = routes_default.templates;
  defaultTemplate = routes_default.defaultTemplate;
  starterTemplate = routes_default.starterTemplate;
  nodeRuntimeSandbox;
  embeddedEditorComponent;
  selectedTemplate = this.defaultTemplate;
  constructor() {
    if (this.isServer) {
      return;
    }
    forkJoin({
      nodeRuntimeSandbox: injectNodeRuntimeSandbox(this.environmentInjector),
      embeddedEditorComponent: import("./chunk-X357JHLB.js").then((c) => c.EmbeddedEditor)
    }).pipe(tap(({ nodeRuntimeSandbox, embeddedEditorComponent }) => {
      this.nodeRuntimeSandbox = nodeRuntimeSandbox;
      this.embeddedEditorComponent = embeddedEditorComponent;
    }), switchMap(() => this.loadTemplate(this.defaultTemplate.path)), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
      this.nodeRuntimeSandbox.init();
    });
  }
  async newProject() {
    await this.loadTemplate(this.starterTemplate.path);
  }
  async changeTemplate(template) {
    this.selectedTemplate = template;
    await this.loadTemplate(template.path);
    await this.nodeRuntimeSandbox.reset();
  }
  async loadTemplate(tutorialPath) {
    const embeddedTutorialManager = await injectAsync(this.environmentInjector, () => import("./chunk-X357JHLB.js").then((c) => c.EmbeddedTutorialManager));
    await embeddedTutorialManager.fetchAndSetTutorialFiles(tutorialPath);
  }
};
__name(_PlaygroundComponent, "PlaygroundComponent");
__publicField(_PlaygroundComponent, "\u0275fac", /* @__PURE__ */ __name(function PlaygroundComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlaygroundComponent)();
}, "PlaygroundComponent_Factory"));
__publicField(_PlaygroundComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaygroundComponent, selectors: [["adev-playground"]], decls: 15, vars: 3, consts: [["templatesMenu", ""], [1, "adev-playground-header"], ["tabindex", "-1"], [1, "adev-template-select"], ["for", "playgroundTemplate"], [3, "cdkMenuTriggerFor"], [4, "ngComponentOutlet"], ["cdkMenu", "", 1, "adev-template-dropdown"], ["cdkMenuItem", "", "type", "button", 3, "click"]], template: /* @__PURE__ */ __name(function PlaygroundComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header")(2, "h1", 2);
    \u0275\u0275text(3, "Angular \u6F14\u7EC3\u573A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "label", 4);
    \u0275\u0275text(6, "\u9009\u62E9\u6A21\u677F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "docs-icon");
    \u0275\u0275text(11, "expand_more");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(12, PlaygroundComponent_Conditional_12_Template, 1, 1, "ng-container");
    \u0275\u0275template(13, PlaygroundComponent_ng_template_13_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const templatesMenu_r4 = \u0275\u0275reference(14);
    \u0275\u0275advance(7);
    \u0275\u0275property("cdkMenuTriggerFor", templatesMenu_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.selectedTemplate.label);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.embeddedEditorComponent ? 12 : -1);
  }
}, "PlaygroundComponent_Template"), dependencies: [NgComponentOutlet, IconComponent, CdkMenu, CdkMenuItem, CdkMenuTrigger], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: var(--layout-padding);\n  padding-block-end: 100px;\n  height: 100vh;\n  width: 100%;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-block: 0;\n}\n.adev-playground-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-block: 1rem;\n}\n.adev-template-select[_ngcontent-%COMP%] {\n  margin-block-end: 0.5rem;\n}\n.adev-template-select[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--quaternary-contrast);\n  font-size: 0.875rem;\n  margin-block-end: 0.3rem;\n  margin-inline-start: 0.45rem;\n  display: block;\n}\n.adev-template-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  width: 200px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-block: 0.5rem;\n  font-weight: 400;\n  transition: border 0.3s ease;\n}\n.adev-template-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n  transition: color 0.3s ease;\n  margin-inline-start: 0.1rem;\n}\n.adev-template-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-template-dropdown[_ngcontent-%COMP%] {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  padding: 0;\n  transform: translateY(-0.7rem);\n}\n.adev-template-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  width: 198px;\n  box-sizing: border-box;\n}\n.adev-template-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--page-background);\n  font-size: 0.875rem;\n  width: 100%;\n  text-align: left;\n  padding-block: 0.5rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease, background 0.3s ease;\n  font-weight: 400;\n}\n.adev-template-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--senary-contrast);\n  color: var(--primary-contrast);\n}\n/*# sourceMappingURL=playground.component.css.map */", "\n\n.adev-tutorial-nav-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  background-color: var(--page-background);\n  padding-block-start: var(--layout-padding);\n  padding-block-end: calc(1.5rem + 50px);\n  margin-block-end: 1rem;\n  border-block-end: 1px solid var(--septenary-contrast);\n  z-index: var(--z-index-nav);\n  transition: background-color 0.3s ease;\n  container: nav-container/inline-size;\n}\n@media (max-width: 900px) {\n  .adev-tutorial-nav-container[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n}\n@media (max-width: 700px) {\n  .adev-tutorial-nav-container[_ngcontent-%COMP%] {\n    top: 55px;\n  }\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-tutorial-nav-container[_ngcontent-%COMP%]:has(.docs-reveal-answer-button) {\n    padding-block-end: calc(1.5rem + 85px);\n  }\n}\n@container page-content (max-width: 430px) {\n  .adev-tutorial-nav-container[_ngcontent-%COMP%]:has(.docs-reveal-answer-button) {\n    padding-block-end: calc(1.5rem + 85px);\n  }\n}\n.adev-tutorial-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  flex-wrap: wrap;\n  z-index: var(--z-index-nav);\n}\n.adev-unfold-button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  padding-inline: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  flex: 1;\n  z-index: var(--z-index-nav);\n}\n.adev-unfold-button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  min-width: 1.5rem;\n  color: var(--quinary-contrast);\n  transition: color 0.2s ease-in-out;\n}\n.adev-nav-open[_ngcontent-%COMP%]   .adev-unfold-button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%], \n.adev-unfold-button[_ngcontent-%COMP%]:hover   docs-icon[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n}\n.adev-current-tutorial[_ngcontent-%COMP%] {\n  text-align: left;\n  letter-spacing: 0.00875rem;\n}\n.adev-current-tutorial[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-block-end: 0.2rem;\n  color: var(--quaternary-contrast);\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adev-current-tutorial[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n  font-weight: 500;\n  font-size: 0.875rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adev-download-button[_ngcontent-%COMP%] {\n  width: 2.875rem;\n  height: 2.875rem;\n  padding: 0;\n}\n@container nav-container (max-width: 430px) {\n  .adev-reveal-desktop-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.adev-reveal-mobile-button-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n@container nav-container (max-width: 430px) {\n  .adev-reveal-mobile-button-container[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: end;\n  }\n}\n@container nav-container (min-width: 430px) {\n  .adev-reveal-mobile-button-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.docs-reveal-answer-button[_ngcontent-%COMP%] {\n  height: 2.875rem;\n  width: 120px;\n}\n.adev-reset-answer-button[_ngcontent-%COMP%] {\n  background: var(--senary-contrast);\n  transition: opacity 0.3s ease, background 0.3s ease;\n}\n.adev-reset-answer-button[_ngcontent-%COMP%]:hover {\n  background: var(--quinary-contrast);\n}\n.adev-reset-answer-button[_ngcontent-%COMP%]:hover::after {\n  opacity: 0;\n}\n.adev-reset-answer-button[_ngcontent-%COMP%]:hover::before {\n  background: var(--octonary-contrast);\n}\n.adev-nav-arrows[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n.adev-nav-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 2.875rem;\n  height: 2.875rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.adev-nav-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background: var(--quinary-contrast);\n}\n.adev-nav-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   docs-icon[_ngcontent-%COMP%] {\n  color: var(--quinary-contrast);\n}\n.adev-nav-arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  z-index: var(--z-index-icon);\n  color: var(--primary-contrast);\n}\n/*# sourceMappingURL=tutorial-navigation.css.map */", '\n\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%] {\n  background-color: var(--page-background);\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  z-index: var(--z-index-nav);\n  margin-top: 1rem;\n  width: 100%;\n  box-shadow: 10px 4px 40px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-block-end: 1rem;\n}\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: sticky;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  color: var(--gray-400);\n  background-color: var(--page-background);\n  border-block-start: 1px solid var(--senary-contrast);\n  border-radius: 0 0 0.25rem 0.25rem;\n  text-align: right;\n  padding: 1rem;\n  font-size: 0.875rem;\n  transition: color 0.3s ease;\n}\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-contrast);\n  background-color: var(--octonary-contrast);\n}\n.adev-tutorial-nav-list-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: "chevron_right";\n  font-family: var(--icons);\n  font-size: 1.3rem;\n  margin-inline-start: 0.2rem;\n}\n.adev-nav-list[_ngcontent-%COMP%] {\n  height: max-content;\n  max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 67px);\n  padding-block-start: 1rem;\n  padding-block-end: 0;\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-nav-list[_ngcontent-%COMP%] {\n    max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 105px);\n  }\n}\n@media (max-width: 900px) {\n  .adev-nav-list[_ngcontent-%COMP%] {\n    max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 167px);\n  }\n}\n.adev-nav-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--senary-contrast);\n}\n/*# sourceMappingURL=tutorial-navigation-list.css.map */'], changeDetection: 0 }));
var PlaygroundComponent = _PlaygroundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaygroundComponent, [{
    type: Component,
    args: [{ selector: "adev-playground", imports: [NgComponentOutlet, IconComponent, CdkMenu, CdkMenuItem, CdkMenuTrigger], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="adev-playground-header">\n  <header>\n    <h1 tabindex="-1">Angular \u6F14\u7EC3\u573A</h1>\n  </header>\n  <div class="adev-template-select">\n    <label for="playgroundTemplate">\u9009\u62E9\u6A21\u677F</label>\n    <button [cdkMenuTriggerFor]="templatesMenu">\n      <span>{{ selectedTemplate.label }}</span>\n      <docs-icon>expand_more</docs-icon>\n    </button>\n  </div>\n</div>\n\n@if (embeddedEditorComponent) {\n<ng-container *ngComponentOutlet="embeddedEditorComponent" />\n}\n\n<ng-template #templatesMenu>\n  <ul class="adev-template-dropdown" cdkMenu>\n    @for (template of templates; track template.path) {\n    <li>\n      <button cdkMenuItem type="button" (click)="changeTemplate(template)">\n        <span>{{ template.label }}</span>\n      </button>\n    </li>\n    }\n  </ul>\n</ng-template>\n', styles: ["/* src/app/features/playground/playground.component.scss */\n:host {\n  display: block;\n  padding: var(--layout-padding);\n  padding-block-end: 100px;\n  height: 100vh;\n  width: 100%;\n  box-sizing: border-box;\n}\n:host header {\n  display: flex;\n  gap: 1rem;\n}\n:host header h1 {\n  margin-block: 0;\n}\n.adev-playground-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-block: 1rem;\n}\n.adev-template-select {\n  margin-block-end: 0.5rem;\n}\n.adev-template-select label {\n  color: var(--quaternary-contrast);\n  font-size: 0.875rem;\n  margin-block-end: 0.3rem;\n  margin-inline-start: 0.45rem;\n  display: block;\n}\n.adev-template-select button {\n  font-size: 0.875rem;\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  width: 200px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-block: 0.5rem;\n  font-weight: 400;\n  transition: border 0.3s ease;\n}\n.adev-template-select button span {\n  color: var(--primary-contrast);\n  transition: color 0.3s ease;\n  margin-inline-start: 0.1rem;\n}\n.adev-template-select button docs-icon {\n  font-size: 1.3rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-template-dropdown {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  padding: 0;\n  transform: translateY(-0.7rem);\n}\n.adev-template-dropdown li {\n  list-style: none;\n  width: 198px;\n  box-sizing: border-box;\n}\n.adev-template-dropdown li button {\n  background: var(--page-background);\n  font-size: 0.875rem;\n  width: 100%;\n  text-align: left;\n  padding-block: 0.5rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease, background 0.3s ease;\n  font-weight: 400;\n}\n.adev-template-dropdown li button:hover {\n  background: var(--senary-contrast);\n  color: var(--primary-contrast);\n}\n/*# sourceMappingURL=playground.component.css.map */\n", "/* src/app/features/tutorial/tutorial-navigation.scss */\n.adev-tutorial-nav-container {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  background-color: var(--page-background);\n  padding-block-start: var(--layout-padding);\n  padding-block-end: calc(1.5rem + 50px);\n  margin-block-end: 1rem;\n  border-block-end: 1px solid var(--septenary-contrast);\n  z-index: var(--z-index-nav);\n  transition: background-color 0.3s ease;\n  container: nav-container/inline-size;\n}\n@media (max-width: 900px) {\n  .adev-tutorial-nav-container {\n    top: 60px;\n  }\n}\n@media (max-width: 700px) {\n  .adev-tutorial-nav-container {\n    top: 55px;\n  }\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-tutorial-nav-container:has(.docs-reveal-answer-button) {\n    padding-block-end: calc(1.5rem + 85px);\n  }\n}\n@container page-content (max-width: 430px) {\n  .adev-tutorial-nav-container:has(.docs-reveal-answer-button) {\n    padding-block-end: calc(1.5rem + 85px);\n  }\n}\n.adev-tutorial-nav {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  flex-wrap: wrap;\n  z-index: var(--z-index-nav);\n}\n.adev-unfold-button {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  padding-inline: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  flex: 1;\n  z-index: var(--z-index-nav);\n}\n.adev-unfold-button docs-icon {\n  min-width: 1.5rem;\n  color: var(--quinary-contrast);\n  transition: color 0.2s ease-in-out;\n}\n.adev-nav-open .adev-unfold-button docs-icon,\n.adev-unfold-button:hover docs-icon {\n  color: var(--primary-contrast);\n}\n.adev-current-tutorial {\n  text-align: left;\n  letter-spacing: 0.00875rem;\n}\n.adev-current-tutorial span:first-child {\n  margin-block-end: 0.2rem;\n  color: var(--quaternary-contrast);\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adev-current-tutorial span {\n  color: var(--primary-contrast);\n  font-weight: 500;\n  font-size: 0.875rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adev-download-button {\n  width: 2.875rem;\n  height: 2.875rem;\n  padding: 0;\n}\n@container nav-container (max-width: 430px) {\n  .adev-reveal-desktop-button {\n    display: none;\n  }\n}\n.adev-reveal-mobile-button-container {\n  display: flex;\n}\n@container nav-container (max-width: 430px) {\n  .adev-reveal-mobile-button-container {\n    width: 100%;\n    justify-content: end;\n  }\n}\n@container nav-container (min-width: 430px) {\n  .adev-reveal-mobile-button-container {\n    display: none;\n  }\n}\n.docs-reveal-answer-button {\n  height: 2.875rem;\n  width: 120px;\n}\n.adev-reset-answer-button {\n  background: var(--senary-contrast);\n  transition: opacity 0.3s ease, background 0.3s ease;\n}\n.adev-reset-answer-button:hover {\n  background: var(--quinary-contrast);\n}\n.adev-reset-answer-button:hover::after {\n  opacity: 0;\n}\n.adev-reset-answer-button:hover::before {\n  background: var(--octonary-contrast);\n}\n.adev-nav-arrows {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n.adev-nav-arrows button {\n  width: 2.875rem;\n  height: 2.875rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.adev-nav-arrows button:disabled {\n  background: var(--quinary-contrast);\n}\n.adev-nav-arrows button:disabled docs-icon {\n  color: var(--quinary-contrast);\n}\n.adev-nav-arrows button docs-icon {\n  z-index: var(--z-index-icon);\n  color: var(--primary-contrast);\n}\n/*# sourceMappingURL=tutorial-navigation.css.map */\n", '/* src/app/features/tutorial/tutorial-navigation-list.scss */\n.adev-tutorial-nav-list-dropdown {\n  background-color: var(--page-background);\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  z-index: var(--z-index-nav);\n  margin-top: 1rem;\n  width: 100%;\n  box-shadow: 10px 4px 40px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-tutorial-nav-list-dropdown {\n    margin-top: 0;\n  }\n}\n.adev-tutorial-nav-list-dropdown ul {\n  padding-block-end: 1rem;\n}\n.adev-tutorial-nav-list-dropdown a {\n  position: sticky;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  color: var(--gray-400);\n  background-color: var(--page-background);\n  border-block-start: 1px solid var(--senary-contrast);\n  border-radius: 0 0 0.25rem 0.25rem;\n  text-align: right;\n  padding: 1rem;\n  font-size: 0.875rem;\n  transition: color 0.3s ease;\n}\n.adev-tutorial-nav-list-dropdown a:hover {\n  color: var(--primary-contrast);\n  background-color: var(--octonary-contrast);\n}\n.adev-tutorial-nav-list-dropdown a::after {\n  content: "chevron_right";\n  font-family: var(--icons);\n  font-size: 1.3rem;\n  margin-inline-start: 0.2rem;\n}\n.adev-nav-list {\n  height: max-content;\n  max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 67px);\n  padding-block-start: 1rem;\n  padding-block-end: 0;\n}\n@container tutorial-content (max-width: 430px) {\n  .adev-nav-list {\n    max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 105px);\n  }\n}\n@media (max-width: 900px) {\n  .adev-nav-list {\n    max-height: calc(var(--fixed-content-height) - var(--layout-padding) - 167px);\n  }\n}\n.adev-nav-list::-webkit-scrollbar-thumb {\n  background-color: var(--senary-contrast);\n}\n/*# sourceMappingURL=tutorial-navigation-list.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaygroundComponent, { className: "PlaygroundComponent", filePath: "src/app/features/playground/playground.component.ts", lineNumber: 42 });
})();
export {
  PlaygroundComponent as default
};
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-JSDVIL5M.js.map

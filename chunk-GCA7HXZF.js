import {
  DocViewer
} from "./chunk-FSDA2DZH.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-7F6UZAKO.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-UGE24TTQ.js";
import "./chunk-IP3YSDXJ.js";
import "./chunk-H7FALWCD.js";
import {
  isPlatformBrowser
} from "./chunk-OV2CFM4K.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  Injectable,
  PLATFORM_ID,
  Renderer2,
  __name,
  __publicField,
  effect,
  fromEvent,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/app/features/references/constants/api-reference-prerender.constants.ts
var API_SECTION_CLASS_NAME = "docs-reference-api-section";
var MEMBER_ID_ATTRIBUTE = "member-id";

// src/app/features/references/services/reference-scroll-handler.service.ts
var _ReferenceScrollHandler = class _ReferenceScrollHandler {
  destroyRef = inject(DestroyRef);
  document = inject(DOCUMENT);
  router = inject(Router);
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  setupListeners(tocClass) {
    if (!this.isBrowser) {
      return;
    }
    this.setupCodeToCListeners(tocClass);
  }
  setupCodeToCListeners(tocClass) {
    const tocContainer = this.document.querySelector(`.${tocClass}`);
    if (!tocContainer) {
      return;
    }
    fromEvent(tocContainer, "click").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event.target instanceof HTMLAnchorElement) {
        event.stopPropagation();
        return;
      }
      const target = event.target instanceof HTMLButtonElement ? event.target : this.findButtonElement(event.target);
      const memberId = this.getMemberId(target);
      if (memberId) {
        this.router.navigate([], { fragment: memberId, replaceUrl: true });
      }
    });
  }
  getMemberId(lineButton) {
    if (!lineButton) {
      return void 0;
    }
    return lineButton.attributes.getNamedItem(MEMBER_ID_ATTRIBUTE)?.value;
  }
  findButtonElement(element) {
    let parent = element.parentElement;
    while (parent) {
      if (parent instanceof HTMLButtonElement) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
};
__name(_ReferenceScrollHandler, "ReferenceScrollHandler");
__publicField(_ReferenceScrollHandler, "\u0275fac", /* @__PURE__ */ __name(function ReferenceScrollHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferenceScrollHandler)();
}, "ReferenceScrollHandler_Factory"));
__publicField(_ReferenceScrollHandler, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReferenceScrollHandler, factory: _ReferenceScrollHandler.\u0275fac }));
var ReferenceScrollHandler = _ReferenceScrollHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferenceScrollHandler, [{
    type: Injectable
  }], null, null);
})();

// src/app/features/references/api-reference-details-page/api-reference-details-page.component.ts
function ApiReferenceDetailsPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275listener("contentLoaded", /* @__PURE__ */ __name(function ApiReferenceDetailsPage_Conditional_0_Template_main_contentLoaded_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContentLoaded());
    }, "ApiReferenceDetailsPage_Conditional_0_Template_main_contentLoaded_0_listener"));
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("docContent", ctx.contents)("hasToc", true);
  }
}
__name(ApiReferenceDetailsPage_Conditional_0_Template, "ApiReferenceDetailsPage_Conditional_0_Template");
var HIGHLIGHTED_CARD_CLASS = "docs-highlighted-card";
var _ApiReferenceDetailsPage = class _ApiReferenceDetailsPage {
  referenceScrollHandler = inject(ReferenceScrollHandler);
  route = inject(ActivatedRoute);
  document = inject(DOCUMENT);
  renderer = inject(Renderer2);
  highlightedElement = null;
  docContent = input(...ngDevMode ? [void 0, { debugName: "docContent" }] : []);
  urlFragment = toSignal(this.route.fragment);
  constructor() {
    effect(() => this.highlightCard());
  }
  onContentLoaded() {
    this.referenceScrollHandler.setupListeners(API_SECTION_CLASS_NAME);
    this.scrollToSectionLegacy();
    this.highlightCard();
  }
  /** Handle legacy URLs with a `tab` query param from the old tab layout  */
  scrollToSectionLegacy() {
    const params = this.route.snapshot.queryParams;
    const tab = params["tab"];
    if (tab) {
      const section = this.document.getElementById(tab);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }
  /** Highlight the member card that corresponds to the URL fragment.  */
  highlightCard() {
    if (this.highlightedElement) {
      this.renderer.removeClass(this.highlightedElement, HIGHLIGHTED_CARD_CLASS);
      this.highlightedElement = null;
    }
    const fragment = this.urlFragment();
    if (fragment) {
      const element = this.document.getElementById(fragment);
      if (element) {
        this.renderer.addClass(element, HIGHLIGHTED_CARD_CLASS);
      }
      this.highlightedElement = element;
    }
  }
};
__name(_ApiReferenceDetailsPage, "ApiReferenceDetailsPage");
__publicField(_ApiReferenceDetailsPage, "\u0275fac", /* @__PURE__ */ __name(function ApiReferenceDetailsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiReferenceDetailsPage)();
}, "ApiReferenceDetailsPage_Factory"));
__publicField(_ApiReferenceDetailsPage, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiReferenceDetailsPage, selectors: [["adev-reference-page"]], inputs: { docContent: [1, "docContent"] }, features: [\u0275\u0275ProvidersFeature([ReferenceScrollHandler])], decls: 3, vars: 1, consts: [["docsViewer", "", 3, "docContent", "hasToc"], ["id", "jump-msg", 1, "cdk-visually-hidden"], ["docsViewer", "", 3, "contentLoaded", "docContent", "hasToc"]], template: /* @__PURE__ */ __name(function ApiReferenceDetailsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApiReferenceDetailsPage_Conditional_0_Template, 1, 2, "main", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275text(2, "\u8DF3\u8F6C\u5230\u8BE6\u60C5");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275conditional((tmp_0_0 = ctx.docContent()) ? 0 : -1, tmp_0_0);
  }
}, "ApiReferenceDetailsPage_Template"), dependencies: [DocViewer], styles: ['\n\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-top: var(--layout-padding);\n  padding-bottom: var(--layout-padding);\n}\n@media (min-width: 1430.01px) {\n  [_nghost-%COMP%] {\n    width: calc(100% - 16rem);\n  }\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  display: block;\n  padding-inline: var(--layout-padding);\n  width: 100%;\n}\n@media (min-width: 1430.01px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n    max-width: var(--page-width);\n  }\n}\n[_nghost-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--septenary-contrast);\n  border-radius: 10px;\n  transition: background-color 0.3s ease;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-inline: 0px;\n}\n@media (min-width: 1800.01px) {\n  [_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: var(--page-width);\n  }\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n[_nghost-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n  .docs-code pre {\n  margin-block: 0;\n}\n  .docs-reference-header ~ .docs-deprecated {\n  margin-block-start: 0.5rem;\n}\n  .docs-reference-header > p {\n  color: var(--secondary-contrast);\n  margin-block-start: 0;\n  margin-block-end: 1.5rem;\n}\n  .docs-reference-header .docs-reference-title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-block-end: 0;\n  gap: 0.5rem;\n}\n  .docs-reference-header .docs-reference-title > div {\n  margin-block: 0.67em;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n  .docs-reference-header .docs-reference-title > div h1 {\n  margin-block: 0;\n}\n  .docs-reference-header .docs-reference-title a {\n  fill: var(--quinary-contrast);\n  transition: fill 0.3s ease;\n}\n  .docs-reference-header .docs-reference-title a:hover {\n  fill: var(--primary-contrast);\n}\n  .docs-reference-header .docs-reference-category {\n  color: var(--gray-400);\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.4rem;\n  letter-spacing: -0.00875rem;\n}\n  .docs-reference-header .docs-code {\n  margin-block-end: 1.5rem;\n}\n  .docs-reference-section-heading {\n  padding-block-start: 3rem;\n}\n  .docs-reference-section-heading--sub {\n  padding-block-start: 1rem;\n}\n  .docs-reference-section-heading > a {\n  color: inherit;\n}\n  .docs-reference-section-heading > a::after {\n  content: "\\e157";\n  font-family: "Material Symbols Outlined";\n  opacity: 0;\n  margin-left: 8px;\n  vertical-align: middle;\n  color: var(--quaternary-contrast);\n  font-size: clamp(18px, 1.25em, 30px);\n  transition: opacity 0.3s ease;\n}\n  .docs-reference-section-heading > a:hover::after {\n  opacity: 1;\n}\n  .docs-reference-members {\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n  .docs-reference-members:not(:first-child) {\n  margin-top: 1rem;\n}\n  .docs-reference-members .docs-reference-member-card {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  position: relative;\n  transition: border 0.3s ease;\n}\n  .docs-reference-members .docs-reference-member-card::before {\n  content: "";\n  inset: -1px;\n  position: absolute;\n  background: transparent;\n  border-radius: 0.35rem;\n  z-index: 0;\n}\n  .docs-reference-members .docs-reference-member-card.docs-highlighted-card {\n  box-shadow: 10px 4px 40px 0 rgba(0, 0, 0, 0.01);\n}\n  .docs-reference-members .docs-reference-member-card.docs-highlighted-card::before {\n  background: var(--red-to-pink-to-purple-horizontal-gradient);\n}\n  .docs-reference-members .docs-reference-member-card > p {\n  padding-inline: 1.25rem;\n  margin-block-end: 0;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 0.25rem 0.25rem 0 0;\n  background-color: var(--octonary-contrast);\n  position: relative;\n  z-index: 10;\n  padding: 0.7rem 1rem;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  transition: background-color 0.3s ease, border 0.3s ease;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-header:focus {\n  outline: none;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-header:has(+ .docs-reference-card-body:empty) {\n  border-radius: 0.25rem;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-header .docs-code {\n  flex: 1;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-header .docs-code button[docs-copy-source-code] {\n  display: none;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-header code {\n  font-size: 0.875rem;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-header h3 {\n  display: inline-block;\n  font-family: var(--code-font);\n  font-size: 1rem;\n  letter-spacing: -0.025rem;\n  margin: 0;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-header span {\n  font-size: 0.875rem;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-body {\n  padding: 0.25rem 1.25rem;\n  background: var(--septenary-contrast);\n  transition: background-color 0.3s ease;\n  color: var(--quaternary-contrast);\n  border-radius: 0 0 0.25rem 0.25rem;\n  position: relative;\n  z-index: 10;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-body:empty {\n  display: none;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-body:first-child {\n  border-radius: 0.25rem;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-body hr {\n  margin-block: 2rem;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-body .docs-code {\n  margin-block-end: 1rem;\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-body .docs-deprecation-message {\n  border-block-end: 1px solid var(--senary-contrast);\n}\n  .docs-reference-members .docs-reference-member-card .docs-reference-card-body .docs-deprecation-message .docs-deprecated {\n  color: var(--page-background);\n  background-color: var(--quaternary-contrast);\n  width: max-content;\n  border-radius: 0.25rem;\n  padding: 0.1rem 0.25rem;\n  margin-block-start: 1rem;\n}\n  .docs-reference-api-section .docs-code {\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n  .docs-reference-api-section .docs-code button {\n  transition: background-color 0.3s ease;\n}\n  .docs-reference-api-section .docs-code button.shiki-ln-line-highlighted {\n  background-color: var(--senary-contrast);\n}\n  .docs-reference-api-section .docs-code button:hover {\n  background-color: var(--septenary-contrast);\n}\n  .docs-reference-api-section .docs-code button:focus {\n  background-color: var(--senary-contrast);\n}\n  .docs-reference-api-section .docs-code button:focus span {\n  background-color: inherit;\n}\n  .docs-reference-api-section .docs-code button[docs-copy-source-code] {\n  display: none;\n}\n  .docs-reference-api-section code {\n  margin-block: 0;\n}\n  .docs-reference-api-section pre {\n  white-space: pre;\n  overflow-x: auto;\n  margin: 0;\n}\n  .pipe-usage {\n  padding: 1rem;\n}\n  .docs-reference-member-card .docs-reference-card-item:has(~ .docs-reference-card-item) {\n  border: 1px solid var(--senary-contrast);\n  margin-block: 1rem;\n  border-radius: 0.25rem;\n  padding-inline: 1rem;\n}\n  .docs-reference-member-card .docs-reference-card-item:last-child:not(:first-of-type) {\n  border: 1px solid var(--senary-contrast);\n  margin-block: 1rem;\n  border-radius: 0.25rem;\n  padding-inline: 1rem;\n}\n  .docs-reference-member-card .docs-reference-card-item span {\n  display: inline-block;\n  font-size: 0.875rem;\n}\n  .docs-reference-member-card .docs-reference-card-item code {\n  font-size: 0.875rem;\n}\n  .docs-reference-member-card .docs-reference-card-item .docs-function-definition:has(*) {\n  border-block-end: 1px solid var(--senary-contrast);\n}\n  .docs-reference-member-card .docs-reference-card-item .docs-param-group {\n  margin-block-start: 1rem;\n}\n  .docs-reference-member-card .docs-reference-card-item .docs-param-group:not(:has(~ .docs-param-group)) {\n  margin-block: 1rem;\n}\n  .docs-reference-member-card .docs-reference-card-item .docs-param-group .docs-param-name {\n  color: var(--vivid-pink);\n  font-family: var(--code-font);\n  margin-inline-end: 0.25rem;\n}\n  .docs-reference-member-card .docs-reference-card-item .docs-param-group .docs-param-name::after {\n  content: ":";\n}\n  .docs-reference-member-card .docs-reference-card-item .docs-param-group .docs-parameter-description p:first-child {\n  margin-block-start: 0;\n}\n  .docs-reference-member-card .docs-reference-card-item .docs-param-keyword {\n  color: var(--primary-contrast);\n  font-family: var(--code-font);\n  margin-inline-end: 0.5rem;\n}\n  .docs-reference-member-card .docs-reference-card-item .docs-return-type {\n  padding-block: 1rem;\n}\n  .docs-reference-member-card .docs-reference-card-item .docs-return-type:not(.docs-function-definition + .docs-return-type) {\n  border-block-start: 1px solid var(--senary-contrast);\n}\n/*# sourceMappingURL=api-reference-details-page.component.css.map */'], changeDetection: 0 }));
var ApiReferenceDetailsPage = _ApiReferenceDetailsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiReferenceDetailsPage, [{
    type: Component,
    args: [{ selector: "adev-reference-page", imports: [DocViewer], providers: [ReferenceScrollHandler], changeDetection: ChangeDetectionStrategy.OnPush, template: '@if (docContent(); as docContent) {\n  <main docsViewer\n    [docContent]="docContent.contents"\n    [hasToc]="true"\n    (contentLoaded)="onContentLoaded()"\n  ></main>\n}\n\n<div id="jump-msg" class="cdk-visually-hidden">\u8DF3\u8F6C\u5230\u8BE6\u60C5</div>\n', styles: ['/* src/app/features/references/api-reference-details-page/api-reference-details-page.component.scss */\n:host {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-top: var(--layout-padding);\n  padding-bottom: var(--layout-padding);\n}\n@media (min-width: 1430.01px) {\n  :host {\n    width: calc(100% - 16rem);\n  }\n}\n:host main {\n  display: block;\n  padding-inline: var(--layout-padding);\n  width: 100%;\n}\n@media (min-width: 1430.01px) {\n  :host main {\n    max-width: var(--page-width);\n  }\n}\n:host::-webkit-scrollbar-thumb {\n  background-color: var(--septenary-contrast);\n  border-radius: 10px;\n  transition: background-color 0.3s ease;\n}\n:host > * {\n  padding-inline: 0px;\n}\n@media (min-width: 1800.01px) {\n  :host > * {\n    width: var(--page-width);\n  }\n}\n:host h1 {\n  font-size: 1.5rem;\n}\n:host h2 {\n  font-size: 1.25rem;\n}\n:host h3 {\n  font-size: 1rem;\n}\n:host h4 {\n  font-size: 0.95rem;\n}\n:host h5 {\n  font-size: 0.875rem;\n}\n:host h6 {\n  font-size: 0.6rem;\n}\n::ng-deep .docs-code pre {\n  margin-block: 0;\n}\n::ng-deep .docs-reference-header ~ .docs-deprecated {\n  margin-block-start: 0.5rem;\n}\n::ng-deep .docs-reference-header > p {\n  color: var(--secondary-contrast);\n  margin-block-start: 0;\n  margin-block-end: 1.5rem;\n}\n::ng-deep .docs-reference-header .docs-reference-title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-block-end: 0;\n  gap: 0.5rem;\n}\n::ng-deep .docs-reference-header .docs-reference-title > div {\n  margin-block: 0.67em;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n::ng-deep .docs-reference-header .docs-reference-title > div h1 {\n  margin-block: 0;\n}\n::ng-deep .docs-reference-header .docs-reference-title a {\n  fill: var(--quinary-contrast);\n  transition: fill 0.3s ease;\n}\n::ng-deep .docs-reference-header .docs-reference-title a:hover {\n  fill: var(--primary-contrast);\n}\n::ng-deep .docs-reference-header .docs-reference-category {\n  color: var(--gray-400);\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.4rem;\n  letter-spacing: -0.00875rem;\n}\n::ng-deep .docs-reference-header .docs-code {\n  margin-block-end: 1.5rem;\n}\n::ng-deep .docs-reference-section-heading {\n  padding-block-start: 3rem;\n}\n::ng-deep .docs-reference-section-heading--sub {\n  padding-block-start: 1rem;\n}\n::ng-deep .docs-reference-section-heading > a {\n  color: inherit;\n}\n::ng-deep .docs-reference-section-heading > a::after {\n  content: "\\e157";\n  font-family: "Material Symbols Outlined";\n  opacity: 0;\n  margin-left: 8px;\n  vertical-align: middle;\n  color: var(--quaternary-contrast);\n  font-size: clamp(18px, 1.25em, 30px);\n  transition: opacity 0.3s ease;\n}\n::ng-deep .docs-reference-section-heading > a:hover::after {\n  opacity: 1;\n}\n::ng-deep .docs-reference-members {\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n::ng-deep .docs-reference-members:not(:first-child) {\n  margin-top: 1rem;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  position: relative;\n  transition: border 0.3s ease;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card::before {\n  content: "";\n  inset: -1px;\n  position: absolute;\n  background: transparent;\n  border-radius: 0.35rem;\n  z-index: 0;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card.docs-highlighted-card {\n  box-shadow: 10px 4px 40px 0 rgba(0, 0, 0, 0.01);\n}\n::ng-deep .docs-reference-members .docs-reference-member-card.docs-highlighted-card::before {\n  background: var(--red-to-pink-to-purple-horizontal-gradient);\n}\n::ng-deep .docs-reference-members .docs-reference-member-card > p {\n  padding-inline: 1.25rem;\n  margin-block-end: 0;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 0.25rem 0.25rem 0 0;\n  background-color: var(--octonary-contrast);\n  position: relative;\n  z-index: 10;\n  padding: 0.7rem 1rem;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  transition: background-color 0.3s ease, border 0.3s ease;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-header:focus {\n  outline: none;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-header:has(+ .docs-reference-card-body:empty) {\n  border-radius: 0.25rem;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-header .docs-code {\n  flex: 1;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-header .docs-code button[docs-copy-source-code] {\n  display: none;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-header code {\n  font-size: 0.875rem;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-header h3 {\n  display: inline-block;\n  font-family: var(--code-font);\n  font-size: 1rem;\n  letter-spacing: -0.025rem;\n  margin: 0;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-header span {\n  font-size: 0.875rem;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-body {\n  padding: 0.25rem 1.25rem;\n  background: var(--septenary-contrast);\n  transition: background-color 0.3s ease;\n  color: var(--quaternary-contrast);\n  border-radius: 0 0 0.25rem 0.25rem;\n  position: relative;\n  z-index: 10;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-body:empty {\n  display: none;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-body:first-child {\n  border-radius: 0.25rem;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-body hr {\n  margin-block: 2rem;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-body .docs-code {\n  margin-block-end: 1rem;\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-body .docs-deprecation-message {\n  border-block-end: 1px solid var(--senary-contrast);\n}\n::ng-deep .docs-reference-members .docs-reference-member-card .docs-reference-card-body .docs-deprecation-message .docs-deprecated {\n  color: var(--page-background);\n  background-color: var(--quaternary-contrast);\n  width: max-content;\n  border-radius: 0.25rem;\n  padding: 0.1rem 0.25rem;\n  margin-block-start: 1rem;\n}\n::ng-deep .docs-reference-api-section .docs-code {\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n::ng-deep .docs-reference-api-section .docs-code button {\n  transition: background-color 0.3s ease;\n}\n::ng-deep .docs-reference-api-section .docs-code button.shiki-ln-line-highlighted {\n  background-color: var(--senary-contrast);\n}\n::ng-deep .docs-reference-api-section .docs-code button:hover {\n  background-color: var(--septenary-contrast);\n}\n::ng-deep .docs-reference-api-section .docs-code button:focus {\n  background-color: var(--senary-contrast);\n}\n::ng-deep .docs-reference-api-section .docs-code button:focus span {\n  background-color: inherit;\n}\n::ng-deep .docs-reference-api-section .docs-code button[docs-copy-source-code] {\n  display: none;\n}\n::ng-deep .docs-reference-api-section code {\n  margin-block: 0;\n}\n::ng-deep .docs-reference-api-section pre {\n  white-space: pre;\n  overflow-x: auto;\n  margin: 0;\n}\n::ng-deep .pipe-usage {\n  padding: 1rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item:has(~ .docs-reference-card-item) {\n  border: 1px solid var(--senary-contrast);\n  margin-block: 1rem;\n  border-radius: 0.25rem;\n  padding-inline: 1rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item:last-child:not(:first-of-type) {\n  border: 1px solid var(--senary-contrast);\n  margin-block: 1rem;\n  border-radius: 0.25rem;\n  padding-inline: 1rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item span {\n  display: inline-block;\n  font-size: 0.875rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item code {\n  font-size: 0.875rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item .docs-function-definition:has(*) {\n  border-block-end: 1px solid var(--senary-contrast);\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item .docs-param-group {\n  margin-block-start: 1rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item .docs-param-group:not(:has(~ .docs-param-group)) {\n  margin-block: 1rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item .docs-param-group .docs-param-name {\n  color: var(--vivid-pink);\n  font-family: var(--code-font);\n  margin-inline-end: 0.25rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item .docs-param-group .docs-param-name::after {\n  content: ":";\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item .docs-param-group .docs-parameter-description p:first-child {\n  margin-block-start: 0;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item .docs-param-keyword {\n  color: var(--primary-contrast);\n  font-family: var(--code-font);\n  margin-inline-end: 0.5rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item .docs-return-type {\n  padding-block: 1rem;\n}\n::ng-deep .docs-reference-member-card .docs-reference-card-item .docs-return-type:not(.docs-function-definition + .docs-return-type) {\n  border-block-start: 1px solid var(--senary-contrast);\n}\n/*# sourceMappingURL=api-reference-details-page.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiReferenceDetailsPage, { className: "ApiReferenceDetailsPage", filePath: "src/app/features/references/api-reference-details-page/api-reference-details-page.component.ts", lineNumber: 27 });
})();
export {
  ApiReferenceDetailsPage as default
};
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-GCA7HXZF.js.map

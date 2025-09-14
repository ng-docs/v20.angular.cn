import {
  DomSanitizer
} from "./chunk-DAHHMHGV.js";
import {
  Component,
  __name,
  __publicField,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/security/src/app/bypass-security.component.ts
var _BypassSecurityComponent = class _BypassSecurityComponent {
  dangerousUrl;
  trustedUrl;
  dangerousVideoUrl;
  videoUrl;
  // #docregion trust-url
  sanitizer = inject(DomSanitizer);
  constructor() {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.updateVideoUrl("PUBnlbjZFAI");
  }
  // #docregion trust-video-url
  updateVideoUrl(id) {
    this.dangerousVideoUrl = "https://www.youtube.com/embed/" + id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }
};
__name(_BypassSecurityComponent, "BypassSecurityComponent");
__publicField(_BypassSecurityComponent, "\u0275fac", /* @__PURE__ */ __name(function BypassSecurityComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BypassSecurityComponent)();
}, "BypassSecurityComponent_Factory"));
__publicField(_BypassSecurityComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BypassSecurityComponent, selectors: [["app-bypass-security"]], decls: 22, vars: 5, consts: [[1, "e2e-dangerous-url", 3, "href"], [1, "e2e-trusted-url", 3, "href"], ["width", "640", "height", "390", "title", "trusted video url", 1, "e2e-iframe-trusted-src", 3, "src"], ["width", "640", "height", "390", "title", "unTrusted video url", 1, "e2e-iframe-untrusted-src", 3, "src"]], template: /* @__PURE__ */ __name(function BypassSecurityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h3");
    \u0275\u0275text(1, "Bypass Security Component");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "h4");
    \u0275\u0275text(3, "An untrusted URL:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p")(5, "a", 0);
    \u0275\u0275text(6, "Click me");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "h4");
    \u0275\u0275text(8, "A trusted URL:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p")(10, "a", 1);
    \u0275\u0275text(11, "Click me");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "h4");
    \u0275\u0275text(13, "Resource URL:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "p");
    \u0275\u0275text(17, "Trusted:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(18, "iframe", 2);
    \u0275\u0275domElementStart(19, "p");
    \u0275\u0275text(20, "Untrusted:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(21, "iframe", 3);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("href", ctx.dangerousUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("href", ctx.trustedUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Showing: ", ctx.dangerousVideoUrl);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("src", ctx.videoUrl, \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("src", ctx.dangerousVideoUrl, \u0275\u0275sanitizeResourceUrl);
  }
}, "BypassSecurityComponent_Template"), encapsulation: 2 }));
var BypassSecurityComponent = _BypassSecurityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BypassSecurityComponent, [{
    type: Component,
    args: [{ selector: "app-bypass-security", template: '<!--#docregion -->\n<h3>Bypass Security Component</h3>\n\n<!--#docregion URL -->\n<h4>An untrusted URL:</h4>\n<p><a class="e2e-dangerous-url" [href]="dangerousUrl">Click me</a></p>\n<h4>A trusted URL:</h4>\n<p><a class="e2e-trusted-url" [href]="trustedUrl">Click me</a></p>\n<!--#enddocregion URL -->\n\n<!--#docregion iframe -->\n<h4>Resource URL:</h4>\n<p>Showing: {{ dangerousVideoUrl }}</p>\n<p>Trusted:</p>\n<iframe class="e2e-iframe-trusted-src" width="640" height="390" [src]="videoUrl" title="trusted video url"></iframe>\n<p>Untrusted:</p>\n<iframe class="e2e-iframe-untrusted-src" width="640" height="390" [src]="dangerousVideoUrl" title="unTrusted video url"></iframe>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BypassSecurityComponent, { className: "BypassSecurityComponent", filePath: "src/content/examples/security/src/app/bypass-security.component.ts", lineNumber: 10 });
})();

export {
  BypassSecurityComponent
};
//# sourceMappingURL=chunk-7X7OWWT7.js.map

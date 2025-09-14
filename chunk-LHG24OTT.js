import {
  JsonPipe
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/json-pipe.component.ts
var _JsonPipeComponent = class _JsonPipeComponent {
  data = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown"
    }
  };
};
__name(_JsonPipeComponent, "JsonPipeComponent");
__publicField(_JsonPipeComponent, "\u0275fac", /* @__PURE__ */ __name(function JsonPipeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JsonPipeComponent)();
}, "JsonPipeComponent_Factory"));
__publicField(_JsonPipeComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JsonPipeComponent, selectors: [["app-json-pipe"]], decls: 2, vars: 3, template: /* @__PURE__ */ __name(function JsonPipeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "json");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, ctx.data));
  }
}, "JsonPipeComponent_Template"), dependencies: [JsonPipe], encapsulation: 2 }));
var JsonPipeComponent = _JsonPipeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonPipeComponent, [{
    type: Component,
    args: [{
      selector: "app-json-pipe",
      template: `{{ data | json }}`,
      imports: [JsonPipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JsonPipeComponent, { className: "JsonPipeComponent", filePath: "src/content/examples/pipes/src/app/json-pipe.component.ts", lineNumber: 9 });
})();

export {
  JsonPipeComponent
};
//# sourceMappingURL=chunk-LHG24OTT.js.map

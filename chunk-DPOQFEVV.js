import {
  DynamicFormComponent
} from "./chunk-DNBGWNR2.js";
import "./chunk-DMI7XEDN.js";
import "./chunk-IP3YSDXJ.js";
import {
  AsyncPipe
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  Injectable,
  __name,
  __publicField,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2CX5BJWG.js";

// src/content/examples/dynamic-form/src/app/question-base.ts
var _QuestionBase = class _QuestionBase {
  value;
  key;
  label;
  required;
  order;
  controlType;
  type;
  options;
  constructor(options = {}) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.order = options.order === void 0 ? 1 : options.order;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.options = options.options || [];
  }
};
__name(_QuestionBase, "QuestionBase");
var QuestionBase = _QuestionBase;

// src/content/examples/dynamic-form/src/app/question-dropdown.ts
var _DropdownQuestion = class _DropdownQuestion extends QuestionBase {
  controlType = "dropdown";
};
__name(_DropdownQuestion, "DropdownQuestion");
var DropdownQuestion = _DropdownQuestion;

// src/content/examples/dynamic-form/src/app/question-textbox.ts
var _TextboxQuestion = class _TextboxQuestion extends QuestionBase {
  controlType = "textbox";
};
__name(_TextboxQuestion, "TextboxQuestion");
var TextboxQuestion = _TextboxQuestion;

// src/content/examples/dynamic-form/src/app/question.service.ts
var _QuestionService = class _QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions = [
      new DropdownQuestion({
        key: "favoriteAnimal",
        label: "Favorite Animal",
        options: [
          { key: "cat", value: "Cat" },
          { key: "dog", value: "Dog" },
          { key: "horse", value: "Horse" },
          { key: "capybara", value: "Capybara" }
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: "firstName",
        label: "First name",
        value: "Alex",
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2
      })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
};
__name(_QuestionService, "QuestionService");
__publicField(_QuestionService, "\u0275fac", /* @__PURE__ */ __name(function QuestionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QuestionService)();
}, "QuestionService_Factory"));
__publicField(_QuestionService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuestionService, factory: _QuestionService.\u0275fac }));
var QuestionService = _QuestionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionService, [{
    type: Injectable
  }], null, null);
})();

// src/content/examples/dynamic-form/src/app/app.component.ts
var _AppComponent = class _AppComponent {
  questions$ = inject(QuestionService).getQuestions();
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "\u0275fac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], features: [\u0275\u0275ProvidersFeature([QuestionService])], decls: 5, vars: 3, consts: [[3, "questions"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2");
    \u0275\u0275text(2, "Job Application for Heroes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-dynamic-form", 0);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("questions", \u0275\u0275pipeBind1(4, 1, ctx.questions$));
  }
}, "AppComponent_Template"), dependencies: [DynamicFormComponent, AsyncPipe], encapsulation: 2 }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async" />
    </div>
  `,
      providers: [QuestionService],
      imports: [AsyncPipe, DynamicFormComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/dynamic-form/src/app/app.component.ts", lineNumber: 22 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-DPOQFEVV.js.map

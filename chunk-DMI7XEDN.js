import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IP3YSDXJ.js";
import {
  Component,
  __name,
  __publicField,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/dynamic-form/src/app/dynamic-form-question.component.ts
function DynamicFormQuestionComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formControlName", ctx_r0.question().key)("id", ctx_r0.question().key)("type", ctx_r0.question().type);
  }
}
__name(DynamicFormQuestionComponent_Case_4_Template, "DynamicFormQuestionComponent_Case_4_Template");
function DynamicFormQuestionComponent_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r2.value);
  }
}
__name(DynamicFormQuestionComponent_Case_5_For_2_Template, "DynamicFormQuestionComponent_Case_5_For_2_Template");
function DynamicFormQuestionComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 2);
    \u0275\u0275repeaterCreate(1, DynamicFormQuestionComponent_Case_5_For_2_Template, 2, 2, "option", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r0.question().key)("formControlName", ctx_r0.question().key);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.question().options);
  }
}
__name(DynamicFormQuestionComponent_Case_5_Template, "DynamicFormQuestionComponent_Case_5_Template");
function DynamicFormQuestionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.question().label, " is required");
  }
}
__name(DynamicFormQuestionComponent_Conditional_6_Template, "DynamicFormQuestionComponent_Conditional_6_Template");
var _DynamicFormQuestionComponent = class _DynamicFormQuestionComponent {
  question = input.required(...ngDevMode ? [{ debugName: "question" }] : []);
  form = input.required(...ngDevMode ? [{ debugName: "form" }] : []);
  get isValid() {
    return this.form().controls[this.question().key].valid;
  }
};
__name(_DynamicFormQuestionComponent, "DynamicFormQuestionComponent");
__publicField(_DynamicFormQuestionComponent, "\u0275fac", /* @__PURE__ */ __name(function DynamicFormQuestionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DynamicFormQuestionComponent)();
}, "DynamicFormQuestionComponent_Factory"));
__publicField(_DynamicFormQuestionComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicFormQuestionComponent, selectors: [["app-question"]], inputs: { question: [1, "question"], form: [1, "form"] }, decls: 7, vars: 5, consts: [[3, "formGroup"], [3, "formControlName", "id", "type"], [3, "id", "formControlName"], [1, "errorMessage"], [3, "value"]], template: /* @__PURE__ */ __name(function DynamicFormQuestionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275conditionalCreate(4, DynamicFormQuestionComponent_Case_4_Template, 1, 3, "input", 1)(5, DynamicFormQuestionComponent_Case_5_Template, 3, 2, "select", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DynamicFormQuestionComponent_Conditional_6_Template, 2, 1, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    \u0275\u0275property("formGroup", ctx.form());
    \u0275\u0275advance();
    \u0275\u0275attribute("for", ctx.question().key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.question().label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx.question().controlType) === "textbox" ? 4 : tmp_3_0 === "dropdown" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.isValid ? 6 : -1);
  }
}, "DynamicFormQuestionComponent_Template"), dependencies: [ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 }));
var DynamicFormQuestionComponent = _DynamicFormQuestionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicFormQuestionComponent, [{
    type: Component,
    args: [{ selector: "app-question", imports: [ReactiveFormsModule], template: `<!-- #docregion -->
<div [formGroup]="form()">
  <label [attr.for]="question().key">{{ question().label }}</label>

  <div>
    @switch (question().controlType) {
      @case ('textbox') {
        <input [formControlName]="question().key" [id]="question().key" [type]="question().type" />
      }
      @case ('dropdown') {
        <select [id]="question().key" [formControlName]="question().key">
          @for (opt of question().options; track opt) {
            <option [value]="opt.key">{{ opt.value }}</option>
          }
        </select>
      }
    }
  </div>

  @if (!isValid) {
    <div class="errorMessage">{{ question().label }} is required</div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicFormQuestionComponent, { className: "DynamicFormQuestionComponent", filePath: "src/content/examples/dynamic-form/src/app/dynamic-form-question.component.ts", lineNumber: 12 });
})();

export {
  DynamicFormQuestionComponent
};
//# sourceMappingURL=chunk-DMI7XEDN.js.map

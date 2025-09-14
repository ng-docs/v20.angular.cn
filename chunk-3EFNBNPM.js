import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IP3YSDXJ.js";
import {
  JsonPipe
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2CX5BJWG.js";

// src/content/examples/forms/src/app/actor.ts
var _Actor = class _Actor {
  id;
  name;
  skill;
  studio;
  constructor(id, name, skill, studio) {
    this.id = id;
    this.name = name;
    this.skill = skill;
    this.studio = studio;
  }
};
__name(_Actor, "Actor");
var Actor = _Actor;

// src/content/examples/forms/src/app/actor-form/actor-form.component.ts
function ActorFormComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    \u0275\u0275property("value", skill_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r2);
  }
}
__name(ActorFormComponent_For_23_Template, "ActorFormComponent_For_23_Template");
function ActorFormComponent_For_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    \u0275\u0275property("value", skill_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r4);
  }
}
__name(ActorFormComponent_For_83_Template, "ActorFormComponent_For_83_Template");
function ActorFormComponent_For_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    \u0275\u0275property("value", skill_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r5);
  }
}
__name(ActorFormComponent_For_107_Template, "ActorFormComponent_For_107_Template");
var _ActorFormComponent = class _ActorFormComponent {
  // #enddocregion imports
  skills = ["Method Acting", "Singing", "Dancing", "Swordfighting"];
  model = new Actor(18, "Tom Cruise", this.skills[3], "CW Productions");
  // #docregion submitted
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  // #enddocregion submitted
  // #enddocregion final
  // #enddocregion v1
  // #docregion final, new-actor
  newActor() {
    this.model = new Actor(42, "", "");
  }
  // #enddocregion final, new-actor
  heroine() {
    const myActress = new Actor(42, "Marilyn Monroe", "Singing");
    console.log("My actress is called " + myActress.name);
    return myActress;
  }
  //////// NOT SHOWN IN DOCS ////////
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(actorForm)}}
  showFormControls(form) {
    return form && form.controls.name && form.controls.name.value;
  }
};
__name(_ActorFormComponent, "ActorFormComponent");
__publicField(_ActorFormComponent, "\u0275fac", /* @__PURE__ */ __name(function ActorFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ActorFormComponent)();
}, "ActorFormComponent_Factory"));
__publicField(_ActorFormComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActorFormComponent, selectors: [["app-actor-form"]], decls: 116, vars: 22, consts: [["actorForm", "ngForm"], ["name", "ngModel"], ["skill", "ngModel"], [1, "container"], [3, "hidden"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "studio"], ["type", "text", "id", "studio", "name", "studio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "skill"], ["id", "skill", "required", "", "name", "skill", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "row"], [1, "col-xs-3"], [1, "col-xs-9"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "no-style", 2, "margin-left", "4px"], ["type", "text", "id", "name", "required", "", 1, "form-control"], ["type", "text", "id", "studio", 1, "form-control"], ["id", "skill", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success"]], template: /* @__PURE__ */ __name(function ActorFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h1");
    \u0275\u0275text(3, "Actor Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 5, 0);
    \u0275\u0275listener("ngSubmit", /* @__PURE__ */ __name(function ActorFormComponent_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    }, "ActorFormComponent_Template_form_ngSubmit_4_listener"));
    \u0275\u0275elementStart(6, "div", 6)(7, "label", 7);
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 8, 1);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
      return \u0275\u0275resetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_9_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275text(12, " Name is required ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 6)(14, "label", 10);
    \u0275\u0275text(15, "Studio Affiliation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.model.studio, $event) || (ctx.model.studio = $event);
      return \u0275\u0275resetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_16_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 6)(18, "label", 12);
    \u0275\u0275text(19, "Skill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 13, 2);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.model.skill, $event) || (ctx.model.skill = $event);
      return \u0275\u0275resetView($event);
    }, "ActorFormComponent_Template_select_ngModelChange_20_listener"));
    \u0275\u0275repeaterCreate(22, ActorFormComponent_For_23_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 9);
    \u0275\u0275text(25, " skill is required ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 15);
    \u0275\u0275text(27, "Submit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 16);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ActorFormComponent_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const actorForm_r3 = \u0275\u0275reference(5);
      ctx.newActor();
      return \u0275\u0275resetView(actorForm_r3.reset());
    }, "ActorFormComponent_Template_button_click_28_listener"));
    \u0275\u0275text(29, "New Actor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "em");
    \u0275\u0275text(31, "with");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " reset \xA0\xA0 ");
    \u0275\u0275elementStart(33, "button", 16);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ActorFormComponent_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.newActor());
    }, "ActorFormComponent_Template_button_click_33_listener"));
    \u0275\u0275text(34, "New Actor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "em");
    \u0275\u0275text(36, "without");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " reset ");
    \u0275\u0275elementStart(38, "div");
    \u0275\u0275element(39, "hr");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 4)(42, "h2");
    \u0275\u0275text(43, "You submitted the following:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 17)(45, "div", 18);
    \u0275\u0275text(46, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 19);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 17)(50, "div", 18);
    \u0275\u0275text(51, "Studio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 19);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 17)(55, "div", 18);
    \u0275\u0275text(56, "Skill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 19);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(59, "br");
    \u0275\u0275elementStart(60, "button", 20);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ActorFormComponent_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submitted = false);
    }, "ActorFormComponent_Template_button_click_60_listener"));
    \u0275\u0275text(61, " Edit ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div");
    \u0275\u0275element(63, "form");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "hr");
    \u0275\u0275elementStart(65, "div", 21)(66, "div", 3)(67, "h1");
    \u0275\u0275text(68, "Actor Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "form")(70, "div", 6)(71, "label", 7);
    \u0275\u0275text(72, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 6)(75, "label", 10);
    \u0275\u0275text(76, "Studio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 6)(79, "label", 12);
    \u0275\u0275text(80, "Skill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "select", 24);
    \u0275\u0275repeaterCreate(82, ActorFormComponent_For_83_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "button", 25);
    \u0275\u0275text(85, "Submit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(86, "hr");
    \u0275\u0275elementStart(87, "div", 3)(88, "h1");
    \u0275\u0275text(89, "Actor Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "form", null, 0);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "json");
    \u0275\u0275elementStart(94, "div", 6)(95, "label", 7);
    \u0275\u0275text(96, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
      return \u0275\u0275resetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_97_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 6)(99, "label", 10);
    \u0275\u0275text(100, "Studio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.model.studio, $event) || (ctx.model.studio = $event);
      return \u0275\u0275resetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_101_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 6)(103, "label", 12);
    \u0275\u0275text(104, "Skill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_select_ngModelChange_105_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.model.skill, $event) || (ctx.model.skill = $event);
      return \u0275\u0275resetView($event);
    }, "ActorFormComponent_Template_select_ngModelChange_105_listener"));
    \u0275\u0275repeaterCreate(106, ActorFormComponent_For_107_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "button", 25);
    \u0275\u0275text(109, "Submit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(110, "hr");
    \u0275\u0275elementStart(111, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_111_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
      return \u0275\u0275resetView($event);
    }, "ActorFormComponent_Template_input_ngModelChange_111_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275text(112);
    \u0275\u0275element(113, "hr");
    \u0275\u0275elementStart(114, "input", 8);
    \u0275\u0275listener("ngModelChange", /* @__PURE__ */ __name(function ActorFormComponent_Template_input_ngModelChange_114_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.model.name = $event);
    }, "ActorFormComponent_Template_input_ngModelChange_114_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275text(115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const actorForm_r3 = \u0275\u0275reference(5);
    const name_r6 = \u0275\u0275reference(10);
    const skill_r7 = \u0275\u0275reference(21);
    \u0275\u0275advance();
    \u0275\u0275property("hidden", ctx.submitted);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.model.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", name_r6.valid || name_r6.pristine);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.model.studio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.model.skill);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.skills);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", skill_r7.valid || skill_r7.pristine);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !actorForm_r3.form.valid);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" Name via form.controls = ", ctx.showFormControls(actorForm_r3), " ");
    \u0275\u0275advance();
    \u0275\u0275property("hidden", !ctx.submitted);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.model.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.model.studio);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.model.skill);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx.skills);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(93, 20, ctx.model), " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.model.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.model.studio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.model.skill);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.skills);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.model.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" TODO: remove this: ", ctx.model.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.model.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" TODO: remove this: ", ctx.model.name, "\n");
  }
}, "ActorFormComponent_Template"), dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, JsonPipe], styles: ["\n\n.no-style[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\n  border-left: 1px solid #CCC;\n}\n.no-style[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%] {\n  border-left: 1px solid #CCC;\n}\n/*# sourceMappingURL=actor-form.component.css.map */"] }));
var ActorFormComponent = _ActorFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActorFormComponent, [{
    type: Component,
    args: [{ selector: "app-actor-form", imports: [FormsModule, JsonPipe], template: '<!-- #docplaster -->\n<!-- #docregion final -->\n<div class="container">\n  <!-- #docregion edit-div -->\n  <div [hidden]="submitted">\n    <h1>Actor Form</h1>\n    <!-- #docregion ngSubmit -->\n    <form (ngSubmit)="onSubmit()" #actorForm="ngForm">\n      <!-- #enddocregion ngSubmit, edit-div -->\n      <div class="form-group">\n        <!-- #docregion name-with-error-msg -->\n        <label for="name">Name</label>\n        <input type="text" class="form-control" id="name"\n               required [(ngModel)]="model.name" name="name"\n               #name="ngModel">\n        <!-- #docregion hidden-error-msg -->\n        <div [hidden]="name.valid || name.pristine"\n             class="alert alert-danger">\n        <!-- #enddocregion hidden-error-msg -->\n          Name is required\n        </div>\n        <!-- #enddocregion name-with-error-msg -->\n      </div>\n\n      <div class="form-group">\n        <label for="studio">Studio Affiliation</label>\n        <input type="text" class="form-control" id="studio"\n               [(ngModel)]="model.studio" name="studio">\n      </div>\n\n      <div class="form-group">\n        <label for="skill">Skill</label>\n        <select class="form-control" id="skill"\n                required [(ngModel)]="model.skill" name="skill"\n                #skill="ngModel">\n          @for (skill of skills; track $index) {\n            <option [value]="skill">{{ skill }}</option>\n          }\n        </select>\n        <div [hidden]="skill.valid || skill.pristine" class="alert alert-danger">\n          skill is required\n        </div>\n      </div>\n\n      <!-- #docregion submit-button -->\n      <button type="submit" class="btn btn-success"\n        [disabled]="!actorForm.form.valid">Submit</button>\n      <!-- #enddocregion submit-button -->\n      <!-- #docregion new-actor-button-form-reset -->\n      <button type="button" class="btn btn-default"\n        (click)="newActor(); actorForm.reset()">New Actor</button>\n      <!-- #enddocregion new-actor-button-form-reset -->\n <!-- #enddocregion final -->\n      <em>with</em> reset\n\n      &nbsp;&nbsp;\n      <!-- #docregion new-actor-button-no-reset -->\n      <button type="button" class="btn btn-default"\n        (click)="newActor()">New Actor</button>\n      <!-- #enddocregion new-actor-button-no-reset -->\n      <em>without</em> reset\n\n     <!-- NOT SHOWN IN DOCS -->\n      <div>\n        <hr>\n        Name via form.controls = {{ showFormControls(actorForm) }}\n      </div>\n     <!-- - -->\n<!-- #docregion final -->\n    </form>\n  </div>\n\n  <!-- #docregion submitted -->\n  <div [hidden]="!submitted">\n    <h2>You submitted the following:</h2>\n    <div class="row">\n      <div class="col-xs-3">Name</div>\n      <div class="col-xs-9">{{ model.name }}</div>\n    </div>\n    <div class="row">\n      <div class="col-xs-3">Studio</div>\n      <div class="col-xs-9">{{ model.studio }}</div>\n    </div>\n    <div class="row">\n      <div class="col-xs-3">Skill</div>\n      <div class="col-xs-9">{{ model.skill }}</div>\n    </div>\n    <br>\n    <button type="button" class="btn btn-primary" (click)="submitted=false">\n      Edit\n    </button>\n  </div>\n  <!-- #enddocregion submitted -->\n</div>\n <!-- #enddocregion final -->\n\n<!-- ====================================================  -->\n  <div>\n    <form>\n<!-- #docregion edit-div -->\n\n       <!-- ... all of the form ... -->\n\n    </form>\n  </div>\n<!-- #enddocregion edit-div -->\n\n<!-- ====================================================  -->\n<hr>\n<style>\n  .no-style .ng-valid {\n  border-left: 1px  solid #CCC\n}\n\n  .no-style .ng-invalid {\n  border-left: 1px  solid #CCC\n}\n</style>\n<div class="no-style" style="margin-left: 4px">\n  <div class="container">\n      <h1>Actor Form</h1>\n      <form>\n        <div class="form-group">\n          <label for="name">Name</label>\n          <input type="text" class="form-control" id="name" required>\n        </div>\n\n        <div class="form-group">\n          <label for="studio">Studio</label>\n          <input type="text" class="form-control" id="studio">\n        </div>\n\n        <!-- #docregion skills -->\n        <div class="form-group">\n          <label for="skill">Skill</label>\n          <select class="form-control" id="skill" required>\n            @for(skill of skills; track $index) {\n              <option [value]="skill">{{ skill }}</option>\n            }\n          </select>\n        </div>\n        <!-- #enddocregion skills -->\n        <button type="submit" class="btn btn-success">Submit</button>\n\n      </form>\n  </div>\n\n  <!-- ====================================================  -->\n  <hr>\n  <div class="container">\n      <h1>Actor Form</h1>\n      <!-- #docregion template-variable-->\n      <form #actorForm="ngForm">\n      <!-- #enddocregion template-variable-->\n    <!-- #docregion ngModel-2-->\n        {{ model | json }}\n        <div class="form-group">\n          <label for="name">Name</label>\n          <input type="text" class="form-control" id="name"\n                 required\n                 [(ngModel)]="model.name" name="name">\n        </div>\n\n        <div class="form-group">\n          <label for="studio">Studio</label>\n          <input type="text"  class="form-control" id="studio"\n                 [(ngModel)]="model.studio" name="studio">\n        </div>\n\n        <div class="form-group">\n          <label for="skill">Skill</label>\n          <select class="form-control"  id="skill"\n                  required\n                  [(ngModel)]="model.skill" name="skill">\n            @for (skill of skills; track $index) {\n              <option [value]="skill">{{ skill }}</option>\n            }\n          </select>\n        </div>\n\n    <!-- #enddocregion ngModel-2-->\n        <button type="submit" class="btn btn-success">Submit</button>\n\n      </form>\n  </div>\n\n  <!-- EXTRA MATERIAL FOR DOCUMENTATION -->\n  <hr>\n  <!-- #docregion ngModelName-1 -->\n    <input type="text" class="form-control" id="name"\n           required\n           [(ngModel)]="model.name" name="name">\n    TODO: remove this: {{ model.name}}\n  <!-- #enddocregion ngModelName-1 -->\n  <hr>\n    <input type="text" class="form-control" id="name"\n           required\n           [ngModel]="model.name" name="name"\n           (ngModelChange)="model.name = $event">\n    TODO: remove this: {{ model.name}}\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActorFormComponent, { className: "ActorFormComponent", filePath: "src/content/examples/forms/src/app/actor-form/actor-form.component.ts", lineNumber: 15 });
})();

export {
  ActorFormComponent
};
//# sourceMappingURL=chunk-3EFNBNPM.js.map

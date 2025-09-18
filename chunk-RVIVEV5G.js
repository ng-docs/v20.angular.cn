import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IP3YSDXJ.js";
import {
  CommonModule
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  Pipe,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2CX5BJWG.js";

// src/content/examples/pipes/src/app/flying-heroes.pipe.ts
var _FlyingHeroesPipe = class _FlyingHeroesPipe {
  transform(allHeroes) {
    return allHeroes.filter((hero) => hero.canFly);
  }
};
__name(_FlyingHeroesPipe, "FlyingHeroesPipe");
__publicField(_FlyingHeroesPipe, "\u0275fac", /* @__PURE__ */ __name(function FlyingHeroesPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FlyingHeroesPipe)();
}, "FlyingHeroesPipe_Factory"));
__publicField(_FlyingHeroesPipe, "\u0275pipe", /* @__PURE__ */ \u0275\u0275definePipe({ name: "flyingHeroes", type: _FlyingHeroesPipe, pure: true }));
var FlyingHeroesPipe = _FlyingHeroesPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlyingHeroesPipe, [{
    type: Pipe,
    args: [{
      name: "flyingHeroes"
    }]
  }], null, null);
})();
var _FlyingHeroesImpurePipe = class _FlyingHeroesImpurePipe extends FlyingHeroesPipe {
};
__name(_FlyingHeroesImpurePipe, "FlyingHeroesImpurePipe");
__publicField(_FlyingHeroesImpurePipe, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275FlyingHeroesImpurePipe_BaseFactory;
  return /* @__PURE__ */ __name(function FlyingHeroesImpurePipe_Factory(__ngFactoryType__) {
    return (\u0275FlyingHeroesImpurePipe_BaseFactory || (\u0275FlyingHeroesImpurePipe_BaseFactory = \u0275\u0275getInheritedFactory(_FlyingHeroesImpurePipe)))(__ngFactoryType__ || _FlyingHeroesImpurePipe);
  }, "FlyingHeroesImpurePipe_Factory");
})());
__publicField(_FlyingHeroesImpurePipe, "\u0275pipe", /* @__PURE__ */ \u0275\u0275definePipe({ name: "flyingHeroesImpure", type: _FlyingHeroesImpurePipe, pure: false }));
var FlyingHeroesImpurePipe = _FlyingHeroesImpurePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlyingHeroesImpurePipe, [{
    type: Pipe,
    args: [{
      name: "flyingHeroesImpure",
      pure: false
    }]
  }], null, null);
})();

// src/content/examples/pipes/src/app/heroes.ts
var HEROES = [
  { name: "Windstorm", canFly: true },
  { name: "Bombasto", canFly: false },
  { name: "Magneto", canFly: false },
  { name: "Tornado", canFly: true }
];

// src/content/examples/pipes/src/app/flying-heroes.component.ts
function FlyingHeroesComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hero_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(hero_r3.name);
  }
}
__name(FlyingHeroesComponent_For_22_Template, "FlyingHeroesComponent_For_22_Template");
function FlyingHeroesComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hero_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(hero_r4.name);
  }
}
__name(FlyingHeroesComponent_For_28_Template, "FlyingHeroesComponent_For_28_Template");
function FlyingHeroesImpureComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hero_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(hero_r3.name);
  }
}
__name(FlyingHeroesImpureComponent_For_19_Template, "FlyingHeroesImpureComponent_For_19_Template");
function FlyingHeroesImpureComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hero_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(hero_r4.name);
  }
}
__name(FlyingHeroesImpureComponent_For_25_Template, "FlyingHeroesImpureComponent_For_25_Template");
var _FlyingHeroesComponent = class _FlyingHeroesComponent {
  heroes = [];
  canFly = true;
  // #enddocregion v1
  mutate = true;
  title = "Flying Heroes (pure pipe)";
  // #docregion v1
  constructor() {
    this.reset();
  }
  addHero(name) {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero = { name, canFly: this.canFly };
    if (this.mutate) {
      this.heroes.push(hero);
    } else {
      this.heroes = this.heroes.concat(hero);
    }
  }
  reset() {
    this.heroes = HEROES.slice();
  }
};
__name(_FlyingHeroesComponent, "FlyingHeroesComponent");
__publicField(_FlyingHeroesComponent, "\u0275fac", /* @__PURE__ */ __name(function FlyingHeroesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FlyingHeroesComponent)();
}, "FlyingHeroesComponent_Factory"));
__publicField(_FlyingHeroesComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlyingHeroesComponent, selectors: [["app-flying-heroes"]], decls: 29, vars: 5, consts: [["box", ""], ["for", "hero-name"], ["type", "text", "id", "hero-name", "placeholder", "hero name", 3, "keyup.enter"], ["id", "can-fly", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "can-fly"], ["id", "mutate", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "mutate"], ["type", "button", 3, "click"], ["id", "flyers"], ["id", "all"]], template: /* @__PURE__ */ __name(function FlyingHeroesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Create a new hero and press enter to add it to the list. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 1);
    \u0275\u0275text(5, "New hero name: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 2, 0);
    \u0275\u0275listener("keyup.enter", /* @__PURE__ */ __name(function FlyingHeroesComponent_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r1);
      const box_r2 = \u0275\u0275reference(7);
      ctx.addHero(box_r2.value);
      return \u0275\u0275resetView(box_r2.value = "");
    }, "FlyingHeroesComponent_Template_input_keyup_enter_6_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function FlyingHeroesComponent_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.canFly, $event) || (ctx.canFly = $event);
      return \u0275\u0275resetView($event);
    }, "FlyingHeroesComponent_Template_input_ngModelChange_9_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 4);
    \u0275\u0275text(11, "Hero can fly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function FlyingHeroesComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.mutate, $event) || (ctx.mutate = $event);
      return \u0275\u0275resetView($event);
    }, "FlyingHeroesComponent_Template_input_ngModelChange_13_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 6);
    \u0275\u0275text(15, "Mutate array");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 7);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function FlyingHeroesComponent_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    }, "FlyingHeroesComponent_Template_button_click_16_listener"));
    \u0275\u0275text(17, "Reset list of heroes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "h3");
    \u0275\u0275text(19, "Heroes who fly (piped)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 8);
    \u0275\u0275repeaterCreate(21, FlyingHeroesComponent_For_22_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(23, "flyingHeroes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h3");
    \u0275\u0275text(25, "All Heroes (no pipe)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 9);
    \u0275\u0275repeaterCreate(27, FlyingHeroesComponent_For_28_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.canFly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.mutate);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(23, 3, ctx.heroes));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.heroes);
  }
}, "FlyingHeroesComponent_Template"), dependencies: [CommonModule, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, FlyingHeroesPipe], styles: ["\n\n#flyers[_ngcontent-%COMP%], \n#all[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n}\ninput[_ngcontent-%COMP%] {\n  margin: 0.25rem 0.25rem 0.5rem 0;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */"] }));
var FlyingHeroesComponent = _FlyingHeroesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlyingHeroesComponent, [{
    type: Component,
    args: [{ selector: "app-flying-heroes", imports: [CommonModule, FormsModule, FlyingHeroesPipe], template: `<!-- #docplaster-->
<!-- #docregion -->
<h2>{{ title }}</h2>
<p>Create a new hero and press enter to add it to the list. </p>
<!-- #docregion template-1 -->
<label for="hero-name">New hero name: </label>
<input type="text" #box id="hero-name" (keyup.enter)="addHero(box.value); box.value=''" placeholder="hero name">
<!-- #enddocregion template-1 -->
<div>
  <input id="can-fly" type="checkbox" [(ngModel)]="canFly">
  <label for="can-fly">Hero can fly</label>
</div>
<div>
  <input id="mutate" type="checkbox" [(ngModel)]="mutate">
  <label for="mutate">Mutate array</label>
  <!-- #docregion template-1 -->
  <button type="button" (click)="reset()">Reset list of heroes</button>
    <!-- #enddocregion template-1 -->
</div>

<h3>Heroes who fly (piped)</h3>
<div id="flyers">
  <!-- #docregion template-flying-heroes -->
  @for (hero of (heroes | flyingHeroes); track hero) {
    <div>{{ hero.name }}</div>
  }
  <!-- #enddocregion template-flying-heroes -->
</div>

<h3>All Heroes (no pipe)</h3>
<div id="all">
  <!-- #docregion template-1 -->
  @for (hero of heroes; track hero) {
    <div>{{ hero.name }}</div>
  }
  <!-- #enddocregion template-1 -->
</div>
`, styles: ["/* angular:styles/component:scss;3bc70b8762fe33470e25454702be45871a162a6dd3bb411f596c83187e916e72;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/33/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/flying-heroes.component.ts */\n#flyers,\n#all {\n  font-style: italic;\n}\nbutton {\n  display: block;\n}\ninput {\n  margin: 0.25rem 0.25rem 0.5rem 0;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlyingHeroesComponent, { className: "FlyingHeroesComponent", filePath: "src/content/examples/pipes/src/app/flying-heroes.component.ts", lineNumber: 23 });
})();
var _FlyingHeroesImpureComponent = class _FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  title = "Flying Heroes (impure pipe)";
};
__name(_FlyingHeroesImpureComponent, "FlyingHeroesImpureComponent");
__publicField(_FlyingHeroesImpureComponent, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275FlyingHeroesImpureComponent_BaseFactory;
  return /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Factory(__ngFactoryType__) {
    return (\u0275FlyingHeroesImpureComponent_BaseFactory || (\u0275FlyingHeroesImpureComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FlyingHeroesImpureComponent)))(__ngFactoryType__ || _FlyingHeroesImpureComponent);
  }, "FlyingHeroesImpureComponent_Factory");
})());
__publicField(_FlyingHeroesImpureComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlyingHeroesImpureComponent, selectors: [["app-flying-heroes-impure"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 5, consts: [["box", ""], ["for", "hero-name"], ["type", "text", "id", "hero-name", "placeholder", "hero name", 3, "keyup.enter"], ["id", "can-fly", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "can-fly"], ["id", "mutate", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "button", 3, "click"], ["id", "flyers"], ["id", "all"]], template: /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 1);
    \u0275\u0275text(3, "New hero: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 2, 0);
    \u0275\u0275listener("keyup.enter", /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template_input_keyup_enter_4_listener() {
      \u0275\u0275restoreView(_r1);
      const box_r2 = \u0275\u0275reference(5);
      ctx.addHero(box_r2.value);
      return \u0275\u0275resetView(box_r2.value = "");
    }, "FlyingHeroesImpureComponent_Template_input_keyup_enter_4_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.canFly, $event) || (ctx.canFly = $event);
      return \u0275\u0275resetView($event);
    }, "FlyingHeroesImpureComponent_Template_input_ngModelChange_7_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 4);
    \u0275\u0275text(9, "can fly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.mutate, $event) || (ctx.mutate = $event);
      return \u0275\u0275resetView($event);
    }, "FlyingHeroesImpureComponent_Template_input_ngModelChange_11_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "Mutate array ");
    \u0275\u0275elementStart(13, "button", 6);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function FlyingHeroesImpureComponent_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.reset());
    }, "FlyingHeroesImpureComponent_Template_button_click_13_listener"));
    \u0275\u0275text(14, "Reset");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h3");
    \u0275\u0275text(16, "Heroes who fly (piped)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 7);
    \u0275\u0275repeaterCreate(18, FlyingHeroesImpureComponent_For_19_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(20, "flyingHeroesImpure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h3");
    \u0275\u0275text(22, "All Heroes (no pipe)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 8);
    \u0275\u0275repeaterCreate(24, FlyingHeroesImpureComponent_For_25_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.canFly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.mutate);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(20, 3, ctx.heroes));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.heroes);
  }
}, "FlyingHeroesImpureComponent_Template"), dependencies: [CommonModule, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, FlyingHeroesImpurePipe], styles: ["\n\n#flyers[_ngcontent-%COMP%], \n#all[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */", "\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */", "\n\ninput[_ngcontent-%COMP%] {\n  margin: 0.25rem 0.25rem 0.5rem 0;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */"] }));
var FlyingHeroesImpureComponent = _FlyingHeroesImpureComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlyingHeroesImpureComponent, [{
    type: Component,
    args: [{ selector: "app-flying-heroes-impure", imports: [CommonModule, FormsModule, FlyingHeroesImpurePipe], template: `<!-- #docplaster-->
<!-- #docregion -->
<h2>{{ title }}</h2>

<label for="hero-name">New hero: </label>
<input type="text" id="hero-name" #box (keyup.enter)="addHero(box.value); box.value=''" placeholder="hero name">
<div>
  <input id="can-fly" type="checkbox" [(ngModel)]="canFly">
  <label for="can-fly">can fly</label>
</div>

<div>
  <input id="mutate" type="checkbox" [(ngModel)]="mutate">Mutate array
  <button type="button" (click)="reset()">Reset</button>
</div>

<h3>Heroes who fly (piped)</h3>
<div id="flyers">
  <!-- #docregion template-flying-heroes -->
  @for (hero of (heroes | flyingHeroesImpure); track hero) {
    <div>{{ hero.name }}</div>
  }
  <!-- #enddocregion template-flying-heroes -->
</div>

<h3>All Heroes (no pipe)</h3>
<div id="all">
  @for (hero of heroes; track hero) {
    <div>{{ hero.name }}</div>
  }
</div>
`, styles: ["/* angular:styles/component:scss;92aafcd85aac48dedac0fd92f1a9ba71405aa494ed05a62f84d44049b204681f;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/33/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/flying-heroes.component.ts */\n#flyers,\n#all {\n  font-style: italic;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */\n", "/* angular:styles/component:scss;fe2d60372eb3b29f751a561d1818cc1d1d196073e309a53d18d1f2a5c53cbc36;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/33/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/flying-heroes.component.ts */\nbutton {\n  display: block;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */\n", "/* angular:styles/component:scss;5c5cbd3f36df3e020fd8c280cd35ea6b32ef3ae77f650ca8a18833c66c2a5432;/private/var/tmp/_bazel_wzc/9dd57f1bf43e7c8b8d91b30eefed3698/sandbox/darwin-sandbox/33/execroot/_main/bazel-out/darwin_x86_64-fastbuild/bin/adev/src/content/examples/pipes/src/app/flying-heroes.component.ts */\ninput {\n  margin: 0.25rem 0.25rem 0.5rem 0;\n}\n/*# sourceMappingURL=flying-heroes.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlyingHeroesImpureComponent, { className: "FlyingHeroesImpureComponent", filePath: "src/content/examples/pipes/src/app/flying-heroes.component.ts", lineNumber: 74 });
})();

export {
  FlyingHeroesComponent,
  FlyingHeroesImpureComponent
};
//# sourceMappingURL=chunk-RVIVEV5G.js.map

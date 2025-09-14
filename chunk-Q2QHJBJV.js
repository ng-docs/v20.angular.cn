import {
  ANIMATION_MODULE_TYPE,
  DOCUMENT,
  Inject,
  Injectable,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation,
  __name,
  __publicField,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2CX5BJWG.js";

// node_modules/@angular/animations/fesm2022/private_export.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
function trigger(name, definitions) {
  return { type: AnimationMetadataType.Trigger, name, definitions, options: {} };
}
__name(trigger, "trigger");
function animate(timings, styles = null) {
  return { type: AnimationMetadataType.Animate, styles, timings };
}
__name(animate, "animate");
function group(steps, options = null) {
  return { type: AnimationMetadataType.Group, steps, options };
}
__name(group, "group");
function sequence(steps, options = null) {
  return { type: AnimationMetadataType.Sequence, steps, options };
}
__name(sequence, "sequence");
function style(tokens) {
  return { type: AnimationMetadataType.Style, styles: tokens, offset: null };
}
__name(style, "style");
function state(name, styles, options) {
  return { type: AnimationMetadataType.State, name, styles, options };
}
__name(state, "state");
function keyframes(steps) {
  return { type: AnimationMetadataType.Keyframes, steps };
}
__name(keyframes, "keyframes");
function transition(stateChangeExpr, steps, options = null) {
  return { type: AnimationMetadataType.Transition, expr: stateChangeExpr, animation: steps, options };
}
__name(transition, "transition");
function animation(steps, options = null) {
  return { type: AnimationMetadataType.Reference, animation: steps, options };
}
__name(animation, "animation");
function animateChild(options = null) {
  return { type: AnimationMetadataType.AnimateChild, options };
}
__name(animateChild, "animateChild");
function useAnimation(animation2, options = null) {
  return { type: AnimationMetadataType.AnimateRef, animation: animation2, options };
}
__name(useAnimation, "useAnimation");
function query(selector, animation2, options = null) {
  return { type: AnimationMetadataType.Query, selector, animation: animation2, options };
}
__name(query, "query");
function stagger(timings, animation2) {
  return { type: AnimationMetadataType.Stagger, timings, animation: animation2 };
}
__name(stagger, "stagger");

// node_modules/@angular/animations/fesm2022/animations.mjs
var _AnimationBuilder = class _AnimationBuilder {
};
__name(_AnimationBuilder, "AnimationBuilder");
__publicField(_AnimationBuilder, "\u0275fac", /* @__PURE__ */ __name(function AnimationBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimationBuilder)();
}, "AnimationBuilder_Factory"));
__publicField(_AnimationBuilder, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AnimationBuilder,
  factory: /* @__PURE__ */ __name(() => (() => inject(BrowserAnimationBuilder))(), "factory"),
  providedIn: "root"
}));
var AnimationBuilder = _AnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: /* @__PURE__ */ __name(() => inject(BrowserAnimationBuilder), "useFactory")
    }]
  }], null, null);
})();
var _AnimationFactory = class _AnimationFactory {
};
__name(_AnimationFactory, "AnimationFactory");
var AnimationFactory = _AnimationFactory;
var _BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
};
__name(_BrowserAnimationBuilder, "BrowserAnimationBuilder");
__publicField(_BrowserAnimationBuilder, "\u0275fac", /* @__PURE__ */ __name(function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
}, "BrowserAnimationBuilder_Factory"));
__publicField(_BrowserAnimationBuilder, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _BrowserAnimationBuilder,
  factory: _BrowserAnimationBuilder.\u0275fac,
  providedIn: "root"
}));
var BrowserAnimationBuilder = _BrowserAnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _BrowserAnimationFactory = class _BrowserAnimationFactory extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
__name(_BrowserAnimationFactory, "BrowserAnimationFactory");
var BrowserAnimationFactory = _BrowserAnimationFactory;
var _RendererAnimationPlayer = class _RendererAnimationPlayer {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
__name(_RendererAnimationPlayer, "RendererAnimationPlayer");
var RendererAnimationPlayer = _RendererAnimationPlayer;
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
__name(issueAnimationCommand, "issueAnimationCommand");
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
__name(unwrapAnimationRenderer, "unwrapAnimationRenderer");
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}
__name(isAnimationRenderer, "isAnimationRenderer");

export {
  trigger,
  animate,
  group,
  style,
  state,
  keyframes,
  transition,
  animation,
  animateChild,
  useAnimation,
  query,
  stagger
};
/*! Bundled license information:

@angular/animations/fesm2022/private_export.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v0.0.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-Q2QHJBJV.js.map

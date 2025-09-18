import {
  WINDOW,
  isIos,
  shouldReduceMotion
} from "./chunk-FSDA2DZH.js";
import "./chunk-7F6UZAKO.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import "./chunk-UGE24TTQ.js";
import "./chunk-IP3YSDXJ.js";
import "./chunk-H7FALWCD.js";
import "./chunk-OV2CFM4K.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  Injector,
  Renderer2,
  RendererFactory2,
  __name,
  __publicField,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferPrefetchWhen,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵviewQuerySignal
} from "./chunk-2CX5BJWG.js";

// src/app/features/home/animation/parser/utils.ts
function stringifyParsedValue(value) {
  switch (value.type) {
    case "numeric":
      return value.values.map(([num, unit]) => num + unit).join(" ");
    case "transform":
      return Array.from(value.values).map(([fnName, numData]) => `${fnName}(${numData.map(([num, unit]) => num + unit).join(", ")})`).join(" ");
    case "color":
      const v = value.value;
      let color = v[0] + "(";
      for (let i = 1; i < v.length; i++) {
        color += v[i] + (i < v.length - 1 ? ", " : "");
      }
      return color + ")";
    case "static":
      return value.value;
  }
}
__name(stringifyParsedValue, "stringifyParsedValue");
function copyParsedValue(value) {
  return structuredClone(value);
}
__name(copyParsedValue, "copyParsedValue");

// src/app/features/home/animation/parser/css-value-lexer.ts
var END_SYMBOLS = ["space", "bracket", "comma"];
function cssValueLexer(value) {
  const tokens = [];
  let buffer = "";
  let bufferType = null;
  const addToken = /* @__PURE__ */ __name(() => tokens.push(bufferType === "number" ? parseFloat(buffer) : buffer), "addToken");
  for (const char of value) {
    const charType = getCharType(char);
    const newBufferType = getBufferType(charType, bufferType);
    if (END_SYMBOLS.includes(charType) && buffer) {
      addToken();
      buffer = "";
      bufferType = null;
    } else if (newBufferType !== null) {
      if (newBufferType !== bufferType && bufferType !== null) {
        addToken();
        buffer = char;
        bufferType = newBufferType;
      } else if (newBufferType === bufferType || bufferType === null) {
        buffer += char;
        bufferType = newBufferType;
      }
    }
  }
  if (buffer) {
    addToken();
  }
  return tokens;
}
__name(cssValueLexer, "cssValueLexer");
function getCharType(char) {
  if (char === ".") {
    return "point";
  }
  if (char === "-") {
    return "hyphen";
  }
  if (char === ",") {
    return "comma";
  }
  if (char === "%") {
    return "percent";
  }
  if (char === "#") {
    return "hash";
  }
  if (char === " ") {
    return "space";
  }
  if (char === "(" || char === ")") {
    return "bracket";
  }
  const code = char.charCodeAt(0);
  if (48 <= code && code <= 57) {
    return "digit";
  }
  if (65 <= code && code <= 90 || 97 <= code && code <= 122) {
    return "letter";
  }
  return "unknown";
}
__name(getCharType, "getCharType");
function getBufferType(type, currentBuffer) {
  const colorSymbols = ["hash"];
  if (colorSymbols.includes(type) || currentBuffer === "color") {
    return "color";
  }
  const textSymbols = ["letter", "percent"];
  if (textSymbols.includes(type)) {
    return "text";
  }
  const numberSymbols = ["digit", "point", "hyphen"];
  if (numberSymbols.includes(type)) {
    return "number";
  }
  return null;
}
__name(getBufferType, "getBufferType");

// src/app/features/home/animation/parser/css-value-parser.ts
var SUPPORTED_FUNCS = [
  "translate",
  "rotate",
  "scale",
  "skew",
  "translateX",
  "translateY",
  "translateZ",
  "scaleX",
  "scaleY",
  "scaleZ",
  "skewX",
  "skewY"
];
var colorValuesHandler = /* @__PURE__ */ __name((tokens) => {
  const token = tokens[0];
  if (typeof token === "string") {
    if (token.startsWith("#")) {
      const channels = [];
      if (token.length === 7) {
        let channelBuffer = "";
        for (let i = 1; i < token.length; i++) {
          channelBuffer += token[i];
          if (channelBuffer.length === 2) {
            const dec = parseInt(channelBuffer, 16);
            channels.push(dec);
            channelBuffer = "";
          }
        }
      } else if (token.length === 4) {
        for (let i = 1; i < token.length; i++) {
          const channel = token[i];
          const hex = channel + channel;
          const dec = parseInt(hex, 16);
          channels.push(dec);
        }
      }
      if (channels.length === 3) {
        return {
          type: "color",
          value: ["rgb", ...channels]
        };
      }
    }
    if (token === "rgb" && tokens.length === 4 || token === "rgba" && tokens.length === 5) {
      return {
        type: "color",
        value: tokens
      };
    }
  }
  return null;
}, "colorValuesHandler");
var numericValueHandler = /* @__PURE__ */ __name((tokens) => {
  if (typeof tokens[0] === "number") {
    const value = {
      type: "numeric",
      values: []
    };
    let buffer = [];
    for (const token of tokens) {
      if (typeof token === "number") {
        if (buffer.length) {
          value.values.push(buffer.length === 1 ? [buffer[0], ""] : buffer);
          buffer = [];
        }
        buffer.push(token);
      } else if (buffer.length === 1) {
        buffer.push(token);
      } else {
        return null;
      }
    }
    if (buffer.length) {
      value.values.push(buffer.length === 1 ? [buffer[0], ""] : buffer);
    }
    return value;
  }
  return null;
}, "numericValueHandler");
var transformValueHandler = /* @__PURE__ */ __name((tokens) => {
  if (tokens.length > 1 && typeof tokens[0] === "string") {
    const value = {
      type: "transform",
      values: /* @__PURE__ */ new Map()
    };
    let functionName = "";
    let paramPairs = [];
    let paramBuffer = [];
    let isValid = true;
    const isBufferNumOnly = /* @__PURE__ */ __name(() => !paramBuffer.find((v) => typeof v === "string"), "isBufferNumOnly");
    for (const token of tokens) {
      if (typeof token === "string" && SUPPORTED_FUNCS.includes(token)) {
        if (paramPairs.length || paramBuffer.length) {
          if (paramBuffer.length) {
            if (!isBufferNumOnly()) {
              isValid = false;
              break;
            }
            const pairs = paramBuffer.map((v) => [v, ""]);
            paramPairs = paramPairs.concat(pairs);
          }
          value.values.set(functionName, paramPairs);
          paramPairs = [];
          paramBuffer = [];
        }
        functionName = token;
      } else if (functionName) {
        paramBuffer.push(token);
        if (paramBuffer.length === 2 && typeof paramBuffer[0] === "number" && typeof paramBuffer[1] === "string") {
          paramPairs.push(paramBuffer);
          paramBuffer = [];
        }
      }
    }
    if (functionName && (paramPairs.length || paramBuffer.length)) {
      if (paramBuffer.length && isBufferNumOnly()) {
        const pairs = paramBuffer.map((v) => [v, ""]);
        paramPairs = paramPairs.concat(pairs);
      }
      if (paramPairs.length) {
        value.values.set(functionName, paramPairs);
      }
    }
    if (isValid && value.values.size) {
      return value;
    }
  }
  return null;
}, "transformValueHandler");
var parserHandlers = [colorValuesHandler, numericValueHandler, transformValueHandler];
function cssValueParser(value) {
  const tokens = cssValueLexer(value);
  for (const handler of parserHandlers) {
    const value2 = handler(tokens);
    if (value2) {
      return value2;
    }
  }
  return {
    type: "static",
    value
  };
}
__name(cssValueParser, "cssValueParser");

// src/app/features/home/animation/calculations/calc-css-value.ts
function calculateNextCssValue(srcValue, targetValue, changeRate) {
  switch (targetValue.type) {
    case "numeric":
      return calculateNextNumericValue(srcValue, targetValue, changeRate);
    case "transform":
      return calculateNextTransformValue(srcValue, targetValue, changeRate);
    case "color":
      return calculateNextColorValue(srcValue, targetValue, changeRate);
  }
  return copyParsedValue(targetValue);
}
__name(calculateNextCssValue, "calculateNextCssValue");
function calculateNextNumericValue(srcValue, targetValue, changeRate) {
  const nextValue = {
    type: "numeric",
    values: []
  };
  for (let i = 0; i < targetValue.values.length; i++) {
    const src = srcValue.values[i];
    const target = targetValue.values[i];
    const numDelta = calculateValueDelta(src[0], target[0], changeRate);
    const unit = target[1] || src[1];
    nextValue.values.push([src[0] + numDelta, unit]);
  }
  return nextValue;
}
__name(calculateNextNumericValue, "calculateNextNumericValue");
function calculateNextTransformValue(srcValue, targetValue, changeRate) {
  const nextValue = {
    type: "transform",
    values: /* @__PURE__ */ new Map()
  };
  for (const [func, numData] of targetValue.values) {
    const srcNumData = srcValue.values.get(func);
    const newNumData = [];
    for (let i = 0; i < numData.length; i++) {
      const target = numData[i];
      const src = srcNumData[i];
      const numDelta = calculateValueDelta(src[0], target[0], changeRate);
      const unit = target[1] || src[1];
      newNumData.push([src[0] + numDelta, unit]);
    }
    nextValue.values.set(func, newNumData);
  }
  return nextValue;
}
__name(calculateNextTransformValue, "calculateNextTransformValue");
function calculateNextColorValue(srcValue, targetValue, changeRate) {
  const nextColor = [srcValue.value[0]];
  for (let i = 1; i < targetValue.value.length; i++) {
    const srcChannel = srcValue.value[i];
    const targetChannel = targetValue.value[i];
    const delta = calculateValueDelta(srcChannel, targetChannel, changeRate);
    nextColor.push(Math.round(srcChannel + delta));
  }
  return {
    type: "color",
    value: nextColor
  };
}
__name(calculateNextColorValue, "calculateNextColorValue");
function calculateValueDelta(srcValue, targetValue, changeRate) {
  const valueSpan = targetValue - srcValue;
  return valueSpan * changeRate;
}
__name(calculateValueDelta, "calculateValueDelta");

// src/app/features/home/animation/animation.ts
var SEL_SEPARATOR = ">>";
var MS = 1e3;
var DEFAULT_CONFIG = {
  timestep: 100
};
var getStartTime = /* @__PURE__ */ __name((r) => r.timeframe ? r.timeframe[0] : r.at, "getStartTime");
var getEndTime = /* @__PURE__ */ __name((r) => r.timeframe ? r.timeframe[1] : r.at, "getEndTime");
var getEndStyles = /* @__PURE__ */ __name((r) => r.timeframe ? r.to : r.styles, "getEndStyles");
var _Animation = class _Animation {
  renderer;
  /** Parsed rules. Time is in milliseconds. */
  rules = [];
  config;
  currentTime = 0;
  allObjects = /* @__PURE__ */ new Map();
  // selector; element(s)
  activeStyles = /* @__PURE__ */ new Map();
  // selector; ParsedStyles
  animationFrameId = null;
  completed = false;
  plugins = [];
  _duration = 0;
  _isPlaying = signal(false, ...ngDevMode ? [{ debugName: "_isPlaying" }] : []);
  _progress = signal(0, ...ngDevMode ? [{ debugName: "_progress" }] : []);
  /** Returns whether the animation is playing or not */
  isPlaying = this._isPlaying.asReadonly();
  /** Returns the animation progress (`[0,1]`) */
  progress = this._progress.asReadonly();
  constructor(layers, injector, config) {
    this.renderer = injector.get(RendererFactory2).createRenderer(null, null);
    this.config = __spreadValues(__spreadValues({}, DEFAULT_CONFIG), config || {});
    this.allObjects = new Map(layers.map((f) => [f.id(), f.elementRef.nativeElement]));
  }
  /** Animation duration. In milliseconds */
  get duration() {
    return this._duration;
  }
  /** Animation timestep (config). In milliseconds */
  get timestep() {
    return this.config.timestep;
  }
  /**
   * Define the animation.
   *
   * @param definition Definition (i.e. `AnimationRule` array)
   * @returns The animation
   */
  define(definition) {
    this.reset();
    this.extractObjectsAndValidateRules(definition);
    this.rules = definition.sort((a, b) => getStartTime(a) - getStartTime(b)).map((rule) => {
      if (rule.timeframe) {
        const from = {};
        const to = {};
        for (const [prop, val] of Object.entries(rule.from)) {
          from[prop] = cssValueParser(val);
        }
        for (const [prop, val] of Object.entries(rule.to)) {
          to[prop] = cssValueParser(val);
        }
        const msTimeframe = rule.timeframe.map((t) => t * MS);
        return __spreadProps(__spreadValues({}, rule), { from, to, timeframe: msTimeframe });
      } else {
        const styles = {};
        for (const [prop, val] of Object.entries(rule.styles)) {
          styles[prop] = cssValueParser(val);
        }
        const msAt = rule.at * MS;
        return __spreadProps(__spreadValues({}, rule), { styles, at: msAt });
      }
    });
    this._duration = Math.max(...this.rules.map((r) => getEndTime(r)));
    return this;
  }
  /** Play the animation. */
  play() {
    if (this.animationFrameId !== null) {
      return;
    }
    if (!this.rules.length) {
      console.warn("Animation: Can't play without a definition");
      return;
    }
    if (this.completed) {
      this.reset();
      this.completed = false;
    }
    this._isPlaying.set(true);
    this.animate(Date.now(), 0);
  }
  /** Pause the animation. */
  pause() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
      this._isPlaying.set(false);
    }
  }
  /**
   * Fast-forward or go back at a specific time.
   *
   * @param progress Time (in percent) at which the player should render the animation
   * @returns
   */
  seek(progress) {
    this.pause();
    if (!this.rules.length) {
      console.warn("Animation: Can't  without a definition");
      return;
    }
    progress = Math.max(0, Math.min(progress, 1));
    const time = Math.round(progress * this._duration);
    this.updateFrame(time);
    this.completed = progress === 1;
  }
  /**
   * Go forward in time.
   *
   * @param timestep Custom timestep different from the config one
   * @returns
   */
  forward(timestep) {
    this.pause();
    if (!this.rules.length) {
      console.warn("Animation: Can't go forward without a definition");
      return;
    }
    timestep = timestep ?? this.config.timestep;
    const time = this.currentTime + timestep;
    if (time <= this._duration) {
      this.updateFrame(time);
    } else {
      this.completed = true;
    }
  }
  /**
   * Go back in time.
   *
   * @param timestep Custom timestep different from the config one
   * @returns
   */
  back(timestep) {
    this.pause();
    if (!this.rules.length) {
      console.warn("Animation: Can't go back without a definition");
      return;
    }
    timestep = timestep ?? this.config.timestep;
    const time = this.currentTime - timestep;
    if (time >= 0) {
      this.updateFrame(time);
      this.completed = false;
    }
  }
  /** Reset the animation. */
  reset() {
    this.pause();
    this.currentTime = 0;
    this._progress.set(0);
    for (const [selector, styles] of this.activeStyles) {
      for (const style of Object.keys(styles)) {
        this.removeStyle(selector, style);
      }
      this.activeStyles.delete(selector);
    }
  }
  /** Alias for `reset`. */
  stop() {
    this.reset();
  }
  /**
   * Add and initialize `AnimationPlugin` to the animation.
   *
   * @param plugin Plugin to be added
   * @returns The animation
   */
  addPlugin(plugin) {
    plugin.init(this);
    this.plugins.push(plugin);
    return this;
  }
  /**
   * Cleans all of the resources that might cause memory leaks (e.g. plugins).
   * Resets the animation and cleans the definition.
   */
  dispose() {
    for (const plugin of this.plugins) {
      plugin.destroy();
    }
    this.reset();
    this.rules = [];
    this._duration = 0;
    this.plugins = [];
  }
  /**
   * Update the frame/animation by a given time.
   *
   * @param time Time at which the animation should be rendered.
   */
  updateFrame(time) {
    const completedRules = this.rules.filter((r) => time >= getEndTime(r));
    const inProgressDynamicRules = this.rules.filter((r) => {
      const start = getStartTime(r);
      const end = getEndTime(r);
      return start < end && start <= time && time <= end;
    });
    const stylesState = /* @__PURE__ */ new Map();
    for (const rule of completedRules) {
      let objectStyles = stylesState.get(rule.selector) || {};
      objectStyles = __spreadValues(__spreadValues({}, objectStyles), getEndStyles(rule));
      stylesState.set(rule.selector, objectStyles);
    }
    const deltaTime = time - this.currentTime;
    for (const rule of inProgressDynamicRules) {
      let timespan;
      let targetStyles;
      let sourceStyles;
      let relativeDeltaT;
      if (deltaTime > 0) {
        const relativeTime = rule.timeframe[0];
        relativeDeltaT = time - relativeTime;
        timespan = getEndTime(rule) - relativeTime;
        targetStyles = rule.to;
        sourceStyles = rule.from;
      } else {
        const relativeTime = rule.timeframe[1];
        relativeDeltaT = time - relativeTime;
        timespan = relativeTime - getStartTime(rule);
        targetStyles = rule.from;
        sourceStyles = rule.to;
      }
      const changeRate = Math.abs(relativeDeltaT / timespan);
      const styles = stylesState.get(rule.selector) || {};
      for (const [prop, target] of Object.entries(targetStyles)) {
        const source = sourceStyles[prop];
        styles[prop] = calculateNextCssValue(source, target, changeRate);
      }
      stylesState.set(rule.selector, styles);
    }
    for (const [selector, styles] of this.activeStyles) {
      const newStyles = stylesState.get(selector);
      for (const prop of Object.keys(styles)) {
        if (!newStyles || !newStyles[prop]) {
          this.removeStyle(selector, prop);
        }
      }
    }
    for (const [selector, styles] of stylesState) {
      for (const [prop, value] of Object.entries(styles)) {
        this.setStyle(selector, prop, value);
      }
    }
    this.currentTime = time;
    this._progress.set(time / this.duration);
  }
  /** Set active style. */
  setStyle(selector, property, value) {
    const elements = this.allObjects.get(selector);
    const valueString = stringifyParsedValue(value);
    if (elements instanceof Element) {
      this.renderer.setStyle(elements, property, valueString);
    } else {
      for (const e of elements) {
        this.renderer.setStyle(e, property, valueString);
      }
    }
    const activeStyles = this.activeStyles.get(selector) || {};
    activeStyles[property] = value;
    this.activeStyles.set(selector, activeStyles);
  }
  /** Remove active style. */
  removeStyle(selector, property) {
    const elements = this.allObjects.get(selector);
    if (elements instanceof Element) {
      this.renderer.removeStyle(elements, property);
    } else {
      for (const e of elements) {
        this.renderer.removeStyle(e, property);
      }
    }
    const activeStyles = this.activeStyles.get(selector) || {};
    delete activeStyles[property];
  }
  /** Animate function. */
  animate(then, elapsed) {
    this.animationFrameId = requestAnimationFrame(() => this.animate(then, elapsed));
    const now = Date.now();
    elapsed = now - then;
    if (elapsed >= this.config.timestep) {
      then = now - elapsed % this.config.timestep;
      const time = this.currentTime + elapsed;
      if (time <= this._duration) {
        this.updateFrame(time);
      } else {
        this.pause();
        this.completed = true;
        if (this.duration > this.currentTime) {
          requestAnimationFrame(() => this.updateFrame(this.duration));
        }
      }
    }
  }
  /** Extract the objects from the selectors and validate their rules. */
  extractObjectsAndValidateRules(definition) {
    for (const rule of definition) {
      this.validateRules(rule);
      this.extractObjects(rule);
    }
  }
  /** Check whether the start and end styles match and the time frame is correct. */
  validateRules(rule) {
    if (!rule.timeframe) {
      return;
    }
    const duration = rule.timeframe[1] - rule.timeframe[0];
    if (duration < 0) {
      throw new Error(`Animation: Incorrect time frame for selector '${rule.selector}'. Start time is greater than end time`);
    } else if (duration === 0) {
      throw new Error(`Animation: Duration for selector '${rule.selector}' is zero. Use 'at' time selector instead`);
    }
    const fromStyles = Object.keys(rule.from);
    const toStyles = Object.keys(rule.to);
    if (fromStyles.length !== toStyles.length) {
      throw new Error(`Animation: There is a mismatch between the number of "from" and "to" styles for selector '${rule.selector}'`);
    }
    for (const prop of toStyles) {
      if (!rule.from[prop]) {
        throw new Error(`Animation: "from" style '${prop}' is missing for selector '${rule.selector}'`);
      }
    }
  }
  /**
   * Extracts all objects (layer elements and layer child elements) by their provided selectors.
   */
  extractObjects(rule) {
    let [layerId, objectSelector] = rule.selector.split(SEL_SEPARATOR);
    layerId = layerId.trim();
    objectSelector = (objectSelector ?? "").trim();
    const layer = this.allObjects.get(layerId);
    if (!layer) {
      throw new Error(`Animation: Missing layer ID: ${layerId}`);
    }
    if (objectSelector && !this.allObjects.has(rule.selector)) {
      const objects = layer.getElementsByClassName(objectSelector.replaceAll(".", " ").trim());
      if (!objects.length) {
        throw new Error(`Animation: Missing layer object(s): ${rule.selector}`);
      }
      if (!this.allObjects.has(rule.selector)) {
        this.allObjects.set(rule.selector, objects.length === 1 ? objects[0] : Array.from(objects));
      }
    }
  }
};
__name(_Animation, "Animation");
var Animation = _Animation;

// src/app/features/home/animation/animation-creator.service.ts
var _AnimationCreatorService = class _AnimationCreatorService {
  injector = inject(Injector);
  /**
   * Create an `Animation` object
   *
   * @param layers Animation layers
   * @param config Animation config
   * @returns `Animation`
   */
  createAnimation(layers, config) {
    return new Animation(layers, this.injector, config);
  }
};
__name(_AnimationCreatorService, "AnimationCreatorService");
__publicField(_AnimationCreatorService, "\u0275fac", /* @__PURE__ */ __name(function AnimationCreatorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimationCreatorService)();
}, "AnimationCreatorService_Factory"));
__publicField(_AnimationCreatorService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnimationCreatorService, factory: _AnimationCreatorService.\u0275fac, providedIn: "root" }));
var AnimationCreatorService = _AnimationCreatorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationCreatorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/home/animation/animation-layer.directive.ts
var _AnimationLayerDirective = class _AnimationLayerDirective {
  elementRef = inject(ElementRef);
  id = input.required(...ngDevMode ? [{ debugName: "id", alias: "layerId" }] : [{ alias: "layerId" }]);
};
__name(_AnimationLayerDirective, "AnimationLayerDirective");
__publicField(_AnimationLayerDirective, "\u0275fac", /* @__PURE__ */ __name(function AnimationLayerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimationLayerDirective)();
}, "AnimationLayerDirective_Factory"));
__publicField(_AnimationLayerDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AnimationLayerDirective, selectors: [["", "adevAnimationLayer", ""]], inputs: { id: [1, "layerId", "id"] } }));
var AnimationLayerDirective = _AnimationLayerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationLayerDirective, [{
    type: Directive,
    args: [{
      selector: "[adevAnimationLayer]"
    }]
  }], null, null);
})();

// src/app/features/home/animation/plugins/animation-scroll-handler.ts
var RESIZE_DEBOUNCE = 500;
var _AnimationScrollHandler = class _AnimationScrollHandler {
  hostElementRef;
  addSpacer;
  win;
  renderer;
  unlisteners = [];
  scrollHeight = 0;
  spacer;
  resizeDebounceTimeout;
  /**
   * Enables page scroll control over the animation.
   *
   * @param hostElementRef `ElementRef` of the animation host component.
   * @param injector
   * @param addSpacer Enabled by default. Use when the position of the animation is `fixed`.
   */
  constructor(hostElementRef, injector, addSpacer = true) {
    this.hostElementRef = hostElementRef;
    this.addSpacer = addSpacer;
    this.win = injector.get(WINDOW);
    this.renderer = injector.get(RendererFactory2).createRenderer(null, null);
  }
  init(animation) {
    this.scrollHeight = animation.duration / animation.timestep;
    this.unlisteners.push(this.renderer.listen(this.win, "scroll", () => {
      if (animation.isPlaying()) {
        animation.pause();
      }
      const progress = this.win.scrollY / this.scrollHeight;
      animation.seek(progress);
    }));
    if (this.addSpacer) {
      this.createSpacer();
      this.unlisteners.push(this.renderer.listen(this.win, "resize", () => {
        if (this.resizeDebounceTimeout) {
          clearTimeout(this.resizeDebounceTimeout);
        }
        this.resizeDebounceTimeout = setTimeout(() => this.updateSpacerHeight(), RESIZE_DEBOUNCE);
      }));
    }
  }
  destroy() {
    for (const unlisten of this.unlisteners) {
      unlisten();
    }
  }
  /** Creates and stores a spacer that occupies/creates the scrollable space needed for the animation. */
  createSpacer() {
    this.spacer = this.renderer.createElement("div");
    this.renderer.addClass(this.spacer, "anim-scroll-spacer");
    this.updateSpacerHeight();
    this.hostElementRef.nativeElement.appendChild(this.spacer);
  }
  /** Update stored spacer's height. */
  updateSpacerHeight() {
    const spacerHeight = this.scrollHeight + this.win.innerHeight;
    this.renderer.setStyle(this.spacer, "height", spacerHeight + "px");
  }
};
__name(_AnimationScrollHandler, "AnimationScrollHandler");
var AnimationScrollHandler = _AnimationScrollHandler;

// src/app/features/home/components/home-animation/animation-definition.ts
var FIRST_WAVE_METEORS = 0.05;
var SECOND_WAVE_METEORS = 0.15;
var THIRD_WAVE_METEORS = 0.25;
var TIMING_MULTIPLIER = 1.55;
var ANIM_TIMESTEP = 10;
var BANNERS_LAYER_ID = "banners";
var ADEV_BANNER = `${BANNERS_LAYER_ID} >> .adev-banner`;
var LEARN_ANGULAR_BTN = `${BANNERS_LAYER_ID} >> .learn-angular`;
var LOGO_LAYER_ID = "logo";
var LOGO = `${LOGO_LAYER_ID} >> .logo`;
var SHIELD = `${LOGO_LAYER_ID} >> .shield`;
var SHIELD_MIDDLE = `${LOGO_LAYER_ID} >> .shield-middle`;
var SHIELD_BOTTOM_A_ARC = `${LOGO_LAYER_ID} >> .shield-bottom-a-arc`;
var SHIELD_BOTTOM_EXTENSION = `${LOGO_LAYER_ID} >> .shield-bottom-extension`;
var CAPITAL_A_LETTER = `${LOGO_LAYER_ID} >> .capt-a-letter`;
var N_LETTER = `${LOGO_LAYER_ID} >> .n-letter`;
var G_LETTER = `${LOGO_LAYER_ID} >> .g-letter`;
var U_LETTER = `${LOGO_LAYER_ID} >> .u-letter`;
var L_LETTER = `${LOGO_LAYER_ID} >> .l-letter`;
var A_LETTER = `${LOGO_LAYER_ID} >> .a-letter`;
var R_LETTER = `${LOGO_LAYER_ID} >> .r-letter`;
var UWU_LAYER_ID = "uwu";
var WORKS_AT_ANY_SCALE_LAYER_ID = "works-at-any-scale";
var METEOR_FIELD_LAYER_ID = "meteor-field";
var METEOR_FIELD = `${METEOR_FIELD_LAYER_ID} >> .field`;
var METEORS = `${METEOR_FIELD_LAYER_ID} >> .meteor`;
var METEOR_ID = /* @__PURE__ */ __name((id) => `${METEOR_FIELD_LAYER_ID} >> .mt-${id}`, "METEOR_ID");
var LOVED_BY_MILLIONS_LAYER_ID = "loved-by-millions";
var BUILD_FOR_EVERYONE_LAYER_ID = "build-for-everyone";
var BUILD_FOR_EVERYONE_TITLE = `${BUILD_FOR_EVERYONE_LAYER_ID} >> .title`;
var at = /* @__PURE__ */ __name((at2) => at2 * TIMING_MULTIPLIER, "at");
var timeframe = /* @__PURE__ */ __name((from, to) => [
  from * TIMING_MULTIPLIER,
  to * TIMING_MULTIPLIER
], "timeframe");
function hideLetter(selector, startTime) {
  return {
    selector,
    timeframe: timeframe(startTime, startTime + 1),
    from: {
      opacity: "1"
    },
    to: {
      opacity: "0"
    }
  };
}
__name(hideLetter, "hideLetter");
function showMeteor(selector, startTime) {
  const randomizedStartTime = startTime + Math.random();
  return {
    selector,
    timeframe: timeframe(randomizedStartTime, randomizedStartTime + 1),
    from: {
      opacity: "0",
      transform: "translate(200%, 200%) scale(0.3)"
    },
    to: {
      opacity: "1",
      transform: "translate(0, 0) scale(1)"
    }
  };
}
__name(showMeteor, "showMeteor");
function meteorShower(startTime, size, total, inUse) {
  const animations = [];
  while (animations.length < size) {
    const id = Math.round(Math.random() * (total - 1) + 1);
    if (!inUse.has(id)) {
      animations.push(showMeteor(METEOR_ID(id), startTime));
      inUse.add(id);
    }
  }
  return animations;
}
__name(meteorShower, "meteorShower");
function generateHomeAnimationDefinition(isUwu, meteorCount) {
  const bannersLayerAnim = [
    {
      selector: ADEV_BANNER,
      timeframe: timeframe(2, 3),
      from: {
        transform: "translateY(0)"
      },
      to: {
        transform: "translateY(-200px)"
      }
    },
    {
      selector: LEARN_ANGULAR_BTN,
      timeframe: timeframe(2.5, 3.5),
      from: {
        opacity: "1"
      },
      to: {
        opacity: "0"
      }
    },
    {
      selector: LEARN_ANGULAR_BTN,
      at: at(4),
      styles: {
        visibility: "hidden"
      }
    }
  ];
  const logoLayerAnim = [
    {
      selector: LOGO,
      timeframe: timeframe(0, 5),
      from: {
        transform: "translateX(0)"
      },
      to: {
        transform: "translateX(467px)"
        // Value based on the 1280x400 SVG view box
      }
    },
    hideLetter(R_LETTER, 1),
    hideLetter(A_LETTER, 1.5),
    hideLetter(L_LETTER, 2),
    hideLetter(U_LETTER, 2.5),
    hideLetter(G_LETTER, 3),
    hideLetter(N_LETTER, 3.5),
    // Make sure that the last letter disappers at the end of layer transition,
    // i.e. 4 + 1 = 5th second end time
    hideLetter(CAPITAL_A_LETTER, 4),
    {
      selector: SHIELD_MIDDLE,
      timeframe: timeframe(5.5, 5.6),
      from: {
        transform: "scale(1)"
      },
      to: {
        transform: "scale(0)"
      }
    },
    {
      selector: SHIELD_BOTTOM_A_ARC,
      timeframe: timeframe(5.5, 5.6),
      from: {
        transform: "scaleY(1)"
      },
      to: {
        transform: "scaleY(0)"
      }
    },
    {
      selector: SHIELD_BOTTOM_EXTENSION,
      timeframe: timeframe(5.5, 5.6),
      from: {
        transform: "scale(0)"
      },
      to: {
        transform: "scale(1)"
      }
    },
    {
      selector: SHIELD,
      timeframe: timeframe(5.5, 10),
      from: {
        transform: "scale(1) rotate(0deg)"
      },
      to: {
        transform: "scale(50) rotate(-360deg)"
      }
    }
  ];
  const uwuLayerAnimation = [
    {
      selector: UWU_LAYER_ID,
      timeframe: timeframe(0, 5.5),
      from: {
        transform: "scale(1)"
      },
      to: {
        transform: "scale(0)"
      }
    },
    {
      selector: UWU_LAYER_ID,
      timeframe: timeframe(4, 5.5),
      from: {
        opacity: "1"
      },
      to: {
        opacity: "0"
      }
    }
  ];
  const waasLayerAnim = [
    {
      selector: WORKS_AT_ANY_SCALE_LAYER_ID,
      timeframe: timeframe(5.7, 8),
      // Make sure it appears after SHIELD_MIDDLE disappears.
      from: {
        transform: "scale(0.1)",
        opacity: "0"
      },
      to: {
        transform: "scale(1)",
        opacity: "1"
      }
    },
    {
      selector: WORKS_AT_ANY_SCALE_LAYER_ID,
      timeframe: timeframe(11, 12.5),
      from: {
        transform: "scale(1)",
        opacity: "1"
      },
      to: {
        transform: "scale(1.5)",
        opacity: "0"
      }
    }
  ];
  const firstWaveSize = meteorCount * FIRST_WAVE_METEORS;
  const secondWaveSize = meteorCount * SECOND_WAVE_METEORS;
  const thirdWaveSize = meteorCount * THIRD_WAVE_METEORS;
  const meteorsInUse = /* @__PURE__ */ new Set();
  const firstWave = meteorShower(8, firstWaveSize, meteorCount, meteorsInUse);
  const secondWave = meteorShower(10, secondWaveSize, meteorCount, meteorsInUse);
  const thirdWave = meteorShower(12, thirdWaveSize, meteorCount, meteorsInUse);
  const lastWaveStart = 16;
  const lastWave = [];
  for (let id = 1; id <= meteorCount; id++) {
    if (!meteorsInUse.has(id)) {
      lastWave.push(showMeteor(METEOR_ID(id), lastWaveStart));
    }
  }
  const meteorFieldLayerAnim = [
    {
      selector: METEOR_FIELD,
      at: at(7),
      styles: {
        display: "flex"
      }
    },
    {
      selector: METEOR_FIELD,
      timeframe: timeframe(8, 18),
      from: {
        transform: "scale(1.42)"
      },
      to: {
        transform: "scale(1)"
      }
    },
    ...firstWave,
    ...secondWave,
    ...thirdWave,
    ...lastWave,
    {
      selector: METEORS,
      timeframe: timeframe(19.5, 21),
      from: {
        transform: "translate(0, 0) scale(1)"
      },
      to: {
        transform: "translate(-200%, -200%) scale(0.3)"
      }
    },
    {
      selector: METEOR_FIELD,
      timeframe: timeframe(19.5, 21),
      from: {
        opacity: "1"
      },
      to: {
        opacity: "0"
      }
    },
    {
      selector: METEOR_FIELD,
      at: at(22),
      styles: {
        display: "none"
      }
    }
  ];
  const lovedByMillionsAnim = [
    {
      selector: LOVED_BY_MILLIONS_LAYER_ID,
      timeframe: timeframe(14, 15.5),
      from: {
        transform: "scale(0.75)",
        opacity: "0"
      },
      to: {
        transform: "scale(1)",
        opacity: "1"
      }
    },
    {
      selector: LOVED_BY_MILLIONS_LAYER_ID,
      timeframe: timeframe(19, 20.5),
      from: {
        transform: "scale(1)",
        opacity: "1"
      },
      to: {
        transform: "scale(1.5)",
        opacity: "0"
      }
    }
  ];
  const buildForEveryoneAnim = [
    {
      selector: BUILD_FOR_EVERYONE_LAYER_ID,
      timeframe: timeframe(22, 25),
      from: {
        transform: "scale(0.75)",
        opacity: "0"
      },
      to: {
        transform: "scale(1)",
        opacity: "1"
      }
    },
    {
      selector: BUILD_FOR_EVERYONE_TITLE,
      timeframe: timeframe(23, 25),
      from: {
        "background-position-x": "100%"
      },
      to: {
        "background-position-x": "0"
      }
    },
    {
      selector: BUILD_FOR_EVERYONE_LAYER_ID,
      timeframe: timeframe(29, 31.5),
      from: {
        opacity: "1"
      },
      to: {
        opacity: "0"
      }
    }
  ];
  return [
    ...bannersLayerAnim,
    ...!isUwu ? logoLayerAnim : uwuLayerAnimation,
    ...waasLayerAnim,
    ...meteorFieldLayerAnim,
    ...lovedByMillionsAnim,
    ...buildForEveryoneAnim
  ];
}
__name(generateHomeAnimationDefinition, "generateHomeAnimationDefinition");

// src/app/features/home/components/home-animation/home-animation.component.ts
var _c0 = /* @__PURE__ */ __name((a0, a1) => ["meteor", a0, a1], "_c0");
function HomeAnimationComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18)(2, "defs")(3, "linearGradient", 19);
    \u0275\u0275element(4, "stop", 20)(5, "stop", 21)(6, "stop", 22)(7, "stop", 23)(8, "animateTransform", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "g", 25)(10, "g", 26)(11, "g", 27);
    \u0275\u0275element(12, "path", 28)(13, "path", 29)(14, "path", 30)(15, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "path", 32)(17, "path", 33)(18, "path", 34)(19, "path", 35)(20, "rect", 36)(21, "path", 37)(22, "path", 38);
    \u0275\u0275elementEnd()()()();
  }
}
__name(HomeAnimationComponent_Conditional_18_Template, "HomeAnimationComponent_Conditional_18_Template");
function HomeAnimationComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementEnd();
  }
}
__name(HomeAnimationComponent_Conditional_19_Template, "HomeAnimationComponent_Conditional_19_Template");
function HomeAnimationComponent_Conditional_25_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275classMap(\u0275\u0275pureFunction2(2, _c0, "type-" + type_r1, "mt-" + ($index_r2 + 1)));
  }
}
__name(HomeAnimationComponent_Conditional_25_For_3_Template, "HomeAnimationComponent_Conditional_25_For_3_Template");
function HomeAnimationComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 40);
    \u0275\u0275repeaterCreate(2, HomeAnimationComponent_Conditional_25_For_3_Template, 1, 5, "div", 41, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const meteorFieldData_r3 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", meteorFieldData_r3.width + "px")("height", meteorFieldData_r3.height + "px")("margin-left", meteorFieldData_r3.marginLeft + "px")("margin-top", meteorFieldData_r3.marginTop + "px");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.meteors());
  }
}
__name(HomeAnimationComponent_Conditional_25_Template, "HomeAnimationComponent_Conditional_25_Template");
var METEOR_HW_RATIO = 1.42;
var METEOR_GAP_RATIO = 1.33;
var METEOR_WIDTH_MAP = [
  [800, 60],
  [1100, 90]
];
var METEOR_WIDTH_DEFAULT = 120;
var _HomeAnimationComponent = class _HomeAnimationComponent {
  win = inject(WINDOW);
  animCreator = inject(AnimationCreatorService);
  injector = inject(Injector);
  elementRef = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  animationLayers = viewChildren(AnimationLayerDirective, ...ngDevMode ? [{ debugName: "animationLayers" }] : []);
  ctaLink = isIos ? "overview" : "tutorials/learn-angular";
  isUwu = input.required(...ngDevMode ? [{ debugName: "isUwu" }] : []);
  ready = output();
  reducedMotion = signal(shouldReduceMotion(), ...ngDevMode ? [{ debugName: "reducedMotion" }] : []);
  meteorFieldData = signal(null, ...ngDevMode ? [{ debugName: "meteorFieldData" }] : []);
  meteors = signal([], ...ngDevMode ? [{ debugName: "meteors" }] : []);
  constructor() {
    if (!this.reducedMotion()) {
      this.initAnimation();
    } else {
      this.ready.emit(true);
    }
  }
  initAnimation() {
    const meteorDimensions = this.calculateMeteorDimensions();
    const data = this.calculateMeteorFieldData(meteorDimensions);
    this.setCssVariables(meteorDimensions);
    this.meteorFieldData.set(data);
    this.meteors.set(new Array(data.count).fill(1).map(() => Math.round(Math.random() * 2 + 1)));
    afterNextRender({
      read: /* @__PURE__ */ __name(() => {
        const animation = this.animCreator.createAnimation(this.animationLayers(), { timestep: ANIM_TIMESTEP }).define(generateHomeAnimationDefinition(this.isUwu(), this.meteors().length)).addPlugin(new AnimationScrollHandler(this.elementRef, this.injector));
        this.ready.emit(true);
        this.destroyRef.onDestroy(() => animation.dispose());
      }, "read")
    });
  }
  /** Calculte the dimensions and sizes of a meteor – width, height, tail, tilt angle, etc. */
  calculateMeteorDimensions() {
    let width = METEOR_WIDTH_DEFAULT;
    for (const [screenSize, meteorWidth] of METEOR_WIDTH_MAP) {
      if (this.win.innerWidth <= screenSize) {
        width = meteorWidth;
      }
    }
    const height = width * METEOR_HW_RATIO;
    const gap = width * METEOR_GAP_RATIO;
    const tailLength = Math.sqrt(width * width + height * height);
    const tiltAngle = -Math.asin(width / tailLength);
    return {
      width,
      height,
      gap,
      tailLength,
      tiltAngle
    };
  }
  /** Calculate the number of meteors and size of the field. */
  calculateMeteorFieldData(meteorDim) {
    const mW = meteorDim.width + meteorDim.gap;
    const mH = meteorDim.height + meteorDim.gap;
    let rows = 1;
    let cols = 1;
    while (cols * mW - meteorDim.gap <= this.win.innerWidth) {
      cols++;
    }
    while (rows * mH - meteorDim.gap <= this.win.innerHeight) {
      rows++;
    }
    const width = cols * mW - meteorDim.gap;
    const height = rows * mH - meteorDim.gap;
    return {
      count: rows * cols,
      width,
      height,
      marginLeft: -(width - this.win.innerWidth) / 2,
      marginTop: -(height - this.win.innerHeight) / 2
    };
  }
  setCssVariables({ width, height, tailLength, tiltAngle, gap }) {
    const styleRef = this.elementRef.nativeElement.style;
    styleRef.setProperty("--meteor-width", width + "px");
    styleRef.setProperty("--meteor-height", height + "px");
    styleRef.setProperty("--meteor-tail-length", tailLength + "px");
    styleRef.setProperty("--meteor-tilt-angle", tiltAngle + "rad");
    styleRef.setProperty("--meteor-gap", gap + "px");
  }
};
__name(_HomeAnimationComponent, "HomeAnimationComponent");
__publicField(_HomeAnimationComponent, "\u0275fac", /* @__PURE__ */ __name(function HomeAnimationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeAnimationComponent)();
}, "HomeAnimationComponent_Factory"));
__publicField(_HomeAnimationComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeAnimationComponent, selectors: [["adev-home-animation"]], viewQuery: /* @__PURE__ */ __name(function HomeAnimationComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.animationLayers, AnimationLayerDirective, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, "HomeAnimationComponent_Query"), inputs: { isUwu: [1, "isUwu"] }, outputs: { ready: "ready" }, decls: 36, vars: 6, consts: [[1, "animation"], ["adevAnimationLayer", "", "layerId", "banners", 1, "banners-layer", "layer"], [1, "adev-banner-container"], ["href", "https://blog.angular.dev/announcing-angular-v20-b5c9c06cf301", "target", "_blank", 1, "adev-banner"], ["tabindex", "-1"], [1, "adev-banner-cta"], ["href", "https://goo.gle/angular-ai-update", "target", "_blank", 1, "adev-banner"], [1, "learn-angular"], [1, "adev-cta", 3, "routerLink"], ["aria-label", "\u5B66\u4E60 Angular", 1, "docs-primary-btn"], [1, "adev-arrow"], ["adevAnimationLayer", "", "layerId", "logo", 1, "logo-layer", "layer"], ["adevAnimationLayer", "", "layerId", "uwu", 1, "uwu-layer", "layer"], ["adevAnimationLayer", "", "layerId", "works-at-any-scale", 1, "works-at-any-scale-layer", "layer"], ["adevAnimationLayer", "", "layerId", "meteor-field", 1, "meteor-field-layer", "layer"], ["adevAnimationLayer", "", "layerId", "loved-by-millions", 1, "loved-by-millions-layer", "layer"], ["adevAnimationLayer", "", "layerId", "build-for-everyone", 1, "build-for-everyone-layer", "layer"], [1, "title"], ["viewBox", "0 0 1280 400", "xmlns", "http://www.w3.org/2000/svg", 1, "svg"], ["id", "gradient", "gradientUnits", "userSpaceOnUse", "gradientTransform", "rotate(0 640 125)"], ["offset", "0", "stop-color", "#ed0100"], ["offset", "0.25", "stop-color", "#e449b4"], ["offset", "0.5", "stop-color", "#ae3bfc"], ["offset", "1", "stop-color", "#7f15fd"], ["attributeName", "gradientTransform", "type", "rotate", "from", "0 640 125", "to", "360 640 125", "dur", "6.5s", "repeatCount", "indefinite"], ["fill", "url(#gradient)", 1, "wrapper"], [1, "logo"], [1, "shield"], ["d", "M311.8,101.7L302,255.6L208.3,53.8L311.8,101.7ZM246.9,300.7L176.1,341.1L105.3,300.7L246.9,300.7ZM50.1,255.6L40.4,101.7L143.9,53.8L50.1,255.6Z", 1, "shield-base"], ["d", "M176.1,130.4L213.2,220.6L139,220.6L176.1,130.4Z", 1, "shield-middle"], ["d", "M106.419,301.339L105.3,300.7L119.7,265.8L232.5,265.8L246.9,300.7L245.781,301.339L106.419,301.339Z", 1, "shield-bottom-a-arc"], ["d", "M245.78,301.339L106.42,301.339L68.889,279.923L283.311,279.923L245.78,301.339Z", 1, "shield-bottom-extension"], ["d", "M515.4,288L553.1,288L484.4,92.7L440.7,92.7L372,288L409.7,288L425.8,239.9L499.2,239.9L515.4,288ZM435.4,211.4L461.8,132.8L463.3,132.8L489.7,211.4L435.4,211.4Z", 1, "capt-a-letter", "letter"], ["d", "M590.4,202.2L590.4,288L555.9,288L555.9,141.6L588.9,141.6L588.9,166.5L590.6,166.5C594,158.3 599.4,151.8 606.8,147C614.2,142.2 623.4,139.8 634.3,139.8C644.4,139.8 653.2,142 660.8,146.3C668.3,150.6 674.2,156.9 678.3,165.1C682.5,173.3 684.5,183.2 684.4,194.9L684.4,288L649.9,288L649.9,200.1C649.9,190.3 647.4,182.7 642.3,177.1C637.2,171.6 630.3,168.8 621.4,168.8C615.4,168.8 610,170.1 605.3,172.8C600.6,175.4 597,179.2 594.3,184.2C591.8,189.1 590.4,195.1 590.4,202.2Z", 1, "n-letter", "letter"], ["d", "M760.5,345.9C748.1,345.9 737.5,344.2 728.6,340.9C719.7,337.6 712.6,333.1 707.2,327.5C701.8,321.9 698,315.7 696,308.9L727.1,301.4C728.5,304.3 730.5,307.1 733.2,309.9C735.9,312.7 739.5,315.1 744,317C748.5,318.9 754.3,319.8 761.2,319.8C771,319.8 779.1,317.4 785.5,312.7C791.9,308 795.1,300.2 795.1,289.4L795.1,261.7L793.4,261.7C791.6,265.3 789,268.9 785.6,272.7C782.2,276.5 777.7,279.6 772.2,282.1C766.6,284.6 759.7,285.9 751.3,285.9C740.1,285.9 729.9,283.2 720.7,277.9C711.6,272.6 704.3,264.6 699,254.1C693.6,243.5 690.9,230.3 690.9,214.3C690.9,198.2 693.6,184.6 699,173.5C704.4,162.4 711.6,154 720.8,148.2C730,142.4 740.2,139.6 751.4,139.6C760,139.6 767.1,141 772.6,143.9C778.2,146.8 782.6,150.3 785.9,154.3C789.2,158.3 791.7,162.1 793.4,165.7L795.3,165.7L795.3,141.5L829.3,141.5L829.3,290.3C829.3,302.8 826.3,313.2 820.3,321.4C814.3,329.6 806.2,335.7 795.8,339.8C785.4,343.9 773.6,345.9 760.5,345.9ZM760.8,258.8C768.1,258.8 774.3,257 779.5,253.5C784.6,249.9 788.6,244.8 791.2,238.2C793.9,231.5 795.2,223.5 795.2,214.2C795.2,205 793.9,196.9 791.2,190C788.6,183.1 784.7,177.7 779.6,173.8C774.5,170 768.2,168 760.8,168C753.1,168 746.7,170 741.5,174C736.4,178 732.5,183.5 729.9,190.4C727.3,197.4 726,205.3 726,214.1C726,223.1 727.3,230.9 730,237.6C732.6,244.3 736.5,249.5 741.7,253.2C746.8,256.9 753.2,258.8 760.8,258.8Z", 1, "g-letter", "letter"], ["d", "M933.8,226.4L933.8,141.6L968.3,141.6L968.3,288L934.8,288L934.8,262L933.3,262C930,270.2 924.6,276.9 917,282.1C909.5,287.3 900.2,289.9 889.2,289.9C879.6,289.9 871.1,287.8 863.8,283.5C856.5,279.2 850.7,273 846.6,264.7C842.5,256.5 840.4,246.5 840.4,234.8L840.4,141.6L875,141.6L875,229.5C875,238.8 877.5,246.2 882.6,251.6C887.7,257.1 894.4,259.8 902.6,259.8C907.7,259.8 912.6,258.6 917.4,256.1C922.2,253.6 926.1,249.9 929.2,245C932.3,240 933.8,233.8 933.8,226.4Z", 1, "u-letter", "letter"], ["x", "979.6", "y", "92.7", "width", "34.5", "height", "195.3", 1, "l-letter", "letter"], ["d", "M1068.9,290.9C1059.6,290.9 1051.3,289.2 1043.9,285.9C1036.5,282.6 1030.6,277.6 1026.4,271.1C1022.1,264.6 1020,256.5 1020,246.9C1020,238.6 1021.5,231.8 1024.6,226.4C1027.7,221 1031.8,216.7 1037.1,213.4C1042.4,210.2 1048.3,207.7 1055,206C1061.6,204.3 1068.5,203.1 1075.6,202.3C1084.2,201.4 1091.1,200.6 1096.5,199.9C1101.8,199.2 1105.7,198 1108.2,196.5C1110.6,194.9 1111.9,192.5 1111.9,189.2L1111.9,188.6C1111.9,181.4 1109.8,175.9 1105.5,171.9C1101.2,168 1095.1,166 1087.1,166C1078.6,166 1072,167.8 1067,171.5C1062.1,175.2 1058.8,179.5 1057,184.6L1024.8,180C1027.3,171.1 1031.5,163.7 1037.4,157.6C1043.2,151.6 1050.4,147.1 1058.8,144.1C1067.3,141.1 1076.6,139.6 1086.8,139.6C1093.9,139.6 1100.9,140.4 1107.9,142.1C1114.9,143.8 1121.3,146.5 1127.1,150.3C1132.9,154.1 1137.5,159.2 1141.1,165.7C1144.6,172.2 1146.4,180.3 1146.4,190L1146.4,288L1113.2,288L1113.2,267.9L1112.1,267.9C1110,272 1107.1,275.8 1103.3,279.3C1099.5,282.8 1094.8,285.7 1089.1,287.8C1083.2,289.9 1076.6,290.9 1068.9,290.9ZM1077.9,265.6C1084.8,265.6 1090.8,264.2 1095.9,261.5C1101,258.7 1104.9,255.1 1107.7,250.5C1110.5,245.9 1111.8,240.9 1111.8,235.5L1111.8,218.2C1110.7,219.1 1108.9,219.9 1106.3,220.7C1103.7,221.5 1100.9,222.1 1097.7,222.7C1094.5,223.3 1091.4,223.8 1088.3,224.2C1085.2,224.6 1082.5,225 1080.2,225.3C1075.1,226 1070.4,227.1 1066.4,228.7C1062.3,230.3 1059.1,232.5 1056.8,235.3C1054.4,238.1 1053.3,241.8 1053.3,246.2C1053.3,252.6 1055.6,257.4 1060.3,260.6C1064.8,264 1070.7,265.6 1077.9,265.6Z", 1, "a-letter", "letter"], ["d", "M1156.9,288L1156.9,141.6L1190.4,141.6L1190.4,166L1191.9,166C1194.6,157.5 1199.2,151 1205.7,146.4C1212.2,141.8 1219.7,139.5 1228.1,139.5C1230,139.5 1232.2,139.6 1234.5,139.7C1236.9,139.9 1238.9,140.1 1240.5,140.4L1240.5,172.1C1239,171.6 1236.7,171.1 1233.6,170.7C1230.5,170.3 1227.4,170.1 1224.5,170.1C1218.2,170.1 1212.6,171.5 1207.6,174.2C1202.6,176.9 1198.7,180.6 1195.8,185.4C1192.9,190.2 1191.5,195.7 1191.5,201.9L1191.5,288L1156.9,288Z", 1, "r-letter", "letter"], ["src", "assets/images/uwu.png", "alt", "Angular logo"], [1, "field"], [3, "class"]], template: /* @__PURE__ */ __name(function HomeAnimationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "h1", 4);
    \u0275\u0275text(5, "\u53C2\u52A0 Angular AI \u5F00\u53D1\u8005\u6D3B\u52A8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "2025\u5E749\u670817\u65E5 0\u70B9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 6)(9, "h1", 4);
    \u0275\u0275text(10, "\u5DF2\u53EF\u7528\uFF1A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 5);
    \u0275\u0275text(12, "AI \u4E0E Angular \u7684\u63D0\u793A\u8BCD\u548C\u6700\u4F73\u5B9E\u8DF5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 7)(14, "a", 8)(15, "button", 9);
    \u0275\u0275text(16, " \u5B66\u4E60 Angular ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, HomeAnimationComponent_Conditional_18_Template, 23, 0, "div", 11)(19, HomeAnimationComponent_Conditional_19_Template, 2, 0, "div", 12);
    \u0275\u0275elementStart(20, "div", 13)(21, "h2");
    \u0275\u0275text(22, "\u9002\u7528\u4E8E\u4EFB\u4F55\u89C4\u6A21");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, " Angular \u8BA9\u4F60\u4ECE\u5C0F\u89C4\u6A21\u5F00\u59CB\uFF0C\u4E8E\u5766\u9014\u4E4B\u4E0A\u6210\u957F\uFF0C\u5E76\u968F\u7740\u4F60\u7684\u56E2\u961F\u548C\u5E94\u7528\u7A0B\u5E8F\u7684\u53D1\u5C55\u800C\u63D0\u4F9B\u652F\u6301\u3002 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, HomeAnimationComponent_Conditional_25_Template, 4, 8, "div", 14);
    \u0275\u0275elementStart(26, "div", 15)(27, "h2");
    \u0275\u0275text(28, "\u6DF1\u53D7\u6570\u767E\u4E07\u5F00\u53D1\u8005\u559C\u7231");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, " \u52A0\u5165\u5168\u7403\u6570\u767E\u4E07\u4F7F\u7528 Angular \u6784\u5EFA\u5E94\u7528\u7684\u5F00\u53D1\u8005\uFF0C\u6210\u4E3A\u8FD9\u4E2A\u5145\u6EE1\u6D3B\u529B\u548C\u53CB\u597D\u7684\u793E\u533A\u7684\u4E00\u5458\u3002 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 16)(32, "h2", 17);
    \u0275\u0275text(33, "\u4E3A\u6240\u6709\u4EBA\u6784\u5EFA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, " \u4F9D\u9760 Angular \u5185\u7F6E\u7684\u6C34\u5408\u3001\u56FD\u9645\u5316\u3001\u5B89\u5168\u6027\u548C\u65E0\u969C\u788D\u6027\u652F\u6301\uFF0C\u4E3A\u5168\u7403\u6240\u6709\u4EBA\u6784\u5EFA\u5E94\u7528\u3002 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275classProp("reduced-motion", ctx.reducedMotion());
    \u0275\u0275advance(14);
    \u0275\u0275property("routerLink", ctx.ctaLink);
    \u0275\u0275advance();
    \u0275\u0275attribute("text", "\u5B66\u4E60 Angular");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.isUwu() ? 18 : 19);
    \u0275\u0275advance(7);
    \u0275\u0275conditional((tmp_4_0 = ctx.meteorFieldData()) ? 25 : -1, tmp_4_0);
  }
}, "HomeAnimationComponent_Template"), dependencies: [AnimationLayerDirective, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 4vw;\n  font-weight: 600;\n  white-space: nowrap;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n  z-index: 1;\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--quaternary-contrast);\n  font-size: clamp(1rem, 1vw, 2rem);\n  line-height: 1.5;\n  width: clamp(345px, 50%, 600px);\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: var(--page-background);\n  box-shadow: 0 0 20px 20px var(--page-background);\n}\n@media (max-width: 1200px) {\n  [_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   [_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    box-shadow: 0 0 10px 10px var(--page-background);\n  }\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  position: absolute;\n  transition:\n    background 0.3s ease,\n    border 0.3s ease,\n    transform 200ms linear;\n  top: var(--layout-padding);\n  left: calc(var(--layout-padding) + var(--primary-nav-width));\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner-container[_ngcontent-%COMP%] {\n    top: 6rem;\n    left: var(--layout-padding);\n    max-width: calc(100% - var(--layout-padding) * 2);\n  }\n}\n@media (max-width: 700px) {\n  [_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner-container[_ngcontent-%COMP%] {\n    top: 5rem;\n  }\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  border: 1px solid var(--senary-contrast);\n  background: var(--page-background);\n  border-radius: 0.25rem;\n  padding: 10px;\n  max-width: 100%;\n  width: fit-content;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline;\n  font-size: 0.875rem;\n  margin: 0;\n  background-image: var(--red-to-pink-to-purple-horizontal-gradient);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  width: fit-content;\n  font-weight: 500;\n  box-shadow: none;\n  position: relative;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%]   h1.adev-banner-cta[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%]   p.adev-banner-cta[_ngcontent-%COMP%] {\n  color: var(--tertiary-contrast);\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%]   h1.adev-banner-cta[_ngcontent-%COMP%]::after, \n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%]   p.adev-banner-cta[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 1px;\n  bottom: -2px;\n  left: 0;\n  background: var(--red-to-pink-to-purple-horizontal-gradient);\n  transform-origin: bottom right;\n  transition: transform 0.3s ease;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%]:hover   .adev-banner-cta[_ngcontent-%COMP%]::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .learn-angular[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  transform: translateX(-50%);\n  transition: opacity 200ms linear;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 50px;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .learn-angular[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 1rem 1.75rem;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .learn-angular[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .learn-angular[_ngcontent-%COMP%]   .adev-arrow[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  border: solid var(--primary-contrast);\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 7px;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  fill-rule: evenodd;\n  clip-rule: evenodd;\n  stroke-linejoin: round;\n  stroke-miterlimit: 2;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  transform: scale(0.55);\n  transform-origin: 50% 50%;\n}\n@media (max-width: 775px) {\n  [_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    transform: scale(0.8);\n  }\n}\n@media (min-width: 1800.01px) {\n  [_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    transform: scale(0.5);\n  }\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  transition: transform 200ms linear;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%] {\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%]   .shield-middle[_ngcontent-%COMP%] {\n  transform-origin: 177px 200px;\n  transition: transform 200ms linear;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%]   .shield-bottom-a-arc[_ngcontent-%COMP%] {\n  transform-origin: 0 302px;\n  transition: transform 200ms linear;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%]   .shield-bottom-extension[_ngcontent-%COMP%] {\n  transform-origin: 177px 340px;\n  transition: transform 200ms linear;\n  transform: scale(0);\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%] {\n  transition: opacity 200ms linear;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .uwu-layer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 200ms linear, opacity 200ms linear;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .uwu-layer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  width: max(700 * min(100vw, 2560px) / 1470, 350px);\n  height: auto;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .works-at-any-scale-layer[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .loved-by-millions-layer[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .build-for-everyone-layer[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  opacity: 0;\n  z-index: 1;\n  transition: transform 200ms linear, opacity 200ms linear;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .works-at-any-scale-layer[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .loved-by-millions-layer[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .build-for-everyone-layer[_ngcontent-%COMP%] {\n  transform: scale(0.75);\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .build-for-everyone-layer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: transparent;\n  display: inline-block;\n  background:\n    linear-gradient(\n      110deg,\n      #f31a5b 0,\n      #8737e9 50%,\n      #3a373f 0%);\n  background-size: 205% 100%;\n  -webkit-background-clip: text;\n  background-clip: text;\n  background-size: 205% 100%;\n  background-position-x: 100%;\n  transition: background-position-x 200ms linear;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .meteor-field-layer[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .meteor-field-layer[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  --math-pi: 3.1415926536rad;\n  position: absolute;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  gap: var(--meteor-gap);\n  display: none;\n  transform: scale(1.42);\n  top: 0;\n  left: 0;\n  transform-origin: 50% 50%;\n  transition: opacity 200ms linear, transform 200ms linear;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .meteor-field-layer[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .meteor[_ngcontent-%COMP%] {\n  position: relative;\n  width: var(--meteor-width);\n  height: var(--meteor-height);\n  opacity: 0;\n  transform: translate(200%, 200%) scale(0.3);\n  transition: opacity 200ms linear, transform 200ms linear;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .meteor-field-layer[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .meteor[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 4px;\n  height: var(--meteor-tail-length);\n  border-radius: 2px;\n  transform-origin: top center;\n  transform: rotate(var(--meteor-tilt-angle));\n  top: 0;\n  left: 0;\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .meteor-field-layer[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .meteor.type-1[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      calc(var(--math-pi) + var(--meteor-tilt-angle)),\n      rgb(228, 49, 85) 0,\n      rgb(219, 64, 219) 66%,\n      transparent 100%);\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .meteor-field-layer[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .meteor.type-2[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      calc(var(--math-pi) + var(--meteor-tilt-angle)),\n      rgb(152, 56, 226) 0,\n      rgb(217, 18, 167) 66%,\n      transparent 100%);\n}\n[_nghost-%COMP%]   .animation[_ngcontent-%COMP%]   .meteor-field-layer[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .meteor.type-3[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      calc(var(--math-pi) + var(--meteor-tilt-angle)),\n      rgb(214, 53, 150) 0,\n      rgb(229, 91, 229) 66%,\n      transparent 100%);\n}\n[_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n@media (max-width: 700px) {\n  [_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%] {\n    top: 6rem;\n  }\n}\n@media (min-width: 900.01px) {\n  [_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%]   .banners-layer[_ngcontent-%COMP%]   .adev-banner[_ngcontent-%COMP%] {\n    left: var(--layout-padding);\n  }\n}\n[_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%]   .logo-layer[_ngcontent-%COMP%] {\n    margin-top: -75px;\n  }\n}\n[_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%]   .works-at-any-scale-layer[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%]   .loved-by-millions-layer[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%]   .build-for-everyone-layer[_ngcontent-%COMP%] {\n  position: relative;\n  height: 120vh;\n  opacity: 1;\n  transform: scale(1);\n}\n[_nghost-%COMP%]   .animation.reduced-motion[_ngcontent-%COMP%]   .build-for-everyone-layer[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  background-position-x: 0;\n}\n/*# sourceMappingURL=home-animation.component.css.map */'], changeDetection: 0 }));
var HomeAnimationComponent = _HomeAnimationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeAnimationComponent, [{
    type: Component,
    args: [{ selector: "adev-home-animation", imports: [AnimationLayerDirective, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="animation" [class.reduced-motion]="reducedMotion()">
  <!-- Banners and buttons  -->
  <div adevAnimationLayer layerId="banners" class="banners-layer layer">
    <div class="adev-banner-container">
      <a
        href="https://blog.angular.dev/announcing-angular-v20-b5c9c06cf301"
        class="adev-banner"
        target="_blank"
      >
        <h1 tabindex="-1">\u53C2\u52A0 Angular AI \u5F00\u53D1\u8005\u6D3B\u52A8</h1>
        <p class="adev-banner-cta">2025\u5E749\u670817\u65E5 0\u70B9</p>
      </a>
      <a
        href="https://goo.gle/angular-ai-update"
        class="adev-banner"
        target="_blank"
      >
        <h1 tabindex="-1">\u5DF2\u53EF\u7528\uFF1A</h1>
        <p class="adev-banner-cta">AI \u4E0E Angular \u7684\u63D0\u793A\u8BCD\u548C\u6700\u4F73\u5B9E\u8DF5</p>
      </a>
    </div>
    <div class="learn-angular">
      <a [routerLink]="ctaLink" class="adev-cta">
        <button class="docs-primary-btn" [attr.text]="'\u5B66\u4E60 Angular'" aria-label="\u5B66\u4E60 Angular">
          \u5B66\u4E60 Angular
        </button>
      </a>
      <div class="adev-arrow"></div>
    </div>
  </div>

  @if (!isUwu()) {
    <!-- Angular logo -->
    <div adevAnimationLayer layerId="logo" class="logo-layer layer">
      <svg class="svg" viewBox="0 0 1280 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Do not remove \`gradientTransform\` attribute. Safari needs it in order to start the animation. -->
          <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(0 640 125)"
          >
            <stop offset="0" stop-color="#ed0100" />
            <stop offset="0.25" stop-color="#e449b4" />
            <stop offset="0.5" stop-color="#ae3bfc" />
            <stop offset="1" stop-color="#7f15fd" />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 640 125"
              to="360 640 125"
              dur="6.5s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <g class="wrapper" fill="url(#gradient)">
          <g class="logo">
            <g class="shield">
              <path
                class="shield-base"
                d="M311.8,101.7L302,255.6L208.3,53.8L311.8,101.7ZM246.9,300.7L176.1,341.1L105.3,300.7L246.9,300.7ZM50.1,255.6L40.4,101.7L143.9,53.8L50.1,255.6Z"
              />
              <path class="shield-middle" d="M176.1,130.4L213.2,220.6L139,220.6L176.1,130.4Z" />
              <path
                class="shield-bottom-a-arc"
                d="M106.419,301.339L105.3,300.7L119.7,265.8L232.5,265.8L246.9,300.7L245.781,301.339L106.419,301.339Z"
              />
              <path
                class="shield-bottom-extension"
                d="M245.78,301.339L106.42,301.339L68.889,279.923L283.311,279.923L245.78,301.339Z"
              />
            </g>
            <path
              class="capt-a-letter letter"
              d="M515.4,288L553.1,288L484.4,92.7L440.7,92.7L372,288L409.7,288L425.8,239.9L499.2,239.9L515.4,288ZM435.4,211.4L461.8,132.8L463.3,132.8L489.7,211.4L435.4,211.4Z"
            />
            <path
              class="n-letter letter"
              d="M590.4,202.2L590.4,288L555.9,288L555.9,141.6L588.9,141.6L588.9,166.5L590.6,166.5C594,158.3 599.4,151.8 606.8,147C614.2,142.2 623.4,139.8 634.3,139.8C644.4,139.8 653.2,142 660.8,146.3C668.3,150.6 674.2,156.9 678.3,165.1C682.5,173.3 684.5,183.2 684.4,194.9L684.4,288L649.9,288L649.9,200.1C649.9,190.3 647.4,182.7 642.3,177.1C637.2,171.6 630.3,168.8 621.4,168.8C615.4,168.8 610,170.1 605.3,172.8C600.6,175.4 597,179.2 594.3,184.2C591.8,189.1 590.4,195.1 590.4,202.2Z"
            />
            <path
              class="g-letter letter"
              d="M760.5,345.9C748.1,345.9 737.5,344.2 728.6,340.9C719.7,337.6 712.6,333.1 707.2,327.5C701.8,321.9 698,315.7 696,308.9L727.1,301.4C728.5,304.3 730.5,307.1 733.2,309.9C735.9,312.7 739.5,315.1 744,317C748.5,318.9 754.3,319.8 761.2,319.8C771,319.8 779.1,317.4 785.5,312.7C791.9,308 795.1,300.2 795.1,289.4L795.1,261.7L793.4,261.7C791.6,265.3 789,268.9 785.6,272.7C782.2,276.5 777.7,279.6 772.2,282.1C766.6,284.6 759.7,285.9 751.3,285.9C740.1,285.9 729.9,283.2 720.7,277.9C711.6,272.6 704.3,264.6 699,254.1C693.6,243.5 690.9,230.3 690.9,214.3C690.9,198.2 693.6,184.6 699,173.5C704.4,162.4 711.6,154 720.8,148.2C730,142.4 740.2,139.6 751.4,139.6C760,139.6 767.1,141 772.6,143.9C778.2,146.8 782.6,150.3 785.9,154.3C789.2,158.3 791.7,162.1 793.4,165.7L795.3,165.7L795.3,141.5L829.3,141.5L829.3,290.3C829.3,302.8 826.3,313.2 820.3,321.4C814.3,329.6 806.2,335.7 795.8,339.8C785.4,343.9 773.6,345.9 760.5,345.9ZM760.8,258.8C768.1,258.8 774.3,257 779.5,253.5C784.6,249.9 788.6,244.8 791.2,238.2C793.9,231.5 795.2,223.5 795.2,214.2C795.2,205 793.9,196.9 791.2,190C788.6,183.1 784.7,177.7 779.6,173.8C774.5,170 768.2,168 760.8,168C753.1,168 746.7,170 741.5,174C736.4,178 732.5,183.5 729.9,190.4C727.3,197.4 726,205.3 726,214.1C726,223.1 727.3,230.9 730,237.6C732.6,244.3 736.5,249.5 741.7,253.2C746.8,256.9 753.2,258.8 760.8,258.8Z"
            />
            <path
              class="u-letter letter"
              d="M933.8,226.4L933.8,141.6L968.3,141.6L968.3,288L934.8,288L934.8,262L933.3,262C930,270.2 924.6,276.9 917,282.1C909.5,287.3 900.2,289.9 889.2,289.9C879.6,289.9 871.1,287.8 863.8,283.5C856.5,279.2 850.7,273 846.6,264.7C842.5,256.5 840.4,246.5 840.4,234.8L840.4,141.6L875,141.6L875,229.5C875,238.8 877.5,246.2 882.6,251.6C887.7,257.1 894.4,259.8 902.6,259.8C907.7,259.8 912.6,258.6 917.4,256.1C922.2,253.6 926.1,249.9 929.2,245C932.3,240 933.8,233.8 933.8,226.4Z"
            />
            <rect class="l-letter letter" x="979.6" y="92.7" width="34.5" height="195.3" />
            <path
              class="a-letter letter"
              d="M1068.9,290.9C1059.6,290.9 1051.3,289.2 1043.9,285.9C1036.5,282.6 1030.6,277.6 1026.4,271.1C1022.1,264.6 1020,256.5 1020,246.9C1020,238.6 1021.5,231.8 1024.6,226.4C1027.7,221 1031.8,216.7 1037.1,213.4C1042.4,210.2 1048.3,207.7 1055,206C1061.6,204.3 1068.5,203.1 1075.6,202.3C1084.2,201.4 1091.1,200.6 1096.5,199.9C1101.8,199.2 1105.7,198 1108.2,196.5C1110.6,194.9 1111.9,192.5 1111.9,189.2L1111.9,188.6C1111.9,181.4 1109.8,175.9 1105.5,171.9C1101.2,168 1095.1,166 1087.1,166C1078.6,166 1072,167.8 1067,171.5C1062.1,175.2 1058.8,179.5 1057,184.6L1024.8,180C1027.3,171.1 1031.5,163.7 1037.4,157.6C1043.2,151.6 1050.4,147.1 1058.8,144.1C1067.3,141.1 1076.6,139.6 1086.8,139.6C1093.9,139.6 1100.9,140.4 1107.9,142.1C1114.9,143.8 1121.3,146.5 1127.1,150.3C1132.9,154.1 1137.5,159.2 1141.1,165.7C1144.6,172.2 1146.4,180.3 1146.4,190L1146.4,288L1113.2,288L1113.2,267.9L1112.1,267.9C1110,272 1107.1,275.8 1103.3,279.3C1099.5,282.8 1094.8,285.7 1089.1,287.8C1083.2,289.9 1076.6,290.9 1068.9,290.9ZM1077.9,265.6C1084.8,265.6 1090.8,264.2 1095.9,261.5C1101,258.7 1104.9,255.1 1107.7,250.5C1110.5,245.9 1111.8,240.9 1111.8,235.5L1111.8,218.2C1110.7,219.1 1108.9,219.9 1106.3,220.7C1103.7,221.5 1100.9,222.1 1097.7,222.7C1094.5,223.3 1091.4,223.8 1088.3,224.2C1085.2,224.6 1082.5,225 1080.2,225.3C1075.1,226 1070.4,227.1 1066.4,228.7C1062.3,230.3 1059.1,232.5 1056.8,235.3C1054.4,238.1 1053.3,241.8 1053.3,246.2C1053.3,252.6 1055.6,257.4 1060.3,260.6C1064.8,264 1070.7,265.6 1077.9,265.6Z"
            />
            <path
              class="r-letter letter"
              d="M1156.9,288L1156.9,141.6L1190.4,141.6L1190.4,166L1191.9,166C1194.6,157.5 1199.2,151 1205.7,146.4C1212.2,141.8 1219.7,139.5 1228.1,139.5C1230,139.5 1232.2,139.6 1234.5,139.7C1236.9,139.9 1238.9,140.1 1240.5,140.4L1240.5,172.1C1239,171.6 1236.7,171.1 1233.6,170.7C1230.5,170.3 1227.4,170.1 1224.5,170.1C1218.2,170.1 1212.6,171.5 1207.6,174.2C1202.6,176.9 1198.7,180.6 1195.8,185.4C1192.9,190.2 1191.5,195.7 1191.5,201.9L1191.5,288L1156.9,288Z"
            />
          </g>
        </g>
      </svg>
    </div>
  } @else {
    <!-- UwU logo -->
    <div adevAnimationLayer layerId="uwu" class="uwu-layer layer">
      <img src="assets/images/uwu.png" alt="Angular logo" />
    </div>
  }

  <!-- Works at any scale -->
  <div adevAnimationLayer layerId="works-at-any-scale" class="works-at-any-scale-layer layer">
    <h2>\u9002\u7528\u4E8E\u4EFB\u4F55\u89C4\u6A21</h2>
    <p>
      Angular \u8BA9\u4F60\u4ECE\u5C0F\u89C4\u6A21\u5F00\u59CB\uFF0C\u4E8E\u5766\u9014\u4E4B\u4E0A\u6210\u957F\uFF0C\u5E76\u968F\u7740\u4F60\u7684\u56E2\u961F\u548C\u5E94\u7528\u7A0B\u5E8F\u7684\u53D1\u5C55\u800C\u63D0\u4F9B\u652F\u6301\u3002
    </p>
  </div>

  <!-- Meteor field -->
  @if (meteorFieldData(); as meteorFieldData) {
    <div adevAnimationLayer layerId="meteor-field" class="meteor-field-layer layer">
      <div
        class="field"
        [style.width]="meteorFieldData.width + 'px'"
        [style.height]="meteorFieldData.height + 'px'"
        [style.marginLeft]="meteorFieldData.marginLeft + 'px'"
        [style.marginTop]="meteorFieldData.marginTop + 'px'"
      >
        @for (type of meteors(); track $index) {
          <div [class]="['meteor', 'type-' + type, 'mt-' + ($index + 1)]"></div>
        }
      </div>
    </div>
  }

  <!-- Loved by millions -->
  <div adevAnimationLayer layerId="loved-by-millions" class="loved-by-millions-layer layer">
    <h2>\u6DF1\u53D7\u6570\u767E\u4E07\u5F00\u53D1\u8005\u559C\u7231</h2>
    <p>
      \u52A0\u5165\u5168\u7403\u6570\u767E\u4E07\u4F7F\u7528 Angular \u6784\u5EFA\u5E94\u7528\u7684\u5F00\u53D1\u8005\uFF0C\u6210\u4E3A\u8FD9\u4E2A\u5145\u6EE1\u6D3B\u529B\u548C\u53CB\u597D\u7684\u793E\u533A\u7684\u4E00\u5458\u3002
    </p>
  </div>

  <!-- Build for everyone -->
  <div adevAnimationLayer layerId="build-for-everyone" class="build-for-everyone-layer layer">
    <h2 class="title">\u4E3A\u6240\u6709\u4EBA\u6784\u5EFA</h2>
    <p>
      \u4F9D\u9760 Angular \u5185\u7F6E\u7684\u6C34\u5408\u3001\u56FD\u9645\u5316\u3001\u5B89\u5168\u6027\u548C\u65E0\u969C\u788D\u6027\u652F\u6301\uFF0C\u4E3A\u5168\u7403\u6240\u6709\u4EBA\u6784\u5EFA\u5E94\u7528\u3002
    </p>
  </div>
</div>
`, styles: ['/* src/app/features/home/components/home-animation/home-animation.component.scss */\n:host {\n  display: block;\n  position: relative;\n}\n:host .animation {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n:host .animation .layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n:host .animation .layer h2 {\n  font-size: 4vw;\n  font-weight: 600;\n  white-space: nowrap;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n  z-index: 1;\n}\n@media (max-width: 900px) {\n  :host .animation .layer h2 {\n    font-size: 2rem;\n  }\n}\n:host .animation .layer p {\n  font-weight: 400;\n  color: var(--quaternary-contrast);\n  font-size: clamp(1rem, 1vw, 2rem);\n  line-height: 1.5;\n  width: clamp(345px, 50%, 600px);\n  margin: 0 auto;\n}\n:host .animation .layer h2,\n:host .animation .layer p {\n  background-color: var(--page-background);\n  box-shadow: 0 0 20px 20px var(--page-background);\n}\n@media (max-width: 1200px) {\n  :host .animation .layer h2,\n  :host .animation .layer p {\n    box-shadow: 0 0 10px 10px var(--page-background);\n  }\n}\n:host .animation .banners-layer {\n  z-index: 10;\n}\n:host .animation .banners-layer .adev-banner-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  position: absolute;\n  transition:\n    background 0.3s ease,\n    border 0.3s ease,\n    transform 200ms linear;\n  top: var(--layout-padding);\n  left: calc(var(--layout-padding) + var(--primary-nav-width));\n}\n@media (max-width: 900px) {\n  :host .animation .banners-layer .adev-banner-container {\n    top: 6rem;\n    left: var(--layout-padding);\n    max-width: calc(100% - var(--layout-padding) * 2);\n  }\n}\n@media (max-width: 700px) {\n  :host .animation .banners-layer .adev-banner-container {\n    top: 5rem;\n  }\n}\n:host .animation .banners-layer .adev-banner {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  border: 1px solid var(--senary-contrast);\n  background: var(--page-background);\n  border-radius: 0.25rem;\n  padding: 10px;\n  max-width: 100%;\n  width: fit-content;\n  box-sizing: border-box;\n}\n:host .animation .banners-layer .adev-banner h1,\n:host .animation .banners-layer .adev-banner p {\n  display: inline;\n  font-size: 0.875rem;\n  margin: 0;\n  background-image: var(--red-to-pink-to-purple-horizontal-gradient);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  width: fit-content;\n  font-weight: 500;\n  box-shadow: none;\n  position: relative;\n}\n:host .animation .banners-layer .adev-banner h1.adev-banner-cta,\n:host .animation .banners-layer .adev-banner p.adev-banner-cta {\n  color: var(--tertiary-contrast);\n}\n:host .animation .banners-layer .adev-banner h1.adev-banner-cta::after,\n:host .animation .banners-layer .adev-banner p.adev-banner-cta::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 1px;\n  bottom: -2px;\n  left: 0;\n  background: var(--red-to-pink-to-purple-horizontal-gradient);\n  transform-origin: bottom right;\n  transition: transform 0.3s ease;\n}\n:host .animation .banners-layer .adev-banner:hover .adev-banner-cta::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n:host .animation .banners-layer .learn-angular {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  transform: translateX(-50%);\n  transition: opacity 200ms linear;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 50px;\n}\n:host .animation .banners-layer .learn-angular button {\n  font-size: 1rem;\n  padding: 1rem 1.75rem;\n}\n:host .animation .banners-layer .learn-angular button::after {\n  font-size: 1rem;\n}\n:host .animation .banners-layer .learn-angular .adev-arrow {\n  transform: rotate(45deg);\n  border: solid var(--primary-contrast);\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 7px;\n}\n:host .animation .logo-layer {\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n:host .animation .logo-layer .svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  fill-rule: evenodd;\n  clip-rule: evenodd;\n  stroke-linejoin: round;\n  stroke-miterlimit: 2;\n}\n:host .animation .logo-layer .wrapper {\n  transform: scale(0.55);\n  transform-origin: 50% 50%;\n}\n@media (max-width: 775px) {\n  :host .animation .logo-layer .wrapper {\n    transform: scale(0.8);\n  }\n}\n@media (min-width: 1800.01px) {\n  :host .animation .logo-layer .wrapper {\n    transform: scale(0.5);\n  }\n}\n:host .animation .logo-layer .wrapper .logo {\n  transition: transform 200ms linear;\n}\n:host .animation .logo-layer .wrapper .logo .shield {\n}\n:host .animation .logo-layer .wrapper .logo .shield,\n:host .animation .logo-layer .wrapper .logo .shield .shield-middle {\n  transform-origin: 177px 200px;\n  transition: transform 200ms linear;\n}\n:host .animation .logo-layer .wrapper .logo .shield .shield-bottom-a-arc {\n  transform-origin: 0 302px;\n  transition: transform 200ms linear;\n}\n:host .animation .logo-layer .wrapper .logo .shield .shield-bottom-extension {\n  transform-origin: 177px 340px;\n  transition: transform 200ms linear;\n  transform: scale(0);\n}\n:host .animation .logo-layer .wrapper .logo .letter {\n  transition: opacity 200ms linear;\n}\n:host .animation .uwu-layer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 200ms linear, opacity 200ms linear;\n}\n:host .animation .uwu-layer img {\n  -webkit-user-select: none;\n  user-select: none;\n  width: max(700 * min(100vw, 2560px) / 1470, 350px);\n  height: auto;\n}\n:host .animation .works-at-any-scale-layer,\n:host .animation .loved-by-millions-layer,\n:host .animation .build-for-everyone-layer {\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  opacity: 0;\n  z-index: 1;\n  transition: transform 200ms linear, opacity 200ms linear;\n}\n:host .animation .works-at-any-scale-layer {\n  transform: scale(0);\n}\n:host .animation .loved-by-millions-layer,\n:host .animation .build-for-everyone-layer {\n  transform: scale(0.75);\n}\n:host .animation .build-for-everyone-layer .title {\n  color: transparent;\n  display: inline-block;\n  background:\n    linear-gradient(\n      110deg,\n      #f31a5b 0,\n      #8737e9 50%,\n      #3a373f 0%);\n  background-size: 205% 100%;\n  -webkit-background-clip: text;\n  background-clip: text;\n  background-size: 205% 100%;\n  background-position-x: 100%;\n  transition: background-position-x 200ms linear;\n}\n:host .animation .meteor-field-layer {\n  overflow: hidden;\n}\n:host .animation .meteor-field-layer .field {\n  --math-pi: 3.1415926536rad;\n  position: absolute;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  gap: var(--meteor-gap);\n  display: none;\n  transform: scale(1.42);\n  top: 0;\n  left: 0;\n  transform-origin: 50% 50%;\n  transition: opacity 200ms linear, transform 200ms linear;\n}\n:host .animation .meteor-field-layer .field .meteor {\n  position: relative;\n  width: var(--meteor-width);\n  height: var(--meteor-height);\n  opacity: 0;\n  transform: translate(200%, 200%) scale(0.3);\n  transition: opacity 200ms linear, transform 200ms linear;\n}\n:host .animation .meteor-field-layer .field .meteor::after {\n  content: "";\n  position: absolute;\n  width: 4px;\n  height: var(--meteor-tail-length);\n  border-radius: 2px;\n  transform-origin: top center;\n  transform: rotate(var(--meteor-tilt-angle));\n  top: 0;\n  left: 0;\n}\n:host .animation .meteor-field-layer .field .meteor.type-1::after {\n  background:\n    linear-gradient(\n      calc(var(--math-pi) + var(--meteor-tilt-angle)),\n      rgb(228, 49, 85) 0,\n      rgb(219, 64, 219) 66%,\n      transparent 100%);\n}\n:host .animation .meteor-field-layer .field .meteor.type-2::after {\n  background:\n    linear-gradient(\n      calc(var(--math-pi) + var(--meteor-tilt-angle)),\n      rgb(152, 56, 226) 0,\n      rgb(217, 18, 167) 66%,\n      transparent 100%);\n}\n:host .animation .meteor-field-layer .field .meteor.type-3::after {\n  background:\n    linear-gradient(\n      calc(var(--math-pi) + var(--meteor-tilt-angle)),\n      rgb(214, 53, 150) 0,\n      rgb(229, 91, 229) 66%,\n      transparent 100%);\n}\n:host .animation.reduced-motion {\n  position: relative;\n}\n:host .animation.reduced-motion .banners-layer {\n  height: 100vh;\n}\n@media (max-width: 700px) {\n  :host .animation.reduced-motion .banners-layer .adev-banner {\n    top: 6rem;\n  }\n}\n@media (min-width: 900.01px) {\n  :host .animation.reduced-motion .banners-layer .adev-banner {\n    left: var(--layout-padding);\n  }\n}\n:host .animation.reduced-motion .logo-layer {\n  position: relative;\n  height: 100vh;\n}\n@media (max-width: 900px) {\n  :host .animation.reduced-motion .logo-layer {\n    margin-top: -75px;\n  }\n}\n:host .animation.reduced-motion .works-at-any-scale-layer,\n:host .animation.reduced-motion .loved-by-millions-layer,\n:host .animation.reduced-motion .build-for-everyone-layer {\n  position: relative;\n  height: 120vh;\n  opacity: 1;\n  transform: scale(1);\n}\n:host .animation.reduced-motion .build-for-everyone-layer > .title {\n  background-position-x: 0;\n}\n/*# sourceMappingURL=home-animation.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeAnimationComponent, { className: "HomeAnimationComponent", filePath: "src/app/features/home/components/home-animation/home-animation.component.ts", lineNumber: 63 });
})();

// src/app/features/home/home.component.ts
var Home_Defer_6_DepsFn = /* @__PURE__ */ __name(() => [import("./chunk-HL5LEJFE.js").then((m) => m.CodeEditorComponent)], "Home_Defer_6_DepsFn");
function Home_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
}
__name(Home_Conditional_1_Template, "Home_Conditional_1_Template");
function Home_Defer_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "adev-code-editor", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("tutorialFiles", ctx_r0.tutorialFiles);
  }
}
__name(Home_Defer_4_Template, "Home_Defer_4_Template");
function Home_DeferLoading_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
}
__name(Home_DeferLoading_5_Template, "Home_DeferLoading_5_Template");
var TUTORIALS_HOMEPAGE_DIRECTORY = "homepage";
var _Home = class _Home {
  activatedRoute = inject(ActivatedRoute);
  renderer = inject(Renderer2);
  win = inject(WINDOW);
  doc = inject(DOCUMENT);
  destroyRef = inject(DestroyRef);
  tutorialFiles = TUTORIALS_HOMEPAGE_DIRECTORY;
  isUwu = "uwu" in this.activatedRoute.snapshot.queryParams;
  scrollProgress = signal(0, ...ngDevMode ? [{ debugName: "scrollProgress" }] : []);
  prefetchEditor = computed(() => this.scrollProgress() > 0.25, ...ngDevMode ? [{ debugName: "prefetchEditor" }] : []);
  showEditor = computed(() => this.scrollProgress() > 0.35, ...ngDevMode ? [{ debugName: "showEditor" }] : []);
  animationReady = signal(false, ...ngDevMode ? [{ debugName: "animationReady" }] : []);
  constructor() {
    const scrollListenerCleanupFn = this.renderer.listen(this.win, "scroll", () => (
      // Keep track of the scroll progress since the home animation uses
      // different mechanics for the standard and reduced-motion animations.
      this.scrollProgress.set(this.win.scrollY / this.doc.body.scrollHeight)
    ));
    this.destroyRef.onDestroy(() => scrollListenerCleanupFn());
  }
  onAnimationReady(ready) {
    this.animationReady.set(ready);
  }
};
__name(_Home, "Home");
__publicField(_Home, "\u0275fac", /* @__PURE__ */ __name(function Home_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Home)();
}, "Home_Factory"));
__publicField(_Home, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["adev-home"]], decls: 8, vars: 4, consts: [[3, "ready", "isUwu"], [1, "spacer"], [1, "adev-editor-scroll-container"], [1, "adev-code-editor"], [3, "tutorialFiles"], ["alt", "\u4EE3\u7801\u7F16\u8F91\u5668"]], template: /* @__PURE__ */ __name(function Home_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "adev-home-animation", 0);
    \u0275\u0275listener("ready", /* @__PURE__ */ __name(function Home_Template_adev_home_animation_ready_0_listener($event) {
      return ctx.onAnimationReady($event);
    }, "Home_Template_adev_home_animation_ready_0_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, Home_Conditional_1_Template, 1, 0, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275domTemplate(4, Home_Defer_4_Template, 1, 1)(5, Home_DeferLoading_5_Template, 1, 0);
    \u0275\u0275defer(6, 4, Home_Defer_6_DepsFn, 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("isUwu", ctx.isUwu);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.animationReady() ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275deferWhen(ctx.showEditor());
    \u0275\u0275deferPrefetchWhen(ctx.prefetchEditor());
  }
}, "Home_Template"), dependencies: [HomeAnimationComponent], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.docs-dark-mode   [_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  content: url("./media/editor-dark-horizontal.svg");\n}\n@media (max-width: 775px) {\n  .docs-dark-mode   [_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    content: url("./media/editor-dark-vertical.svg");\n  }\n}\n.docs-light-mode   [_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  content: url("./media/editor-light-horizontal.svg");\n}\n@media (max-width: 775px) {\n  .docs-light-mode   [_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    content: url("./media/editor-light-vertical.svg");\n  }\n}\n[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n[_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 300vh;\n  background-color: var(--page-background);\n}\n[_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   .adev-code-editor[_ngcontent-%COMP%] {\n  background-color: var(--page-background);\n  padding-bottom: 60px;\n  position: sticky;\n  top: calc((100vh - (100vh - 110px)) / 2);\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  [_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   .adev-code-editor[_ngcontent-%COMP%] {\n    top: calc((100vh - (100vh - 110px)) / 2 + 36px);\n  }\n}\n@media (max-width: 700px) {\n  [_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   .adev-code-editor[_ngcontent-%COMP%] {\n    top: calc((100vh - (100vh - 110px)) / 2 + 25px);\n  }\n}\n[_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   .adev-code-editor[_ngcontent-%COMP%]     embedded-editor {\n  margin: 0 auto;\n  display: flex;\n  width: 75vw;\n  height: calc(100vh - 110px);\n}\n@media (max-width: 700px) {\n  [_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   .adev-code-editor[_ngcontent-%COMP%]     embedded-editor {\n    width: 95vw;\n  }\n}\n[_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   .adev-code-editor[_ngcontent-%COMP%]     embedded-editor .adev-editor-container {\n  width: 100%;\n}\n[_nghost-%COMP%]   .adev-editor-scroll-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  min-height: 60vh;\n  width: 75vw;\n}\n/*# sourceMappingURL=home.component.css.map */'], changeDetection: 0 }));
var Home = _Home;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(Home, () => [import("./chunk-HL5LEJFE.js").then((m) => m.CodeEditorComponent)], (CodeEditorComponent) => {
    setClassMetadata(Home, [{
      type: Component,
      args: [{ selector: "adev-home", imports: [HomeAnimationComponent, CodeEditorComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<adev-home-animation [isUwu]="isUwu" (ready)="onAnimationReady($event)" />

<!-- This spacer is purely added to keep Lighthouse rating high by maintaining 0
  cumulative layout shift until the animation renders it's own spacer. -->
@if (!animationReady()) {
  <div class="spacer"></div>
}

<div class="adev-editor-scroll-container">
  <div class="adev-code-editor">
    @defer (when showEditor(); prefetch when prefetchEditor()) {
      <adev-code-editor [tutorialFiles]="tutorialFiles" />
    } @loading {
      <img alt="\u4EE3\u7801\u7F16\u8F91\u5668" />
    }
  </div>
</div>
`, styles: ['/* src/app/features/home/home.component.scss */\n:host {\n  width: 100%;\n  position: relative;\n}\n.docs-dark-mode :host .adev-editor-scroll-container img {\n  content: url("./media/editor-dark-horizontal.svg");\n}\n@media (max-width: 775px) {\n  .docs-dark-mode :host .adev-editor-scroll-container img {\n    content: url("./media/editor-dark-vertical.svg");\n  }\n}\n.docs-light-mode :host .adev-editor-scroll-container img {\n  content: url("./media/editor-light-horizontal.svg");\n}\n@media (max-width: 775px) {\n  .docs-light-mode :host .adev-editor-scroll-container img {\n    content: url("./media/editor-light-vertical.svg");\n  }\n}\n:host .spacer {\n  height: 100vh;\n}\n:host .adev-editor-scroll-container {\n  position: relative;\n  height: 300vh;\n  background-color: var(--page-background);\n}\n:host .adev-editor-scroll-container .adev-code-editor {\n  background-color: var(--page-background);\n  padding-bottom: 60px;\n  position: sticky;\n  top: calc((100vh - (100vh - 110px)) / 2);\n}\n@media (min-width: 700.01px) and (max-width: 900px) {\n  :host .adev-editor-scroll-container .adev-code-editor {\n    top: calc((100vh - (100vh - 110px)) / 2 + 36px);\n  }\n}\n@media (max-width: 700px) {\n  :host .adev-editor-scroll-container .adev-code-editor {\n    top: calc((100vh - (100vh - 110px)) / 2 + 25px);\n  }\n}\n:host .adev-editor-scroll-container .adev-code-editor ::ng-deep embedded-editor {\n  margin: 0 auto;\n  display: flex;\n  width: 75vw;\n  height: calc(100vh - 110px);\n}\n@media (max-width: 700px) {\n  :host .adev-editor-scroll-container .adev-code-editor ::ng-deep embedded-editor {\n    width: 95vw;\n  }\n}\n:host .adev-editor-scroll-container .adev-code-editor ::ng-deep embedded-editor .adev-editor-container {\n  width: 100%;\n}\n:host .adev-editor-scroll-container img {\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  min-height: 60vh;\n  width: 75vw;\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
    }], () => [], null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/features/home/home.component.ts", lineNumber: 34 });
})();
export {
  TUTORIALS_HOMEPAGE_DIRECTORY,
  Home as default
};
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-UVMHHQTK.js.map

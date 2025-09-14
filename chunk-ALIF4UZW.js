import {
  ItemDetailComponent
} from "./chunk-3FMQLJ57.js";
import {
  BestItemComponent,
  DeviceItemComponent,
  ItemSwitchComponents,
  LostItemComponent,
  StoutItemComponent,
  UnknownItemComponent
} from "./chunk-OS5CC4VV.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-IP3YSDXJ.js";
import {
  JsonPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from "./chunk-OV2CFM4K.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2CX5BJWG.js";

// src/content/examples/built-in-directives/src/app/item.ts
var _Item = class _Item {
  id;
  name;
  feature;
  url;
  rate;
  constructor(id, name, feature, url, rate = 100) {
    this.id = id;
    this.name = name;
    this.feature = feature;
    this.url = url;
    this.rate = rate;
    this.id = id ? id : _Item.nextId++;
  }
  clone() {
    return Object.assign(new _Item(this.id), this);
  }
};
__name(_Item, "Item");
__publicField(_Item, "nextId", 0);
__publicField(_Item, "items", [
  new _Item(0, "Teapot", "stout"),
  new _Item(1, "Lamp", "bright"),
  new _Item(2, "Phone", "slim"),
  new _Item(3, "Television", "vintage"),
  new _Item(4, "Fishbowl")
]);
var Item = _Item;

// src/content/examples/built-in-directives/src/app/app.component.ts
var _c0 = /* @__PURE__ */ __name(() => ({ "helpful": false, "study": true, "course": true }), "_c0");
function AppComponent_app_item_detail_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-item-detail", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
__name(AppComponent_app_item_detail_98_Template, "AppComponent_app_item_detail_98_Template");
function AppComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Hello, ", ctx_r0.currentCustomer.name);
  }
}
__name(AppComponent_div_103_Template, "AppComponent_div_103_Template");
function AppComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Hello, ");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.nullCustomer);
  }
}
__name(AppComponent_div_106_Template, "AppComponent_div_106_Template");
function AppComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1("Add ", ctx_r0.currentItem.name, " with template");
  }
}
__name(AppComponent_ng_template_111_Template, "AppComponent_ng_template_111_Template");
function AppComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.name);
  }
}
__name(AppComponent_div_130_Template, "AppComponent_div_130_Template");
function AppComponent_app_item_detail_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-item-detail", 46);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("item", item_r3);
  }
}
__name(AppComponent_app_item_detail_134_Template, "AppComponent_app_item_detail_134_Template");
function AppComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", i_r5 + 1, " - ", item_r4.name);
  }
}
__name(AppComponent_div_143_Template, "AppComponent_div_143_Template");
function AppComponent_div_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", i_r7 + 1, " - ", item_r6.name);
  }
}
__name(AppComponent_div_150_Template, "AppComponent_div_150_Template");
function AppComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", null, 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", item_r8.id, ") ", item_r8.name);
  }
}
__name(AppComponent_div_164_Template, "AppComponent_div_164_Template");
function AppComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Item DOM elements change #", ctx_r0.itemsNoTrackByCount, " without trackBy ");
  }
}
__name(AppComponent_div_165_Template, "AppComponent_div_165_Template");
function AppComponent_div_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", null, 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", item_r9.id, ") ", item_r9.name);
  }
}
__name(AppComponent_div_169_Template, "AppComponent_div_169_Template");
function AppComponent_div_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Item DOM elements change #", ctx_r0.itemsWithTrackByCount, " with trackBy ");
  }
}
__name(AppComponent_div_170_Template, "AppComponent_div_170_Template");
function AppComponent_div_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" (", item_r10.id, ") ", item_r10.name, " ");
  }
}
__name(AppComponent_div_180_Template, "AppComponent_div_180_Template");
function AppComponent_div_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", item_r11.id, ") ", item_r11.name);
  }
}
__name(AppComponent_div_187_Template, "AppComponent_div_187_Template");
function AppComponent_div_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", item_r12.id, ") ", item_r12.name);
  }
}
__name(AppComponent_div_194_Template, "AppComponent_div_194_Template");
function AppComponent_div_201_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", item_r13.id, ") ", item_r13.name);
  }
}
__name(AppComponent_div_201_Template, "AppComponent_div_201_Template");
function AppComponent_label_208_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 49)(1, "div")(2, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_label_208_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.currentItem, $event) || (ctx_r0.currentItem = $event);
      return \u0275\u0275resetView($event);
    }, "AppComponent_label_208_Template_input_ngModelChange_2_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("for", \u0275\u0275interpolate1("item-", i_r15));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("item-", i_r15));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.currentItem);
    \u0275\u0275property("value", i_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", i_r15.name, " ");
  }
}
__name(AppComponent_label_208_Template, "AppComponent_label_208_Template");
function AppComponent_app_stout_item_210_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stout-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_stout_item_210_Template, "AppComponent_app_stout_item_210_Template");
function AppComponent_app_device_item_211_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-device-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_device_item_211_Template, "AppComponent_app_device_item_211_Template");
function AppComponent_app_lost_item_212_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-lost-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_lost_item_212_Template, "AppComponent_app_lost_item_212_Template");
function AppComponent_app_best_item_213_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-best-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_best_item_213_Template, "AppComponent_app_best_item_213_Template");
function AppComponent_div_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Are you as bright as ", ctx_r0.currentItem.name, "?");
  }
}
__name(AppComponent_div_214_Template, "AppComponent_div_214_Template");
function AppComponent_app_unknown_item_215_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-unknown-item", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.currentItem);
  }
}
__name(AppComponent_app_unknown_item_215_Template, "AppComponent_app_unknown_item_215_Template");
var _AppComponent = class _AppComponent {
  // #enddocregion import-ng-if, import-ng-for, import-ng-style, import-ng-switch, import-ng-class, import-forms-module
  canSave = true;
  isSpecial = true;
  isUnchanged = true;
  isActive = true;
  nullCustomer = null;
  currentCustomer = {
    name: "Laura"
  };
  item;
  // defined to demonstrate template context precedence
  items = [];
  // #docregion item
  currentItem;
  // #enddocregion item
  // trackBy change counting
  itemsNoTrackByCount = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;
  // #docregion setClasses
  currentClasses = {};
  // #enddocregion setClasses
  // #docregion setStyles
  currentStyles = {};
  // #enddocregion setStyles
  ngOnInit() {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount = 0;
  }
  setUppercaseName(name) {
    this.currentItem.name = name.toUpperCase();
  }
  // #docregion setClasses
  setCurrentClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    };
  }
  // #enddocregion setClasses
  // #docregion setStyles
  setCurrentStyles() {
    this.currentStyles = {
      "font-style": this.canSave ? "italic" : "normal",
      "font-weight": !this.isUnchanged ? "bold" : "normal",
      "font-size": this.isSpecial ? "24px" : "12px"
    };
  }
  // #enddocregion setStyles
  isActiveToggle() {
    this.isActive = !this.isActive;
  }
  giveNullCustomerValue() {
    this.nullCustomer = "Kelly";
  }
  resetItems() {
    this.items = Item.items.map((item) => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }
  resetList() {
    this.resetItems();
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }
  changeIds() {
    this.items.forEach((i) => i.id += 1 * this.itemIdIncrement);
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }
  clearTrackByCounts() {
    this.resetItems();
    this.itemsNoTrackByCount = 0;
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }
  // #docregion trackByItems
  trackByItems(index, item) {
    return item.id;
  }
  // #enddocregion trackByItems
  trackById(index, item) {
    return item.id;
  }
  getValue(event) {
    return event.target.value;
  }
};
__name(_AppComponent, "AppComponent");
__publicField(_AppComponent, "\u0275fac", /* @__PURE__ */ __name(function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
}, "AppComponent_Factory"));
__publicField(_AppComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 216, vars: 70, consts: [["noTrackBy", ""], ["withTrackBy", ""], ["id", "ngModel"], ["for", "without"], ["id", "without", 3, "input", "value"], ["for", "example-ngModel"], ["id", "example-ngModel", 3, "ngModelChange", "ngModel"], ["for", "example-change"], ["id", "example-change", 3, "ngModelChange", "ngModel"], ["for", "example-uppercase"], ["id", "example-uppercase", 3, "ngModelChange", "ngModel"], ["id", "ngClass"], [3, "ngClass"], ["for", "saveable"], ["type", "checkbox", "id", "saveable", 3, "ngModelChange", "ngModel"], ["for", "modified"], ["type", "checkbox", "id", "modified", 3, "change", "value"], ["for", "special"], ["type", "checkbox", "id", "special", 3, "ngModelChange", "ngModel"], ["type", "button", 3, "click"], [1, "helpful", "study", "course"], [3, "ngStyle"], ["for", "canSave"], ["id", "canSave", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "isUnchanged"], ["id", "isUnchanged", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "isSpecial"], ["id", "isSpecial", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["id", "ngIf"], [3, "item", 4, "ngIf"], [4, "ngIf"], [3, "ngIf"], ["id", "ngFor"], [1, "box"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngFor", "ngForOf"], ["id", "ngFor-index"], ["id", "ngFor-trackBy"], ["id", "noTrackByCnt", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "withTrackByCnt", 4, "ngIf"], [3, "for", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "item", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "item", 4, "ngSwitchDefault"], [3, "item"], ["id", "noTrackByCnt"], ["id", "withTrackByCnt"], [3, "for"], ["type", "radio", "name", "items", 3, "ngModelChange", "id", "ngModel", "value"]], template: /* @__PURE__ */ __name(function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Built-in Directives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Built-in attribute directives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 2);
    \u0275\u0275text(5, "NgModel (two-way) Binding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "fieldset")(7, "h4");
    \u0275\u0275text(8, "NgModel examples");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "label", 3);
    \u0275\u0275text(13, "without NgModel:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 4);
    \u0275\u0275listener("input", /* @__PURE__ */ __name(function AppComponent_Template_input_input_14_listener($event) {
      return ctx.currentItem.name = ctx.getValue($event);
    }, "AppComponent_Template_input_input_14_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p")(16, "label", 5);
    \u0275\u0275text(17, "[(ngModel)]:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.currentItem.name, $event) || (ctx.currentItem.name = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_18_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p")(20, "label", 7);
    \u0275\u0275text(21, '(ngModelChange)="...name=$event":');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 8);
    \u0275\u0275listener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_22_listener($event) {
      return ctx.currentItem.name = $event;
    }, "AppComponent_Template_input_ngModelChange_22_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p")(24, "label", 9);
    \u0275\u0275text(25, '(ngModelChange)="setUppercaseName($event)" ');
    \u0275\u0275elementStart(26, "input", 10);
    \u0275\u0275listener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_26_listener($event) {
      return ctx.setUppercaseName($event);
    }, "AppComponent_Template_input_ngModelChange_26_listener"));
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(27, "hr");
    \u0275\u0275elementStart(28, "h2", 11);
    \u0275\u0275text(29, "NgClass Binding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 12);
    \u0275\u0275text(34, "This div is initially saveable, unchanged, and special.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ul")(36, "li")(37, "label", 13);
    \u0275\u0275text(38, "saveable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.canSave, $event) || (ctx.canSave = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_39_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li")(41, "label", 15);
    \u0275\u0275text(42, "modified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 16);
    \u0275\u0275listener("change", /* @__PURE__ */ __name(function AppComponent_Template_input_change_43_listener() {
      return ctx.isUnchanged = !ctx.isUnchanged;
    }, "AppComponent_Template_input_change_43_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "li")(45, "label", 17);
    \u0275\u0275text(46, "special: ");
    \u0275\u0275elementStart(47, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.isSpecial, $event) || (ctx.isSpecial = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_47_listener"));
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "button", 19);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_48_listener() {
      return ctx.setCurrentClasses();
    }, "AppComponent_Template_button_click_48_listener"));
    \u0275\u0275text(49, "Refresh currentClasses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 12);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "br")(53, "br");
    \u0275\u0275elementStart(54, "div", 12);
    \u0275\u0275text(55, "This div is special");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 20);
    \u0275\u0275text(57, "Helpful study course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 12);
    \u0275\u0275text(59, "Study course");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "hr");
    \u0275\u0275elementStart(61, "h3");
    \u0275\u0275text(62, "NgStyle Binding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div");
    \u0275\u0275text(64, " This div is x-large or smaller.\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "h4");
    \u0275\u0275text(66, "[ngStyle] binding to currentStyles - CSS property names");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "p");
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 21);
    \u0275\u0275text(71, " This div is initially italic, normal weight, and extra large (24px).\n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(72, "br");
    \u0275\u0275elementStart(73, "label", 22);
    \u0275\u0275text(74, "italic: ");
    \u0275\u0275elementStart(75, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.canSave, $event) || (ctx.canSave = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_75_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275text(76, " |\n");
    \u0275\u0275elementStart(77, "label", 24);
    \u0275\u0275text(78, "normal: ");
    \u0275\u0275elementStart(79, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_79_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.isUnchanged, $event) || (ctx.isUnchanged = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_79_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275text(80, " |\n");
    \u0275\u0275elementStart(81, "label", 26);
    \u0275\u0275text(82, "xlarge: ");
    \u0275\u0275elementStart(83, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", /* @__PURE__ */ __name(function AppComponent_Template_input_ngModelChange_83_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.isSpecial, $event) || (ctx.isSpecial = $event);
      return $event;
    }, "AppComponent_Template_input_ngModelChange_83_listener"));
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "button", 19);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_84_listener() {
      return ctx.setCurrentStyles();
    }, "AppComponent_Template_button_click_84_listener"));
    \u0275\u0275text(85, "Refresh currentStyles");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "br")(87, "br");
    \u0275\u0275elementStart(88, "div", 21);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "hr");
    \u0275\u0275elementStart(91, "h2");
    \u0275\u0275text(92, "Built-in structural directives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "h3", 28);
    \u0275\u0275text(94, "NgIf Binding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div")(96, "p");
    \u0275\u0275text(97, "If isActive is true, app-item-detail will render: ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, AppComponent_app_item_detail_98_Template, 1, 1, "app-item-detail", 29);
    \u0275\u0275elementStart(99, "button", 19);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_99_listener() {
      return ctx.isActiveToggle();
    }, "AppComponent_Template_button_click_99_listener"));
    \u0275\u0275text(100, "Toggle app-item-detail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "p");
    \u0275\u0275text(102, "If currentCustomer isn't null, say hello to Laura:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, AppComponent_div_103_Template, 2, 1, "div", 30);
    \u0275\u0275elementStart(104, "p");
    \u0275\u0275text(105, "nullCustomer is null by default. NgIf guards against null. Give it a value to show it:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(106, AppComponent_div_106_Template, 4, 1, "div", 30);
    \u0275\u0275elementStart(107, "button", 19);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_107_listener() {
      return ctx.giveNullCustomerValue();
    }, "AppComponent_Template_button_click_107_listener"));
    \u0275\u0275text(108, "Give nullCustomer a value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "h4");
    \u0275\u0275text(110, "NgIf binding with template (no *)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(111, AppComponent_ng_template_111_Template, 1, 1, "ng-template", 31);
    \u0275\u0275element(112, "hr");
    \u0275\u0275elementStart(113, "h4");
    \u0275\u0275text(114, "Show/hide vs. NgIf");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div");
    \u0275\u0275text(116, "Show with class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div");
    \u0275\u0275text(118, "Hide with class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "p");
    \u0275\u0275text(120, "ItemDetail is in the DOM but hidden");
    \u0275\u0275elementEnd();
    \u0275\u0275element(121, "app-item-detail");
    \u0275\u0275elementStart(122, "div");
    \u0275\u0275text(123, "Show with style");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div");
    \u0275\u0275text(125, "Hide with style");
    \u0275\u0275elementEnd();
    \u0275\u0275element(126, "hr");
    \u0275\u0275elementStart(127, "h2", 32);
    \u0275\u0275text(128, "NgFor Binding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "div", 33);
    \u0275\u0275template(130, AppComponent_div_130_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "p");
    \u0275\u0275text(132, "*ngFor with ItemDetailComponent element");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 33);
    \u0275\u0275template(134, AppComponent_app_item_detail_134_Template, 1, 1, "app-item-detail", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "h4", 36);
    \u0275\u0275text(136, "*ngFor with index");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "p");
    \u0275\u0275text(138, "with ");
    \u0275\u0275elementStart(139, "em");
    \u0275\u0275text(140, "semi-colon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141, " separator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "div", 33);
    \u0275\u0275template(143, AppComponent_div_143_Template, 2, 2, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "p");
    \u0275\u0275text(145, "with ");
    \u0275\u0275elementStart(146, "em");
    \u0275\u0275text(147, "comma");
    \u0275\u0275elementEnd();
    \u0275\u0275text(148, " separator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div", 33);
    \u0275\u0275template(150, AppComponent_div_150_Template, 2, 2, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "h4", 37);
    \u0275\u0275text(152, "*ngFor trackBy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "button", 19);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_153_listener() {
      return ctx.resetList();
    }, "AppComponent_Template_button_click_153_listener"));
    \u0275\u0275text(154, "Reset items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "button", 19);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_155_listener() {
      return ctx.changeIds();
    }, "AppComponent_Template_button_click_155_listener"));
    \u0275\u0275text(156, "Change ids");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "button", 19);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function AppComponent_Template_button_click_157_listener() {
      return ctx.clearTrackByCounts();
    }, "AppComponent_Template_button_click_157_listener"));
    \u0275\u0275text(158, "Clear counts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "p")(160, "em");
    \u0275\u0275text(161, "without");
    \u0275\u0275elementEnd();
    \u0275\u0275text(162, " trackBy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "div", 33);
    \u0275\u0275template(164, AppComponent_div_164_Template, 3, 2, "div", 34)(165, AppComponent_div_165_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "p");
    \u0275\u0275text(167, "with trackBy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "div", 33);
    \u0275\u0275template(169, AppComponent_div_169_Template, 3, 2, "div", 39)(170, AppComponent_div_170_Template, 2, 1, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(171, "br")(172, "br")(173, "br");
    \u0275\u0275elementStart(174, "p");
    \u0275\u0275text(175, "with trackBy and ");
    \u0275\u0275elementStart(176, "em");
    \u0275\u0275text(177, "semi-colon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(178, " separator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "div", 33);
    \u0275\u0275template(180, AppComponent_div_180_Template, 2, 2, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "p");
    \u0275\u0275text(182, "with trackBy and ");
    \u0275\u0275elementStart(183, "em");
    \u0275\u0275text(184, "comma");
    \u0275\u0275elementEnd();
    \u0275\u0275text(185, " separator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "div", 33);
    \u0275\u0275template(187, AppComponent_div_187_Template, 2, 2, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "p");
    \u0275\u0275text(189, "with trackBy and ");
    \u0275\u0275elementStart(190, "em");
    \u0275\u0275text(191, "space");
    \u0275\u0275elementEnd();
    \u0275\u0275text(192, " separator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "div", 33);
    \u0275\u0275template(194, AppComponent_div_194_Template, 2, 2, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "p");
    \u0275\u0275text(196, "with ");
    \u0275\u0275elementStart(197, "em");
    \u0275\u0275text(198, "generic");
    \u0275\u0275elementEnd();
    \u0275\u0275text(199, " trackById function");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "div", 33);
    \u0275\u0275template(201, AppComponent_div_201_Template, 2, 2, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275element(202, "hr");
    \u0275\u0275elementStart(203, "h2");
    \u0275\u0275text(204, "NgSwitch Binding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "p");
    \u0275\u0275text(206, "Pick your favorite item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "div");
    \u0275\u0275template(208, AppComponent_label_208_Template, 4, 7, "label", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "div", 42);
    \u0275\u0275template(210, AppComponent_app_stout_item_210_Template, 1, 1, "app-stout-item", 43)(211, AppComponent_app_device_item_211_Template, 1, 1, "app-device-item", 43)(212, AppComponent_app_lost_item_212_Template, 1, 1, "app-lost-item", 43)(213, AppComponent_app_best_item_213_Template, 1, 1, "app-best-item", 43)(214, AppComponent_div_214_Template, 2, 1, "div", 44)(215, AppComponent_app_unknown_item_215_Template, 1, 1, "app-unknown-item", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("Current item name: ", ctx.currentItem.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.currentItem.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.currentItem.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.currentItem.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.currentItem.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("currentClasses is ", \u0275\u0275pipeBind1(32, 65, ctx.currentClasses));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx.currentClasses);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.canSave);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", !ctx.isUnchanged);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.isSpecial);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx.currentClasses);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" This div should be ", ctx.canSave ? "" : "not", " saveable, ", ctx.isUnchanged ? "unchanged" : "modified", " and ", ctx.isSpecial ? "" : "not", ' special after clicking "Refresh".');
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx.isSpecial ? "special" : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(69, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("font-size", ctx.isSpecial ? "x-large" : "smaller");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("currentStyles is ", \u0275\u0275pipeBind1(69, 67, ctx.currentStyles));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", ctx.currentStyles);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.canSave);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.isUnchanged);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.isSpecial);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngStyle", ctx.currentStyles);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" This div should be ", ctx.canSave ? "italic" : "plain", ", ", ctx.isUnchanged ? "normal weight" : "bold", " and, ", ctx.isSpecial ? "extra large" : "normal size", ' after clicking "Refresh".');
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx.isActive);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.currentCustomer);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.nullCustomer);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.currentItem);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("hidden", !ctx.isSpecial);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx.isSpecial);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("hidden", ctx.isSpecial);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx.isSpecial ? "block" : "none");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("display", ctx.isSpecial ? "none" : "block");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx.items);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.items);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.items);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.items);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx.items);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.itemsNoTrackByCount);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItems);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.itemsWithTrackByCount);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItems);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItems);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItems);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.items)("ngForTrackBy", ctx.trackById);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.items);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx.currentItem.feature);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "stout");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "slim");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "vintage");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "bright");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "bright");
  }
}, "AppComponent_Template"), dependencies: [
  // #docregion import-ng-if
  NgIf,
  // <-- import into the component
  // #enddocregion import-ng-if
  // #docregion import-ng-for
  NgForOf,
  // <-- import into the component
  // #enddocregion import-ng-for
  // #docregion import-ng-style
  NgStyle,
  // <-- import into the component
  // #enddocregion import-ng-style
  // #docregion import-ng-switch
  NgSwitch,
  // <-- import into the component
  NgSwitchCase,
  NgSwitchDefault,
  // #enddocregion import-ng-switch
  // #docregion import-ng-class
  NgClass,
  // <-- import into the component
  // #enddocregion import-ng-class
  // #docregion import-forms-module
  FormsModule,
  DefaultValueAccessor,
  CheckboxControlValueAccessor,
  RadioControlValueAccessor,
  NgControlStatus,
  NgModel,
  ItemDetailComponent,
  StoutItemComponent,
  BestItemComponent,
  DeviceItemComponent,
  LostItemComponent,
  UnknownItemComponent,
  // <--- import into the component
  // #enddocregion import-forms-module
  JsonPipe
], styles: ['\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 100%;\n  margin: 0 2px;\n}\ndiv[ng-reflect-ng-switch][_ngcontent-%COMP%], \napp-unknown-item[_ngcontent-%COMP%] {\n  margin: .5rem 0;\n  display: block;\n}\n#noTrackByCnt[_ngcontent-%COMP%], \n#withTrackByCnt[_ngcontent-%COMP%] {\n  color: darkred;\n  max-width: 450px;\n  margin: 4px;\n}\nimg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.box[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 6px;\n  max-width: 450px;\n}\n.child-div[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  font-weight: normal;\n}\n.context[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.parent-div[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-weight: bold;\n}\n.course[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: x-large;\n}\n.helpful[_ngcontent-%COMP%] {\n  color: red;\n}\n.saveable[_ngcontent-%COMP%] {\n  color: limegreen;\n}\n.study[_ngcontent-%COMP%], \n.modified[_ngcontent-%COMP%] {\n  font-family: "Brush Script MT", cursive;\n  font-size: 2rem;\n}\n.toe[_ngcontent-%COMP%] {\n  margin-left: 1em;\n  font-style: italic;\n}\n.to-toc[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: block;\n}\n/*# sourceMappingURL=app.component.css.map */'] }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      // #docregion import-ng-if
      NgIf,
      // <-- import into the component
      // #enddocregion import-ng-if
      // #docregion import-ng-for
      NgForOf,
      // <-- import into the component
      // #enddocregion import-ng-for
      // #docregion import-ng-style
      NgStyle,
      // <-- import into the component
      // #enddocregion import-ng-style
      // #docregion import-ng-switch
      NgSwitch,
      // <-- import into the component
      NgSwitchCase,
      NgSwitchDefault,
      // #enddocregion import-ng-switch
      // #docregion import-ng-class
      NgClass,
      // <-- import into the component
      // #enddocregion import-ng-class
      // #docregion import-forms-module
      FormsModule,
      // <--- import into the component
      // #enddocregion import-forms-module
      JsonPipe,
      ItemDetailComponent,
      ItemSwitchComponents,
      StoutItemComponent
      // #docregion import-ng-if, import-ng-for, import-ng-style, import-ng-switch, import-ng-class, import-forms-module
    ], template: `<h1>Built-in Directives</h1>

<h2>Built-in attribute directives</h2>

<h3 id="ngModel">NgModel (two-way) Binding</h3>

<fieldset><h4>NgModel examples</h4>
  <p>Current item name: {{ currentItem.name }}</p>
  <p>
    <label for="without">without NgModel:</label>
    <input [value]="currentItem.name" (input)="currentItem.name=getValue($event)" id="without">
  </p>

  <p>
    <!-- #docregion NgModel-1 -->
    <label for="example-ngModel">[(ngModel)]:</label>
    <input [(ngModel)]="currentItem.name" id="example-ngModel">
    <!-- #enddocregion NgModel-1 -->
  </p>

  <p>
    <label for="example-change">(ngModelChange)="...name=$event":</label>
    <input [ngModel]="currentItem.name" (ngModelChange)="currentItem.name=$event" id="example-change">
  </p>

  <p>
    <label for="example-uppercase">(ngModelChange)="setUppercaseName($event)"
      <!-- #docregion uppercase -->
      <input [ngModel]="currentItem.name" (ngModelChange)="setUppercaseName($event)" id="example-uppercase">
      <!-- #enddocregion uppercase -->
    </label>
  </p>
</fieldset>

<hr><h2 id="ngClass">NgClass Binding</h2>

<p>currentClasses is {{ currentClasses | json }}</p>
<!-- #docregion NgClass-1 -->
<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special.</div>
<!-- #enddocregion NgClass-1 -->
<ul>
  <li>
    <label for="saveable">saveable</label>
    <input type="checkbox" [(ngModel)]="canSave" id="saveable">
  </li>
  <li>
    <label for="modified">modified:</label>
    <input type="checkbox" [value]="!isUnchanged" (change)="isUnchanged=!isUnchanged" id="modified"></li>
  <li>
    <label for="special">special: <input type="checkbox" [(ngModel)]="isSpecial" id="special"></label>
</li>
</ul>
<button type="button" (click)="setCurrentClasses()">Refresh currentClasses</button>

<div [ngClass]="currentClasses">
  This div should be {{ canSave ? "": "not"}} saveable,
                  {{ isUnchanged ? "unchanged" : "modified" }} and
                  {{ isSpecial ? "": "not"}} special after clicking "Refresh".</div>
<br><br>
<!-- #docregion special-div -->
<!-- toggle the "special" class on/off with a property -->
<div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>
<!-- #enddocregion special-div -->
<div class="helpful study course">Helpful study course</div>
<div [ngClass]="{'helpful':false, 'study':true, 'course':true}">Study course</div>


<!-- NgStyle binding -->
<hr><h3>NgStyle Binding</h3>
<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">
  This div is x-large or smaller.
</div>

<h4>[ngStyle] binding to currentStyles - CSS property names</h4>
<p>currentStyles is {{ currentStyles | json }}</p>

<!-- #docregion NgStyle-2 -->
<div [ngStyle]="currentStyles">
  This div is initially italic, normal weight, and extra large (24px).
</div>
<!-- #enddocregion NgStyle-2 -->



<br>
<label for="canSave">italic: <input id="canSave" type="checkbox" [(ngModel)]="canSave"></label> |
<label for="isUnchanged">normal: <input id="isUnchanged" type="checkbox" [(ngModel)]="isUnchanged"></label> |
<label for="isSpecial">xlarge: <input id="isSpecial" type="checkbox" [(ngModel)]="isSpecial"></label>
<button type="button" (click)="setCurrentStyles()">Refresh currentStyles</button>
<br><br>
<div [ngStyle]="currentStyles">
  This div should be {{ canSave ? "italic": "plain"}},
                  {{ isUnchanged ? "normal weight" : "bold" }} and,
                  {{ isSpecial ? "extra large": "normal size"}} after clicking "Refresh".</div>

<hr>
<h2>Built-in structural directives</h2>
<h3 id="ngIf">NgIf Binding</h3>
<div>
  <p>If isActive is true, app-item-detail will render: </p>
  <!-- #docregion NgIf-1 -->
  <app-item-detail *ngIf="isActive" [item]="item"></app-item-detail>
  <!-- #enddocregion NgIf-1 -->

  <button type="button" (click)="isActiveToggle()">Toggle app-item-detail</button>
</div>
<p>If currentCustomer isn't null, say hello to Laura:</p>
<!-- #docregion NgIf-2 -->
<div *ngIf="currentCustomer">Hello, {{ currentCustomer.name }}</div>
<!-- #enddocregion NgIf-2 -->
<p>nullCustomer is null by default. NgIf guards against null. Give it a value to show it:</p>
<!-- #docregion NgIf-2b -->
<div *ngIf="nullCustomer">Hello, <span>{{ nullCustomer }}</span></div>
<!-- #enddocregion NgIf-2b -->
<button type="button" (click)="giveNullCustomerValue()">Give nullCustomer a value</button>


<h4>NgIf binding with template (no *)</h4>

<ng-template [ngIf]="currentItem">Add {{ currentItem.name }} with template</ng-template>
<hr>

<h4>Show/hide vs. NgIf</h4>
<!-- isSpecial is true -->
<div [class.hidden]="!isSpecial">Show with class</div>
<div [class.hidden]="isSpecial">Hide with class</div>

<p>ItemDetail is in the DOM but hidden</p>
<app-item-detail [class.hidden]="isSpecial"></app-item-detail>

<div [style.display]="isSpecial ? 'block' : 'none'">Show with style</div>
<div [style.display]="isSpecial ? 'none'  : 'block'">Hide with style</div>


<hr>
<h2 id="ngFor">NgFor Binding</h2>

<div class="box">
  <!-- #docregion NgFor-1, NgFor-1-2 -->
  <div *ngFor="let item of items">{{ item.name }}</div>
  <!-- #enddocregion NgFor-1, NgFor-1-2 -->
</div>

<p>*ngFor with ItemDetailComponent element</p>
<div class="box">
  <!-- #docregion NgFor-2, NgFor-1-2 -->
  <app-item-detail *ngFor="let item of items" [item]="item"></app-item-detail>
  <!-- #enddocregion NgFor-2, NgFor-1-2 -->
</div>


<h4 id="ngFor-index">*ngFor with index</h4>
<p>with <em>semi-colon</em> separator</p>
<div class="box">
  <!-- #docregion NgFor-3 -->
  <div *ngFor="let item of items; let i=index">{{ i + 1 }} - {{ item.name }}</div>
  <!-- #enddocregion NgFor-3 -->
</div>

<p>with <em>comma</em> separator</p>
<div class="box">
 <div *ngFor="let item of items, let i=index">{{ i + 1 }} - {{ item.name }}</div>
</div>

<h4 id="ngFor-trackBy">*ngFor trackBy</h4>
<button type="button" (click)="resetList()">Reset items</button>
<button type="button" (click)="changeIds()">Change ids</button>
<button type="button" (click)="clearTrackByCounts()">Clear counts</button>

<p><em>without</em> trackBy</p>
<div class="box">
  <div #noTrackBy *ngFor="let item of items">({{ item.id }}) {{ item.name }}</div>

  <div id="noTrackByCnt" *ngIf="itemsNoTrackByCount" >
    Item DOM elements change #{{ itemsNoTrackByCount }} without trackBy
  </div>
</div>

<p>with trackBy</p>
<div class="box">
  <div #withTrackBy *ngFor="let item of items; trackBy: trackByItems">({{ item.id }}) {{ item.name }}</div>

  <div id="withTrackByCnt" *ngIf="itemsWithTrackByCount">
    Item DOM elements change #{{ itemsWithTrackByCount }} with trackBy
  </div>
</div>

<br><br><br>

<p>with trackBy and <em>semi-colon</em> separator</p>
<div class="box">
  <!-- #docregion trackBy -->
  <div *ngFor="let item of items; trackBy: trackByItems">
    ({{ item.id }}) {{ item.name }}
  </div>
  <!-- #enddocregion trackBy -->
</div>

<p>with trackBy and <em>comma</em> separator</p>
<div class="box">
  <div *ngFor="let item of items, trackBy: trackByItems">({{ item.id }}) {{ item.name }}</div>
</div>

<p>with trackBy and <em>space</em> separator</p>
<div class="box">
  <div *ngFor="let item of items trackBy: trackByItems">({{ item.id }}) {{ item.name }}</div>
</div>

<p>with <em>generic</em> trackById function</p>
<div class="box">
  <div *ngFor="let item of items, trackBy: trackById">({{ item.id }}) {{ item.name }}</div>
</div>

<hr><h2>NgSwitch Binding</h2>

<p>Pick your favorite item</p>
<div>
  <label for="item-{{i}}" *ngFor="let i of items">
    <div><input id="item-{{i}}"type="radio" name="items" [(ngModel)]="currentItem" [value]="i">{{ i.name }}
    </div>
  </label>
</div>

<!-- #docregion NgSwitch -->
<div [ngSwitch]="currentItem.feature">
  <app-stout-item    *ngSwitchCase="'stout'"    [item]="currentItem"></app-stout-item>
  <app-device-item   *ngSwitchCase="'slim'"     [item]="currentItem"></app-device-item>
  <app-lost-item     *ngSwitchCase="'vintage'"  [item]="currentItem"></app-lost-item>
  <app-best-item     *ngSwitchCase="'bright'"   [item]="currentItem"></app-best-item>
<!-- #enddocregion NgSwitch -->
  <!-- #docregion NgSwitch-div -->
  <div *ngSwitchCase="'bright'">Are you as bright as {{ currentItem.name }}?</div>
  <!-- #enddocregion NgSwitch-div -->
<!-- #docregion NgSwitch -->
  <app-unknown-item  *ngSwitchDefault           [item]="currentItem"></app-unknown-item>
</div>
<!-- #enddocregion NgSwitch -->

`, styles: ['/* src/content/examples/built-in-directives/src/app/app.component.css */\nbutton {\n  font-size: 100%;\n  margin: 0 2px;\n}\ndiv[ng-reflect-ng-switch],\napp-unknown-item {\n  margin: .5rem 0;\n  display: block;\n}\n#noTrackByCnt,\n#withTrackByCnt {\n  color: darkred;\n  max-width: 450px;\n  margin: 4px;\n}\nimg {\n  height: 100px;\n}\n.box {\n  border: 1px solid black;\n  padding: 6px;\n  max-width: 450px;\n}\n.child-div {\n  margin-left: 1em;\n  font-weight: normal;\n}\n.context {\n  margin-left: 1em;\n}\n.hidden {\n  display: none;\n}\n.parent-div {\n  margin-top: 1em;\n  font-weight: bold;\n}\n.course {\n  font-weight: bold;\n  font-size: x-large;\n}\n.helpful {\n  color: red;\n}\n.saveable {\n  color: limegreen;\n}\n.study,\n.modified {\n  font-family: "Brush Script MT", cursive;\n  font-size: 2rem;\n}\n.toe {\n  margin-left: 1em;\n  font-style: italic;\n}\n.to-toc {\n  margin-top: 10px;\n  display: block;\n}\n/*# sourceMappingURL=app.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/content/examples/built-in-directives/src/app/app.component.ts", lineNumber: 61 });
})();
export {
  AppComponent
};
//# sourceMappingURL=chunk-ALIF4UZW.js.map

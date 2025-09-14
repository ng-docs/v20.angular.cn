import {
  d
} from "./chunk-G7P5OSF4.js";
import {
  ErrorStateMatcher,
  MAT_FORM_FIELD,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  _ErrorStateTracker
} from "./chunk-ZDTKZ4RG.js";
import {
  MatSnackBar
} from "./chunk-4ONR2TF5.js";
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuModule,
  CdkMenuTrigger
} from "./chunk-VVHPPJ64.js";
import {
  MatRippleModule
} from "./chunk-NAIJRLAM.js";
import {
  Clipboard,
  FocusMonitor,
  IconComponent,
  MatCommonModule,
  MatRipple,
  ObserversModule,
  _StructuralStylesLoader,
  _animationsDisabled,
  coerceBooleanProperty,
  getSupportedInputTypes
} from "./chunk-A6VPSR6T.js";
import "./chunk-7F6UZAKO.js";
import {
  DOWN_ARROW,
  ENTER,
  LEFT_ARROW,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  hasModifierKey
} from "./chunk-UGE24TTQ.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-OF2BY3RZ.js";
import "./chunk-DAHHMHGV.js";
import {
  FormGroupDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  Validators
} from "./chunk-IP3YSDXJ.js";
import {
  Directionality,
  Platform,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  coerceElement,
  coerceNumberProperty
} from "./chunk-H7FALWCD.js";
import "./chunk-OV2CFM4K.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  RendererFactory2,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __name,
  __publicField,
  auditTime,
  booleanAttribute,
  effect,
  forwardRef,
  inject,
  isSignal,
  numberAttribute,
  setClassMetadata,
  signal,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-2CX5BJWG.js";

// src/app/features/update/recommendations.ts
var ApplicationComplexity;
(function(ApplicationComplexity2) {
  ApplicationComplexity2[ApplicationComplexity2["Basic"] = 1] = "Basic";
  ApplicationComplexity2[ApplicationComplexity2["Medium"] = 2] = "Medium";
  ApplicationComplexity2[ApplicationComplexity2["Advanced"] = 3] = "Advanced";
})(ApplicationComplexity || (ApplicationComplexity = {}));
var RECOMMENDATIONS = [
  {
    possibleIn: 200,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Basic,
    step: "\u6269\u5C55 OnInit",
    action: "\u786E\u4FDD\u4E0D\u8981\u4F7F\u7528 `extends OnInit`\uFF0C\u6216\u8005\u5C06 `extends` \u4E0E\u4EFB\u4F55\u751F\u547D\u5468\u671F\u4E8B\u4EF6\u5408\u7528\u3002\u800C\u5E94\u8BE5\u4F7F\u7528 `implements <\u751F\u547D\u5468\u671F\u4E8B\u4EF6>`\u3002"
  },
  {
    possibleIn: 200,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: "\u6DF1\u5C42\u5BFC\u5165",
    action: "\u505C\u6B62\u4F7F\u7528\u6DF1\u5C42\u5BFC\u5165\uFF0C\u8FD9\u4E9B\u7B26\u53F7\u73B0\u5728\u5DF2\u6807\u8BB0\u4E3A \u0275\uFF0C\u5E76\u4E0D\u662F\u6211\u4EEC\u516C\u5171 API \u7684\u4E00\u90E8\u5206\u3002"
  },
  {
    possibleIn: 200,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: "invokeElementMethod",
    action: "\u505C\u6B62\u4F7F\u7528 `Renderer.invokeElementMethod`\uFF0C\u56E0\u4E3A\u8BE5\u65B9\u6CD5\u5DF2\u88AB\u79FB\u9664\u3002\u76EE\u524D\u6CA1\u6709\u66FF\u4EE3\u65B9\u6CD5\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Basic,
    step: "\u975E\u52A8\u753B\u6A21\u5757",
    action: "\u5982\u679C\u4F60\u7684\u5E94\u7528\u4E2D\u4F7F\u7528\u4E86\u52A8\u753B\uFF0C\u8BF7\u5728\u4F60\u7684\u5E94\u7528 `NgModule` \u4E2D\u4ECE `@angular/platform-browser/animations` \u5BFC\u5165 `BrowserAnimationsModule`\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Medium,
    step: "\u539F\u751F\u8868\u5355\u9A8C\u8BC1",
    action: "\u5F53\u4F60\u5305\u542B `FormsModule` \u65F6\uFF0CAngular \u5C31\u4F1A\u5F00\u59CB\u5411\u8868\u5355\u5143\u7D20\u6DFB\u52A0 `novalidate` \u5C5E\u6027\u3002\u8981\u91CD\u65B0\u542F\u7528\u539F\u751F\u8868\u5355\u884C\u4E3A\uFF0C\u8BF7\u4F7F\u7528 `ngNoForm` \u6216\u6DFB\u52A0 `ngNativeValidate`\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: "RootRenderer",
    action: "\u7528 `RendererFactoryV2` \u66FF\u6362 `RootRenderer`\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    ngUpgrade: true,
    step: "downgradeInjectable",
    action: "`upgrade/static/downgradeInjectable` \u7684\u8FD4\u56DE\u503C\u5DF2\u66F4\u6539\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: "\u52A8\u753B\u6D4B\u8BD5",
    action: "\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u52A8\u753B\u548C\u6D4B\u8BD5\uFF0C\u8BF7\u5728\u4F60\u7684 `TestBed.initTestEnvironment` \u8C03\u7528\u4E2D\u6DFB\u52A0 `mods[1].NoopAnimationsModule`\u3002"
  },
  {
    possibleIn: 200,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "DefaultIterableDiffer",
    action: "\u505C\u6B62\u4F7F\u7528 `DefaultIterableDiffer`\u3001`KeyValueDiffers#factories` \u6216 `IterableDiffers#factories`\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Basic,
    step: "\u6A21\u677F\u6807\u7B7E",
    action: "\u5C06\u4F60\u7684 `template` \u6807\u7B7E\u91CD\u547D\u540D\u4E3A `ng-template`\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Medium,
    step: "OpaqueToken",
    action: "\u7528 `InjectionToken` \u66FF\u6362\u4EFB\u4F55 `OpaqueToken`\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "DifferFactory",
    action: "\u5982\u679C\u8C03\u7528\u4E86 `DifferFactory.create(...)`\uFF0C\u5C31\u79FB\u9664 `ChangeDetectorRef` \u53C2\u6570\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "ErrorHandler \u53C2\u6570",
    action: "\u505C\u6B62\u5411 ErrorHandler \u6784\u9020\u51FD\u6570\u4F20\u9012\u4EFB\u4F55\u53C2\u6570\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "ngProbeToken",
    action: "\u5982\u679C\u4F7F\u7528\u4E86 ngProbeToken\uFF0C\u8BF7\u786E\u4FDD\u4ECE @angular/core \u800C\u4E0D\u662F @angular/platform-browser \u5BFC\u5165\u5B83\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "TrackByFn",
    action: "\u5982\u679C\u4F7F\u7528\u4E86 TrackByFn\uFF0C\u6539\u7528 TrackByFunction\u3002"
  },
  {
    possibleIn: 500,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Basic,
    step: "i18n \u7BA1\u9053\u66F4\u6539",
    action: "\u5982\u679C\u4F9D\u8D56\u4E8E\u65E5\u671F\u3001\u8D27\u5E01\u3001\u5C0F\u6570\u6216\u767E\u5206\u6BD4\u7BA1\u9053\uFF0C\u5728 5 \u4E2D\u5C06\u770B\u5230\u683C\u5F0F\u7684\u8F7B\u5FAE\u66F4\u6539\u3002\u5BF9\u4E8E\u4F7F\u7528\u5176\u4ED6\u533A\u57DF\u8BBE\u7F6E\u800C\u4E0D\u662F en-us \u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F60\u9700\u8981\u5BFC\u5165\u5B83\uFF0C\u53EF\u9009\u62E9\u4ECE `@angular/common/i18n_data/locale_fr` \u5BFC\u5165 `locale_extended_fr` \u5E76\u6CE8\u518C locale\u3002"
  },
  {
    possibleIn: 500,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: "gendir",
    action: '\u4E0D\u8981\u4F9D\u8D56\u4E8E `gendir`\uFF0C\u800C\u662F\u8003\u8651\u4F7F\u7528 `skipTemplateCodeGen`\u3002 <a href=https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">\u9605\u8BFB\u66F4\u591A</a>'
  },
  {
    possibleIn: 220,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    ngUpgrade: true,
    step: "\u52A8\u6001 ngUpgrade",
    action: "\u7528 `@angular/upgrade/static` \u4E2D\u7684\u65B0\u7248\u672C\u66FF\u6362\u4ECE `@angular/upgrade` \u5BFC\u5165\u7684 `downgradeComponent`\u3001`downgradeInjectable`\u3001`UpgradeComponent` \u548C `UpgradeModule`\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: "\u6838\u5FC3\u4E2D\u7684\u52A8\u753B",
    action: "\u5982\u679C\u4ECE @angular/core \u5BFC\u5165\u4E86\u4EFB\u4F55\u52A8\u753B\u670D\u52A1\u6216\u5DE5\u5177\uFF0C\u5E94\u8BE5\u4ECE @angular/animations \u5BFC\u5165\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "ngOutletContext",
    action: "\u7528 `ngTemplateOutletContext` \u66FF\u6362 `ngOutletContext`\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "collectionChangeRecord",
    action: "\u7528 `IterableChangeRecord` \u66FF\u6362 `CollectionChangeRecord`\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "Renderer",
    action: "\u4EFB\u4F55\u4F7F\u7528 Renderer \u7684\u5730\u65B9\uFF0C\u73B0\u5728\u4F7F\u7528 Renderer2\u3002"
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "\u8DEF\u7531\u5668\u67E5\u8BE2\u53C2\u6570",
    action: "\u5982\u679C\u4F7F\u7528\u4E86 preserveQueryParams\uFF0C\u6539\u7528 queryParamsHandling\u3002"
  },
  {
    possibleIn: 430,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "Http",
    action: "\u5982\u679C\u4F7F\u7528\u4F20\u7EDF\u7684 `HttpModule` \u548C `Http` \u670D\u52A1\uFF0C\u8BF7\u5207\u6362\u5230 `HttpClientModule` \u548C `HttpClient` \u670D\u52A1\u3002HttpClient \u7B80\u5316\u4E86\u9ED8\u8BA4\u7684\u4EBA\u4F53\u5DE5\u7A0B\u5B66\uFF08\u4F60\u4E0D\u518D\u9700\u8981\u6620\u5C04\u5230 JSON\uFF09\uFF0C\u73B0\u5728\u652F\u6301\u7C7B\u578B\u5316\u8FD4\u56DE\u503C\u548C\u62E6\u622A\u5668\u3002\u5728 [angular.dev](https://angular.io/guide/http) \u4E0A\u9605\u8BFB\u66F4\u591A\u3002"
  },
  {
    possibleIn: 430,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "@angular/platform-browser \u4E2D\u7684 DOCUMENT",
    action: "\u5982\u679C\u4F7F\u7528 @angular/platform-browser \u4E2D\u7684 DOCUMENT\uFF0C\u8BF7\u5F00\u59CB\u4ECE @angular/common \u5BFC\u5165\u3002"
  },
  {
    possibleIn: 500,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "ReflectiveInjector",
    action: "\u4EFB\u4F55\u4F7F\u7528 ReflectiveInjector \u7684\u5730\u65B9\uFF0C\u73B0\u5728\u4F7F\u7528 StaticInjector\u3002"
  },
  {
    possibleIn: 500,
    necessaryAsOf: 550,
    level: ApplicationComplexity.Medium,
    step: "\u7A7A\u767D\u5B57\u7B26",
    action: "\u5728\u4F60\u7684 `tsconfig.json` \u7684 `angularCompilerOptions` \u952E\u4E0B\u9009\u62E9 `off` \u4F5C\u4E3A `preserveWhitespaces` \u7684\u503C\uFF0C\u4EE5\u83B7\u5F97\u6B64\u8BBE\u7F6E\u7684\u597D\u5904\uFF0C\u8BE5\u8BBE\u7F6E\u5728 v6 \u4E2D\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A `off`\u3002"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    step: "Node 8",
    action: '\u786E\u4FDD\u4F60\u6B63\u5728\u4F7F\u7528<a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 8\u6216\u66F4\u9AD8\u7248\u672C</a>\u3002'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "\u66F4\u65B0\u5230 CLI v6",
    action: '\u66F4\u65B0\u4F60\u7684 Angular CLI\uFF0C\u5E76\u5C06\u914D\u7F6E\u8FC1\u79FB\u5230<a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">\u65B0\u7684 angular.json \u683C\u5F0F</a>\uFF0C\u65B9\u6CD5\u5982\u4E0B\uFF1A<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/cli@6`<br/>'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "\u66F4\u65B0\u5230 CLI v6",
    action: '\u66F4\u65B0\u4F60\u7684 Angular CLI\uFF0C\u5E76\u5C06\u914D\u7F6E\u8FC1\u79FB\u5230<a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">\u65B0\u7684 angular.json \u683C\u5F0F</a>\uFF0C\u65B9\u6CD5\u5982\u4E0B\uFF1A<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/cli@6 @angular/core@6"`<br/>'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: "CLI v6 \u811A\u672C",
    action: "\u66F4\u65B0\u4F60\u5728 `package.json` \u4E2D\u53EF\u80FD\u6709\u7684\u4EFB\u4F55 `scripts`\uFF0C\u4EE5\u4F7F\u7528\u6700\u65B0\u7684 Angular CLI \u547D\u4EE4\u3002\u6240\u6709 CLI \u547D\u4EE4\u73B0\u5728\u4F7F\u7528\u4E24\u4E2A\u77ED\u6A2A\u7EBF\u4F5C\u4E3A\u6807\u5FD7\uFF08\u4F8B\u5982 `ng build --prod --source-map`\uFF09\u4EE5\u7B26\u5408 POSIX \u89C4\u8303\u3002"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "\u66F4\u65B0\u5230 Angular v6",
    action: "\u5C06\u4F60\u7684\u6240\u6709 Angular \u6846\u67B6\u5305\u66F4\u65B0\u5230 v6\uFF0C\u5E76\u6B63\u786E\u5B89\u88C5 RxJS \u548C TypeScript \u7684\u7248\u672C\u3002<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/core@6`<br/><br/>\u66F4\u65B0\u540E\uFF0CTypeScript \u548C RxJS \u5C06\u66F4\u51C6\u786E\u5730\u6D41\u7ECF\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u7C7B\u578B\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u66B4\u9732\u51FA\u5E94\u7528\u7A0B\u5E8F\u7C7B\u578B\u7684\u73B0\u6709\u9519\u8BEF"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "\u66F4\u65B0\u5230 Angular v6",
    action: '\u5C06\u4F60\u7684\u6240\u6709 Angular \u6846\u67B6\u5305\u66F4\u65B0\u5230 v6\uFF0C\u5E76\u6B63\u786E\u5B89\u88C5 RxJS \u548C TypeScript \u7684\u7248\u672C\u3002<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/cli@6 @angular/core@6"`<br/><br/>\u66F4\u65B0\u540E\uFF0CTypeScript \u548C RxJS \u5C06\u66F4\u51C6\u786E\u5730\u6D41\u7ECF\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u7C7B\u578B\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u66B4\u9732\u51FA\u5E94\u7528\u7A0B\u5E8F\u7C7B\u578B\u7684\u73B0\u6709\u9519\u8BEF'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "forms v6",
    action: "\u5728 Angular Forms \u4E2D\uFF0C\u5F53\u8C03\u7528 `AbstractControl#markAsPending` \u65F6\uFF0C`AbstractControl#statusChanges` \u73B0\u5728\u4F1A\u53D1\u51FA `PENDING` \u4E8B\u4EF6\u3002\u786E\u4FDD\u5982\u679C\u4F60\u5728\u8C03\u7528 `markAsPending` \u65F6\u8FC7\u6EE4\u6216\u68C0\u67E5 `statusChanges` \u4E8B\u4EF6\uFF0C\u4F60\u8981\u8003\u8651\u5230\u8C03\u7528 `markAsPending` \u65F6\u7684\u65B0\u4E8B\u4EF6\u3002"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: "\u52A8\u753B\u65F6\u5E8F",
    action: "\u5982\u679C\u5728\u7981\u7528\u7684 Zone \u4E2D\u4F7F\u7528 `AnimationEvent` \u7684 `totalTime`\uFF0C\u5B83\u5C06\u4E0D\u518D\u62A5\u544A\u4E3A 0\u3002\u8981\u68C0\u6D4B\u52A8\u753B\u4E8B\u4EF6\u662F\u5426\u62A5\u544A\u4E3A\u7981\u7528\u7684\u52A8\u753B\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 `event.disabled` \u5C5E\u6027\u3002"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Advanced,
    step: "\u8868\u5355\u63A7\u4EF6\u4E0A\u7684 ngModel",
    action: "\u5728 v6 \u4E2D\u5DF2\u5F03\u7528\u5E76\u5728 v7 \u4E2D\u5220\u9664\u4E86\u5BF9\u4F7F\u7528 ngModel \u8F93\u5165\u5C5E\u6027\u548C ngModelChange \u4E8B\u4EF6\u4E0E\u54CD\u5E94\u5F0F\u8868\u5355\u6307\u4EE4\u4E00\u8D77\u4F7F\u7528\u7684\u652F\u6301\u3002"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: "ngModelChange \u987A\u5E8F",
    action: "\u73B0\u5728\uFF0C\u5728\u66F4\u65B0\u63A7\u4EF6\u7684\u503C/\u6709\u6548\u6027\u540E\uFF0C`ngModelChange` \u88AB\u53D1\u51FA\uFF0C\u800C\u4E0D\u662F\u4E4B\u524D\uFF0C\u4EE5\u66F4\u597D\u5730\u5339\u914D\u9884\u671F\u3002\u5982\u679C\u4F60\u4F9D\u8D56\u4E8E\u8FD9\u4E9B\u4E8B\u4EF6\u7684\u987A\u5E8F\uFF0C\u4F60\u9700\u8981\u5F00\u59CB\u5728\u4F60\u7684\u7EC4\u4EF6\u4E2D\u8DDF\u8E2A\u65E7\u503C\u3002"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: "\u66F4\u65B0\u5230 v6 \u7684\u4F9D\u8D56\u9879",
    action: "\u5C06 Angular Material \u66F4\u65B0\u5230\u6700\u65B0\u7248\u672C\u3002<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/material@6`<br/><br/>\u8FD9\u4E5F\u5C06\u81EA\u52A8\u8FC1\u79FB\u5DF2\u5F03\u7528\u7684 API\u3002"
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: "\u66F4\u65B0\u5230 v6 \u7684\u4F9D\u8D56\u9879",
    action: '\u5C06 Angular Material \u66F4\u65B0\u5230\u6700\u65B0\u7248\u672C\u3002<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/material@6"`<br/><br/>\u8FD9\u4E5F\u5C06\u81EA\u52A8\u8FC1\u79FB\u5DF2\u5F03\u7528\u7684 API\u3002'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: "strictPropertyInitializer",
    action: '\u5982\u679C TypeScript \u914D\u7F6E\u4E3A\u4E25\u683C\u6A21\u5F0F\uFF08\u5982\u679C\u4F60\u5728 `tsconfig.json` \u6587\u4EF6\u4E2D\u5C06 `strict` \u8BBE\u7F6E\u4E3A `true`\uFF09\uFF0C\u8BF7\u66F4\u65B0\u4F60\u7684 `tsconfig.json` \u4EE5\u7981\u7528 `strictPropertyInitialization` \u6216\u5C06\u5C5E\u6027\u521D\u59CB\u5316\u4ECE `ngOnInit` \u79FB\u52A8\u5230\u4F60\u7684\u6784\u9020\u51FD\u6570\u3002\u4F60\u53EF\u4EE5\u5728<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization">TypeScript 2.7 \u53D1\u5E03\u8BF4\u660E</a>\u4E2D\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u6B64\u6807\u5FD7\u7684\u4FE1\u606F\u3002'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    step: "\u66F4\u65B0\u5230 RxJS 6",
    action: '\u4F7F\u7528<a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">rxjs-tslint \u81EA\u52A8\u66F4\u65B0\u89C4\u5219</a>\u5220\u9664\u5DF2\u5F03\u7528\u7684 RxJS 5 \u7279\u6027<br/><br/>\u5BF9\u4E8E\u5927\u591A\u6570\u5E94\u7528\u7A0B\u5E8F\uFF0C\u8FD9\u610F\u5473\u7740\u8FD0\u884C\u4EE5\u4E0B\u4E24\u4E2A\u547D\u4EE4\uFF1A<br/><br/>`npx rxjs-tslint`<br/>`rxjs-5-to-6-migrate -p src/tsconfig.app.json`'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Medium,
    step: "\u79FB\u9664 rxjs-compat",
    action: "\u4E00\u65E6\u4F60\u548C\u4F60\u6240\u6709\u7684\u4F9D\u8D56\u9879\u90FD\u5DF2\u66F4\u65B0\u5230 RxJS 6\uFF0C\u8BF7\u79FB\u9664 `rxjs-compat`\u3002"
  },
  {
    possibleIn: 610,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Medium,
    step: "\u4F7F\u7528\u6587\u4EF6\u800C\u4E0D\u662F versionedFiles",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 Angular Service Worker\uFF0C\u8BF7\u5C06\u4EFB\u4F55 `versionedFiles` \u8FC1\u79FB\u5230 `files` \u6570\u7EC4\u4E2D\u3002\u884C\u4E3A\u662F\u4E00\u6837\u7684\u3002"
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    step: "TypeScript 3.1",
    action: 'Angular \u73B0\u5728\u4F7F\u7528 TypeScript 3.1\uFF0C\u8BF7\u9605\u8BFB\u6709\u5173\u4EFB\u4F55\u6F5C\u5728\u7684\u7834\u574F\u6027\u53D8\u5316\uFF1A<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html">TypeScript 3.1 \u53D1\u5E03\u8BF4\u660E</a>'
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    step: "Node 10",
    action: 'Angular \u73B0\u5728\u6DFB\u52A0\u4E86\u5BF9 Node 10 \u7684\u652F\u6301\uFF1A<a href="https://nodejs.org/en/blog/release/v10.0.0/" target="_blank">Node 10 \u53D1\u5E03\u8BF4\u660E</a>'
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "\u66F4\u65B0\u5230 v7",
    action: "\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@7 update @angular/cli@7 @angular/core@7`\u6765\u66F4\u65B0\u6838\u5FC3\u6846\u67B6\u548C CLI \u5230 v7\u3002"
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "\u66F4\u65B0\u5230 v7",
    action: '\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@7 update @angular/cli@7 @angular/core@7"`\u6765\u66F4\u65B0\u6838\u5FC3\u6846\u67B6\u548C CLI \u5230 v7\u3002'
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: "\u66F4\u65B0\u5230 v7 \u7684 Material",
    action: "\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@7 update @angular/material@7`\u6765\u66F4\u65B0 Angular Material \u5230 v7\u3002\u4F60\u5E94\u8BE5\u6D4B\u8BD5\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u662F\u5426\u6709\u5927\u5C0F\u548C\u5E03\u5C40\u7684\u53D8\u5316\u3002"
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: "\u66F4\u65B0\u5230 v7 \u7684 Material",
    action: '\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@7 update @angular/material@7"`\u6765\u66F4\u65B0 Angular Material \u5230 v7\u3002\u4F60\u5E94\u8BE5\u6D4B\u8BD5\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u662F\u5426\u6709\u5927\u5C0F\u548C\u5E03\u5C40\u7684\u53D8\u5316\u3002'
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Medium,
    material: true,
    step: "v7 \u7684 Material \u53D8\u5316",
    action: "\u5982\u679C\u4F60\u4F7F\u7528\u5C4F\u5E55\u622A\u56FE\u6D4B\u8BD5\uFF0C\u4F60\u9700\u8981\u91CD\u65B0\u751F\u6210\u4F60\u7684\u5C4F\u5E55\u622A\u56FE\u9EC4\u91D1\u6587\u4EF6\uFF0C\u56E0\u4E3A\u8BB8\u591A\u6B21\u8981\u7684\u89C6\u89C9\u8C03\u6574\u5DF2\u7ECF\u5B8C\u6210\u3002"
  },
  {
    possibleIn: 700,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v7 \u7684 Material \u5F03\u7528",
    action: "\u505C\u6B62\u4F7F\u7528 `matRippleSpeedFactor` \u548C `baseSpeedFactor` \u6765\u8FDB\u884C\u6D9F\u6F2A\uFF0C\u6539\u7528\u52A8\u753B\u914D\u7F6E\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "\u66F4\u65B0\u5230 v8",
    action: "\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/cli@8 @angular/core@8`\uFF0C\u7136\u540E\u67E5\u770B\u5E76\u63D0\u4EA4\u66F4\u6539\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "\u66F4\u65B0\u5230 v8",
    action: '\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8"`\uFF0C\u7136\u540E\u67E5\u770B\u5E76\u63D0\u4EA4\u66F4\u6539\u3002'
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "\u4F7F\u7528 ::ng-deep \u66FF\u4EE3 /deep/",
    action: "\u5728\u4F60\u7684\u6837\u5F0F\u4E2D\u7528 `::ng-deep` \u66FF\u6362 `/deep/`\uFF0C[\u4E86\u89E3\u66F4\u591A\u5173\u4E8E Angular \u7EC4\u4EF6\u6837\u5F0F\u548C ::ng-deep](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep)\u3002 `/deep/` \u548C `::ng-deep` \u90FD\u5DF2\u5F03\u7528\uFF0C\u4F46\u5728\u5B8C\u5168\u4ECE\u6D4F\u89C8\u5668\u548C\u5DE5\u5177\u4E2D\u79FB\u9664\u5F71\u5B50\u7A7F\u900F\u540E\uFF0C\u4F7F\u7528 `::ng-deep` \u66F4\u53EF\u53D6\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "TypeScript 3.4",
    action: "Angular \u73B0\u5728\u4F7F\u7528 TypeScript 3.4\uFF0C[\u4E86\u89E3\u66F4\u591A\u53EF\u80FD\u7531\u6539\u8FDB\u7684\u7C7B\u578B\u68C0\u67E5\u5F15\u8D77\u7684\u9519\u8BEF](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html)\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "node 10",
    action: '\u786E\u4FDD\u4F60\u6B63\u5728\u4F7F\u7528 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10 \u6216\u66F4\u9AD8\u7248\u672C</a>\u3002'
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "\u5DEE\u5F02\u5316\u52A0\u8F7D",
    action: "CLI \u7684\u6784\u5EFA\u547D\u4EE4\u73B0\u5728\u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\u73B0\u4EE3\u7684 ES2015 \u6784\u5EFA\uFF0C\u5E26\u6709\u6700\u5C0F\u7684 polyfills\uFF0C\u5E76\u4E3A\u65E7\u7248\u6D4F\u89C8\u5668\u521B\u5EFA\u517C\u5BB9\u7684 ES5 \u6784\u5EFA\uFF0C\u5E76\u6839\u636E\u6D4F\u89C8\u5668\u52A0\u8F7D\u9002\u5F53\u7684\u6587\u4EF6\u3002 \u4F60\u53EF\u4EE5\u901A\u8FC7\u5C06 `tsconfig.json` \u4E2D\u7684 `target` \u8BBE\u7F6E\u56DE `es5` \u6765\u9009\u62E9\u9000\u51FA\u6B64\u66F4\u6539\u3002\u5728 [angular.io](https://angular.io/guide/deployment#differential-loading) \u4E0A\u4E86\u89E3\u66F4\u591A\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "CLI \u9065\u6D4B",
    action: "\u4F7F\u7528 CLI \u7684\u65B0\u7248\u672C\u65F6\uFF0C\u4F60\u5C06\u88AB\u8BE2\u95EE\u662F\u5426\u8981\u9009\u62E9\u52A0\u5165\u5171\u4EAB CLI \u4F7F\u7528\u6570\u636E\u3002\u4F60\u4E5F\u53EF\u4EE5\u6DFB\u52A0\u81EA\u5DF1\u7684 Google Analytics \u5E10\u6237\u3002\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u66F4\u597D\u5730\u51B3\u5B9A\u4F18\u5148\u8003\u8651\u54EA\u4E9B CLI \u529F\u80FD\uFF0C\u5E76\u8861\u91CF\u6211\u4EEC\u6539\u8FDB\u7684\u5F71\u54CD\u3002\u5728 [angular.io](https://angular.io/analytics) \u4E0A\u4E86\u89E3\u66F4\u591A\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: "\u9759\u6001\u67E5\u8BE2\u65F6\u673A",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 `ViewChild` \u6216 `ContentChild`\uFF0C\u6211\u4EEC\u6B63\u5728\u66F4\u65B0\u89E3\u6790\u8FD9\u4E9B\u67E5\u8BE2\u7684\u65B9\u5F0F\uFF0C\u4EE5\u7ED9\u5F00\u53D1\u8005\u66F4\u591A\u63A7\u5236\u3002\u4F60\u73B0\u5728\u5FC5\u987B\u6307\u5B9A\u53D8\u66F4\u68C0\u6D4B\u5E94\u8BE5\u5728\u8BBE\u7F6E\u7ED3\u679C\u4E4B\u524D\u8FD0\u884C\u3002\u793A\u4F8B\uFF1A`@ContentChild('foo', {static: false}) foo !: ElementRef;`\u3002 `ng update` \u5C06\u81EA\u52A8\u66F4\u65B0\u4F60\u7684\u67E5\u8BE2\uFF0C\u4F46\u5B83\u4F1A\u503E\u5411\u4E8E\u4F7F\u4F60\u7684\u67E5\u8BE2\u4E3A `static`\uFF0C\u4EE5\u4FDD\u8BC1\u517C\u5BB9\u6027\u3002\u5728 [angular.io](https://angular.io/guide/static-query-migration) \u4E0A\u4E86\u89E3\u66F4\u591A\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: "\u66F4\u65B0\u5230 v8 \u7684 Material",
    action: "\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/material@8`\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: "\u66F4\u65B0\u5230 v8 \u7684 Material",
    action: '\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/material@8"`\u3002'
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "\u6DF1\u5EA6\u5BFC\u5165",
    action: "\u4E0D\u8981\u76F4\u63A5\u4ECE `@angular/material` \u5BFC\u5165\uFF0C\u800C\u662F\u4ECE\u7279\u5B9A\u7EC4\u4EF6\u8FDB\u884C\u6DF1\u5EA6\u5BFC\u5165\u3002\u4F8B\u5982 `@angular/material/button`\u3002`ng update` \u5C06\u4E3A\u4F60\u81EA\u52A8\u5B8C\u6210\u6B64\u64CD\u4F5C\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "\u65B0\u7684 loadChildren",
    action: "\u5BF9\u4E8E\u901A\u8FC7\u8DEF\u7531\u5668\u8FDB\u884C\u7684\u60F0\u6027\u52A0\u8F7D\u7684\u6A21\u5757\uFF0C\u8BF7\u786E\u4FDD\u4F60\u6B63\u5728[\u4F7F\u7528\u52A8\u6001\u5BFC\u5165](https://angular.io/guide/deprecations#loadchildren-string-syntax)\u3002\u5728 v9 \u4E2D\uFF0C\u901A\u8FC7\u5B57\u7B26\u4E32\u8FDB\u884C\u5BFC\u5165\u5DF2\u88AB\u79FB\u9664\u3002`ng update` \u5E94\u8BE5\u4F1A\u81EA\u52A8\u5904\u7406\u8FD9\u4E2A\u3002\u5728 [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax) \u4E0A\u4E86\u89E3\u66F4\u591A\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "\u5E73\u53F0\u5E9F\u5F03",
    action: "\u6211\u4EEC\u6B63\u5728\u5E9F\u5F03\u5BF9 `@angular/platform-webworker` \u7684\u652F\u6301\uFF0C\u56E0\u4E3A\u5B83\u4E0E CLI \u4E0D\u517C\u5BB9\u3002\u5728 Web Worker \u4E2D\u8FD0\u884C Angular \u7684\u6E32\u67D3\u67B6\u6784\u4E0D\u7B26\u5408\u5F00\u53D1\u8005\u7684\u9700\u6C42\u3002\u4F60\u4ECD\u7136\u53EF\u4EE5\u5728 Angular \u4E2D\u4F7F\u7528 Web Worker\u3002\u5728\u6211\u4EEC\u7684 [Web Worker \u6307\u5357](https://v9.angular.io/guide/web-worker) \u4E2D\u4E86\u89E3\u66F4\u591A\u3002\u5982\u679C\u4F60\u6709\u9700\u8981\u8FD9\u65B9\u9762\u7684\u7528\u4F8B\uFF0C\u8BF7\u901A\u8FC7 devrel@angular.io \u4E0E\u6211\u4EEC\u8054\u7CFB\uFF01"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "node-sass",
    action: "\u6211\u4EEC\u5DF2\u7ECF\u4ECE\u672C\u5730 Sass \u7F16\u8BD1\u5668\u5207\u6362\u5230 JavaScript \u7F16\u8BD1\u5668\u3002\u8981\u5207\u6362\u56DE\u672C\u5730\u7248\u672C\uFF0C\u8BF7\u5C06\u5176\u5B89\u88C5\u4E3A devDependency\uFF1A`npm install node-sass --save-dev`\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "schematics \u5F02\u6B65",
    action: "\u5982\u679C\u4F60\u6B63\u5728\u6784\u5EFA\u81EA\u5DF1\u7684 Schematics\uFF0C\u5B83\u4EEC\u4E4B\u524D*\u53EF\u80FD*\u662F\u5F02\u6B65\u7684\u3002\u4ECE 8.0 \u5F00\u59CB\uFF0C\u6240\u6709\u7684 Schematics \u90FD\u5C06\u662F\u5F02\u6B65\u7684\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "node 10.13",
    action: '\u786E\u4FDD\u4F60\u6B63\u5728\u4F7F\u7528 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10.13 \u6216\u66F4\u9AD8\u7248\u672C</a>\u3002'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "\u66F4\u65B0\u5230 CLI v8 \u6700\u65B0\u7248\u672C",
    action: "\u5728\u4F60\u7684\u5DE5\u4F5C\u7A7A\u95F4\u76EE\u5F55\u4E2D\u8FD0\u884C `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/core@8 @angular/cli@8`\uFF0C\u4EE5\u66F4\u65B0\u5230\u6700\u65B0\u7684 8.x \u7248\u672C\u7684 `@angular/core` \u548C `@angular/cli` \u5E76\u63D0\u4EA4\u8FD9\u4E9B\u66F4\u6539\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "\u66F4\u65B0\u5230 CLI v8 \u6700\u65B0\u7248\u672C",
    action: '\u5728\u4F60\u7684\u5DE5\u4F5C\u7A7A\u95F4\u76EE\u5F55\u4E2D\u8FD0\u884C `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8`\uFF0C\u4EE5\u66F4\u65B0\u5230\u6700\u65B0\u7684 8.x \u7248\u672C\u7684 `@angular/core` \u548C `@angular/cli` \u5E76\u63D0\u4EA4\u8FD9\u4E9B\u66F4\u6539\u3002'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: "\u521B\u5EFA\u63D0\u4EA4",
    action: "\u4F60\u53EF\u4EE5\u9009\u62E9\u5411 [ng update](https://angular.io/cli/update) \u547D\u4EE4\u4F20\u9012 `--create-commits`\uFF08\u6216 `-C`\uFF09\u6807\u5FD7\uFF0C\u4EE5\u6BCF\u4E2A\u72EC\u7ACB\u8FC1\u79FB\u521B\u5EFA\u4E00\u4E2A git \u63D0\u4EA4\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: "ng update v9",
    action: "\u8FD0\u884C `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @angular/core@9 @angular/cli@9`\uFF0C\u5E94\u8BE5\u5C06\u4F60\u5347\u7EA7\u5230 Angular \u7684 9 \u7248\u672C\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: "ng update v9",
    action: '\u8FD0\u884C `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/cli@9 @angular/core@9"`\uFF0C\u5E94\u8BE5\u5C06\u4F60\u5347\u7EA7\u5230 Angular \u7684 9 \u7248\u672C\u3002'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "typescript 3.8",
    action: "\u4F60\u7684\u9879\u76EE\u73B0\u5728\u5DF2\u66F4\u65B0\u5230 TypeScript 3.8\uFF0C\u8BF7\u9605\u8BFB\u6709\u5173\u65B0\u7F16\u8BD1\u5668\u68C0\u67E5\u548C\u53EF\u80FD\u9700\u8981\u4FEE\u590D\u4EE3\u7801\u4E2D\u95EE\u9898\u7684\u9519\u8BEF\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u53EF\u5728 [TypeScript 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) \u6216 [TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html) \u516C\u544A\u4E2D\u4E86\u89E3\u66F4\u591A\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: "\u66F4\u65B0 @angular/material",
    action: "\u8FD0\u884C `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @angular/material@9`\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: "\u66F4\u65B0 @angular/material",
    action: '\u8FD0\u884C `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/material@9"`\u3002'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    windows: false,
    step: "\u66F4\u65B0 @nguniversal/hapi-engine",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 Angular Universal\uFF0C\u8BF7\u8FD0\u884C `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @nguniversal/hapi-engine@9` \u6216 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @nguniversal/express-engine@9`\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u4F60\u4F7F\u7528\u7684\u5F15\u64CE\u3002\u5982\u679C\u4F60\u7684\u4EFB\u4F55\u7B2C\u4E09\u65B9\u4F9D\u8D56\u9879\u672A\u66F4\u65B0\u5176\u5BF9\u7B49\u4F9D\u8D56\u9879\u7684 Angular \u7248\u672C\uFF0C\u5219\u6B64\u6B65\u9AA4\u53EF\u80FD\u9700\u8981 `--force` \u6807\u5FD7\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    windows: true,
    step: "\u66F4\u65B0 @nguniversal/hapi-engine",
    action: '\u5982\u679C\u4F60\u4F7F\u7528 Angular Universal\uFF0C\u8BF7\u8FD0\u884C `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @nguniversal/hapi-engine@9"` \u6216 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @nguniversal/express-engine@9"`\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u4F60\u4F7F\u7528\u7684\u5F15\u64CE\u3002\u5982\u679C\u4F60\u7684\u4EFB\u4F55\u7B2C\u4E09\u65B9\u4F9D\u8D56\u9879\u672A\u66F4\u65B0\u5176\u5BF9\u7B49\u4F9D\u8D56\u9879\u7684 Angular \u7248\u672C\uFF0C\u5219\u6B64\u6B65\u9AA4\u53EF\u80FD\u9700\u8981 `--force` \u6807\u5FD7\u3002'
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "\u66F4\u65B0\u4F9D\u8D56\u9879",
    action: "\u5982\u679C\u4F60\u7684\u9879\u76EE\u4F9D\u8D56\u4E8E\u5176\u4ED6 Angular \u5E93\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F60\u8003\u8651\u66F4\u65B0\u5230\u5B83\u4EEC\u7684\u6700\u65B0\u7248\u672C\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6B64\u66F4\u65B0\u53EF\u80FD\u662F\u5FC5\u9700\u7684\uFF0C\u4EE5\u89E3\u51B3 API \u4E0D\u517C\u5BB9\u6027\u3002\u67E5\u9605 `ng update` \u6216 `npm outdated` \u4EE5\u4E86\u89E3\u4F60\u8FC7\u65F6\u7684\u5E93\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: "\u66F4\u65B0 Ivy",
    action: "\u5728\u5347\u7EA7\u5230 9 \u7248\u672C\u671F\u95F4\uFF0C\u901A\u8FC7\u4EE3\u7801\u8FC1\u79FB\u5FC5\u8981\u5730\u8F6C\u6362\u4E86\u4F60\u7684\u9879\u76EE\uFF0C\u4EE5\u4ECE\u4EE3\u7801\u5E93\u4E2D\u79FB\u9664\u4EFB\u4F55\u4E0D\u517C\u5BB9\u6216\u5DF2\u5E9F\u5F03\u7684 API \u8C03\u7528\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u67E5\u770B\u8FD9\u4E9B\u66F4\u6539\uFF0C\u5E76\u67E5\u9605 [\u5347\u7EA7\u5230 9 \u7248\u672C\u6307\u5357](https://v9.angular.io/guide/updating-to-version-9) \u4EE5\u4E86\u89E3\u66F4\u591A\u8BE6\u60C5\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: "\u66F4\u65B0\u6837\u5F0F",
    action: "\u4EE5\u524D\uFF0C\u7ED1\u5B9A\u7684 CSS \u6837\u5F0F\u548C\u7C7B\u662F\u91C7\u7528\u201C\u6700\u540E\u4E00\u6B21\u66F4\u6539\u83B7\u80DC\u201D\u7684\u7B56\u7565\u5E94\u7528\u7684\uFF0C\u4F46\u73B0\u5728\u9075\u5FAA\u4E00\u4E2A\u5B9A\u4E49\u597D\u7684\u4F18\u5148\u7EA7\u3002\u4E86\u89E3\u66F4\u591A\u5173\u4E8E [\u6837\u5F0F\u4F18\u5148\u7EA7](https://angular.io/guide/attribute-binding#styling-precedence)\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "ModuleWithProviders",
    action: "\u5982\u679C\u4F60\u662F\u5E93\u7684\u4F5C\u8005\uFF0C\u5E76\u4E14\u6709\u4E00\u4E2A\u8FD4\u56DE `ModuleWithProviders` \u7684\u65B9\u6CD5\uFF08\u901A\u5E38\u662F\u901A\u8FC7\u540D\u4E3A `forRoot()` \u7684\u65B9\u6CD5\uFF09\uFF0C\u5219\u9700\u8981\u6307\u5B9A\u6CDB\u578B\u7C7B\u578B\u3002\u4E86\u89E3\u66F4\u591A [angular.io](https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic)"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "wtf",
    action: "\u5728 Angular 8 \u4E2D\uFF0C\u652F\u6301 Web \u8FFD\u8E2A\u6846\u67B6\u5DF2\u5E9F\u5F03\u3002\u4F60\u5E94\u8BE5\u505C\u6B62\u4F7F\u7528\u4EFB\u4F55 `wtf*` API\u3002\u4E3A\u4E86\u8FDB\u884C\u6027\u80FD\u8FFD\u8E2A\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 [\u6D4F\u89C8\u5668\u6027\u80FD\u5DE5\u5177](https://developers.google.com/web/tools/lighthouse/audits/user-timing)\u3002"
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: "es5 \u6D4F\u89C8\u5668",
    action: "\u5728\u4F60\u7684 `angular.json` \u4E2D\u5220\u9664\u4EFB\u4F55 `es5BrowserSupport` \u6807\u5FD7\uFF0C\u5E76\u5C06\u4F60\u7684 `tsconfig.json` \u4E2D\u7684 `target` \u8BBE\u7F6E\u4E3A `es2015`\u3002Angular \u73B0\u5728\u4F7F\u7528\u4F60\u7684 browserslist \u6765\u786E\u5B9A\u662F\u5426\u9700\u8981 ES5 \u6784\u5EFA\u3002`ng update` \u5C06\u81EA\u52A8\u8FC1\u79FB\u4F60\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: "ngForm \u9009\u62E9\u5668",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 `ngForm` \u5143\u7D20\u9009\u62E9\u5668\u521B\u5EFA Angular \u8868\u5355\uFF0C\u4F60\u5E94\u8BE5\u6539\u7528 `ng-form`\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "typings \u7F16\u8BD1",
    action: "\u6211\u4EEC\u5DF2\u66F4\u65B0 `tsconfig.app.json` \u4EE5\u9650\u5236\u7F16\u8BD1\u7684\u6587\u4EF6\u3002\u5982\u679C\u4F60\u4F9D\u8D56\u4E8E\u5176\u4ED6\u6587\u4EF6\u88AB\u5305\u542B\u5728\u7F16\u8BD1\u4E2D\uFF0C\u6BD4\u5982\u4E00\u4E2A `typings.d.ts` \u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u5C06\u5176\u6DFB\u52A0\u5230\u7F16\u8BD1\u4E2D\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "\u8C03\u8BD5",
    action: "\u968F\u7740 Angular 9\uFF0CIvy \u73B0\u5728\u662F\u9ED8\u8BA4\u7684\u6E32\u67D3\u5F15\u64CE\uFF0C\u9488\u5BF9\u53EF\u80FD\u51FA\u73B0\u7684\u4EFB\u4F55\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u9605\u8BFB [Ivy \u517C\u5BB9\u6027\u6307\u5357](https://v9.angular.io/guide/ivy-compatibility)\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: "express-universal-server",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 Angular Universal \u4E0E `@nguniversal/express-engine` \u6216 `@nguniversal/hapi-engine`\uFF0C\u5C06\u4F1A\u521B\u5EFA\u51E0\u4E2A\u5907\u4EFD\u6587\u4EF6\u3002\u5176\u4E2D\u4E00\u4E2A\u662F\u7528\u4E8E `server.ts` \u7684\u3002\u5982\u679C\u6B64\u6587\u4EF6\u4E0E\u9ED8\u8BA4\u6587\u4EF6\u4E0D\u540C\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u624B\u52A8\u5C06\u4E00\u4E9B\u66F4\u6539\u4ECE `server.ts.bak` \u590D\u5236\u5230 `server.ts`\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "ivy i18n",
    action: "Angular 9 \u5F15\u5165\u4E86\u4E00\u4E2A\u5168\u5C40\u7684 `$localize()` \u51FD\u6570\uFF0C\u5982\u679C\u4F60\u4F9D\u8D56\u4E8E Angular \u7684\u56FD\u9645\u5316\uFF08i18n\uFF09\uFF0C\u5219\u9700\u8981\u52A0\u8F7D\u5B83\u3002\u8FD0\u884C `ng add @angular/localize` \u6765\u6DFB\u52A0\u5FC5\u8981\u7684\u5305\u548C\u4EE3\u7801\u4FEE\u6539\u3002\u67E5\u9605 [$localize \u5168\u5C40\u5BFC\u5165\u8FC1\u79FB\u6307\u5357](https://v9.angular.io/guide/migration-localize) \u4EE5\u4E86\u89E3\u66F4\u591A\u53D8\u5316\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "entryComponents",
    action: "\u5728\u4F60\u7684\u5E94\u7528\u9879\u76EE\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5220\u9664 `entryComponents` NgModules \u548C\u4EFB\u4F55\u4F7F\u7528 `ANALYZE_FOR_ENTRY_COMPONENTS` \u7684\u5730\u65B9\u3002\u5B83\u4EEC\u5728 Ivy \u7F16\u8BD1\u5668\u548C\u8FD0\u884C\u65F6\u4E2D\u4E0D\u518D\u9700\u8981\u3002\u5982\u679C\u6784\u5EFA\u7684\u662F\u4E00\u4E2A\u5C06\u88AB View Engine \u5E94\u7528\u7A0B\u5E8F\u6D88\u8D39\u7684\u5E93\uFF0C\u53EF\u80FD\u9700\u8981\u4FDD\u7559\u8FD9\u4E9B\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "testbed-get",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 `TestBed.get`\uFF0C\u4F60\u5E94\u8BE5\u6539\u7528 `TestBed.inject`\u3002\u8FD9\u4E2A\u65B0\u65B9\u6CD5\u5177\u6709\u76F8\u540C\u7684\u884C\u4E3A\uFF0C\u4F46\u662F\u7C7B\u578B\u5B89\u5168\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "$localize",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 [Angular \u7684\u56FD\u9645\u5316\u652F\u6301](http://angular.io/guide/i18n)\uFF0C\u4F60\u5C06\u9700\u8981\u5F00\u59CB\u4F7F\u7528 `@angular/localize`\u3002\u4E86\u89E3\u66F4\u591A\u5173\u4E8E [$localize \u5168\u5C40\u5BFC\u5165\u8FC1\u79FB](https://v9.angular.io/guide/migration-localize)\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "v10 NodeJS 12",
    action: '\u786E\u4FDD\u4F60\u6B63\u5728\u4F7F\u7528 <a href="https://nodejs.org/dist/latest-v12.x/" target="_blank">Node 12 \u6216\u66F4\u9AD8\u7248\u672C</a>\u3002'
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "ng update v10",
    action: "\u8FD0\u884C `npx @angular/cli@10 update @angular/core@10 @angular/cli@10`\uFF0C\u8FD9\u5C06\u4F7F\u4F60\u7684 Angular \u7248\u672C\u5347\u7EA7\u5230 10\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "\u66F4\u65B0 @angular/material",
    action: "\u8FD0\u884C `npx @angular/cli@10 update @angular/material@10`\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "browserlist",
    action: "\u65B0\u9879\u76EE\u4F7F\u7528\u6587\u4EF6\u540D `.browserslistrc`\uFF0C\u800C\u4E0D\u662F `browserslist`\u3002`ng update` \u5C06\u81EA\u52A8\u8FC1\u79FB\u4F60\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "v10-versions",
    action: "Angular \u73B0\u5728\u9700\u8981 `tslint` v6\u3001`tslib` v2 \u548C [TypeScript 3.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html)\u3002`ng update` \u5C06\u81EA\u52A8\u8FC1\u79FB\u4F60\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "styleext",
    action: "\u505C\u6B62\u5728\u4F60\u7684 Angular schematics \u4E2D\u4F7F\u7528 `styleext` \u6216 `spec`\u3002`ng update` \u5C06\u81EA\u52A8\u8FC1\u79FB\u4F60\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "classes-without-decorators",
    action: "\u5728 10 \u7248\u672C\u4E2D\uFF0C\u4E0D\u5E26\u6709 Angular \u88C5\u9970\u5668\u7684\u7C7B\u4E0D\u518D\u53D7\u652F\u6301\u3002[\u4E86\u89E3\u66F4\u591A](https://v10.angular.io/guide/migration-undecorated-classes)\u3002`ng update` \u5C06\u81EA\u52A8\u8FC1\u79FB\u4F60\u3002"
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "injectable-definitions",
    action: "\u4ECE Angular 9 \u5F00\u59CB\uFF0C\u5BF9\u4E8E DI\uFF0C@Injectable \u88C5\u9970\u5668\u7684\u6267\u884C\u66F4\u52A0\u4E25\u683C\uFF0C\u4E0D\u5B8C\u6574\u7684\u63D0\u4F9B\u7A0B\u5E8F\u5B9A\u4E49\u7684\u884C\u4E3A\u4F1A\u6709\u6240\u4E0D\u540C\u3002[\u4E86\u89E3\u66F4\u591A](https://v9.angular.io/guide/migration-injectable)\u3002`ng update` \u5C06\u81EA\u52A8\u8FC1\u79FB\u4F60\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "closure-jsdoc-comments",
    action: "Angular \u7684 NPM \u5305\u4E0D\u518D\u5305\u542B jsdoc \u6CE8\u91CA\uFF0C\u8FD9\u5728\u4E0E\u95ED\u5305\u7F16\u8BD1\u5668\u7684\u4F7F\u7528\u4E2D\u662F\u5FC5\u9700\u7684\uFF08\u6781\u5176\u7F55\u89C1\uFF09\u3002\u6B64\u652F\u6301\u662F\u5B9E\u9A8C\u6027\u7684\uFF0C\u5E76\u4E14\u53EA\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\u8D77\u4F5C\u7528\u3002\u5F88\u5FEB\u5C06\u5BA3\u5E03\u66FF\u4EE3\u63A8\u8350\u8DEF\u5F84\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "forms-number-input",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 Angular \u8868\u5355\uFF0C`number` \u7C7B\u578B\u7684\u8F93\u5165\u4E0D\u518D\u76D1\u542C [change \u4E8B\u4EF6](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)\uFF08\u8FD9\u4E9B\u4E8B\u4EF6\u4E0D\u4E00\u5B9A\u4F1A\u5728\u6BCF\u6B21\u66F4\u6539\u503C\u65F6\u89E6\u53D1\uFF09\uFF0C\u800C\u662F\u76D1\u542C [input \u4E8B\u4EF6](https://developer.mozilla.org/docs/Web/API/HTMLElement/input_event)\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "forms-length-input",
    action: "\u5BF9\u4E8E Angular \u8868\u5355\u9A8C\u8BC1\uFF0C`minLength` \u548C `maxLength` \u9A8C\u8BC1\u5668\u73B0\u5728\u9A8C\u8BC1\u8868\u5355\u63A7\u4EF6\u7684\u503C\u662F\u5426\u5177\u6709\u6570\u5B57\u957F\u5EA6\u5C5E\u6027\uFF0C\u5E76\u4E14\u4EC5\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u9A8C\u8BC1\u957F\u5EA6\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "esm5-bundles",
    action: "Angular \u5305\u683C\u5F0F\u5DF2\u66F4\u65B0\uFF0C\u5220\u9664\u4E86 `esm5` \u548C `fesm5` \u683C\u5F0F\u3002\u8FD9\u4E9B\u4E0D\u518D\u5206\u53D1\u5728\u6211\u4EEC\u7684 npm \u5305\u4E2D\u3002\u5982\u679C\u4F60\u4E0D\u4F7F\u7528 CLI\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u81EA\u884C\u5C06 Angular \u4EE3\u7801\u964D\u7EA7\u5230 ES5\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "console-errors",
    action: "\u6709\u5173\u672A\u77E5\u5143\u7D20\u7684\u8B66\u544A\u73B0\u5728\u8BB0\u5F55\u4E3A\u9519\u8BEF\u3002\u8FD9\u4E0D\u4F1A\u7834\u574F\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F46\u53EF\u80FD\u4F1A\u4F7F\u671F\u671B `console.error` \u4E0D\u8BB0\u5F55\u4EFB\u4F55\u5185\u5BB9\u7684\u5DE5\u5177\u53D7\u5230\u5F71\u54CD\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "router-resolver-empty",
    action: "\u4EFB\u4F55\u8FD4\u56DE `EMPTY` \u7684\u89E3\u6790\u5668\u5C06\u53D6\u6D88\u5BFC\u822A\u3002\u5982\u679C\u4F60\u60F3\u8981\u5141\u8BB8\u5BFC\u822A\u7EE7\u7EED\uFF0C\u4F60\u9700\u8981\u66F4\u65B0\u89E3\u6790\u5668\u4EE5\u53D1\u51FA\u4E00\u4E9B\u503C\uFF08\u4F8B\u5982 `defaultIfEmpty(...)`\u3001`of(...)` \u7B49\uFF09\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "sw-vary-headers",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 Angular \u670D\u52A1\u5DE5\u4F5C\u5668\u5E76\u4F9D\u8D56\u4E8E\u5E26\u6709 [Vary](https://developer.mozilla.org/docs/Web/HTTP/Headers/Vary) \u6807\u5934\u7684\u8D44\u6E90\uFF0C\u8FD9\u4E9B\u6807\u5934\u73B0\u5728\u88AB\u5FFD\u7565\uFF0C\u4EE5\u907F\u514D\u5728\u5404\u4E2A\u6D4F\u89C8\u5668\u4E4B\u95F4\u51FA\u73B0\u4E0D\u53EF\u9884\u6D4B\u7684\u884C\u4E3A\u3002\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C[\u914D\u7F6E](https://angular.io/guide/service-worker-config) \u4F60\u7684\u670D\u52A1\u5DE5\u4F5C\u5668\u4EE5\u907F\u514D\u7F13\u5B58\u8FD9\u4E9B\u8D44\u6E90\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Medium,
    step: "expression-changed-after-checked-new",
    action: "\u5F53\u4F7F\u7528 `async` \u7BA1\u9053\u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u770B\u5230\u4E4B\u524D\u672A\u68C0\u6D4B\u5230\u7684 `ExpressionChangedAfterItHasBeenChecked` \u9519\u8BEF\u3002\u4EE5\u524D\u7684\u9519\u8BEF\u53EF\u80FD\u672A\u88AB\u68C0\u6D4B\u5230\uFF0C\u56E0\u4E3A\u4E24\u4E2A `WrappedValues` \u5728\u68C0\u67E5\u76EE\u7684\u4E0A\u88AB\u8BA4\u4E3A\u662F\u201C\u76F8\u7B49\u7684\u201D\uFF0C\u5373\u4F7F\u5B83\u4EEC\u5404\u81EA\u7684\u672A\u5305\u88C5\u503C\u4E0D\u76F8\u7B49\u3002\u5728\u7248\u672C 10 \u4E2D\uFF0C`WrappedValue` \u5DF2\u88AB\u79FB\u9664\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "property-binding-change-detection",
    action: "\u5982\u679C\u4F60\u6709\u4E00\u4E2A\u5C5E\u6027\u7ED1\u5B9A\uFF0C\u4F8B\u5982 `[val]=(observable | async).someProperty`\uFF0C\u5982\u679C `someProperty` \u7684\u503C\u4E0E\u4E4B\u524D\u7684\u53D1\u5C04\u503C\u76F8\u540C\uFF0C\u8FD9\u5C06\u4E0D\u518D\u89E6\u53D1\u53D8\u66F4\u68C0\u6D4B\u3002\u5982\u679C\u4F60\u4F9D\u8D56\u4E8E\u6B64\u884C\u4E3A\uFF0C\u8981\u4E48\u624B\u52A8\u8BA2\u9605\u5E76\u6839\u636E\u9700\u8981\u8C03\u7528 `markForCheck`\uFF0C\u8981\u4E48\u66F4\u65B0\u7ED1\u5B9A\u4EE5\u786E\u4FDD\u5F15\u7528\u66F4\u6539\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "day-periods-crossing-midnight",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 `formatDate()` \u6216 `DatePipe`\uFF0C\u5E76\u4E14\u4F7F\u7528\u4E86\u4EFB\u4F55 `b` \u6216 `B` \u683C\u5F0F\u4EE3\u7801\uFF0C\u903B\u8F91\u5DF2\u66F4\u65B0\uFF0C\u4F7F\u5176\u5339\u914D\u8DE8\u8D8A\u5348\u591C\u7684\u4E00\u5929\u65F6\u6BB5\u5185\u7684\u65F6\u95F4\uFF0C\u56E0\u6B64\u73B0\u5728\u5C06\u6E32\u67D3\u6B63\u786E\u7684\u8F93\u51FA\uFF0C\u4F8B\u5982\u5728\u82F1\u6587\u73AF\u5883\u4E2D\u7684 `night`\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Advanced,
    step: "urlmatcher-null",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 `UrlMatcher`\uFF0C\u73B0\u5728\u5176\u7C7B\u578B\u53CD\u6620\u4E86\u5B83\u53EF\u4EE5\u59CB\u7EC8\u8FD4\u56DE `null`\u3002"
  },
  {
    possibleIn: 1e3,
    necessaryAsOf: 1e3,
    level: ApplicationComplexity.Basic,
    step: "v10-more-details",
    action: "\u6709\u5173\u505C\u7528\u3001\u81EA\u52A8\u8FC1\u79FB\u548C\u66F4\u6539\u7684\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u8BBF\u95EE [guide angular.io](https://v10.angular.io/guide/updating-to-version-10)"
  },
  {
    possibleIn: 1020,
    necessaryAsOf: 1020,
    level: ApplicationComplexity.Medium,
    step: "universal-baseurl",
    action: "\u5BF9\u4E8E Angular Universal \u7528\u6237\uFF0C\u5982\u679C\u4F60\u4F7F\u7528 `useAbsoluteUrl` \u6765\u8BBE\u7F6E `platform-server`\uFF0C\u73B0\u5728\u8FD8\u9700\u8981\u6307\u5B9A `baseUrl`\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    step: "v11 ng update",
    action: "\u8FD0\u884C `ng update @angular/core@11 @angular/cli@11` \u5C06\u628A\u4F60\u7684 Angular \u7248\u672C\u5347\u7EA7\u5230 11\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "\u8FD0\u884C `ng update @angular/material@11`\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    step: "v11 versions",
    action: "Angular \u73B0\u5728\u9700\u8981 [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/)\u3002`ng update` \u5C06\u81EA\u52A8\u8FC1\u79FB\u4F60\u7684\u9879\u76EE\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    step: "v11 browser support",
    action: "\u4E0D\u518D\u652F\u6301 IE9\u3001IE10 \u548C IE \u79FB\u52A8\u7248\u3002\u8FD9\u5728 [v10 \u66F4\u65B0](http://blog.angular.dev/version-10-of-angular-now-available-78960babd41#c357) \u4E2D\u5DF2\u7ECF\u5BA3\u5E03\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "webpack5 optin",
    action: '\u4F60\u73B0\u5728\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 webpack 5\uFF0C\u4F7F\u7528 Yarn \u5E76\u5C06 `"resolutions": {"webpack": "^5.0.0"}` \u6DFB\u52A0\u5230\u4F60\u7684 `package.json`\u3002'
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "ng new strict prompt",
    action: "\u5F53\u751F\u6210\u65B0\u9879\u76EE\u65F6\uFF0C\u4F60\u5C06\u88AB\u8BE2\u95EE\u662F\u5426\u8981\u542F\u7528\u4E25\u683C\u6A21\u5F0F\u3002\u8FD9\u5C06\u4E3A TypeScript \u548C Angular \u7F16\u8BD1\u5668\u914D\u7F6E\u66F4\u4E25\u683C\u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u5E76\u9ED8\u8BA4\u5E94\u7528\u66F4\u5C0F\u7684\u6346\u7ED1\u9884\u7B97\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 `--strict=true` \u6216 `--strict=false` \u6765\u8DF3\u8FC7\u63D0\u793A\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 router relativeLinkResolution",
    action: "\u5982\u679C\u4F60\u4F7F\u7528\u8DEF\u7531\u5668\uFF0C`relativeLinkResolution` \u7684\u9ED8\u8BA4\u503C\u4ECE `legacy` \u6539\u4E3A `corrected`\u3002\u5982\u679C\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4EE5\u524D\u4F7F\u7528\u9ED8\u8BA4\u503C\u800C\u672A\u5728 `ExtraOptions` \u4E2D\u6307\u5B9A\u503C\uFF0C\u5E76\u4E14\u5728\u4ECE\u7A7A\u8DEF\u5F84\u8DEF\u7531\u7684\u5B50\u8DEF\u7531\u5BFC\u822A\u65F6\u4F7F\u7528\u76F8\u5BF9\u94FE\u63A5\uFF0C\u4F60\u9700\u8981\u66F4\u65B0\u4F60\u7684 `RouterModule` \u914D\u7F6E\uFF0C\u660E\u786E\u4E3A `relativeLinkResolution` \u6307\u5B9A `legacy`\u3002\u53C2\u89C1 [\u6587\u6863](https://v11.angular.io/api/router/ExtraOptions#relativeLinkResolution) \u4EE5\u83B7\u53D6\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 router initialNavigation",
    action: "\u5728 Angular \u8DEF\u7531\u5668\u4E2D\uFF0Cv4 \u4E2D\u5DF2\u5F03\u7528\u7684 `initialNavigation` \u9009\u9879\u5DF2\u88AB\u79FB\u9664\u3002\u5982\u679C\u4F60\u4EE5\u524D\u4F7F\u7528\u4E86 `enabled` \u6216 `true`\uFF0C\u73B0\u5728\u8BF7\u9009\u62E9 `enabledNonBlocking` \u6216 `enabledBlocking`\u3002\u5982\u679C\u4F60\u4EE5\u524D\u4F7F\u7528\u4E86 `false` \u6216 `legacy_disabled`\uFF0C\u73B0\u5728\u4F7F\u7528 `disabled`\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "routerlink preserveQueryParams",
    action: '\u5728 Angular \u8DEF\u7531\u5668\u7684 `routerLink` \u4E2D\uFF0C\u5DF2\u5220\u9664\u4E86 `preserveQueryParams`\uFF0C\u8BF7\u4F7F\u7528 `queryParamsHandling="preserve"`\u3002'
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "routerlink queryParams typing",
    action: "\u5982\u679C\u4F60\u6B63\u5728\u8BBF\u95EE `routerLink` \u7684 `queryParams`\u3001`fragment` \u6216 `queryParamsHandling` \u503C\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u653E\u5BBD\u7C7B\u578B\u4EE5\u63A5\u53D7 `undefined` \u548C `null`\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "viewencapsulation native removed",
    action: "\u7EC4\u4EF6\u89C6\u56FE\u5C01\u88C5\u9009\u9879 `ViewEncapsulation.Native` \u5DF2\u88AB\u79FB\u9664\u3002\u8BF7\u4F7F\u7528 `ViewEncapsulation.ShadowDom`\u3002`ng update` \u5C06\u81EA\u52A8\u8FC1\u79FB\u4F60\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "ICU expressions typechecked",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 i18n\uFF0C\u5728 International Components for Unicode (ICUs) \u8868\u8FBE\u5F0F\u4E2D\u7684\u8868\u8FBE\u5F0F\u73B0\u5728\u518D\u6B21\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u3002\u5982\u679C\u5728 ICU \u4E2D\u7684\u8868\u8FBE\u5F0F\u4E2D\u53D1\u73B0\u9519\u8BEF\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u5931\u8D25\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "forms validators asyncValidators typing",
    action: "\u5728 `@angular/forms` \u5305\u4E2D\u7684\u6307\u4EE4\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u9884\u671F\u7684 `validators` \u548C `asyncValidators` \u53C2\u6570\u7684\u7C7B\u578B\u66FE\u7ECF\u662F `any[]`\u3002\u73B0\u5728\u8FD9\u4E9B\u53C2\u6570\u5DF2\u7ECF\u88AB\u6B63\u786E\u5730\u7C7B\u578B\u5316\uFF0C\u56E0\u6B64\u5982\u679C\u4F60\u7684\u4EE3\u7801\u4F9D\u8D56\u4E8E\u8868\u5355\u6307\u4EE4\u6784\u9020\u51FD\u6570\u7C7B\u578B\uFF0C\u53EF\u80FD\u9700\u8981\u4E00\u4E9B\u66F4\u65B0\u6765\u63D0\u9AD8\u7C7B\u578B\u5B89\u5168\u6027\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "forms AbstractFormControl",
    action: "\u5982\u679C\u4F60\u4F7F\u7528 Angular Forms\uFF0C`AbstractFormControl.parent` \u7684\u7C7B\u578B\u73B0\u5728\u5305\u62EC null\u3002`ng update` \u5C06\u81EA\u52A8\u8FC1\u79FB\u4F60\uFF0C\u4F46\u5728\u4E00\u4E2A\u4E0D\u592A\u53EF\u80FD\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4F60\u7684\u4EE3\u7801\u4F7F\u7528\u4E25\u683C\u76F8\u7B49\u5C06\u7236\u7EA7\u4E0E undefined \u8FDB\u884C\u6BD4\u8F83\uFF0C\u4F60\u9700\u8981\u6539\u4E3A\u4F7F\u7528 `=== null`\uFF0C\u56E0\u4E3A\u7236\u7EA7\u73B0\u5728\u660E\u786E\u521D\u59CB\u5316\u4E3A `null`\uFF0C\u800C\u4E0D\u662F\u4FDD\u7559\u4E3A undefined\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "platform-webworker",
    action: "\u5F88\u5C11\u4F7F\u7528\u7684 `@angular/platform-webworker` \u548C `@angular/platform-webworker-dynamic` \u5728 v8 \u4E2D\u5DF2\u88AB\u5F03\u7528\u5E76\u79FB\u9664\u3002\u5728 web worker \u4E2D\u8FD0\u884C Angular \u7684\u90E8\u5206\u662F\u4E00\u4E2A\u4ECE\u672A\u5BF9\u5E38\u89C1\u7528\u4F8B\u4EA7\u751F\u826F\u597D\u6548\u679C\u7684\u5B9E\u9A8C\u3002Angular \u5BF9 [Web Workers](https://angular.io/guide/web-worker) \u4ECD\u7136\u6709\u5F88\u597D\u7684\u652F\u6301\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 slice pipe typing",
    action: "\u73B0\u5728 `slice` \u7BA1\u9053\u5BF9\u4E8E\u672A\u5B9A\u4E49\u7684\u8F93\u5165\u503C\u8FD4\u56DE null\uFF0C\u8FD9\u4E0E\u5927\u591A\u6570\u7BA1\u9053\u7684\u884C\u4E3A\u4E00\u81F4\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 keyvalue typing",
    action: "\u4FEE\u590D\u4E86 `keyvalue` \u7BA1\u9053\uFF0C\u5BF9\u4E8E\u5177\u6709\u6570\u5B57\u952E\u7684\u8F93\u5165\u5BF9\u8C61\uFF0C\u7ED3\u679C\u7C7B\u578B\u5C06\u5305\u542B\u952E\u7684\u5B57\u7B26\u4E32\u8868\u793A\u5F62\u5F0F\u3002\u8FD9\u5DF2\u7ECF\u662F\u73B0\u5B9E\uFF0C\u4EE3\u7801\u5DF2\u7ECF\u66F4\u65B0\u4EE5\u53CD\u6620\u8FD9\u4E00\u70B9\u3002\u5982\u679C\u7BA1\u9053\u8F93\u51FA\u7684\u4F7F\u7528\u65B9\u4F9D\u8D56\u4E8E\u4E0D\u6B63\u786E\u7684\u7C7B\u578B\uFF0C\u8BF7\u66F4\u65B0\u3002\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E0D\u4F1A\u5F71\u54CD\u8F93\u5165\u503C\u4E3A `Map` \u7684\u7528\u4F8B\uFF0C\u56E0\u6B64\u5982\u679C\u4F60\u9700\u8981\u4FDD\u7559 `number`\uFF0C\u8FD9\u662F\u4E00\u79CD\u6709\u6548\u7684\u65B9\u6CD5\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 number pipe typing",
    action: "\u6570\u5B57\u7BA1\u9053\uFF08`decimal`\u3001`percent`\u3001`currency` \u7B49\uFF09\u73B0\u5728\u660E\u786E\u6307\u5B9A\u63A5\u53D7\u7684\u7C7B\u578B\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 date pipe typing",
    action: "\u65E5\u671F\u7BA1\u9053\u73B0\u5728\u660E\u786E\u6307\u5B9A\u63A5\u53D7\u7684\u7C7B\u578B\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 datetime rounding",
    action: "\u5F53\u5C06\u5E26\u6709\u6BEB\u79D2\u5206\u6570\u7684\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u7684\u5B57\u7B26\u4E32\u4F20\u9012\u7ED9 `DatePipe` \u65F6\uFF0C\u6BEB\u79D2\u73B0\u5728\u603B\u662F\u5411\u4E0B\u820D\u5165\uFF0C\u800C\u4E0D\u662F\u820D\u5165\u5230\u6700\u8FD1\u7684\u6BEB\u79D2\u3002\u5927\u591A\u6570\u5E94\u7528\u7A0B\u5E8F\u4E0D\u4F1A\u53D7\u5230\u6B64\u66F4\u6539\u7684\u5F71\u54CD\u3002\u5982\u679C\u8FD9\u4E0D\u662F\u9884\u671F\u7684\u884C\u4E3A\uFF0C\u8003\u8651\u5728\u5C06\u5B57\u7B26\u4E32\u4F20\u9012\u7ED9 `DatePipe` \u4E4B\u524D\u9884\u5904\u7406\u6BEB\u79D2\u90E8\u5206\u4EE5\u820D\u5165\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 async pipe typing",
    action: "`async` \u7BA1\u9053\u4E0D\u518D\u58F0\u79F0\u5BF9\u4E8E\u7C7B\u578B\u4E3A undefined \u7684\u8F93\u5165\u8FD4\u56DE undefined\u3002\u8BF7\u6CE8\u610F\uFF0C\u4EE3\u7801\u5B9E\u9645\u4E0A\u5BF9\u4E8E\u672A\u5B9A\u4E49\u7684\u8F93\u5165\u8FD4\u56DE null\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "v11 case pipe update",
    action: "`uppercase` \u548C `lowercase` \u7BA1\u9053\u4E0D\u518D\u901A\u8FC7\u5047\u503C\u3002\u5B83\u4EEC\u73B0\u5728\u5C06 `null` \u548C `undefined` \u90FD\u6620\u5C04\u5230 `null`\uFF0C\u5E76\u5728\u65E0\u6548\u8F93\u5165\uFF08`0`\u3001`false`\u3001`NaN`\uFF09\u65F6\u5F15\u53D1\u5F02\u5E38\u3002\u8FD9\u4E0E\u5176\u4ED6 Angular \u7BA1\u9053\u7684\u884C\u4E3A\u76F8\u5339\u914D\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 router NavigationExtras typing",
    action: "\u5982\u679C\u4F60\u4F7F\u7528\u5E26\u6709 `NavigationExtras` \u7684\u8DEF\u7531\u5668\uFF0C\u65B0\u7684\u7C7B\u578B\u5141\u8BB8\u4F20\u9012\u7C7B\u578B\u4E3A `NavigationExtras` \u7684\u53D8\u91CF\uFF0C\u4F46\u4E0D\u5141\u8BB8\u5BF9\u8C61\u5B57\u9762\u91CF\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u53EA\u80FD\u6307\u5B9A\u5DF2\u77E5\u5C5E\u6027\u3002\u5B83\u4EEC\u4E5F\u4E0D\u63A5\u53D7\u4E0E `Pick` \u4E2D\u7684\u5C5E\u6027\u6CA1\u6709\u5171\u540C\u5C5E\u6027\u7684\u7C7B\u578B\u3002\u5982\u679C\u4F60\u53D7\u5230\u6B64\u66F4\u6539\u7684\u5F71\u54CD\uFF0C\u8BF7\u4EC5\u6307\u5B9A\u5728\u76F8\u5E94\u51FD\u6570\u8C03\u7528\u4E2D\u5B9E\u9645\u4F7F\u7528\u7684 NavigationExtras \u4E2D\u7684\u5C5E\u6027\uFF0C\u6216\u5728\u5BF9\u8C61\u6216\u53D8\u91CF\u4E0A\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\uFF1A`as NavigationExtras`\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "v11 TestBed.overrideProvider",
    action: "\u5982\u679C\u5728 TestBed \u521D\u59CB\u5316\u4E4B\u540E\u8C03\u7528 `TestBed.overrideProvider`\uFF0C\u5219\u4E0D\u518D\u5E94\u7528\u63D0\u4F9B\u8005\u8986\u76D6\u3002\u8FD9\u79CD\u884C\u4E3A\u4E0E\u5176\u4ED6\u8986\u76D6\u65B9\u6CD5\uFF08\u5982 `TestBed.overrideDirective` \u7B49\uFF09\u4E00\u81F4\uFF0C\u4F46\u4F1A\u5F15\u53D1\u9519\u8BEF\u4EE5\u6307\u793A\u3002\u4E4B\u524D\u5728 TestBed.overrideProvider \u51FD\u6570\u4E2D\u7F3A\u5C11\u6B64\u68C0\u67E5\u3002\u5982\u679C\u770B\u5230\u6B64\u9519\u8BEF\uFF0C\u8BF7\u786E\u4FDD\u5728 TestBed \u521D\u59CB\u5316\u5B8C\u6210\u4E4B\u524D\u79FB\u52A8 `TestBed.overrideProvider` \u8C03\u7528\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "v11 router RouteReuseStrategy",
    action: "\u5982\u679C\u4F60\u4F7F\u7528\u8DEF\u7531\u5668\u7684 RouteReuseStrategy\uFF0C\u53C2\u6570\u987A\u5E8F\u5DF2\u66F4\u6539\u3002\u5728\u8C03\u7528 `RouteReuseStrategy#shouldReuseRoute` \u65F6\uFF0C\u4EE5\u524D\u5728\u8BC4\u4F30\u5B50\u8DEF\u7531\u65F6\uFF0C\u4F1A\u8C03\u7528 `future` \u548C `current` \u53C2\u6570\u7684\u987A\u5E8F\u5DF2\u66F4\u6539\u3002\u5982\u679C\u4F60\u7684 `RouteReuseStrategy` \u4E13\u95E8\u4F9D\u8D56\u4E8E\u5C06\u6765\u6216\u5F53\u524D\u5FEB\u7167\u72B6\u6001\uFF0C\u53EF\u80FD\u9700\u8981\u66F4\u65B0 `shouldReuseRoute` \u5B9E\u73B0\u5BF9 `future` \u548C `current` `ActivateRouteSnapshots` \u7684\u4F7F\u7528\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 locale data readonly",
    action: "\u5982\u679C\u4F60\u4F7F\u7528\u533A\u57DF\u8BBE\u7F6E\u6570\u636E\u6570\u7EC4\uFF0C\u6B64 API \u73B0\u5728\u5C06\u8FD4\u56DE\u53EA\u8BFB\u6570\u7EC4\u3002\u5982\u679C\u4F60\u5BF9\u5176\u8FDB\u884C\u4E86\u66F4\u6539\uFF08\u4F8B\u5982\u8C03\u7528 `sort()`\u3001`push()`\u3001`splice()` \u7B49\uFF09\uFF0C\u90A3\u4E48\u4F60\u7684\u4EE3\u7801\u5C06\u4E0D\u518D\u7F16\u8BD1\u3002\u5982\u679C\u4F60\u9700\u8981\u66F4\u6539\u6570\u7EC4\uFF0C\u5219\u73B0\u5728\u5E94\u8BE5\u590D\u5236\u5B83\uFF08\u4F8B\u5982\u901A\u8FC7\u8C03\u7528 `slice()`\uFF09\u5E76\u66F4\u6539\u526F\u672C\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: "v11 CollectionChangeRecord",
    action: "\u5728\u53D8\u66F4\u68C0\u6D4B\u4E2D\uFF0C\u5DF2\u79FB\u9664\u4E86 `CollectionChangeRecord`\uFF0C\u8BF7\u6539\u7528 `IterableChangeRecord`\u3002"
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: "v11 forms async validators",
    action: "\u5982\u679C\u4F60\u5728 `FormControl`\u3001`FormGroup` \u6216 `FormArray` \u7684\u7C7B\u5B9E\u4F8B\u7684\u521D\u59CB\u5316\u65F6\u95F4\u4E0A\u4F7F\u7528\u5F02\u6B65\u9A8C\u8BC1\u5668\u6765\u5B9A\u4E49\uFF0C\u5219\u5728\u5F02\u6B65\u9A8C\u8BC1\u5668\u5B8C\u6210\u540E\u5148\u524D\u672A\u53D1\u51FA\u72B6\u6001\u66F4\u6539\u4E8B\u4EF6\u3002\u5DF2\u66F4\u6539\u4E3A\u5C06\u72B6\u6001\u4E8B\u4EF6\u53D1\u51FA\u5230 `statusChanges` \u53EF\u89C2\u5BDF\u5BF9\u8C61\u4E2D\u3002\u5982\u679C\u4F60\u7684\u4EE3\u7801\u4F9D\u8D56\u4E8E\u65E7\u884C\u4E3A\uFF0C\u4F60\u53EF\u4EE5\u8FC7\u6EE4/\u5FFD\u7565\u6B64\u989D\u5916\u7684\u72B6\u6001\u66F4\u6539\u4E8B\u4EF6\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: "v12 ng update",
    action: "\u8FD0\u884C `ng update @angular/core@12 @angular/cli@12`\uFF0C\u8FD9\u5C06\u628A\u4F60\u7684 Angular \u7248\u672C\u5347\u7EA7\u5230 12\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "\u8FD0\u884C `ng update @angular/material@12`\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: "v12 versions",
    action: "Angular \u73B0\u5728\u8981\u6C42 [TypeScript 4.2](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/)\u3002`ng update` \u5C06\u81EA\u52A8\u66F4\u65B0\u4F60\u7684 TypeScript\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: "v12 browser support",
    action: "IE11 \u652F\u6301\u5DF2\u5F03\u7528\u3002\u5728 [IE11 \u5220\u9664 RFC](https://github.com/angular/angular/issues/41840) \u4E2D\u627E\u5230\u8BE6\u7EC6\u4FE1\u606F\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: "v12 minimum  Node.js version",
    action: "\u4F60\u4E0D\u80FD\u518D\u4F7F\u7528 Node.js \u7248\u672C 10 \u6216\u66F4\u65E9\u7684\u7248\u672C\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: "v12 `XhrFactory` relocation",
    action: "\u5C06 `XhrFactory` \u7684\u5BFC\u5165\u4ECE `@angular/common/http` \u6539\u4E3A `@angular/common`\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: "v12 i18n message ids",
    action: "\u5982\u679C\u4F60\u4F9D\u8D56\u4E8E\u65E7\u7248 i18n \u6D88\u606F ID\uFF0C\u8BF7\u4F7F\u7528 `localize-migrate` \u5DE5\u5177[\u8FC1\u79FB\u81F3\u65B0\u7248](https://angular.io/guide/migration-legacy-message-id)\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: "v12 deprecates `emitDistinctChangesOnly`",
    action: "\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 `emitDistinctChangesOnly` \u6765\u914D\u7F6E `@ContentChildren` \u548C `@ViewChildren` \u67E5\u8BE2\uFF0C\u53EF\u80FD\u9700\u8981\u5C06\u5176\u503C\u66F4\u65B0\u4E3A `false` \u4EE5\u4E0E\u5176\u5148\u524D\u884C\u4E3A\u5BF9\u9F50\u3002\u5728 v12 \u4E2D\uFF0C`emitDistinctChangesOnly` \u7684\u9ED8\u8BA4\u503C\u4E3A `true`\uFF0C\u5728\u5C06\u6765\u7684\u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u5C06\u5220\u9664\u6B64\u914D\u7F6E\u9009\u9879\uFF0C\u4EE5\u9632\u6B62\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u66F4\u6539\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: "v12 prod by default",
    action: "\u4F60\u53EF\u4EE5\u8FD0\u884C\u53EF\u9009\u7684\u8FC1\u79FB\u4EE5\u5C06\u9ED8\u8BA4\u542F\u7528\u751F\u4EA7\u6784\u5EFA `ng update @angular/cli@12 --migrate-only production-by-default`\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 min and max form attributes",
    action: '\u5982\u679C\u4F60\u4F7F\u7528 Angular \u8868\u5355\uFF0C\u5728 `<input type="number">` \u4E0A\u4F7F\u7528 `min` \u548C `max` \u5C5E\u6027\u73B0\u5728\u5C06\u89E6\u53D1\u9A8C\u8BC1\u903B\u8F91\u3002'
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `emitEvent` in `FormArray` and `FormGroup`",
    action: "\u5982\u679C\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u5177\u6709\u81EA\u5B9A\u4E49\u7C7B\uFF0C\u5B83\u4EEC\u6269\u5C55\u4E86 `FormArray` \u6216 `FormGroup` \u7C7B\uFF0C\u5E76\u8986\u76D6\u4E86\u4E0A\u8FF0\u65B9\u6CD5\uFF0C\u5219\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u4F60\u7684\u5B9E\u73B0\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 zone.js minimum version",
    action: "\u5C06 zone.js \u66F4\u65B0\u5230\u7248\u672C 0.11.4\u3002`ng update` \u5C06\u81EA\u52A8\u66F4\u65B0\u6B64\u4F9D\u8D56\u9879\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `HttpParams` method params update",
    action: "\u5982\u679C\u4F60\u6269\u5C55\u4E86 `HttpParams` \u7C7B\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u5176\u65B9\u6CD5\u7684\u7B7E\u540D\u4EE5\u53CD\u6620\u53C2\u6570\u7C7B\u578B\u7684\u66F4\u6539\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `routerLinkActiveOptions`",
    action: "`RouterLinkActive` \u7684 `routerLinkActiveOptions` \u5C5E\u6027\u73B0\u5728\u5177\u6709\u66F4\u5177\u4F53\u7684\u7C7B\u578B\u3002\u4F60\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u8BBF\u95EE\u6B64\u5C5E\u6027\u7684\u4EE3\u7801\u4EE5\u4E0E\u66F4\u6539\u4FDD\u6301\u4E00\u81F4\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `APP_INITIALIZER` callback types",
    action: "\u521D\u59CB\u5316\u56DE\u8C03\u73B0\u5728\u5177\u6709\u66F4\u5177\u4F53\u7684\u8FD4\u56DE\u7C7B\u578B\uFF0C\u5982\u679C\u4F60\u901A\u8FC7 `Injector.get` \u6216 `TestBed.inject` \u83B7\u53D6 `APP_INITIALIZER` \u5B9E\u4F8B\uFF0C\u5219\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u4F60\u7684\u4EE3\u7801\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 fragment typings",
    action: "\u8DEF\u7531\u5668\u7247\u6BB5\u73B0\u5728\u53EF\u80FD\u662F `null`\u3002\u6DFB\u52A0 `null` \u68C0\u67E5\u4EE5\u907F\u514D TypeScript \u4EA7\u751F\u7C7B\u578B\u9519\u8BEF\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `ng.getDirectives`",
    action: "\u786E\u4FDD\u4E0D\u4F9D\u8D56\u4E8E `ng.getDirectives` \u5982\u679C\u627E\u4E0D\u5230\u4E0E\u7279\u5B9A DOM \u8282\u70B9\u76F8\u5173\u8054\u7684\u6307\u4EE4\uFF0C\u5219\u5F15\u53D1\u9519\u8BEF\u3002"
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: "v12 `optimization.styles.inlineCritical`",
    action: "\u68C0\u67E5\u4F60\u7684 angular.json \u6587\u4EF6\u4E2D\u7684 `optimization.styles.inlineCritical` \u9009\u9879\u3002\u73B0\u5728\u9ED8\u8BA4\u4E3A `true`\u3002\u8BF7\u8BB0\u4F4F\uFF0C\u6574\u4E2A `optimization` \u9009\u9879\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5E03\u5C14\u503C\uFF0C\u8FD9\u5C06\u5C06\u6240\u6709\u5B50\u9009\u9879\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u503C\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    step: "v13 ng update",
    action: "\u8FD0\u884C `ng update @angular/core@13 @angular/cli@13` \u5C06\u4F60\u7684 Angular \u7248\u672C\u66F4\u65B0\u81F3 13\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "\u8FD0\u884C `ng update @angular/material@13`\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    step: "TypeScript 4.4",
    action: "Angular \u73B0\u5728\u4F7F\u7528 TypeScript 4.4\uFF0C\u8BF7\u9605\u8BFB\u6709\u5173\u4EFB\u4F55\u6F5C\u5728\u53D8\u66F4\u7684\u66F4\u591A\u4FE1\u606F\uFF1A[TypeScript 4.4 \u53D1\u5E03\u8BF4\u660E](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html)"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    step: "v13 node",
    action: '\u786E\u4FDD\u4F60\u4F7F\u7528\u7684\u662F <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 12.20.0 \u6216\u66F4\u9AD8\u7248\u672C</a>\u3002'
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 routerLink",
    action: "\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012 `undefined` \u548C `null` \u6765\u7981\u7528 `routerLink` \u7684\u5BFC\u822A\u3002\u4E4B\u524D\uFF0C`routerLink` \u6307\u4EE4\u63A5\u53D7\u8FD9\u4E24\u4E2A\u503C\u7B49\u540C\u4E8E\u7A7A\u5B57\u7B26\u4E32\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 router loadChildren",
    action: "\u4E0D\u80FD\u518D\u901A\u8FC7\u5C06\u5B57\u7B26\u4E32\u503C\u8BBE\u7F6E\u4E3A `loadChildren` \u6765\u6307\u5B9A\u60F0\u6027\u52A0\u8F7D\u7684\u8DEF\u7531\u3002\u786E\u4FDD\u5207\u6362\u5230\u52A8\u6001 ESM \u5BFC\u5165\u8BED\u53E5\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 service worker activated",
    action: "`SwUpdate` \u7684 `activated` \u53EF\u89C2\u5BDF\u5BF9\u8C61\u73B0\u5DF2\u5F03\u7528\u3002\u8981\u68C0\u67E5\u670D\u52A1\u5DE5\u4F5C\u5668\u7684\u6FC0\u6D3B\u72B6\u6001\uFF0C\u8BF7\u6539\u7528 `activatedUpdate` \u65B9\u6CD5\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 service worker available",
    action: "`SwUpdate` \u7684 `available` \u53EF\u89C2\u5BDF\u5BF9\u8C61\u73B0\u5DF2\u5F03\u7528\u3002\u8981\u83B7\u53D6\u76F8\u540C\u7684\u4FE1\u606F\uFF0C\u8BF7\u4F7F\u7528 `versionUpdates` \u5E76\u4EC5\u8FC7\u6EE4 `VersionReadyEvent` \u4E8B\u4EF6\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: "v13 renderModuleFactory",
    action: "`@angular/platform-server` \u4E2D\u7684 `renderModuleFactory` \u4E0D\u518D\u4E0E Ivy \u4E00\u8D77\u4F7F\u7528\u3002\u6539\u7528 `renderModule`\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 forms status",
    action: "\u6211\u4EEC\u5C06 `AbstractControl.status` \u7684\u7C7B\u578B\u7F29\u5C0F\u4E3A `FormControlStatus`\uFF0C\u5E76\u5C06 `AbstractControl.status` \u7684\u7C7B\u578B\u7F29\u5C0F\u4E3A `Observable<FormControlStatus>`\u3002 `FormControlStatus` \u662F\u8868\u5355\u63A7\u4EF6\u7684\u6240\u6709\u53EF\u80FD\u72B6\u6001\u5B57\u7B26\u4E32\u7684\u8054\u5408\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 router serializer",
    action: "\u73B0\u5728\uFF0CURL \u5E8F\u5217\u5316\u7A0B\u5E8F\u9075\u5B88 URI \u89C4\u8303\uFF0C\u4F1A\u8003\u8651\u67E5\u8BE2\u53C2\u6570\u4E2D\u7684\u95EE\u53F7\u3002\u4F8B\u5982\uFF0C`/path?q=hello?&q2=2` \u73B0\u5728\u5C06\u89E3\u6790\u4E3A `{ q: `hello?`, q2: 2 }`\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 host binding",
    action: "`href` \u73B0\u5728\u662F\u5C5E\u6027\u7ED1\u5B9A\u3002\u8FD9\u610F\u5473\u7740 `DebugElement.properties['href']` \u73B0\u5728\u8FD4\u56DE\u539F\u751F\u5143\u7D20\u8FD4\u56DE\u7684 `href` \u503C\uFF0C\u800C\u4E0D\u662F `routerLink` \u7684 `href` \u5C5E\u6027\u7684\u5185\u90E8\u503C\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 spy location",
    action: "`SpyLocation` \u5728\u8C03\u7528 `location.go` \u65F6\u4E0D\u518D\u89E6\u53D1 `popstate` \u4E8B\u4EF6\u3002\u6B64\u5916\uFF0C`simulateHashChange` \u73B0\u5728\u89E6\u53D1 `haschange` \u548C `popstate`\u3002\u4F9D\u8D56\u4E8E `location.go` \u7684\u6D4B\u8BD5\u73B0\u5728\u53EF\u80FD\u9700\u8981\u4F7F\u7528 `simulateHashChange` \u6765\u6355\u83B7 `popstate`\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    ngUpgrade: true,
    step: "v13 router URL replacement",
    action: "\u5F53\u65B0\u5BFC\u822A\u53D6\u6D88\u6B63\u5728\u8FDB\u884C\u7684\u5BFC\u822A\u65F6\uFF0C\u8DEF\u7531\u5668\u5C06\u4E0D\u518D\u66FF\u6362\u6D4F\u89C8\u5668 URL\u3002\u4F9D\u8D56\u4E8E Angular \u8DEF\u7531\u5668\u5904\u7406\u7684\u521D\u59CB\u5BFC\u822A\u4E0A\u5B58\u5728 `navigationId` \u7684\u6DF7\u5408\u5E94\u7528\u7A0B\u5E8F\u5E94\u8BE5\u8BA2\u9605 `NavigationCancel` \u4E8B\u4EF6\uFF0C\u5E76\u6267\u884C `location.replaceState` \u4EE5\u5C06 `navigationId` \u6DFB\u52A0\u5230 `Router` \u72B6\u6001\u4E2D\u3002\u6B64\u5916\uFF0C\u65AD\u8A00 `SpyLocation` \u4E0A\u7684 `urlChanges` \u7684\u6D4B\u8BD5\u53EF\u80FD\u9700\u8981\u8C03\u6574\u4EE5\u8003\u8651\u4E0D\u518D\u89E6\u53D1\u7684 `replaceState`\u3002"
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: "v13 removed symbols",
    action: "\u8DEF\u7531\u5668\u5305\u4E0D\u518D\u5BFC\u51FA `SpyNgModuleFactoryLoader` \u548C `DeprecatedLoadChildren`\u3002\u5982\u679C\u4F7F\u7528\u4E86\u5B83\u4EEC\uFF0C\u8BF7\u786E\u4FDD\u5220\u9664\u5176\u5BF9\u5E94\u7684\u5BFC\u5165\u8BED\u53E5\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    step: "v14 ng update",
    action: "\u8FD0\u884C `ng update @angular/core@14 @angular/cli@14` \u5C06\u4F60\u7684 Angular \u7248\u672C\u66F4\u65B0\u81F3 14\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "\u8FD0\u884C `ng update @angular/material@14`\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    step: "TypeScript 4.6",
    action: "Angular \u73B0\u5728\u4F7F\u7528 TypeScript 4.6\uFF0C\u8BF7\u9605\u8BFB\u6709\u5173\u4EFB\u4F55\u6F5C\u5728\u53D8\u66F4\u7684\u66F4\u591A\u4FE1\u606F\uFF1A[TypeScript 4.6 \u53D1\u5E03\u516C\u544A](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/)"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    step: "v14 node",
    action: '\u786E\u4FDD\u4F60\u4F7F\u7528\u7684\u662F <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 14.15.0 \u6216\u66F4\u9AD8\u7248\u672C</a>\u3002'
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: "v14 strict forms",
    action: "\u8868\u5355\u6A21\u578B\u73B0\u5728\u9700\u8981\u4E00\u4E2A\u6CDB\u578B\u7C7B\u578B\u53C2\u6570\u3002\u4F60\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528\u8868\u5355\u6A21\u578B\u7C7B\u7684\u4E0D\u5E26\u7C7B\u578B\u7684\u7248\u672C\u8FDB\u884C\u6E10\u8FDB\u5F0F\u8FC1\u79FB\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: "v14 aotSummaries",
    action: "\u4ECE `TestBed` \u4E2D\u5220\u9664 `aotSummaries`\uFF0C\u56E0\u4E3A Angular \u4E0D\u518D\u5728 Ivy \u4E2D\u9700\u8981\u5B83\u4EEC\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    material: true,
    step: "v14 MatVertical and Horizontal Stepper",
    action: "\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 `MatVerticalStepper` \u6216 `MatHorizontalStepper`\uFF0C\u8BF7\u786E\u4FDD\u5207\u6362\u5230 `MatStepper`\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: "v14 JSONP",
    action: "\u4ECE JSONP \u8BF7\u6C42\u4E2D\u5220\u9664\u5934\u90E8\u3002JSONP \u4E0D\u652F\u6301\u5934\u90E8\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u5934\u90E8\uFF0CHTTP \u6A21\u5757\u73B0\u5728\u5C06\u629B\u51FA\u9519\u8BEF\u800C\u4E0D\u662F\u5FFD\u7565\u5B83\u4EEC\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: "v14 resolvers",
    action: "\u89E3\u6790\u5668\u73B0\u5728\u5C06\u63A5\u6536\u5230\u7684 observable \u7684\u7B2C\u4E00\u4E2A\u53D1\u5C04\u503C\uFF0C\u5E76\u5728\u6B64\u4E4B\u540E\u8FDB\u884C\u5BFC\u822A\uFF0C\u4EE5\u66F4\u597D\u5730\u4E0E\u5176\u4ED6\u5B88\u536B\u4FDD\u6301\u4E00\u81F4\uFF0C\u800C\u4E0D\u662F\u53D6\u6700\u540E\u53D1\u5C04\u7684\u503C\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 deprecate protractor entry",
    action: "\u5DF2\u79FB\u9664\u5E9F\u5F03\u7684 `angular/cdk/testing/protractor` \u5165\u53E3\u70B9\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 chipInput",
    action: "\u786E\u4FDD\u6307\u5B9A `MatChipInputEvent` \u7684 `chipInput`\uFF0C\u56E0\u4E3A\u73B0\u5728\u5B83\u662F\u5FC5\u9700\u7684\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 mixinErrorState",
    action: "\u5728\u4F7F\u7528 `mixinErrorState` \u7684\u62BD\u8C61\u7C7B\u4E2D\uFF0C\u4F60\u9700\u8981\u5B9E\u73B0 `stateChanges` \u7C7B\u6210\u5458\uFF0C\u56E0\u4E3A mixin \u4E0D\u518D\u63D0\u4F9B\u5B83\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 CdkStepper orientation",
    action: "\u4F7F\u7528 `CdkStepper.orientation`\uFF0C\u800C\u4E0D\u662F `CdkStepper._orientation`\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 CdkStepper and MatStepper",
    action: "\u5982\u679C\u4F60\u5728\u6784\u9020\u51FD\u6570\u4E2D\u6269\u5C55\u6216\u4F7F\u7528 `CdkStepper` \u6216 `MatStepper`\uFF0C\u5219\u4E0D\u518D\u9700\u8981\u4F20\u9012 `_document` \u53C2\u6570\uFF0C\u56E0\u4E3A\u5B83\u73B0\u5728\u5DF2\u88AB\u79FB\u9664\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 mat-list-item-avatar",
    action: "\u5C06 `mat-list-item-avatar` CSS \u7C7B\u91CD\u547D\u540D\u4E3A `mat-list-item-with-avatar`\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 MatSelectionListChange.option",
    action: "\u4F7F\u7528 `MatSelectionListChange.options`\uFF0C\u800C\u4E0D\u662F `MatSelectionListChange.option`\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 getHarnessLoaderForContent",
    action: "\u4F7F\u7528 `getChildLoader(MatListItemSection.CONTENT)`\uFF0C\u800C\u4E0D\u662F `getHarnessLoaderForContent`\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: "v14 MatSelectionList",
    action: "\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 `MatSelectionList`\uFF0C\u8BF7\u786E\u4FDD\u5728\u5176\u6784\u9020\u51FD\u6570\u4E2D\u4F20\u9012 `_focusMonitor`\uFF0C\u56E0\u4E3A\u73B0\u5728\u5B83\u662F\u5FC5\u9700\u7684\u3002\u6B64\u5916\uFF0C\u8FD9\u4E2A\u7C7B\u4E0D\u518D\u5177\u6709 `tabIndex` \u5C5E\u6027\u548C `tabIndex` \u6784\u9020\u51FD\u6570\u53C2\u6570\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 initialNavigation",
    action: "\u5C06 `initialNavigation: 'enabled'` \u66F4\u65B0\u4E3A `initialNavigation: 'enabledBlocking'`\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 Route.pathMatch",
    action: "\u5982\u679C\u4F60\u6B63\u5728\u5B9A\u4E49\u5E26\u6709 `pathMatch` \u7684\u8DEF\u7531\uFF0C\u53EF\u80FD\u9700\u8981\u5C06\u5176\u663E\u5F0F\u8F6C\u6362\u4E3A `Route` \u6216 `Routes`\u3002`Route.pathMatch` \u4E0D\u518D\u517C\u5BB9 `string` \u7C7B\u578B\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 stricter LoadChildrenCallback",
    action: "`LoadChildrenCallback` \u8FD4\u56DE\u7684 Promise \u73B0\u5728\u5177\u6709\u66F4\u4E25\u683C\u7684\u7C7B\u578B\u53C2\u6570 `Type<any>|NgModuleFactory<any>`\uFF0C\u800C\u4E0D\u662F `any`\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 router scheduling",
    action: "\u8DEF\u7531\u5668\u4E0D\u518D\u5728 `setTimeout` \u5185\u5B89\u6392\u91CD\u5B9A\u5411\u5BFC\u822A\u3002\u786E\u4FDD\u4F60\u7684\u6D4B\u8BD5\u4E0D\u4F9D\u8D56\u4E8E\u8FD9\u79CD\u884C\u4E3A\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 LocationStrategy",
    action: "\u73B0\u5728\u5B9E\u73B0 `LocationStrategy` \u63A5\u53E3\u9700\u8981\u5B9A\u4E49 `getState()`\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 http queries",
    action: "\u53D1\u9001\u67E5\u8BE2\u65F6\u4E0D\u518D\u9700\u8981\u5BF9 `+` \u8FDB\u884C\u5904\u7406\uFF0C\u56E0\u4E3A `+` \u4E0D\u518D\u53D1\u9001\u7A7A\u683C\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 AnimationDriver.getParentElement",
    action: "\u73B0\u5728\u5B9E\u73B0 `AnimationDriver` \u9700\u8981 `getParentElement` \u65B9\u6CD5\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 invalid config",
    action: "\u61D2\u52A0\u8F7D\u6A21\u5757\u7684\u65E0\u6548\u8DEF\u7531\u914D\u7F6E\u73B0\u5728\u4F1A\u5F15\u53D1\u9519\u8BEF\uFF0C\u800C\u4E0D\u662F\u88AB\u5FFD\u7565\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 router resolver",
    action: "\u4ECE `RouterOutletContract.activateWith` \u51FD\u6570\u4E2D\u79FB\u9664 `resolver`\uFF0C\u4EE5\u53CA\u4ECE `OutletContext` \u7C7B\u4E2D\u79FB\u9664 `resolver`\uFF0C\u56E0\u4E3A\u4E0D\u518D\u9700\u8981\u5DE5\u5382\u89E3\u6790\u5668\u3002"
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: "v14 initialUrl",
    action: "`Router.initialUrl` \u53EA\u63A5\u53D7 `UrlTree`\uFF0C\u4EE5\u9632\u6B62\u901A\u8FC7\u5206\u914D `string` \u503C\u6765\u8BEF\u7528 API\u3002"
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 base-decorators",
    action: '\u786E\u4FDD\u5728\u5177\u6709\u7EE7\u627F\u6784\u9020\u51FD\u6570\u548C\u4F7F\u7528\u4F9D\u8D56\u6CE8\u5165\u7684\u5B50\u7C7B\u4E2D\u4F7F\u7528\u57FA\u7C7B\u4E2D\u7684\u88C5\u9970\u5668\u3002\u8FD9\u6837\u7684\u57FA\u7C7B\u5E94\u8BE5\u7528 `@Injectable` \u6216 `@Directive` \u88C5\u9970\uFF0C\u5426\u5219\u7F16\u8BD1\u5668\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-05" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 setDisabledState",
    action: '\u5728 v15 \u4E2D\uFF0C\u5F53\u9644\u52A0 `ControlValueAccessor` \u65F6\uFF0C\u59CB\u7EC8\u8C03\u7528 `setDisabledState`\u3002\u8981\u9000\u51FA\u6B64\u884C\u4E3A\uFF0C\u4F7F\u7528 `FormsModule.withConfig` \u6216 `ReactiveFormsModule.withConfig`\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-06" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Advanced,
    step: "v15 canParse",
    action: '\u4F7F\u7528 `canParse` \u7684\u5E94\u7528\u7A0B\u5E8F\u5E94\u8BE5\u6539\u4E3A\u4F7F\u7528 `@angular/localize/tools` \u4E2D\u7684 `analyze`\u3002\u5728 v15 \u4E2D\uFF0C\u4ECE `@angular/localize/tools` \u7684\u6240\u6709\u7FFB\u8BD1\u89E3\u6790\u5668\u4E2D\u5220\u9664\u4E86 `canParse` \u65B9\u6CD5\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-07" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 ActivatedRoutSnapshot",
    action: '\u786E\u4FDD\u6240\u6709 `ActivatedRouteSnapshot` \u5BF9\u8C61\u90FD\u6709 `title` \u5C5E\u6027\u3002\u5728 v15 \u4E2D\uFF0C`title` \u5C5E\u6027\u662F `ActivatedRouteSnapshot` \u7684\u5FC5\u9700\u5C5E\u6027\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-08" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Advanced,
    step: "v15 RouterOutlet",
    action: '\u5982\u679C\u4F60\u7684 `RouterOutlet` \u6D4B\u8BD5\u51FA\u73B0\u95EE\u9898\uFF0C\u8BF7\u786E\u4FDD\u5B83\u4EEC\u4E0D\u4F9D\u8D56\u4E8E\u4E0E\u53D8\u66F4\u68C0\u6D4B\u76F8\u5173\u7684\u76F8\u5E94\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5316\u987A\u5E8F\u3002\u5728 v15 \u4E2D\uFF0C`RouterOutlet` \u5728\u53D8\u66F4\u68C0\u6D4B\u4E4B\u540E\u5B9E\u4F8B\u5316\u7EC4\u4EF6\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-09" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 relativeLinkResolution",
    action: '\u5728 v15 \u4E2D\uFF0C`relativeLinkResolution` \u5728\u8DEF\u7531\u5668\u4E2D\u4E0D\u53EF\u914D\u7F6E\u3002\u5B83\u7528\u4E8E\u9000\u51FA\u5148\u524D\u7684\u9519\u8BEF\u4FEE\u590D\uFF0C\u73B0\u5728\u5DF2\u6210\u4E3A\u6807\u51C6\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-10" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 DATE_PIPE_DEFAULT_OPTIONS",
    action: '\u5C06 `DATE_PIPE_DEFAULT_TIMEZONE` \u4EE4\u724C\u7684\u5B9E\u4F8B\u66F4\u6539\u4E3A\u4F7F\u7528 `DATE_PIPE_DEFAULT_OPTIONS` \u914D\u7F6E\u65F6\u533A\u3002\u5728 v15 \u4E2D\uFF0C`DATE_PIPE_DEFAULT_TIMEZONE` \u4EE4\u724C\u5DF2\u8FC7\u65F6\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-01" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 iframe",
    action: "\u73B0\u6709\u7684 `<iframe>` \u5B9E\u4F8B\u53EF\u80FD\u5DF2\u7ECF\u5E94\u7528\u4E86\u5B89\u5168\u654F\u611F\u5C5E\u6027\uFF0C\u4F5C\u4E3A\u5C5E\u6027\u6216\u5C5E\u6027\u7ED1\u5B9A\u3002\u8FD9\u4E9B\u5B89\u5168\u654F\u611F\u5C5E\u6027\u53EF\u80FD\u51FA\u73B0\u5728\u6A21\u677F\u4E2D\u6216\u6307\u4EE4\u7684\u5BBF\u4E3B\u7ED1\u5B9A\u4E2D\u3002\u8FD9\u4E9B\u60C5\u51B5\u9700\u8981\u66F4\u65B0\uFF0C\u4EE5\u786E\u4FDD\u7B26\u5408\u5BF9 `<iframe>` \u7ED1\u5B9A\u7684\u65B0\u548C\u66F4\u4E25\u683C\u7684\u89C4\u5219\u3002<a href='https://v15.angular.io/errors/NG0910' title='\u9519\u8BEF\u9875\u9762\u7684\u94FE\u63A5'>\u67E5\u770B\u66F4\u591A\u4FE1\u606F</a>"
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 Injector.get",
    action: '\u66F4\u65B0\u4F7F\u7528 `InjectFlags` \u53C2\u6570\u7684 `Injector.get()` \u7684\u5B9E\u4F8B\uFF0C\u4EE5\u4F7F\u7528 `InjectOptions` \u53C2\u6570\u3002\u5728 v15 \u4E2D\uFF0C`Injector.get()` \u7684 `InjectFlags` \u53C2\u6570\u5DF2\u8FC7\u65F6\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-02" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 TestBed.inject",
    action: '\u66F4\u65B0\u4F7F\u7528 `InjectFlags` \u53C2\u6570\u7684 `TestBed.inject()` \u7684\u5B9E\u4F8B\uFF0C\u4EE5\u4F7F\u7528 `InjectOptions` \u53C2\u6570\u3002\u5728 v15 \u4E2D\uFF0C`TestBed.inject()` \u7684 `InjectFlags` \u53C2\u6570\u5DF2\u8FC7\u65F6\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-01" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 ngModule in providedIn",
    action: '\u5728 v15 \u4E2D\uFF0C\u5BF9 `@Injectable` \u548C `InjectionToken` \u4F7F\u7528 `providedIn: ngModule` \u5DF2\u8FC7\u65F6\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-04" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 providedIn any",
    action: '\u5728 v15 \u4E2D\uFF0C\u5BF9 `@Injectable` \u6216 `InjectionToken` \u4F7F\u7528 `providedIn: \'any\'` \u5DF2\u8FC7\u65F6\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-05" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: "v15 RouterLinkWithHref",
    action: '\u66F4\u65B0 `RouterLinkWithHref` \u6307\u4EE4\u7684\u5B9E\u4F8B\u4EE5\u4F7F\u7528 `RouterLink` \u6307\u4EE4\u3002`RouterLinkWithHref` \u6307\u4EE4\u5728 v15 \u4E2D\u5DF2\u8FC7\u65F6\u3002<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-06" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "v15 mat refactor",
    action: '\u5728 Angular Material v15 \u4E2D\uFF0C\u8BB8\u591A\u7EC4\u4EF6\u5DF2\u88AB\u91CD\u6784\u4E3A\u57FA\u4E8E\u5B98\u65B9 Material Design Components for Web (MDC)\u3002\u8FD9\u4E2A\u53D8\u5316\u5F71\u54CD\u4E86\u8BB8\u591A\u7EC4\u4EF6\u7684 DOM \u548C CSS \u7C7B\u3002<a href="https://rc.material.angular.dev/guide/mdc-migration" title="\u6709\u5173\u6B64\u66F4\u6539\u7684\u66F4\u591A\u4FE1\u606F">\u7EE7\u7EED\u9605\u8BFB</a>'
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: "v15 visual review",
    action: "\u5728\u5C06\u5E94\u7528\u7A0B\u5E8F\u66F4\u65B0\u5230 v15 \u540E\uFF0C\u901A\u8FC7\u89C6\u89C9\u5BA1\u67E5\u5E94\u7528\u7A0B\u5E8F\u53CA\u5176\u4EA4\u4E92\uFF0C\u786E\u4FDD\u4E00\u5207\u6B63\u5E38\u8FD0\u884C\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 node support",
    action: "\u786E\u4FDD\u5728\u5347\u7EA7\u5E94\u7528\u7A0B\u5E8F\u4E4B\u524D\u4F7F\u7528\u53D7\u652F\u6301\u7684 node.js \u7248\u672C\u3002Angular v16 \u652F\u6301 node.js \u7248\u672C\uFF1Av16 \u548C v18\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 ts support",
    action: "\u786E\u4FDD\u5728\u5347\u7EA7\u5E94\u7528\u7A0B\u5E8F\u4E4B\u524D\u4F7F\u7528\u53D7\u652F\u6301\u7684 TypeScript \u7248\u672C\u3002Angular v16 \u652F\u6301 TypeScript \u7248\u672C 4.9.3 \u6216\u66F4\u9AD8\u7248\u672C\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 ng update",
    action: "\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u9879\u76EE\u76EE\u5F55\u4E2D\uFF0C\u8FD0\u884C `ng update @angular/core@16 @angular/cli@16`\uFF0C\u5C06\u5E94\u7528\u7A0B\u5E8F\u66F4\u65B0\u5230 Angular v16\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "\u8FD0\u884C `ng update @angular/material@16`\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 zone.js support",
    action: "\u5728\u5347\u7EA7\u5E94\u7528\u7A0B\u5E8F\u4E4B\u524D\uFF0C\u8BF7\u786E\u4FDD\u4F7F\u7528\u53D7\u652F\u6301\u7684 Zone.js \u7248\u672C\u3002Angular v16 \u652F\u6301 Zone.js \u7248\u672C 0.13.x \u6216\u66F4\u9AD8\u7248\u672C\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 RouterEvent",
    action: "Event \u8054\u5408\u4F53\u4E0D\u518D\u5305\u542B `RouterEvent`\uFF0C\u8FD9\u610F\u5473\u7740\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 Event \u7C7B\u578B\uFF0C\u5219\u53EF\u80FD\u5FC5\u987B\u5C06\u7C7B\u578B\u5B9A\u4E49\u4ECE `(e: Event)` \u66F4\u6539\u4E3A `(e: Event|RouterEvent)`"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 routerEvent prop type",
    action: "\u9664\u4E86 `NavigationEnd`\uFF0C`routerEvent` \u5C5E\u6027\u73B0\u5728\u8FD8\u63A5\u53D7\u7C7B\u578B `NavigationSkipped`"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 RendererType2",
    action: "\u4EC5\u5C06\u6241\u5E73\u6570\u7EC4\u4F20\u9012\u7ED9 `RendererType2.styles`\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u518D\u63A5\u53D7\u5D4C\u5957\u6570\u7EC4"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 BrowserPlatformLocation",
    action: "\u4F60\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u4F7F\u7528 `BrowserPlatformLocation` \u7684\u6D4B\u8BD5\uFF0C\u56E0\u4E3A `MockPlatformLocation` \u73B0\u5728\u9ED8\u8BA4\u5728\u6D4B\u8BD5\u4E2D\u63D0\u4F9B\u3002[\u7EE7\u7EED\u9605\u8BFB](https://github.com/angular/angular/blob/main/CHANGELOG.md#common-9)"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 ngcc",
    action: "\u7531\u4E8E\u5728 v16 \u4E2D\u5220\u9664\u4E86 Angular Compatibility Compiler (ngcc)\uFF0C\u56E0\u6B64 v16 \u53CA\u66F4\u9AD8\u7248\u672C\u7684\u9879\u76EE\u4E0D\u518D\u652F\u6301 View Engine \u5E93\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 createUrlTree",
    action: "\u5728 `Router.createUrlTree` \u4E2D\u7684\u9519\u8BEF\u4FEE\u590D\u540E\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u8C03\u6574\u6A21\u62DF `ActivatedRoute` \u7684\u6D4B\u8BD5\u3002[\u7EE7\u7EED\u9605\u8BFB](https://github.com/angular/angular/blob/main/CHANGELOG.md#1600-2023-05-03)"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 ApplicationConfig imports",
    action: "\u5C06 `ApplicationConfig` \u7684\u5BFC\u5165\u66F4\u6539\u4E3A\u6765\u81EA `@angular/core`\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 renderModule",
    action: "\u4FEE\u6539\u4EE3\u7801\u4EE5\u4F7F\u7528 `renderModule` \u800C\u4E0D\u662F `renderModuleFactory`\uFF0C\u56E0\u4E3A\u540E\u8005\u5DF2\u88AB\u5220\u9664\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 XhrFactory",
    action: "\u4FEE\u6539\u4EE3\u7801\uFF0C\u4F7F\u7528 `@angular/common` \u4E2D\u7684 `XhrFactory` \u800C\u4E0D\u662F\u6765\u81EA `@angular/common/http` \u7684 `XhrFactory`\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 withServerTransition",
    action: "\u5982\u679C\u4F60\u5728\u540C\u4E00\u9875\u4E0A\u8FD0\u884C\u591A\u4E2A Angular \u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u4E14\u4F7F\u7528\u4E86 `BrowserModule.withServerTransition({ appId: 'serverApp' })`\uFF0C\u8BF7\u786E\u4FDD\u8BBE\u7F6E `APP_ID`\uFF0C\u56E0\u4E3A `withServerTransition` \u73B0\u5DF2\u8FC7\u65F6\u3002[\u7EE7\u7EED\u9605\u8BFB](https://github.com/angular/angular/blob/main/CHANGELOG.md#platform-browser-4)"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 EnvironmentInjector",
    action: "\u5C06 `EnvironmentInjector.runInContext` \u66F4\u6539\u4E3A `runInInjectionContext`\uFF0C\u5E76\u5C06\u73AF\u5883\u6CE8\u5165\u5668\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 ViewContainerRef.createComponent",
    action: "\u66F4\u65B0\u4F60\u7684\u4EE3\u7801\uFF0C\u4F7F\u7528 `ViewContainerRef.createComponent` \u800C\u4E0D\u4F7F\u7528\u5DE5\u5382\u89E3\u6790\u5668\u3002`ComponentFactoryResolver` \u5DF2\u4ECE Router API \u4E2D\u79FB\u9664\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 APP_ID",
    action: "\u5982\u679C\u5728\u540C\u4E00\u9875\u4E0A\u5F15\u5BFC\u591A\u4E2A\u5E94\u7528\u7A0B\u5E8F\uFF0C\u8BF7\u786E\u4FDD\u8BBE\u7F6E\u552F\u4E00\u7684 `APP_IDs`\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 server renderApplication",
    action: "\u66F4\u65B0\u4F60\u7684\u4EE3\u7801\uFF0C\u4FEE\u8BA2 `renderApplication` \u65B9\u6CD5\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u518D\u63A5\u53D7\u6839\u7EC4\u4EF6\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u800C\u662F\u5E94\u8BE5\u5F15\u5BFC\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u56DE\u8C03\u51FD\u6570\u3002[\u7EE7\u7EED\u9605\u8BFB](https://github.com/angular/angular/blob/main/CHANGELOG.md#platform-server-3)"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 PlatformConfig.baseUrl",
    action: "\u66F4\u65B0\u4F60\u7684\u4EE3\u7801\uFF0C\u5220\u9664\u5BF9 `PlatformConfig.baseUrl` \u548C `PlatformConfig.useAbsoluteUrl` platform-server \u914D\u7F6E\u9009\u9879\u7684\u4EFB\u4F55\u5F15\u7528\uFF0C\u56E0\u4E3A\u5B83\u5DF2\u88AB\u5F03\u7528\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 moduleid",
    action: "\u66F4\u65B0\u4F60\u7684\u4EE3\u7801\uFF0C\u5220\u9664\u5BF9 `@Directive`/`@Component` `moduleId` \u5C5E\u6027\u7684\u4EFB\u4F55\u5F15\u7528\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u8D77\u4F5C\u7528\uFF0C\u5C06\u5728 v17 \u4E2D\u5220\u9664\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 transfer state imports",
    action: "\u4ECE `import {makeStateKey, StateKey, TransferState} from '@angular/platform-browser'` \u66F4\u65B0\u5BFC\u5165\u5230 `import {makeStateKey, StateKey, TransferState} from '@angular/core'`"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 ComponentRef",
    action: "\u5982\u679C\u4F9D\u8D56\u4E8E `ComponentRef.setInput` \u6765\u8BBE\u7F6E\u7EC4\u4EF6\u8F93\u5165\uFF0C\u5373\u4F7F\u5B83\u57FA\u4E8E `Object.is` \u76F8\u7B49\u6027\u68C0\u67E5\u662F\u76F8\u540C\u7684\uFF0C\u8BF7\u786E\u4FDD\u590D\u5236\u5176\u503C\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 ANALYZE_FOR_ENTRY_COMPONENTS",
    action: "\u66F4\u65B0\u4F60\u7684\u4EE3\u7801\uFF0C\u5220\u9664\u5BF9 `ANALYZE_FOR_ENTRY_COMPONENTS` \u6CE8\u5165\u4EE4\u724C\u7684\u4EFB\u4F55\u5F15\u7528\uFF0C\u56E0\u4E3A\u5B83\u5DF2\u88AB\u5220\u9664\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 entry components",
    action: "`entryComponents` \u4E0D\u518D\u53EF\u7528\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4ECE `@NgModule` \u548C `@Component` \u516C\u5171 API \u4E2D\u5220\u9664\u4EFB\u4F55\u5BF9\u5B83\u7684\u5F15\u7528\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 ngTemplateOutletContext",
    action: "ngTemplateOutletContext \u5177\u6709\u66F4\u4E25\u683C\u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u9700\u8981\u4F60\u5728\u76F8\u5E94\u5BF9\u8C61\u4E2D\u58F0\u660E\u6240\u6709\u5C5E\u6027\u3002[\u7EE7\u7EED\u9605\u8BFB](https://github.com/angular/angular/blob/main/CHANGELOG.md#common-1)."
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 APF",
    action: "Angular \u5305\u4E0D\u518D\u5305\u62EC FESM2015\uFF0C\u5E76\u4E14\u5206\u5E03\u5F0F ECMScript \u5DF2\u4ECE 2020 \u66F4\u65B0\u5230 2022\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: "v16 EventManager",
    action: "\u5DF2\u5220\u9664\u5DF2\u5F03\u7528\u7684 `EventManager` \u65B9\u6CD5 `addGlobalEventListener`\uFF0C\u56E0\u4E3A\u5B83\u672A\u88AB Ivy \u4F7F\u7528\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 BrowserTransferStateModule",
    action: "`BrowserTransferStateModule` \u4E0D\u518D\u53EF\u7528\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4ECE\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5220\u9664\u4EFB\u4F55\u5BF9\u5B83\u7684\u5F15\u7528\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: "v16 ReflectiveInjector",
    action: "\u66F4\u65B0\u4F60\u7684\u4EE3\u7801\uFF0C\u4F7F\u7528 `Injector.create` \u800C\u4E0D\u662F `ReflectiveInjector`\uFF0C\u56E0\u4E3A `ReflectiveInjector` \u5DF2\u88AB\u79FB\u9664\u3002"
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: "v16 QueryList",
    action: "`QueryList.filter` \u73B0\u5728\u652F\u6301\u7C7B\u578B\u4FDD\u62A4\u51FD\u6570\u3002\u7531\u4E8E\u7C7B\u578B\u5C06\u88AB\u7F29\u5C0F\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u4F9D\u8D56\u4E8E\u65E7\u884C\u4E3A\u7684\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 node support",
    action: "\u5728\u5347\u7EA7\u5E94\u7528\u7A0B\u5E8F\u4E4B\u524D\uFF0C\u8BF7\u786E\u4FDD\u4F60\u6B63\u5728\u4F7F\u7528\u53D7\u652F\u6301\u7684 node.js \u7248\u672C\u3002Angular v17 \u652F\u6301 node.js \u7248\u672C\uFF1Av18.13.0 \u53CA\u66F4\u9AD8\u7248\u672C\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 ts support",
    action: "\u5728\u5347\u7EA7\u5E94\u7528\u7A0B\u5E8F\u4E4B\u524D\uFF0C\u8BF7\u786E\u4FDD\u4F60\u6B63\u5728\u4F7F\u7528\u53D7\u652F\u6301\u7684 TypeScript \u7248\u672C\u3002Angular v17 \u652F\u6301 TypeScript \u7248\u672C 5.2 \u6216\u66F4\u9AD8\u7248\u672C\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 zone.js support",
    action: "\u5728\u5347\u7EA7\u5E94\u7528\u7A0B\u5E8F\u4E4B\u524D\uFF0C\u8BF7\u786E\u4FDD\u4F60\u6B63\u5728\u4F7F\u7528\u53D7\u652F\u6301\u7684 Zone.js \u7248\u672C\u3002Angular v17 \u652F\u6301 Zone.js \u7248\u672C 0.14.x \u6216\u66F4\u9AD8\u7248\u672C\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 ng update",
    action: "\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u9879\u76EE\u76EE\u5F55\u4E2D\u8FD0\u884C `ng update @angular/core@17 @angular/cli@17`\uFF0C\u5C06\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u5347\u7EA7\u5230 Angular v17\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "\u8FD0\u884C `ng update @angular/material@17`\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 style removal",
    action: "Angular \u73B0\u5728\u4F1A\u81EA\u52A8\u5220\u9664\u9500\u6BC1\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5F71\u54CD\u5230\u4F60\u73B0\u6709\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u7279\u522B\u662F\u5728\u4F60\u4F9D\u8D56\u4E8E\u6CC4\u6F0F\u6837\u5F0F\u7684\u60C5\u51B5\u4E0B\u3002\u8981\u66F4\u6539\u6B64\u8BBE\u7F6E\uFF0C\u8BF7\u5C06 `REMOVE_STYLES_ON_COMPONENT_DESTROY` \u63D0\u4F9B\u7A0B\u5E8F\u7684\u503C\u66F4\u6539\u4E3A `false`\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 router removals",
    action: "\u786E\u4FDD\u4F60\u5728 `provideRouter` \u6216 `RouterModule.forRoot` \u4E2D\u914D\u7F6E `setupTestingRouter`\u3001`canceledNavigationResolution`\u3001`paramsInheritanceStrategy`\u3001`titleStrategy`\u3001`urlUpdateStrategy`\u3001`urlHandlingStrategy` \u548C `malformedUriErrorHandler`\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u5C5E\u6027\u73B0\u5728\u4E0D\u518D\u662F `Router` \u7684\u516C\u5171 API \u7684\u4E00\u90E8\u5206\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Advanced,
    step: "v17 ngDoCheck dynamic components",
    action: "\u5BF9\u4E8E\u52A8\u6001\u5B9E\u4F8B\u5316\u7684\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u73B0\u5728\u5728\u53D8\u66F4\u68C0\u6D4B\u671F\u95F4\u6267\u884C `ngDoCheck`\uFF0C\u5982\u679C\u7EC4\u4EF6\u88AB\u6807\u8BB0\u4E3A\u810F\uFF0C\u5219\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u52A8\u6001\u5B9E\u4F8B\u5316\u7EC4\u4EF6\u7684\u6D4B\u8BD5\u6216 `ngDoCheck` \u4E2D\u7684\u903B\u8F91\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 malformedUriErrorHandler",
    action: "\u5728 `UrlSerializer.parse` \u4E2D\u5904\u7406 URL \u89E3\u6790\u9519\u8BEF\uFF0C\u800C\u4E0D\u662F `malformedUriErrorHandler`\uFF0C\u56E0\u4E3A\u5B83\u73B0\u5728\u662F\u516C\u5171 API \u7684\u4E00\u90E8\u5206\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 zone deep imports",
    action: "\u5C06 Zone.js \u7684\u6DF1\u5EA6\u5BFC\u5165\uFF08\u5982 `zone.js/bundles/zone-testing.js` \u548C `zone.js/dist/zone`\uFF09\u66F4\u6539\u4E3A `zone.js` \u548C `zone.js/testing`\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Advanced,
    step: "v17 absolute redirects",
    action: "\u4F60\u53EF\u80FD\u9700\u8981\u8C03\u6574\u8DEF\u7531\u5668\u914D\u7F6E\u4EE5\u9632\u6B62\u7EDD\u5BF9\u91CD\u5B9A\u5411\u540E\u7684\u65E0\u9650\u91CD\u5B9A\u5411\u3002\u5728 v17 \u4E2D\uFF0C\u6211\u4EEC\u4E0D\u518D\u5728\u7EDD\u5BF9\u91CD\u5B9A\u5411\u540E\u963B\u6B62\u989D\u5916\u7684\u91CD\u5B9A\u5411\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 AnimationDriver",
    action: "\u5C06\u5BF9 `AnimationDriver.NOOP` \u7684\u5F15\u7528\u66F4\u6539\u4E3A\u4F7F\u7528 `NoopAnimationDriver`\uFF0C\u56E0\u4E3A `AnimationDriver.NOOP` \u73B0\u5728\u5DF2\u88AB\u5F03\u7528\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 switch strictness",
    action: "\u4F60\u53EF\u80FD\u9700\u8981\u8C03\u6574 `NgSwitch` \u7684\u76F8\u7B49\u6027\u68C0\u67E5\uFF0C\u56E0\u4E3A\u73B0\u5728\u9ED8\u8BA4\u91C7\u7528\u66F4\u4E25\u683C\u7684 `===` \u800C\u4E0D\u662F `==`\u3002Angular \u5C06\u4E3A\u9700\u8981\u63D0\u4F9B\u8C03\u6574\u7684\u7528\u6CD5\u8BB0\u5F55\u8B66\u544A\u6D88\u606F\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Advanced,
    step: "v17 mutate in signals",
    action: "\u5728 Angular \u4FE1\u53F7\u4E2D\u4F7F\u7528 `update` \u4EE3\u66FF `mutate`\u3002\u4F8B\u5982\uFF0C`items.mutate(itemsArray => itemsArray.push(newItem));` \u73B0\u5728\u662F `items.update(itemsArray => [itemsArray, \u2026newItem]);`"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: "v17 withNoDomReuse",
    action: "\u8981\u7981\u7528\u6C34\u5408\u4F5C\u7528\uFF0C\u8BF7\u4F7F\u7528 `ngSkipHydration` \u6216\u4ECE\u63D0\u4F9B\u7A0B\u5E8F\u5217\u8868\u4E2D\u5220\u9664 `provideClientHydration` \u8C03\u7528\uFF0C\u56E0\u4E3A `withNoDomReuse` \u4E0D\u518D\u662F\u516C\u5171 API \u7684\u4E00\u90E8\u5206\u3002"
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: "v17 paramsInheritanceStrategy",
    action: "\u5982\u679C\u4F60\u5E0C\u671B `loadComponent` \u8DEF\u7531\u7684\u5B50\u8DEF\u7531\u4ECE\u5176\u7236\u8DEF\u7531\u7EE7\u627F\u6570\u636E\uFF0C\u8BF7\u5C06 `paramsInheritanceStrategy` \u6307\u5B9A\u4E3A `always`\uFF0C\u5728 v17 \u4E2D\uFF0C\u73B0\u5728\u8BBE\u7F6E\u4E3A `emptyOnly`\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    step: "v18 node support",
    action: "\u5728\u5347\u7EA7\u5E94\u7528\u7A0B\u5E8F\u4E4B\u524D\uFF0C\u8BF7\u786E\u4FDD\u4F60\u6B63\u5728\u4F7F\u7528\u53D7\u652F\u6301\u7684 node.js \u7248\u672C\u3002Angular v18 \u652F\u6301 node.js \u7248\u672C\uFF1Av18.19.0 \u53CA\u66F4\u9AD8\u7248\u672C\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    step: "v18 ng update",
    action: "\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u9879\u76EE\u76EE\u5F55\u4E2D\u8FD0\u884C `ng update @angular/core@18 @angular/cli@18`\uFF0C\u5C06\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u5347\u7EA7\u5230 Angular v18\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "\u8FD0\u884C `ng update @angular/material@18`\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    step: "18.0.0 Upgrade TypeScript",
    action: "\u5C06 TypeScript \u66F4\u65B0\u5230 5.4 \u7248\u672C\u6216\u66F4\u9AD8\u7248\u672C\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: async has been removed, use `waitForAsync` instead",
    action: "\u4ECE `@angular/core` \u4E2D\u66FF\u6362 `async` \u4E3A `waitForAsync`\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Deprecated matchesElement method removed from AnimationDriver",
    action: "\u5220\u9664\u5BF9 `matchesElement` \u7684\u8C03\u7528\uFF0C\u56E0\u4E3A\u5B83\u73B0\u5728\u4E0D\u518D\u662F `AnimationDriver` \u7684\u4E00\u90E8\u5206\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0. Use `@angular/core` StateKey and TransferState",
    action: "\u4ECE `@angular/core` \u4E2D\u5BFC\u5165 `StateKey` \u548C `TransferState`\uFF0C\u800C\u4E0D\u662F `@angular/platform-browser`\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0. Opt-in of caching for HTTP requests with auth headers",
    action: "\u5728 `withHttpTransferCache` \u4E2D\u4F7F\u7528 `includeRequestsWithAuthHeaders: true` \u4EE5\u9009\u62E9\u4E0D\u7F13\u5B58\u9700\u8981\u6388\u6743\u7684 HTTP \u8BF7\u6C42\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0.REMOVE_OBSOLETE_IS_WORKER",
    action: "\u66F4\u65B0\u5E94\u7528\u7A0B\u5E8F\u4EE5\u5220\u9664 `isPlatformWorkerUi` \u548C `isPlatformWorkerApp`\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u5E73\u53F0 WebWorker \u7684\u4E00\u90E8\u5206\uFF0C\u800C\u73B0\u5728\u4E0D\u518D\u662F Angular \u7684\u4E00\u90E8\u5206\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0.FORCE_ZONE_CHANGE_DETECTION",
    action: "\u6D4B\u8BD5\u53EF\u80FD\u9700\u8981\u8FD0\u884C\u989D\u5916\u7684\u53D8\u66F4\u68C0\u6D4B\u8F6E\u6B21\uFF0C\u4EE5\u5B8C\u5168\u53CD\u6620 DOM \u4E2D\u7684\u6D4B\u8BD5\u72B6\u6001\u3002\u4F5C\u4E3A\u6700\u540E\u7684\u624B\u6BB5\uFF0C\u901A\u8FC7\u5C06 `provideZoneChangeDetection({ignoreChangesOutsideZone: true})` \u6DFB\u52A0\u5230 TestBed \u7684\u63D0\u4F9B\u7A0B\u5E8F\u4E2D\uFF0C\u6062\u590D\u65E7\u7684\u884C\u4E3A\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0: Remove two-way binding expressions in writable bindings",
    action: "\u5220\u9664\u5728\u4F7F\u7528 `[(ngModel)]` \u7684\u6A21\u677F\u4E2D\u5199\u5165\u5C5E\u6027\u7684\u8868\u8FBE\u5F0F\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Use zones to track pending requests",
    action: "\u5220\u9664\u5BF9 `Testability` \u65B9\u6CD5 `increasePendingRequestCount`\u3001`decreasePendingRequestCount` \u548C `getPendingRequestCount` \u7684\u8C03\u7528\u3002\u8FD9\u4E9B\u4FE1\u606F\u7531 ZoneJS \u8DDF\u8E2A\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0: Move shared providers to the routed component",
    action: "\u5C06\u5E94\u8BE5\u5BF9\u8DEF\u7531\u7EC4\u4EF6\u53EF\u7528\u7684\u4EFB\u4F55\u73AF\u5883\u63D0\u4F9B\u8005\u4ECE\u5B9A\u4E49 `RouterOutlet` \u7684\u7EC4\u4EF6\u79FB\u52A8\u5230 `bootstrapApplication` \u6216 `Route` \u914D\u7F6E\u7684\u63D0\u4F9B\u8005\u4E2D\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0 Use RedirectCommand or new NavigationBehaviorOptions",
    action: "\u5F53\u5B88\u536B\u5C06 `UrlTree` \u4F5C\u4E3A\u91CD\u5B9A\u5411\u8FD4\u56DE\u65F6\uFF0C\u91CD\u5B9A\u5411\u5BFC\u822A\u73B0\u5728\u5C06\u4F7F\u7528 `replaceUrl`\uFF0C\u5982\u679C\u521D\u59CB\u5BFC\u822A\u4E5F\u4F7F\u7528\u4E86 `replaceUrl` \u9009\u9879\u3002\u5982\u679C\u4F60\u5E0C\u671B\u4FDD\u7559\u4EE5\u524D\u7684\u884C\u4E3A\uFF0C\u8BF7\u4F7F\u7528\u65B0\u7684 `NavigationBehaviorOptions` \u914D\u7F6E\u91CD\u5B9A\u5411\uFF0C\u65B9\u6CD5\u662F\u8FD4\u56DE\u5177\u6709\u6240\u9700\u9009\u9879\u7684 `RedirectCommand` \u800C\u4E0D\u662F `UrlTree`\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Remove deprecated resource cache providers",
    action: "\u5220\u9664 `RESOURCE_CACHE_PROVIDER` \u7684\u4F9D\u8D56\u9879\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u518D\u662F Angular \u8FD0\u884C\u65F6\u7684\u4E00\u90E8\u5206\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Update Node.js URL parsing in `ServerPlatformLocation`",
    action: "\u5728 `@angular/platform-server` \u4E2D\uFF0C\u73B0\u5728 `pathname` \u603B\u662F\u4EE5 `/` \u7ED3\u5C3E\uFF0C\u800C http: \u548C https: \u7684\u9ED8\u8BA4\u7AEF\u53E3\u5206\u522B\u662F 80 \u548C 443\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0. Use absolute URLs",
    action: "\u63D0\u4F9B\u7EDD\u5BF9 `url`\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528 `PlatformConfig` \u4E2D\u7684 `useAbsoluteUrl` \u548C `baseUrl`\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0. Switch from `platformDynamicServer` to `platformServer`.",
    action: "\u5C06 `platformDynamicServer` \u7684\u7528\u6CD5\u66FF\u6362\u4E3A `platformServer`\u3002\u53E6\u5916\uFF0C\u6DFB\u52A0\u4E00\u4E2A `import @angular/compiler`\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0. Remove `ServerTransferStateModule` from app imports",
    action: "\u4ECE\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5220\u9664\u6240\u6709\u5BF9 `ServerTransferStateModule` \u7684\u5BFC\u5165\u3002\u5B83\u4E0D\u518D\u9700\u8981\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0. Update `Route.redirectTo` to accept functions",
    action: "`Route.redirectTo` \u73B0\u5728\u53EF\u4EE5\u63A5\u53D7\u51FD\u6570\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u5B57\u7B26\u4E32\u3002\u4EFB\u4F55\u76F4\u63A5\u8BFB\u53D6 `Route` \u5BF9\u8C61\u5E76\u671F\u671B `redirectTo` \u662F\u5B57\u7B26\u4E32\u7684\u4EE3\u7801\u53EF\u80FD\u9700\u8981\u66F4\u65B0\uFF0C\u4EE5\u8003\u8651\u51FD\u6570\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: Guards can return `RedirectCommand`",
    action: "\u9664\u4E86 `UrlTree` \u548C `boolean`\uFF0C`Route` \u5B88\u536B\u548C\u89E3\u6790\u5668\u73B0\u5728\u8FD8\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A `RedirectCommand` \u5BF9\u8C61\u3002\u4EFB\u4F55\u76F4\u63A5\u8BFB\u53D6 `Route` \u5BF9\u8C61\u5E76\u671F\u671B\u53EA\u6709 `boolean` \u6216 `UrlTree` \u7684\u4EE3\u7801\u53EF\u80FD\u9700\u8981\u66F4\u65B0\uFF0C\u4EE5\u8003\u8651 `RedirectCommand`\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: "18.0.0: Mark `OnPush` views dirty",
    action: "\u5BF9\u4E8E\u4F7F\u7528 `OnPush` \u53D8\u66F4\u68C0\u6D4B\u7684\u4EFB\u4F55\u7EC4\u4EF6\uFF0C\u8BF7\u786E\u4FDD\u5B83\u4EEC\u88AB\u6B63\u786E\u6807\u8BB0\u4E3A\u810F\uFF0C\u4EE5\u542F\u7528\u5BBF\u4E3B\u7ED1\u5B9A\u66F4\u65B0\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0-Refresh-Newly-Created-Views",
    action: "\u8BF7\u6CE8\u610F\uFF0C\u65B0\u521B\u5EFA\u7684\u89C6\u56FE\u6216\u5728\u53D8\u66F4\u68C0\u6D4B\u671F\u95F4\u6807\u8BB0\u4E3A\u68C0\u67E5\u5E76\u91CD\u65B0\u9644\u52A0\u7684\u89C6\u56FE\u73B0\u5728\u4FDD\u8BC1\u5728\u540C\u4E00\u53D8\u66F4\u68C0\u6D4B\u5468\u671F\u4E2D\u5237\u65B0\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0: `ComponentFixture.whenStable` matches `ApplicationRef.isStable`",
    action: "\u5728\u8C03\u6574 `ComponentFixture.whenStable` \u548C `ApplicationRef.isStable` \u8BED\u4E49\u540E\uFF0C\u4F7F\u7528 `whenStable` \u65F6\u4F60\u7684\u6D4B\u8BD5\u53EF\u80FD\u9700\u8981\u66F4\u957F\u65F6\u95F4\u7B49\u5F85\u3002"
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: "18.0.0. `ComponentFixture.autoDetect` behavior more closely matches Application behavior",
    action: "\u5982\u679C\u4F60\u7684\u6D4B\u8BD5\u4F9D\u8D56\u4E8E `ComponentFixture.autoDetect` \u7684\u53D8\u66F4\u68C0\u6D4B\u6267\u884C\u987A\u5E8F\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u6D4B\u8BD5\u5931\u8D25\uFF0C\u56E0\u4E3A\u5B83\u73B0\u5728\u4F1A\u5728 `ApplicationRef.tick` \u4E2D\u6267\u884C\u6D4B\u8BD5\u5939\u5177\u7684\u53D8\u66F4\u68C0\u6D4B\u3002\u4F8B\u5982\uFF0C\u8FD9\u5C06\u5BFC\u81F4\u6D4B\u8BD5\u5939\u5177\u5728\u521B\u5EFA\u4EFB\u4F55\u5BF9\u8BDD\u6846\u4E4B\u524D\u5237\u65B0\uFF0C\u800C\u4EE5\u524D\u53EF\u80FD\u76F8\u53CD\u3002"
  },
  {
    action: "\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u9879\u76EE\u76EE\u5F55\u4E2D\uFF0C\u8FD0\u884C `ng update @angular/core@19 @angular/cli@19` \u4EE5\u5C06\u5E94\u7528\u5347\u7EA7\u5230Angular v19\u3002",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0_ng_update"
  },
  {
    possibleIn: 1900,
    necessaryAsOf: 1900,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "\u8FD0\u884C `ng update @angular/material@19`\u3002"
  },
  {
    action: "Angular\u6307\u4EE4\u3001\u7EC4\u4EF6\u548C\u7BA1\u9053\u73B0\u5728\u9ED8\u8BA4\u662F\u72EC\u7ACB\u7684\u3002\u5BF9\u4E8E\u5F53\u524D\u5728NgModule\u4E2D\u58F0\u660E\u7684\u58F0\u660E\uFF0C\u9700\u660E\u786E\u6307\u5B9A `standalone: false`\u3002Angular CLI\u5C06\u81EA\u52A8\u66F4\u65B0\u4EE3\u7801\u4EE5\u53CD\u6620\u6B64\u53D8\u66F4\u3002",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-standalone-declarations"
  },
  {
    action: "\u8BBF\u95EE\u6A21\u677F\u5F15\u7528\u53D8\u91CF\u65F6\u79FB\u9664 `this.` \u524D\u7F00\u3002\u4F8B\u5982\uFF0C\u5C06 `<div #foo></div>{{ this.foo }}` \u91CD\u6784\u4E3A `<div #foo></div>{{ foo }}`",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-remove-this"
  },
  {
    action: "\u5C06 `BrowserModule.withServerTransition()` \u7684\u7528\u6CD5\u66FF\u6362\u4E3A\u6CE8\u5165 `APP_ID` \u4EE4\u724C\u6765\u8BBE\u7F6E\u5E94\u7528 `id`\u3002",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-remove-browser-module-with-server-transition"
  },
  {
    action: "`KeyValueDiffers` \u4E2D\u7684 `factories` \u5C5E\u6027\u5DF2\u88AB\u79FB\u9664\u3002",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-remove-key-value-differs-factories"
  },
  {
    action: "\u5728angular.json\u4E2D\uFF0C\u5C06 `@angular/localize` \u6784\u5EFA\u5668\u7684 `name` \u9009\u9879\u66FF\u6362\u4E3A `project`\u3002",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0_localize_builder_project_option"
  },
  {
    action: "\u5C06 `ExperimentalPendingTasks` \u91CD\u547D\u540D\u4E3A `PendingTasks`\u3002",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0_rename_experimental_pending_tasks"
  },
  {
    action: "\u66F4\u65B0\u4F9D\u8D56effects\u7684 `Promise` \u65F6\u5E8F\u7684\u6D4B\u8BD5\uFF0C\u6539\u7528 `await whenStable()` \u6216\u8C03\u7528 `.detectChanges()` \u6765\u89E6\u53D1effects\u3002\u5BF9\u4E8E\u5728\u53D8\u66F4\u68C0\u6D4B\u671F\u95F4\u89E6\u53D1\u7684effects\uFF0C\u786E\u4FDD\u5B83\u4EEC\u4E0D\u4F9D\u8D56\u5E94\u7528\u5B8C\u5168\u6E32\u67D3\uFF0C\u6216\u8003\u8651\u4F7F\u7528 `afterRenderEffect()`\u3002\u4F7F\u7528\u6A21\u62DF\u65F6\u949F\u7684\u6D4B\u8BD5\u53EF\u80FD\u9700\u8981\u5FEB\u8FDB/\u6E05\u7A7A\u65F6\u949F\u3002",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0.1"
  },
  {
    action: "\u5347\u7EA7\u81F3TypeScript 5.5\u6216\u66F4\u9AD8\u7248\u672C\u3002",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0.2"
  },
  {
    action: "\u66F4\u65B0\u4F7F\u7528 `fakeAsync` \u7684\u6D4B\u8BD5\uFF1A\u5F53\u53D8\u66F4\u53D1\u751F\u5728 Angular Zone \u5916\u90E8\u65F6\uFF08\u6DF7\u5408\u6A21\u5F0F\u8C03\u5EA6\uFF09\uFF0C\u539F\u6D4B\u8BD5\u4F9D\u8D56\u7684 Zone \u5408\u5E76\u548C\u8C03\u5EA6\u7684\u7279\u5B9A\u65F6\u5E8F\u53EF\u80FD\u53D7\u5230\u5F71\u54CD\uFF0C\u56E0\u4E3A\u73B0\u5728\u8FD9\u4E9B\u8BA1\u65F6\u5668\u4F1A\u53D7 `tick` \u548C `flush` \u5F71\u54CD\u3002",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-timers-in-zone"
  },
  {
    action: "\u4F7F\u7528 `createComponent` API\u4E14\u672A\u4F20\u9012\u7B2C\u4E00\u4E2A `ng-content` \u7684\u5185\u5BB9\u65F6\uFF0C\u9700\u63D0\u4F9B `document.createTextNode('')` \u4F5C\u4E3A `projectableNode` \u4EE5\u9632\u6B62\u6E32\u67D3\u9ED8\u8BA4\u56DE\u9000\u5185\u5BB9\u3002",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-render-default-fallback"
  },
  {
    action: "\u66F4\u65B0\u4F9D\u8D56\u81EA\u5B9A\u4E49\u5143\u7D20\u5468\u8FB9\u53D8\u66F4\u68C0\u6D4B\u7279\u5B9A\u65F6\u5E8F\u6216\u987A\u5E8F\u7684\u6D4B\u8BD5\uFF0C\u7531\u4E8E\u5207\u6362\u81F3\u6DF7\u5408\u8C03\u5EA6\u5668\uFF0C\u65F6\u5E8F\u53EF\u80FD\u5DF2\u53D1\u751F\u53D8\u5316\u3002",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-hybrid-scheduler-timing"
  },
  {
    action: "\u4ECE\u4F7F\u7528 `Router.errorHandler` \u8FC1\u79FB\u5230 `provideRouter` \u7684 `withNavigationErrorHandler` \u6216 `RouterModule.forRoot` \u7684 `errorHandler`\u3002",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-router-error-handler"
  },
  {
    action: "\u66F4\u65B0\u6D4B\u8BD5\u4EE5\u5904\u7406 `ApplicationRef.tick` \u671F\u95F4\u629B\u51FA\u7684\u9519\u8BEF\uFF1A\u53EF\u901A\u8FC7\u540C\u6B65\u89E6\u53D1\u53D8\u66F4\u68C0\u6D4B\u6216\u62D2\u7EDD\u672A\u5B8C\u6210\u7684 `ComponentFixture.whenStable` Promise\u6765\u5B9E\u73B0\u3002",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-testbed-error-handling"
  },
  {
    action: "\u66F4\u65B0 `Resolve` \u63A5\u53E3\u7684\u7528\u6CD5\uFF0C\u5728\u5176\u8FD4\u56DE\u7C7B\u578B\u4E2D\u5305\u542B `RedirectCommand`\u3002",
    level: ApplicationComplexity.Medium,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-update-resolve-interface-return-type"
  },
  {
    action: "`fakeAsync` \u73B0\u5728\u9ED8\u8BA4\u4F1A\u6E05\u7A7A\u5F85\u5904\u7406\u8BA1\u65F6\u5668\u3002\u82E5\u6D4B\u8BD5\u9700\u8981\u539F\u6709\u884C\u4E3A\uFF0C\u9700\u5728\u9009\u9879\u53C2\u6570\u4E2D\u663E\u5F0F\u4F20\u9012 `{flush: false}`\u3002",
    level: ApplicationComplexity.Advanced,
    necessaryAsOf: 1900,
    possibleIn: 1900,
    step: "19.0.0-update-fakeasync-to-flush-pending-timers"
  },
  {
    action: "In the application's project directory, run `ng update @angular/core@20 @angular/cli@20` to update your application to Angular v20.",
    level: ApplicationComplexity.Basic,
    necessaryAsOf: 2e3,
    possibleIn: 2e3,
    step: "20.0.0_ng_update"
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    material: true,
    step: "update @angular/material",
    action: "Run `ng update @angular/material@20`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_rename_afterRender_to_afterEveryRender",
    action: "Rename the `afterRender` lifecycle hook to `afterEveryRender`"
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_replace_TestBed_flushEffects_with_tick",
    action: "Replace uses of `TestBed.flushEffects()` with `TestBed.tick()`, the closest equivalent to synchronously flush effects."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_provideCheckNoChangesConfig",
    action: "Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig`. Note its behavior now applies to all `checkNoChanges` runs. The `useNgZoneOnStable` option is no longer available."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_refactor_ng_reflect_attributes_usage",
    action: "Refactor application and test code to avoid relying on `ng-reflect-*` attributes. If needed temporarily for migration, use `provideNgReflectAttributes()` from `@angular/core` in bootstrap providers to re-enable them in dev mode only."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_adjust_RedirectFn_return_type_handling",
    action: "Adjust code that directly calls functions returning `RedirectFn`. These functions can now also return an `Observable` or `Promise`; ensure your logic correctly handles these asynchronous return types."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_rename_resource_request_to_param",
    action: "Rename the `request` property passed in resources to `params`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_rename_rxResource_loader_to_stream",
    action: "Rename the `loader` property passed in rxResources to `stream`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_replace_ResourceStatus_by_corresponding_strings",
    action: "`ResourceStatus` is no longer an enum. Use the corresponding constant string values instead."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_rename_provideExperimentalZonelessChangeDetection",
    action: "Rename `provideExperimentalZonelessChangeDetection` to `provideZonelessChangeDetection`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_template_expressions_using_in_property",
    action: "If your templates use `{{ in }}` or `in` in expressions to refer to a component property named 'in', change it to `{{ this.in }}` or `this.in` as 'in' now refers to the JavaScript 'in' operator. If you're using `in` as a template reference, you'd have to rename the reference."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_router_method_array_parameters_to_readonly",
    action: "The type for the commands arrays passed to Router methods (`createUrlTree`, `navigate`, `createUrlTreeFromSnapshot`) have been updated to use `readonly T[]` since the array is not mutated. Code which extracts these types (e.g. with `typeof`) may need to be adjusted if it expects mutable arrays."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_animation_tests_for_guaranteed_flushing",
    action: "Review and update tests asserting on DOM elements involved in animations. Animations are now guaranteed to be flushed with change detection or `ApplicationRef.tick`, potentially altering previous test outcomes."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_handle_uncaught_listener_errors_in_tests",
    action: "In tests, uncaught errors in event listeners are now rethrown by default. Previously, these were only logged to the console by default. Catch them if intentional for the test case, or use `rethrowApplicationErrors: false` in `configureTestingModule` as a last resort."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_route_guards_array_types",
    action: "The `any` type is removed from the Route guard arrays (canActivate, canDeactivate, etc); ensure guards are functions, `ProviderToken<T>`, or (deprecated) strings. Refactor string guards to `ProviderToken<T>` or functions."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_update_nodejs_version",
    action: "Ensure your Node.js version is at least 20.11.1 and not v18 or v22.0-v22.10 before upgrading to Angular v20. Check https://angular.dev/reference/versions for the full list of supported Node.js versions."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_replace_TestBed_get_with_TestBed_inject",
    action: "Replace all occurrences of the deprecated `TestBed.get()` method with `TestBed.inject()` in your Angular tests for dependency injection."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_remove_InjectFlags_usage",
    action: "Remove `InjectFlags` enum and its usage from `inject`, `Injector.get`, `EnvironmentInjector.get`, and `TestBed.inject` calls. Use options like `{optional: true}` for `inject` or handle null for `*.get` methods."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_injector_get_calls_to_use_ProviderToken",
    action: "Update `injector.get()` calls to use a specific `ProviderToken<T>` instead of relying on the removed `any` overload. If using string tokens (deprecated since v4), migrate them to `ProviderToken<T>`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Basic,
    step: "20.0.0_update_typescript_version",
    action: "Upgrade your project's TypeScript version to at least 5.8 before upgrading to Angular v20 to ensure compatibility."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_review_AsyncPipe_error_handling_in_tests",
    action: "`Unhandled errors in subscriptions/promises of AsyncPipe` are now directly reported to `ErrorHandler`. This may alter test outcomes; ensure tests correctly handle these reported errors."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_refactor_PendingTasks_run_usage",
    action: "If relying on the return value of `PendingTasks.run`, refactor to use `PendingTasks.add`. Handle promise results/rejections manually, especially for SSR to prevent node process shutdown on unhandled rejections."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_update_template_expressions_using_void_property",
    action: "If your templates use `{{ void }}` or `void` in expressions to refer to a component property named 'void', change it to `{{ this.void }}` or `this.void` as 'void' now refers to the JavaScript `void` operator."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Advanced,
    step: "20.0.0_review_date_pipe_formatter_Y_usage",
    action: "Review `DatePipe` usages. Using the `Y` (week-numbering year) formatter without also including `w` (week number) is now detected as suspicious. Use `y` (year) if that was the intent, or include `w` alongside `Y`."
  },
  {
    possibleIn: 2e3,
    necessaryAsOf: 2e3,
    level: ApplicationComplexity.Medium,
    step: "20.0.0_handle_uncaught_listener_errors_in_tests",
    action: "In templates parentheses are now always respected. This can lead to runtime breakages when nullish coalescing were nested in parathesis. eg `(foo?.bar).baz` will throw if `foo` is nullish as it would in native JavaScript."
  }
];

// node_modules/@angular/material/fesm2022/internal-form-field.mjs
var _c0 = ["mat-internal-form-field", ""];
var _c1 = ["*"];
var __MatInternalFormField = class __MatInternalFormField {
  /** Position of the label relative to the content. */
  labelPosition;
};
__name(__MatInternalFormField, "_MatInternalFormField");
__publicField(__MatInternalFormField, "\u0275fac", /* @__PURE__ */ __name(function _MatInternalFormField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __MatInternalFormField)();
}, "_MatInternalFormField_Factory"));
__publicField(__MatInternalFormField, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __MatInternalFormField,
  selectors: [["div", "mat-internal-form-field", ""]],
  hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function _MatInternalFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
    }
  }, "_MatInternalFormField_HostBindings"),
  inputs: {
    labelPosition: "labelPosition"
  },
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function _MatInternalFormField_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, "_MatInternalFormField_Template"),
  styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var _MatInternalFormField = __MatInternalFormField;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c02 = ["input"];
var _c12 = ["label"];
var _c2 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
__name(MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY, "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY");
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var _MatCheckboxChange = class _MatCheckboxChange {
  /** The source checkbox of the event. */
  source;
  /** The new `checked` value of the checkbox. */
  checked;
};
__name(_MatCheckboxChange, "MatCheckboxChange");
var MatCheckboxChange = _MatCheckboxChange;
var defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
var _MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationsDisabled = _animationsDisabled();
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  /** CSS classes to add when transitioning between the different checkbox states. */
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel = "";
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  ariaDescribedby;
  /**
   * Users can specify the `aria-expanded` attribute which will be forwarded to the input element
   */
  ariaExpanded;
  /**
   * Users can specify the `aria-controls` attribute which will be forwarded to the input element
   */
  ariaControls;
  /** Users can specify the `aria-owns` attribute which will be forwarded to the input element */
  ariaOwns;
  _uniqueId;
  /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
  id;
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether the checkbox is required. */
  required;
  /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
  labelPosition = "after";
  /** Name value will be applied to the input element if present */
  name = null;
  /** Event emitted when the checkbox's `checked` value changes. */
  change = new EventEmitter();
  /** Event emitted when the checkbox's `indeterminate` value changes. */
  indeterminateChange = new EventEmitter();
  /** The value attribute of the native input element */
  value;
  /** Whether the checkbox has a ripple. */
  disableRipple;
  /** The native `<input type="checkbox">` element */
  _inputElement;
  /** The native `<label>` element */
  _labelElement;
  /** Tabindex for the checkbox. */
  tabIndex;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the checkbox. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/checkbox/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the checkbox should remain interactive when it is disabled. */
  disabledInteractive;
  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   * @docs-private
   */
  _onTouched = /* @__PURE__ */ __name(() => {
  }, "_onTouched");
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = /* @__PURE__ */ __name(() => {
  }, "_controlValueAccessorChangeFn");
  _validatorChangeFn = /* @__PURE__ */ __name(() => {
  }, "_validatorChangeFn");
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = this._options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this.indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate();
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate();
    this._indeterminate.set(value);
    if (changed) {
      if (value) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(value);
    }
    this._syncIndeterminate(value);
  }
  _indeterminate = signal(false, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate.set(false);
          this.indeterminateChange.emit(false);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationsDisabled) {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
};
__name(_MatCheckbox, "MatCheckbox");
__publicField(_MatCheckbox, "\u0275fac", /* @__PURE__ */ __name(function MatCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCheckbox)();
}, "MatCheckbox_Factory"));
__publicField(_MatCheckbox, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatCheckbox,
  selectors: [["mat-checkbox"]],
  viewQuery: /* @__PURE__ */ __name(function MatCheckbox_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
    }
  }, "MatCheckbox_Query"),
  hostAttrs: [1, "mat-mdc-checkbox"],
  hostVars: 16,
  hostBindings: /* @__PURE__ */ __name(function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275domProperty("id", ctx.id);
      \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
      \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
      \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
    }
  }, "MatCheckbox_HostBindings"),
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
    ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
    ariaControls: [0, "aria-controls", "ariaControls"],
    ariaOwns: [0, "aria-owns", "ariaOwns"],
    id: "id",
    required: [2, "required", "required", booleanAttribute],
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
    color: "color",
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
    checked: [2, "checked", "checked", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  exportAs: ["matCheckbox"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _MatCheckbox),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: _MatCheckbox,
    multi: true
  }]), \u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c2,
  decls: 15,
  vars: 23,
  consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
  template: /* @__PURE__ */ __name(function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 3);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function MatCheckbox_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._preventBubblingFromLabel($event));
      }, "MatCheckbox_Template_div_click_0_listener"));
      \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function MatCheckbox_Template_div_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onTouchTargetClick());
      }, "MatCheckbox_Template_div_click_3_listener"));
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "input", 6, 1);
      \u0275\u0275listener("blur", /* @__PURE__ */ __name(function MatCheckbox_Template_input_blur_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onBlur());
      }, "MatCheckbox_Template_input_blur_4_listener"))("click", /* @__PURE__ */ __name(function MatCheckbox_Template_input_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onInputClick());
      }, "MatCheckbox_Template_input_click_4_listener"))("change", /* @__PURE__ */ __name(function MatCheckbox_Template_input_change_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onInteractionEvent($event));
      }, "MatCheckbox_Template_input_change_4_listener"));
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 7);
      \u0275\u0275elementStart(7, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 9);
      \u0275\u0275element(9, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(10, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "label", 13, 2);
      \u0275\u0275projection(14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const checkbox_r2 = \u0275\u0275reference(2);
      \u0275\u0275property("labelPosition", ctx.labelPosition);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
      \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
      \u0275\u0275advance(7);
      \u0275\u0275property("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
      \u0275\u0275advance();
      \u0275\u0275property("for", ctx.inputId);
    }
  }, "MatCheckbox_Template"),
  dependencies: [MatRipple, _MatInternalFormField],
  styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var MatCheckbox = _MatCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatCheckbox),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: /* @__PURE__ */ __name((value) => value == null ? void 0 : numberAttribute(value), "transform")
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatCheckboxModule = class _MatCheckboxModule {
};
__name(_MatCheckboxModule, "MatCheckboxModule");
__publicField(_MatCheckboxModule, "\u0275fac", /* @__PURE__ */ __name(function MatCheckboxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCheckboxModule)();
}, "MatCheckboxModule_Factory"));
__publicField(_MatCheckboxModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatCheckboxModule,
  imports: [MatCheckbox, MatCommonModule],
  exports: [MatCheckbox, MatCommonModule]
}));
__publicField(_MatCheckboxModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCheckbox, MatCommonModule, MatCommonModule]
}));
var MatCheckboxModule = _MatCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox, MatCommonModule],
      exports: [MatCheckbox, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var __CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
};
__name(__CdkTextFieldStyleLoader, "_CdkTextFieldStyleLoader");
__publicField(__CdkTextFieldStyleLoader, "\u0275fac", /* @__PURE__ */ __name(function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __CdkTextFieldStyleLoader)();
}, "_CdkTextFieldStyleLoader_Factory"));
__publicField(__CdkTextFieldStyleLoader, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __CdkTextFieldStyleLoader,
  selectors: [["ng-component"]],
  hostAttrs: ["cdk-text-field-style-loader", ""],
  decls: 0,
  vars: 0,
  template: /* @__PURE__ */ __name(function _CdkTextFieldStyleLoader_Template(rf, ctx) {
  }, "_CdkTextFieldStyleLoader_Template"),
  styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var _CdkTextFieldStyleLoader = __CdkTextFieldStyleLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkTextFieldStyleLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "cdk-text-field-style-loader": ""
      },
      styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"]
    }]
  }], null, null);
})();
var listenerOptions = {
  passive: true
};
var _AutofillMonitor = class _AutofillMonitor {
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _monitoredElements = /* @__PURE__ */ new Map();
  constructor() {
  }
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return EMPTY;
    }
    this._styleLoader.load(_CdkTextFieldStyleLoader);
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const subject = new Subject();
    const cssClass = "cdk-text-field-autofilled";
    const listener = /* @__PURE__ */ __name((event) => {
      if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    }, "listener");
    const unlisten = this._ngZone.runOutsideAngular(() => {
      element.classList.add("cdk-text-field-autofill-monitored");
      return this._renderer.listen(element, "animationstart", listener, listenerOptions);
    });
    this._monitoredElements.set(element, {
      subject,
      unlisten
    });
    return subject;
  }
  stopMonitoring(elementOrRef) {
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove("cdk-text-field-autofill-monitored");
      element.classList.remove("cdk-text-field-autofilled");
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
};
__name(_AutofillMonitor, "AutofillMonitor");
__publicField(_AutofillMonitor, "\u0275fac", /* @__PURE__ */ __name(function AutofillMonitor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutofillMonitor)();
}, "AutofillMonitor_Factory"));
__publicField(_AutofillMonitor, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AutofillMonitor,
  factory: _AutofillMonitor.\u0275fac,
  providedIn: "root"
}));
var AutofillMonitor = _AutofillMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofillMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _CdkAutofill = class _CdkAutofill {
  _elementRef = inject(ElementRef);
  _autofillMonitor = inject(AutofillMonitor);
  /** Emits when the autofill state of the element changes. */
  cdkAutofill = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
};
__name(_CdkAutofill, "CdkAutofill");
__publicField(_CdkAutofill, "\u0275fac", /* @__PURE__ */ __name(function CdkAutofill_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkAutofill)();
}, "CdkAutofill_Factory"));
__publicField(_CdkAutofill, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkAutofill,
  selectors: [["", "cdkAutofill", ""]],
  outputs: {
    cdkAutofill: "cdkAutofill"
  }
}));
var CdkAutofill = _CdkAutofill;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAutofill, [{
    type: Directive,
    args: [{
      selector: "[cdkAutofill]"
    }]
  }], () => [], {
    cdkAutofill: [{
      type: Output
    }]
  });
})();
var _CdkTextareaAutosize = class _CdkTextareaAutosize {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _resizeEvents = new Subject();
  /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
  _previousValue;
  _initialHeight;
  _destroyed = new Subject();
  _listenerCleanups;
  _minRows;
  _maxRows;
  _enabled = true;
  /**
   * Value of minRows as of last resize. If the minRows has decreased, the
   * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
   * does not have the same problem because it does not affect the textarea's scrollHeight.
   */
  _previousMinRows = -1;
  _textareaElement;
  /** Minimum amount of rows in the textarea. */
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = coerceNumberProperty(value);
    this._setMinHeight();
  }
  /** Maximum amount of rows in the textarea. */
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = coerceNumberProperty(value);
    this._setMaxHeight();
  }
  /** Whether autosizing is enabled or not */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = void 0;
    if (value) {
      this._textareaElement.setAttribute("placeholder", value);
    } else {
      this._textareaElement.removeAttribute("placeholder");
    }
    this._cacheTextareaPlaceholderHeight();
  }
  /** Cached height of a textarea with a single row. */
  _cachedLineHeight;
  /** Cached height of a textarea with only the placeholder. */
  _cachedPlaceholderHeight;
  /** Cached scroll top of a textarea */
  _cachedScrollTop;
  /** Used to reference correct document/window */
  _document = inject(DOCUMENT);
  _hasFocus;
  _isViewInited = false;
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_CdkTextFieldStyleLoader);
    this._textareaElement = this._elementRef.nativeElement;
  }
  /** Sets the minimum height of the textarea as determined by minRows. */
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  /** Sets the maximum height of the textarea as determined by maxRows. */
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)];
        this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
          this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
          this.resizeToFitContent(true);
        });
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
    this._resizeEvents.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Cache the height of a single-row textarea if it has not already been cached.
   *
   * We need to know how large a single "row" of a textarea is in order to apply minRows and
   * maxRows. For the initial version, we will assume that the height of a single line in the
   * textarea does not ever change.
   */
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    const textareaClone = this._textareaElement.cloneNode(false);
    const cloneStyles = textareaClone.style;
    textareaClone.rows = 1;
    cloneStyles.position = "absolute";
    cloneStyles.visibility = "hidden";
    cloneStyles.border = "none";
    cloneStyles.padding = "0";
    cloneStyles.height = "";
    cloneStyles.minHeight = "";
    cloneStyles.maxHeight = "";
    cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
    cloneStyles.overflow = "hidden";
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || "";
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = isFirefox && this._hasFocus;
    const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    element.classList.add(measuringClass);
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  /** Handles `focus` and `blur` events. */
  _handleFocusEvent = /* @__PURE__ */ __name((event) => {
    this._hasFocus = event.type === "focus";
  }, "_handleFocusEvent");
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  /**
   * Resize the textarea to fit its content.
   * @param force Whether to force a height recalculation. By default the height will be
   *    recalculated only if the value changed since the last call.
   */
  resizeToFitContent(force = false) {
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    this._cachedScrollTop = this._textareaElement.scrollTop;
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  /**
   * Resets the textarea to its original size
   */
  reset() {
    if (this._initialHeight !== void 0) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
  }
  /**
   * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
   * prevent it from scrolling to the caret position. We need to re-set the selection
   * in order for it to scroll to the proper position.
   */
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
      textarea.scrollTop = this._cachedScrollTop;
    }
  }
};
__name(_CdkTextareaAutosize, "CdkTextareaAutosize");
__publicField(_CdkTextareaAutosize, "\u0275fac", /* @__PURE__ */ __name(function CdkTextareaAutosize_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTextareaAutosize)();
}, "CdkTextareaAutosize_Factory"));
__publicField(_CdkTextareaAutosize, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkTextareaAutosize,
  selectors: [["textarea", "cdkTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
  hostBindings: /* @__PURE__ */ __name(function CdkTextareaAutosize_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", /* @__PURE__ */ __name(function CdkTextareaAutosize_input_HostBindingHandler() {
        return ctx._noopInputHandler();
      }, "CdkTextareaAutosize_input_HostBindingHandler"));
    }
  }, "CdkTextareaAutosize_HostBindings"),
  inputs: {
    minRows: [0, "cdkAutosizeMinRows", "minRows"],
    maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
    enabled: [2, "cdkTextareaAutosize", "enabled", booleanAttribute],
    placeholder: "placeholder"
  },
  exportAs: ["cdkTextareaAutosize"]
}));
var CdkTextareaAutosize = _CdkTextareaAutosize;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextareaAutosize, [{
    type: Directive,
    args: [{
      selector: "textarea[cdkTextareaAutosize]",
      exportAs: "cdkTextareaAutosize",
      host: {
        "class": "cdk-textarea-autosize",
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        "rows": "1",
        "(input)": "_noopInputHandler()"
      }
    }]
  }], () => [], {
    minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }],
    maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }],
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTextareaAutosize",
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var _TextFieldModule = class _TextFieldModule {
};
__name(_TextFieldModule, "TextFieldModule");
__publicField(_TextFieldModule, "\u0275fac", /* @__PURE__ */ __name(function TextFieldModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TextFieldModule)();
}, "TextFieldModule_Factory"));
__publicField(_TextFieldModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _TextFieldModule,
  imports: [CdkAutofill, CdkTextareaAutosize],
  exports: [CdkAutofill, CdkTextareaAutosize]
}));
__publicField(_TextFieldModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({}));
var TextFieldModule = _TextFieldModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/input-value-accessor.mjs
var MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");

// node_modules/@angular/material/fesm2022/form-field-module.mjs
var _MatFormFieldModule = class _MatFormFieldModule {
};
__name(_MatFormFieldModule, "MatFormFieldModule");
__publicField(_MatFormFieldModule, "\u0275fac", /* @__PURE__ */ __name(function MatFormFieldModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatFormFieldModule)();
}, "MatFormFieldModule_Factory"));
__publicField(_MatFormFieldModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatFormFieldModule,
  imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
  exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
}));
__publicField(_MatFormFieldModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, ObserversModule, MatFormField, MatCommonModule]
}));
var MatFormFieldModule = _MatFormFieldModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
      exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
__name(getMatInputUnsupportedTypeError, "getMatInputUnsupportedTypeError");
var MAT_INPUT_INVALID_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
var MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
var _MatInput = class _MatInput {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  _autofillMonitor = inject(AutofillMonitor);
  _ngZone = inject(NgZone);
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _renderer = inject(Renderer2);
  _uid = inject(_IdGenerator).getId("mat-input-");
  _previousNativeValue;
  _inputValueAccessor;
  _signalBasedValueAccessor;
  _previousPlaceholder;
  _errorStateTracker;
  _config = inject(MAT_INPUT_CONFIG, {
    optional: true
  });
  _cleanupIosKeyup;
  _cleanupWebkitWheel;
  /** Whether the component is being rendered on the server. */
  _isServer;
  /** Whether the component is a native html select. */
  _isNativeSelect;
  /** Whether the component is a textarea. */
  _isTextarea;
  /** Whether the input is inside of a form field. */
  _isInFormField;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  focused = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  stateChanges = new Subject();
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  controlType = "mat-input";
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  autofilled = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  _disabled = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  _id;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  placeholder;
  /**
   * Name of the input.
   * @docs-private
   */
  name;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  _required;
  /** Input type of the element. */
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "text";
    this._validateType();
    if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  _type = "text";
  /** An object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  userAriaDescribedBy;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get value() {
    return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
  }
  set value(value) {
    if (value !== this.value) {
      if (this._signalBasedValueAccessor) {
        this._signalBasedValueAccessor.value.set(value);
      } else {
        this._inputValueAccessor.value = value;
      }
      this.stateChanges.next();
    }
  }
  /** Whether the element is readonly. */
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = coerceBooleanProperty(value);
  }
  _readonly = false;
  /** Whether the input should remain interactive when it is disabled. */
  disabledInteractive;
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter((t) => getSupportedInputTypes().has(t));
  constructor() {
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, {
      optional: true,
      self: true
    });
    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();
    if (accessor) {
      if (isSignal(accessor.value)) {
        this._signalBasedValueAccessor = accessor;
      } else {
        this._inputValueAccessor = accessor;
      }
    } else {
      this._inputValueAccessor = element;
    }
    this._previousNativeValue = this.value;
    this.id = this.id;
    if (this._platform.IOS) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
      });
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === "select";
    this._isTextarea = nodeName === "textarea";
    this._isInFormField = !!this._formField;
    this.disabledInteractive = this._config?.disabledInteractive || false;
    if (this._isNativeSelect) {
      this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
    }
    if (this._signalBasedValueAccessor) {
      effect(() => {
        this._signalBasedValueAccessor.value();
        this.stateChanges.next();
      });
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    this._cleanupIosKeyup?.();
    this._cleanupWebkitWheel?.();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled;
        this.stateChanges.next();
      }
    }
    this._dirtyCheckNativeValue();
    this._dirtyCheckPlaceholder();
  }
  /** Focuses the input. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Callback for the cases where the focused state of the input changes. */
  _focusChanged(isFocused) {
    if (isFocused === this.focused) {
      return;
    }
    if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
      const element = this._elementRef.nativeElement;
      if (element.type === "number") {
        element.type = "text";
        element.setSelectionRange(0, 0);
        element.type = "number";
      } else {
        element.setSelectionRange(0, 0);
      }
    }
    this.focused = isFocused;
    this.stateChanges.next();
  }
  _onInput() {
  }
  /** Does some manual dirty checking on the native input `value` property. */
  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  /** Does some manual dirty checking on the native input `placeholder` attribute. */
  _dirtyCheckPlaceholder() {
    const placeholder = this._getPlaceholder();
    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
    }
  }
  /** Gets the current placeholder of the form field. */
  _getPlaceholder() {
    return this.placeholder || null;
  }
  /** Make sure the input is a supported type. */
  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  /** Checks whether the input type is one of the types that are never empty. */
  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  /** Checks whether the input is invalid based on the native validation. */
  _isBadInput() {
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0];
      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused && !this.disabled || !this.empty;
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }
  /** Whether the form control is a native select that is displayed inline. */
  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }
  _iOSKeyupListener = /* @__PURE__ */ __name((event) => {
    const el = event.target;
    if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
      el.setSelectionRange(1, 1);
      el.setSelectionRange(0, 0);
    }
  }, "_iOSKeyupListener");
  /** Gets the value to set on the `readonly` attribute. */
  _getReadonlyAttribute() {
    if (this._isNativeSelect) {
      return null;
    }
    if (this.readonly || this.disabled && this.disabledInteractive) {
      return "true";
    }
    return null;
  }
};
__name(_MatInput, "MatInput");
__publicField(_MatInput, "\u0275fac", /* @__PURE__ */ __name(function MatInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatInput)();
}, "MatInput_Factory"));
__publicField(_MatInput, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatInput,
  selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
  hostAttrs: [1, "mat-mdc-input-element"],
  hostVars: 21,
  hostBindings: /* @__PURE__ */ __name(function MatInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", /* @__PURE__ */ __name(function MatInput_focus_HostBindingHandler() {
        return ctx._focusChanged(true);
      }, "MatInput_focus_HostBindingHandler"))("blur", /* @__PURE__ */ __name(function MatInput_blur_HostBindingHandler() {
        return ctx._focusChanged(false);
      }, "MatInput_blur_HostBindingHandler"))("input", /* @__PURE__ */ __name(function MatInput_input_HostBindingHandler() {
        return ctx._onInput();
      }, "MatInput_input_HostBindingHandler"));
    }
    if (rf & 2) {
      \u0275\u0275domProperty("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
      \u0275\u0275attribute("name", ctx.name || null)("readonly", ctx._getReadonlyAttribute())("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
      \u0275\u0275classProp("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mat-mdc-input-disabled-interactive", ctx.disabledInteractive)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
    }
  }, "MatInput_HostBindings"),
  inputs: {
    disabled: "disabled",
    id: "id",
    placeholder: "placeholder",
    name: "name",
    required: "required",
    type: "type",
    errorStateMatcher: "errorStateMatcher",
    userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
    value: "value",
    readonly: "readonly",
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
  },
  exportAs: ["matInput"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: MatFormFieldControl,
    useExisting: _MatInput
  }]), \u0275\u0275NgOnChangesFeature]
}));
var MatInput = _MatInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInput, [{
    type: Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: "matInput",
      host: {
        "class": "mat-mdc-input-element",
        // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
        // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
        // this MDC equivalent input.
        "[class.mat-input-server]": "_isServer",
        "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
        "[class.mat-mdc-form-field-input-control]": "_isInFormField",
        "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
        "[class.mdc-text-field__input]": "_isInFormField",
        "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[id]": "id",
        "[disabled]": "disabled && !disabledInteractive",
        "[required]": "required",
        "[attr.name]": "name || null",
        "[attr.readonly]": "_getReadonlyAttribute()",
        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
        // Only mark the input as invalid for assistive technology if it has a value since the
        // state usually overlaps with `aria-required` when the input is empty and can be redundant.
        "[attr.aria-invalid]": "(empty && required) ? null : errorState",
        "[attr.aria-required]": "required",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[attr.id]": "id",
        "(focus)": "_focusChanged(true)",
        "(blur)": "_focusChanged(false)",
        "(input)": "_onInput()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatInput
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    value: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatInputModule = class _MatInputModule {
};
__name(_MatInputModule, "MatInputModule");
__publicField(_MatInputModule, "\u0275fac", /* @__PURE__ */ __name(function MatInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatInputModule)();
}, "MatInputModule_Factory"));
__publicField(_MatInputModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatInputModule,
  imports: [MatCommonModule, MatFormFieldModule, MatInput],
  exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
}));
__publicField(_MatInputModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatFormFieldModule, MatFormFieldModule, TextFieldModule, MatCommonModule]
}));
var MatInputModule = _MatInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInputModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatFormFieldModule, MatInput],
      exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/card.mjs
var _c03 = ["*"];
var _c13 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
var _c22 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
var _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
var _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
var MAT_CARD_CONFIG = new InjectionToken("MAT_CARD_CONFIG");
var _MatCard = class _MatCard {
  appearance;
  constructor() {
    const config = inject(MAT_CARD_CONFIG, {
      optional: true
    });
    this.appearance = config?.appearance || "raised";
  }
};
__name(_MatCard, "MatCard");
__publicField(_MatCard, "\u0275fac", /* @__PURE__ */ __name(function MatCard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCard)();
}, "MatCard_Factory"));
__publicField(_MatCard, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatCard,
  selectors: [["mat-card"]],
  hostAttrs: [1, "mat-mdc-card", "mdc-card"],
  hostVars: 8,
  hostBindings: /* @__PURE__ */ __name(function MatCard_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined")("mat-mdc-card-filled", ctx.appearance === "filled")("mdc-card--filled", ctx.appearance === "filled");
    }
  }, "MatCard_HostBindings"),
  inputs: {
    appearance: "appearance"
  },
  exportAs: ["matCard"],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, "MatCard_Template"),
  styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var MatCard = _MatCard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCard, [{
    type: Component,
    args: [{
      selector: "mat-card",
      host: {
        "class": "mat-mdc-card mdc-card",
        "[class.mat-mdc-card-outlined]": 'appearance === "outlined"',
        "[class.mdc-card--outlined]": 'appearance === "outlined"',
        "[class.mat-mdc-card-filled]": 'appearance === "filled"',
        "[class.mdc-card--filled]": 'appearance === "filled"'
      },
      exportAs: "matCard",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n']
    }]
  }], () => [], {
    appearance: [{
      type: Input
    }]
  });
})();
var _MatCardTitle = class _MatCardTitle {
};
__name(_MatCardTitle, "MatCardTitle");
__publicField(_MatCardTitle, "\u0275fac", /* @__PURE__ */ __name(function MatCardTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardTitle)();
}, "MatCardTitle_Factory"));
__publicField(_MatCardTitle, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardTitle,
  selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
  hostAttrs: [1, "mat-mdc-card-title"]
}));
var MatCardTitle = _MatCardTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        "class": "mat-mdc-card-title"
      }
    }]
  }], null, null);
})();
var _MatCardTitleGroup = class _MatCardTitleGroup {
};
__name(_MatCardTitleGroup, "MatCardTitleGroup");
__publicField(_MatCardTitleGroup, "\u0275fac", /* @__PURE__ */ __name(function MatCardTitleGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardTitleGroup)();
}, "MatCardTitleGroup_Factory"));
__publicField(_MatCardTitleGroup, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatCardTitleGroup,
  selectors: [["mat-card-title-group"]],
  hostAttrs: [1, "mat-mdc-card-title-group"],
  ngContentSelectors: _c22,
  decls: 4,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatCardTitleGroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c13);
      \u0275\u0275domElementStart(0, "div");
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
      \u0275\u0275projection(2, 1);
      \u0275\u0275projection(3, 2);
    }
  }, "MatCardTitleGroup_Template"),
  encapsulation: 2,
  changeDetection: 0
}));
var MatCardTitleGroup = _MatCardTitleGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardTitleGroup, [{
    type: Component,
    args: [{
      selector: "mat-card-title-group",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-title-group"
      },
      template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var _MatCardContent = class _MatCardContent {
};
__name(_MatCardContent, "MatCardContent");
__publicField(_MatCardContent, "\u0275fac", /* @__PURE__ */ __name(function MatCardContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardContent)();
}, "MatCardContent_Factory"));
__publicField(_MatCardContent, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardContent,
  selectors: [["mat-card-content"]],
  hostAttrs: [1, "mat-mdc-card-content"]
}));
var MatCardContent = _MatCardContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardContent, [{
    type: Directive,
    args: [{
      selector: "mat-card-content",
      host: {
        "class": "mat-mdc-card-content"
      }
    }]
  }], null, null);
})();
var _MatCardSubtitle = class _MatCardSubtitle {
};
__name(_MatCardSubtitle, "MatCardSubtitle");
__publicField(_MatCardSubtitle, "\u0275fac", /* @__PURE__ */ __name(function MatCardSubtitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardSubtitle)();
}, "MatCardSubtitle_Factory"));
__publicField(_MatCardSubtitle, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardSubtitle,
  selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
  hostAttrs: [1, "mat-mdc-card-subtitle"]
}));
var MatCardSubtitle = _MatCardSubtitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSubtitle, [{
    type: Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        "class": "mat-mdc-card-subtitle"
      }
    }]
  }], null, null);
})();
var _MatCardActions = class _MatCardActions {
  // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
  // as to not conflict with the native `align` attribute.
  /** Position of the actions inside the card. */
  align = "start";
};
__name(_MatCardActions, "MatCardActions");
__publicField(_MatCardActions, "\u0275fac", /* @__PURE__ */ __name(function MatCardActions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardActions)();
}, "MatCardActions_Factory"));
__publicField(_MatCardActions, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardActions,
  selectors: [["mat-card-actions"]],
  hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function MatCardActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-card-actions-align-end", ctx.align === "end");
    }
  }, "MatCardActions_HostBindings"),
  inputs: {
    align: "align"
  },
  exportAs: ["matCardActions"]
}));
var MatCardActions = _MatCardActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardActions, [{
    type: Directive,
    args: [{
      selector: "mat-card-actions",
      exportAs: "matCardActions",
      host: {
        "class": "mat-mdc-card-actions mdc-card__actions",
        "[class.mat-mdc-card-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
var _MatCardHeader = class _MatCardHeader {
};
__name(_MatCardHeader, "MatCardHeader");
__publicField(_MatCardHeader, "\u0275fac", /* @__PURE__ */ __name(function MatCardHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardHeader)();
}, "MatCardHeader_Factory"));
__publicField(_MatCardHeader, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatCardHeader,
  selectors: [["mat-card-header"]],
  hostAttrs: [1, "mat-mdc-card-header"],
  ngContentSelectors: _c4,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-mdc-card-header-text"]],
  template: /* @__PURE__ */ __name(function MatCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c3);
      \u0275\u0275projection(0);
      \u0275\u0275domElementStart(1, "div", 0);
      \u0275\u0275projection(2, 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275projection(3, 2);
    }
  }, "MatCardHeader_Template"),
  encapsulation: 2,
  changeDetection: 0
}));
var MatCardHeader = _MatCardHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardHeader, [{
    type: Component,
    args: [{
      selector: "mat-card-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-card-header"
      },
      template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n'
    }]
  }], null, null);
})();
var _MatCardFooter = class _MatCardFooter {
};
__name(_MatCardFooter, "MatCardFooter");
__publicField(_MatCardFooter, "\u0275fac", /* @__PURE__ */ __name(function MatCardFooter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardFooter)();
}, "MatCardFooter_Factory"));
__publicField(_MatCardFooter, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardFooter,
  selectors: [["mat-card-footer"]],
  hostAttrs: [1, "mat-mdc-card-footer"]
}));
var MatCardFooter = _MatCardFooter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardFooter, [{
    type: Directive,
    args: [{
      selector: "mat-card-footer",
      host: {
        "class": "mat-mdc-card-footer"
      }
    }]
  }], null, null);
})();
var _MatCardImage = class _MatCardImage {
};
__name(_MatCardImage, "MatCardImage");
__publicField(_MatCardImage, "\u0275fac", /* @__PURE__ */ __name(function MatCardImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardImage)();
}, "MatCardImage_Factory"));
__publicField(_MatCardImage, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardImage,
  selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
  hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
}));
var MatCardImage = _MatCardImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-image], [matCardImage]",
      host: {
        "class": "mat-mdc-card-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardSmImage = class _MatCardSmImage {
};
__name(_MatCardSmImage, "MatCardSmImage");
__publicField(_MatCardSmImage, "\u0275fac", /* @__PURE__ */ __name(function MatCardSmImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardSmImage)();
}, "MatCardSmImage_Factory"));
__publicField(_MatCardSmImage, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardSmImage,
  selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
  hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
}));
var MatCardSmImage = _MatCardSmImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardSmImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-sm-image], [matCardImageSmall]",
      host: {
        "class": "mat-mdc-card-sm-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardMdImage = class _MatCardMdImage {
};
__name(_MatCardMdImage, "MatCardMdImage");
__publicField(_MatCardMdImage, "\u0275fac", /* @__PURE__ */ __name(function MatCardMdImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardMdImage)();
}, "MatCardMdImage_Factory"));
__publicField(_MatCardMdImage, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardMdImage,
  selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
  hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
}));
var MatCardMdImage = _MatCardMdImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardMdImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-md-image], [matCardImageMedium]",
      host: {
        "class": "mat-mdc-card-md-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardLgImage = class _MatCardLgImage {
};
__name(_MatCardLgImage, "MatCardLgImage");
__publicField(_MatCardLgImage, "\u0275fac", /* @__PURE__ */ __name(function MatCardLgImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardLgImage)();
}, "MatCardLgImage_Factory"));
__publicField(_MatCardLgImage, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardLgImage,
  selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
}));
var MatCardLgImage = _MatCardLgImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardLgImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-lg-image], [matCardImageLarge]",
      host: {
        "class": "mat-mdc-card-lg-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardXlImage = class _MatCardXlImage {
};
__name(_MatCardXlImage, "MatCardXlImage");
__publicField(_MatCardXlImage, "\u0275fac", /* @__PURE__ */ __name(function MatCardXlImage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardXlImage)();
}, "MatCardXlImage_Factory"));
__publicField(_MatCardXlImage, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardXlImage,
  selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
}));
var MatCardXlImage = _MatCardXlImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardXlImage, [{
    type: Directive,
    args: [{
      selector: "[mat-card-xl-image], [matCardImageXLarge]",
      host: {
        "class": "mat-mdc-card-xl-image mdc-card__media"
      }
    }]
  }], null, null);
})();
var _MatCardAvatar = class _MatCardAvatar {
};
__name(_MatCardAvatar, "MatCardAvatar");
__publicField(_MatCardAvatar, "\u0275fac", /* @__PURE__ */ __name(function MatCardAvatar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardAvatar)();
}, "MatCardAvatar_Factory"));
__publicField(_MatCardAvatar, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatCardAvatar,
  selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
  hostAttrs: [1, "mat-mdc-card-avatar"]
}));
var MatCardAvatar = _MatCardAvatar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardAvatar, [{
    type: Directive,
    args: [{
      selector: "[mat-card-avatar], [matCardAvatar]",
      host: {
        "class": "mat-mdc-card-avatar"
      }
    }]
  }], null, null);
})();
var CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
var _MatCardModule = class _MatCardModule {
};
__name(_MatCardModule, "MatCardModule");
__publicField(_MatCardModule, "\u0275fac", /* @__PURE__ */ __name(function MatCardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCardModule)();
}, "MatCardModule_Factory"));
__publicField(_MatCardModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatCardModule,
  imports: [MatCommonModule, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage],
  exports: [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage, MatCommonModule]
}));
__publicField(_MatCardModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
}));
var MatCardModule = _MatCardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCardModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, ...CARD_DIRECTIVES],
      exports: [CARD_DIRECTIVES, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/public-api.mjs
var _TileCoordinator = class _TileCoordinator {
  /** Tracking array (see class description). */
  tracker;
  /** Index at which the search for the next gap will start. */
  columnIndex = 0;
  /** The current row index. */
  rowIndex = 0;
  /** Gets the total number of rows occupied by tiles */
  get rowCount() {
    return this.rowIndex + 1;
  }
  /**
   * Gets the total span of rows occupied by tiles.
   * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
   */
  get rowspan() {
    const lastRowMax = Math.max(...this.tracker);
    return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
  }
  /** The computed (row, col) position of each tile (the output). */
  positions;
  /**
   * Updates the tile positions.
   * @param numColumns Amount of columns in the grid.
   * @param tiles Tiles to be positioned.
   */
  update(numColumns, tiles) {
    this.columnIndex = 0;
    this.rowIndex = 0;
    this.tracker = new Array(numColumns);
    this.tracker.fill(0, 0, this.tracker.length);
    this.positions = tiles.map((tile) => this._trackTile(tile));
  }
  /** Calculates the row and col position of a tile. */
  _trackTile(tile) {
    const gapStartIndex = this._findMatchingGap(tile.colspan);
    this._markTilePosition(gapStartIndex, tile);
    this.columnIndex = gapStartIndex + tile.colspan;
    return new TilePosition(this.rowIndex, gapStartIndex);
  }
  /** Finds the next available space large enough to fit the tile. */
  _findMatchingGap(tileCols) {
    if (tileCols > this.tracker.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than grid with cols="${this.tracker.length}".`);
    }
    let gapStartIndex = -1;
    let gapEndIndex = -1;
    do {
      if (this.columnIndex + tileCols > this.tracker.length) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
      if (gapStartIndex == -1) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapEndIndex = this._findGapEndIndex(gapStartIndex);
      this.columnIndex = gapStartIndex + 1;
    } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0);
    return Math.max(gapStartIndex, 0);
  }
  /** Move "down" to the next row. */
  _nextRow() {
    this.columnIndex = 0;
    this.rowIndex++;
    for (let i = 0; i < this.tracker.length; i++) {
      this.tracker[i] = Math.max(0, this.tracker[i] - 1);
    }
  }
  /**
   * Finds the end index (exclusive) of a gap given the index from which to start looking.
   * The gap ends when a non-zero value is found.
   */
  _findGapEndIndex(gapStartIndex) {
    for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
      if (this.tracker[i] != 0) {
        return i;
      }
    }
    return this.tracker.length;
  }
  /** Update the tile tracker to account for the given tile in the given space. */
  _markTilePosition(start, tile) {
    for (let i = 0; i < tile.colspan; i++) {
      this.tracker[start + i] = tile.rowspan;
    }
  }
};
__name(_TileCoordinator, "TileCoordinator");
var TileCoordinator = _TileCoordinator;
var _TilePosition = class _TilePosition {
  row;
  col;
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
};
__name(_TilePosition, "TilePosition");
var TilePosition = _TilePosition;

// node_modules/@angular/material/fesm2022/line.mjs
var _MatLine = class _MatLine {
};
__name(_MatLine, "MatLine");
__publicField(_MatLine, "\u0275fac", /* @__PURE__ */ __name(function MatLine_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatLine)();
}, "MatLine_Factory"));
__publicField(_MatLine, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"]
}));
var MatLine = _MatLine;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLine, [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      }
    }]
  }], null, null);
})();
function setLines(lines, element, prefix = "mat") {
  lines.changes.pipe(startWith(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);
    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
__name(setLines, "setLines");
function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}
__name(setClass, "setClass");
var _MatLineModule = class _MatLineModule {
};
__name(_MatLineModule, "MatLineModule");
__publicField(_MatLineModule, "\u0275fac", /* @__PURE__ */ __name(function MatLineModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatLineModule)();
}, "MatLineModule_Factory"));
__publicField(_MatLineModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatLineModule,
  imports: [MatCommonModule, MatLine],
  exports: [MatLine, MatCommonModule]
}));
__publicField(_MatLineModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
}));
var MatLineModule = _MatLineModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLineModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatLine],
      exports: [MatLine, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/grid-list.mjs
var _c04 = ["*"];
var _c14 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
var _c23 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
var _c32 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n";
var MAT_GRID_LIST = new InjectionToken("MAT_GRID_LIST");
var _MatGridTile = class _MatGridTile {
  _element = inject(ElementRef);
  _gridList = inject(MAT_GRID_LIST, {
    optional: true
  });
  _rowspan = 1;
  _colspan = 1;
  constructor() {
  }
  /** Amount of rows that the grid tile takes up. */
  get rowspan() {
    return this._rowspan;
  }
  set rowspan(value) {
    this._rowspan = Math.round(coerceNumberProperty(value));
  }
  /** Amount of columns that the grid tile takes up. */
  get colspan() {
    return this._colspan;
  }
  set colspan(value) {
    this._colspan = Math.round(coerceNumberProperty(value));
  }
  /**
   * Sets the style of the grid-tile element.  Needs to be set manually to avoid
   * "Changed after checked" errors that would occur with HostBinding.
   */
  _setStyle(property, value) {
    this._element.nativeElement.style[property] = value;
  }
};
__name(_MatGridTile, "MatGridTile");
__publicField(_MatGridTile, "\u0275fac", /* @__PURE__ */ __name(function MatGridTile_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridTile)();
}, "MatGridTile_Factory"));
__publicField(_MatGridTile, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatGridTile,
  selectors: [["mat-grid-tile"]],
  hostAttrs: [1, "mat-grid-tile"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function MatGridTile_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    }
  }, "MatGridTile_HostBindings"),
  inputs: {
    rowspan: "rowspan",
    colspan: "colspan"
  },
  exportAs: ["matGridTile"],
  ngContentSelectors: _c04,
  decls: 2,
  vars: 0,
  consts: [[1, "mat-grid-tile-content"]],
  template: /* @__PURE__ */ __name(function MatGridTile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
  }, "MatGridTile_Template"),
  styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var MatGridTile = _MatGridTile;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTile, [{
    type: Component,
    args: [{
      selector: "mat-grid-tile",
      exportAs: "matGridTile",
      host: {
        "class": "mat-grid-tile",
        // Ensures that the "rowspan" and "colspan" input value is reflected in
        // the DOM. This is needed for the grid-tile harness.
        "[attr.rowspan]": "rowspan",
        "[attr.colspan]": "colspan"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="mat-grid-tile-content">\n  <ng-content></ng-content>\n</div>\n',
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"]
    }]
  }], () => [], {
    rowspan: [{
      type: Input
    }],
    colspan: [{
      type: Input
    }]
  });
})();
var _MatGridTileText = class _MatGridTileText {
  _element = inject(ElementRef);
  _lines;
  constructor() {
  }
  ngAfterContentInit() {
    setLines(this._lines, this._element);
  }
};
__name(_MatGridTileText, "MatGridTileText");
__publicField(_MatGridTileText, "\u0275fac", /* @__PURE__ */ __name(function MatGridTileText_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridTileText)();
}, "MatGridTileText_Factory"));
__publicField(_MatGridTileText, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatGridTileText,
  selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
  contentQueries: /* @__PURE__ */ __name(function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatLine, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lines = _t);
    }
  }, "MatGridTileText_ContentQueries"),
  ngContentSelectors: _c23,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-grid-list-text"]],
  template: /* @__PURE__ */ __name(function MatGridTileText_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c14);
      \u0275\u0275projection(0);
      \u0275\u0275domElementStart(1, "div", 0);
      \u0275\u0275projection(2, 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275projection(3, 2);
    }
  }, "MatGridTileText_Template"),
  encapsulation: 2,
  changeDetection: 0
}));
var MatGridTileText = _MatGridTileText;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTileText, [{
    type: Component,
    args: [{
      selector: "mat-grid-tile-header, mat-grid-tile-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content select="[mat-grid-avatar], [matGridAvatar]"></ng-content>\n<div class="mat-grid-list-text"><ng-content select="[mat-line], [matLine]"></ng-content></div>\n<ng-content></ng-content>\n'
    }]
  }], () => [], {
    _lines: [{
      type: ContentChildren,
      args: [MatLine, {
        descendants: true
      }]
    }]
  });
})();
var _MatGridAvatarCssMatStyler = class _MatGridAvatarCssMatStyler {
};
__name(_MatGridAvatarCssMatStyler, "MatGridAvatarCssMatStyler");
__publicField(_MatGridAvatarCssMatStyler, "\u0275fac", /* @__PURE__ */ __name(function MatGridAvatarCssMatStyler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridAvatarCssMatStyler)();
}, "MatGridAvatarCssMatStyler_Factory"));
__publicField(_MatGridAvatarCssMatStyler, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatGridAvatarCssMatStyler,
  selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
  hostAttrs: [1, "mat-grid-avatar"]
}));
var MatGridAvatarCssMatStyler = _MatGridAvatarCssMatStyler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridAvatarCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "[mat-grid-avatar], [matGridAvatar]",
      host: {
        "class": "mat-grid-avatar"
      }
    }]
  }], null, null);
})();
var _MatGridTileHeaderCssMatStyler = class _MatGridTileHeaderCssMatStyler {
};
__name(_MatGridTileHeaderCssMatStyler, "MatGridTileHeaderCssMatStyler");
__publicField(_MatGridTileHeaderCssMatStyler, "\u0275fac", /* @__PURE__ */ __name(function MatGridTileHeaderCssMatStyler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridTileHeaderCssMatStyler)();
}, "MatGridTileHeaderCssMatStyler_Factory"));
__publicField(_MatGridTileHeaderCssMatStyler, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatGridTileHeaderCssMatStyler,
  selectors: [["mat-grid-tile-header"]],
  hostAttrs: [1, "mat-grid-tile-header"]
}));
var MatGridTileHeaderCssMatStyler = _MatGridTileHeaderCssMatStyler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTileHeaderCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "mat-grid-tile-header",
      host: {
        "class": "mat-grid-tile-header"
      }
    }]
  }], null, null);
})();
var _MatGridTileFooterCssMatStyler = class _MatGridTileFooterCssMatStyler {
};
__name(_MatGridTileFooterCssMatStyler, "MatGridTileFooterCssMatStyler");
__publicField(_MatGridTileFooterCssMatStyler, "\u0275fac", /* @__PURE__ */ __name(function MatGridTileFooterCssMatStyler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridTileFooterCssMatStyler)();
}, "MatGridTileFooterCssMatStyler_Factory"));
__publicField(_MatGridTileFooterCssMatStyler, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatGridTileFooterCssMatStyler,
  selectors: [["mat-grid-tile-footer"]],
  hostAttrs: [1, "mat-grid-tile-footer"]
}));
var MatGridTileFooterCssMatStyler = _MatGridTileFooterCssMatStyler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTileFooterCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "mat-grid-tile-footer",
      host: {
        "class": "mat-grid-tile-footer"
      }
    }]
  }], null, null);
})();
var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
var _TileStyler = class _TileStyler {
  _gutterSize;
  _rows = 0;
  _rowspan = 0;
  _cols;
  _direction;
  /**
   * Adds grid-list layout info once it is available. Cannot be processed in the constructor
   * because these properties haven't been calculated by that point.
   *
   * @param gutterSize Size of the grid's gutter.
   * @param tracker Instance of the TileCoordinator.
   * @param cols Amount of columns in the grid.
   * @param direction Layout direction of the grid.
   */
  init(gutterSize, tracker, cols, direction) {
    this._gutterSize = normalizeUnits(gutterSize);
    this._rows = tracker.rowCount;
    this._rowspan = tracker.rowspan;
    this._cols = cols;
    this._direction = direction;
  }
  /**
   * Computes the amount of space a single 1x1 tile would take up (width or height).
   * Used as a basis for other calculations.
   * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
   * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
   * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
   */
  getBaseTileSize(sizePercent, gutterFraction) {
    return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
  }
  /**
   * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
   * @param offset Number of tiles that have already been rendered in the row/column.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @return Position of the tile as a CSS calc() expression.
   */
  getTilePosition(baseSize, offset) {
    return offset === 0 ? "0" : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
  }
  /**
   * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @param span The tile's rowspan or colspan.
   * @return Size of the tile as a CSS calc() expression.
   */
  getTileSize(baseSize, span) {
    return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
  }
  /**
   * Sets the style properties to be applied to a tile for the given row and column index.
   * @param tile Tile to which to apply the styling.
   * @param rowIndex Index of the tile's row.
   * @param colIndex Index of the tile's column.
   */
  setStyle(tile, rowIndex, colIndex) {
    let percentWidthPerTile = 100 / this._cols;
    let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
    this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
  }
  /** Sets the horizontal placement of the tile in the list. */
  setColStyles(tile, colIndex, percentWidth, gutterWidth) {
    let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
    let side = this._direction === "rtl" ? "right" : "left";
    tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
    tile._setStyle("width", calc(this.getTileSize(baseTileWidth, tile.colspan)));
  }
  /**
   * Calculates the total size taken up by gutters across one axis of a list.
   */
  getGutterSpan() {
    return `${this._gutterSize} * (${this._rowspan} - 1)`;
  }
  /**
   * Calculates the total size taken up by tiles across one axis of a list.
   * @param tileHeight Height of the tile.
   */
  getTileSpan(tileHeight) {
    return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
  }
  /**
   * Calculates the computed height and returns the correct style property to set.
   * This method can be implemented by each type of TileStyler.
   * @docs-private
   */
  getComputedHeight() {
    return null;
  }
};
__name(_TileStyler, "TileStyler");
var TileStyler = _TileStyler;
var _FixedTileStyler = class _FixedTileStyler extends TileStyler {
  fixedRowHeight;
  constructor(fixedRowHeight) {
    super();
    this.fixedRowHeight = fixedRowHeight;
  }
  init(gutterSize, tracker, cols, direction) {
    super.init(gutterSize, tracker, cols, direction);
    this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
    if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
    }
  }
  setRowStyles(tile, rowIndex) {
    tile._setStyle("top", this.getTilePosition(this.fixedRowHeight, rowIndex));
    tile._setStyle("height", calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ["height", calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(["height", null]);
    if (list._tiles) {
      list._tiles.forEach((tile) => {
        tile._setStyle("top", null);
        tile._setStyle("height", null);
      });
    }
  }
};
__name(_FixedTileStyler, "FixedTileStyler");
var FixedTileStyler = _FixedTileStyler;
var _RatioTileStyler = class _RatioTileStyler extends TileStyler {
  /** Ratio width:height given by user to determine row height. */
  rowHeightRatio;
  baseTileHeight;
  constructor(value) {
    super();
    this._parseRatio(value);
  }
  setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
    let percentHeightPerTile = percentWidth / this.rowHeightRatio;
    this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
    tile._setStyle("marginTop", this.getTilePosition(this.baseTileHeight, rowIndex));
    tile._setStyle("paddingTop", calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ["paddingBottom", calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(["paddingBottom", null]);
    list._tiles.forEach((tile) => {
      tile._setStyle("marginTop", null);
      tile._setStyle("paddingTop", null);
    });
  }
  _parseRatio(value) {
    const ratioParts = value.split(":");
    if (ratioParts.length !== 2 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
    }
    this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
  }
};
__name(_RatioTileStyler, "RatioTileStyler");
var RatioTileStyler = _RatioTileStyler;
var _FitTileStyler = class _FitTileStyler extends TileStyler {
  setRowStyles(tile, rowIndex) {
    let percentHeightPerTile = 100 / this._rowspan;
    let gutterHeightPerTile = (this._rows - 1) / this._rows;
    let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
    tile._setStyle("top", this.getTilePosition(baseTileHeight, rowIndex));
    tile._setStyle("height", calc(this.getTileSize(baseTileHeight, tile.rowspan)));
  }
  reset(list) {
    if (list._tiles) {
      list._tiles.forEach((tile) => {
        tile._setStyle("top", null);
        tile._setStyle("height", null);
      });
    }
  }
};
__name(_FitTileStyler, "FitTileStyler");
var FitTileStyler = _FitTileStyler;
function calc(exp) {
  return `calc(${exp})`;
}
__name(calc, "calc");
function normalizeUnits(value) {
  return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}
__name(normalizeUnits, "normalizeUnits");
var MAT_FIT_MODE = "fit";
var _MatGridList = class _MatGridList {
  _element = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  /** Number of columns being rendered. */
  _cols;
  /** Used for determining the position of each tile in the grid. */
  _tileCoordinator;
  /**
   * Row height value passed in by user. This can be one of three types:
   * - Number value (ex: "100px"):  sets a fixed row height to that value
   * - Ratio value (ex: "4:3"): sets the row height based on width:height ratio
   * - "Fit" mode (ex: "fit"): sets the row height to total height divided by number of rows
   */
  _rowHeight;
  /** The amount of space between tiles. This will be something like '5px' or '2em'. */
  _gutter = "1px";
  /** Sets position and size styles for a tile */
  _tileStyler;
  /** Query list of tiles that are being rendered. */
  _tiles;
  constructor() {
  }
  /** Amount of columns in the grid list. */
  get cols() {
    return this._cols;
  }
  set cols(value) {
    this._cols = Math.max(1, Math.round(coerceNumberProperty(value)));
  }
  /** Size of the grid list's gutter in pixels. */
  get gutterSize() {
    return this._gutter;
  }
  set gutterSize(value) {
    this._gutter = `${value == null ? "" : value}`;
  }
  /** Set internal representation of row height from the user-provided value. */
  get rowHeight() {
    return this._rowHeight;
  }
  set rowHeight(value) {
    const newValue = `${value == null ? "" : value}`;
    if (newValue !== this._rowHeight) {
      this._rowHeight = newValue;
      this._setTileStyler(this._rowHeight);
    }
  }
  ngOnInit() {
    this._checkCols();
    this._checkRowHeight();
  }
  /**
   * The layout calculation is fairly cheap if nothing changes, so there's little cost
   * to run it frequently.
   */
  ngAfterContentChecked() {
    this._layoutTiles();
  }
  /** Throw a friendly error if cols property is missing */
  _checkCols() {
    if (!this.cols && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">`);
    }
  }
  /** Default to equal width:height if rowHeight property is missing */
  _checkRowHeight() {
    if (!this._rowHeight) {
      this._setTileStyler("1:1");
    }
  }
  /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
  _setTileStyler(rowHeight) {
    if (this._tileStyler) {
      this._tileStyler.reset(this);
    }
    if (rowHeight === MAT_FIT_MODE) {
      this._tileStyler = new FitTileStyler();
    } else if (rowHeight && rowHeight.indexOf(":") > -1) {
      this._tileStyler = new RatioTileStyler(rowHeight);
    } else {
      this._tileStyler = new FixedTileStyler(rowHeight);
    }
  }
  /** Computes and applies the size and position for all children grid tiles. */
  _layoutTiles() {
    if (!this._tileCoordinator) {
      this._tileCoordinator = new TileCoordinator();
    }
    const tracker = this._tileCoordinator;
    const tiles = this._tiles.filter((tile) => !tile._gridList || tile._gridList === this);
    const direction = this._dir ? this._dir.value : "ltr";
    this._tileCoordinator.update(this.cols, tiles);
    this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
    tiles.forEach((tile, index) => {
      const pos = tracker.positions[index];
      this._tileStyler.setStyle(tile, pos.row, pos.col);
    });
    this._setListStyle(this._tileStyler.getComputedHeight());
  }
  /** Sets style on the main grid-list element, given the style name and value. */
  _setListStyle(style) {
    if (style) {
      this._element.nativeElement.style[style[0]] = style[1];
    }
  }
};
__name(_MatGridList, "MatGridList");
__publicField(_MatGridList, "\u0275fac", /* @__PURE__ */ __name(function MatGridList_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridList)();
}, "MatGridList_Factory"));
__publicField(_MatGridList, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatGridList,
  selectors: [["mat-grid-list"]],
  contentQueries: /* @__PURE__ */ __name(function MatGridList_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatGridTile, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tiles = _t);
    }
  }, "MatGridList_ContentQueries"),
  hostAttrs: [1, "mat-grid-list"],
  hostVars: 1,
  hostBindings: /* @__PURE__ */ __name(function MatGridList_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("cols", ctx.cols);
    }
  }, "MatGridList_HostBindings"),
  inputs: {
    cols: "cols",
    gutterSize: "gutterSize",
    rowHeight: "rowHeight"
  },
  exportAs: ["matGridList"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_GRID_LIST,
    useExisting: _MatGridList
  }])],
  ngContentSelectors: _c04,
  decls: 2,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatGridList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div");
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
  }, "MatGridList_Template"),
  styles: [_c32],
  encapsulation: 2,
  changeDetection: 0
}));
var MatGridList = _MatGridList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridList, [{
    type: Component,
    args: [{
      selector: "mat-grid-list",
      exportAs: "matGridList",
      host: {
        "class": "mat-grid-list",
        // Ensures that the "cols" input value is reflected in the DOM. This is
        // needed for the grid-list harness.
        "[attr.cols]": "cols"
      },
      providers: [{
        provide: MAT_GRID_LIST,
        useExisting: MatGridList
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: "<div>\n  <ng-content></ng-content>\n</div>",
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"]
    }]
  }], () => [], {
    _tiles: [{
      type: ContentChildren,
      args: [MatGridTile, {
        descendants: true
      }]
    }],
    cols: [{
      type: Input
    }],
    gutterSize: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }]
  });
})();
var _MatGridListModule = class _MatGridListModule {
};
__name(_MatGridListModule, "MatGridListModule");
__publicField(_MatGridListModule, "\u0275fac", /* @__PURE__ */ __name(function MatGridListModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatGridListModule)();
}, "MatGridListModule_Factory"));
__publicField(_MatGridListModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatGridListModule,
  imports: [MatLineModule, MatCommonModule, MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
  exports: [MatGridList, MatGridTile, MatGridTileText, MatLineModule, MatCommonModule, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
}));
__publicField(_MatGridListModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatLineModule, MatCommonModule, MatLineModule, MatCommonModule]
}));
var MatGridListModule = _MatGridListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridListModule, [{
    type: NgModule,
    args: [{
      imports: [MatLineModule, MatCommonModule, MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
      exports: [MatGridList, MatGridTile, MatGridTileText, MatLineModule, MatCommonModule, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/selection-model.mjs
var _SelectionModel = class _SelectionModel {
  _multiple;
  _emitChanges;
  compareWith;
  /** Currently-selected values. */
  _selection = /* @__PURE__ */ new Set();
  /** Keeps track of the deselected options that haven't been emitted by the change event. */
  _deselectedToEmit = [];
  /** Keeps track of the selected options that haven't been emitted by the change event. */
  _selectedToEmit = [];
  /** Cache for the array value of the selected items. */
  _selected;
  /** Selected values. */
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  /** Event emitted when the value has changed. */
  changed = new Subject();
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach((value) => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      this._selectedToEmit.length = 0;
    }
  }
  /**
   * Selects a value or an array of values.
   * @param values The values to select
   * @return Whether the selection changed as a result of this call
   */
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Deselects a value or an array of values.
   * @param values The values to deselect
   * @return Whether the selection changed as a result of this call
   */
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Sets the selected values
   * @param values The new selected values
   * @return Whether the selection changed as a result of this call
   */
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
    values.forEach((value) => this._markSelected(value));
    oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Toggles a value between selected and deselected.
   * @param value The value to toggle
   * @return Whether the selection changed as a result of this call
   */
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  /**
   * Clears all of the selected values.
   * @param flushEvent Whether to flush the changes in an event.
   *   If false, the changes to the selection will be flushed along with the next event.
   * @return Whether the selection changed as a result of this call
   */
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  /**
   * Determines whether a value is selected.
   */
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  /**
   * Determines whether the model does not have a value.
   */
  isEmpty() {
    return this._selection.size === 0;
  }
  /**
   * Determines whether the model has a value.
   */
  hasValue() {
    return !this.isEmpty();
  }
  /**
   * Sorts the selected values based on a predicate function.
   */
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  /**
   * Gets whether multiple values can be selected.
   */
  isMultipleSelection() {
    return this._multiple;
  }
  /** Emits a change event and clears the records of selected and deselected values. */
  _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  /** Selects a value. */
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  /** Deselects a value. */
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  /** Clears out the selected values. */
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach((value) => this._unmarkSelected(value));
    }
  }
  /**
   * Verifies the value assignment and throws an error if the specified value array is
   * including multiple values while the selection model is not supporting multiple values.
   */
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  /** Whether there are queued up change to be emitted. */
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
};
__name(_SelectionModel, "SelectionModel");
var SelectionModel = _SelectionModel;
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}
__name(getMultipleValuesInSingleSelectionError, "getMultipleValuesInSingleSelectionError");

// node_modules/@angular/material/fesm2022/pseudo-checkbox.mjs
var _MatPseudoCheckbox = class _MatPseudoCheckbox {
  _animationsDisabled = _animationsDisabled();
  /** Display state of the checkbox. */
  state = "unchecked";
  /** Whether the checkbox is disabled. */
  disabled = false;
  /**
   * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
   * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
   */
  appearance = "full";
  constructor() {
  }
};
__name(_MatPseudoCheckbox, "MatPseudoCheckbox");
__publicField(_MatPseudoCheckbox, "\u0275fac", /* @__PURE__ */ __name(function MatPseudoCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatPseudoCheckbox)();
}, "MatPseudoCheckbox_Factory"));
__publicField(_MatPseudoCheckbox, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 12,
  hostBindings: /* @__PURE__ */ __name(function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationsDisabled);
    }
  }, "MatPseudoCheckbox_HostBindings"),
  inputs: {
    state: "state",
    disabled: "disabled",
    appearance: "appearance"
  },
  decls: 0,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatPseudoCheckbox_Template(rf, ctx) {
  }, "MatPseudoCheckbox_Template"),
  styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var MatPseudoCheckbox = _MatPseudoCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckbox, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      },
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n']
    }]
  }], () => [], {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();

// node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c05 = ["button"];
var _c15 = ["*"];
function MatButtonToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-pseudo-checkbox", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
__name(MatButtonToggle_Conditional_2_Template, "MatButtonToggle_Conditional_2_Template");
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  };
}
__name(MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY, "MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY");
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var _MatButtonToggleChange = class _MatButtonToggleChange {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
__name(_MatButtonToggleChange, "MatButtonToggleChange");
var MatButtonToggleChange = _MatButtonToggleChange;
var _MatButtonToggleGroup = class _MatButtonToggleGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _multiple = false;
  _disabled = false;
  _disabledInteractive = false;
  _selectionModel;
  /**
   * Reference to the raw value that the consumer tried to assign. The real
   * value will exclude any values from this one that don't correspond to a
   * toggle. Useful for the cases where the value is assigned before the toggles
   * have been initialized or at the same that they're being swapped out.
   */
  _rawValue;
  /**
   * The method to be called in order to update ngModel.
   * Now `ngModel` binding is not supported in multiple selection mode.
   */
  _controlValueAccessorChangeFn = /* @__PURE__ */ __name(() => {
  }, "_controlValueAccessorChangeFn");
  /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
  _onTouched = /* @__PURE__ */ __name(() => {
  }, "_onTouched");
  /** Child button toggle buttons. */
  _buttonToggles;
  /** The appearance for all the buttons in the group. */
  appearance;
  /** `name` attribute for the underlying `input` element. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  _name = inject(_IdGenerator).getId("mat-button-toggle-group-");
  /** Whether the toggle group is vertical. */
  vertical;
  /** Value of the toggle group. */
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  /**
   * Event that emits whenever the value of the group changes.
   * Used to facilitate two-way data binding.
   * @docs-private
   */
  valueChange = new EventEmitter();
  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markButtonsForCheck();
  }
  /** The layout direction of the toggle button group. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Event emitted when the group's value changes. */
  change = new EventEmitter();
  /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideSingleSelectionIndicator;
  /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideMultipleSelectionIndicator;
  constructor() {
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
    this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
    if (!this.multiple) {
      this._initializeTabIndex();
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Handle keydown event calling to single-select button toggle. */
  _keydown(event) {
    if (this.multiple || this.disabled || hasModifierKey(event)) {
      return;
    }
    const target = event.target;
    const buttonId = target.id;
    const index = this._buttonToggles.toArray().findIndex((toggle) => {
      return toggle.buttonId === buttonId;
    });
    let nextButton = null;
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        nextButton = this._buttonToggles.get(index) || null;
        break;
      case UP_ARROW:
        nextButton = this._getNextButton(index, -1);
        break;
      case LEFT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? -1 : 1);
        break;
      case DOWN_ARROW:
        nextButton = this._getNextButton(index, 1);
        break;
      case RIGHT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? 1 : -1);
        break;
      default:
        return;
    }
    if (nextButton) {
      event.preventDefault();
      nextButton._onButtonClick();
      nextButton.focus();
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  /** Initializes the tabindex attribute using the radio pattern. */
  _initializeTabIndex() {
    this._buttonToggles.forEach((toggle) => {
      toggle.tabIndex = -1;
    });
    if (this.selected) {
      this.selected.tabIndex = 0;
    } else {
      for (let i = 0; i < this._buttonToggles.length; i++) {
        const toggle = this._buttonToggles.get(i);
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Obtain the subsequent toggle to which the focus shifts. */
  _getNextButton(startIndex, offset) {
    const items = this._buttonToggles;
    for (let i = 1; i <= items.length; i++) {
      const index = (startIndex + offset * i + items.length) % items.length;
      const item = items.get(index);
      if (item && !item.disabled) {
        return item;
      }
    }
    return null;
  }
  /** Updates the selection state of the toggles in the group based on a value. */
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    const toggles = this._buttonToggles.toArray();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue, toggles));
    } else {
      this._clearSelection();
      this._selectValue(value, toggles);
    }
    if (!this.multiple && toggles.every((toggle) => toggle.tabIndex === -1)) {
      for (const toggle of toggles) {
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Clears the selected toggles. */
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => {
      toggle.checked = false;
      if (!this.multiple) {
        toggle.tabIndex = -1;
      }
    });
  }
  /** Selects a value if there's a toggle that corresponds to it. */
  _selectValue(value, toggles) {
    for (const toggle of toggles) {
      if (toggle.value === value) {
        toggle.checked = true;
        this._selectionModel.select(toggle);
        if (!this.multiple) {
          toggle.tabIndex = 0;
        }
        break;
      }
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
};
__name(_MatButtonToggleGroup, "MatButtonToggleGroup");
__publicField(_MatButtonToggleGroup, "\u0275fac", /* @__PURE__ */ __name(function MatButtonToggleGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatButtonToggleGroup)();
}, "MatButtonToggleGroup_Factory"));
__publicField(_MatButtonToggleGroup, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatButtonToggleGroup,
  selectors: [["mat-button-toggle-group"]],
  contentQueries: /* @__PURE__ */ __name(function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatButtonToggle, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonToggles = _t);
    }
  }, "MatButtonToggleGroup_ContentQueries"),
  hostAttrs: [1, "mat-button-toggle-group"],
  hostVars: 6,
  hostBindings: /* @__PURE__ */ __name(function MatButtonToggleGroup_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", /* @__PURE__ */ __name(function MatButtonToggleGroup_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      }, "MatButtonToggleGroup_keydown_HostBindingHandler"));
    }
    if (rf & 2) {
      \u0275\u0275attribute("role", ctx.multiple ? "group" : "radiogroup")("aria-disabled", ctx.disabled);
      \u0275\u0275classProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
    }
  }, "MatButtonToggleGroup_HostBindings"),
  inputs: {
    appearance: "appearance",
    name: "name",
    vertical: [2, "vertical", "vertical", booleanAttribute],
    value: "value",
    multiple: [2, "multiple", "multiple", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
    hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
    hideMultipleSelectionIndicator: [2, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
  },
  outputs: {
    valueChange: "valueChange",
    change: "change"
  },
  exportAs: ["matButtonToggleGroup"],
  features: [\u0275\u0275ProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
    provide: MAT_BUTTON_TOGGLE_GROUP,
    useExisting: _MatButtonToggleGroup
  }])]
}));
var MatButtonToggleGroup = _MatButtonToggleGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "class": "mat-button-toggle-group",
        "(keydown)": "_keydown($event)",
        "[attr.role]": "multiple ? 'group' : 'radiogroup'",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup"
    }]
  }], () => [], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatButtonToggle = class _MatButtonToggle {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _idGenerator = inject(_IdGenerator);
  _animationDisabled = _animationsDisabled();
  _checked = false;
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel;
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** Underlying native `button` element. */
  _buttonElement;
  /** The parent button toggle group (exclusive selection). Optional. */
  buttonToggleGroup;
  /** Unique ID for the underlying `button` element. */
  get buttonId() {
    return `${this.id}-button`;
  }
  /** The unique ID for this button toggle. */
  id;
  /** HTML's 'name' attribute used to group radios for unique selection. */
  name;
  /** MatButtonToggleGroup reads this to assign its own value. */
  value;
  /** Tabindex of the toggle. */
  get tabIndex() {
    return this._tabIndex();
  }
  set tabIndex(value) {
    this._tabIndex.set(value);
  }
  _tabIndex;
  /** Whether ripples are disabled on the button toggle. */
  disableRipple;
  /** The appearance style of the button. */
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  _appearance;
  /** Whether the button is checked. */
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  /** Whether the button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  /** Event emitted when the group value changes. */
  change = new EventEmitter();
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const toggleGroup = inject(MAT_BUTTON_TOGGLE_GROUP, {
      optional: true
    });
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    }) || "";
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this._tabIndex = signal(parseInt(defaultTabIndex) || 0, ...ngDevMode ? [{
      debugName: "_tabIndex"
    }] : []);
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.disabledInteractive = defaultOptions?.disabledInteractive ?? false;
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || this._idGenerator.getId("mat-button-toggle-");
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    if (!this._animationDisabled) {
      this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled");
    }
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    if (this.disabled) {
      return;
    }
    const newChecked = this.isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    if (this.isSingleSelector()) {
      const focusable = this.buttonToggleGroup._buttonToggles.find((toggle) => {
        return toggle.tabIndex === 0;
      });
      if (focusable) {
        focusable.tabIndex = -1;
      }
      this.tabIndex = 0;
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */
  _getButtonName() {
    if (this.isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */
  isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
};
__name(_MatButtonToggle, "MatButtonToggle");
__publicField(_MatButtonToggle, "\u0275fac", /* @__PURE__ */ __name(function MatButtonToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatButtonToggle)();
}, "MatButtonToggle_Factory"));
__publicField(_MatButtonToggle, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatButtonToggle,
  selectors: [["mat-button-toggle"]],
  viewQuery: /* @__PURE__ */ __name(function MatButtonToggle_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonElement = _t.first);
    }
  }, "MatButtonToggle_Query"),
  hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
  hostVars: 14,
  hostBindings: /* @__PURE__ */ __name(function MatButtonToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", /* @__PURE__ */ __name(function MatButtonToggle_focus_HostBindingHandler() {
        return ctx.focus();
      }, "MatButtonToggle_focus_HostBindingHandler"));
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
      \u0275\u0275classProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-disabled-interactive", ctx.disabledInteractive)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
    }
  }, "MatButtonToggle_HostBindings"),
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    id: "id",
    name: "name",
    value: "value",
    tabIndex: "tabIndex",
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    appearance: "appearance",
    checked: [2, "checked", "checked", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
  },
  outputs: {
    change: "change"
  },
  exportAs: ["matButtonToggle"],
  ngContentSelectors: _c15,
  decls: 7,
  vars: 13,
  consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-checkbox-wrapper"], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 3, "disabled"]],
  template: /* @__PURE__ */ __name(function MatButtonToggle_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 1, 0);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function MatButtonToggle_Template_button_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onButtonClick());
      }, "MatButtonToggle_Template_button_click_0_listener"));
      \u0275\u0275conditionalCreate(2, MatButtonToggle_Conditional_2_Template, 2, 1, "div", 2);
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "span", 4)(6, "span", 5);
    }
    if (rf & 2) {
      const button_r3 = \u0275\u0275reference(1);
      \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled && !ctx.disabledInteractive || null);
      \u0275\u0275attribute("role", ctx.isSingleSelector() ? "radio" : "button")("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-pressed", !ctx.isSingleSelector() ? ctx.checked : null)("aria-checked", ctx.isSingleSelector() ? ctx.checked : null)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.buttonToggleGroup && (!ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator || ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator) ? 2 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
    }
  }, "MatButtonToggle_Template"),
  dependencies: [MatRipple, MatPseudoCheckbox],
  styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var MatButtonToggle = _MatButtonToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matButtonToggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-disabled-interactive]": "disabledInteractive",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      imports: [MatRipple, MatPseudoCheckbox],
      template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  @if (buttonToggleGroup && (
    !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator ||
    buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator)
  ) {
    <div class="mat-button-toggle-checkbox-wrapper">
      <mat-pseudo-checkbox
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"/>
    </div>
  }

  <span class="mat-button-toggle-label-content">
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="this.disableRipple || this.disabled">
</span>
`,
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"]
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }]
  });
})();
var _MatButtonToggleModule = class _MatButtonToggleModule {
};
__name(_MatButtonToggleModule, "MatButtonToggleModule");
__publicField(_MatButtonToggleModule, "\u0275fac", /* @__PURE__ */ __name(function MatButtonToggleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatButtonToggleModule)();
}, "MatButtonToggleModule_Factory"));
__publicField(_MatButtonToggleModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatButtonToggleModule,
  imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
  exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
}));
__publicField(_MatButtonToggleModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule]
}));
var MatButtonToggleModule = _MatButtonToggleModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// src/app/features/update/update.component.ts
function UpdateComponent_ng_template_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 14);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function UpdateComponent_ng_template_17_For_2_Template_button_click_1_listener() {
      const version_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.from = version_r3;
      return \u0275\u0275resetView(ctx_r3.showUpdatePath());
    }, "UpdateComponent_ng_template_17_For_2_Template_button_click_1_listener"));
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const version_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(version_r3.name);
  }
}
__name(UpdateComponent_ng_template_17_For_2_Template, "UpdateComponent_ng_template_17_For_2_Template");
function UpdateComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 13);
    \u0275\u0275repeaterCreate(1, UpdateComponent_ng_template_17_For_2_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.versions);
  }
}
__name(UpdateComponent_ng_template_17_Template, "UpdateComponent_ng_template_17_Template");
function UpdateComponent_ng_template_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 14);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function UpdateComponent_ng_template_27_For_2_Template_button_click_1_listener() {
      const version_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.to = version_r6;
      return \u0275\u0275resetView(ctx_r3.showUpdatePath());
    }, "UpdateComponent_ng_template_27_For_2_Template_button_click_1_listener"));
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const version_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(version_r6.name);
  }
}
__name(UpdateComponent_ng_template_27_For_2_Template, "UpdateComponent_ng_template_27_For_2_Template");
function UpdateComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 13);
    \u0275\u0275repeaterCreate(1, UpdateComponent_ng_template_27_For_2_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.versions);
  }
}
__name(UpdateComponent_ng_template_27_Template, "UpdateComponent_ng_template_27_Template");
function UpdateComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p")(2, "strong");
    \u0275\u0275text(3, "\u8B66\u544A\uFF1A");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u5F53\u524D\u4E3B\u8981\u7248\u672C\u4E4B\u540E\u7684\u53D1\u5E03\u8BA1\u5212\u5C1A\u672A\u6700\u7EC8\u786E\u5B9A\uFF0C\u53EF\u80FD\u4F1A\u6709\u53D8\u5316\u3002\u8FD9\u4E9B\u5EFA\u8BAE\u662F\u57FA\u4E8E\u8BA1\u5212\u4E2D\u7684\u5F03\u7528\u60C5\u51B5\u3002 ");
    \u0275\u0275elementEnd()();
  }
}
__name(UpdateComponent_Conditional_29_Template, "UpdateComponent_Conditional_29_Template");
function UpdateComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p")(2, "strong");
    \u0275\u0275text(3, "\u8B66\u544A\uFF1A");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u6211\u4EEC\u4E0D\u652F\u6301\u964D\u7EA7 Angular \u7248\u672C\u3002 ");
    \u0275\u0275elementEnd()();
  }
}
__name(UpdateComponent_Conditional_30_Template, "UpdateComponent_Conditional_30_Template");
function UpdateComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p")(2, "strong");
    \u0275\u0275text(3, "\u8B66\u544A\uFF1A");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u786E\u4FDD\u6309\u7167\u4EE5\u4E0B\u6307\u5357\u628A\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u8FC1\u79FB\u5230\u65B0\u7248\u672C\u3002\u4F60\u6BCF\u6B21\u8FD0\u884C ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "ng update");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u65F6\u4E0D\u5E94\u8BE5\u8DF3\u8FC7\u4EFB\u4F55\u4E3B\u8981\u7248\u672C\u6765\u66F4\u65B0 Angular \u5E94\u7528\u7A0B\u5E8F\u3002 ");
    \u0275\u0275elementEnd()();
  }
}
__name(UpdateComponent_Conditional_31_Template, "UpdateComponent_Conditional_31_Template");
function UpdateComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "\u5C55\u793A\u6240\u6709 Angular \u5F00\u53D1\u8005\u90FD\u611F\u5174\u8DA3\u7684\u4FE1\u606F\u3002");
    \u0275\u0275elementEnd();
  }
}
__name(UpdateComponent_Conditional_41_Template, "UpdateComponent_Conditional_41_Template");
function UpdateComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "\u5C55\u793A\u66F4\u9AD8\u7EA7 Angular \u5F00\u53D1\u8005\u4F1A\u611F\u5174\u8DA3\u7684\u4FE1\u606F\u3002");
    \u0275\u0275elementEnd();
  }
}
__name(UpdateComponent_Conditional_42_Template, "UpdateComponent_Conditional_42_Template");
function UpdateComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "\u5C55\u793A\u5173\u4E8E\u8FD9\u4E2A\u66F4\u65B0\u7684\u6240\u6709\u4FE1\u606F\u3002");
    \u0275\u0275elementEnd();
  }
}
__name(UpdateComponent_Conditional_43_Template, "UpdateComponent_Conditional_43_Template");
function UpdateComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "mat-checkbox", 15);
    \u0275\u0275listener("change", /* @__PURE__ */ __name(function UpdateComponent_For_47_Template_mat_checkbox_change_1_listener($event) {
      const option_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.options[option_r8.id] = $event.checked;
      return \u0275\u0275resetView(ctx_r3.showUpdatePath());
    }, "UpdateComponent_For_47_Template_mat_checkbox_change_1_listener"));
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.options[option_r8.id]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("I use ", option_r8.name, " ", option_r8.description);
  }
}
__name(UpdateComponent_For_47_Template, "UpdateComponent_For_47_Template");
function UpdateComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "\u5305\u7BA1\u7406\u5668");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-button-toggle-group", 16);
    \u0275\u0275listener("change", /* @__PURE__ */ __name(function UpdateComponent_Conditional_48_Template_mat_button_toggle_group_change_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.packageManager = $event.value;
      return \u0275\u0275resetView(ctx_r3.showUpdatePath());
    }, "UpdateComponent_Conditional_48_Template_mat_button_toggle_group_change_2_listener"));
    \u0275\u0275elementStart(3, "mat-button-toggle", 17);
    \u0275\u0275text(4, "npm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-button-toggle", 18);
    \u0275\u0275text(6, "yarn");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.packageManager);
  }
}
__name(UpdateComponent_Conditional_48_Template, "UpdateComponent_Conditional_48_Template");
function UpdateComponent_Conditional_52_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-checkbox")(2, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", r_r10.renderedStep, \u0275\u0275sanitizeHtml);
  }
}
__name(UpdateComponent_Conditional_52_For_6_Template, "UpdateComponent_Conditional_52_For_6_Template");
function UpdateComponent_Conditional_52_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "em");
    \u0275\u0275text(2, "\u5728\u8FD9\u4E9B\u7248\u672C\u4E4B\u95F4\u5207\u6362\u4E4B\u524D\uFF0C\u4F60\u65E0\u9700\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\u3002");
    \u0275\u0275elementEnd()();
  }
}
__name(UpdateComponent_Conditional_52_Conditional_7_Template, "UpdateComponent_Conditional_52_Conditional_7_Template");
function UpdateComponent_Conditional_52_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "em");
    \u0275\u0275text(2, "\u8BF7\u5BA1\u6838\u8FD9\u4E9B\u66F4\u6539\u5E76\u6267\u884C\u8FD9\u4E9B\u64CD\u4F5C\u6765\u66F4\u65B0\u5E94\u7528\u7A0B\u5E8F\u3002");
    \u0275\u0275elementEnd()();
  }
}
__name(UpdateComponent_Conditional_52_Conditional_10_Template, "UpdateComponent_Conditional_52_Conditional_10_Template");
function UpdateComponent_Conditional_52_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-checkbox")(2, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", r_r11.renderedStep, \u0275\u0275sanitizeHtml);
  }
}
__name(UpdateComponent_Conditional_52_For_12_Template, "UpdateComponent_Conditional_52_For_12_Template");
function UpdateComponent_Conditional_52_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "em");
    \u0275\u0275text(2, "\u5BF9\u8FD9\u4E9B\u7248\u672C\u4E4B\u95F4\u7684\u79FB\u52A8\uFF0C\u6CA1\u6709\u4EFB\u4F55\u5EFA\u8BAE\u3002");
    \u0275\u0275elementEnd()();
  }
}
__name(UpdateComponent_Conditional_52_Conditional_13_Template, "UpdateComponent_Conditional_52_Conditional_13_Template");
function UpdateComponent_Conditional_52_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-checkbox")(2, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", r_r12.renderedStep, \u0275\u0275sanitizeHtml);
  }
}
__name(UpdateComponent_Conditional_52_For_17_Template, "UpdateComponent_Conditional_52_For_17_Template");
function UpdateComponent_Conditional_52_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "em");
    \u0275\u0275text(2, "\u5728\u5207\u6362\u8FD9\u4E9B\u7248\u672C\u4E4B\u540E\uFF0C\u4F60\u65E0\u9700\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\u3002");
    \u0275\u0275elementEnd()();
  }
}
__name(UpdateComponent_Conditional_52_Conditional_18_Template, "UpdateComponent_Conditional_52_Conditional_18_Template");
function UpdateComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "\u5728\u66F4\u65B0\u4E4B\u524D");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, UpdateComponent_Conditional_52_For_6_Template, 3, 1, "div", 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(7, UpdateComponent_Conditional_52_Conditional_7_Template, 3, 0, "div");
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9, "\u66F4\u65B0\u5230\u65B0\u7248\u672C");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, UpdateComponent_Conditional_52_Conditional_10_Template, 3, 0, "div");
    \u0275\u0275repeaterCreate(11, UpdateComponent_Conditional_52_For_12_Template, 3, 1, "div", 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(13, UpdateComponent_Conditional_52_Conditional_13_Template, 3, 0, "div");
    \u0275\u0275elementStart(14, "h3");
    \u0275\u0275text(15, "\u66F4\u65B0\u4E4B\u540E");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, UpdateComponent_Conditional_52_For_17_Template, 3, 1, "div", 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(18, UpdateComponent_Conditional_52_Conditional_18_Template, 3, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.title());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.beforeRecommendations);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.beforeRecommendations.length <= 0 ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.duringRecommendations.length > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.duringRecommendations);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.duringRecommendations.length <= 0 ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.afterRecommendations);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.afterRecommendations.length <= 0 ? 18 : -1);
  }
}
__name(UpdateComponent_Conditional_52_Template, "UpdateComponent_Conditional_52_Template");
var _UpdateComponent = class _UpdateComponent {
  snackBar = inject(MatSnackBar);
  title = signal("", ...ngDevMode ? [{ debugName: "title" }] : []);
  level = 1;
  options = {
    ngUpgrade: false,
    material: false,
    windows: isWindows()
  };
  optionList = [
    { id: "ngUpgrade", name: "ngUpgrade", description: "\u5408\u5E76 AngularJS \u4E0E Angular" },
    { id: "material", name: "Angular Material", description: "" },
    { id: "windows", name: "Windows", description: "" }
  ];
  packageManager = "npm install";
  beforeRecommendations = [];
  duringRecommendations = [];
  afterRecommendations = [];
  versions = [
    { name: "20.0", number: 2e3 },
    { name: "19.0", number: 1900 },
    { name: "18.0", number: 1800 },
    { name: "17.0", number: 1700 },
    { name: "16.0", number: 1600 },
    { name: "15.0", number: 1500 },
    { name: "14.0", number: 1400 },
    { name: "13.0", number: 1300 },
    { name: "12.0", number: 1200 },
    { name: "11.0", number: 1100 },
    { name: "10.2", number: 1020 },
    { name: "10.1", number: 1010 },
    { name: "10.0", number: 1e3 },
    { name: "9.1", number: 910 },
    { name: "9.0", number: 900 },
    { name: "8.2", number: 820 },
    { name: "8.1", number: 810 },
    { name: "8.0", number: 800 },
    { name: "7.2", number: 720 },
    { name: "7.1", number: 710 },
    { name: "7.0", number: 700 },
    { name: "6.1", number: 610 },
    { name: "6.0", number: 600 },
    { name: "5.2", number: 520 },
    { name: "5.1", number: 510 },
    { name: "5.0", number: 500 },
    { name: "4.4", number: 440 },
    { name: "4.3", number: 430 },
    { name: "4.2", number: 420 },
    { name: "4.1", number: 410 },
    { name: "4.0", number: 400 },
    { name: "2.4", number: 204 },
    { name: "2.3", number: 203 },
    { name: "2.2", number: 202 },
    { name: "2.1", number: 201 },
    { name: "2.0", number: 200 }
  ];
  from = this.versions.find((version) => version.name === "19.0");
  to = this.versions.find((version) => version.name === "20.0");
  futureVersion = 2100;
  steps = RECOMMENDATIONS;
  clipboard = inject(Clipboard);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  constructor() {
    const queryMap = this.activatedRoute.snapshot.queryParamMap;
    this.level = parseInt(queryMap.get("l"), 10) || this.level;
    const versions = queryMap.get("v");
    if (versions) {
      const [from, to] = versions.split("-");
      this.from = this.versions.find((version) => version.name === from);
      this.to = this.versions.find((version) => version.name === to);
      this.showUpdatePath();
    }
  }
  copyCode({ tagName, textContent }) {
    if (tagName === "CODE") {
      this.clipboard.copy(textContent);
      this.snackBar.open("Copied to clipboard", "", { duration: 2e3 });
    }
  }
  async showUpdatePath() {
    this.beforeRecommendations = [];
    this.duringRecommendations = [];
    this.afterRecommendations = [];
    if (this.to.number < this.from.number) {
      alert("\u6211\u4EEC\u4E0D\u652F\u6301\u964D\u7EA7 Angular \u7248\u672C\u3002");
      return;
    }
    const labelTitle = "Angular \u5E94\u7528\u7A0B\u5E8F\u66F4\u65B0\u6307\u5357";
    const labelBasic = "\u57FA\u7840\u5E94\u7528";
    const labelMedium = "\u4E2D\u7B49\u5E94\u7528";
    const labelAdvanced = "\u9AD8\u7EA7\u5E94\u7528";
    this.title.set(`${labelTitle} v${this.from.name} -> v${this.to.name}
    for
    ${this.level < 2 ? labelBasic : this.level < 3 ? labelMedium : labelAdvanced}`);
    for (const step of this.steps) {
      if (step.level <= this.level && step.necessaryAsOf > this.from.number) {
        let skip = false;
        for (const option of this.optionList) {
          if (step[option.id] && !this.options[option.id]) {
            skip = true;
          }
          if (step[option.id] === false && this.options[option.id]) {
            skip = true;
          }
        }
        if (skip) {
          continue;
        }
        step.renderedStep = await d(this.replaceVariables(step.action));
        if (step.possibleIn <= this.from.number && step.necessaryAsOf >= this.from.number) {
          this.beforeRecommendations.push(step);
        } else if (step.possibleIn > this.from.number && step.necessaryAsOf <= this.to.number) {
          this.duringRecommendations.push(step);
        } else if (step.possibleIn <= this.to.number) {
          this.afterRecommendations.push(step);
        }
      }
    }
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { v: `${this.from.name}-${this.to.name}`, l: this.level },
      queryParamsHandling: "merge"
    });
    this.renderPreV6Instructions();
  }
  getAdditionalDependencies(version) {
    if (version < 500) {
      return `typescript@'>=2.1.0 <2.4.0'`;
    } else if (version < 600) {
      return `typescript@2.4.2 rxjs@^5.5.2`;
    } else {
      return `typescript@2.7.x rxjs@^6.0.0`;
    }
  }
  getAngularVersion(version) {
    if (version < 400) {
      return `'^2.0.0'`;
    } else {
      const major = Math.floor(version / 100);
      const minor = Math.floor((version - major * 100) / 10);
      return `^${major}.${minor}.0`;
    }
  }
  async renderPreV6Instructions() {
    let upgradeStep;
    const additionalDeps = this.getAdditionalDependencies(this.to.number);
    const angularVersion = this.getAngularVersion(this.to.number);
    const angularPackages = [
      "animations",
      "common",
      "compiler",
      "compiler-cli",
      "core",
      "forms",
      "http",
      "platform-browser",
      "platform-browser-dynamic",
      "platform-server",
      "router"
    ];
    if (this.to.number < 600) {
      const actionMessage = `\u5C06\u6240\u6709\u4F9D\u8D56\u9879\u66F4\u65B0\u5230\u6700\u65B0\u7684 Angular \u548C\u6B63\u786E\u7248\u672C\u7684 TypeScript\u3002`;
      if (isWindows()) {
        const packages = angularPackages.map((packageName) => `@angular/${packageName}@${angularVersion}`).join(" ") + " " + additionalDeps;
        upgradeStep = {
          step: "\u4E00\u822C\u66F4\u65B0",
          action: `${actionMessage}
          \u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 Windows\uFF0C\u5219\u53EF\u4EE5\u7528\uFF1A

\`${this.packageManager} ${packages}\``
        };
      } else {
        const packages = `@angular/{${angularPackages.join(",")}}@${angularVersion} ${additionalDeps}`;
        upgradeStep = {
          step: "\u4E00\u822C\u66F4\u65B0",
          action: `${actionMessage}
          \u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 Linux/Mac\uFF0C\u5219\u53EF\u4EE5\u7528\uFF1A

\`${this.packageManager} ${packages}\``
        };
      }
      if (this.packageManager === "npm install" && this.to.number === 500) {
        upgradeStep.action += `

\`npm install typescript@2.4.2 --save-exact\``;
      }
      upgradeStep.renderedStep = await d(upgradeStep.action);
      this.duringRecommendations.push(upgradeStep);
    }
  }
  replaceVariables(action) {
    let newAction = action;
    newAction = newAction.replace("${packageManagerGlobalInstall}", this.packageManager === "npm install" ? "npm install -g" : "yarn global add");
    newAction = newAction.replace("${packageManagerInstall}", this.packageManager);
    return newAction;
  }
};
__name(_UpdateComponent, "UpdateComponent");
__publicField(_UpdateComponent, "\u0275fac", /* @__PURE__ */ __name(function UpdateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateComponent)();
}, "UpdateComponent_Factory"));
__publicField(_UpdateComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateComponent, selectors: [["adev-update-guide"]], hostBindings: /* @__PURE__ */ __name(function UpdateComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function UpdateComponent_click_HostBindingHandler($event) {
      return ctx.copyCode($event.target);
    }, "UpdateComponent_click_HostBindingHandler"));
  }
}, "UpdateComponent_HostBindings"), decls: 53, vars: 15, consts: [["templatesMenuFrom", ""], ["templatesMenuTo", ""], [1, "page", "docs-viewer"], ["tabindex", "-1", 1, "page-header"], [1, "wizard"], [1, "adev-version-selector"], [1, "adev-template-select"], [3, "cdkMenuTriggerFor"], [1, "docs-alert", "docs-alert-critical"], [2, "margin-bottom", "16px", 3, "change", "value"], [3, "value"], ["type", "button", 1, "docs-primary-btn", "show-button", 3, "click"], [1, "recommendations"], ["cdkMenu", "", 1, "adev-template-dropdown"], ["cdkMenuItem", "", "type", "button", 3, "click"], [3, "change", "checked"], [3, "change", "value"], ["value", "npm install"], ["value", "yarn add"], [1, "adev-recommendation-item"], [3, "innerHTML"]], template: /* @__PURE__ */ __name(function UpdateComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
    \u0275\u0275text(2, "\u66F4\u65B0\u6307\u5357");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div")(5, "h2");
    \u0275\u0275text(6, "\u9009\u62E9\u4E0E\u4F60\u7684\u66F4\u65B0\u76F8\u5339\u914D\u7684\u9009\u9879");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Angular \u7248\u672C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5)(10, "span", 6);
    \u0275\u0275text(11, " \u4ECE v. ");
    \u0275\u0275elementStart(12, "button", 7)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "docs-icon");
    \u0275\u0275text(16, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, UpdateComponent_ng_template_17_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span")(20, "span", 6);
    \u0275\u0275text(21, " \u5230 v. ");
    \u0275\u0275elementStart(22, "button", 7)(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "docs-icon");
    \u0275\u0275text(26, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, UpdateComponent_ng_template_27_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(29, UpdateComponent_Conditional_29_Template, 5, 0, "div", 8);
    \u0275\u0275conditionalCreate(30, UpdateComponent_Conditional_30_Template, 5, 0, "div", 8);
    \u0275\u0275conditionalCreate(31, UpdateComponent_Conditional_31_Template, 8, 0, "div", 8);
    \u0275\u0275elementStart(32, "h3");
    \u0275\u0275text(33, "\u5E94\u7528\u7A0B\u5E8F\u590D\u6742\u6027");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-button-toggle-group", 9);
    \u0275\u0275listener("change", /* @__PURE__ */ __name(function UpdateComponent_Template_mat_button_toggle_group_change_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      ctx.level = $event.value;
      return \u0275\u0275resetView(ctx.showUpdatePath());
    }, "UpdateComponent_Template_mat_button_toggle_group_change_34_listener"));
    \u0275\u0275elementStart(35, "mat-button-toggle", 10);
    \u0275\u0275text(36, "\u57FA\u7840");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-button-toggle", 10);
    \u0275\u0275text(38, "\u4E2D\u7B49");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-button-toggle", 10);
    \u0275\u0275text(40, "\u9AD8\u7EA7");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, UpdateComponent_Conditional_41_Template, 2, 0, "p")(42, UpdateComponent_Conditional_42_Template, 2, 0, "p")(43, UpdateComponent_Conditional_43_Template, 2, 0, "p");
    \u0275\u0275elementStart(44, "h3");
    \u0275\u0275text(45, "Other dependencies");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(46, UpdateComponent_For_47_Template, 3, 3, "div", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(48, UpdateComponent_Conditional_48_Template, 7, 1);
    \u0275\u0275elementStart(49, "button", 11);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function UpdateComponent_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showUpdatePath());
    }, "UpdateComponent_Template_button_click_49_listener"));
    \u0275\u0275text(50, " \u544A\u8BC9\u6211\u5982\u4F55\u66F4\u65B0 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(51, "hr");
    \u0275\u0275conditionalCreate(52, UpdateComponent_Conditional_52_Template, 19, 5, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const templatesMenuFrom_r13 = \u0275\u0275reference(18);
    const templatesMenuTo_r14 = \u0275\u0275reference(28);
    \u0275\u0275advance(12);
    \u0275\u0275property("cdkMenuTriggerFor", templatesMenuFrom_r13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.from.name);
    \u0275\u0275advance(8);
    \u0275\u0275property("cdkMenuTriggerFor", templatesMenuTo_r14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.to.name);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.from.number >= ctx.futureVersion || ctx.to.number >= ctx.futureVersion ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.from.number > ctx.to.number ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.to.number - ctx.from.number > 150 && ctx.from.number > 240 ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx.level);
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.level === 1 ? 41 : ctx.level === 2 ? 42 : ctx.level === 3 ? 43 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.optionList);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.from.number < 600 ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("text", "\u544A\u8BC9\u6211\u5982\u4F55\u66F4\u65B0\uFF01");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.beforeRecommendations.length > 0 || ctx.duringRecommendations.length > 0 || ctx.afterRecommendations.length > 0 ? 52 : -1);
  }
}, "UpdateComponent_Template"), dependencies: [
  MatCheckboxModule,
  MatCheckbox,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatButtonToggleGroup,
  MatButtonToggle,
  CdkMenuModule,
  CdkMenu,
  CdkMenuItem,
  CdkMenuTrigger,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: var(--layout-padding) 0px;\n  container: update-guide-page/inline-size;\n}\n[_nghost-%COMP%]   .docs-viewer[_ngcontent-%COMP%] {\n  padding-inline: var(--layout-padding);\n}\n@media (min-width: 1430.01px) {\n  [_nghost-%COMP%]   .docs-viewer[_ngcontent-%COMP%] {\n    margin-left: -16rem;\n    width: calc(100% - 16rem);\n    box-sizing: border-box;\n  }\n}\n[_nghost-%COMP%]   .docs-viewer[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: var(--page-width);\n}\n@media (min-width: 1800.01px) {\n  .page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-inline: 0px;\n  }\n}\n@media (max-width: 900px) {\n  .page[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  margin-block-start: 2em;\n}\n.wizard[_ngcontent-%COMP%] {\n  padding-inline: 1rem;\n}\n.wizard[_ngcontent-%COMP%]   .show-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-block-start: 2rem;\n}\n.adev-version-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.adev-template-dropdown[_ngcontent-%COMP%] {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  padding: 0;\n  transform: translateY(-0.7rem);\n  max-height: 200px;\n  overflow-y: auto;\n  width: 200px;\n  box-sizing: border-box;\n  background: var(--page-background);\n}\n.adev-template-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  box-sizing: border-box;\n}\n.adev-template-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--page-background);\n  font-size: 0.875rem;\n  width: 100%;\n  text-align: left;\n  padding-block: 0.5rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease, background 0.3s ease;\n  font-weight: 400;\n}\n.adev-template-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--senary-contrast);\n  color: var(--primary-contrast);\n}\n.adev-template-select[_ngcontent-%COMP%] {\n  margin-block-end: 0.5rem;\n}\n.adev-template-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  width: 200px;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-block: 0.5rem;\n  font-weight: 400;\n  transition: border 0.3s ease;\n}\n.adev-template-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary-contrast);\n  transition: color 0.3s ease;\n  margin-inline-start: 0.1rem;\n}\n.adev-template-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-recommendation-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.adev-recommendation-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-inline-start: 2rem;\n}\n.adev-recommendation-item[_ngcontent-%COMP%]     code {\n  cursor: pointer;\n}\n/*# sourceMappingURL=update.component.css.map */"], changeDetection: 0 }));
var UpdateComponent = _UpdateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateComponent, [{
    type: Component,
    args: [{ selector: "adev-update-guide", imports: [
      MatCheckboxModule,
      MatInputModule,
      MatCardModule,
      MatGridListModule,
      MatButtonToggleModule,
      CdkMenuModule,
      IconComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page docs-viewer">
  <h1 class="page-header" tabindex="-1">\u66F4\u65B0\u6307\u5357</h1>
  <div class="wizard">
    <div>
      <h2>\u9009\u62E9\u4E0E\u4F60\u7684\u66F4\u65B0\u76F8\u5339\u914D\u7684\u9009\u9879</h2>

      <h3>Angular \u7248\u672C</h3>

      <div class="adev-version-selector">
        <span class="adev-template-select">
          \u4ECE v.

          <button [cdkMenuTriggerFor]="templatesMenuFrom">
            <span>{{ from.name }}</span>
            <docs-icon>expand_more</docs-icon>
          </button>

          <ng-template #templatesMenuFrom>
            <ul class="adev-template-dropdown" cdkMenu>
              @for (version of versions; track $index) {
                <li>
                  <button cdkMenuItem type="button" (click)="from=version; showUpdatePath()">
                    <span>{{ version.name }}</span>
                  </button>
                </li>
              }
            </ul>
          </ng-template>
        </span>

        <span>
          <span class="adev-template-select">
            \u5230 v.
            <button [cdkMenuTriggerFor]="templatesMenuTo">
              <span>{{ to.name }}</span>
              <docs-icon>expand_more</docs-icon>
            </button>

            <ng-template #templatesMenuTo>
              <ul class="adev-template-dropdown" cdkMenu>
                @for (version of versions; track $index) {
                  <li>
                    <button cdkMenuItem type="button" (click)="to=version; showUpdatePath()">
                      <span>{{ version.name }}</span>
                    </button>
                  </li>
                }
              </ul>
            </ng-template>
          </span>
        </span>
      </div>

      @if (from.number >= futureVersion || to.number >= futureVersion) {
        <div class="docs-alert docs-alert-critical">
          <p>
            <strong>\u8B66\u544A\uFF1A</strong>
            \u5F53\u524D\u4E3B\u8981\u7248\u672C\u4E4B\u540E\u7684\u53D1\u5E03\u8BA1\u5212\u5C1A\u672A\u6700\u7EC8\u786E\u5B9A\uFF0C\u53EF\u80FD\u4F1A\u6709\u53D8\u5316\u3002\u8FD9\u4E9B\u5EFA\u8BAE\u662F\u57FA\u4E8E\u8BA1\u5212\u4E2D\u7684\u5F03\u7528\u60C5\u51B5\u3002
          </p>
        </div>
      }

      @if (from.number > to.number) {
        <div class="docs-alert docs-alert-critical">
          <p>
            <strong>\u8B66\u544A\uFF1A</strong>
            \u6211\u4EEC\u4E0D\u652F\u6301\u964D\u7EA7 Angular \u7248\u672C\u3002
          </p>
        </div>
      }

      @if ((to.number - from.number > 150) && from.number > 240) {
        <div class="docs-alert docs-alert-critical">
          <p>
            <strong>\u8B66\u544A\uFF1A</strong>
            \u786E\u4FDD\u6309\u7167\u4EE5\u4E0B\u6307\u5357\u628A\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u8FC1\u79FB\u5230\u65B0\u7248\u672C\u3002\u4F60\u6BCF\u6B21\u8FD0\u884C <code>ng update</code> \u65F6\u4E0D\u5E94\u8BE5\u8DF3\u8FC7\u4EFB\u4F55\u4E3B\u8981\u7248\u672C\u6765\u66F4\u65B0 Angular \u5E94\u7528\u7A0B\u5E8F\u3002
          </p>
        </div>
      }

      <h3>\u5E94\u7528\u7A0B\u5E8F\u590D\u6742\u6027</h3>
      <mat-button-toggle-group
        (change)="level = $event.value; showUpdatePath()"
        [value]="level"
        style="margin-bottom:16px;"
      >
        <mat-button-toggle [value]="1">\u57FA\u7840</mat-button-toggle>
        <mat-button-toggle [value]="2">\u4E2D\u7B49</mat-button-toggle>
        <mat-button-toggle [value]="3">\u9AD8\u7EA7</mat-button-toggle>
      </mat-button-toggle-group>
      @if (level === 1) {
        <p>\u5C55\u793A\u6240\u6709 Angular \u5F00\u53D1\u8005\u90FD\u611F\u5174\u8DA3\u7684\u4FE1\u606F\u3002</p>
      } @else if (level === 2) {
        <p>\u5C55\u793A\u66F4\u9AD8\u7EA7 Angular \u5F00\u53D1\u8005\u4F1A\u611F\u5174\u8DA3\u7684\u4FE1\u606F\u3002</p>
      } @else if (level === 3) {
        <p>\u5C55\u793A\u5173\u4E8E\u8FD9\u4E2A\u66F4\u65B0\u7684\u6240\u6709\u4FE1\u606F\u3002</p>
      }

      <h3>Other dependencies</h3>
      @for (option of optionList; track $index) {
        <div>
          <mat-checkbox
            (change)="options[option.id] = $event.checked; showUpdatePath()"
            [checked]="options[option.id]"
            >I use {{option.name}} {{option.description}}</mat-checkbox
          >
        </div>
      }

      @if (from.number < 600) {
        <h4>\u5305\u7BA1\u7406\u5668</h4>
        <mat-button-toggle-group
          (change)="packageManager = $event.value; showUpdatePath()"
          [value]="packageManager"
        >
          <mat-button-toggle value="npm install">npm</mat-button-toggle>
          <mat-button-toggle value="yarn add">yarn</mat-button-toggle>
        </mat-button-toggle-group>
      }

      <button
        type="button"
        (click)="showUpdatePath()"
        class="docs-primary-btn show-button"
        [attr.text]="'\u544A\u8BC9\u6211\u5982\u4F55\u66F4\u65B0\uFF01'"
      >
        \u544A\u8BC9\u6211\u5982\u4F55\u66F4\u65B0
      </button>
    </div>
  </div>

  <hr />
  <!-- RECOMMENDATIONS SECTION -->

  @if (
    beforeRecommendations.length > 0 || duringRecommendations.length > 0 || afterRecommendations.length > 0
  ) {
    <div class="recommendations">
      <h2>{{title()}}</h2>

      <h3>\u5728\u66F4\u65B0\u4E4B\u524D</h3>
      @for (r  of beforeRecommendations; track $index) {
        <div class="adev-recommendation-item">
          <mat-checkbox />
          <div [innerHTML]="r.renderedStep"></div>
        </div>
      }
      @if (beforeRecommendations.length <= 0) {
        <div>
          <em>\u5728\u8FD9\u4E9B\u7248\u672C\u4E4B\u95F4\u5207\u6362\u4E4B\u524D\uFF0C\u4F60\u65E0\u9700\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\u3002</em>
        </div>
      }

      <h3>\u66F4\u65B0\u5230\u65B0\u7248\u672C</h3>
      @if (duringRecommendations.length > 0) {
        <div>
          <em>\u8BF7\u5BA1\u6838\u8FD9\u4E9B\u66F4\u6539\u5E76\u6267\u884C\u8FD9\u4E9B\u64CD\u4F5C\u6765\u66F4\u65B0\u5E94\u7528\u7A0B\u5E8F\u3002</em>
        </div>
      }

      @for (r of duringRecommendations; track $index) {
        <div class="adev-recommendation-item">
          <mat-checkbox />
          <div [innerHTML]="r.renderedStep"></div>
        </div>
      }
      @if (duringRecommendations.length <= 0) {
        <div>
          <em>\u5BF9\u8FD9\u4E9B\u7248\u672C\u4E4B\u95F4\u7684\u79FB\u52A8\uFF0C\u6CA1\u6709\u4EFB\u4F55\u5EFA\u8BAE\u3002</em>
        </div>
      }

      <h3>\u66F4\u65B0\u4E4B\u540E</h3>
      @for (r of afterRecommendations; track $index) {
        <div class="adev-recommendation-item">
          <mat-checkbox />
          <div [innerHTML]="r.renderedStep"></div>
        </div>
      }
      @if (afterRecommendations.length <= 0) {
        <div>
          <em>\u5728\u5207\u6362\u8FD9\u4E9B\u7248\u672C\u4E4B\u540E\uFF0C\u4F60\u65E0\u9700\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\u3002</em>
        </div>
      }
    </div>
  }
</div>
`, styles: ["/* src/app/features/update/update.component.scss */\n:host {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: var(--layout-padding) 0px;\n  container: update-guide-page/inline-size;\n}\n:host .docs-viewer {\n  padding-inline: var(--layout-padding);\n}\n@media (min-width: 1430.01px) {\n  :host .docs-viewer {\n    margin-left: -16rem;\n    width: calc(100% - 16rem);\n    box-sizing: border-box;\n  }\n}\n:host .docs-viewer .page-header {\n  margin-top: 0px;\n}\n.page {\n  max-width: var(--page-width);\n}\n@media (min-width: 1800.01px) {\n  .page > * {\n    padding-inline: 0px;\n  }\n}\n@media (max-width: 900px) {\n  .page {\n    width: 100%;\n  }\n}\nh3,\nh4 {\n  margin-block-start: 2em;\n}\n.wizard {\n  padding-inline: 1rem;\n}\n.wizard .show-button {\n  display: block;\n  margin-block-start: 2rem;\n}\n.adev-version-selector {\n  display: flex;\n  gap: 1rem;\n}\n.adev-template-dropdown {\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  padding: 0;\n  transform: translateY(-0.7rem);\n  max-height: 200px;\n  overflow-y: auto;\n  width: 200px;\n  box-sizing: border-box;\n  background: var(--page-background);\n}\n.adev-template-dropdown li {\n  list-style: none;\n  box-sizing: border-box;\n}\n.adev-template-dropdown li button {\n  background: var(--page-background);\n  font-size: 0.875rem;\n  width: 100%;\n  text-align: left;\n  padding-block: 0.5rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease, background 0.3s ease;\n  font-weight: 400;\n}\n.adev-template-dropdown li button:hover {\n  background: var(--senary-contrast);\n  color: var(--primary-contrast);\n}\n.adev-template-select {\n  margin-block-end: 0.5rem;\n}\n.adev-template-select button {\n  font-size: 0.875rem;\n  border: 1px solid var(--senary-contrast);\n  border-radius: 0.25rem;\n  width: 200px;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-block: 0.5rem;\n  font-weight: 400;\n  transition: border 0.3s ease;\n}\n.adev-template-select button span {\n  color: var(--primary-contrast);\n  transition: color 0.3s ease;\n  margin-inline-start: 0.1rem;\n}\n.adev-template-select button docs-icon {\n  font-size: 1.3rem;\n  color: var(--quaternary-contrast);\n  transition: color 0.3s ease;\n}\n.adev-recommendation-item {\n  display: flex;\n  align-items: center;\n}\n.adev-recommendation-item > div {\n  margin-inline-start: 2rem;\n}\n.adev-recommendation-item ::ng-deep code {\n  cursor: pointer;\n}\n/*# sourceMappingURL=update.component.css.map */\n"] }]
  }], () => [], { copyCode: [{
    type: HostListener,
    args: ["click", ["$event.target"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateComponent, { className: "UpdateComponent", filePath: "src/app/features/update/update.component.ts", lineNumber: 44 });
})();
function isWindows() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const platform = navigator.platform.toLowerCase();
  return platform.includes("windows") || platform.includes("win32");
}
__name(isWindows, "isWindows");
export {
  UpdateComponent as default
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-HDRLTOBT.js.map

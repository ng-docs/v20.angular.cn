import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-7F6UZAKO.js";
import {
  A,
  ALT,
  CONTROL,
  CdkPortal,
  CdkPortalOutlet,
  ComponentPortal,
  DOWN_ARROW,
  END,
  ENTER,
  ESCAPE,
  HOME,
  LEFT_ARROW,
  MAC_META,
  META,
  NINE,
  OverlayModule,
  PAGE_DOWN,
  PAGE_UP,
  RIGHT_ARROW,
  SHIFT,
  SPACE,
  TAB,
  TemplatePortal,
  UP_ARROW,
  Z,
  ZERO,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  hasModifierKey
} from "./chunk-UGE24TTQ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive
} from "./chunk-OF2BY3RZ.js";
import {
  DomSanitizer
} from "./chunk-DAHHMHGV.js";
import {
  FormControl,
  FormControlDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IP3YSDXJ.js";
import {
  BidiModule,
  CdkScrollable,
  CdkScrollableModule,
  Directionality,
  Platform,
  ScrollDispatcher,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getShadowRoot,
  coerceArray,
  coerceElement,
  coerceNumberProperty,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader
} from "./chunk-H7FALWCD.js";
import {
  CommonModule,
  Location,
  NgClass,
  NgComponentOutlet,
  NgTemplateOutlet,
  ViewportScroller,
  isPlatformBrowser
} from "./chunk-OV2CFM4K.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  PendingTasks,
  Pipe,
  QueryList,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  __commonJS,
  __name,
  __objRest,
  __publicField,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  combineLatest,
  computed,
  concat,
  createComponent,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  fromEvent,
  inject,
  input,
  isSignal,
  linkedSignal,
  map,
  merge,
  model,
  numberAttribute,
  of,
  output,
  resource,
  setClassMetadata,
  shareReplay,
  signal,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
  viewChild,
  viewChildren,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-2CX5BJWG.js";

// node_modules/fflate/lib/browser.cjs
var require_browser = __commonJS({
  "node_modules/fflate/lib/browser.cjs"(exports) {
    "use strict";
    var ch2 = {};
    var node_worker_1 = {};
    node_worker_1["default"] = (function(c, id, msg, transfer2, cb) {
      var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
        c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
      ], { type: "text/javascript" }))));
      w.onmessage = function(e) {
        var d = e.data, ed = d.$e$;
        if (ed) {
          var err2 = new Error(ed[0]);
          err2["code"] = ed[1];
          err2.stack = ed[2];
          cb(err2, null);
        } else
          cb(null, d);
      };
      w.postMessage(msg, transfer2);
      return w;
    });
    var u8 = Uint8Array;
    var u16 = Uint16Array;
    var i32 = Int32Array;
    var fleb = new u8([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0,
      /* unused */
      0,
      0,
      /* impossible */
      0
    ]);
    var fdeb = new u8([
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
      /* unused */
      0,
      0
    ]);
    var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    var freb = /* @__PURE__ */ __name(function(eb, start) {
      var b = new u16(31);
      for (var i2 = 0; i2 < 31; ++i2) {
        b[i2] = start += 1 << eb[i2 - 1];
      }
      var r = new i32(b[30]);
      for (var i2 = 1; i2 < 30; ++i2) {
        for (var j = b[i2]; j < b[i2 + 1]; ++j) {
          r[j] = j - b[i2] << 5 | i2;
        }
      }
      return { b, r };
    }, "freb");
    var _a7 = freb(fleb, 2);
    var fl = _a7.b;
    var revfl = _a7.r;
    fl[28] = 258, revfl[258] = 28;
    var _b = freb(fdeb, 0);
    var fd = _b.b;
    var revfd = _b.r;
    var rev = new u16(32768);
    for (i = 0; i < 32768; ++i) {
      x = (i & 43690) >> 1 | (i & 21845) << 1;
      x = (x & 52428) >> 2 | (x & 13107) << 2;
      x = (x & 61680) >> 4 | (x & 3855) << 4;
      rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
    }
    var x;
    var i;
    var hMap = /* @__PURE__ */ __name((function(cd, mb, r) {
      var s = cd.length;
      var i2 = 0;
      var l = new u16(mb);
      for (; i2 < s; ++i2) {
        if (cd[i2])
          ++l[cd[i2] - 1];
      }
      var le = new u16(mb);
      for (i2 = 1; i2 < mb; ++i2) {
        le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
      }
      var co;
      if (r) {
        co = new u16(1 << mb);
        var rvb = 15 - mb;
        for (i2 = 0; i2 < s; ++i2) {
          if (cd[i2]) {
            var sv = i2 << 4 | cd[i2];
            var r_1 = mb - cd[i2];
            var v = le[cd[i2] - 1]++ << r_1;
            for (var m2 = v | (1 << r_1) - 1; v <= m2; ++v) {
              co[rev[v] >> rvb] = sv;
            }
          }
        }
      } else {
        co = new u16(s);
        for (i2 = 0; i2 < s; ++i2) {
          if (cd[i2]) {
            co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
          }
        }
      }
      return co;
    }), "hMap");
    var flt = new u8(288);
    for (i = 0; i < 144; ++i)
      flt[i] = 8;
    var i;
    for (i = 144; i < 256; ++i)
      flt[i] = 9;
    var i;
    for (i = 256; i < 280; ++i)
      flt[i] = 7;
    var i;
    for (i = 280; i < 288; ++i)
      flt[i] = 8;
    var i;
    var fdt = new u8(32);
    for (i = 0; i < 32; ++i)
      fdt[i] = 5;
    var i;
    var flm = /* @__PURE__ */ hMap(flt, 9, 0);
    var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
    var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
    var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
    var max = /* @__PURE__ */ __name(function(a) {
      var m2 = a[0];
      for (var i2 = 1; i2 < a.length; ++i2) {
        if (a[i2] > m2)
          m2 = a[i2];
      }
      return m2;
    }, "max");
    var bits = /* @__PURE__ */ __name(function(d, p, m2) {
      var o = p / 8 | 0;
      return (d[o] | d[o + 1] << 8) >> (p & 7) & m2;
    }, "bits");
    var bits16 = /* @__PURE__ */ __name(function(d, p) {
      var o = p / 8 | 0;
      return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
    }, "bits16");
    var shft = /* @__PURE__ */ __name(function(p) {
      return (p + 7) / 8 | 0;
    }, "shft");
    var slc = /* @__PURE__ */ __name(function(v, s, e) {
      if (s == null || s < 0)
        s = 0;
      if (e == null || e > v.length)
        e = v.length;
      return new u8(v.subarray(s, e));
    }, "slc");
    exports.FlateErrorCode = {
      UnexpectedEOF: 0,
      InvalidBlockType: 1,
      InvalidLengthLiteral: 2,
      InvalidDistance: 3,
      StreamFinished: 4,
      NoStreamHandler: 5,
      InvalidHeader: 6,
      NoCallback: 7,
      InvalidUTF8: 8,
      ExtraFieldTooLong: 9,
      InvalidDate: 10,
      FilenameTooLong: 11,
      StreamFinishing: 12,
      InvalidZipData: 13,
      UnknownCompressionMethod: 14
    };
    var ec = [
      "unexpected EOF",
      "invalid block type",
      "invalid length/literal",
      "invalid distance",
      "stream finished",
      "no stream handler",
      ,
      "no callback",
      "invalid UTF-8 data",
      "extra field too long",
      "date not in range 1980-2099",
      "filename too long",
      "stream finishing",
      "invalid zip data"
      // determined by unknown compression method
    ];
    var err = /* @__PURE__ */ __name(function(ind, msg, nt) {
      var e = new Error(msg || ec[ind]);
      e.code = ind;
      if (Error.captureStackTrace)
        Error.captureStackTrace(e, err);
      if (!nt)
        throw e;
      return e;
    }, "err");
    var inflt = /* @__PURE__ */ __name(function(dat, st, buf, dict) {
      var sl = dat.length, dl = dict ? dict.length : 0;
      if (!sl || st.f && !st.l)
        return buf || new u8(0);
      var noBuf = !buf;
      var resize = noBuf || st.i != 2;
      var noSt = st.i;
      if (noBuf)
        buf = new u8(sl * 3);
      var cbuf = /* @__PURE__ */ __name(function(l2) {
        var bl = buf.length;
        if (l2 > bl) {
          var nbuf = new u8(Math.max(bl * 2, l2));
          nbuf.set(buf);
          buf = nbuf;
        }
      }, "cbuf");
      var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
      var tbts = sl * 8;
      do {
        if (!lm) {
          final = bits(dat, pos, 1);
          var type = bits(dat, pos + 1, 3);
          pos += 3;
          if (!type) {
            var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
            if (t > sl) {
              if (noSt)
                err(0);
              break;
            }
            if (resize)
              cbuf(bt + l);
            buf.set(dat.subarray(s, t), bt);
            st.b = bt += l, st.p = pos = t * 8, st.f = final;
            continue;
          } else if (type == 1)
            lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
          else if (type == 2) {
            var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
            var tl = hLit + bits(dat, pos + 5, 31) + 1;
            pos += 14;
            var ldt = new u8(tl);
            var clt = new u8(19);
            for (var i2 = 0; i2 < hcLen; ++i2) {
              clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
            }
            pos += hcLen * 3;
            var clb = max(clt), clbmsk = (1 << clb) - 1;
            var clm = hMap(clt, clb, 1);
            for (var i2 = 0; i2 < tl; ) {
              var r = clm[bits(dat, pos, clbmsk)];
              pos += r & 15;
              var s = r >> 4;
              if (s < 16) {
                ldt[i2++] = s;
              } else {
                var c = 0, n = 0;
                if (s == 16)
                  n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
                else if (s == 17)
                  n = 3 + bits(dat, pos, 7), pos += 3;
                else if (s == 18)
                  n = 11 + bits(dat, pos, 127), pos += 7;
                while (n--)
                  ldt[i2++] = c;
              }
            }
            var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
            lbt = max(lt);
            dbt = max(dt);
            lm = hMap(lt, lbt, 1);
            dm = hMap(dt, dbt, 1);
          } else
            err(1);
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
        }
        if (resize)
          cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var lpos = pos;
        for (; ; lpos = pos) {
          var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
          pos += c & 15;
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (!c)
            err(2);
          if (sym < 256)
            buf[bt++] = sym;
          else if (sym == 256) {
            lpos = pos, lm = null;
            break;
          } else {
            var add = sym - 254;
            if (sym > 264) {
              var i2 = sym - 257, b = fleb[i2];
              add = bits(dat, pos, (1 << b) - 1) + fl[i2];
              pos += b;
            }
            var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
            if (!d)
              err(3);
            pos += d & 15;
            var dt = fd[dsym];
            if (dsym > 3) {
              var b = fdeb[dsym];
              dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
            }
            if (pos > tbts) {
              if (noSt)
                err(0);
              break;
            }
            if (resize)
              cbuf(bt + 131072);
            var end = bt + add;
            if (bt < dt) {
              var shift = dl - dt, dend = Math.min(dt, end);
              if (shift + bt < 0)
                err(3);
              for (; bt < dend; ++bt)
                buf[bt] = dict[shift + bt];
            }
            for (; bt < end; ++bt)
              buf[bt] = buf[bt - dt];
          }
        }
        st.l = lm, st.p = lpos, st.b = bt, st.f = final;
        if (lm)
          final = 1, st.m = lbt, st.d = dm, st.n = dbt;
      } while (!final);
      return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
    }, "inflt");
    var wbits = /* @__PURE__ */ __name(function(d, p, v) {
      v <<= p & 7;
      var o = p / 8 | 0;
      d[o] |= v;
      d[o + 1] |= v >> 8;
    }, "wbits");
    var wbits16 = /* @__PURE__ */ __name(function(d, p, v) {
      v <<= p & 7;
      var o = p / 8 | 0;
      d[o] |= v;
      d[o + 1] |= v >> 8;
      d[o + 2] |= v >> 16;
    }, "wbits16");
    var hTree = /* @__PURE__ */ __name(function(d, mb) {
      var t = [];
      for (var i2 = 0; i2 < d.length; ++i2) {
        if (d[i2])
          t.push({ s: i2, f: d[i2] });
      }
      var s = t.length;
      var t2 = t.slice();
      if (!s)
        return { t: et, l: 0 };
      if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return { t: v, l: 1 };
      }
      t.sort(function(a, b) {
        return a.f - b.f;
      });
      t.push({ s: -1, f: 25001 });
      var l = t[0], r = t[1], i0 = 0, i1 = 1, i22 = 2;
      t[0] = { s: -1, f: l.f + r.f, l, r };
      while (i1 != s - 1) {
        l = t[t[i0].f < t[i22].f ? i0++ : i22++];
        r = t[i0 != i1 && t[i0].f < t[i22].f ? i0++ : i22++];
        t[i1++] = { s: -1, f: l.f + r.f, l, r };
      }
      var maxSym = t2[0].s;
      for (var i2 = 1; i2 < s; ++i2) {
        if (t2[i2].s > maxSym)
          maxSym = t2[i2].s;
      }
      var tr = new u16(maxSym + 1);
      var mbt = ln(t[i1 - 1], tr, 0);
      if (mbt > mb) {
        var i2 = 0, dt = 0;
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function(a, b) {
          return tr[b.s] - tr[a.s] || a.f - b.f;
        });
        for (; i2 < s; ++i2) {
          var i2_1 = t2[i2].s;
          if (tr[i2_1] > mb) {
            dt += cst - (1 << mbt - tr[i2_1]);
            tr[i2_1] = mb;
          } else
            break;
        }
        dt >>= lft;
        while (dt > 0) {
          var i2_2 = t2[i2].s;
          if (tr[i2_2] < mb)
            dt -= 1 << mb - tr[i2_2]++ - 1;
          else
            ++i2;
        }
        for (; i2 >= 0 && dt; --i2) {
          var i2_3 = t2[i2].s;
          if (tr[i2_3] == mb) {
            --tr[i2_3];
            ++dt;
          }
        }
        mbt = mb;
      }
      return { t: new u8(tr), l: mbt };
    }, "hTree");
    var ln = /* @__PURE__ */ __name(function(n, l, d) {
      return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
    }, "ln");
    var lc = /* @__PURE__ */ __name(function(c) {
      var s = c.length;
      while (s && !c[--s])
        ;
      var cl = new u16(++s);
      var cli = 0, cln = c[0], cls = 1;
      var w = /* @__PURE__ */ __name(function(v) {
        cl[cli++] = v;
      }, "w");
      for (var i2 = 1; i2 <= s; ++i2) {
        if (c[i2] == cln && i2 != s)
          ++cls;
        else {
          if (!cln && cls > 2) {
            for (; cls > 138; cls -= 138)
              w(32754);
            if (cls > 2) {
              w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
              cls = 0;
            }
          } else if (cls > 3) {
            w(cln), --cls;
            for (; cls > 6; cls -= 6)
              w(8304);
            if (cls > 2)
              w(cls - 3 << 5 | 8208), cls = 0;
          }
          while (cls--)
            w(cln);
          cls = 1;
          cln = c[i2];
        }
      }
      return { c: cl.subarray(0, cli), n: s };
    }, "lc");
    var clen = /* @__PURE__ */ __name(function(cf, cl) {
      var l = 0;
      for (var i2 = 0; i2 < cl.length; ++i2)
        l += cf[i2] * cl[i2];
      return l;
    }, "clen");
    var wfblk = /* @__PURE__ */ __name(function(out, pos, dat) {
      var s = dat.length;
      var o = shft(pos + 2);
      out[o] = s & 255;
      out[o + 1] = s >> 8;
      out[o + 2] = out[o] ^ 255;
      out[o + 3] = out[o + 1] ^ 255;
      for (var i2 = 0; i2 < s; ++i2)
        out[o + i2 + 4] = dat[i2];
      return (o + 4 + s) * 8;
    }, "wfblk");
    var wblk = /* @__PURE__ */ __name(function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
      wbits(out, p++, final);
      ++lf[256];
      var _a8 = hTree(lf, 15), dlt = _a8.t, mlb = _a8.l;
      var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
      var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
      var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
      var lcfreq = new u16(19);
      for (var i2 = 0; i2 < lclt.length; ++i2)
        ++lcfreq[lclt[i2] & 31];
      for (var i2 = 0; i2 < lcdt.length; ++i2)
        ++lcfreq[lcdt[i2] & 31];
      var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
      var nlcc = 19;
      for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
        ;
      var flen = bl + 5 << 3;
      var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
      var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
      if (bs >= 0 && flen <= ftlen && flen <= dtlen)
        return wfblk(out, p, dat.subarray(bs, bs + bl));
      var lm, ll, dm, dl;
      wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
      if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for (var i2 = 0; i2 < nlcc; ++i2)
          wbits(out, p + 3 * i2, lct[clim[i2]]);
        p += 3 * nlcc;
        var lcts = [lclt, lcdt];
        for (var it = 0; it < 2; ++it) {
          var clct = lcts[it];
          for (var i2 = 0; i2 < clct.length; ++i2) {
            var len = clct[i2] & 31;
            wbits(out, p, llm[len]), p += lct[len];
            if (len > 15)
              wbits(out, p, clct[i2] >> 5 & 127), p += clct[i2] >> 12;
          }
        }
      } else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
      }
      for (var i2 = 0; i2 < li; ++i2) {
        var sym = syms[i2];
        if (sym > 255) {
          var len = sym >> 18 & 31;
          wbits16(out, p, lm[len + 257]), p += ll[len + 257];
          if (len > 7)
            wbits(out, p, sym >> 23 & 31), p += fleb[len];
          var dst = sym & 31;
          wbits16(out, p, dm[dst]), p += dl[dst];
          if (dst > 3)
            wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
        } else {
          wbits16(out, p, lm[sym]), p += ll[sym];
        }
      }
      wbits16(out, p, lm[256]);
      return p + ll[256];
    }, "wblk");
    var deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
    var et = /* @__PURE__ */ new u8(0);
    var dflt = /* @__PURE__ */ __name(function(dat, lvl, plvl, pre, post, st) {
      var s = st.z || dat.length;
      var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
      var w = o.subarray(pre, o.length - post);
      var lst = st.l;
      var pos = (st.r || 0) & 7;
      if (lvl) {
        if (pos)
          w[0] = st.r >> 3;
        var opt = deo[lvl - 1];
        var n = opt >> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = /* @__PURE__ */ __name(function(i3) {
          return (dat[i3] ^ dat[i3 + 1] << bs1_1 ^ dat[i3 + 2] << bs2_1) & msk_1;
        }, "hsh");
        var syms = new i32(25e3);
        var lf = new u16(288), df = new u16(32);
        var lc_1 = 0, eb = 0, i2 = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
        for (; i2 + 2 < s; ++i2) {
          var hv = hsh(i2);
          var imod = i2 & 32767, pimod = head[hv];
          prev[imod] = pimod;
          head[hv] = imod;
          if (wi <= i2) {
            var rem = s - i2;
            if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
              pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i2 - bs, pos);
              li = lc_1 = eb = 0, bs = i2;
              for (var j = 0; j < 286; ++j)
                lf[j] = 0;
              for (var j = 0; j < 30; ++j)
                df[j] = 0;
            }
            var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
            if (rem > 2 && hv == hsh(i2 - dif)) {
              var maxn = Math.min(n, rem) - 1;
              var maxd = Math.min(32767, i2);
              var ml = Math.min(258, rem);
              while (dif <= maxd && --ch_1 && imod != pimod) {
                if (dat[i2 + l] == dat[i2 + l - dif]) {
                  var nl = 0;
                  for (; nl < ml && dat[i2 + nl] == dat[i2 + nl - dif]; ++nl)
                    ;
                  if (nl > l) {
                    l = nl, d = dif;
                    if (nl > maxn)
                      break;
                    var mmd = Math.min(dif, nl - 2);
                    var md = 0;
                    for (var j = 0; j < mmd; ++j) {
                      var ti = i2 - dif + j & 32767;
                      var pti = prev[ti];
                      var cd = ti - pti & 32767;
                      if (cd > md)
                        md = cd, pimod = ti;
                    }
                  }
                }
                imod = pimod, pimod = prev[imod];
                dif += imod - pimod & 32767;
              }
            }
            if (d) {
              syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
              var lin = revfl[l] & 31, din = revfd[d] & 31;
              eb += fleb[lin] + fdeb[din];
              ++lf[257 + lin];
              ++df[din];
              wi = i2 + l;
              ++lc_1;
            } else {
              syms[li++] = dat[i2];
              ++lf[dat[i2]];
            }
          }
        }
        for (i2 = Math.max(i2, wi); i2 < s; ++i2) {
          syms[li++] = dat[i2];
          ++lf[dat[i2]];
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i2 - bs, pos);
        if (!lst) {
          st.r = pos & 7 | w[pos / 8 | 0] << 3;
          pos -= 7;
          st.h = head, st.p = prev, st.i = i2, st.w = wi;
        }
      } else {
        for (var i2 = st.w || 0; i2 < s + lst; i2 += 65535) {
          var e = i2 + 65535;
          if (e >= s) {
            w[pos / 8 | 0] = lst;
            e = s;
          }
          pos = wfblk(w, pos + 1, dat.subarray(i2, e));
        }
        st.i = s;
      }
      return slc(o, 0, pre + shft(pos) + post);
    }, "dflt");
    var crct = /* @__PURE__ */ (function() {
      var t = new Int32Array(256);
      for (var i2 = 0; i2 < 256; ++i2) {
        var c = i2, k = 9;
        while (--k)
          c = (c & 1 && -306674912) ^ c >>> 1;
        t[i2] = c;
      }
      return t;
    })();
    var crc = /* @__PURE__ */ __name(function() {
      var c = -1;
      return {
        p: /* @__PURE__ */ __name(function(d) {
          var cr = c;
          for (var i2 = 0; i2 < d.length; ++i2)
            cr = crct[cr & 255 ^ d[i2]] ^ cr >>> 8;
          c = cr;
        }, "p"),
        d: /* @__PURE__ */ __name(function() {
          return ~c;
        }, "d")
      };
    }, "crc");
    var adler = /* @__PURE__ */ __name(function() {
      var a = 1, b = 0;
      return {
        p: /* @__PURE__ */ __name(function(d) {
          var n = a, m2 = b;
          var l = d.length | 0;
          for (var i2 = 0; i2 != l; ) {
            var e = Math.min(i2 + 2655, l);
            for (; i2 < e; ++i2)
              m2 += n += d[i2];
            n = (n & 65535) + 15 * (n >> 16), m2 = (m2 & 65535) + 15 * (m2 >> 16);
          }
          a = n, b = m2;
        }, "p"),
        d: /* @__PURE__ */ __name(function() {
          a %= 65521, b %= 65521;
          return (a & 255) << 24 | (a & 65280) << 8 | (b & 255) << 8 | b >> 8;
        }, "d")
      };
    }, "adler");
    var dopt = /* @__PURE__ */ __name(function(dat, opt, pre, post, st) {
      if (!st) {
        st = { l: 1 };
        if (opt.dictionary) {
          var dict = opt.dictionary.subarray(-32768);
          var newDat = new u8(dict.length + dat.length);
          newDat.set(dict);
          newDat.set(dat, dict.length);
          dat = newDat;
          st.w = dict.length;
        }
      }
      return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
    }, "dopt");
    var mrg = /* @__PURE__ */ __name(function(a, b) {
      var o = {};
      for (var k in a)
        o[k] = a[k];
      for (var k in b)
        o[k] = b[k];
      return o;
    }, "mrg");
    var wcln = /* @__PURE__ */ __name(function(fn, fnStr, td2) {
      var dt = fn();
      var st = fn.toString();
      var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
      for (var i2 = 0; i2 < dt.length; ++i2) {
        var v = dt[i2], k = ks[i2];
        if (typeof v == "function") {
          fnStr += ";" + k + "=";
          var st_1 = v.toString();
          if (v.prototype) {
            if (st_1.indexOf("[native code]") != -1) {
              var spInd = st_1.indexOf(" ", 8) + 1;
              fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
            } else {
              fnStr += st_1;
              for (var t in v.prototype)
                fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
            }
          } else
            fnStr += st_1;
        } else
          td2[k] = v;
      }
      return fnStr;
    }, "wcln");
    var ch = [];
    var cbfs = /* @__PURE__ */ __name(function(v) {
      var tl = [];
      for (var k in v) {
        if (v[k].buffer) {
          tl.push((v[k] = new v[k].constructor(v[k])).buffer);
        }
      }
      return tl;
    }, "cbfs");
    var wrkr = /* @__PURE__ */ __name(function(fns, init, id, cb) {
      if (!ch[id]) {
        var fnStr = "", td_1 = {}, m2 = fns.length - 1;
        for (var i2 = 0; i2 < m2; ++i2)
          fnStr = wcln(fns[i2], fnStr, td_1);
        ch[id] = { c: wcln(fns[m2], fnStr, td_1), e: td_1 };
      }
      var td2 = mrg({}, ch[id].e);
      return (0, node_worker_1.default)(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
    }, "wrkr");
    var bInflt = /* @__PURE__ */ __name(function() {
      return [u8, u16, i32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gopt];
    }, "bInflt");
    var bDflt = /* @__PURE__ */ __name(function() {
      return [u8, u16, i32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf];
    }, "bDflt");
    var gze = /* @__PURE__ */ __name(function() {
      return [gzh, gzhl, wbytes, crc, crct];
    }, "gze");
    var guze = /* @__PURE__ */ __name(function() {
      return [gzs, gzl];
    }, "guze");
    var zle = /* @__PURE__ */ __name(function() {
      return [zlh, wbytes, adler];
    }, "zle");
    var zule = /* @__PURE__ */ __name(function() {
      return [zls];
    }, "zule");
    var pbf = /* @__PURE__ */ __name(function(msg) {
      return postMessage(msg, [msg.buffer]);
    }, "pbf");
    var gopt = /* @__PURE__ */ __name(function(o) {
      return o && {
        out: o.size && new u8(o.size),
        dictionary: o.dictionary
      };
    }, "gopt");
    var cbify = /* @__PURE__ */ __name(function(dat, opts, fns, init, id, cb) {
      var w = wrkr(fns, init, id, function(err2, dat2) {
        w.terminate();
        cb(err2, dat2);
      });
      w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
      return function() {
        w.terminate();
      };
    }, "cbify");
    var astrm = /* @__PURE__ */ __name(function(strm) {
      strm.ondata = function(dat, final) {
        return postMessage([dat, final], [dat.buffer]);
      };
      return function(ev) {
        if (ev.data.length) {
          strm.push(ev.data[0], ev.data[1]);
          postMessage([ev.data[0].length]);
        } else
          strm.flush();
      };
    }, "astrm");
    var astrmify = /* @__PURE__ */ __name(function(fns, strm, opts, init, id, flush, ext) {
      var t;
      var w = wrkr(fns, init, id, function(err2, dat) {
        if (err2)
          w.terminate(), strm.ondata.call(strm, err2);
        else if (!Array.isArray(dat))
          ext(dat);
        else if (dat.length == 1) {
          strm.queuedSize -= dat[0];
          if (strm.ondrain)
            strm.ondrain(dat[0]);
        } else {
          if (dat[1])
            w.terminate();
          strm.ondata.call(strm, err2, dat[0], dat[1]);
        }
      });
      w.postMessage(opts);
      strm.queuedSize = 0;
      strm.push = function(d, f) {
        if (!strm.ondata)
          err(5);
        if (t)
          strm.ondata(err(4, 0, 1), null, !!f);
        strm.queuedSize += d.length;
        w.postMessage([d, t = f], [d.buffer]);
      };
      strm.terminate = function() {
        w.terminate();
      };
      if (flush) {
        strm.flush = function() {
          w.postMessage([]);
        };
      }
    }, "astrmify");
    var b2 = /* @__PURE__ */ __name(function(d, b) {
      return d[b] | d[b + 1] << 8;
    }, "b2");
    var b4 = /* @__PURE__ */ __name(function(d, b) {
      return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
    }, "b4");
    var b8 = /* @__PURE__ */ __name(function(d, b) {
      return b4(d, b) + b4(d, b + 4) * 4294967296;
    }, "b8");
    var wbytes = /* @__PURE__ */ __name(function(d, b, v) {
      for (; v; ++b)
        d[b] = v, v >>>= 8;
    }, "wbytes");
    var gzh = /* @__PURE__ */ __name(function(c, o) {
      var fn = o.filename;
      c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3;
      if (o.mtime != 0)
        wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1e3));
      if (fn) {
        c[3] = 8;
        for (var i2 = 0; i2 <= fn.length; ++i2)
          c[i2 + 10] = fn.charCodeAt(i2);
      }
    }, "gzh");
    var gzs = /* @__PURE__ */ __name(function(d) {
      if (d[0] != 31 || d[1] != 139 || d[2] != 8)
        err(6, "invalid gzip data");
      var flg = d[3];
      var st = 10;
      if (flg & 4)
        st += (d[10] | d[11] << 8) + 2;
      for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
        ;
      return st + (flg & 2);
    }, "gzs");
    var gzl = /* @__PURE__ */ __name(function(d) {
      var l = d.length;
      return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
    }, "gzl");
    var gzhl = /* @__PURE__ */ __name(function(o) {
      return 10 + (o.filename ? o.filename.length + 1 : 0);
    }, "gzhl");
    var zlh = /* @__PURE__ */ __name(function(c, o) {
      var lv = o.level, fl2 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
      c[0] = 120, c[1] = fl2 << 6 | (o.dictionary && 32);
      c[1] |= 31 - (c[0] << 8 | c[1]) % 31;
      if (o.dictionary) {
        var h = adler();
        h.p(o.dictionary);
        wbytes(c, 2, h.d());
      }
    }, "zlh");
    var zls = /* @__PURE__ */ __name(function(d, dict) {
      if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31)
        err(6, "invalid zlib data");
      if ((d[1] >> 5 & 1) == +!dict)
        err(6, "invalid zlib data: " + (d[1] & 32 ? "need" : "unexpected") + " dictionary");
      return (d[1] >> 3 & 4) + 2;
    }, "zls");
    function StrmOpt(opts, cb) {
      if (typeof opts == "function")
        cb = opts, opts = {};
      this.ondata = cb;
      return opts;
    }
    __name(StrmOpt, "StrmOpt");
    var Deflate = /* @__PURE__ */ (function() {
      function Deflate2(opts, cb) {
        if (typeof opts == "function")
          cb = opts, opts = {};
        this.ondata = cb;
        this.o = opts || {};
        this.s = { l: 0, i: 32768, w: 32768, z: 32768 };
        this.b = new u8(98304);
        if (this.o.dictionary) {
          var dict = this.o.dictionary.subarray(-32768);
          this.b.set(dict, 32768 - dict.length);
          this.s.i = 32768 - dict.length;
        }
      }
      __name(Deflate2, "Deflate");
      Deflate2.prototype.p = function(c, f) {
        this.ondata(dopt(c, this.o, 0, 0, this.s), f);
      };
      Deflate2.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        if (this.s.l)
          err(4);
        var endLen = chunk.length + this.s.z;
        if (endLen > this.b.length) {
          if (endLen > 2 * this.b.length - 32768) {
            var newBuf = new u8(endLen & -32768);
            newBuf.set(this.b.subarray(0, this.s.z));
            this.b = newBuf;
          }
          var split = this.b.length - this.s.z;
          this.b.set(chunk.subarray(0, split), this.s.z);
          this.s.z = this.b.length;
          this.p(this.b, false);
          this.b.set(this.b.subarray(-32768));
          this.b.set(chunk.subarray(split), 32768);
          this.s.z = chunk.length - split + 32768;
          this.s.i = 32766, this.s.w = 32768;
        } else {
          this.b.set(chunk, this.s.z);
          this.s.z += chunk.length;
        }
        this.s.l = final & 1;
        if (this.s.z > this.s.w + 8191 || final) {
          this.p(this.b, final || false);
          this.s.w = this.s.i, this.s.i -= 2;
        }
      };
      Deflate2.prototype.flush = function() {
        if (!this.ondata)
          err(5);
        if (this.s.l)
          err(4);
        this.p(this.b, false);
        this.s.w = this.s.i, this.s.i -= 2;
      };
      return Deflate2;
    })();
    exports.Deflate = Deflate;
    var AsyncDeflate = /* @__PURE__ */ (function() {
      function AsyncDeflate2(opts, cb) {
        astrmify([
          bDflt,
          function() {
            return [astrm, Deflate];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Deflate(ev.data);
          onmessage = astrm(strm);
        }, 6, 1);
      }
      __name(AsyncDeflate2, "AsyncDeflate");
      return AsyncDeflate2;
    })();
    exports.AsyncDeflate = AsyncDeflate;
    function deflate(data, opts, cb) {
      if (!cb)
        cb = opts, opts = {};
      if (typeof cb != "function")
        err(7);
      return cbify(data, opts, [
        bDflt
      ], function(ev) {
        return pbf(deflateSync(ev.data[0], ev.data[1]));
      }, 0, cb);
    }
    __name(deflate, "deflate");
    exports.deflate = deflate;
    function deflateSync(data, opts) {
      return dopt(data, opts || {}, 0, 0);
    }
    __name(deflateSync, "deflateSync");
    exports.deflateSync = deflateSync;
    var Inflate = /* @__PURE__ */ (function() {
      function Inflate2(opts, cb) {
        if (typeof opts == "function")
          cb = opts, opts = {};
        this.ondata = cb;
        var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
        this.s = { i: 0, b: dict ? dict.length : 0 };
        this.o = new u8(32768);
        this.p = new u8(0);
        if (dict)
          this.o.set(dict);
      }
      __name(Inflate2, "Inflate");
      Inflate2.prototype.e = function(c) {
        if (!this.ondata)
          err(5);
        if (this.d)
          err(4);
        if (!this.p.length)
          this.p = c;
        else if (c.length) {
          var n = new u8(this.p.length + c.length);
          n.set(this.p), n.set(c, this.p.length), this.p = n;
        }
      };
      Inflate2.prototype.c = function(final) {
        this.s.i = +(this.d = final || false);
        var bts = this.s.b;
        var dt = inflt(this.p, this.s, this.o);
        this.ondata(slc(dt, bts, this.s.b), this.d);
        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
      };
      Inflate2.prototype.push = function(chunk, final) {
        this.e(chunk), this.c(final);
      };
      return Inflate2;
    })();
    exports.Inflate = Inflate;
    var AsyncInflate = /* @__PURE__ */ (function() {
      function AsyncInflate2(opts, cb) {
        astrmify([
          bInflt,
          function() {
            return [astrm, Inflate];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Inflate(ev.data);
          onmessage = astrm(strm);
        }, 7, 0);
      }
      __name(AsyncInflate2, "AsyncInflate");
      return AsyncInflate2;
    })();
    exports.AsyncInflate = AsyncInflate;
    function inflate(data, opts, cb) {
      if (!cb)
        cb = opts, opts = {};
      if (typeof cb != "function")
        err(7);
      return cbify(data, opts, [
        bInflt
      ], function(ev) {
        return pbf(inflateSync(ev.data[0], gopt(ev.data[1])));
      }, 1, cb);
    }
    __name(inflate, "inflate");
    exports.inflate = inflate;
    function inflateSync(data, opts) {
      return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
    }
    __name(inflateSync, "inflateSync");
    exports.inflateSync = inflateSync;
    var Gzip = /* @__PURE__ */ (function() {
      function Gzip2(opts, cb) {
        this.c = crc();
        this.l = 0;
        this.v = 1;
        Deflate.call(this, opts, cb);
      }
      __name(Gzip2, "Gzip");
      Gzip2.prototype.push = function(chunk, final) {
        this.c.p(chunk);
        this.l += chunk.length;
        Deflate.prototype.push.call(this, chunk, final);
      };
      Gzip2.prototype.p = function(c, f) {
        var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, this.s);
        if (this.v)
          gzh(raw, this.o), this.v = 0;
        if (f)
          wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
        this.ondata(raw, f);
      };
      Gzip2.prototype.flush = function() {
        Deflate.prototype.flush.call(this);
      };
      return Gzip2;
    })();
    exports.Gzip = Gzip;
    exports.Compress = Gzip;
    var AsyncGzip = /* @__PURE__ */ (function() {
      function AsyncGzip2(opts, cb) {
        astrmify([
          bDflt,
          gze,
          function() {
            return [astrm, Deflate, Gzip];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Gzip(ev.data);
          onmessage = astrm(strm);
        }, 8, 1);
      }
      __name(AsyncGzip2, "AsyncGzip");
      return AsyncGzip2;
    })();
    exports.AsyncGzip = AsyncGzip;
    exports.AsyncCompress = AsyncGzip;
    function gzip(data, opts, cb) {
      if (!cb)
        cb = opts, opts = {};
      if (typeof cb != "function")
        err(7);
      return cbify(data, opts, [
        bDflt,
        gze,
        function() {
          return [gzipSync];
        }
      ], function(ev) {
        return pbf(gzipSync(ev.data[0], ev.data[1]));
      }, 2, cb);
    }
    __name(gzip, "gzip");
    exports.gzip = gzip;
    exports.compress = gzip;
    function gzipSync(data, opts) {
      if (!opts)
        opts = {};
      var c = crc(), l = data.length;
      c.p(data);
      var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
      return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
    }
    __name(gzipSync, "gzipSync");
    exports.gzipSync = gzipSync;
    exports.compressSync = gzipSync;
    var Gunzip = /* @__PURE__ */ (function() {
      function Gunzip2(opts, cb) {
        this.v = 1;
        this.r = 0;
        Inflate.call(this, opts, cb);
      }
      __name(Gunzip2, "Gunzip");
      Gunzip2.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        this.r += chunk.length;
        if (this.v) {
          var p = this.p.subarray(this.v - 1);
          var s = p.length > 3 ? gzs(p) : 4;
          if (s > p.length) {
            if (!final)
              return;
          } else if (this.v > 1 && this.onmember) {
            this.onmember(this.r - p.length);
          }
          this.p = p.subarray(s), this.v = 0;
        }
        Inflate.prototype.c.call(this, final);
        if (this.s.f && !this.s.l && !final) {
          this.v = shft(this.s.p) + 9;
          this.s = { i: 0 };
          this.o = new u8(0);
          this.push(new u8(0), final);
        }
      };
      return Gunzip2;
    })();
    exports.Gunzip = Gunzip;
    var AsyncGunzip = /* @__PURE__ */ (function() {
      function AsyncGunzip2(opts, cb) {
        var _this = this;
        astrmify([
          bInflt,
          guze,
          function() {
            return [astrm, Inflate, Gunzip];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Gunzip(ev.data);
          strm.onmember = function(offset) {
            return postMessage(offset);
          };
          onmessage = astrm(strm);
        }, 9, 0, function(offset) {
          return _this.onmember && _this.onmember(offset);
        });
      }
      __name(AsyncGunzip2, "AsyncGunzip");
      return AsyncGunzip2;
    })();
    exports.AsyncGunzip = AsyncGunzip;
    function gunzip(data, opts, cb) {
      if (!cb)
        cb = opts, opts = {};
      if (typeof cb != "function")
        err(7);
      return cbify(data, opts, [
        bInflt,
        guze,
        function() {
          return [gunzipSync];
        }
      ], function(ev) {
        return pbf(gunzipSync(ev.data[0], ev.data[1]));
      }, 3, cb);
    }
    __name(gunzip, "gunzip");
    exports.gunzip = gunzip;
    function gunzipSync(data, opts) {
      var st = gzs(data);
      if (st + 8 > data.length)
        err(6, "invalid gzip data");
      return inflt(data.subarray(st, -8), { i: 2 }, opts && opts.out || new u8(gzl(data)), opts && opts.dictionary);
    }
    __name(gunzipSync, "gunzipSync");
    exports.gunzipSync = gunzipSync;
    var Zlib = /* @__PURE__ */ (function() {
      function Zlib2(opts, cb) {
        this.c = adler();
        this.v = 1;
        Deflate.call(this, opts, cb);
      }
      __name(Zlib2, "Zlib");
      Zlib2.prototype.push = function(chunk, final) {
        this.c.p(chunk);
        Deflate.prototype.push.call(this, chunk, final);
      };
      Zlib2.prototype.p = function(c, f) {
        var raw = dopt(c, this.o, this.v && (this.o.dictionary ? 6 : 2), f && 4, this.s);
        if (this.v)
          zlh(raw, this.o), this.v = 0;
        if (f)
          wbytes(raw, raw.length - 4, this.c.d());
        this.ondata(raw, f);
      };
      Zlib2.prototype.flush = function() {
        Deflate.prototype.flush.call(this);
      };
      return Zlib2;
    })();
    exports.Zlib = Zlib;
    var AsyncZlib = /* @__PURE__ */ (function() {
      function AsyncZlib2(opts, cb) {
        astrmify([
          bDflt,
          zle,
          function() {
            return [astrm, Deflate, Zlib];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Zlib(ev.data);
          onmessage = astrm(strm);
        }, 10, 1);
      }
      __name(AsyncZlib2, "AsyncZlib");
      return AsyncZlib2;
    })();
    exports.AsyncZlib = AsyncZlib;
    function zlib(data, opts, cb) {
      if (!cb)
        cb = opts, opts = {};
      if (typeof cb != "function")
        err(7);
      return cbify(data, opts, [
        bDflt,
        zle,
        function() {
          return [zlibSync];
        }
      ], function(ev) {
        return pbf(zlibSync(ev.data[0], ev.data[1]));
      }, 4, cb);
    }
    __name(zlib, "zlib");
    exports.zlib = zlib;
    function zlibSync(data, opts) {
      if (!opts)
        opts = {};
      var a = adler();
      a.p(data);
      var d = dopt(data, opts, opts.dictionary ? 6 : 2, 4);
      return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
    }
    __name(zlibSync, "zlibSync");
    exports.zlibSync = zlibSync;
    var Unzlib = /* @__PURE__ */ (function() {
      function Unzlib2(opts, cb) {
        Inflate.call(this, opts, cb);
        this.v = opts && opts.dictionary ? 2 : 1;
      }
      __name(Unzlib2, "Unzlib");
      Unzlib2.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
          if (this.p.length < 6 && !final)
            return;
          this.p = this.p.subarray(zls(this.p, this.v - 1)), this.v = 0;
        }
        if (final) {
          if (this.p.length < 4)
            err(6, "invalid zlib data");
          this.p = this.p.subarray(0, -4);
        }
        Inflate.prototype.c.call(this, final);
      };
      return Unzlib2;
    })();
    exports.Unzlib = Unzlib;
    var AsyncUnzlib = /* @__PURE__ */ (function() {
      function AsyncUnzlib2(opts, cb) {
        astrmify([
          bInflt,
          zule,
          function() {
            return [astrm, Inflate, Unzlib];
          }
        ], this, StrmOpt.call(this, opts, cb), function(ev) {
          var strm = new Unzlib(ev.data);
          onmessage = astrm(strm);
        }, 11, 0);
      }
      __name(AsyncUnzlib2, "AsyncUnzlib");
      return AsyncUnzlib2;
    })();
    exports.AsyncUnzlib = AsyncUnzlib;
    function unzlib(data, opts, cb) {
      if (!cb)
        cb = opts, opts = {};
      if (typeof cb != "function")
        err(7);
      return cbify(data, opts, [
        bInflt,
        zule,
        function() {
          return [unzlibSync];
        }
      ], function(ev) {
        return pbf(unzlibSync(ev.data[0], gopt(ev.data[1])));
      }, 5, cb);
    }
    __name(unzlib, "unzlib");
    exports.unzlib = unzlib;
    function unzlibSync(data, opts) {
      return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
    }
    __name(unzlibSync, "unzlibSync");
    exports.unzlibSync = unzlibSync;
    var Decompress = /* @__PURE__ */ (function() {
      function Decompress2(opts, cb) {
        this.o = StrmOpt.call(this, opts, cb) || {};
        this.G = Gunzip;
        this.I = Inflate;
        this.Z = Unzlib;
      }
      __name(Decompress2, "Decompress");
      Decompress2.prototype.i = function() {
        var _this = this;
        this.s.ondata = function(dat, final) {
          _this.ondata(dat, final);
        };
      };
      Decompress2.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        if (!this.s) {
          if (this.p && this.p.length) {
            var n = new u8(this.p.length + chunk.length);
            n.set(this.p), n.set(chunk, this.p.length);
          } else
            this.p = chunk;
          if (this.p.length > 2) {
            this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(this.o) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(this.o) : new this.Z(this.o);
            this.i();
            this.s.push(this.p, final);
            this.p = null;
          }
        } else
          this.s.push(chunk, final);
      };
      return Decompress2;
    })();
    exports.Decompress = Decompress;
    var AsyncDecompress = /* @__PURE__ */ (function() {
      function AsyncDecompress2(opts, cb) {
        Decompress.call(this, opts, cb);
        this.queuedSize = 0;
        this.G = AsyncGunzip;
        this.I = AsyncInflate;
        this.Z = AsyncUnzlib;
      }
      __name(AsyncDecompress2, "AsyncDecompress");
      AsyncDecompress2.prototype.i = function() {
        var _this = this;
        this.s.ondata = function(err2, dat, final) {
          _this.ondata(err2, dat, final);
        };
        this.s.ondrain = function(size) {
          _this.queuedSize -= size;
          if (_this.ondrain)
            _this.ondrain(size);
        };
      };
      AsyncDecompress2.prototype.push = function(chunk, final) {
        this.queuedSize += chunk.length;
        Decompress.prototype.push.call(this, chunk, final);
      };
      return AsyncDecompress2;
    })();
    exports.AsyncDecompress = AsyncDecompress;
    function decompress(data, opts, cb) {
      if (!cb)
        cb = opts, opts = {};
      if (typeof cb != "function")
        err(7);
      return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzip(data, opts, cb) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflate(data, opts, cb) : unzlib(data, opts, cb);
    }
    __name(decompress, "decompress");
    exports.decompress = decompress;
    function decompressSync(data, opts) {
      return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, opts) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, opts) : unzlibSync(data, opts);
    }
    __name(decompressSync, "decompressSync");
    exports.decompressSync = decompressSync;
    var fltn = /* @__PURE__ */ __name(function(d, p, t, o) {
      for (var k in d) {
        var val = d[k], n = p + k, op = o;
        if (Array.isArray(val))
          op = mrg(o, val[1]), val = val[0];
        if (val instanceof u8)
          t[n] = [val, op];
        else {
          t[n += "/"] = [new u8(0), op];
          fltn(val, n, t, o);
        }
      }
    }, "fltn");
    var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
    var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
    var tds = 0;
    try {
      td.decode(et, { stream: true });
      tds = 1;
    } catch (e) {
    }
    var dutf8 = /* @__PURE__ */ __name(function(d) {
      for (var r = "", i2 = 0; ; ) {
        var c = d[i2++];
        var eb = (c > 127) + (c > 223) + (c > 239);
        if (i2 + eb > d.length)
          return { s: r, r: slc(d, i2 - 1) };
        if (!eb)
          r += String.fromCharCode(c);
        else if (eb == 3) {
          c = ((c & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        } else if (eb & 1)
          r += String.fromCharCode((c & 31) << 6 | d[i2++] & 63);
        else
          r += String.fromCharCode((c & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
      }
    }, "dutf8");
    var DecodeUTF8 = /* @__PURE__ */ (function() {
      function DecodeUTF82(cb) {
        this.ondata = cb;
        if (tds)
          this.t = new TextDecoder();
        else
          this.p = et;
      }
      __name(DecodeUTF82, "DecodeUTF8");
      DecodeUTF82.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        final = !!final;
        if (this.t) {
          this.ondata(this.t.decode(chunk, { stream: true }), final);
          if (final) {
            if (this.t.decode().length)
              err(8);
            this.t = null;
          }
          return;
        }
        if (!this.p)
          err(4);
        var dat = new u8(this.p.length + chunk.length);
        dat.set(this.p);
        dat.set(chunk, this.p.length);
        var _a8 = dutf8(dat), s = _a8.s, r = _a8.r;
        if (final) {
          if (r.length)
            err(8);
          this.p = null;
        } else
          this.p = r;
        this.ondata(s, final);
      };
      return DecodeUTF82;
    })();
    exports.DecodeUTF8 = DecodeUTF8;
    var EncodeUTF8 = /* @__PURE__ */ (function() {
      function EncodeUTF82(cb) {
        this.ondata = cb;
      }
      __name(EncodeUTF82, "EncodeUTF8");
      EncodeUTF82.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        if (this.d)
          err(4);
        this.ondata(strToU82(chunk), this.d = final || false);
      };
      return EncodeUTF82;
    })();
    exports.EncodeUTF8 = EncodeUTF8;
    function strToU82(str, latin1) {
      if (latin1) {
        var ar_1 = new u8(str.length);
        for (var i2 = 0; i2 < str.length; ++i2)
          ar_1[i2] = str.charCodeAt(i2);
        return ar_1;
      }
      if (te)
        return te.encode(str);
      var l = str.length;
      var ar = new u8(str.length + (str.length >> 1));
      var ai = 0;
      var w = /* @__PURE__ */ __name(function(v) {
        ar[ai++] = v;
      }, "w");
      for (var i2 = 0; i2 < l; ++i2) {
        if (ai + 5 > ar.length) {
          var n = new u8(ai + 8 + (l - i2 << 1));
          n.set(ar);
          ar = n;
        }
        var c = str.charCodeAt(i2);
        if (c < 128 || latin1)
          w(c);
        else if (c < 2048)
          w(192 | c >> 6), w(128 | c & 63);
        else if (c > 55295 && c < 57344)
          c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i2) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
        else
          w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
      }
      return slc(ar, 0, ai);
    }
    __name(strToU82, "strToU8");
    exports.strToU8 = strToU82;
    function strFromU8(dat, latin1) {
      if (latin1) {
        var r = "";
        for (var i2 = 0; i2 < dat.length; i2 += 16384)
          r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
        return r;
      } else if (td) {
        return td.decode(dat);
      } else {
        var _a8 = dutf8(dat), s = _a8.s, r = _a8.r;
        if (r.length)
          err(8);
        return s;
      }
    }
    __name(strFromU8, "strFromU8");
    exports.strFromU8 = strFromU8;
    var dbf = /* @__PURE__ */ __name(function(l) {
      return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
    }, "dbf");
    var slzh = /* @__PURE__ */ __name(function(d, b) {
      return b + 30 + b2(d, b + 26) + b2(d, b + 28);
    }, "slzh");
    var zh = /* @__PURE__ */ __name(function(d, b, z) {
      var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
      var _a8 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a8[0], su = _a8[1], off = _a8[2];
      return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
    }, "zh");
    var z64e = /* @__PURE__ */ __name(function(d, b) {
      for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
        ;
      return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
    }, "z64e");
    var exfl = /* @__PURE__ */ __name(function(ex) {
      var le = 0;
      if (ex) {
        for (var k in ex) {
          var l = ex[k].length;
          if (l > 65535)
            err(9);
          le += l + 4;
        }
      }
      return le;
    }, "exfl");
    var wzh = /* @__PURE__ */ __name(function(d, b, f, fn, u, c, ce, co) {
      var fl2 = fn.length, ex = f.extra, col = co && co.length;
      var exl = exfl(ex);
      wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
      if (ce != null)
        d[b++] = 20, d[b++] = f.os;
      d[b] = 20, b += 2;
      d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
      d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
      var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
      if (y < 0 || y > 119)
        err(10);
      wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
      if (c != -1) {
        wbytes(d, b, f.crc);
        wbytes(d, b + 4, c < 0 ? -c - 2 : c);
        wbytes(d, b + 8, f.size);
      }
      wbytes(d, b + 12, fl2);
      wbytes(d, b + 14, exl), b += 16;
      if (ce != null) {
        wbytes(d, b, col);
        wbytes(d, b + 6, f.attrs);
        wbytes(d, b + 10, ce), b += 14;
      }
      d.set(fn, b);
      b += fl2;
      if (exl) {
        for (var k in ex) {
          var exf = ex[k], l = exf.length;
          wbytes(d, b, +k);
          wbytes(d, b + 2, l);
          d.set(exf, b + 4), b += 4 + l;
        }
      }
      if (col)
        d.set(co, b), b += col;
      return b;
    }, "wzh");
    var wzf = /* @__PURE__ */ __name(function(o, b, c, d, e) {
      wbytes(o, b, 101010256);
      wbytes(o, b + 8, c);
      wbytes(o, b + 10, c);
      wbytes(o, b + 12, d);
      wbytes(o, b + 16, e);
    }, "wzf");
    var ZipPassThrough = /* @__PURE__ */ (function() {
      function ZipPassThrough2(filename) {
        this.filename = filename;
        this.c = crc();
        this.size = 0;
        this.compression = 0;
      }
      __name(ZipPassThrough2, "ZipPassThrough");
      ZipPassThrough2.prototype.process = function(chunk, final) {
        this.ondata(null, chunk, final);
      };
      ZipPassThrough2.prototype.push = function(chunk, final) {
        if (!this.ondata)
          err(5);
        this.c.p(chunk);
        this.size += chunk.length;
        if (final)
          this.crc = this.c.d();
        this.process(chunk, final || false);
      };
      return ZipPassThrough2;
    })();
    exports.ZipPassThrough = ZipPassThrough;
    var ZipDeflate = /* @__PURE__ */ (function() {
      function ZipDeflate2(filename, opts) {
        var _this = this;
        if (!opts)
          opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new Deflate(opts, function(dat, final) {
          _this.ondata(null, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
      }
      __name(ZipDeflate2, "ZipDeflate");
      ZipDeflate2.prototype.process = function(chunk, final) {
        try {
          this.d.push(chunk, final);
        } catch (e) {
          this.ondata(e, null, final);
        }
      };
      ZipDeflate2.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
      };
      return ZipDeflate2;
    })();
    exports.ZipDeflate = ZipDeflate;
    var AsyncZipDeflate = /* @__PURE__ */ (function() {
      function AsyncZipDeflate2(filename, opts) {
        var _this = this;
        if (!opts)
          opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new AsyncDeflate(opts, function(err2, dat, final) {
          _this.ondata(err2, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
        this.terminate = this.d.terminate;
      }
      __name(AsyncZipDeflate2, "AsyncZipDeflate");
      AsyncZipDeflate2.prototype.process = function(chunk, final) {
        this.d.push(chunk, final);
      };
      AsyncZipDeflate2.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
      };
      return AsyncZipDeflate2;
    })();
    exports.AsyncZipDeflate = AsyncZipDeflate;
    var Zip = /* @__PURE__ */ (function() {
      function Zip2(cb) {
        this.ondata = cb;
        this.u = [];
        this.d = 1;
      }
      __name(Zip2, "Zip");
      Zip2.prototype.add = function(file) {
        var _this = this;
        if (!this.ondata)
          err(5);
        if (this.d & 2)
          this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, false);
        else {
          var f = strToU82(file.filename), fl_1 = f.length;
          var com = file.comment, o = com && strToU82(com);
          var u = fl_1 != file.filename.length || o && com.length != o.length;
          var hl_1 = fl_1 + exfl(file.extra) + 30;
          if (fl_1 > 65535)
            this.ondata(err(11, 0, 1), null, false);
          var header = new u8(hl_1);
          wzh(header, 0, file, f, u, -1);
          var chks_1 = [header];
          var pAll_1 = /* @__PURE__ */ __name(function() {
            for (var _i = 0, chks_2 = chks_1; _i < chks_2.length; _i++) {
              var chk = chks_2[_i];
              _this.ondata(null, chk, false);
            }
            chks_1 = [];
          }, "pAll_1");
          var tr_1 = this.d;
          this.d = 0;
          var ind_1 = this.u.length;
          var uf_1 = mrg(file, {
            f,
            u,
            o,
            t: /* @__PURE__ */ __name(function() {
              if (file.terminate)
                file.terminate();
            }, "t"),
            r: /* @__PURE__ */ __name(function() {
              pAll_1();
              if (tr_1) {
                var nxt = _this.u[ind_1 + 1];
                if (nxt)
                  nxt.r();
                else
                  _this.d = 1;
              }
              tr_1 = 1;
            }, "r")
          });
          var cl_1 = 0;
          file.ondata = function(err2, dat, final) {
            if (err2) {
              _this.ondata(err2, dat, final);
              _this.terminate();
            } else {
              cl_1 += dat.length;
              chks_1.push(dat);
              if (final) {
                var dd = new u8(16);
                wbytes(dd, 0, 134695760);
                wbytes(dd, 4, file.crc);
                wbytes(dd, 8, cl_1);
                wbytes(dd, 12, file.size);
                chks_1.push(dd);
                uf_1.c = cl_1, uf_1.b = hl_1 + cl_1 + 16, uf_1.crc = file.crc, uf_1.size = file.size;
                if (tr_1)
                  uf_1.r();
                tr_1 = 1;
              } else if (tr_1)
                pAll_1();
            }
          };
          this.u.push(uf_1);
        }
      };
      Zip2.prototype.end = function() {
        var _this = this;
        if (this.d & 2) {
          this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, true);
          return;
        }
        if (this.d)
          this.e();
        else
          this.u.push({
            r: /* @__PURE__ */ __name(function() {
              if (!(_this.d & 1))
                return;
              _this.u.splice(-1, 1);
              _this.e();
            }, "r"),
            t: /* @__PURE__ */ __name(function() {
            }, "t")
          });
        this.d = 3;
      };
      Zip2.prototype.e = function() {
        var bt = 0, l = 0, tl = 0;
        for (var _i = 0, _a8 = this.u; _i < _a8.length; _i++) {
          var f = _a8[_i];
          tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
        }
        var out = new u8(tl + 22);
        for (var _b2 = 0, _c = this.u; _b2 < _c.length; _b2++) {
          var f = _c[_b2];
          wzh(out, bt, f, f.f, f.u, -f.c - 2, l, f.o);
          bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
        }
        wzf(out, bt, this.u.length, tl, l);
        this.ondata(null, out, true);
        this.d = 2;
      };
      Zip2.prototype.terminate = function() {
        for (var _i = 0, _a8 = this.u; _i < _a8.length; _i++) {
          var f = _a8[_i];
          f.t();
        }
        this.d = 2;
      };
      return Zip2;
    })();
    exports.Zip = Zip;
    function zip2(data, opts, cb) {
      if (!cb)
        cb = opts, opts = {};
      if (typeof cb != "function")
        err(7);
      var r = {};
      fltn(data, "", r, opts);
      var k = Object.keys(r);
      var lft = k.length, o = 0, tot = 0;
      var slft = lft, files = new Array(lft);
      var term = [];
      var tAll = /* @__PURE__ */ __name(function() {
        for (var i3 = 0; i3 < term.length; ++i3)
          term[i3]();
      }, "tAll");
      var cbd = /* @__PURE__ */ __name(function(a, b) {
        mt(function() {
          cb(a, b);
        });
      }, "cbd");
      mt(function() {
        cbd = cb;
      });
      var cbf = /* @__PURE__ */ __name(function() {
        var out = new u8(tot + 22), oe = o, cdl = tot - o;
        tot = 0;
        for (var i3 = 0; i3 < slft; ++i3) {
          var f = files[i3];
          try {
            var l = f.c.length;
            wzh(out, tot, f, f.f, f.u, l);
            var badd = 30 + f.f.length + exfl(f.extra);
            var loc = tot + badd;
            out.set(f.c, loc);
            wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
          } catch (e) {
            return cbd(e, null);
          }
        }
        wzf(out, o, files.length, cdl, oe);
        cbd(null, out);
      }, "cbf");
      if (!lft)
        cbf();
      var _loop_1 = /* @__PURE__ */ __name(function(i3) {
        var fn = k[i3];
        var _a8 = r[fn], file = _a8[0], p = _a8[1];
        var c = crc(), size = file.length;
        c.p(file);
        var f = strToU82(fn), s = f.length;
        var com = p.comment, m2 = com && strToU82(com), ms = m2 && m2.length;
        var exl = exfl(p.extra);
        var compression = p.level == 0 ? 0 : 8;
        var cbl = /* @__PURE__ */ __name(function(e, d) {
          if (e) {
            tAll();
            cbd(e, null);
          } else {
            var l = d.length;
            files[i3] = mrg(p, {
              size,
              crc: c.d(),
              c: d,
              f,
              m: m2,
              u: s != fn.length || m2 && com.length != ms,
              compression
            });
            o += 30 + s + exl + l;
            tot += 76 + 2 * (s + exl) + (ms || 0) + l;
            if (!--lft)
              cbf();
          }
        }, "cbl");
        if (s > 65535)
          cbl(err(11, 0, 1), null);
        if (!compression)
          cbl(null, file);
        else if (size < 16e4) {
          try {
            cbl(null, deflateSync(file, p));
          } catch (e) {
            cbl(e, null);
          }
        } else
          term.push(deflate(file, p, cbl));
      }, "_loop_1");
      for (var i2 = 0; i2 < slft; ++i2) {
        _loop_1(i2);
      }
      return tAll;
    }
    __name(zip2, "zip");
    exports.zip = zip2;
    function zipSync(data, opts) {
      if (!opts)
        opts = {};
      var r = {};
      var files = [];
      fltn(data, "", r, opts);
      var o = 0;
      var tot = 0;
      for (var fn in r) {
        var _a8 = r[fn], file = _a8[0], p = _a8[1];
        var compression = p.level == 0 ? 0 : 8;
        var f = strToU82(fn), s = f.length;
        var com = p.comment, m2 = com && strToU82(com), ms = m2 && m2.length;
        var exl = exfl(p.extra);
        if (s > 65535)
          err(11);
        var d = compression ? deflateSync(file, p) : file, l = d.length;
        var c = crc();
        c.p(file);
        files.push(mrg(p, {
          size: file.length,
          crc: c.d(),
          c: d,
          f,
          m: m2,
          u: s != fn.length || m2 && com.length != ms,
          o,
          compression
        }));
        o += 30 + s + exl + l;
        tot += 76 + 2 * (s + exl) + (ms || 0) + l;
      }
      var out = new u8(tot + 22), oe = o, cdl = tot - o;
      for (var i2 = 0; i2 < files.length; ++i2) {
        var f = files[i2];
        wzh(out, f.o, f, f.f, f.u, f.c.length);
        var badd = 30 + f.f.length + exfl(f.extra);
        out.set(f.c, f.o + badd);
        wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
      }
      wzf(out, o, files.length, cdl, oe);
      return out;
    }
    __name(zipSync, "zipSync");
    exports.zipSync = zipSync;
    var UnzipPassThrough = /* @__PURE__ */ (function() {
      function UnzipPassThrough2() {
      }
      __name(UnzipPassThrough2, "UnzipPassThrough");
      UnzipPassThrough2.prototype.push = function(data, final) {
        this.ondata(null, data, final);
      };
      UnzipPassThrough2.compression = 0;
      return UnzipPassThrough2;
    })();
    exports.UnzipPassThrough = UnzipPassThrough;
    var UnzipInflate = /* @__PURE__ */ (function() {
      function UnzipInflate2() {
        var _this = this;
        this.i = new Inflate(function(dat, final) {
          _this.ondata(null, dat, final);
        });
      }
      __name(UnzipInflate2, "UnzipInflate");
      UnzipInflate2.prototype.push = function(data, final) {
        try {
          this.i.push(data, final);
        } catch (e) {
          this.ondata(e, null, final);
        }
      };
      UnzipInflate2.compression = 8;
      return UnzipInflate2;
    })();
    exports.UnzipInflate = UnzipInflate;
    var AsyncUnzipInflate = /* @__PURE__ */ (function() {
      function AsyncUnzipInflate2(_, sz) {
        var _this = this;
        if (sz < 32e4) {
          this.i = new Inflate(function(dat, final) {
            _this.ondata(null, dat, final);
          });
        } else {
          this.i = new AsyncInflate(function(err2, dat, final) {
            _this.ondata(err2, dat, final);
          });
          this.terminate = this.i.terminate;
        }
      }
      __name(AsyncUnzipInflate2, "AsyncUnzipInflate");
      AsyncUnzipInflate2.prototype.push = function(data, final) {
        if (this.i.terminate)
          data = slc(data, 0);
        this.i.push(data, final);
      };
      AsyncUnzipInflate2.compression = 8;
      return AsyncUnzipInflate2;
    })();
    exports.AsyncUnzipInflate = AsyncUnzipInflate;
    var Unzip = /* @__PURE__ */ (function() {
      function Unzip2(cb) {
        this.onfile = cb;
        this.k = [];
        this.o = {
          0: UnzipPassThrough
        };
        this.p = et;
      }
      __name(Unzip2, "Unzip");
      Unzip2.prototype.push = function(chunk, final) {
        var _this = this;
        if (!this.onfile)
          err(5);
        if (!this.p)
          err(4);
        if (this.c > 0) {
          var len = Math.min(this.c, chunk.length);
          var toAdd = chunk.subarray(0, len);
          this.c -= len;
          if (this.d)
            this.d.push(toAdd, !this.c);
          else
            this.k[0].push(toAdd);
          chunk = chunk.subarray(len);
          if (chunk.length)
            return this.push(chunk, final);
        } else {
          var f = 0, i2 = 0, is = void 0, buf = void 0;
          if (!this.p.length)
            buf = chunk;
          else if (!chunk.length)
            buf = this.p;
          else {
            buf = new u8(this.p.length + chunk.length);
            buf.set(this.p), buf.set(chunk, this.p.length);
          }
          var l = buf.length, oc = this.c, add = oc && this.d;
          var _loop_2 = /* @__PURE__ */ __name(function() {
            var _a8;
            var sig = b4(buf, i2);
            if (sig == 67324752) {
              f = 1, is = i2;
              this_1.d = null;
              this_1.c = 0;
              var bf = b2(buf, i2 + 6), cmp_1 = b2(buf, i2 + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i2 + 26), es = b2(buf, i2 + 28);
              if (l > i2 + 30 + fnl + es) {
                var chks_3 = [];
                this_1.k.unshift(chks_3);
                f = 2;
                var sc_1 = b4(buf, i2 + 18), su_1 = b4(buf, i2 + 22);
                var fn_1 = strFromU8(buf.subarray(i2 + 30, i2 += 30 + fnl), !u);
                if (sc_1 == 4294967295) {
                  _a8 = dd ? [-2] : z64e(buf, i2), sc_1 = _a8[0], su_1 = _a8[1];
                } else if (dd)
                  sc_1 = -1;
                i2 += es;
                this_1.c = sc_1;
                var d_1;
                var file_1 = {
                  name: fn_1,
                  compression: cmp_1,
                  start: /* @__PURE__ */ __name(function() {
                    if (!file_1.ondata)
                      err(5);
                    if (!sc_1)
                      file_1.ondata(null, et, true);
                    else {
                      var ctr = _this.o[cmp_1];
                      if (!ctr)
                        file_1.ondata(err(14, "unknown compression type " + cmp_1, 1), null, false);
                      d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
                      d_1.ondata = function(err2, dat3, final2) {
                        file_1.ondata(err2, dat3, final2);
                      };
                      for (var _i = 0, chks_4 = chks_3; _i < chks_4.length; _i++) {
                        var dat2 = chks_4[_i];
                        d_1.push(dat2, false);
                      }
                      if (_this.k[0] == chks_3 && _this.c)
                        _this.d = d_1;
                      else
                        d_1.push(et, true);
                    }
                  }, "start"),
                  terminate: /* @__PURE__ */ __name(function() {
                    if (d_1 && d_1.terminate)
                      d_1.terminate();
                  }, "terminate")
                };
                if (sc_1 >= 0)
                  file_1.size = sc_1, file_1.originalSize = su_1;
                this_1.onfile(file_1);
              }
              return "break";
            } else if (oc) {
              if (sig == 134695760) {
                is = i2 += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
                return "break";
              } else if (sig == 33639248) {
                is = i2 -= 4, f = 3, this_1.c = 0;
                return "break";
              }
            }
          }, "_loop_2");
          var this_1 = this;
          for (; i2 < l - 4; ++i2) {
            var state_1 = _loop_2();
            if (state_1 === "break")
              break;
          }
          this.p = et;
          if (oc < 0) {
            var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 134695760 && 4)) : buf.subarray(0, i2);
            if (add)
              add.push(dat, !!f);
            else
              this.k[+(f == 2)].push(dat);
          }
          if (f & 2)
            return this.push(buf.subarray(i2), final);
          this.p = buf.subarray(i2);
        }
        if (final) {
          if (this.c)
            err(13);
          this.p = null;
        }
      };
      Unzip2.prototype.register = function(decoder2) {
        this.o[decoder2.compression] = decoder2;
      };
      return Unzip2;
    })();
    exports.Unzip = Unzip;
    var mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
      fn();
    };
    function unzip(data, opts, cb) {
      if (!cb)
        cb = opts, opts = {};
      if (typeof cb != "function")
        err(7);
      var term = [];
      var tAll = /* @__PURE__ */ __name(function() {
        for (var i3 = 0; i3 < term.length; ++i3)
          term[i3]();
      }, "tAll");
      var files = {};
      var cbd = /* @__PURE__ */ __name(function(a, b) {
        mt(function() {
          cb(a, b);
        });
      }, "cbd");
      mt(function() {
        cbd = cb;
      });
      var e = data.length - 22;
      for (; b4(data, e) != 101010256; --e) {
        if (!e || data.length - e > 65558) {
          cbd(err(13, 0, 1), null);
          return tAll;
        }
      }
      ;
      var lft = b2(data, e + 8);
      if (lft) {
        var c = lft;
        var o = b4(data, e + 16);
        var z = o == 4294967295 || c == 65535;
        if (z) {
          var ze = b4(data, e - 12);
          z = b4(data, ze) == 101075792;
          if (z) {
            c = lft = b4(data, ze + 32);
            o = b4(data, ze + 48);
          }
        }
        var fltr = opts && opts.filter;
        var _loop_3 = /* @__PURE__ */ __name(function(i3) {
          var _a8 = zh(data, o, z), c_1 = _a8[0], sc = _a8[1], su = _a8[2], fn = _a8[3], no = _a8[4], off = _a8[5], b = slzh(data, off);
          o = no;
          var cbl = /* @__PURE__ */ __name(function(e2, d) {
            if (e2) {
              tAll();
              cbd(e2, null);
            } else {
              if (d)
                files[fn] = d;
              if (!--lft)
                cbd(null, files);
            }
          }, "cbl");
          if (!fltr || fltr({
            name: fn,
            size: sc,
            originalSize: su,
            compression: c_1
          })) {
            if (!c_1)
              cbl(null, slc(data, b, b + sc));
            else if (c_1 == 8) {
              var infl = data.subarray(b, b + sc);
              if (su < 524288 || sc > 0.8 * su) {
                try {
                  cbl(null, inflateSync(infl, { out: new u8(su) }));
                } catch (e2) {
                  cbl(e2, null);
                }
              } else
                term.push(inflate(infl, { size: su }, cbl));
            } else
              cbl(err(14, "unknown compression type " + c_1, 1), null);
          } else
            cbl(null, null);
        }, "_loop_3");
        for (var i2 = 0; i2 < c; ++i2) {
          _loop_3(i2);
        }
      } else
        cbd(null, {});
      return tAll;
    }
    __name(unzip, "unzip");
    exports.unzip = unzip;
    function unzipSync(data, opts) {
      var files = {};
      var e = data.length - 22;
      for (; b4(data, e) != 101010256; --e) {
        if (!e || data.length - e > 65558)
          err(13);
      }
      ;
      var c = b2(data, e + 8);
      if (!c)
        return {};
      var o = b4(data, e + 16);
      var z = o == 4294967295 || c == 65535;
      if (z) {
        var ze = b4(data, e - 12);
        z = b4(data, ze) == 101075792;
        if (z) {
          c = b4(data, ze + 32);
          o = b4(data, ze + 48);
        }
      }
      var fltr = opts && opts.filter;
      for (var i2 = 0; i2 < c; ++i2) {
        var _a8 = zh(data, o, z), c_2 = _a8[0], sc = _a8[1], su = _a8[2], fn = _a8[3], no = _a8[4], off = _a8[5], b = slzh(data, off);
        o = no;
        if (!fltr || fltr({
          name: fn,
          size: sc,
          originalSize: su,
          compression: c_2
        })) {
          if (!c_2)
            files[fn] = slc(data, b, b + sc);
          else if (c_2 == 8)
            files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
          else
            err(14, "unknown compression type " + c_2);
        }
      }
      return files;
    }
    __name(unzipSync, "unzipSync");
    exports.unzipSync = unzipSync;
  }
});

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var _PendingCopy = class _PendingCopy {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
__name(_PendingCopy, "PendingCopy");
var PendingCopy = _PendingCopy;
var _Clipboard = class _Clipboard {
  _document = inject(DOCUMENT);
  constructor() {
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
};
__name(_Clipboard, "Clipboard");
__publicField(_Clipboard, "\u0275fac", /* @__PURE__ */ __name(function Clipboard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Clipboard)();
}, "Clipboard_Factory"));
__publicField(_Clipboard, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Clipboard,
  factory: _Clipboard.\u0275fac,
  providedIn: "root"
}));
var Clipboard = _Clipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var _CdkCopyToClipboard = class _CdkCopyToClipboard {
  _clipboard = inject(Clipboard);
  _ngZone = inject(NgZone);
  /** Content to be copied. */
  text = "";
  /**
   * How many times to attempt to copy the text. This may be necessary for longer text, because
   * the browser needs time to fill an intermediate textarea element and copy the content.
   */
  attempts = 1;
  /**
   * Emits when some text is copied to the clipboard. The
   * emitted value indicates whether copying was successful.
   */
  copied = new EventEmitter();
  /** Copies that are currently being attempted. */
  _pending = /* @__PURE__ */ new Set();
  /** Whether the directive has been destroyed. */
  _destroyed;
  /** Timeout for the current copy attempt. */
  _currentTimeout;
  constructor() {
    const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = /* @__PURE__ */ __name(() => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      }, "attempt");
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
};
__name(_CdkCopyToClipboard, "CdkCopyToClipboard");
__publicField(_CdkCopyToClipboard, "\u0275fac", /* @__PURE__ */ __name(function CdkCopyToClipboard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkCopyToClipboard)();
}, "CdkCopyToClipboard_Factory"));
__publicField(_CdkCopyToClipboard, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkCopyToClipboard,
  selectors: [["", "cdkCopyToClipboard", ""]],
  hostBindings: /* @__PURE__ */ __name(function CdkCopyToClipboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function CdkCopyToClipboard_click_HostBindingHandler() {
        return ctx.copy();
      }, "CdkCopyToClipboard_click_HostBindingHandler"));
    }
  }, "CdkCopyToClipboard_HostBindings"),
  inputs: {
    text: [0, "cdkCopyToClipboard", "text"],
    attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
  },
  outputs: {
    copied: "cdkCopyToClipboardCopied"
  }
}));
var CdkCopyToClipboard = _CdkCopyToClipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      }
    }]
  }], () => [], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var _ClipboardModule = class _ClipboardModule {
};
__name(_ClipboardModule, "ClipboardModule");
__publicField(_ClipboardModule, "\u0275fac", /* @__PURE__ */ __name(function ClipboardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClipboardModule)();
}, "ClipboardModule_Factory"));
__publicField(_ClipboardModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ClipboardModule,
  imports: [CdkCopyToClipboard],
  exports: [CdkCopyToClipboard]
}));
__publicField(_ClipboardModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({}));
var ClipboardModule = _ClipboardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// node_modules/@webcontainer/api/dist/internal/constants.js
var DEFAULT_EDITOR_ORIGIN = "https://stackblitz.com";

// node_modules/@webcontainer/api/dist/internal/TypedEventTarget.js
var _TypedEventTarget = class _TypedEventTarget {
  _bus = new EventTarget();
  listen(listener) {
    function wrappedListener(event) {
      listener(event.data);
    }
    __name(wrappedListener, "wrappedListener");
    this._bus.addEventListener("message", wrappedListener);
    return () => this._bus.removeEventListener("message", wrappedListener);
  }
  fireEvent(data) {
    this._bus.dispatchEvent(new MessageEvent("message", { data }));
  }
};
__name(_TypedEventTarget, "TypedEventTarget");
var TypedEventTarget = _TypedEventTarget;

// node_modules/@webcontainer/api/dist/internal/tokens.js
var IGNORED_ERROR = new Error();
IGNORED_ERROR.stack = "";
var accessTokenChangedListeners = new TypedEventTarget();
function addAccessTokenChangedListener(listener) {
  return accessTokenChangedListeners.listen(listener);
}
__name(addAccessTokenChangedListener, "addAccessTokenChangedListener");

// node_modules/@webcontainer/api/dist/internal/iframe-url.js
var params = {};
var editorOrigin = null;
var iframeSettings = {
  get editorOrigin() {
    if (editorOrigin == null) {
      editorOrigin = new URL(globalThis.WEBCONTAINER_API_IFRAME_URL ?? DEFAULT_EDITOR_ORIGIN).origin;
    }
    return editorOrigin;
  },
  set editorOrigin(newOrigin) {
    editorOrigin = new URL(newOrigin).origin;
  },
  setQueryParam(key, value) {
    params[key] = value;
  },
  get url() {
    const url = new URL(this.editorOrigin);
    url.pathname = "/headless";
    for (const param in params) {
      url.searchParams.set(param, params[param]);
    }
    url.searchParams.set("version", "1.6.1");
    return url;
  }
};

// node_modules/@webcontainer/api/dist/internal/reset-promise.js
function resettablePromise() {
  let resolve;
  let promise;
  function reset() {
    promise = new Promise((_resolve) => resolve = _resolve);
  }
  __name(reset, "reset");
  reset();
  return {
    get promise() {
      return promise;
    },
    resolve(value) {
      return resolve(value);
    },
    reset
  };
}
__name(resettablePromise, "resettablePromise");

// node_modules/@webcontainer/api/dist/internal/auth-state.js
var authState = {
  initialized: false,
  bootCalled: false,
  authComplete: resettablePromise(),
  clientId: "",
  oauthScope: "",
  broadcastChannel: null,
  get editorOrigin() {
    return iframeSettings.editorOrigin;
  },
  tokens: null
};
var authFailedListeners = new TypedEventTarget();
var loggedOutListeners = new TypedEventTarget();
function assertAuthTokens(tokens) {
  if (!tokens) {
    throw new Error("Oops! Tokens is not defined when it always should be.");
  }
}
__name(assertAuthTokens, "assertAuthTokens");

// node_modules/@webcontainer/api/dist/preview-message-types.js
var PreviewMessageType;
(function(PreviewMessageType2) {
  PreviewMessageType2["UncaughtException"] = "PREVIEW_UNCAUGHT_EXCEPTION";
  PreviewMessageType2["UnhandledRejection"] = "PREVIEW_UNHANDLED_REJECTION";
  PreviewMessageType2["ConsoleError"] = "PREVIEW_CONSOLE_ERROR";
})(PreviewMessageType || (PreviewMessageType = {}));

// node_modules/@webcontainer/api/dist/vendor/index.js
var __defProp = Object.defineProperty;
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
}, "__export");
var comlink_exports = {};
__export(comlink_exports, {
  createEndpoint: /* @__PURE__ */ __name(() => createEndpoint, "createEndpoint"),
  expose: /* @__PURE__ */ __name(() => expose, "expose"),
  proxy: /* @__PURE__ */ __name(() => proxy, "proxy"),
  proxyMarker: /* @__PURE__ */ __name(() => proxyMarker, "proxyMarker"),
  releaseProxy: /* @__PURE__ */ __name(() => releaseProxy, "releaseProxy"),
  transfer: /* @__PURE__ */ __name(() => transfer, "transfer"),
  transferHandlers: /* @__PURE__ */ __name(() => transferHandlers, "transferHandlers"),
  windowEndpoint: /* @__PURE__ */ __name(() => windowEndpoint, "windowEndpoint"),
  wrap: /* @__PURE__ */ __name(() => wrap, "wrap")
});
var proxyMarker = Symbol("Comlink.proxy");
var createEndpoint = Symbol("Comlink.endpoint");
var releaseProxy = Symbol("Comlink.releaseProxy");
var throwMarker = Symbol("Comlink.thrown");
var isObject = /* @__PURE__ */ __name((val) => typeof val === "object" && val !== null || typeof val === "function", "isObject");
var proxyTransferHandler = {
  canHandle: /* @__PURE__ */ __name((val) => isObject(val) && val[proxyMarker], "canHandle"),
  serialize(obj) {
    const { port1, port2 } = new MessageChannel();
    expose(obj, port1);
    return [port2, [port2]];
  },
  deserialize(port) {
    port.start();
    return wrap(port);
  }
};
var throwTransferHandler = {
  canHandle: /* @__PURE__ */ __name((value) => isObject(value) && throwMarker in value, "canHandle"),
  serialize({ value }) {
    let serialized;
    if (value instanceof Error) {
      serialized = {
        isError: true,
        value: {
          message: value.message,
          name: value.name,
          stack: value.stack
        }
      };
    } else {
      serialized = { isError: false, value };
    }
    return [serialized, []];
  },
  deserialize(serialized) {
    if (serialized.isError) {
      throw Object.assign(new Error(serialized.value.message), serialized.value);
    }
    throw serialized.value;
  }
};
var transferHandlers = /* @__PURE__ */ new Map([
  ["proxy", proxyTransferHandler],
  ["throw", throwTransferHandler]
]);
function expose(obj, ep = self) {
  ep.addEventListener("message", /* @__PURE__ */ __name(function callback(ev) {
    if (!ev || !ev.data) {
      return;
    }
    const { id, type, path } = Object.assign({ path: [] }, ev.data);
    const argumentList = (ev.data.argumentList || []).map(fromWireValue);
    let returnValue;
    try {
      const parent = path.slice(0, -1).reduce((obj2, prop) => obj2[prop], obj);
      const rawValue = path.reduce((obj2, prop) => obj2[prop], obj);
      switch (type) {
        case 0:
          {
            returnValue = rawValue;
          }
          break;
        case 1:
          {
            parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
            returnValue = true;
          }
          break;
        case 2:
          {
            returnValue = rawValue.apply(parent, argumentList);
          }
          break;
        case 3:
          {
            const value = new rawValue(...argumentList);
            returnValue = proxy(value);
          }
          break;
        case 4:
          {
            const { port1, port2 } = new MessageChannel();
            expose(obj, port2);
            returnValue = transfer(port1, [port1]);
          }
          break;
        case 5:
          {
            returnValue = void 0;
          }
          break;
      }
    } catch (value) {
      returnValue = { value, [throwMarker]: 0 };
    }
    Promise.resolve(returnValue).catch((value) => {
      return { value, [throwMarker]: 0 };
    }).then((returnValue2) => {
      const [wireValue, transferables] = toWireValue(returnValue2);
      ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
      if (type === 5) {
        ep.removeEventListener("message", callback);
        closeEndPoint(ep);
      }
    });
  }, "callback"));
  if (ep.start) {
    ep.start();
  }
}
__name(expose, "expose");
function isMessagePort(endpoint) {
  return endpoint.constructor.name === "MessagePort";
}
__name(isMessagePort, "isMessagePort");
function closeEndPoint(endpoint) {
  if (isMessagePort(endpoint))
    endpoint.close();
}
__name(closeEndPoint, "closeEndPoint");
function wrap(ep, target) {
  return createProxy(ep, [], target);
}
__name(wrap, "wrap");
function throwIfProxyReleased(isReleased) {
  if (isReleased) {
    throw new Error("Proxy has been released and is not useable");
  }
}
__name(throwIfProxyReleased, "throwIfProxyReleased");
function createProxy(ep, path = [], target = function() {
}) {
  let isProxyReleased = false;
  const proxy2 = new Proxy(target, {
    get(_target, prop) {
      throwIfProxyReleased(isProxyReleased);
      if (prop === releaseProxy) {
        return () => {
          return requestResponseMessage(ep, {
            type: 5,
            path: path.map((p) => p.toString())
          }).then(() => {
            closeEndPoint(ep);
            isProxyReleased = true;
          });
        };
      }
      if (prop === "then") {
        if (path.length === 0) {
          return { then: /* @__PURE__ */ __name(() => proxy2, "then") };
        }
        const r = requestResponseMessage(ep, {
          type: 0,
          path: path.map((p) => p.toString())
        }).then(fromWireValue);
        return r.then.bind(r);
      }
      return createProxy(ep, [...path, prop]);
    },
    set(_target, prop, rawValue) {
      throwIfProxyReleased(isProxyReleased);
      const [value, transferables] = toWireValue(rawValue);
      return requestResponseMessage(ep, {
        type: 1,
        path: [...path, prop].map((p) => p.toString()),
        value
      }, transferables).then(fromWireValue);
    },
    apply(_target, _thisArg, rawArgumentList) {
      throwIfProxyReleased(isProxyReleased);
      const last = path[path.length - 1];
      if (last === createEndpoint) {
        return requestResponseMessage(ep, {
          type: 4
        }).then(fromWireValue);
      }
      if (last === "bind") {
        return createProxy(ep, path.slice(0, -1));
      }
      const [argumentList, transferables] = processArguments(rawArgumentList);
      return requestResponseMessage(ep, {
        type: 2,
        path: path.map((p) => p.toString()),
        argumentList
      }, transferables).then(fromWireValue);
    },
    construct(_target, rawArgumentList) {
      throwIfProxyReleased(isProxyReleased);
      const [argumentList, transferables] = processArguments(rawArgumentList);
      return requestResponseMessage(ep, {
        type: 3,
        path: path.map((p) => p.toString()),
        argumentList
      }, transferables).then(fromWireValue);
    }
  });
  return proxy2;
}
__name(createProxy, "createProxy");
function myFlat(arr) {
  return Array.prototype.concat.apply([], arr);
}
__name(myFlat, "myFlat");
function processArguments(argumentList) {
  const processed = argumentList.map(toWireValue);
  return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
}
__name(processArguments, "processArguments");
var transferCache = /* @__PURE__ */ new WeakMap();
function transfer(obj, transfers) {
  transferCache.set(obj, transfers);
  return obj;
}
__name(transfer, "transfer");
function proxy(obj) {
  return Object.assign(obj, { [proxyMarker]: true });
}
__name(proxy, "proxy");
function windowEndpoint(w, context = self, targetOrigin = "*") {
  return {
    postMessage: /* @__PURE__ */ __name((msg, transferables) => w.postMessage(msg, targetOrigin, transferables), "postMessage"),
    addEventListener: context.addEventListener.bind(context),
    removeEventListener: context.removeEventListener.bind(context)
  };
}
__name(windowEndpoint, "windowEndpoint");
function toWireValue(value) {
  for (const [name, handler] of transferHandlers) {
    if (handler.canHandle(value)) {
      const [serializedValue, transferables] = handler.serialize(value);
      return [
        {
          type: 3,
          name,
          value: serializedValue
        },
        transferables
      ];
    }
  }
  return [
    {
      type: 0,
      value
    },
    transferCache.get(value) || []
  ];
}
__name(toWireValue, "toWireValue");
function fromWireValue(value) {
  switch (value.type) {
    case 3:
      return transferHandlers.get(value.name).deserialize(value.value);
    case 0:
      return value.value;
  }
}
__name(fromWireValue, "fromWireValue");
function requestResponseMessage(ep, msg, transfers) {
  return new Promise((resolve) => {
    const id = generateUUID();
    ep.addEventListener("message", /* @__PURE__ */ __name(function l(ev) {
      if (!ev.data || !ev.data.id || ev.data.id !== id) {
        return;
      }
      ep.removeEventListener("message", l);
      resolve(ev.data);
    }, "l"));
    if (ep.start) {
      ep.start();
    }
    ep.postMessage(Object.assign({ id }, msg), transfers);
  });
}
__name(requestResponseMessage, "requestResponseMessage");
function generateUUID() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
__name(generateUUID, "generateUUID");

// node_modules/@webcontainer/api/dist/utils/is-preview-message.js
var PREVIEW_MESSAGE_TYPES = [
  PreviewMessageType.ConsoleError,
  PreviewMessageType.UncaughtException,
  PreviewMessageType.UnhandledRejection
];
function isPreviewMessage(data) {
  if (data == null || typeof data !== "object") {
    return false;
  }
  if (!("type" in data) || !PREVIEW_MESSAGE_TYPES.includes(data.type)) {
    return false;
  }
  return true;
}
__name(isPreviewMessage, "isPreviewMessage");

// node_modules/@webcontainer/api/dist/utils/null-prototype.js
function nullPrototype(source) {
  const prototype = /* @__PURE__ */ Object.create(null);
  if (!source) {
    return prototype;
  }
  return Object.assign(prototype, source);
}
__name(nullPrototype, "nullPrototype");

// node_modules/@webcontainer/api/dist/utils/file-system.js
var binaryDecoder = new TextDecoder("latin1");
function toInternalFileSystemTree(tree) {
  const newTree = { d: {} };
  for (const name of Object.keys(tree)) {
    const entry = tree[name];
    if ("file" in entry) {
      if ("symlink" in entry.file) {
        newTree.d[name] = { f: { l: entry.file.symlink } };
        continue;
      }
      const contents = entry.file.contents;
      const stringContents = typeof contents === "string" ? contents : binaryDecoder.decode(contents);
      const binary = typeof contents === "string" ? {} : { b: true };
      newTree.d[name] = { f: __spreadValues({ c: stringContents }, binary) };
      continue;
    }
    const newEntry = toInternalFileSystemTree(entry.directory);
    newTree.d[name] = newEntry;
  }
  return newTree;
}
__name(toInternalFileSystemTree, "toInternalFileSystemTree");
function toExternalFileSystemTree(tree) {
  const newTree = nullPrototype();
  if ("f" in tree) {
    throw new Error("It is not possible to export a single file in the JSON format.");
  }
  if ("d" in tree) {
    for (const name of Object.keys(tree.d)) {
      const entry = tree.d[name];
      if ("d" in entry) {
        newTree[name] = nullPrototype({
          directory: toExternalFileSystemTree(entry)
        });
      } else if ("f" in entry) {
        if ("c" in entry.f) {
          newTree[name] = nullPrototype({
            file: nullPrototype({
              contents: entry.f.b ? fromBinaryString(entry.f.c) : entry.f.c
            })
          });
        } else if ("l" in entry.f) {
          newTree[name] = nullPrototype({
            file: nullPrototype({
              symlink: entry.f.l
            })
          });
        }
      }
    }
  }
  return newTree;
}
__name(toExternalFileSystemTree, "toExternalFileSystemTree");
function fromBinaryString(s) {
  const encoded = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) {
    encoded[i] = s[i].charCodeAt(0);
  }
  return encoded;
}
__name(fromBinaryString, "fromBinaryString");

// node_modules/@webcontainer/api/dist/index.js
var bootPromise = null;
var cachedServerPromise = null;
var cachedBootOptions = {};
var decoder = new TextDecoder();
var encoder = new TextEncoder();
var _WebContainer = class _WebContainer {
  _instance;
  _runtimeInfo;
  /**
   * Gives access to the underlying file system.
   */
  fs;
  _tornDown = false;
  _unsubscribeFromTokenChangedListener = /* @__PURE__ */ __name(() => {
  }, "_unsubscribeFromTokenChangedListener");
  /** @internal */
  constructor(_instance, fs, previewScript, _runtimeInfo) {
    this._instance = _instance;
    this._runtimeInfo = _runtimeInfo;
    this.fs = new FileSystemAPIClient(fs);
    if (authState.initialized) {
      this._unsubscribeFromTokenChangedListener = addAccessTokenChangedListener((accessToken) => {
        this._instance.setCredentials({ accessToken, editorOrigin: authState.editorOrigin });
      });
      (async () => {
        await authState.authComplete.promise;
        if (this._tornDown) {
          return;
        }
        assertAuthTokens(authState.tokens);
        await this._instance.setCredentials({
          accessToken: authState.tokens.access,
          editorOrigin: authState.editorOrigin
        });
      })().catch((error) => {
        console.error(error);
      });
    }
  }
  async spawn(command, optionsOrArgs, options) {
    let args = [];
    if (Array.isArray(optionsOrArgs)) {
      args = optionsOrArgs;
    } else {
      options = optionsOrArgs;
    }
    let output2 = void 0;
    let outputStream = new ReadableStream();
    if (options?.output !== false) {
      const result = streamWithPush();
      output2 = result.push;
      outputStream = result.stream;
    }
    let stdout = void 0;
    let stdoutStream;
    let stderr = void 0;
    let stderrStream;
    const wrappedOutput = proxyListener(binaryListener(output2));
    const wrappedStdout = proxyListener(binaryListener(stdout));
    const wrappedStderr = proxyListener(binaryListener(stderr));
    const process = await this._instance.run({
      command,
      args,
      cwd: options?.cwd,
      env: options?.env,
      terminal: options?.terminal
    }, wrappedStdout, wrappedStderr, wrappedOutput);
    return new WebContainerProcessImpl(process, outputStream, stdoutStream, stderrStream);
  }
  async export(path, options) {
    const serializeOptions = {
      format: options?.format ?? "json",
      includes: options?.includes,
      excludes: options?.excludes,
      external: true
    };
    const result = await this._instance.serialize(path, serializeOptions);
    if (serializeOptions.format === "json") {
      const data = JSON.parse(decoder.decode(result));
      return toExternalFileSystemTree(data);
    }
    return result;
  }
  on(event, listener) {
    if (event === "preview-message") {
      const originalListener = listener;
      listener = /* @__PURE__ */ __name(((message) => {
        if (isPreviewMessage(message)) {
          originalListener(message);
        }
      }), "listener");
    }
    const { listener: wrapped, subscribe } = syncSubscription(listener);
    return subscribe(this._instance.on(event, comlink_exports.proxy(wrapped)));
  }
  /**
   * Mounts a tree of files into the filesystem. This can be specified as a tree object ({@link FileSystemTree})
   * or as a binary snapshot generated by [`@webcontainer/snapshot`](https://www.npmjs.com/package/@webcontainer/snapshot).
   *
   * @param snapshotOrTree - A tree of files, or a binary snapshot. Note that binary payloads will be transferred.
   * @param options.mountPoint - Specifies a nested path where the tree should be mounted.
   */
  mount(snapshotOrTree, options) {
    const payload = snapshotOrTree instanceof Uint8Array ? snapshotOrTree : snapshotOrTree instanceof ArrayBuffer ? new Uint8Array(snapshotOrTree) : encoder.encode(JSON.stringify(toInternalFileSystemTree(snapshotOrTree)));
    return this._instance.loadFiles(comlink_exports.transfer(payload, [payload.buffer]), {
      mountPoints: options?.mountPoint
    });
  }
  /**
   * Set a custom script to be injected into all previews. When this function is called, every
   * future page reload will contain the provided script tag on all HTML responses.
   *
   * Note:
   *
   * When this function resolves, every preview reloaded _after_ will have the new script.
   * Existing preview have to be explicitely reloaded.
   *
   * To reload a preview you can use `reloadPreview`.
   *
   * @param scriptSrc Source for the script tag.
   * @param options Options to define which type of script this is.
   */
  setPreviewScript(scriptSrc, options) {
    return this._instance.setPreviewScript(scriptSrc, options);
  }
  /**
   * The default value of the `PATH` environment variable for processes started through {@link spawn}.
   */
  get path() {
    return this._runtimeInfo.path;
  }
  /**
   * The full path to the working directory (see {@link FileSystemAPI}).
   */
  get workdir() {
    return this._runtimeInfo.cwd;
  }
  /**
   * Destroys the WebContainer instance, turning it unusable, and releases its resources. After this,
   * a new WebContainer instance can be obtained by calling {@link WebContainer.boot | `boot`}.
   *
   * All entities derived from this instance (e.g. processes, the file system, etc.) also become unusable
   * after calling this method.
   */
  teardown() {
    if (this._tornDown) {
      throw new Error("WebContainer already torn down");
    }
    this._tornDown = true;
    this._unsubscribeFromTokenChangedListener();
    const teardownFn = /* @__PURE__ */ __name(async () => {
      try {
        await this.fs._teardown();
        await this._instance.teardown();
      } finally {
        this._instance[comlink_exports.releaseProxy]();
        if (_WebContainer._instance === this) {
          _WebContainer._instance = null;
        }
      }
    }, "teardownFn");
    _WebContainer._teardownPromise = teardownFn();
  }
  /**
   * Boots a WebContainer. Only a single instance of WebContainer can be booted concurrently
   * (see {@link WebContainer.teardown | `teardown`}).
   *
   * Booting WebContainer is an expensive operation.
   */
  static async boot(options = {}) {
    await this._teardownPromise;
    _WebContainer._teardownPromise = null;
    const { workdirName } = options;
    if (window.crossOriginIsolated && options.coep === "none") {
      console.warn(`A Cross-Origin-Embedder-Policy header is required in cross origin isolated environments.
Set the 'coep' option to 'require-corp'.`);
    }
    if (workdirName?.includes("/") || workdirName === ".." || workdirName === ".") {
      throw new Error("workdirName should be a valid folder name");
    }
    authState.bootCalled = true;
    while (bootPromise) {
      await bootPromise;
    }
    if (_WebContainer._instance) {
      throw new Error("Only a single WebContainer instance can be booted");
    }
    const instancePromise = unsynchronizedBoot(options);
    bootPromise = instancePromise.catch(() => {
    });
    try {
      const instance = await instancePromise;
      _WebContainer._instance = instance;
      return instance;
    } finally {
      bootPromise = null;
    }
  }
};
__name(_WebContainer, "WebContainer");
/** @internal */
__publicField(_WebContainer, "_instance", null);
/** @internal */
__publicField(_WebContainer, "_teardownPromise", null);
var WebContainer = _WebContainer;
var DIR_ENTRY_TYPE_FILE = 1;
var DIR_ENTRY_TYPE_DIR = 2;
var _DirEntImpl = class _DirEntImpl {
  name;
  _type;
  constructor(name, _type) {
    this.name = name;
    this._type = _type;
  }
  isFile() {
    return this._type === DIR_ENTRY_TYPE_FILE;
  }
  isDirectory() {
    return this._type === DIR_ENTRY_TYPE_DIR;
  }
};
__name(_DirEntImpl, "DirEntImpl");
var DirEntImpl = _DirEntImpl;
var _FSWatcher = class _FSWatcher {
  _apiClient;
  _path;
  _options;
  _listener;
  _wrappedListener;
  _watcher;
  _closed = false;
  constructor(_apiClient, _path, _options, _listener) {
    this._apiClient = _apiClient;
    this._path = _path;
    this._options = _options;
    this._listener = _listener;
    this._apiClient._watchers.add(this);
    this._wrappedListener = (event, filename) => {
      if (this._listener && !this._closed) {
        this._listener(event, filename);
      }
    };
    this._apiClient._fs.watch(this._path, this._options, proxyListener(this._wrappedListener)).then((_watcher) => {
      this._watcher = _watcher;
      if (this._closed) {
        return this._teardown();
      }
      return void 0;
    }).catch(console.error);
  }
  async close() {
    if (!this._closed) {
      this._closed = true;
      this._apiClient._watchers.delete(this);
      await this._teardown();
    }
  }
  /**
   * @internal
   */
  async _teardown() {
    await this._watcher?.close().finally(() => {
      this._watcher?.[comlink_exports.releaseProxy]();
    });
  }
};
__name(_FSWatcher, "FSWatcher");
var FSWatcher = _FSWatcher;
var _WebContainerProcessImpl = class _WebContainerProcessImpl {
  output;
  input;
  exit;
  _process;
  stdout;
  stderr;
  constructor(process, output2, stdout, stderr) {
    this.output = output2;
    this._process = process;
    this.input = new WritableStream({
      write: /* @__PURE__ */ __name((data) => {
        this._getProcess()?.write(data).catch(() => {
        });
      }, "write")
    });
    this.exit = this._onExit();
    this.stdout = stdout;
    this.stderr = stderr;
  }
  kill() {
    this._process?.kill();
  }
  resize(dimensions) {
    this._getProcess()?.resize(dimensions);
  }
  async _onExit() {
    try {
      return await this._process.onExit;
    } finally {
      this._process?.[comlink_exports.releaseProxy]();
      this._process = null;
    }
  }
  _getProcess() {
    if (this._process == null) {
      console.warn("This process already exited");
    }
    return this._process;
  }
};
__name(_WebContainerProcessImpl, "WebContainerProcessImpl");
var WebContainerProcessImpl = _WebContainerProcessImpl;
var _FileSystemAPIClient = class _FileSystemAPIClient {
  _fs;
  _watchers = /* @__PURE__ */ new Set([]);
  constructor(fs) {
    this._fs = fs;
  }
  rm(...args) {
    return this._fs.rm(...args);
  }
  async readFile(path, encoding) {
    return await this._fs.readFile(path, encoding);
  }
  async rename(oldPath, newPath) {
    return await this._fs.rename(oldPath, newPath);
  }
  async writeFile(path, data, options) {
    if (data instanceof Uint8Array) {
      const buffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
      data = comlink_exports.transfer(new Uint8Array(buffer), [buffer]);
    }
    await this._fs.writeFile(path, data, options);
  }
  async readdir(path, options) {
    const result = await this._fs.readdir(path, options);
    if (isStringArray(result)) {
      return result;
    }
    if (isTypedArrayCollection(result)) {
      return result;
    }
    const entries = result.map((entry) => new DirEntImpl(entry.name, entry["Symbol(type)"]));
    return entries;
  }
  async mkdir(path, options) {
    return await this._fs.mkdir(path, options);
  }
  watch(path, options, listener) {
    if (typeof options === "function") {
      listener = options;
      options = null;
    }
    return new FSWatcher(this, path, options, listener);
  }
  /**
   * @internal
   */
  async _teardown() {
    this._fs[comlink_exports.releaseProxy]();
    await Promise.all([...this._watchers].map((watcher) => watcher.close()));
  }
};
__name(_FileSystemAPIClient, "FileSystemAPIClient");
var FileSystemAPIClient = _FileSystemAPIClient;
async function unsynchronizedBoot(options) {
  const { serverPromise } = serverFactory(options);
  const server = await serverPromise;
  const instance = await server.build({
    host: window.location.host,
    version: "1.6.1",
    workdirName: options.workdirName,
    forwardPreviewErrors: options.forwardPreviewErrors
  });
  const [fs, previewScript, runtimeInfo] = await Promise.all([
    instance.fs(),
    instance.previewScript(),
    instance.runtimeInfo()
  ]);
  return new WebContainer(instance, fs, previewScript, runtimeInfo);
}
__name(unsynchronizedBoot, "unsynchronizedBoot");
function binaryListener(listener) {
  if (listener == null) {
    return void 0;
  }
  return (data) => {
    if (data instanceof Uint8Array) {
      listener(decoder.decode(data));
    } else if (data == null) {
      listener(null);
    }
  };
}
__name(binaryListener, "binaryListener");
function proxyListener(listener) {
  if (listener == null) {
    return void 0;
  }
  return comlink_exports.proxy(listener);
}
__name(proxyListener, "proxyListener");
function serverFactory(options) {
  if (cachedServerPromise != null) {
    if (options.coep !== cachedBootOptions.coep) {
      console.warn(`Attempting to boot WebContainer with 'coep: ${options.coep}'`);
      console.warn(`First boot had 'coep: ${cachedBootOptions.coep}', new settings will not take effect!`);
    }
    return { serverPromise: cachedServerPromise };
  }
  if (options.coep) {
    iframeSettings.setQueryParam("coep", options.coep);
  }
  if (options.experimentalNode) {
    iframeSettings.setQueryParam("experimental_node", "1");
  }
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.setAttribute("allow", "cross-origin-isolated");
  const url = iframeSettings.url;
  iframe.src = url.toString();
  const { origin } = url;
  cachedBootOptions = __spreadValues({}, options);
  cachedServerPromise = new Promise((resolve) => {
    const onMessage = /* @__PURE__ */ __name((event) => {
      if (event.origin !== origin) {
        return;
      }
      const { data } = event;
      if (data.type === "init") {
        resolve(comlink_exports.wrap(event.ports[0]));
        return;
      }
      if (data.type === "warning") {
        console[data.level].call(console, data.message);
        return;
      }
    }, "onMessage");
    window.addEventListener("message", onMessage);
  });
  document.body.insertBefore(iframe, null);
  return { serverPromise: cachedServerPromise };
}
__name(serverFactory, "serverFactory");
function isStringArray(list) {
  return typeof list[0] === "string";
}
__name(isStringArray, "isStringArray");
function isTypedArrayCollection(list) {
  return list[0] instanceof Uint8Array;
}
__name(isTypedArrayCollection, "isTypedArrayCollection");
function streamWithPush() {
  let controller = null;
  const stream = new ReadableStream({
    start(controller_) {
      controller = controller_;
    }
  });
  const push = /* @__PURE__ */ __name((item) => {
    if (item != null) {
      controller?.enqueue(item);
    } else {
      controller?.close();
      controller = null;
    }
  }, "push");
  return { stream, push };
}
__name(streamWithPush, "streamWithPush");
function syncSubscription(listener) {
  let stopped = false;
  let unsubscribe = /* @__PURE__ */ __name(() => {
  }, "unsubscribe");
  const wrapped = /* @__PURE__ */ __name(((...args) => {
    if (stopped) {
      return;
    }
    listener(...args);
  }), "wrapped");
  return {
    subscribe(promise) {
      promise.then((unsubscribe_) => {
        unsubscribe = unsubscribe_;
        if (stopped) {
          unsubscribe();
        }
      });
      return () => {
        stopped = true;
        unsubscribe();
      };
    },
    listener: wrapped
  };
}
__name(syncSubscription, "syncSubscription");

// node_modules/@angular/cdk/fesm2022/passive-listeners.mjs
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: /* @__PURE__ */ __name(() => supportsPassiveEvents = true, "get")
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
__name(supportsPassiveEventListeners, "supportsPassiveEventListeners");
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
__name(normalizePassiveListenerOptions, "normalizePassiveListenerOptions");

// node_modules/@angular/cdk/fesm2022/focus-monitor.mjs
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = {
  passive: true,
  capture: true
};
var _InputModalityDetector = class _InputModalityDetector {
  _platform = inject(Platform);
  _listenerCleanups;
  /** Emits whenever an input modality is detected. */
  modalityDetected;
  /** Emits when the input modality changes. */
  modalityChanged;
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  /**
   * The most recently detected input modality event target. Is null if no input modality has been
   * detected or if the associated event target is null for some unknown reason.
   */
  _mostRecentTarget = null;
  /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
  _modality = new BehaviorSubject(null);
  /** Options for this InputModalityDetector. */
  _options;
  /**
   * The timestamp of the last touch input modality. Used to determine whether mousedown events
   * should be attributed to mouse or touch.
   */
  _lastTouchMs = 0;
  /**
   * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
   * bound.
   */
  _onKeydown = /* @__PURE__ */ __name((event) => {
    if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
      return;
    }
    this._modality.next("keyboard");
    this._mostRecentTarget = _getEventTarget(event);
  }, "_onKeydown");
  /**
   * Handles mousedown events. Must be an arrow function in order to preserve the context when it
   * gets bound.
   */
  _onMousedown = /* @__PURE__ */ __name((event) => {
    if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
      return;
    }
    this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
    this._mostRecentTarget = _getEventTarget(event);
  }, "_onMousedown");
  /**
   * Handles touchstart events. Must be an arrow function in order to preserve the context when it
   * gets bound.
   */
  _onTouchstart = /* @__PURE__ */ __name((event) => {
    if (isFakeTouchstartFromScreenReader(event)) {
      this._modality.next("keyboard");
      return;
    }
    this._lastTouchMs = Date.now();
    this._modality.next("touch");
    this._mostRecentTarget = _getEventTarget(event);
  }, "_onTouchstart");
  constructor() {
    const ngZone = inject(NgZone);
    const document2 = inject(DOCUMENT);
    const options = inject(INPUT_MODALITY_DETECTOR_OPTIONS, {
      optional: true
    });
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (this._platform.isBrowser) {
      const renderer = inject(RendererFactory2).createRenderer(null, null);
      this._listenerCleanups = ngZone.runOutsideAngular(() => {
        return [renderer.listen(document2, "keydown", this._onKeydown, modalityEventListenerOptions), renderer.listen(document2, "mousedown", this._onMousedown, modalityEventListenerOptions), renderer.listen(document2, "touchstart", this._onTouchstart, modalityEventListenerOptions)];
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
};
__name(_InputModalityDetector, "InputModalityDetector");
__publicField(_InputModalityDetector, "\u0275fac", /* @__PURE__ */ __name(function InputModalityDetector_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InputModalityDetector)();
}, "InputModalityDetector_Factory"));
__publicField(_InputModalityDetector, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InputModalityDetector,
  factory: _InputModalityDetector.\u0275fac,
  providedIn: "root"
}));
var InputModalityDetector = _InputModalityDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _FocusMonitor = class _FocusMonitor {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _inputModalityDetector = inject(InputModalityDetector);
  /** The focus origin that the next focus event is a result of. */
  _origin = null;
  /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
  _lastFocusOrigin;
  /** Whether the window has just been focused. */
  _windowFocused = false;
  /** The timeout id of the window focus timeout. */
  _windowFocusTimeoutId;
  /** The timeout id of the origin clearing timeout. */
  _originTimeoutId;
  /**
   * Whether the origin was determined via a touch interaction. Necessary as properly attributing
   * focus events to touch interactions requires special logic.
   */
  _originFromTouchInteraction = false;
  /** Map of elements being monitored to their info. */
  _elementInfo = /* @__PURE__ */ new Map();
  /** The number of elements currently being monitored. */
  _monitoredElementCount = 0;
  /**
   * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
   * as well as the number of monitored elements that they contain. We have to treat focus/blur
   * handlers differently from the rest of the events, because the browser won't emit events
   * to the document when focus moves inside of a shadow root.
   */
  _rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
  /**
   * The specified detection mode, used for attributing the origin of a focus
   * event.
   */
  _detectionMode;
  /**
   * Event listener for `focus` events on the window.
   * Needs to be an arrow function in order to preserve the context when it gets bound.
   */
  _windowFocusListener = /* @__PURE__ */ __name(() => {
    this._windowFocused = true;
    this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
  }, "_windowFocusListener");
  /** Used to reference correct document/window */
  _document = inject(DOCUMENT);
  /** Subject for stopping our InputModalityDetector subscription. */
  _stopInputModalityDetector = new Subject();
  constructor() {
    const options = inject(FOCUS_MONITOR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  /**
   * Event listener for `focus` and 'blur' events on the document.
   * Needs to be an arrow function in order to preserve the context when it gets bound.
   */
  _rootNodeFocusAndBlurListener = /* @__PURE__ */ __name((event) => {
    const target = _getEventTarget(event);
    for (let element = target; element; element = element.parentElement) {
      if (event.type === "focus") {
        this._onFocus(event, element);
      } else {
        this._onBlur(event, element);
      }
    }
  }, "_rootNodeFocusAndBlurListener");
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._document;
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._document.activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(
          modality,
          true
          /* isFromInteraction */
        );
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
};
__name(_FocusMonitor, "FocusMonitor");
__publicField(_FocusMonitor, "\u0275fac", /* @__PURE__ */ __name(function FocusMonitor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FocusMonitor)();
}, "FocusMonitor_Factory"));
__publicField(_FocusMonitor, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusMonitor,
  factory: _FocusMonitor.\u0275fac,
  providedIn: "root"
}));
var FocusMonitor = _FocusMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _CdkMonitorFocus = class _CdkMonitorFocus {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _monitorSubscription;
  _focusOrigin = null;
  cdkFocusChange = new EventEmitter();
  constructor() {
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
};
__name(_CdkMonitorFocus, "CdkMonitorFocus");
__publicField(_CdkMonitorFocus, "\u0275fac", /* @__PURE__ */ __name(function CdkMonitorFocus_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkMonitorFocus)();
}, "CdkMonitorFocus_Factory"));
__publicField(_CdkMonitorFocus, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  },
  exportAs: ["cdkMonitorFocus"]
}));
var CdkMonitorFocus = _CdkMonitorFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus"
    }]
  }], () => [], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();

// node_modules/@angular/cdk/fesm2022/private.mjs
var __VisuallyHiddenLoader = class __VisuallyHiddenLoader {
};
__name(__VisuallyHiddenLoader, "_VisuallyHiddenLoader");
__publicField(__VisuallyHiddenLoader, "\u0275fac", /* @__PURE__ */ __name(function _VisuallyHiddenLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __VisuallyHiddenLoader)();
}, "_VisuallyHiddenLoader_Factory"));
__publicField(__VisuallyHiddenLoader, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __VisuallyHiddenLoader,
  selectors: [["ng-component"]],
  exportAs: ["cdkVisuallyHidden"],
  decls: 0,
  vars: 0,
  template: /* @__PURE__ */ __name(function _VisuallyHiddenLoader_Template(rf, ctx) {
  }, "_VisuallyHiddenLoader_Template"),
  styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var _VisuallyHiddenLoader = __VisuallyHiddenLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_VisuallyHiddenLoader, [{
    type: Component,
    args: [{
      exportAs: "cdkVisuallyHidden",
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/breakpoints-observer.mjs
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var _MediaMatcher = class _MediaMatcher {
  _platform = inject(Platform);
  _nonce = inject(CSP_NONCE, {
    optional: true
  });
  /** The internal matchMedia method to return back a MediaQueryList like object. */
  _matchMedia;
  constructor() {
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window)
    ) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
};
__name(_MediaMatcher, "MediaMatcher");
__publicField(_MediaMatcher, "\u0275fac", /* @__PURE__ */ __name(function MediaMatcher_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MediaMatcher)();
}, "MediaMatcher_Factory"));
__publicField(_MediaMatcher, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MediaMatcher,
  factory: _MediaMatcher.\u0275fac,
  providedIn: "root"
}));
var MediaMatcher = _MediaMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
__name(createEmptyStyleRule, "createEmptyStyleRule");
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: /* @__PURE__ */ __name(() => {
    }, "addListener"),
    removeListener: /* @__PURE__ */ __name(() => {
    }, "removeListener")
  };
}
__name(noopMatchMedia, "noopMatchMedia");
var _BreakpointObserver = class _BreakpointObserver {
  _mediaMatcher = inject(MediaMatcher);
  _zone = inject(NgZone);
  /**  A map of all media queries currently being listened for. */
  _queries = /* @__PURE__ */ new Map();
  /** A subject for all other observables to takeUntil based on. */
  _destroySubject = new Subject();
  constructor() {
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query) => this._registerQuery(query).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new Observable((observer) => {
      const handler = /* @__PURE__ */ __name((e) => this._zone.run(() => observer.next(e)), "handler");
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query,
      matches
    })), takeUntil(this._destroySubject));
    const output2 = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output2);
    return output2;
  }
};
__name(_BreakpointObserver, "BreakpointObserver");
__publicField(_BreakpointObserver, "\u0275fac", /* @__PURE__ */ __name(function BreakpointObserver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreakpointObserver)();
}, "BreakpointObserver_Factory"));
__publicField(_BreakpointObserver, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _BreakpointObserver,
  factory: _BreakpointObserver.\u0275fac,
  providedIn: "root"
}));
var BreakpointObserver = _BreakpointObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}
__name(splitQueries, "splitQueries");

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
__name(shouldIgnoreRecord, "shouldIgnoreRecord");
var _MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
};
__name(_MutationObserverFactory, "MutationObserverFactory");
__publicField(_MutationObserverFactory, "\u0275fac", /* @__PURE__ */ __name(function MutationObserverFactory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MutationObserverFactory)();
}, "MutationObserverFactory_Factory"));
__publicField(_MutationObserverFactory, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MutationObserverFactory,
  factory: _MutationObserverFactory.\u0275fac,
  providedIn: "root"
}));
var MutationObserverFactory = _MutationObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ContentObserver = class _ContentObserver {
  _mutationObserverFactory = inject(MutationObserverFactory);
  /** Keeps track of the existing MutationObservers so they can be reused. */
  _observedElements = /* @__PURE__ */ new Map();
  _ngZone = inject(NgZone);
  constructor() {
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new Subject();
        const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
};
__name(_ContentObserver, "ContentObserver");
__publicField(_ContentObserver, "\u0275fac", /* @__PURE__ */ __name(function ContentObserver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContentObserver)();
}, "ContentObserver_Factory"));
__publicField(_ContentObserver, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ContentObserver,
  factory: _ContentObserver.\u0275fac,
  providedIn: "root"
}));
var ContentObserver = _ContentObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _CdkObserveContent = class _CdkObserveContent {
  _contentObserver = inject(ContentObserver);
  _elementRef = inject(ElementRef);
  /** Event emitted for each change in the element's content. */
  event = new EventEmitter();
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  _disabled = false;
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  _debounce;
  _currentSubscription = null;
  constructor() {
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
__name(_CdkObserveContent, "CdkObserveContent");
__publicField(_CdkObserveContent, "\u0275fac", /* @__PURE__ */ __name(function CdkObserveContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkObserveContent)();
}, "CdkObserveContent_Factory"));
__publicField(_CdkObserveContent, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"]
}));
var CdkObserveContent = _CdkObserveContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent"
    }]
  }], () => [], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var _ObserversModule = class _ObserversModule {
};
__name(_ObserversModule, "ObserversModule");
__publicField(_ObserversModule, "\u0275fac", /* @__PURE__ */ __name(function ObserversModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ObserversModule)();
}, "ObserversModule_Factory"));
__publicField(_ObserversModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ObserversModule,
  imports: [CdkObserveContent],
  exports: [CdkObserveContent]
}));
__publicField(_ObserversModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [MutationObserverFactory]
}));
var ObserversModule = _ObserversModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/a11y-module.mjs
var _InteractivityChecker = class _InteractivityChecker {
  _platform = inject(Platform);
  constructor() {
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
};
__name(_InteractivityChecker, "InteractivityChecker");
__publicField(_InteractivityChecker, "\u0275fac", /* @__PURE__ */ __name(function InteractivityChecker_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InteractivityChecker)();
}, "InteractivityChecker_Factory"));
__publicField(_InteractivityChecker, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InteractivityChecker,
  factory: _InteractivityChecker.\u0275fac,
  providedIn: "root"
}));
var InteractivityChecker = _InteractivityChecker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
__name(getFrameElement, "getFrameElement");
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
__name(hasGeometry, "hasGeometry");
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
__name(isNativeFormElement, "isNativeFormElement");
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
__name(isHiddenInput, "isHiddenInput");
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
__name(isAnchorWithHref, "isAnchorWithHref");
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
__name(isInputElement, "isInputElement");
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
__name(isAnchorElement, "isAnchorElement");
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
__name(hasValidTabIndex, "hasValidTabIndex");
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
__name(getTabIndexValue, "getTabIndexValue");
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
__name(isPotentiallyTabbableIOS, "isPotentiallyTabbableIOS");
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
__name(isPotentiallyFocusable, "isPotentiallyFocusable");
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
__name(getWindow, "getWindow");
var _FocusTrap = class _FocusTrap {
  _element;
  _checker;
  _ngZone;
  _document;
  _injector;
  _startAnchor;
  _endAnchor;
  _hasAttached = false;
  // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
  startAnchorListener = /* @__PURE__ */ __name(() => this.focusLastTabbableElement(), "startAnchorListener");
  endAnchorListener = /* @__PURE__ */ __name(() => this.focusFirstTabbableElement(), "endAnchorListener");
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  _enabled = true;
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (this._injector) {
      afterNextRender(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
};
__name(_FocusTrap, "FocusTrap");
var FocusTrap = _FocusTrap;
var _FocusTrapFactory = class _FocusTrapFactory {
  _checker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
};
__name(_FocusTrapFactory, "FocusTrapFactory");
__publicField(_FocusTrapFactory, "\u0275fac", /* @__PURE__ */ __name(function FocusTrapFactory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FocusTrapFactory)();
}, "FocusTrapFactory_Factory"));
__publicField(_FocusTrapFactory, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusTrapFactory,
  factory: _FocusTrapFactory.\u0275fac,
  providedIn: "root"
}));
var FocusTrapFactory = _FocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _CdkTrapFocus = class _CdkTrapFocus {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  /** Underlying FocusTrap instance. */
  focusTrap;
  /** Previously focused element to restore focus to upon destroy when using autoCapture. */
  _previouslyFocusedElement = null;
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  /**
   * Whether the directive should automatically move focus into the trapped region upon
   * initialization and return focus to the previous activeElement upon destruction.
   */
  autoCapture;
  constructor() {
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
};
__name(_CdkTrapFocus, "CdkTrapFocus");
__publicField(_CdkTrapFocus, "\u0275fac", /* @__PURE__ */ __name(function CdkTrapFocus_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTrapFocus)();
}, "CdkTrapFocus_Factory"));
__publicField(_CdkTrapFocus, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
    autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
  },
  exportAs: ["cdkTrapFocus"],
  features: [\u0275\u0275NgOnChangesFeature]
}));
var CdkTrapFocus = _CdkTrapFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus"
    }]
  }], () => [], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
__name(LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY");
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var _LiveAnnouncer = class _LiveAnnouncer {
  _ngZone = inject(NgZone);
  _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
    optional: true
  });
  _liveElement;
  _document = inject(DOCUMENT);
  _previousTimeout;
  _currentPromise;
  _currentResolve;
  constructor() {
    const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, {
      optional: true
    });
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
};
__name(_LiveAnnouncer, "LiveAnnouncer");
__publicField(_LiveAnnouncer, "\u0275fac", /* @__PURE__ */ __name(function LiveAnnouncer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LiveAnnouncer)();
}, "LiveAnnouncer_Factory"));
__publicField(_LiveAnnouncer, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _LiveAnnouncer,
  factory: _LiveAnnouncer.\u0275fac,
  providedIn: "root"
}));
var LiveAnnouncer = _LiveAnnouncer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _CdkAriaLive = class _CdkAriaLive {
  _elementRef = inject(ElementRef);
  _liveAnnouncer = inject(LiveAnnouncer);
  _contentObserver = inject(ContentObserver);
  _ngZone = inject(NgZone);
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  _politeness = "polite";
  /** Time in milliseconds after which to clear out the announcer element. */
  duration;
  _previousAnnouncedText;
  _subscription;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
};
__name(_CdkAriaLive, "CdkAriaLive");
__publicField(_CdkAriaLive, "\u0275fac", /* @__PURE__ */ __name(function CdkAriaLive_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkAriaLive)();
}, "CdkAriaLive_Factory"));
__publicField(_CdkAriaLive, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: [0, "cdkAriaLive", "politeness"],
    duration: [0, "cdkAriaLiveDuration", "duration"]
  },
  exportAs: ["cdkAriaLive"]
}));
var CdkAriaLive = _CdkAriaLive;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive"
    }]
  }], () => [], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var _HighContrastModeDetector = class _HighContrastModeDetector {
  _platform = inject(Platform);
  /**
   * Figuring out the high contrast mode and adding the body classes can cause
   * some expensive layouts. This flag is used to ensure that we only do it once.
   */
  _hasCheckedHighContrastMode;
  _document = inject(DOCUMENT);
  _breakpointSubscription;
  constructor() {
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      // Pre Windows 11 dark theme.
      case "rgb(0,0,0)":
      // Windows 11 dark themes.
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      // Pre Windows 11 light theme.
      case "rgb(255,255,255)":
      // Windows 11 light theme.
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
};
__name(_HighContrastModeDetector, "HighContrastModeDetector");
__publicField(_HighContrastModeDetector, "\u0275fac", /* @__PURE__ */ __name(function HighContrastModeDetector_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighContrastModeDetector)();
}, "HighContrastModeDetector_Factory"));
__publicField(_HighContrastModeDetector, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HighContrastModeDetector,
  factory: _HighContrastModeDetector.\u0275fac,
  providedIn: "root"
}));
var HighContrastModeDetector = _HighContrastModeDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _A11yModule = class _A11yModule {
  constructor() {
    inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
  }
};
__name(_A11yModule, "A11yModule");
__publicField(_A11yModule, "\u0275fac", /* @__PURE__ */ __name(function A11yModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _A11yModule)();
}, "A11yModule_Factory"));
__publicField(_A11yModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _A11yModule,
  imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
  exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
}));
__publicField(_A11yModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ObserversModule]
}));
var A11yModule = _A11yModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/typeahead.mjs
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
var _Typeahead = class _Typeahead {
  _letterKeyStream = new Subject();
  _items = [];
  _selectedItemIndex = -1;
  /** Buffer for the letters that the user has pressed */
  _pressedLetters = [];
  _skipPredicateFn;
  _selectedItem = new Subject();
  selectedItem = this._selectedItem;
  constructor(initialItems, config) {
    const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some((item) => typeof item.getLabel !== "function")) {
      throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Resets the currently stored sequence of typed letters. */
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
};
__name(_Typeahead, "Typeahead");
var Typeahead = _Typeahead;

// node_modules/@angular/cdk/fesm2022/list-key-manager.mjs
var _ListKeyManager = class _ListKeyManager {
  _items;
  _activeItemIndex = signal(-1, ...ngDevMode ? [{ debugName: "_activeItemIndex" }] : []);
  _activeItem = signal(null, ...ngDevMode ? [{ debugName: "_activeItem" }] : []);
  _wrap = false;
  _typeaheadSubscription = Subscription.EMPTY;
  _itemChangesSubscription;
  _vertical = true;
  _horizontal;
  _allowedModifierKeys = [];
  _homeAndEnd = false;
  _pageUpAndDown = { enabled: false, delta: 10 };
  _effectRef;
  _typeahead;
  /**
   * Predicate function that can be used to check whether an item should be skipped
   * by the key manager. By default, disabled items are skipped.
   */
  _skipPredicateFn = /* @__PURE__ */ __name((item) => item.disabled, "_skipPredicateFn");
  constructor(_items, injector) {
    this._items = _items;
    if (_items instanceof QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
    } else if (isSignal(_items)) {
      if (!injector && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw new Error("ListKeyManager constructed with a signal must receive an injector");
      }
      this._effectRef = effect(() => this._itemsChanged(_items()), ...ngDevMode ? [{ debugName: "_effectRef", injector }] : [{ injector }]);
    }
  }
  /**
   * Stream that emits any time the TAB key is pressed, so components can react
   * when focus is shifted off of the list.
   */
  tabOut = new Subject();
  /** Stream that emits whenever the active item of the list manager changes. */
  change = new Subject();
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const items2 = this._getItemsArray();
      if (items2.length > 0 && items2.some((item) => typeof item.getLabel !== "function")) {
        throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new Typeahead(items, {
      debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
      skipPredicate: /* @__PURE__ */ __name((item) => this._skipPredicateFn(item), "skipPredicate")
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
      this.setActiveItem(item);
    });
    return this;
  }
  /** Cancels the current typeahead sequence. */
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  /**
   * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
   * respectively when the Page-Up or Page-Down key is pressed.
   * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
   * @param delta Whether pressing the Home or End key activates the first/last item.
   */
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = { enabled, delta };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem();
    this.updateActiveItem(item);
    if (this._activeItem() !== previousActiveItem) {
      this.change.next(this._activeItemIndex());
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
    const isModifierAllowed = modifiers.every((modifier) => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case TAB:
        this.tabOut.next();
        return;
      case DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || hasModifierKey(event, "shiftKey")) {
          this._typeahead?.handleKey(event);
        }
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  get activeItemIndex() {
    return this._activeItemIndex();
  }
  /** The active item. */
  get activeItem() {
    return this._activeItem();
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  /** Sets the active item to the first enabled item in the list. */
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */
  setNextItemActive() {
    this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */
  setPreviousItemActive() {
    this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === "number" ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex.set(index);
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex() + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  /** Returns the items as an array. */
  _getItemsArray() {
    if (isSignal(this._items)) {
      return this._items();
    }
    return this._items instanceof QueryList ? this._items.toArray() : this._items;
  }
  /** Callback for when the items have changed. */
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    const activeItem = this._activeItem();
    if (activeItem) {
      const newIndex = newItems.indexOf(activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex()) {
        this._activeItemIndex.set(newIndex);
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
};
__name(_ListKeyManager, "ListKeyManager");
var ListKeyManager = _ListKeyManager;

// node_modules/@angular/cdk/fesm2022/activedescendant-key-manager.mjs
var _ActiveDescendantKeyManager = class _ActiveDescendantKeyManager extends ListKeyManager {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }
    super.setActiveItem(index);
    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }
};
__name(_ActiveDescendantKeyManager, "ActiveDescendantKeyManager");
var ActiveDescendantKeyManager = _ActiveDescendantKeyManager;

// node_modules/@angular/cdk/fesm2022/focus-key-manager.mjs
var _FocusKeyManager = class _FocusKeyManager extends ListKeyManager {
  _origin = "program";
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
};
__name(_FocusKeyManager, "FocusKeyManager");
var FocusKeyManager = _FocusKeyManager;

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
__name(addAriaReferencedId, "addAriaReferencedId");
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
__name(removeAriaReferencedId, "removeAriaReferencedId");
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
__name(getAriaReferenceIds, "getAriaReferenceIds");
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var _AriaDescriber = class _AriaDescriber {
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  /** Map of all registered message elements that have been placed into the document. */
  _messageRegistry = /* @__PURE__ */ new Map();
  /** Container for all registered messages. */
  _messagesContainer = null;
  /** Unique ID for the service. */
  _id = `${nextId++}`;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (!this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
};
__name(_AriaDescriber, "AriaDescriber");
__publicField(_AriaDescriber, "\u0275fac", /* @__PURE__ */ __name(function AriaDescriber_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AriaDescriber)();
}, "AriaDescriber_Factory"));
__publicField(_AriaDescriber, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AriaDescriber,
  factory: _AriaDescriber.\u0275fac,
  providedIn: "root"
}));
var AriaDescriber = _AriaDescriber;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
__name(getKey, "getKey");
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
__name(setMessageId, "setMessageId");
var _ConfigurableFocusTrap = class _ConfigurableFocusTrap extends FocusTrap {
  _focusTrapManager;
  _inertStrategy;
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
__name(_ConfigurableFocusTrap, "ConfigurableFocusTrap");
var ConfigurableFocusTrap = _ConfigurableFocusTrap;
var _EventListenerFocusTrapInertStrategy = class _EventListenerFocusTrapInertStrategy {
  /** Focus event handler. */
  _listener = null;
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
__name(_EventListenerFocusTrapInertStrategy, "EventListenerFocusTrapInertStrategy");
var EventListenerFocusTrapInertStrategy = _EventListenerFocusTrapInertStrategy;
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var _FocusTrapManager = class _FocusTrapManager {
  // A stack of the FocusTraps on the page. Only the FocusTrap at the
  // top of the stack is active.
  _focusTrapStack = [];
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
};
__name(_FocusTrapManager, "FocusTrapManager");
__publicField(_FocusTrapManager, "\u0275fac", /* @__PURE__ */ __name(function FocusTrapManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FocusTrapManager)();
}, "FocusTrapManager_Factory"));
__publicField(_FocusTrapManager, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusTrapManager,
  factory: _FocusTrapManager.\u0275fac,
  providedIn: "root"
}));
var FocusTrapManager = _FocusTrapManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  _checker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _focusTrapManager = inject(FocusTrapManager);
  _document = inject(DOCUMENT);
  _inertStrategy;
  _injector = inject(Injector);
  constructor() {
    const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, {
      optional: true
    });
    this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
  }
};
__name(_ConfigurableFocusTrapFactory, "ConfigurableFocusTrapFactory");
__publicField(_ConfigurableFocusTrapFactory, "\u0275fac", /* @__PURE__ */ __name(function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfigurableFocusTrapFactory)();
}, "ConfigurableFocusTrapFactory_Factory"));
__publicField(_ConfigurableFocusTrapFactory, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ConfigurableFocusTrapFactory,
  factory: _ConfigurableFocusTrapFactory.\u0275fac,
  providedIn: "root"
}));
var ConfigurableFocusTrapFactory = _ConfigurableFocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/observers/private.mjs
var loopLimitExceededErrorHandler = /* @__PURE__ */ __name((e) => {
  if (e instanceof ErrorEvent && e.message === "ResizeObserver loop limit exceeded") {
    console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
  }
}, "loopLimitExceededErrorHandler");
var _SingleBoxSharedResizeObserver = class _SingleBoxSharedResizeObserver {
  _box;
  /** Stream that emits when the shared observer is destroyed. */
  _destroyed = new Subject();
  /** Stream of all events from the ResizeObserver. */
  _resizeSubject = new Subject();
  /** ResizeObserver used to observe element resize events. */
  _resizeObserver;
  /** A map of elements to streams of their resize events. */
  _elementObservables = /* @__PURE__ */ new Map();
  constructor(_box) {
    this._box = _box;
    if (typeof ResizeObserver !== "undefined") {
      this._resizeObserver = new ResizeObserver((entries) => this._resizeSubject.next(entries));
    }
  }
  /**
   * Gets a stream of resize events for the given element.
   * @param target The element to observe.
   * @return The stream of resize events for the element.
   */
  observe(target) {
    if (!this._elementObservables.has(target)) {
      this._elementObservables.set(target, new Observable((observer) => {
        const subscription = this._resizeSubject.subscribe(observer);
        this._resizeObserver?.observe(target, {
          box: this._box
        });
        return () => {
          this._resizeObserver?.unobserve(target);
          subscription.unsubscribe();
          this._elementObservables.delete(target);
        };
      }).pipe(
        filter((entries) => entries.some((entry) => entry.target === target)),
        // Share a replay of the last event so that subsequent calls to observe the same element
        // receive initial sizing info like the first one. Also enable ref counting so the
        // element will be automatically unobserved when there are no more subscriptions.
        shareReplay({
          bufferSize: 1,
          refCount: true
        }),
        takeUntil(this._destroyed)
      ));
    }
    return this._elementObservables.get(target);
  }
  /** Destroys this instance. */
  destroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._resizeSubject.complete();
    this._elementObservables.clear();
  }
};
__name(_SingleBoxSharedResizeObserver, "SingleBoxSharedResizeObserver");
var SingleBoxSharedResizeObserver = _SingleBoxSharedResizeObserver;
var _SharedResizeObserver = class _SharedResizeObserver {
  _cleanupErrorListener;
  /** Map of box type to shared resize observer. */
  _observers = /* @__PURE__ */ new Map();
  /** The Angular zone. */
  _ngZone = inject(NgZone);
  constructor() {
    if (typeof ResizeObserver !== "undefined" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      this._ngZone.runOutsideAngular(() => {
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        this._cleanupErrorListener = renderer.listen("window", "error", loopLimitExceededErrorHandler);
      });
    }
  }
  ngOnDestroy() {
    for (const [, observer] of this._observers) {
      observer.destroy();
    }
    this._observers.clear();
    this._cleanupErrorListener?.();
  }
  /**
   * Gets a stream of resize events for the given target element and box type.
   * @param target The element to observe for resizes.
   * @param options Options to pass to the `ResizeObserver`
   * @return The stream of resize events for the element.
   */
  observe(target, options) {
    const box = options?.box || "content-box";
    if (!this._observers.has(box)) {
      this._observers.set(box, new SingleBoxSharedResizeObserver(box));
    }
    return this._observers.get(box).observe(target);
  }
};
__name(_SharedResizeObserver, "SharedResizeObserver");
__publicField(_SharedResizeObserver, "\u0275fac", /* @__PURE__ */ __name(function SharedResizeObserver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedResizeObserver)();
}, "SharedResizeObserver_Factory"));
__publicField(_SharedResizeObserver, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SharedResizeObserver,
  factory: _SharedResizeObserver.\u0275fac,
  providedIn: "root"
}));
var SharedResizeObserver = _SharedResizeObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedResizeObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/platform.mjs
var _PlatformModule = class _PlatformModule {
};
__name(_PlatformModule, "PlatformModule");
__publicField(_PlatformModule, "\u0275fac", /* @__PURE__ */ __name(function PlatformModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlatformModule)();
}, "PlatformModule_Factory"));
__publicField(_PlatformModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PlatformModule
}));
__publicField(_PlatformModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({}));
var PlatformModule = _PlatformModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var supportedInputTypes;
var candidateInputTypes = [
  // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
  // first changing it to something else:
  // The specified value "" does not conform to the required format.
  // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
  "color",
  "button",
  "checkbox",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week"
];
function getSupportedInputTypes() {
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  if (typeof document !== "object" || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  let featureTestInput = document.createElement("input");
  supportedInputTypes = new Set(candidateInputTypes.filter((value) => {
    featureTestInput.setAttribute("type", value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}
__name(getSupportedInputTypes, "getSupportedInputTypes");

// node_modules/@angular/cdk/fesm2022/layout.mjs
var _LayoutModule = class _LayoutModule {
};
__name(_LayoutModule, "LayoutModule");
__publicField(_LayoutModule, "\u0275fac", /* @__PURE__ */ __name(function LayoutModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LayoutModule)();
}, "LayoutModule_Factory"));
__publicField(_LayoutModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _LayoutModule
}));
__publicField(_LayoutModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({}));
var LayoutModule = _LayoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var Breakpoints = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset: "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape: "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
};

// node_modules/@angular/material/fesm2022/animation.mjs
var MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
var reducedMotion = null;
function _getAnimationsState() {
  if (inject(MATERIAL_ANIMATIONS, { optional: true })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, { optional: true }) === "NoopAnimations") {
    return "di-disabled";
  }
  reducedMotion ??= inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches;
  return reducedMotion ? "reduced-motion" : "enabled";
}
__name(_getAnimationsState, "_getAnimationsState");
function _animationsDisabled() {
  return _getAnimationsState() !== "enabled";
}
__name(_animationsDisabled, "_animationsDisabled");

// node_modules/@angular/material/fesm2022/structural-styles.mjs
var __StructuralStylesLoader = class __StructuralStylesLoader {
};
__name(__StructuralStylesLoader, "_StructuralStylesLoader");
__publicField(__StructuralStylesLoader, "\u0275fac", /* @__PURE__ */ __name(function _StructuralStylesLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __StructuralStylesLoader)();
}, "_StructuralStylesLoader_Factory"));
__publicField(__StructuralStylesLoader, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __StructuralStylesLoader,
  selectors: [["structural-styles"]],
  decls: 0,
  vars: 0,
  template: /* @__PURE__ */ __name(function _StructuralStylesLoader_Template(rf, ctx) {
  }, "_StructuralStylesLoader_Template"),
  styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var _StructuralStylesLoader = __StructuralStylesLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_StructuralStylesLoader, [{
    type: Component,
    args: [{
      selector: "structural-styles",
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n']
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
__name(coerceBooleanProperty, "coerceBooleanProperty");

// node_modules/@angular/material/fesm2022/ripple.mjs
var RippleState;
(function(RippleState2) {
  RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
  RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
  RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var _RippleRef = class _RippleRef {
  _renderer;
  element;
  config;
  _animationForciblyDisabledThroughCss;
  /** Current state of the ripple. */
  state = RippleState.HIDDEN;
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
__name(_RippleRef, "RippleRef");
var RippleRef = _RippleRef;
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _RippleEventManager = class _RippleEventManager {
  _events = /* @__PURE__ */ new Map();
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
      }
    } else {
      this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
  /** Event handler that is bound and which dispatches the events to the different targets. */
  _delegateEventHandler = /* @__PURE__ */ __name((event) => {
    const target = _getEventTarget(event);
    if (target) {
      this._events.get(event.type)?.forEach((handlers, element) => {
        if (element === target || element.contains(target)) {
          handlers.forEach((handler) => handler.handleEvent(event));
        }
      });
    }
  }, "_delegateEventHandler");
};
__name(_RippleEventManager, "RippleEventManager");
var RippleEventManager = _RippleEventManager;
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var __MatRippleStylesLoader = class __MatRippleStylesLoader {
};
__name(__MatRippleStylesLoader, "_MatRippleStylesLoader");
__publicField(__MatRippleStylesLoader, "\u0275fac", /* @__PURE__ */ __name(function _MatRippleStylesLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __MatRippleStylesLoader)();
}, "_MatRippleStylesLoader_Factory"));
__publicField(__MatRippleStylesLoader, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __MatRippleStylesLoader,
  selectors: [["ng-component"]],
  hostAttrs: ["mat-ripple-style-loader", ""],
  decls: 0,
  vars: 0,
  template: /* @__PURE__ */ __name(function _MatRippleStylesLoader_Template(rf, ctx) {
  }, "_MatRippleStylesLoader_Template"),
  styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var _MatRippleStylesLoader = __MatRippleStylesLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatRippleStylesLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "mat-ripple-style-loader": ""
      },
      styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"]
    }]
  }], null, null);
})();
var _RippleRenderer = class _RippleRenderer {
  _target;
  _ngZone;
  _platform;
  /** Element where the ripples are being added to. */
  _containerElement;
  /** Element which triggers the ripple elements on mouse events. */
  _triggerElement;
  /** Whether the pointer is currently down or not. */
  _isPointerDown = false;
  /**
   * Map of currently active ripple references.
   * The ripple reference is mapped to its element event listeners.
   * The reason why `| null` is used is that event listeners are added only
   * when the condition is truthy (see the `_startFadeOutTransition` method).
   */
  _activeRipples = /* @__PURE__ */ new Map();
  /** Latest non-persistent ripple that was triggered. */
  _mostRecentTransientRipple;
  /** Time in milliseconds when the last touchstart event happened. */
  _lastTouchStartEvent;
  /** Whether pointer-up event listeners have been registered. */
  _pointerUpEventsRegistered = false;
  /**
   * Cached dimensions of the ripple container. Set when the first
   * ripple is shown and cleared once no more ripples are visible.
   */
  _containerRect;
  constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    if (_platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
    if (injector) {
      injector.get(_CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = "scale3d(1, 1, 1)";
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = /* @__PURE__ */ __name(() => {
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        }, "onTransitionEnd");
        const onTransitionCancel = /* @__PURE__ */ __name(() => this._destroyRipple(rippleRef), "onTransitionCancel");
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener("transitionend", onTransitionEnd);
        ripple.addEventListener("transitioncancel", onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach((ripple) => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach((type) => {
      _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === "mousedown") {
      this._onMousedown(event);
    } else if (event.type === "touchstart") {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach((type) => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach((ripple) => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger = this._triggerElement;
    if (trigger) {
      pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach((type) => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
};
__name(_RippleRenderer, "RippleRenderer");
__publicField(_RippleRenderer, "_eventManager", new RippleEventManager());
var RippleRenderer = _RippleRenderer;
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
__name(distanceToFurthestCorner, "distanceToFurthestCorner");
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var _MatRipple = class _MatRipple {
  _elementRef = inject(ElementRef);
  _animationsDisabled = _animationsDisabled();
  /** Custom color for all ripples. */
  color;
  /** Whether the ripples should be visible outside the component's bounds. */
  unbounded;
  /**
   * Whether the ripple always originates from the center of the host element's bounds, rather
   * than originating from the location of the click event.
   */
  centered;
  /**
   * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
   * will be the distance from the center of the ripple to the furthest corner of the host element's
   * bounding rectangle.
   */
  radius = 0;
  /**
   * Configuration for the ripple animation. Allows modifying the enter and exit animation
   * duration of the ripples. The animation durations will be overwritten if the
   * `NoopAnimationsModule` is being used.
   */
  animation;
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  _disabled = false;
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger) {
    this._trigger = trigger;
    this._setupTriggerEventsIfEnabled();
  }
  _trigger;
  /** Renderer for the ripple DOM manipulations. */
  _rippleRenderer;
  /** Options that are set globally for all ripples. */
  _globalOptions;
  /** @docs-private Whether ripple directive is initialized and the input bindings are set. */
  _isInitialized = false;
  constructor() {
    const ngZone = inject(NgZone);
    const platform = inject(Platform);
    const globalOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    const injector = inject(Injector);
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationsDisabled ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX, y = 0, config) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
};
__name(_MatRipple, "MatRipple");
__publicField(_MatRipple, "\u0275fac", /* @__PURE__ */ __name(function MatRipple_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatRipple)();
}, "MatRipple_Factory"));
__publicField(_MatRipple, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatRipple,
  selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
  hostAttrs: [1, "mat-ripple"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function MatRipple_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-ripple-unbounded", ctx.unbounded);
    }
  }, "MatRipple_HostBindings"),
  inputs: {
    color: [0, "matRippleColor", "color"],
    unbounded: [0, "matRippleUnbounded", "unbounded"],
    centered: [0, "matRippleCentered", "centered"],
    radius: [0, "matRippleRadius", "radius"],
    animation: [0, "matRippleAnimation", "animation"],
    disabled: [0, "matRippleDisabled", "disabled"],
    trigger: [0, "matRippleTrigger", "trigger"]
  },
  exportAs: ["matRipple"]
}));
var MatRipple = _MatRipple;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRipple, [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      }
    }]
  }], () => [], {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/common-module.mjs
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
  providedIn: "root",
  factory: /* @__PURE__ */ __name(() => true, "factory")
});
var _MatCommonModule = class _MatCommonModule {
  constructor() {
    inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
  }
};
__name(_MatCommonModule, "MatCommonModule");
__publicField(_MatCommonModule, "\u0275fac", /* @__PURE__ */ __name(function MatCommonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCommonModule)();
}, "MatCommonModule_Factory"));
__publicField(_MatCommonModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatCommonModule,
  imports: [BidiModule],
  exports: [BidiModule]
}));
__publicField(_MatCommonModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [BidiModule, BidiModule]
}));
var MatCommonModule = _MatCommonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCommonModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule],
      exports: [BidiModule]
    }]
  }], () => [], null);
})();

// node_modules/@angular/material/fesm2022/tabs.mjs
var _c0 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
__name(MatTab_ng_template_0_Template, "MatTab_ng_template_0_Template");
var _c1 = ["tabListContainer"];
var _c2 = ["tabList"];
var _c3 = ["tabListInner"];
var _c4 = ["nextPaginator"];
var _c5 = ["previousPaginator"];
var _c6 = ["content"];
function MatTabBody_ng_template_2_Template(rf, ctx) {
}
__name(MatTabBody_ng_template_2_Template, "MatTabBody_ng_template_2_Template");
var _c7 = ["tabBodyWrapper"];
var _c8 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {
}
__name(MatTabGroup_For_3_Conditional_6_ng_template_0_Template, "MatTabGroup_For_3_Conditional_6_ng_template_0_Template");
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("cdkPortalOutlet", tab_r4.templateLabel);
  }
}
__name(MatTabGroup_For_3_Conditional_6_Template, "MatTabGroup_For_3_Conditional_6_Template");
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(tab_r4.textLabel);
  }
}
__name(MatTabGroup_For_3_Conditional_7_Template, "MatTabGroup_For_3_Conditional_7_Template");
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7, 2);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function MatTabGroup_For_3_Template_div_click_0_listener() {
      const ctx_r2 = \u0275\u0275restoreView(_r2);
      const tab_r4 = ctx_r2.$implicit;
      const $index_r5 = ctx_r2.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      const tabHeader_r7 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx_r5._handleClick(tab_r4, tabHeader_r7, $index_r5));
    }, "MatTabGroup_For_3_Template_div_click_0_listener"))("cdkFocusChange", /* @__PURE__ */ __name(function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const $index_r5 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._tabFocusChanged($event, $index_r5));
    }, "MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener"));
    \u0275\u0275element(2, "span", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "span", 10)(5, "span", 11);
    \u0275\u0275conditionalCreate(6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 12)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const tabNode_r8 = \u0275\u0275reference(1);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r4.labelClass);
    \u0275\u0275classProp("mdc-tab--active", ctx_r5.selectedIndex === $index_r5);
    \u0275\u0275property("id", ctx_r5._getTabLabelId(tab_r4, $index_r5))("disabled", tab_r4.disabled)("fitInkBarToContent", ctx_r5.fitInkBarToContent);
    \u0275\u0275attribute("tabIndex", ctx_r5._getTabIndex($index_r5))("aria-posinset", $index_r5 + 1)("aria-setsize", ctx_r5._tabs.length)("aria-controls", ctx_r5._getTabContentId($index_r5))("aria-selected", ctx_r5.selectedIndex === $index_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("matRippleTrigger", tabNode_r8)("matRippleDisabled", tab_r4.disabled || ctx_r5.disableRipple);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(tab_r4.templateLabel ? 6 : 7);
  }
}
__name(MatTabGroup_For_3_Template, "MatTabGroup_For_3_Template");
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
__name(MatTabGroup_Conditional_4_Template, "MatTabGroup_Conditional_4_Template");
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-body", 13);
    \u0275\u0275listener("_onCentered", /* @__PURE__ */ __name(function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._removeTabBodyWrapperHeight());
    }, "MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener"))("_onCentering", /* @__PURE__ */ __name(function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._setTabBodyWrapperHeight($event));
    }, "MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener"))("_beforeCentering", /* @__PURE__ */ __name(function MatTabGroup_For_8_Template_mat_tab_body__beforeCentering_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5._bodyCentered($event));
    }, "MatTabGroup_For_8_Template_mat_tab_body__beforeCentering_0_listener"));
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const $index_r11 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r10.bodyClass);
    \u0275\u0275property("id", ctx_r5._getTabContentId($index_r11))("content", tab_r10.content)("position", tab_r10.position)("animationDuration", ctx_r5.animationDuration)("preserveContent", ctx_r5.preserveContent);
    \u0275\u0275attribute("tabindex", ctx_r5.contentTabIndex != null && ctx_r5.selectedIndex === $index_r11 ? ctx_r5.contentTabIndex : null)("aria-labelledby", ctx_r5._getTabLabelId(tab_r10, $index_r11))("aria-hidden", ctx_r5.selectedIndex !== $index_r11);
  }
}
__name(MatTabGroup_For_8_Template, "MatTabGroup_For_8_Template");
var _c9 = ["mat-tab-nav-bar", ""];
var _c10 = ["mat-tab-link", ""];
var MAT_TAB_CONTENT = new InjectionToken("MatTabContent");
var _MatTabContent = class _MatTabContent {
  template = inject(TemplateRef);
  constructor() {
  }
};
__name(_MatTabContent, "MatTabContent");
__publicField(_MatTabContent, "\u0275fac", /* @__PURE__ */ __name(function MatTabContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabContent)();
}, "MatTabContent_Factory"));
__publicField(_MatTabContent, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatTabContent,
  selectors: [["", "matTabContent", ""]],
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_TAB_CONTENT,
    useExisting: _MatTabContent
  }])]
}));
var MatTabContent = _MatTabContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabContent, [{
    type: Directive,
    args: [{
      selector: "[matTabContent]",
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }]
    }]
  }], () => [], null);
})();
var MAT_TAB_LABEL = new InjectionToken("MatTabLabel");
var MAT_TAB = new InjectionToken("MAT_TAB");
var _MatTabLabel = class _MatTabLabel extends CdkPortal {
  _closestTab = inject(MAT_TAB, {
    optional: true
  });
};
__name(_MatTabLabel, "MatTabLabel");
__publicField(_MatTabLabel, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275MatTabLabel_BaseFactory;
  return /* @__PURE__ */ __name(function MatTabLabel_Factory(__ngFactoryType__) {
    return (\u0275MatTabLabel_BaseFactory || (\u0275MatTabLabel_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabLabel)))(__ngFactoryType__ || _MatTabLabel);
  }, "MatTabLabel_Factory");
})());
__publicField(_MatTabLabel, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatTabLabel,
  selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_TAB_LABEL,
    useExisting: _MatTabLabel
  }]), \u0275\u0275InheritDefinitionFeature]
}));
var MatTabLabel = _MatTabLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabel, [{
    type: Directive,
    args: [{
      selector: "[mat-tab-label], [matTabLabel]",
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }]
    }]
  }], null, null);
})();
var MAT_TAB_GROUP = new InjectionToken("MAT_TAB_GROUP");
var _MatTab = class _MatTab {
  _viewContainerRef = inject(ViewContainerRef);
  _closestTabGroup = inject(MAT_TAB_GROUP, {
    optional: true
  });
  /** whether the tab is disabled. */
  disabled = false;
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  _templateLabel;
  /**
   * Template provided in the tab content that will be used if present, used to enable lazy-loading
   */
  _explicitContent = void 0;
  /** Template inside the MatTab view that contains an `<ng-content>`. */
  _implicitContent;
  /** Plain text label for the tab, used when there is no template label. */
  textLabel = "";
  /** Aria label for the tab. */
  ariaLabel;
  /**
   * Reference to the element that the tab is labelled by.
   * Will be cleared if `aria-label` is set at the same time.
   */
  ariaLabelledby;
  /** Classes to be passed to the tab label inside the mat-tab-header container. */
  labelClass;
  /** Classes to be passed to the tab mat-tab-body container. */
  bodyClass;
  /**
   * Custom ID for the tab, overriding the auto-generated one by Material.
   * Note that when using this input, it's your responsibility to ensure that the ID is unique.
   */
  id = null;
  /** Portal that will be the hosted content of the tab */
  _contentPortal = null;
  /** @docs-private */
  get content() {
    return this._contentPortal;
  }
  /** Emits whenever the internal state of the tab changes. */
  _stateChanges = new Subject();
  /**
   * The relatively indexed position where 0 represents the center, negative is left, and positive
   * represents the right.
   */
  position = null;
  // TODO(crisbeto): we no longer use this, but some internal apps appear to rely on it.
  /**
   * The initial relatively index origin of the tab if it was created and selected after there
   * was already a selected tab. Provides context of what position the tab should originate from.
   */
  origin = null;
  /**
   * Whether the tab is currently active.
   */
  isActive = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setTemplateLabelInput(value) {
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
};
__name(_MatTab, "MatTab");
__publicField(_MatTab, "\u0275fac", /* @__PURE__ */ __name(function MatTab_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTab)();
}, "MatTab_Factory"));
__publicField(_MatTab, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTab,
  selectors: [["mat-tab"]],
  contentQueries: /* @__PURE__ */ __name(function MatTab_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatTabLabel, 5);
      \u0275\u0275contentQuery(dirIndex, MatTabContent, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateLabel = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._explicitContent = _t.first);
    }
  }, "MatTab_ContentQueries"),
  viewQuery: /* @__PURE__ */ __name(function MatTab_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._implicitContent = _t.first);
    }
  }, "MatTab_Query"),
  hostAttrs: ["hidden", ""],
  hostVars: 1,
  hostBindings: /* @__PURE__ */ __name(function MatTab_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("id", null);
    }
  }, "MatTab_HostBindings"),
  inputs: {
    disabled: [2, "disabled", "disabled", booleanAttribute],
    textLabel: [0, "label", "textLabel"],
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    labelClass: "labelClass",
    bodyClass: "bodyClass",
    id: "id"
  },
  exportAs: ["matTab"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_TAB,
    useExisting: _MatTab
  }]), \u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatTab_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domTemplate(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    }
  }, "MatTab_Template"),
  encapsulation: 2
}));
var MatTab = _MatTab;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTab, [{
    type: Component,
    args: [{
      selector: "mat-tab",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matTab",
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      host: {
        // This element will be rendered on the server in order to support hydration.
        // Hide it so it doesn't cause a layout shift when it's removed on the client.
        "hidden": "",
        // Clear any custom IDs from the tab since they'll be forwarded to the actual tab.
        "[attr.id]": "null"
      },
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templateLabel: [{
      type: ContentChild,
      args: [MatTabLabel]
    }],
    _explicitContent: [{
      type: ContentChild,
      args: [MatTabContent, {
        read: TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: Input,
      args: ["label"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    labelClass: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  });
})();
var ACTIVE_CLASS = "mdc-tab-indicator--active";
var NO_TRANSITION_CLASS = "mdc-tab-indicator--no-transition";
var _MatInkBar = class _MatInkBar {
  _items;
  /** Item to which the ink bar is aligned currently. */
  _currentItem;
  constructor(_items) {
    this._items = _items;
  }
  /** Hides the ink bar. */
  hide() {
    this._items.forEach((item) => item.deactivateInkBar());
    this._currentItem = void 0;
  }
  /** Aligns the ink bar to a DOM node. */
  alignToElement(element) {
    const correspondingItem = this._items.find((item) => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
};
__name(_MatInkBar, "MatInkBar");
var MatInkBar = _MatInkBar;
var _InkBarItem = class _InkBarItem {
  _elementRef = inject(ElementRef);
  _inkBarElement;
  _inkBarContentElement;
  _fitToContent = false;
  /** Whether the ink bar should fit to the entire tab or just its content. */
  get fitInkBarToContent() {
    return this._fitToContent;
  }
  set fitInkBarToContent(newValue) {
    if (this._fitToContent !== newValue) {
      this._fitToContent = newValue;
      if (this._inkBarElement) {
        this._appendInkBarElement();
      }
    }
  }
  /** Aligns the ink bar to the current item. */
  activateInkBar(previousIndicatorClientRect) {
    const element = this._elementRef.nativeElement;
    if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
      element.classList.add(ACTIVE_CLASS);
      return;
    }
    const currentClientRect = element.getBoundingClientRect();
    const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    element.classList.add(NO_TRANSITION_CLASS);
    this._inkBarContentElement.style.setProperty("transform", `translateX(${xPosition}px) scaleX(${widthDelta})`);
    element.getBoundingClientRect();
    element.classList.remove(NO_TRANSITION_CLASS);
    element.classList.add(ACTIVE_CLASS);
    this._inkBarContentElement.style.setProperty("transform", "");
  }
  /** Removes the ink bar from the current item. */
  deactivateInkBar() {
    this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
  }
  /** Initializes the foundation. */
  ngOnInit() {
    this._createInkBarElement();
  }
  /** Destroys the foundation. */
  ngOnDestroy() {
    this._inkBarElement?.remove();
    this._inkBarElement = this._inkBarContentElement = null;
  }
  /** Creates and appends the ink bar element. */
  _createInkBarElement() {
    const documentNode = this._elementRef.nativeElement.ownerDocument || document;
    const inkBarElement = this._inkBarElement = documentNode.createElement("span");
    const inkBarContentElement = this._inkBarContentElement = documentNode.createElement("span");
    inkBarElement.className = "mdc-tab-indicator";
    inkBarContentElement.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline";
    inkBarElement.appendChild(this._inkBarContentElement);
    this._appendInkBarElement();
  }
  /**
   * Appends the ink bar to the tab host element or content, depending on whether
   * the ink bar should fit to content.
   */
  _appendInkBarElement() {
    if (!this._inkBarElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Ink bar element has not been created and cannot be appended");
    }
    const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector(".mdc-tab__content") : this._elementRef.nativeElement;
    if (!parentElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Missing element to host the ink bar");
    }
    parentElement.appendChild(this._inkBarElement);
  }
};
__name(_InkBarItem, "InkBarItem");
__publicField(_InkBarItem, "\u0275fac", /* @__PURE__ */ __name(function InkBarItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InkBarItem)();
}, "InkBarItem_Factory"));
__publicField(_InkBarItem, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _InkBarItem,
  inputs: {
    fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute]
  }
}));
var InkBarItem = _InkBarItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InkBarItem, [{
    type: Directive
  }], null, {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = /* @__PURE__ */ __name((element) => ({
    left: element ? (element.offsetLeft || 0) + "px" : "0",
    width: element ? (element.offsetWidth || 0) + "px" : "0"
  }), "method");
  return method;
}
__name(_MAT_INK_BAR_POSITIONER_FACTORY, "_MAT_INK_BAR_POSITIONER_FACTORY");
var _MAT_INK_BAR_POSITIONER = new InjectionToken("MatInkBarPositioner", {
  providedIn: "root",
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
var _MatTabLabelWrapper = class _MatTabLabelWrapper extends InkBarItem {
  elementRef = inject(ElementRef);
  /** Whether the tab is disabled. */
  disabled = false;
  /** Sets focus on the wrapper element */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
};
__name(_MatTabLabelWrapper, "MatTabLabelWrapper");
__publicField(_MatTabLabelWrapper, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275MatTabLabelWrapper_BaseFactory;
  return /* @__PURE__ */ __name(function MatTabLabelWrapper_Factory(__ngFactoryType__) {
    return (\u0275MatTabLabelWrapper_BaseFactory || (\u0275MatTabLabelWrapper_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabLabelWrapper)))(__ngFactoryType__ || _MatTabLabelWrapper);
  }, "MatTabLabelWrapper_Factory");
})());
__publicField(_MatTabLabelWrapper, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatTabLabelWrapper,
  selectors: [["", "matTabLabelWrapper", ""]],
  hostVars: 3,
  hostBindings: /* @__PURE__ */ __name(function MatTabLabelWrapper_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-disabled", !!ctx.disabled);
      \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled);
    }
  }, "MatTabLabelWrapper_HostBindings"),
  inputs: {
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  features: [\u0275\u0275InheritDefinitionFeature]
}));
var MatTabLabelWrapper = _MatTabLabelWrapper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabelWrapper, [{
    type: Directive,
    args: [{
      selector: "[matTabLabelWrapper]",
      host: {
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[attr.aria-disabled]": "!!disabled"
      }
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var passiveEventListenerOptions = {
  passive: true
};
var HEADER_SCROLL_DELAY = 650;
var HEADER_SCROLL_INTERVAL = 100;
var _MatPaginatedTabHeader = class _MatPaginatedTabHeader {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _viewportRuler = inject(ViewportRuler);
  _dir = inject(Directionality, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _sharedResizeObserver = inject(SharedResizeObserver);
  _injector = inject(Injector);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _eventCleanups;
  /** The distance in pixels that the tab labels should be translated to the left. */
  _scrollDistance = 0;
  /** Whether the header should scroll to the selected index after the view has been checked. */
  _selectedIndexChanged = false;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Whether the controls for pagination should be displayed */
  _showPaginationControls = false;
  /** Whether the tab list can be scrolled more towards the end of the tab label list. */
  _disableScrollAfter = true;
  /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
  _disableScrollBefore = true;
  /**
   * The number of tab labels that are displayed on the header. When this changes, the header
   * should re-evaluate the scroll position.
   */
  _tabLabelCount;
  /** Whether the scroll distance has changed and should be applied after the view is checked. */
  _scrollDistanceChanged;
  /** Used to manage focus between the tabs. */
  _keyManager;
  /** Cached text content of the header. */
  _currentTextContent;
  /** Stream that will stop the automated scrolling. */
  _stopScrolling = new Subject();
  /**
   * Whether pagination should be disabled. This can be used to avoid unnecessary
   * layout recalculations if it's known that pagination won't be required.
   */
  disablePagination = false;
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(v) {
    const value = isNaN(v) ? 0 : v;
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  _selectedIndex = 0;
  /** Event emitted when the option is selected. */
  selectFocusedIndex = new EventEmitter();
  /** Event emitted when a label is focused. */
  indexFocused = new EventEmitter();
  constructor() {
    this._eventCleanups = this._ngZone.runOutsideAngular(() => [this._renderer.listen(this._elementRef.nativeElement, "mouseleave", () => this._stopInterval())]);
  }
  ngAfterViewInit() {
    this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("before"), passiveEventListenerOptions), this._renderer.listen(this._nextPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("after"), passiveEventListenerOptions));
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : of("ltr");
    const resize = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(debounceTime(32), takeUntil(this._destroyed));
    const viewportResize = this._viewportRuler.change(150).pipe(takeUntil(this._destroyed));
    const realign = /* @__PURE__ */ __name(() => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    }, "realign");
    this._keyManager = new FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => false);
    this._keyManager.updateActiveItem(Math.max(this._selectedIndex, 0));
    afterNextRender(realign, {
      injector: this._injector
    });
    merge(dirChange, viewportResize, resize, this._items.changes, this._itemsResized()).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());
    });
    this._keyManager.change.subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  /** Sends any changes that could affect the layout of the items. */
  _itemsResized() {
    if (typeof ResizeObserver !== "function") {
      return EMPTY;
    }
    return this._items.changes.pipe(
      startWith(this._items),
      switchMap((tabItems) => new Observable((observer) => this._ngZone.runOutsideAngular(() => {
        const resizeObserver = new ResizeObserver((entries) => observer.next(entries));
        tabItems.forEach((item) => resizeObserver.observe(item.elementRef.nativeElement));
        return () => {
          resizeObserver.disconnect();
        };
      }))),
      // Skip the first emit since the resize observer emits when an item
      // is observed for new items when the tab is already inserted
      skip(1),
      // Skip emissions where all the elements are invisible since we don't want
      // the header to try and re-render with invalid measurements. See #25574.
      filter((entries) => entries.some((e) => e.contentRect.width > 0 && e.contentRect.height > 0))
    );
  }
  ngAfterContentChecked() {
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  /** Handles keyboard events on the header. */
  _handleKeydown(event) {
    if (hasModifierKey(event)) {
      return;
    }
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
        }
        break;
      default:
        this._keyManager?.onKeydown(event);
    }
  }
  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || "";
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  _isValidIndex(index) {
    return this._items ? !!this._items.toArray()[index] : true;
  }
  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == "ltr") {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  /** The layout direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === "ltr" ? -scrollDistance : scrollDistance;
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const scrollAmount = (direction == "before" ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  /** Handles click events on the pagination arrows. */
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == "ltr") {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
    }
  }
  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const scrollWidth = this._tabListInner.nativeElement.scrollWidth;
      const containerWidth = this._elementRef.nativeElement.offsetWidth;
      const isEnabled = scrollWidth - containerWidth >= 5;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._showPaginationControls = isEnabled;
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Tells the ink-bar to align itself to the current label wrapper */
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  /** Stops the currently-running paginator interval.  */
  _stopInterval() {
    this._stopScrolling.next();
  }
  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */
  _handlePaginatorPress(direction, mouseEvent) {
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    this._stopInterval();
    timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(takeUntil(merge(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
};
__name(_MatPaginatedTabHeader, "MatPaginatedTabHeader");
__publicField(_MatPaginatedTabHeader, "\u0275fac", /* @__PURE__ */ __name(function MatPaginatedTabHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatPaginatedTabHeader)();
}, "MatPaginatedTabHeader_Factory"));
__publicField(_MatPaginatedTabHeader, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatPaginatedTabHeader,
  inputs: {
    disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
    selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute]
  },
  outputs: {
    selectFocusedIndex: "selectFocusedIndex",
    indexFocused: "indexFocused"
  }
}));
var MatPaginatedTabHeader = _MatPaginatedTabHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatedTabHeader, [{
    type: Directive
  }], () => [], {
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectFocusedIndex: [{
      type: Output
    }],
    indexFocused: [{
      type: Output
    }]
  });
})();
var _MatTabHeader = class _MatTabHeader extends MatPaginatedTabHeader {
  _items;
  _tabListContainer;
  _tabList;
  _tabListInner;
  _nextPaginator;
  _previousPaginator;
  _inkBar;
  /** Aria label of the header. */
  ariaLabel;
  /** Sets the `aria-labelledby` of the header. */
  ariaLabelledby;
  /** Whether the ripple effect is disabled or not. */
  disableRipple = false;
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  _itemSelected(event) {
    event.preventDefault();
  }
};
__name(_MatTabHeader, "MatTabHeader");
__publicField(_MatTabHeader, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275MatTabHeader_BaseFactory;
  return /* @__PURE__ */ __name(function MatTabHeader_Factory(__ngFactoryType__) {
    return (\u0275MatTabHeader_BaseFactory || (\u0275MatTabHeader_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabHeader)))(__ngFactoryType__ || _MatTabHeader);
  }, "MatTabHeader_Factory");
})());
__publicField(_MatTabHeader, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabHeader,
  selectors: [["mat-tab-header"]],
  contentQueries: /* @__PURE__ */ __name(function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatTabLabelWrapper, 4);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
    }
  }, "MatTabHeader_ContentQueries"),
  viewQuery: /* @__PURE__ */ __name(function MatTabHeader_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c1, 7);
      \u0275\u0275viewQuery(_c2, 7);
      \u0275\u0275viewQuery(_c3, 7);
      \u0275\u0275viewQuery(_c4, 5);
      \u0275\u0275viewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
    }
  }, "MatTabHeader_Query"),
  hostAttrs: [1, "mat-mdc-tab-header"],
  hostVars: 4,
  hostBindings: /* @__PURE__ */ __name(function MatTabHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    }
  }, "MatTabHeader_HostBindings"),
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 13,
  vars: 10,
  consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
  template: /* @__PURE__ */ __name(function MatTabHeader_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 5, 0);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function MatTabHeader_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorClick("before"));
      }, "MatTabHeader_Template_div_click_0_listener"))("mousedown", /* @__PURE__ */ __name(function MatTabHeader_Template_div_mousedown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorPress("before", $event));
      }, "MatTabHeader_Template_div_mousedown_0_listener"))("touchend", /* @__PURE__ */ __name(function MatTabHeader_Template_div_touchend_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._stopInterval());
      }, "MatTabHeader_Template_div_touchend_0_listener"));
      \u0275\u0275element(2, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 7, 1);
      \u0275\u0275listener("keydown", /* @__PURE__ */ __name(function MatTabHeader_Template_div_keydown_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handleKeydown($event));
      }, "MatTabHeader_Template_div_keydown_3_listener"));
      \u0275\u0275elementStart(5, "div", 8, 2);
      \u0275\u0275listener("cdkObserveContent", /* @__PURE__ */ __name(function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onContentChanges());
      }, "MatTabHeader_Template_div_cdkObserveContent_5_listener"));
      \u0275\u0275elementStart(7, "div", 9, 3);
      \u0275\u0275projection(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 10, 4);
      \u0275\u0275listener("mousedown", /* @__PURE__ */ __name(function MatTabHeader_Template_div_mousedown_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorPress("after", $event));
      }, "MatTabHeader_Template_div_mousedown_10_listener"))("click", /* @__PURE__ */ __name(function MatTabHeader_Template_div_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorClick("after"));
      }, "MatTabHeader_Template_div_click_10_listener"))("touchend", /* @__PURE__ */ __name(function MatTabHeader_Template_div_touchend_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._stopInterval());
      }, "MatTabHeader_Template_div_touchend_10_listener"));
      \u0275\u0275element(12, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
      \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby || null);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
      \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    }
  }, "MatTabHeader_Template"),
  dependencies: [MatRipple, CdkObserveContent],
  styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-divider-height, 1px);border-top-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}\n"],
  encapsulation: 2
}));
var MatTabHeader = _MatTabHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabHeader, [{
    type: Component,
    args: [{
      selector: "mat-tab-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'"
      },
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div
  class="mat-mdc-tab-label-container"
  #tabListContainer
  (keydown)="_handleKeydown($event)"
  [class._mat-animation-noopable]="_animationsDisabled">
  <div
    #tabList
    class="mat-mdc-tab-list"
    role="tablist"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-divider-height, 1px);border-top-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}\n"]
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_TABS_CONFIG = new InjectionToken("MAT_TABS_CONFIG");
var _MatTabBodyPortal = class _MatTabBodyPortal extends CdkPortalOutlet {
  _host = inject(MatTabBody);
  /** Subscription to events for when the tab body begins centering. */
  _centeringSub = Subscription.EMPTY;
  /** Subscription to events for when the tab body finishes leaving from center position. */
  _leavingSub = Subscription.EMPTY;
  constructor() {
    super();
  }
  /** Set initial visibility or set up subscription for changing visibility. */
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe(startWith(this._host._isCenterPosition())).subscribe((isCentering) => {
      if (this._host._content && isCentering && !this.hasAttached()) {
        this.attach(this._host._content);
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this.detach();
      }
    });
  }
  /** Clean up centering subscription. */
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
};
__name(_MatTabBodyPortal, "MatTabBodyPortal");
__publicField(_MatTabBodyPortal, "\u0275fac", /* @__PURE__ */ __name(function MatTabBodyPortal_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabBodyPortal)();
}, "MatTabBodyPortal_Factory"));
__publicField(_MatTabBodyPortal, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatTabBodyPortal,
  selectors: [["", "matTabBodyHost", ""]],
  features: [\u0275\u0275InheritDefinitionFeature]
}));
var MatTabBodyPortal = _MatTabBodyPortal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBodyPortal, [{
    type: Directive,
    args: [{
      selector: "[matTabBodyHost]"
    }]
  }], () => [], null);
})();
var _MatTabBody = class _MatTabBody {
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _renderer = inject(Renderer2);
  _diAnimationsDisabled = _animationsDisabled();
  _eventCleanups;
  _initialized;
  _fallbackTimer;
  /** Current position of the tab-body in the tab-group. Zero means that the tab is visible. */
  _positionIndex;
  /** Subscription to the directionality change observable. */
  _dirChangeSubscription = Subscription.EMPTY;
  /** Current position of the body within the tab group. */
  _position;
  /** Previous position of the body. */
  _previousPosition;
  /** Event emitted when the tab begins to animate towards the center as the active tab. */
  _onCentering = new EventEmitter();
  /** Event emitted before the centering of the tab begins. */
  _beforeCentering = new EventEmitter();
  /** Event emitted before the centering of the tab begins. */
  _afterLeavingCenter = new EventEmitter();
  /** Event emitted when the tab completes its animation towards the center. */
  _onCentered = new EventEmitter(true);
  /** The portal host inside of this container into which the tab body content will be loaded. */
  _portalHost;
  /** Element in which the content is rendered. */
  _contentElement;
  /** The tab body content to display. */
  _content;
  // Note that the default value will always be overwritten by `MatTabBody`, but we need one
  // anyway to prevent the animations module from throwing an error if the body is used on its own.
  /** Duration for the tab's animation. */
  animationDuration = "500ms";
  /** Whether the tab's content should be kept in the DOM while it's off-screen. */
  preserveContent = false;
  /** The shifted index position of the tab body, where zero represents the active center tab. */
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor() {
    if (this._dir) {
      const changeDetectorRef = inject(ChangeDetectorRef);
      this._dirChangeSubscription = this._dir.change.subscribe((dir) => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
  }
  ngOnInit() {
    this._bindTransitionEvents();
    if (this._position === "center") {
      this._setActiveClass(true);
      afterNextRender(() => this._onCentering.emit(this._elementRef.nativeElement.clientHeight), {
        injector: this._injector
      });
    }
    this._initialized = true;
  }
  ngOnDestroy() {
    clearTimeout(this._fallbackTimer);
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._dirChangeSubscription.unsubscribe();
  }
  /** Sets up the transition events. */
  _bindTransitionEvents() {
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      const transitionDone = /* @__PURE__ */ __name((event) => {
        if (event.target === this._contentElement?.nativeElement) {
          this._elementRef.nativeElement.classList.remove("mat-tab-body-animating");
          if (event.type === "transitionend") {
            this._transitionDone();
          }
        }
      }, "transitionDone");
      this._eventCleanups = [this._renderer.listen(element, "transitionstart", (event) => {
        if (event.target === this._contentElement?.nativeElement) {
          this._elementRef.nativeElement.classList.add("mat-tab-body-animating");
          this._transitionStarted();
        }
      }), this._renderer.listen(element, "transitionend", transitionDone), this._renderer.listen(element, "transitioncancel", transitionDone)];
    });
  }
  /** Called when a transition has started. */
  _transitionStarted() {
    clearTimeout(this._fallbackTimer);
    const isCentering = this._position === "center";
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  /** Called when a transition is done. */
  _transitionDone() {
    if (this._position === "center") {
      this._onCentered.emit();
    } else if (this._previousPosition === "center") {
      this._afterLeavingCenter.emit();
    }
  }
  /** Sets the active styling on the tab body based on its current position. */
  _setActiveClass(isActive) {
    this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active", isActive);
  }
  /** The text direction of the containing app. */
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the provided position state is considered center, regardless of origin. */
  _isCenterPosition() {
    return this._positionIndex === 0;
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    this._previousPosition = this._position;
    if (this._positionIndex < 0) {
      this._position = dir == "ltr" ? "left" : "right";
    } else if (this._positionIndex > 0) {
      this._position = dir == "ltr" ? "right" : "left";
    } else {
      this._position = "center";
    }
    if (this._animationsDisabled()) {
      this._simulateTransitionEvents();
    } else if (this._initialized && (this._position === "center" || this._previousPosition === "center")) {
      clearTimeout(this._fallbackTimer);
      this._fallbackTimer = this._ngZone.runOutsideAngular(() => setTimeout(() => this._simulateTransitionEvents(), 100));
    }
  }
  /** Simulates the body's transition events in an environment where they might not fire. */
  _simulateTransitionEvents() {
    this._transitionStarted();
    afterNextRender(() => this._transitionDone(), {
      injector: this._injector
    });
  }
  /** Whether animations are disabled for the tab group. */
  _animationsDisabled() {
    return this._diAnimationsDisabled || this.animationDuration === "0ms" || this.animationDuration === "0s";
  }
};
__name(_MatTabBody, "MatTabBody");
__publicField(_MatTabBody, "\u0275fac", /* @__PURE__ */ __name(function MatTabBody_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabBody)();
}, "MatTabBody_Factory"));
__publicField(_MatTabBody, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabBody,
  selectors: [["mat-tab-body"]],
  viewQuery: /* @__PURE__ */ __name(function MatTabBody_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatTabBodyPortal, 5);
      \u0275\u0275viewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalHost = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentElement = _t.first);
    }
  }, "MatTabBody_Query"),
  hostAttrs: [1, "mat-mdc-tab-body"],
  hostVars: 1,
  hostBindings: /* @__PURE__ */ __name(function MatTabBody_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("inert", ctx._position === "center" ? null : "");
    }
  }, "MatTabBody_HostBindings"),
  inputs: {
    _content: [0, "content", "_content"],
    animationDuration: "animationDuration",
    preserveContent: "preserveContent",
    position: "position"
  },
  outputs: {
    _onCentering: "_onCentering",
    _beforeCentering: "_beforeCentering",
    _onCentered: "_onCentered"
  },
  decls: 3,
  vars: 6,
  consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]],
  template: /* @__PURE__ */ __name(function MatTabBody_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("mat-tab-body-content-left", ctx._position === "left")("mat-tab-body-content-right", ctx._position === "right")("mat-tab-body-content-can-animate", ctx._position === "center" || ctx._previousPosition === "center");
    }
  }, "MatTabBody_Template"),
  dependencies: [MatTabBodyPortal, CdkScrollable],
  styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-tab-body-animating>.mat-mdc-tab-body-content{min-height:1px}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}\n"],
  encapsulation: 2
}));
var MatTabBody = _MatTabBody;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBody, [{
    type: Component,
    args: [{
      selector: "mat-tab-body",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-body",
        // In most cases the `visibility: hidden` that we set on the off-screen content is enough
        // to stop interactions with it, but if a child element sets its own `visibility`, it'll
        // override the one from the parent. This ensures that even those elements will be removed
        // from the accessibility tree.
        "[attr.inert]": '_position === "center" ? null : ""'
      },
      imports: [MatTabBodyPortal, CdkScrollable],
      template: `<div
   class="mat-mdc-tab-body-content"
   #content
   cdkScrollable
   [class.mat-tab-body-content-left]="_position === 'left'"
   [class.mat-tab-body-content-right]="_position === 'right'"
   [class.mat-tab-body-content-can-animate]="_position === 'center' || _previousPosition === 'center'">
  <ng-template matTabBodyHost></ng-template>
</div>
`,
      styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-tab-body-animating>.mat-mdc-tab-body-content{min-height:1px}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}\n"]
    }]
  }], () => [], {
    _onCentering: [{
      type: Output
    }],
    _beforeCentering: [{
      type: Output
    }],
    _onCentered: [{
      type: Output
    }],
    _portalHost: [{
      type: ViewChild,
      args: [MatTabBodyPortal]
    }],
    _contentElement: [{
      type: ViewChild,
      args: ["content"]
    }],
    _content: [{
      type: Input,
      args: ["content"]
    }],
    animationDuration: [{
      type: Input
    }],
    preserveContent: [{
      type: Input
    }],
    position: [{
      type: Input
    }]
  });
})();
var _MatTabGroup = class _MatTabGroup {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _tabsSubscription = Subscription.EMPTY;
  _tabLabelSubscription = Subscription.EMPTY;
  _tabBodySubscription = Subscription.EMPTY;
  _diAnimationsDisabled = _animationsDisabled();
  /**
   * All tabs inside the tab group. This includes tabs that belong to groups that are nested
   * inside the current one. We filter out only the tabs that belong to this group in `_tabs`.
   */
  _allTabs;
  _tabBodies;
  _tabBodyWrapper;
  _tabHeader;
  /** All of the tabs that belong to the group. */
  _tabs = new QueryList();
  /** The tab index that should be selected after the content has been checked. */
  _indexToSelect = 0;
  /** Index of the tab that was focused last. */
  _lastFocusedTabIndex = null;
  /** Snapshot of the height of the tab body wrapper before another tab is activated. */
  _tabBodyWrapperHeight = 0;
  /**
   * Theme color of the tab group. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent = value;
    this._changeDetectorRef.markForCheck();
  }
  _fitInkBarToContent = false;
  /** Whether tabs should be stretched to fill the header. */
  stretchTabs = true;
  /** Alignment for tabs label. */
  alignTabs = null;
  /** Whether the tab group should grow to the size of the active tab. */
  dynamicHeight = false;
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = isNaN(value) ? null : value;
  }
  _selectedIndex = null;
  /** Position of the tab header. */
  headerPosition = "above";
  /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  _animationDuration;
  /**
   * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
   * accessibility when the tab does not have focusable elements or if it has scrollable content.
   * The `tabindex` will be removed automatically for inactive tabs.
   * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
   */
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = isNaN(value) ? null : value;
  }
  _contentTabIndex;
  /**
   * Whether pagination should be disabled. This can be used to avoid unnecessary
   * layout recalculations if it's known that pagination won't be required.
   */
  disablePagination = false;
  /** Whether ripples in the tab group are disabled. */
  disableRipple = false;
  /**
   * By default tabs remove their content from the DOM while it's off-screen.
   * Setting this to `true` will keep it in the DOM which will prevent elements
   * like iframes and videos from reloading next time it comes back into the view.
   */
  preserveContent = false;
  /**
   * Theme color of the background of the tab group. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   *
   * @deprecated The background color should be customized through Sass theming APIs.
   * @breaking-change 20.0.0 Remove this input
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  _backgroundColor;
  /** Aria label of the inner `tablist` of the group. */
  ariaLabel;
  /** Sets the `aria-labelledby` of the inner `tablist` of the group. */
  ariaLabelledby;
  /** Output to enable support for two-way binding on `[(selectedIndex)]` */
  selectedIndexChange = new EventEmitter();
  /** Event emitted when focus has changed within a tab group. */
  focusChange = new EventEmitter();
  /** Event emitted when the body animation has completed */
  animationDone = new EventEmitter();
  /** Event emitted when the tab selection has changed. */
  selectedTabChange = new EventEmitter(true);
  _groupId;
  /** Whether the tab group is rendered on the server. */
  _isServer = !inject(Platform).isBrowser;
  constructor() {
    const defaultConfig = inject(MAT_TABS_CONFIG, {
      optional: true
    });
    this._groupId = inject(_IdGenerator).getId("mat-tab-group-");
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    if (defaultConfig?.contentTabIndex != null) {
      this.contentTabIndex = defaultConfig.contentTabIndex;
    }
    this.preserveContent = !!defaultConfig?.preserveContent;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
    this.alignTabs = defaultConfig && defaultConfig.alignTabs != null ? defaultConfig.alignTabs : null;
  }
  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */
  ngAfterContentChecked() {
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + "px";
      }
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          this._tabBodyWrapper.nativeElement.style.minHeight = "";
        }
      });
    }
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  ngAfterViewInit() {
    this._tabBodySubscription = this._tabBodies.changes.subscribe(() => this._bodyCentered(true));
  }
  /** Listens to changes in all of the tabs. */
  _subscribeToAllTabChanges() {
    this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs) => {
      this._tabs.reset(tabs.filter((tab) => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
    this._tabBodySubscription.unsubscribe();
  }
  /** Re-aligns the ink bar to the selected tab element. */
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  /**
   * Recalculates the tab group's pagination dimensions.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  /**
   * Sets focus to a particular tab.
   * @param index Index of the tab to be focused.
   */
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  /**
   * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
   * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
   * binding to be updated, we need to subscribe to changes in it and trigger change detection
   * manually.
   */
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = merge(...this._tabs.map((tab) => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Clamps the given index to the bounds of 0 and the tabs length. */
  _clampTabIndex(index) {
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  /** Returns a unique id for each tab label element */
  _getTabLabelId(tab, index) {
    return tab.id || `${this._groupId}-label-${index}`;
  }
  /** Returns a unique id for each tab content element */
  _getTabContentId(index) {
    return `${this._groupId}-content-${index}`;
  }
  /**
   * Sets the height of the body wrapper to the height of the activating tab if dynamic
   * height property is true.
   */
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
      this._tabBodyWrapperHeight = tabHeight;
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + "px";
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + "px";
    }
  }
  /** Removes the height of the tab body wrapper. */
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = "";
    this._ngZone.run(() => this.animationDone.emit());
  }
  /** Handle click events, setting new selected index if appropriate. */
  _handleClick(tab, tabHeader, index) {
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  /** Retrieves the tabindex for the tab. */
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  /** Callback for when the focused state of a tab has changed. */
  _tabFocusChanged(focusOrigin, index) {
    if (focusOrigin && focusOrigin !== "mouse" && focusOrigin !== "touch") {
      this._tabHeader.focusIndex = index;
    }
  }
  /**
   * Callback invoked when the centered state of a tab body changes.
   * @param isCenter Whether the tab will be in the center.
   */
  _bodyCentered(isCenter) {
    if (isCenter) {
      this._tabBodies?.forEach((body, i) => body._setActiveClass(i === this._selectedIndex));
    }
  }
  _animationsDisabled() {
    return this._diAnimationsDisabled || this.animationDuration === "0" || this.animationDuration === "0ms";
  }
};
__name(_MatTabGroup, "MatTabGroup");
__publicField(_MatTabGroup, "\u0275fac", /* @__PURE__ */ __name(function MatTabGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabGroup)();
}, "MatTabGroup_Factory"));
__publicField(_MatTabGroup, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabGroup,
  selectors: [["mat-tab-group"]],
  contentQueries: /* @__PURE__ */ __name(function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatTab, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allTabs = _t);
    }
  }, "MatTabGroup_ContentQueries"),
  viewQuery: /* @__PURE__ */ __name(function MatTabGroup_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c7, 5);
      \u0275\u0275viewQuery(_c8, 5);
      \u0275\u0275viewQuery(MatTabBody, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodyWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabHeader = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodies = _t);
    }
  }, "MatTabGroup_Query"),
  hostAttrs: [1, "mat-mdc-tab-group"],
  hostVars: 11,
  hostBindings: /* @__PURE__ */ __name(function MatTabGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("mat-align-tabs", ctx.alignTabs);
      \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
      \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
      \u0275\u0275classProp("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
    }
  }, "MatTabGroup_HostBindings"),
  inputs: {
    color: "color",
    fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
    stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
    alignTabs: [0, "mat-align-tabs", "alignTabs"],
    dynamicHeight: [2, "dynamicHeight", "dynamicHeight", booleanAttribute],
    selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
    headerPosition: "headerPosition",
    animationDuration: "animationDuration",
    contentTabIndex: [2, "contentTabIndex", "contentTabIndex", numberAttribute],
    disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    preserveContent: [2, "preserveContent", "preserveContent", booleanAttribute],
    backgroundColor: "backgroundColor",
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"]
  },
  outputs: {
    selectedIndexChange: "selectedIndexChange",
    focusChange: "focusChange",
    animationDone: "animationDone",
    selectedTabChange: "selectedTabChange"
  },
  exportAs: ["matTabGroup"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_TAB_GROUP,
    useExisting: _MatTabGroup
  }])],
  ngContentSelectors: _c0,
  decls: 9,
  vars: 8,
  consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "class", "content", "position", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "_beforeCentering", "id", "content", "position", "animationDuration", "preserveContent"]],
  template: /* @__PURE__ */ __name(function MatTabGroup_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "mat-tab-header", 3, 0);
      \u0275\u0275listener("indexFocused", /* @__PURE__ */ __name(function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._focusChanged($event));
      }, "MatTabGroup_Template_mat_tab_header_indexFocused_0_listener"))("selectFocusedIndex", /* @__PURE__ */ __name(function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectedIndex = $event);
      }, "MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener"));
      \u0275\u0275repeaterCreate(2, MatTabGroup_For_3_Template, 8, 17, "div", 4, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, MatTabGroup_Conditional_4_Template, 1, 0);
      \u0275\u0275elementStart(5, "div", 5, 1);
      \u0275\u0275repeaterCreate(7, MatTabGroup_For_8_Template, 1, 10, "mat-tab-body", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
      \u0275\u0275ariaProperty("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx._tabs);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx._isServer ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx._tabs);
    }
  }, "MatTabGroup_Template"),
  dependencies: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
  styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}\n'],
  encapsulation: 2
}));
var MatTabGroup = _MatTabGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabGroup, [{
    type: Component,
    args: [{
      selector: "mat-tab-group",
      exportAs: "matTabGroup",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        "class": "mat-mdc-tab-group",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mat-mdc-tab-group-dynamic-height]": "dynamicHeight",
        "[class.mat-mdc-tab-group-inverted-header]": 'headerPosition === "below"',
        "[class.mat-mdc-tab-group-stretch-tabs]": "stretchTabs",
        "[attr.mat-align-tabs]": "alignTabs",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      imports: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
      template: '<mat-tab-header #tabHeader\n                [selectedIndex]="selectedIndex || 0"\n                [disableRipple]="disableRipple"\n                [disablePagination]="disablePagination"\n                [aria-label]="ariaLabel"\n                [aria-labelledby]="ariaLabelledby"\n                (indexFocused)="_focusChanged($event)"\n                (selectFocusedIndex)="selectedIndex = $event">\n\n  @for (tab of _tabs; track tab) {\n    <div class="mdc-tab mat-mdc-tab mat-focus-indicator"\n        #tabNode\n        role="tab"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]="_getTabLabelId(tab, $index)"\n        [attr.tabIndex]="_getTabIndex($index)"\n        [attr.aria-posinset]="$index + 1"\n        [attr.aria-setsize]="_tabs.length"\n        [attr.aria-controls]="_getTabContentId($index)"\n        [attr.aria-selected]="selectedIndex === $index"\n        [attr.aria-label]="tab.ariaLabel || null"\n        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"\n        [class.mdc-tab--active]="selectedIndex === $index"\n        [class]="tab.labelClass"\n        [disabled]="tab.disabled"\n        [fitInkBarToContent]="fitInkBarToContent"\n        (click)="_handleClick(tab, tabHeader, $index)"\n        (cdkFocusChange)="_tabFocusChanged($event, $index)">\n      <span class="mdc-tab__ripple"></span>\n\n      <!-- Needs to be a separate element, because we can\'t put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class="mat-mdc-tab-ripple"\n        mat-ripple\n        [matRippleTrigger]="tabNode"\n        [matRippleDisabled]="tab.disabled || disableRipple"></div>\n\n      <span class="mdc-tab__content">\n        <span class="mdc-tab__text-label">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don\'t have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class="mat-mdc-tab-body-wrapper"\n  [class._mat-animation-noopable]="_animationsDisabled()"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab;) {\n    <mat-tab-body role="tabpanel"\n                 [id]="_getTabContentId($index)"\n                 [attr.tabindex]="(contentTabIndex != null && selectedIndex === $index) ? contentTabIndex : null"\n                 [attr.aria-labelledby]="_getTabLabelId(tab, $index)"\n                 [attr.aria-hidden]="selectedIndex !== $index"\n                 [class]="tab.bodyClass"\n                 [content]="tab.content!"\n                 [position]="tab.position!"\n                 [animationDuration]="animationDuration"\n                 [preserveContent]="preserveContent"\n                 (_onCentered)="_removeTabBodyWrapperHeight()"\n                 (_onCentering)="_setTabBodyWrapperHeight($event)"\n                 (_beforeCentering)="_bodyCentered($event)"/>\n  }\n</div>\n',
      styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}\n']
    }]
  }], () => [], {
    _allTabs: [{
      type: ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodies: [{
      type: ViewChildren,
      args: [MatTabBody]
    }],
    _tabBodyWrapper: [{
      type: ViewChild,
      args: ["tabBodyWrapper"]
    }],
    _tabHeader: [{
      type: ViewChild,
      args: ["tabHeader"]
    }],
    color: [{
      type: Input
    }],
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    alignTabs: [{
      type: Input,
      args: [{
        alias: "mat-align-tabs"
      }]
    }],
    dynamicHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    contentTabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    selectedIndexChange: [{
      type: Output
    }],
    focusChange: [{
      type: Output
    }],
    animationDone: [{
      type: Output
    }],
    selectedTabChange: [{
      type: Output
    }]
  });
})();
var _MatTabChangeEvent = class _MatTabChangeEvent {
  /** Index of the currently-selected tab. */
  index;
  /** Reference to the currently-selected tab. */
  tab;
};
__name(_MatTabChangeEvent, "MatTabChangeEvent");
var MatTabChangeEvent = _MatTabChangeEvent;
var _MatTabNav = class _MatTabNav extends MatPaginatedTabHeader {
  _focusedItem = signal(null, ...ngDevMode ? [{
    debugName: "_focusedItem"
  }] : []);
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent.next(value);
    this._changeDetectorRef.markForCheck();
  }
  _fitInkBarToContent = new BehaviorSubject(false);
  /** Whether tabs should be stretched to fill the header. */
  stretchTabs = true;
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  _animationDuration;
  /** Query list of all tab links of the tab navigation. */
  _items;
  /**
   * Theme color of the background of the tab nav. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  _backgroundColor;
  /** Whether the ripple effect is disabled or not. */
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false, ...ngDevMode ? [{
    debugName: "_disableRipple"
  }] : []);
  /**
   * Theme color of the nav bar. This API is supported in M2 themes only, it has
   * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color = "primary";
  /**
   * Associated tab panel controlled by the nav bar. If not provided, then the nav bar
   * follows the ARIA link / navigation landmark pattern. If provided, it follows the
   * ARIA tabs design pattern.
   */
  tabPanel;
  _tabListContainer;
  _tabList;
  _tabListInner;
  _nextPaginator;
  _previousPaginator;
  _inkBar;
  constructor() {
    const defaultConfig = inject(MAT_TABS_CONFIG, {
      optional: true
    });
    super();
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  _itemSelected() {
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    this._items.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this.updateActiveLink());
    super.ngAfterContentInit();
    this._keyManager.change.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this._focusedItem.set(this._keyManager?.activeItem || null));
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new Error("A mat-tab-nav-panel must be specified via [tabPanel].");
    }
    super.ngAfterViewInit();
  }
  /** Notifies the component that the active link has been changed. */
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        this._focusedItem.set(items[i]);
        this._changeDetectorRef.markForCheck();
        return;
      }
    }
    this.selectedIndex = -1;
  }
  _getRole() {
    return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role");
  }
  _hasFocus(link) {
    return this._keyManager?.activeItem === link;
  }
};
__name(_MatTabNav, "MatTabNav");
__publicField(_MatTabNav, "\u0275fac", /* @__PURE__ */ __name(function MatTabNav_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabNav)();
}, "MatTabNav_Factory"));
__publicField(_MatTabNav, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabNav,
  selectors: [["", "mat-tab-nav-bar", ""]],
  contentQueries: /* @__PURE__ */ __name(function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatTabLink, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
    }
  }, "MatTabNav_ContentQueries"),
  viewQuery: /* @__PURE__ */ __name(function MatTabNav_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c1, 7);
      \u0275\u0275viewQuery(_c2, 7);
      \u0275\u0275viewQuery(_c3, 7);
      \u0275\u0275viewQuery(_c4, 5);
      \u0275\u0275viewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
    }
  }, "MatTabNav_Query"),
  hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
  hostVars: 17,
  hostBindings: /* @__PURE__ */ __name(function MatTabNav_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("role", ctx._getRole());
      \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationsDisabled);
    }
  }, "MatTabNav_HostBindings"),
  inputs: {
    fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
    stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
    animationDuration: "animationDuration",
    backgroundColor: "backgroundColor",
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    color: "color",
    tabPanel: "tabPanel"
  },
  exportAs: ["matTabNavBar", "matTabNav"],
  features: [\u0275\u0275InheritDefinitionFeature],
  attrs: _c9,
  ngContentSelectors: _c0,
  decls: 13,
  vars: 6,
  consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
  template: /* @__PURE__ */ __name(function MatTabNav_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 5, 0);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function MatTabNav_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorClick("before"));
      }, "MatTabNav_Template_div_click_0_listener"))("mousedown", /* @__PURE__ */ __name(function MatTabNav_Template_div_mousedown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorPress("before", $event));
      }, "MatTabNav_Template_div_mousedown_0_listener"))("touchend", /* @__PURE__ */ __name(function MatTabNav_Template_div_touchend_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._stopInterval());
      }, "MatTabNav_Template_div_touchend_0_listener"));
      \u0275\u0275element(2, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 7, 1);
      \u0275\u0275listener("keydown", /* @__PURE__ */ __name(function MatTabNav_Template_div_keydown_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handleKeydown($event));
      }, "MatTabNav_Template_div_keydown_3_listener"));
      \u0275\u0275elementStart(5, "div", 8, 2);
      \u0275\u0275listener("cdkObserveContent", /* @__PURE__ */ __name(function MatTabNav_Template_div_cdkObserveContent_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onContentChanges());
      }, "MatTabNav_Template_div_cdkObserveContent_5_listener"));
      \u0275\u0275elementStart(7, "div", 9, 3);
      \u0275\u0275projection(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 10, 4);
      \u0275\u0275listener("mousedown", /* @__PURE__ */ __name(function MatTabNav_Template_div_mousedown_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorPress("after", $event));
      }, "MatTabNav_Template_div_mousedown_10_listener"))("click", /* @__PURE__ */ __name(function MatTabNav_Template_div_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handlePaginatorClick("after"));
      }, "MatTabNav_Template_div_click_10_listener"))("touchend", /* @__PURE__ */ __name(function MatTabNav_Template_div_touchend_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._stopInterval());
      }, "MatTabNav_Template_div_touchend_10_listener"));
      \u0275\u0275element(12, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
      \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
      \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    }
  }, "MatTabNav_Template"),
  dependencies: [MatRipple, CdkObserveContent],
  styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}\n"],
  encapsulation: 2
}));
var MatTabNav = _MatTabNav;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNav, [{
    type: Component,
    args: [{
      selector: "[mat-tab-nav-bar]",
      exportAs: "matTabNavBar, matTabNav",
      host: {
        "[attr.role]": "_getRole()",
        "class": "mat-mdc-tab-nav-bar mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'",
        "[class.mat-mdc-tab-nav-bar-stretch-tabs]": "stretchTabs",
        "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div class="mat-mdc-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div class="mat-mdc-tab-list" #tabList (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}\n"]
    }]
  }], () => [], {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    animationDuration: [{
      type: Input
    }],
    _items: [{
      type: ContentChildren,
      args: [forwardRef(() => MatTabLink), {
        descendants: true
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    tabPanel: [{
      type: Input
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }]
  });
})();
var _MatTabLink = class _MatTabLink extends InkBarItem {
  _tabNavBar = inject(MatTabNav);
  elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _destroyed = new Subject();
  /** Whether the tab link is active or not. */
  _isActive = false;
  _tabIndex = computed(() => this._tabNavBar._focusedItem() === this ? this.tabIndex : -1, ...ngDevMode ? [{
    debugName: "_tabIndex"
  }] : []);
  /** Whether the link is active. */
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (value !== this._isActive) {
      this._isActive = value;
      this._tabNavBar.updateActiveLink();
    }
  }
  /** Whether the tab link is disabled. */
  disabled = false;
  /** Whether ripples are disabled on the tab link. */
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false, ...ngDevMode ? [{
    debugName: "_disableRipple"
  }] : []);
  tabIndex = 0;
  /**
   * Ripple configuration for ripples that are launched on pointer down. The ripple config
   * is set to the global ripple options since we don't have any configurable options for
   * the tab link ripples.
   * @docs-private
   */
  rippleConfig;
  /**
   * Whether ripples are disabled on interaction.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  /** Unique id for the tab. */
  id = inject(_IdGenerator).getId("mat-tab-link-");
  constructor() {
    super();
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    if (_animationsDisabled()) {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
    this._tabNavBar._fitInkBarToContent.pipe(takeUntil(this._destroyed)).subscribe((fitInkBarToContent) => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  /** Focuses the tab link. */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this.disabled) {
        event.preventDefault();
      } else if (this._tabNavBar.tabPanel) {
        if (event.keyCode === SPACE) {
          event.preventDefault();
        }
        this.elementRef.nativeElement.click();
      }
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls");
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? "true" : "false";
    } else {
      return this.elementRef.nativeElement.getAttribute("aria-selected");
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? "page" : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role");
  }
};
__name(_MatTabLink, "MatTabLink");
__publicField(_MatTabLink, "\u0275fac", /* @__PURE__ */ __name(function MatTabLink_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabLink)();
}, "MatTabLink_Factory"));
__publicField(_MatTabLink, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabLink,
  selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
  hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-focus-indicator"],
  hostVars: 11,
  hostBindings: /* @__PURE__ */ __name(function MatTabLink_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", /* @__PURE__ */ __name(function MatTabLink_focus_HostBindingHandler() {
        return ctx._handleFocus();
      }, "MatTabLink_focus_HostBindingHandler"))("keydown", /* @__PURE__ */ __name(function MatTabLink_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      }, "MatTabLink_keydown_HostBindingHandler"));
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._tabIndex())("role", ctx._getRole());
      \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
    }
  }, "MatTabLink_HostBindings"),
  inputs: {
    active: [2, "active", "active", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
    id: "id"
  },
  exportAs: ["matTabLink"],
  features: [\u0275\u0275InheritDefinitionFeature],
  attrs: _c10,
  ngContentSelectors: _c0,
  decls: 5,
  vars: 2,
  consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
  template: /* @__PURE__ */ __name(function MatTabLink_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275element(0, "span", 0)(1, "div", 1);
      \u0275\u0275elementStart(2, "span", 2)(3, "span", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
    }
  }, "MatTabLink_Template"),
  dependencies: [MatRipple],
  styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var MatTabLink = _MatTabLink;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLink, [{
    type: Component,
    args: [{
      selector: "[mat-tab-link], [matTabLink]",
      exportAs: "matTabLink",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mdc-tab mat-mdc-tab-link mat-focus-indicator",
        "[attr.aria-controls]": "_getAriaControls()",
        "[attr.aria-current]": "_getAriaCurrent()",
        "[attr.aria-disabled]": "disabled",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.id]": "id",
        "[attr.tabIndex]": "_tabIndex()",
        "[attr.role]": "_getRole()",
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[class.mdc-tab--active]": "active",
        "(focus)": "_handleFocus()",
        "(keydown)": "_handleKeydown($event)"
      },
      imports: [MatRipple],
      template: '<span class="mdc-tab__ripple"></span>\n\n<div\n  class="mat-mdc-tab-ripple"\n  mat-ripple\n  [matRippleTrigger]="elementRef.nativeElement"\n  [matRippleDisabled]="rippleDisabled"></div>\n\n<span class="mdc-tab__content">\n  <span class="mdc-tab__text-label">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n',
      styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}\n']
    }]
  }], () => [], {
    active: [{
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
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: /* @__PURE__ */ __name((value) => value == null ? 0 : numberAttribute(value), "transform")
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var _MatTabNavPanel = class _MatTabNavPanel {
  /** Unique id for the tab panel. */
  id = inject(_IdGenerator).getId("mat-tab-nav-panel-");
  /** Id of the active tab in the nav bar. */
  _activeTabId;
};
__name(_MatTabNavPanel, "MatTabNavPanel");
__publicField(_MatTabNavPanel, "\u0275fac", /* @__PURE__ */ __name(function MatTabNavPanel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabNavPanel)();
}, "MatTabNavPanel_Factory"));
__publicField(_MatTabNavPanel, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatTabNavPanel,
  selectors: [["mat-tab-nav-panel"]],
  hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function MatTabNavPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-labelledby", ctx._activeTabId)("id", ctx.id);
    }
  }, "MatTabNavPanel_HostBindings"),
  inputs: {
    id: "id"
  },
  exportAs: ["matTabNavPanel"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function MatTabNavPanel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, "MatTabNavPanel_Template"),
  encapsulation: 2,
  changeDetection: 0
}));
var MatTabNavPanel = _MatTabNavPanel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNavPanel, [{
    type: Component,
    args: [{
      selector: "mat-tab-nav-panel",
      exportAs: "matTabNavPanel",
      template: "<ng-content></ng-content>",
      host: {
        "[attr.aria-labelledby]": "_activeTabId",
        "[attr.id]": "id",
        "class": "mat-mdc-tab-nav-panel",
        "role": "tabpanel"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var _MatTabsModule = class _MatTabsModule {
};
__name(_MatTabsModule, "MatTabsModule");
__publicField(_MatTabsModule, "\u0275fac", /* @__PURE__ */ __name(function MatTabsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTabsModule)();
}, "MatTabsModule_Factory"));
__publicField(_MatTabsModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatTabsModule,
  imports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
  exports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
}));
__publicField(_MatTabsModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
}));
var MatTabsModule = _MatTabsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabsModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      exports: [MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/tooltip2.mjs
var _c02 = ["tooltip"];
var SCROLL_THROTTLE_MS = 20;
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
__name(getMatTooltipInvalidPositionError, "getMatTooltipInvalidPositionError");
var MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
  providedIn: "root",
  factory: /* @__PURE__ */ __name(() => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector, {
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }, "factory")
});
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector, {
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
__name(MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY");
var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
__name(MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY");
var MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
  providedIn: "root",
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
var PANEL_CLASS = "tooltip-panel";
var passiveListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
var UNBOUNDED_ANCHOR_GAP = 8;
var MIN_HEIGHT = 24;
var MAX_WIDTH = 200;
var _MatTooltip = class _MatTooltip {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _ariaDescriber = inject(AriaDescriber);
  _focusMonitor = inject(FocusMonitor);
  _dir = inject(Directionality);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = _animationsDisabled();
  _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef;
  _tooltipInstance;
  _overlayPanelClass;
  // Used for styling internally.
  _portal;
  _position = "below";
  _positionAtOrigin = false;
  _disabled = false;
  _tooltipClass;
  _viewInitialized = false;
  _pointerExitEventsInitialized = false;
  _tooltipComponent = TooltipComponent;
  _viewportMargin = 8;
  _currentPosition;
  _cssClassPrefix = "mat-mdc";
  _ariaDescriptionPending;
  _dirSubscribed = false;
  /** Allows the user to define the position of the tooltip relative to the parent element */
  get position() {
    return this._position;
  }
  set position(value) {
    if (value !== this._position) {
      this._position = value;
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
        this._tooltipInstance?.show(0);
        this._overlayRef.updatePosition();
      }
    }
  }
  /**
   * Whether tooltip should be relative to the click or touch origin
   * instead of outside the element bounding box.
   */
  get positionAtOrigin() {
    return this._positionAtOrigin;
  }
  set positionAtOrigin(value) {
    this._positionAtOrigin = coerceBooleanProperty(value);
    this._detach();
    this._overlayRef = null;
  }
  /** Disables the display of the tooltip. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const isDisabled = coerceBooleanProperty(value);
    if (this._disabled !== isDisabled) {
      this._disabled = isDisabled;
      if (isDisabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
      this._syncAriaDescription(this.message);
    }
  }
  /** The default delay in ms before showing the tooltip after show is called */
  get showDelay() {
    return this._showDelay;
  }
  set showDelay(value) {
    this._showDelay = coerceNumberProperty(value);
  }
  _showDelay;
  /** The default delay in ms before hiding the tooltip after hide is called */
  get hideDelay() {
    return this._hideDelay;
  }
  set hideDelay(value) {
    this._hideDelay = coerceNumberProperty(value);
    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  _hideDelay;
  /**
   * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
   * uses a long press gesture to show and hide, however it can conflict with the native browser
   * gestures. To work around the conflict, Angular Material disables native gestures on the
   * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
   * elements). The different values for this option configure the touch event handling as follows:
   * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
   *   browser gestures on particular elements. In particular, it allows text selection on inputs
   *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
   * - `on` - Enables touch gestures for all elements and disables native
   *   browser gestures with no exceptions.
   * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
   *   showing on touch devices.
   */
  touchGestures = "auto";
  /** The message to be displayed in the tooltip */
  get message() {
    return this._message;
  }
  set message(value) {
    const oldMessage = this._message;
    this._message = value != null ? String(value).trim() : "";
    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
      this._updateTooltipMessage();
    }
    this._syncAriaDescription(oldMessage);
  }
  _message = "";
  /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
  get tooltipClass() {
    return this._tooltipClass;
  }
  set tooltipClass(value) {
    this._tooltipClass = value;
    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }
  /** Manually-bound passive event listeners. */
  _passiveListeners = [];
  /** Timer started at the last `touchstart` event. */
  _touchstartTimeout = null;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Whether ngOnDestroyed has been called. */
  _isDestroyed = false;
  constructor() {
    const defaultOptions = this._defaultOptions;
    if (defaultOptions) {
      this._showDelay = defaultOptions.showDelay;
      this._hideDelay = defaultOptions.hideDelay;
      if (defaultOptions.position) {
        this.position = defaultOptions.position;
      }
      if (defaultOptions.positionAtOrigin) {
        this.positionAtOrigin = defaultOptions.positionAtOrigin;
      }
      if (defaultOptions.touchGestures) {
        this.touchGestures = defaultOptions.touchGestures;
      }
      if (defaultOptions.tooltipClass) {
        this.tooltipClass = defaultOptions.tooltipClass;
      }
    }
    this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
  }
  ngAfterViewInit() {
    this._viewInitialized = true;
    this._setupPointerEnterEventsIfNeeded();
    this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === "keyboard") {
        this._ngZone.run(() => this.show());
      }
    });
  }
  /**
   * Dispose the tooltip when destroyed.
   */
  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    if (this._touchstartTimeout) {
      clearTimeout(this._touchstartTimeout);
    }
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
    this._passiveListeners.forEach(([event, listener]) => {
      nativeElement.removeEventListener(event, listener, passiveListenerOptions);
    });
    this._passiveListeners.length = 0;
    this._destroyed.next();
    this._destroyed.complete();
    this._isDestroyed = true;
    this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
    this._focusMonitor.stopMonitoring(nativeElement);
  }
  /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
  show(delay = this.showDelay, origin) {
    if (this.disabled || !this.message || this._isTooltipVisible()) {
      this._tooltipInstance?._cancelPendingAnimations();
      return;
    }
    const overlayRef = this._createOverlay(origin);
    this._detach();
    this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._setTooltipClass(this._tooltipClass);
    this._updateTooltipMessage();
    instance.show(delay);
  }
  /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
  hide(delay = this.hideDelay) {
    const instance = this._tooltipInstance;
    if (instance) {
      if (instance.isVisible()) {
        instance.hide(delay);
      } else {
        instance._cancelPendingAnimations();
        this._detach();
      }
    }
  }
  /** Shows/hides the tooltip */
  toggle(origin) {
    this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
  }
  /** Returns true if the tooltip is currently visible to the user */
  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  /** Create the overlay config and position strategy */
  _createOverlay(origin) {
    if (this._overlayRef) {
      const existingStrategy = this._overlayRef.getConfig().positionStrategy;
      if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
        return this._overlayRef;
      }
      this._detach();
    }
    const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
    const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
    strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
      this._updateCurrentPositionClass(change.connectionPair);
      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = createOverlayRef(this._injector, {
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
      scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
      disableAnimations: this._animationsDisabled
    });
    this._updatePosition(this._overlayRef);
    this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
    this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
        event.preventDefault();
        event.stopPropagation();
        this._ngZone.run(() => this.hide(0));
      }
    });
    if (this._defaultOptions?.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }
    if (!this._dirSubscribed) {
      this._dirSubscribed = true;
      this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
        }
      });
    }
    return this._overlayRef;
  }
  /** Detaches the currently-attached tooltip. */
  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
    this._tooltipInstance = null;
  }
  /** Updates the position of the current tooltip. */
  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;
    const origin = this._getOrigin();
    const overlay = this._getOverlayPosition();
    position.withPositions([this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)), this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))]);
  }
  /** Adds the configured offset to a position. Used as a hook for child classes. */
  _addOffset(position) {
    const offset = UNBOUNDED_ANCHOR_GAP;
    const isLtr = !this._dir || this._dir.value == "ltr";
    if (position.originY === "top") {
      position.offsetY = -offset;
    } else if (position.originY === "bottom") {
      position.offsetY = offset;
    } else if (position.originX === "start") {
      position.offsetX = isLtr ? -offset : offset;
    } else if (position.originX === "end") {
      position.offsetX = isLtr ? offset : -offset;
    }
    return position;
  }
  /**
   * Returns the origin position and a fallback position based on the user's position preference.
   * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
   */
  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let originPosition;
    if (position == "above" || position == "below") {
      originPosition = {
        originX: "center",
        originY: position == "above" ? "top" : "bottom"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      originPosition = {
        originX: "start",
        originY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      originPosition = {
        originX: "end",
        originY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(originPosition.originX, originPosition.originY);
    return {
      main: originPosition,
      fallback: {
        originX: x,
        originY: y
      }
    };
  }
  /** Returns the overlay position and a fallback position based on the user's preference */
  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let overlayPosition;
    if (position == "above") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "bottom"
      };
    } else if (position == "below") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "top"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      overlayPosition = {
        overlayX: "end",
        overlayY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      overlayPosition = {
        overlayX: "start",
        overlayY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
    return {
      main: overlayPosition,
      fallback: {
        overlayX: x,
        overlayY: y
      }
    };
  }
  /** Updates the tooltip message and repositions the overlay according to the new message length */
  _updateTooltipMessage() {
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;
      this._tooltipInstance._markForCheck();
      afterNextRender(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      }, {
        injector: this._injector
      });
    }
  }
  /** Updates the tooltip class */
  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass;
      this._tooltipInstance._markForCheck();
    }
  }
  /** Inverts an overlay position. */
  _invertPosition(x, y) {
    if (this.position === "above" || this.position === "below") {
      if (y === "top") {
        y = "bottom";
      } else if (y === "bottom") {
        y = "top";
      }
    } else {
      if (x === "end") {
        x = "start";
      } else if (x === "start") {
        x = "end";
      }
    }
    return {
      x,
      y
    };
  }
  /** Updates the class on the overlay panel based on the current position of the tooltip. */
  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition;
    if (overlayY === "center") {
      if (this._dir && this._dir.value === "rtl") {
        newPosition = originX === "end" ? "left" : "right";
      } else {
        newPosition = originX === "start" ? "left" : "right";
      }
    } else {
      newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
    }
    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }
      this._currentPosition = newPosition;
    }
  }
  /** Binds the pointer events to the tooltip trigger. */
  _setupPointerEnterEventsIfNeeded() {
    if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
      return;
    }
    if (this._platformSupportsMouseEvents()) {
      this._passiveListeners.push(["mouseenter", (event) => {
        this._setupPointerExitEventsIfNeeded();
        let point = void 0;
        if (event.x !== void 0 && event.y !== void 0) {
          point = event;
        }
        this.show(void 0, point);
      }]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      this._passiveListeners.push(["touchstart", (event) => {
        const touch = event.targetTouches?.[0];
        const origin = touch ? {
          x: touch.clientX,
          y: touch.clientY
        } : void 0;
        this._setupPointerExitEventsIfNeeded();
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        const DEFAULT_LONGPRESS_DELAY = 500;
        this._touchstartTimeout = setTimeout(() => {
          this._touchstartTimeout = null;
          this.show(void 0, origin);
        }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
      }]);
    }
    this._addListeners(this._passiveListeners);
  }
  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }
    this._pointerExitEventsInitialized = true;
    const exitListeners = [];
    if (this._platformSupportsMouseEvents()) {
      exitListeners.push(["mouseleave", (event) => {
        const newTarget = event.relatedTarget;
        if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
          this.hide();
        }
      }], ["wheel", (event) => this._wheelListener(event)]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      const touchendListener = /* @__PURE__ */ __name(() => {
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        this.hide(this._defaultOptions?.touchendHideDelay);
      }, "touchendListener");
      exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
    }
    this._addListeners(exitListeners);
    this._passiveListeners.push(...exitListeners);
  }
  _addListeners(listeners) {
    listeners.forEach(([event, listener]) => {
      this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
    });
  }
  _platformSupportsMouseEvents() {
    return !this._platform.IOS && !this._platform.ANDROID;
  }
  /** Listener for the `wheel` event on the element. */
  _wheelListener(event) {
    if (this._isTooltipVisible()) {
      const elementUnderPointer = this._injector.get(DOCUMENT).elementFromPoint(event.clientX, event.clientY);
      const element = this._elementRef.nativeElement;
      if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
        this.hide();
      }
    }
  }
  /** Disables the native browser gestures, based on how the tooltip has been configured. */
  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;
    if (gestures !== "off") {
      const element = this._elementRef.nativeElement;
      const style = element.style;
      if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
        style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = "none";
      }
      if (gestures === "on" || !element.draggable) {
        style.webkitUserDrag = "none";
      }
      style.touchAction = "none";
      style.webkitTapHighlightColor = "transparent";
    }
  }
  /** Updates the tooltip's ARIA description based on it current state. */
  _syncAriaDescription(oldMessage) {
    if (this._ariaDescriptionPending) {
      return;
    }
    this._ariaDescriptionPending = true;
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
    if (!this._isDestroyed) {
      afterNextRender({
        write: /* @__PURE__ */ __name(() => {
          this._ariaDescriptionPending = false;
          if (this.message && !this.disabled) {
            this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
          }
        }, "write")
      }, {
        injector: this._injector
      });
    }
  }
};
__name(_MatTooltip, "MatTooltip");
__publicField(_MatTooltip, "\u0275fac", /* @__PURE__ */ __name(function MatTooltip_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTooltip)();
}, "MatTooltip_Factory"));
__publicField(_MatTooltip, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatTooltip,
  selectors: [["", "matTooltip", ""]],
  hostAttrs: [1, "mat-mdc-tooltip-trigger"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function MatTooltip_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-mdc-tooltip-disabled", ctx.disabled);
    }
  }, "MatTooltip_HostBindings"),
  inputs: {
    position: [0, "matTooltipPosition", "position"],
    positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
    disabled: [0, "matTooltipDisabled", "disabled"],
    showDelay: [0, "matTooltipShowDelay", "showDelay"],
    hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
    touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
    message: [0, "matTooltip", "message"],
    tooltipClass: [0, "matTooltipClass", "tooltipClass"]
  },
  exportAs: ["matTooltip"]
}));
var MatTooltip = _MatTooltip;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltip, [{
    type: Directive,
    args: [{
      selector: "[matTooltip]",
      exportAs: "matTooltip",
      host: {
        "class": "mat-mdc-tooltip-trigger",
        "[class.mat-mdc-tooltip-disabled]": "disabled"
      }
    }]
  }], () => [], {
    position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }],
    positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }],
    disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }],
    showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }],
    touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }],
    message: [{
      type: Input,
      args: ["matTooltip"]
    }],
    tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }]
  });
})();
var _TooltipComponent = class _TooltipComponent {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  /* Whether the tooltip text overflows to multiple lines */
  _isMultiline = false;
  /** Message to display in the tooltip */
  message;
  /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
  tooltipClass;
  /** The timeout ID of any current timer set to show the tooltip */
  _showTimeoutId;
  /** The timeout ID of any current timer set to hide the tooltip */
  _hideTimeoutId;
  /** Element that caused the tooltip to open. */
  _triggerElement;
  /** Amount of milliseconds to delay the closing sequence. */
  _mouseLeaveHideDelay;
  /** Whether animations are currently disabled. */
  _animationsDisabled = _animationsDisabled();
  /** Reference to the internal tooltip element. */
  _tooltip;
  /** Whether interactions on the page should close the tooltip */
  _closeOnInteraction = false;
  /** Whether the tooltip is currently visible. */
  _isVisible = false;
  /** Subject for notifying that the tooltip has been hidden from the view */
  _onHide = new Subject();
  /** Name of the show animation and the class that toggles it. */
  _showAnimation = "mat-mdc-tooltip-show";
  /** Name of the hide animation and the class that toggles it. */
  _hideAnimation = "mat-mdc-tooltip-hide";
  constructor() {
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */
  show(delay) {
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);
      this._showTimeoutId = void 0;
    }, delay);
  }
  /**
   * Begins the animation to hide the tooltip after the provided delay in ms.
   * @param delay Amount of milliseconds to delay showing the tooltip.
   */
  hide(delay) {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);
      this._hideTimeoutId = void 0;
    }, delay);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */
  afterHidden() {
    return this._onHide;
  }
  /** Whether the tooltip is being displayed. */
  isVisible() {
    return this._isVisible;
  }
  ngOnDestroy() {
    this._cancelPendingAnimations();
    this._onHide.complete();
    this._triggerElement = null;
  }
  /**
   * Interactions on the HTML body should close the tooltip immediately as defined in the
   * material design spec.
   * https://material.io/design/components/tooltips.html#behavior
   */
  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  /**
   * Marks that the tooltip needs to be checked in the next change detection run.
   * Mainly used for rendering the initial text before positioning a tooltip, which
   * can be problematic in components with OnPush change detection.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      if (this.isVisible()) {
        this.hide(this._mouseLeaveHideDelay);
      } else {
        this._finalizeAnimation(false);
      }
    }
  }
  /**
   * Callback for when the timeout in this.show() gets completed.
   * This method is only needed by the mdc-tooltip, and so it is only implemented
   * in the mdc-tooltip, not here.
   */
  _onShow() {
    this._isMultiline = this._isTooltipMultiline();
    this._markForCheck();
  }
  /** Whether the tooltip text has overflown to the next line */
  _isTooltipMultiline() {
    const rect = this._elementRef.nativeElement.getBoundingClientRect();
    return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
  }
  /** Event listener dispatched when an animation on the tooltip finishes. */
  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  /** Cancels any pending animation sequences. */
  _cancelPendingAnimations() {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = this._hideTimeoutId = void 0;
  }
  /** Handles the cleanup after an animation has finished. */
  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  /** Toggles the visibility of the tooltip element. */
  _toggleVisibility(isVisible) {
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    if (this._isVisible !== isVisible) {
      this._isVisible = isVisible;
      this._changeDetectorRef.markForCheck();
    }
    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
      const styles = getComputedStyle(tooltip);
      if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
        this._animationsDisabled = true;
      }
    }
    if (isVisible) {
      this._onShow();
    }
    if (this._animationsDisabled) {
      tooltip.classList.add("_mat-animation-noopable");
      this._finalizeAnimation(isVisible);
    }
  }
};
__name(_TooltipComponent, "TooltipComponent");
__publicField(_TooltipComponent, "\u0275fac", /* @__PURE__ */ __name(function TooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TooltipComponent)();
}, "TooltipComponent_Factory"));
__publicField(_TooltipComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TooltipComponent,
  selectors: [["mat-tooltip-component"]],
  viewQuery: /* @__PURE__ */ __name(function TooltipComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tooltip = _t.first);
    }
  }, "TooltipComponent_Query"),
  hostAttrs: ["aria-hidden", "true"],
  hostBindings: /* @__PURE__ */ __name(function TooltipComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mouseleave", /* @__PURE__ */ __name(function TooltipComponent_mouseleave_HostBindingHandler($event) {
        return ctx._handleMouseLeave($event);
      }, "TooltipComponent_mouseleave_HostBindingHandler"));
    }
  }, "TooltipComponent_HostBindings"),
  decls: 4,
  vars: 4,
  consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
  template: /* @__PURE__ */ __name(function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275listener("animationend", /* @__PURE__ */ __name(function TooltipComponent_Template_div_animationend_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._handleAnimationEnd($event));
      }, "TooltipComponent_Template_div_animationend_0_listener"));
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("mdc-tooltip--multiline", ctx._isMultiline);
      \u0275\u0275property("ngClass", ctx.tooltipClass);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.message);
    }
  }, "TooltipComponent_Template"),
  dependencies: [NgClass],
  styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var TooltipComponent = _TooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "mat-tooltip-component",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      },
      imports: [NgClass],
      template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n',
      styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n']
    }]
  }], () => [], {
    _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/tooltip-module.mjs
var _MatTooltipModule = class _MatTooltipModule {
};
__name(_MatTooltipModule, "MatTooltipModule");
__publicField(_MatTooltipModule, "\u0275fac", /* @__PURE__ */ __name(function MatTooltipModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTooltipModule)();
}, "MatTooltipModule_Factory"));
__publicField(_MatTooltipModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatTooltipModule,
  imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
  exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule]
}));
__publicField(_MatTooltipModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule]
}));
var MatTooltipModule = _MatTooltipModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@algolia/requester-browser-xhr/dist/requester.xhr.js
function m() {
  function r(t) {
    return new Promise((s) => {
      let e = new XMLHttpRequest();
      e.open(t.method, t.url, true), Object.keys(t.headers).forEach((n) => e.setRequestHeader(n, t.headers[n]));
      let i = /* @__PURE__ */ __name((n, a) => setTimeout(() => {
        e.abort(), s({ status: 0, content: a, isTimedOut: true });
      }, n), "i"), u = i(t.connectTimeout, "Connection timeout"), o;
      e.onreadystatechange = () => {
        e.readyState > e.OPENED && o === void 0 && (clearTimeout(u), o = i(t.responseTimeout, "Socket timeout"));
      }, e.onerror = () => {
        e.status === 0 && (clearTimeout(u), clearTimeout(o), s({ content: e.responseText || "Network request failed", status: e.status, isTimedOut: false }));
      }, e.onload = () => {
        clearTimeout(u), clearTimeout(o), s({ content: e.responseText, status: e.status, isTimedOut: false });
      }, e.send(t.data);
    });
  }
  __name(r, "r");
  return { send: r };
}
__name(m, "m");

// node_modules/@algolia/client-common/dist/common.js
function createBrowserLocalStorageCache(options) {
  let storage;
  const namespaceKey = `algolia-client-js-${options.key}`;
  function getStorage2() {
    if (storage === void 0) {
      storage = options.localStorage || window.localStorage;
    }
    return storage;
  }
  __name(getStorage2, "getStorage");
  function getNamespace() {
    return JSON.parse(getStorage2().getItem(namespaceKey) || "{}");
  }
  __name(getNamespace, "getNamespace");
  function setNamespace(namespace) {
    getStorage2().setItem(namespaceKey, JSON.stringify(namespace));
  }
  __name(setNamespace, "setNamespace");
  function removeOutdatedCacheItems() {
    const timeToLive = options.timeToLive ? options.timeToLive * 1e3 : null;
    const namespace = getNamespace();
    const filteredNamespaceWithoutOldFormattedCacheItems = Object.fromEntries(
      Object.entries(namespace).filter(([, cacheItem]) => {
        return cacheItem.timestamp !== void 0;
      })
    );
    setNamespace(filteredNamespaceWithoutOldFormattedCacheItems);
    if (!timeToLive) {
      return;
    }
    const filteredNamespaceWithoutExpiredItems = Object.fromEntries(
      Object.entries(filteredNamespaceWithoutOldFormattedCacheItems).filter(([, cacheItem]) => {
        const currentTimestamp = (/* @__PURE__ */ new Date()).getTime();
        const isExpired = cacheItem.timestamp + timeToLive < currentTimestamp;
        return !isExpired;
      })
    );
    setNamespace(filteredNamespaceWithoutExpiredItems);
  }
  __name(removeOutdatedCacheItems, "removeOutdatedCacheItems");
  return {
    get(key, defaultValue, events = {
      miss: /* @__PURE__ */ __name(() => Promise.resolve(), "miss")
    }) {
      return Promise.resolve().then(() => {
        removeOutdatedCacheItems();
        return getNamespace()[JSON.stringify(key)];
      }).then((value) => {
        return Promise.all([value ? value.value : defaultValue(), value !== void 0]);
      }).then(([value, exists]) => {
        return Promise.all([value, exists || events.miss(value)]);
      }).then(([value]) => value);
    },
    set(key, value) {
      return Promise.resolve().then(() => {
        const namespace = getNamespace();
        namespace[JSON.stringify(key)] = {
          timestamp: (/* @__PURE__ */ new Date()).getTime(),
          value
        };
        getStorage2().setItem(namespaceKey, JSON.stringify(namespace));
        return value;
      });
    },
    delete(key) {
      return Promise.resolve().then(() => {
        const namespace = getNamespace();
        delete namespace[JSON.stringify(key)];
        getStorage2().setItem(namespaceKey, JSON.stringify(namespace));
      });
    },
    clear() {
      return Promise.resolve().then(() => {
        getStorage2().removeItem(namespaceKey);
      });
    }
  };
}
__name(createBrowserLocalStorageCache, "createBrowserLocalStorageCache");
function createNullCache() {
  return {
    get(_key, defaultValue, events = {
      miss: /* @__PURE__ */ __name(() => Promise.resolve(), "miss")
    }) {
      const value = defaultValue();
      return value.then((result) => Promise.all([result, events.miss(result)])).then(([result]) => result);
    },
    set(_key, value) {
      return Promise.resolve(value);
    },
    delete(_key) {
      return Promise.resolve();
    },
    clear() {
      return Promise.resolve();
    }
  };
}
__name(createNullCache, "createNullCache");
function createFallbackableCache(options) {
  const caches = [...options.caches];
  const current = caches.shift();
  if (current === void 0) {
    return createNullCache();
  }
  return {
    get(key, defaultValue, events = {
      miss: /* @__PURE__ */ __name(() => Promise.resolve(), "miss")
    }) {
      return current.get(key, defaultValue, events).catch(() => {
        return createFallbackableCache({ caches }).get(key, defaultValue, events);
      });
    },
    set(key, value) {
      return current.set(key, value).catch(() => {
        return createFallbackableCache({ caches }).set(key, value);
      });
    },
    delete(key) {
      return current.delete(key).catch(() => {
        return createFallbackableCache({ caches }).delete(key);
      });
    },
    clear() {
      return current.clear().catch(() => {
        return createFallbackableCache({ caches }).clear();
      });
    }
  };
}
__name(createFallbackableCache, "createFallbackableCache");
function createMemoryCache(options = { serializable: true }) {
  let cache = {};
  return {
    get(key, defaultValue, events = {
      miss: /* @__PURE__ */ __name(() => Promise.resolve(), "miss")
    }) {
      const keyAsString = JSON.stringify(key);
      if (keyAsString in cache) {
        return Promise.resolve(options.serializable ? JSON.parse(cache[keyAsString]) : cache[keyAsString]);
      }
      const promise = defaultValue();
      return promise.then((value) => events.miss(value)).then(() => promise);
    },
    set(key, value) {
      cache[JSON.stringify(key)] = options.serializable ? JSON.stringify(value) : value;
      return Promise.resolve(value);
    },
    delete(key) {
      delete cache[JSON.stringify(key)];
      return Promise.resolve();
    },
    clear() {
      cache = {};
      return Promise.resolve();
    }
  };
}
__name(createMemoryCache, "createMemoryCache");
function createAlgoliaAgent(version) {
  const algoliaAgent = {
    value: `Algolia for JavaScript (${version})`,
    add(options) {
      const addedAlgoliaAgent = `; ${options.segment}${options.version !== void 0 ? ` (${options.version})` : ""}`;
      if (algoliaAgent.value.indexOf(addedAlgoliaAgent) === -1) {
        algoliaAgent.value = `${algoliaAgent.value}${addedAlgoliaAgent}`;
      }
      return algoliaAgent;
    }
  };
  return algoliaAgent;
}
__name(createAlgoliaAgent, "createAlgoliaAgent");
function createAuth(appId, apiKey, authMode = "WithinHeaders") {
  const credentials = {
    "x-algolia-api-key": apiKey,
    "x-algolia-application-id": appId
  };
  return {
    headers() {
      return authMode === "WithinHeaders" ? credentials : {};
    },
    queryParameters() {
      return authMode === "WithinQueryParameters" ? credentials : {};
    }
  };
}
__name(createAuth, "createAuth");
function getAlgoliaAgent({ algoliaAgents, client, version }) {
  const defaultAlgoliaAgent = createAlgoliaAgent(version).add({
    segment: client,
    version
  });
  algoliaAgents.forEach((algoliaAgent) => defaultAlgoliaAgent.add(algoliaAgent));
  return defaultAlgoliaAgent;
}
__name(getAlgoliaAgent, "getAlgoliaAgent");
function createNullLogger() {
  return {
    debug(_message, _args) {
      return Promise.resolve();
    },
    info(_message, _args) {
      return Promise.resolve();
    },
    error(_message, _args) {
      return Promise.resolve();
    }
  };
}
__name(createNullLogger, "createNullLogger");
var EXPIRATION_DELAY = 2 * 60 * 1e3;
function createStatefulHost(host, status = "up") {
  const lastUpdate = Date.now();
  function isUp() {
    return status === "up" || Date.now() - lastUpdate > EXPIRATION_DELAY;
  }
  __name(isUp, "isUp");
  function isTimedOut() {
    return status === "timed out" && Date.now() - lastUpdate <= EXPIRATION_DELAY;
  }
  __name(isTimedOut, "isTimedOut");
  return __spreadProps(__spreadValues({}, host), { status, lastUpdate, isUp, isTimedOut });
}
__name(createStatefulHost, "createStatefulHost");
var _a;
var AlgoliaError = (_a = class extends Error {
  name = "AlgoliaError";
  constructor(message, name) {
    super(message);
    if (name) {
      this.name = name;
    }
  }
}, __name(_a, "AlgoliaError"), _a);
var _a2;
var ErrorWithStackTrace = (_a2 = class extends AlgoliaError {
  stackTrace;
  constructor(message, stackTrace, name) {
    super(message, name);
    this.stackTrace = stackTrace;
  }
}, __name(_a2, "ErrorWithStackTrace"), _a2);
var _a3;
var RetryError = (_a3 = class extends ErrorWithStackTrace {
  constructor(stackTrace) {
    super(
      "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.",
      stackTrace,
      "RetryError"
    );
  }
}, __name(_a3, "RetryError"), _a3);
var _a4;
var ApiError = (_a4 = class extends ErrorWithStackTrace {
  status;
  constructor(message, status, stackTrace, name = "ApiError") {
    super(message, stackTrace, name);
    this.status = status;
  }
}, __name(_a4, "ApiError"), _a4);
var _a5;
var DeserializationError = (_a5 = class extends AlgoliaError {
  response;
  constructor(message, response) {
    super(message, "DeserializationError");
    this.response = response;
  }
}, __name(_a5, "DeserializationError"), _a5);
var _a6;
var DetailedApiError = (_a6 = class extends ApiError {
  error;
  constructor(message, status, error, stackTrace) {
    super(message, status, stackTrace, "DetailedApiError");
    this.error = error;
  }
}, __name(_a6, "DetailedApiError"), _a6);
function shuffle(array) {
  const shuffledArray = array;
  for (let c = array.length - 1; c > 0; c--) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = array[c];
    shuffledArray[c] = array[b];
    shuffledArray[b] = a;
  }
  return shuffledArray;
}
__name(shuffle, "shuffle");
function serializeUrl(host, path, queryParameters) {
  const queryParametersAsString = serializeQueryParameters(queryParameters);
  let url = `${host.protocol}://${host.url}${host.port ? `:${host.port}` : ""}/${path.charAt(0) === "/" ? path.substring(1) : path}`;
  if (queryParametersAsString.length) {
    url += `?${queryParametersAsString}`;
  }
  return url;
}
__name(serializeUrl, "serializeUrl");
function serializeQueryParameters(parameters) {
  return Object.keys(parameters).filter((key) => parameters[key] !== void 0).sort().map(
    (key) => `${key}=${encodeURIComponent(
      Object.prototype.toString.call(parameters[key]) === "[object Array]" ? parameters[key].join(",") : parameters[key]
    ).replace(/\+/g, "%20")}`
  ).join("&");
}
__name(serializeQueryParameters, "serializeQueryParameters");
function serializeData(request, requestOptions) {
  if (request.method === "GET" || request.data === void 0 && requestOptions.data === void 0) {
    return void 0;
  }
  const data = Array.isArray(request.data) ? request.data : __spreadValues(__spreadValues({}, request.data), requestOptions.data);
  return JSON.stringify(data);
}
__name(serializeData, "serializeData");
function serializeHeaders(baseHeaders, requestHeaders, requestOptionsHeaders) {
  const headers = __spreadValues(__spreadValues(__spreadValues({
    Accept: "application/json"
  }, baseHeaders), requestHeaders), requestOptionsHeaders);
  const serializedHeaders = {};
  Object.keys(headers).forEach((header) => {
    const value = headers[header];
    serializedHeaders[header.toLowerCase()] = value;
  });
  return serializedHeaders;
}
__name(serializeHeaders, "serializeHeaders");
function deserializeSuccess(response) {
  try {
    return JSON.parse(response.content);
  } catch (e) {
    throw new DeserializationError(e.message, response);
  }
}
__name(deserializeSuccess, "deserializeSuccess");
function deserializeFailure({ content, status }, stackFrame) {
  try {
    const parsed = JSON.parse(content);
    if ("error" in parsed) {
      return new DetailedApiError(parsed.message, status, parsed.error, stackFrame);
    }
    return new ApiError(parsed.message, status, stackFrame);
  } catch {
  }
  return new ApiError(content, status, stackFrame);
}
__name(deserializeFailure, "deserializeFailure");
function isNetworkError({ isTimedOut, status }) {
  return !isTimedOut && ~~status === 0;
}
__name(isNetworkError, "isNetworkError");
function isRetryable({ isTimedOut, status }) {
  return isTimedOut || isNetworkError({ isTimedOut, status }) || ~~(status / 100) !== 2 && ~~(status / 100) !== 4;
}
__name(isRetryable, "isRetryable");
function isSuccess({ status }) {
  return ~~(status / 100) === 2;
}
__name(isSuccess, "isSuccess");
function stackTraceWithoutCredentials(stackTrace) {
  return stackTrace.map((stackFrame) => stackFrameWithoutCredentials(stackFrame));
}
__name(stackTraceWithoutCredentials, "stackTraceWithoutCredentials");
function stackFrameWithoutCredentials(stackFrame) {
  const modifiedHeaders = stackFrame.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return __spreadProps(__spreadValues({}, stackFrame), {
    request: __spreadProps(__spreadValues({}, stackFrame.request), {
      headers: __spreadValues(__spreadValues({}, stackFrame.request.headers), modifiedHeaders)
    })
  });
}
__name(stackFrameWithoutCredentials, "stackFrameWithoutCredentials");
function createTransporter({
  hosts,
  hostsCache,
  baseHeaders,
  logger,
  baseQueryParameters,
  algoliaAgent,
  timeouts,
  requester,
  requestsCache,
  responsesCache
}) {
  async function createRetryableOptions(compatibleHosts) {
    const statefulHosts = await Promise.all(
      compatibleHosts.map((compatibleHost) => {
        return hostsCache.get(compatibleHost, () => {
          return Promise.resolve(createStatefulHost(compatibleHost));
        });
      })
    );
    const hostsUp = statefulHosts.filter((host) => host.isUp());
    const hostsTimedOut = statefulHosts.filter((host) => host.isTimedOut());
    const hostsAvailable = [...hostsUp, ...hostsTimedOut];
    const compatibleHostsAvailable = hostsAvailable.length > 0 ? hostsAvailable : compatibleHosts;
    return {
      hosts: compatibleHostsAvailable,
      getTimeout(timeoutsCount, baseTimeout) {
        const timeoutMultiplier = hostsTimedOut.length === 0 && timeoutsCount === 0 ? 1 : hostsTimedOut.length + 3 + timeoutsCount;
        return timeoutMultiplier * baseTimeout;
      }
    };
  }
  __name(createRetryableOptions, "createRetryableOptions");
  async function retryableRequest(request, requestOptions, isRead = true) {
    const stackTrace = [];
    const data = serializeData(request, requestOptions);
    const headers = serializeHeaders(baseHeaders, request.headers, requestOptions.headers);
    const dataQueryParameters = request.method === "GET" ? __spreadValues(__spreadValues({}, request.data), requestOptions.data) : {};
    const queryParameters = __spreadValues(__spreadValues(__spreadValues({}, baseQueryParameters), request.queryParameters), dataQueryParameters);
    if (algoliaAgent.value) {
      queryParameters["x-algolia-agent"] = algoliaAgent.value;
    }
    if (requestOptions && requestOptions.queryParameters) {
      for (const key of Object.keys(requestOptions.queryParameters)) {
        if (!requestOptions.queryParameters[key] || Object.prototype.toString.call(requestOptions.queryParameters[key]) === "[object Object]") {
          queryParameters[key] = requestOptions.queryParameters[key];
        } else {
          queryParameters[key] = requestOptions.queryParameters[key].toString();
        }
      }
    }
    let timeoutsCount = 0;
    const retry = /* @__PURE__ */ __name(async (retryableHosts, getTimeout) => {
      const host = retryableHosts.pop();
      if (host === void 0) {
        throw new RetryError(stackTraceWithoutCredentials(stackTrace));
      }
      const timeout = __spreadValues(__spreadValues({}, timeouts), requestOptions.timeouts);
      const payload = {
        data,
        headers,
        method: request.method,
        url: serializeUrl(host, request.path, queryParameters),
        connectTimeout: getTimeout(timeoutsCount, timeout.connect),
        responseTimeout: getTimeout(timeoutsCount, isRead ? timeout.read : timeout.write)
      };
      const pushToStackTrace = /* @__PURE__ */ __name((response2) => {
        const stackFrame = {
          request: payload,
          response: response2,
          host,
          triesLeft: retryableHosts.length
        };
        stackTrace.push(stackFrame);
        return stackFrame;
      }, "pushToStackTrace");
      const response = await requester.send(payload);
      if (isRetryable(response)) {
        const stackFrame = pushToStackTrace(response);
        if (response.isTimedOut) {
          timeoutsCount++;
        }
        logger.info("Retryable failure", stackFrameWithoutCredentials(stackFrame));
        await hostsCache.set(host, createStatefulHost(host, response.isTimedOut ? "timed out" : "down"));
        return retry(retryableHosts, getTimeout);
      }
      if (isSuccess(response)) {
        return deserializeSuccess(response);
      }
      pushToStackTrace(response);
      throw deserializeFailure(response, stackTrace);
    }, "retry");
    const compatibleHosts = hosts.filter(
      (host) => host.accept === "readWrite" || (isRead ? host.accept === "read" : host.accept === "write")
    );
    const options = await createRetryableOptions(compatibleHosts);
    return retry([...options.hosts].reverse(), options.getTimeout);
  }
  __name(retryableRequest, "retryableRequest");
  function createRequest(request, requestOptions = {}) {
    const isRead = request.useReadTransporter || request.method === "GET";
    if (!isRead) {
      return retryableRequest(request, requestOptions, isRead);
    }
    const createRetryableRequest = /* @__PURE__ */ __name(() => {
      return retryableRequest(request, requestOptions);
    }, "createRetryableRequest");
    const cacheable = requestOptions.cacheable || request.cacheable;
    if (cacheable !== true) {
      return createRetryableRequest();
    }
    const key = {
      request,
      requestOptions,
      transporter: {
        queryParameters: baseQueryParameters,
        headers: baseHeaders
      }
    };
    return responsesCache.get(
      key,
      () => {
        return requestsCache.get(
          key,
          () => (
            /**
             * Finally, if there is no request in progress with the same key,
             * this `createRetryableRequest()` will actually trigger the
             * retryable request.
             */
            requestsCache.set(key, createRetryableRequest()).then(
              (response) => Promise.all([requestsCache.delete(key), response]),
              (err) => Promise.all([requestsCache.delete(key), Promise.reject(err)])
            ).then(([_, response]) => response)
          )
        );
      },
      {
        /**
         * Of course, once we get this response back from the server, we
         * tell response cache to actually store the received response
         * to be used later.
         */
        miss: /* @__PURE__ */ __name((response) => responsesCache.set(key, response), "miss")
      }
    );
  }
  __name(createRequest, "createRequest");
  return {
    hostsCache,
    requester,
    timeouts,
    logger,
    algoliaAgent,
    baseHeaders,
    baseQueryParameters,
    hosts,
    request: createRequest,
    requestsCache,
    responsesCache
  };
}
__name(createTransporter, "createTransporter");

// node_modules/algoliasearch/dist/lite/builds/browser.js
var apiClientVersion = "5.35.0";
function getDefaultHosts(appId) {
  return [
    {
      url: `${appId}-dsn.algolia.net`,
      accept: "read",
      protocol: "https"
    },
    {
      url: `${appId}.algolia.net`,
      accept: "write",
      protocol: "https"
    }
  ].concat(
    shuffle([
      {
        url: `${appId}-1.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-2.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-3.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      }
    ])
  );
}
__name(getDefaultHosts, "getDefaultHosts");
function createLiteClient(_a7) {
  var _b = _a7, {
    appId: appIdOption,
    apiKey: apiKeyOption,
    authMode,
    algoliaAgents
  } = _b, options = __objRest(_b, [
    "appId",
    "apiKey",
    "authMode",
    "algoliaAgents"
  ]);
  const auth2 = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter(__spreadProps(__spreadValues({
    hosts: getDefaultHosts(appIdOption)
  }, options), {
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Lite",
      version: apiClientVersion
    }),
    baseHeaders: __spreadValues(__spreadValues({
      "content-type": "text/plain"
    }, auth2.headers()), options.baseHeaders),
    baseQueryParameters: __spreadValues(__spreadValues({}, auth2.queryParameters()), options.baseQueryParameters)
  }));
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * The `apiKey` currently in use.
     */
    apiKey: apiKeyOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * Helper: calls the `search` method but with certainty that we will only request Algolia records (hits) and not facets.
     * Disclaimer: We don't assert that the parameters you pass to this method only contains `hits` requests to prevent impacting search performances, this helper is purely for typing purposes.
     *
     * @summary Search multiple indices for `hits`.
     * @param searchMethodParams - Query requests and strategies. Results will be received in the same order as the queries.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchForHits(searchMethodParams, requestOptions) {
      return this.search(searchMethodParams, requestOptions);
    },
    /**
     * Helper: calls the `search` method but with certainty that we will only request Algolia facets and not records (hits).
     * Disclaimer: We don't assert that the parameters you pass to this method only contains `facets` requests to prevent impacting search performances, this helper is purely for typing purposes.
     *
     * @summary Search multiple indices for `facets`.
     * @param searchMethodParams - Query requests and strategies. Results will be received in the same order as the queries.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchForFacets(searchMethodParams, requestOptions) {
      return this.search(searchMethodParams, requestOptions);
    },
    /**
     * This method lets you send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, for example `1/newFeature`.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves recommendations from selected AI models.
     *
     * Required API Key ACLs:
     *  - search
     * @param getRecommendationsParams - The getRecommendationsParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRecommendations(getRecommendationsParams, requestOptions) {
      if (getRecommendationsParams && Array.isArray(getRecommendationsParams)) {
        const newSignatureRequest = {
          requests: getRecommendationsParams
        };
        getRecommendationsParams = newSignatureRequest;
      }
      if (!getRecommendationsParams) {
        throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");
      }
      if (!getRecommendationsParams.requests) {
        throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");
      }
      const requestPath = "/1/indexes/*/recommendations";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: getRecommendationsParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Sends multiple search requests to one or more indices.  This can be useful in these cases:  - Different indices for different purposes, such as, one index for products, another one for marketing content. - Multiple searches to the same index—for example, with different filters.  Use the helper `searchForHits` or `searchForFacets` to get the results in a more convenient format, if you already know the return type you want.
     *
     * Required API Key ACLs:
     *  - search
     * @param searchMethodParams - Muli-search request body. Results are returned in the same order as the requests.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    search(searchMethodParams, requestOptions) {
      if (searchMethodParams && Array.isArray(searchMethodParams)) {
        const newSignatureRequest = {
          requests: searchMethodParams.map((_a8) => {
            var _b2 = _a8, { params: params2 } = _b2, legacyRequest = __objRest(_b2, ["params"]);
            if (legacyRequest.type === "facet") {
              return __spreadProps(__spreadValues(__spreadValues({}, legacyRequest), params2), {
                type: "facet"
              });
            }
            return __spreadProps(__spreadValues(__spreadValues({}, legacyRequest), params2), {
              facet: void 0,
              maxFacetHits: void 0,
              facetQuery: void 0
            });
          })
        };
        searchMethodParams = newSignatureRequest;
      }
      if (!searchMethodParams) {
        throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
      }
      if (!searchMethodParams.requests) {
        throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
      }
      const requestPath = "/1/indexes/*/queries";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchMethodParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    }
  };
}
__name(createLiteClient, "createLiteClient");
function liteClient(appId, apiKey, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  return createLiteClient(__spreadValues({
    appId,
    apiKey,
    timeouts: {
      connect: 1e3,
      read: 2e3,
      write: 3e4
    },
    logger: createNullLogger(),
    requester: m(),
    algoliaAgents: [{ segment: "Browser" }],
    authMode: "WithinQueryParameters",
    responsesCache: createMemoryCache(),
    requestsCache: createMemoryCache({ serializable: false }),
    hostsCache: createFallbackableCache({
      caches: [createBrowserLocalStorageCache({ key: `${apiClientVersion}-${appId}` }), createMemoryCache()]
    })
  }, options));
}
__name(liteClient, "liteClient");

// node_modules/@angular/docs/fesm2022/shared-docs.mjs
var _c03 = ["*"];
var _forTrack0 = /* @__PURE__ */ __name(($index, $item) => $item.id, "_forTrack0");
function TableOfContents_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("docs-toc-item-h2", item_r1.level === ctx_r1.TableOfContentsLevel.H2)("docs-toc-item-h3", item_r1.level === ctx_r1.TableOfContentsLevel.H3);
    \u0275\u0275advance();
    \u0275\u0275classProp("docs-faceted-list-item-active", item_r1.id === ctx_r1.activeItemId());
    \u0275\u0275property("href", ctx_r1.location.path() + "#" + item_r1.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.title, " ");
  }
}
__name(TableOfContents_For_7_Template, "TableOfContents_For_7_Template");
function Breadcrumb_For_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", breadcrumb_r1.path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(breadcrumb_r1.label);
  }
}
__name(Breadcrumb_For_1_Conditional_1_Conditional_0_Template, "Breadcrumb_For_1_Conditional_1_Conditional_0_Template");
function Breadcrumb_For_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", "/" + breadcrumb_r1.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(breadcrumb_r1.label);
  }
}
__name(Breadcrumb_For_1_Conditional_1_Conditional_1_Template, "Breadcrumb_For_1_Conditional_1_Conditional_1_Template");
function Breadcrumb_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Breadcrumb_For_1_Conditional_1_Conditional_0_Template, 2, 2, "a", 1)(1, Breadcrumb_For_1_Conditional_1_Conditional_1_Template, 2, 2, "a", 2);
  }
  if (rf & 2) {
    const breadcrumb_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(breadcrumb_r1.isExternal ? 0 : 1);
  }
}
__name(Breadcrumb_For_1_Conditional_1_Template, "Breadcrumb_For_1_Conditional_1_Template");
function Breadcrumb_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(breadcrumb_r1.label);
  }
}
__name(Breadcrumb_For_1_Conditional_2_Template, "Breadcrumb_For_1_Conditional_2_Template");
function Breadcrumb_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, Breadcrumb_For_1_Conditional_1_Template, 2, 1)(2, Breadcrumb_For_1_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(breadcrumb_r1.path ? 1 : 2);
  }
}
__name(Breadcrumb_For_1_Template, "Breadcrumb_For_1_Template");
var _c12 = ["docs-copy-source-code", ""];
var _c22 = ["codeTabs"];
function ExampleViewer_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.exampleMetadata()) == null ? null : tmp_3_0.title);
  }
}
__name(ExampleViewer_Conditional_2_Conditional_0_Template, "ExampleViewer_Conditional_2_Conditional_0_Template");
function ExampleViewer_Conditional_2_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 15);
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    \u0275\u0275property("label", tab_r3.name);
  }
}
__name(ExampleViewer_Conditional_2_Conditional_1_For_3_Template, "ExampleViewer_Conditional_2_Conditional_1_For_3_Template");
function ExampleViewer_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab-group", 14, 1);
    \u0275\u0275repeaterCreate(2, ExampleViewer_Conditional_2_Conditional_1_For_3_Template, 1, 1, "mat-tab", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.tabs());
  }
}
__name(ExampleViewer_Conditional_2_Conditional_1_Template, "ExampleViewer_Conditional_2_Conditional_1_Template");
function ExampleViewer_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExampleViewer_Conditional_2_Conditional_0_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(1, ExampleViewer_Conditional_2_Conditional_1_Template, 4, 0, "mat-tab-group", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.view() === ctx_r1.CodeExampleViewMode.SNIPPET ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === ctx_r1.CodeExampleViewMode.MULTI_FILE ? 1 : -1);
  }
}
__name(ExampleViewer_Conditional_2_Template, "ExampleViewer_Conditional_2_Template");
function ExampleViewer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "\xA0");
    \u0275\u0275elementEnd();
  }
}
__name(ExampleViewer_Conditional_3_Template, "ExampleViewer_Conditional_3_Template");
function ExampleViewer_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(ExampleViewer_ng_container_12_Template, "ExampleViewer_ng_container_12_Template");
function ExampleViewer_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
__name(ExampleViewer_Conditional_13_Conditional_2_Template, "ExampleViewer_Conditional_13_Conditional_2_Template");
function ExampleViewer_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
__name(ExampleViewer_Conditional_13_Conditional_3_Template, "ExampleViewer_Conditional_13_Conditional_3_Template");
function ExampleViewer_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ExampleViewer_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleExampleVisibility());
    }, "ExampleViewer_Conditional_13_Template_button_click_0_listener"));
    \u0275\u0275elementStart(1, "i", 4);
    \u0275\u0275conditionalCreate(2, ExampleViewer_Conditional_13_Conditional_2_Template, 2, 0, ":svg:svg", 17)(3, ExampleViewer_Conditional_13_Conditional_3_Template, 2, 0, ":svg:svg", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275interpolate1("", ctx_r1.expanded() ? "Collapse" : "Expand", " example"));
    \u0275\u0275attribute("aria-label", (ctx_r1.expanded() ? "Collapse" : "Expand") + " code example");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.expanded() ? 2 : 3);
  }
}
__name(ExampleViewer_Conditional_13_Template, "ExampleViewer_Conditional_13_Template");
function ExampleViewer_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
  if (rf & 2) {
    \u0275\u0275property("innerHTML", ctx, \u0275\u0275sanitizeHtml);
  }
}
__name(ExampleViewer_Conditional_14_Conditional_2_Template, "ExampleViewer_Conditional_14_Conditional_2_Template");
function ExampleViewer_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "button", 22);
    \u0275\u0275conditionalCreate(2, ExampleViewer_Conditional_14_Conditional_2_Template, 1, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("docs-example-viewer-snippet", ctx_r1.view() === ctx_r1.CodeExampleViewMode.SNIPPET)("docs-example-viewer-multi-file", ctx_r1.view() === ctx_r1.CodeExampleViewMode.MULTI_FILE);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = (tmp_4_0 = ctx_r1.snippetCode()) == null ? null : tmp_4_0.sanitizedContent) ? 2 : -1, tmp_4_0);
  }
}
__name(ExampleViewer_Conditional_14_Template, "ExampleViewer_Conditional_14_Template");
function ExampleViewer_Conditional_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(ExampleViewer_Conditional_15_ng_container_1_Template, "ExampleViewer_Conditional_15_ng_container_1_Template");
function ExampleViewer_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ExampleViewer_Conditional_15_ng_container_1_Template, 1, 0, "ng-container", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngComponentOutlet", ctx_r1.exampleComponent);
  }
}
__name(ExampleViewer_Conditional_15_Template, "ExampleViewer_Conditional_15_Template");
function ExampleViewer_ng_template_16_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25)(1, "i", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.githubUrl(), \u0275\u0275sanitizeUrl);
  }
}
__name(ExampleViewer_ng_template_16_Conditional_0_Conditional_0_Template, "ExampleViewer_ng_template_16_Conditional_0_Conditional_0_Template");
function ExampleViewer_ng_template_16_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26)(1, "i", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 28);
    \u0275\u0275element(3, "path", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.stackblitzUrl(), \u0275\u0275sanitizeUrl);
  }
}
__name(ExampleViewer_ng_template_16_Conditional_0_Conditional_1_Template, "ExampleViewer_ng_template_16_Conditional_0_Conditional_1_Template");
function ExampleViewer_ng_template_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExampleViewer_ng_template_16_Conditional_0_Conditional_0_Template, 4, 1, "a", 25);
    \u0275\u0275conditionalCreate(1, ExampleViewer_ng_template_16_Conditional_0_Conditional_1_Template, 4, 1, "a", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.githubUrl() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stackblitzUrl() ? 1 : -1);
  }
}
__name(ExampleViewer_ng_template_16_Conditional_0_Template, "ExampleViewer_ng_template_16_Conditional_0_Template");
function ExampleViewer_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExampleViewer_ng_template_16_Conditional_0_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.exampleComponent ? 0 : -1);
  }
}
__name(ExampleViewer_ng_template_16_Template, "ExampleViewer_ng_template_16_Template");
function CookiePopup_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "p");
    \u0275\u0275text(2, "\u672C\u7F51\u7AD9\u4F7F\u7528 Google \u7684 Cookie \u6765\u63D0\u4F9B\u670D\u52A1\u5E76\u5206\u6790\u6D41\u91CF\u3002");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div")(4, "a", 1)(5, "button", 2);
    \u0275\u0275text(6, " \u4E86\u89E3\u66F4\u591A ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "button", 3);
    \u0275\u0275domListener("click", /* @__PURE__ */ __name(function CookiePopup_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.accept());
    }, "CookiePopup_Conditional_0_Template_button_click_7_listener"));
    \u0275\u0275text(8, " \u597D\u7684\uFF0C\u6211\u77E5\u9053\u4E86 ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275attribute("text", "\u4E86\u89E3\u66F4\u591A");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("text", "\u597D\u7684\uFF0C\u6211\u77E5\u9053\u4E86");
  }
}
__name(CookiePopup_Conditional_0_Template, "CookiePopup_Conditional_0_Template");
var _c32 = /* @__PURE__ */ __name((a0) => ({
  $implicit: a0
}), "_c3");
var _c42 = /* @__PURE__ */ __name(() => ({
  exact: true
}), "_c4");
function NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_ng_container_3_Template, "NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_ng_container_3_Template");
function NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "docs-icon");
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_Conditional_4_Template, "NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_Conditional_4_Template");
function NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275template(3, NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_ng_container_3_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_Conditional_4_Template, 2, 0, "docs-icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(2);
    const itemStatus_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("href", item_r1.path, \u0275\u0275sanitizeUrl)("matTooltip", item_r1.label)("matTooltipDisabled", item_r1.label.length < 27)("matTooltipClass", "API-tooltip");
    \u0275\u0275attribute("aria-label", item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("docs-external-link", item_r1.isExternal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemStatus_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c32, item_r1));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.children && item_r1.level > 1 && !item_r1.isExpanded ? 4 : -1);
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_Template, "NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_Template");
function NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_ng_container_3_Template, "NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_ng_container_3_Template");
function NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "docs-icon");
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Conditional_4_Template, "NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Conditional_4_Template");
function NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.emitClickOnLink());
    }, "NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Template_a_click_0_listener"));
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275template(3, NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Conditional_4_Template, 2, 0, "docs-icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(2);
    const itemStatus_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("routerLink", "/" + item_r1.path)("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c42))("matTooltip", item_r1.label)("matTooltipDisabled", item_r1.label.length < 27)("matTooltipClass", "API-tooltip");
    \u0275\u0275attribute("aria-label", item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemStatus_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c32, item_r1));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.children && !item_r1.isExpanded ? 4 : -1);
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Template, "NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Template");
function NavigationList_ng_template_0_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NavigationList_ng_template_0_For_2_Conditional_1_Conditional_0_Template, 5, 13, "a", 5)(1, NavigationList_ng_template_0_For_2_Conditional_1_Conditional_1_Template, 5, 13, "a", 6);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r1.isExternal ? 0 : 1);
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_1_Template, "NavigationList_ng_template_0_For_2_Conditional_1_Template");
function NavigationList_ng_template_0_For_2_Conditional_2_Conditional_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_2_Conditional_0_ng_container_3_Template, "NavigationList_ng_template_0_For_2_Conditional_2_Conditional_0_ng_container_3_Template");
function NavigationList_ng_template_0_For_2_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275template(3, NavigationList_ng_template_0_For_2_Conditional_2_Conditional_0_ng_container_3_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(2);
    const itemStatus_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("matTooltip", item_r1.label)("matTooltipDisabled", item_r1.label.length < 27)("matTooltipClass", "API-tooltip");
    \u0275\u0275attribute("aria-label", item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemStatus_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c32, item_r1));
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_2_Conditional_0_Template, "NavigationList_ng_template_0_For_2_Conditional_2_Conditional_0_Template");
function NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "docs-icon");
    \u0275\u0275text(1, "arrow_back");
    \u0275\u0275elementEnd();
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Conditional_2_Template, "NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Conditional_2_Template");
function NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_ng_container_5_Template, "NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_ng_container_5_Template");
function NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275pipe(1, "isActiveNavigationItem");
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggle(item_r1));
    }, "NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Template_button_click_0_listener"));
    \u0275\u0275conditionalCreate(2, NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Conditional_2_Template, 2, 0, "docs-icon");
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275template(5, NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_ng_container_5_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    const itemStatus_r2 = \u0275\u0275reference(4);
    \u0275\u0275classProp("docs-faceted-list-item-active", \u0275\u0275pipeBind2(1, 18, item_r1, ctx_r3.activeItem()))("docs-expanded-button", item_r1.children && item_r1.level == ctx_r3.collapsableLevel())("docs-not-expanded-button", item_r1.children && item_r1.level === ctx_r3.expandableLevel())("docs-nav-item-has-icon", item_r1.children && item_r1.level === ctx_r3.expandableLevel() && !item_r1.isExpanded);
    \u0275\u0275property("matTooltip", item_r1.label)("matTooltipDisabled", item_r1.label.length < 27)("matTooltipClass", "API-tooltip");
    \u0275\u0275attribute("aria-label", (item_r1.isExpanded ? "\u6536\u8D77" : "\u5C55\u5F00") + " " + item_r1.label)("aria-expanded", item_r1.isExpanded)("aria-label", item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r1.children && item_r1.level === ctx_r3.collapsableLevel() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemStatus_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(21, _c32, item_r1));
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Template, "NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Template");
function NavigationList_ng_template_0_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NavigationList_ng_template_0_For_2_Conditional_2_Conditional_0_Template, 4, 9, "div", 9);
    \u0275\u0275conditionalCreate(1, NavigationList_ng_template_0_For_2_Conditional_2_Conditional_1_Template, 6, 23, "button", 10);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(item_r1.level !== ctx_r3.collapsableLevel() && item_r1.level !== ctx_r3.expandableLevel() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.children && item_r1.level === ctx_r3.expandableLevel() || item_r1.level === ctx_r3.collapsableLevel() ? 1 : -1);
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_2_Template, "NavigationList_ng_template_0_For_2_Conditional_2_Template");
function NavigationList_ng_template_0_For_2_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_3_ng_container_0_Template, "NavigationList_ng_template_0_For_2_Conditional_3_ng_container_0_Template");
function NavigationList_ng_template_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NavigationList_ng_template_0_For_2_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const navigationList_r6 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", navigationList_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c32, item_r1.children));
  }
}
__name(NavigationList_ng_template_0_For_2_Conditional_3_Template, "NavigationList_ng_template_0_For_2_Conditional_3_Template");
function NavigationList_ng_template_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275conditionalCreate(1, NavigationList_ng_template_0_For_2_Conditional_1_Template, 2, 1)(2, NavigationList_ng_template_0_For_2_Conditional_2_Template, 2, 2);
    \u0275\u0275conditionalCreate(3, NavigationList_ng_template_0_For_2_Conditional_3_Template, 1, 4, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.path ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.displayItemsToLevel() > item_r1.level && (item_r1.children == null ? null : item_r1.children.length) > 0 ? 3 : -1);
  }
}
__name(NavigationList_ng_template_0_For_2_Template, "NavigationList_ng_template_0_For_2_Template");
function NavigationList_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, NavigationList_ng_template_0_For_2_Template, 4, 2, "li", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const navigationItems_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("docs-navigation-list-dropdown", ctx_r3.isDropdownView());
    \u0275\u0275advance();
    \u0275\u0275repeater(navigationItems_r7);
  }
}
__name(NavigationList_ng_template_0_Template, "NavigationList_ng_template_0_Template");
function NavigationList_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
__name(NavigationList_ng_container_2_Template, "NavigationList_ng_container_2_Template");
function NavigationList_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
__name(NavigationList_ng_template_3_Conditional_0_Template, "NavigationList_ng_template_3_Conditional_0_Template");
function NavigationList_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Updated");
    \u0275\u0275elementEnd();
  }
}
__name(NavigationList_ng_template_3_Conditional_1_Template, "NavigationList_ng_template_3_Conditional_1_Template");
function NavigationList_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NavigationList_ng_template_3_Conditional_0_Template, 2, 0, "span", 12)(1, NavigationList_ng_template_3_Conditional_1_Template, 2, 0, "span", 13);
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275conditional(item_r8.status === "new" ? 0 : item_r8.status === "updated" ? 1 : -1);
  }
}
__name(NavigationList_ng_template_3_Template, "NavigationList_ng_template_3_Template");
function Select_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("value", item_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
__name(Select_For_2_Template, "Select_For_2_Template");
var _c52 = ["inputRef"];
function TextField_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "docs-icon", 1);
    \u0275\u0275text(1, "search");
    \u0275\u0275elementEnd();
  }
}
__name(TextField_Conditional_0_Template, "TextField_Conditional_0_Template");
function TextField_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function TextField_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearTextField());
    }, "TextField_Conditional_3_Template_button_click_0_listener"));
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r3.resetLabel());
    \u0275\u0275attribute("aria-label", ctx_r3.resetLabel());
  }
}
__name(TextField_Conditional_3_Template, "TextField_Conditional_3_Template");
function SearchHistoryComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275listener("mouseenter", /* @__PURE__ */ __name(function SearchHistoryComponent_Conditional_1_For_4_Template_li_mouseenter_0_listener($event) {
      const \u0275$index_8_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMouseEnter($event, \u0275$index_8_r2));
    }, "SearchHistoryComponent_Conditional_1_For_4_Template_li_mouseenter_0_listener"));
    \u0275\u0275elementStart(1, "a", 4);
    \u0275\u0275pipe(2, "relativeLink");
    \u0275\u0275pipe(3, "relativeLink");
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function SearchHistoryComponent_Conditional_1_For_4_Template_a_click_1_listener() {
      const item_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.history.addItem(item_r4));
    }, "SearchHistoryComponent_Conditional_1_For_4_Template_a_click_1_listener"));
    \u0275\u0275elementStart(4, "i", 5);
    \u0275\u0275text(5, " history ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function SearchHistoryComponent_Conditional_1_For_4_Template_button_click_7_listener() {
      const item_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.history.makeFavorite(item_r4));
    }, "SearchHistoryComponent_Conditional_1_For_4_Template_button_click_7_listener"));
    \u0275\u0275elementStart(8, "i", 5);
    \u0275\u0275text(9, " star ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function SearchHistoryComponent_Conditional_1_For_4_Template_button_click_10_listener() {
      const item_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.history.removeItem(item_r4));
    }, "SearchHistoryComponent_Conditional_1_For_4_Template_button_click_10_listener"));
    \u0275\u0275elementStart(11, "i", 5);
    \u0275\u0275text(12, " close ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("item", item_r4);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind2(2, 4, "/" + item_r4.url, "pathname"))("fragment", \u0275\u0275pipeBind2(3, 7, item_r4.url, "hash"));
    \u0275\u0275advance(5);
    \u0275\u0275property("innerHTML", item_r4.labelHtml, \u0275\u0275sanitizeHtml);
  }
}
__name(SearchHistoryComponent_Conditional_1_For_4_Template, "SearchHistoryComponent_Conditional_1_For_4_Template");
function SearchHistoryComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Recent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 1);
    \u0275\u0275repeaterCreate(3, SearchHistoryComponent_Conditional_1_For_4_Template, 13, 10, "li", 2, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const items_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(items_r5.recent);
  }
}
__name(SearchHistoryComponent_Conditional_1_Template, "SearchHistoryComponent_Conditional_1_Template");
function SearchHistoryComponent_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275listener("mouseenter", /* @__PURE__ */ __name(function SearchHistoryComponent_Conditional_2_For_4_Template_li_mouseenter_0_listener($event) {
      const \u0275$index_36_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      const items_r5 = \u0275\u0275readContextLet(0);
      return \u0275\u0275resetView(ctx_r2.onMouseEnter($event, items_r5.recent.length + \u0275$index_36_r7));
    }, "SearchHistoryComponent_Conditional_2_For_4_Template_li_mouseenter_0_listener"));
    \u0275\u0275elementStart(1, "a", 10);
    \u0275\u0275pipe(2, "relativeLink");
    \u0275\u0275pipe(3, "relativeLink");
    \u0275\u0275elementStart(4, "i", 5);
    \u0275\u0275text(5, " star ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function SearchHistoryComponent_Conditional_2_For_4_Template_button_click_7_listener() {
      const item_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.history.removeItem(item_r8));
    }, "SearchHistoryComponent_Conditional_2_For_4_Template_button_click_7_listener"));
    \u0275\u0275elementStart(8, "i", 5);
    \u0275\u0275text(9, " close ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("item", item_r8);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind2(2, 4, "/" + item_r8.url, "pathname"))("fragment", \u0275\u0275pipeBind2(3, 7, item_r8.url, "hash"));
    \u0275\u0275advance(5);
    \u0275\u0275property("innerHTML", item_r8.labelHtml, \u0275\u0275sanitizeHtml);
  }
}
__name(SearchHistoryComponent_Conditional_2_For_4_Template, "SearchHistoryComponent_Conditional_2_For_4_Template");
function SearchHistoryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 9);
    \u0275\u0275repeaterCreate(3, SearchHistoryComponent_Conditional_2_For_4_Template, 10, 10, "li", 2, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const items_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(items_r5.favorite);
  }
}
__name(SearchHistoryComponent_Conditional_2_Template, "SearchHistoryComponent_Conditional_2_Template");
var _c62 = ["searchDialog"];
function SearchDialog_Conditional_4_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
  if (rf & 2) {
    const result_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHtml", result_r3.subLabelHtml, \u0275\u0275sanitizeHtml);
  }
}
__name(SearchDialog_Conditional_4_For_2_Conditional_10_Template, "SearchDialog_Conditional_4_For_2_Conditional_10_Template");
function SearchDialog_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18)(1, "a", 19);
    \u0275\u0275pipe(2, "relativeLink");
    \u0275\u0275pipe(3, "relativeLink");
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function SearchDialog_Conditional_4_For_2_Template_a_click_1_listener() {
      const result_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.history.addItem(result_r3));
    }, "SearchDialog_Conditional_4_For_2_Template_a_click_1_listener"));
    \u0275\u0275elementStart(4, "div")(5, "div", 20)(6, "span", 21)(7, "i", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, SearchDialog_Conditional_4_For_2_Conditional_10_Template, 1, 1, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    \u0275\u0275property("item", result_r3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind2(2, 7, "/" + result_r3.url, "pathname"))("fragment", \u0275\u0275pipeBind2(3, 10, result_r3.url, "hash"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", result_r3.type === "code" ? "code" : "description", " ");
    \u0275\u0275advance();
    \u0275\u0275property("innerHtml", result_r3.labelHtml, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r3.subLabelHtml ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r3.category);
  }
}
__name(SearchDialog_Conditional_4_For_2_Template, "SearchDialog_Conditional_4_For_2_Template");
function SearchDialog_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, SearchDialog_Conditional_4_For_2_Template, 13, 13, "li", 18, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.searchResults());
  }
}
__name(SearchDialog_Conditional_4_Template, "SearchDialog_Conditional_4_Template");
function SearchDialog_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "docs-search-history");
  }
}
__name(SearchDialog_Conditional_5_Template, "SearchDialog_Conditional_5_Template");
function SearchDialog_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span");
    \u0275\u0275text(2, "\u5F00\u59CB\u8F93\u5165\u4EE5\u67E5\u770B\u7ED3\u679C");
    \u0275\u0275elementEnd()();
  }
}
__name(SearchDialog_Conditional_6_Conditional_1_Template, "SearchDialog_Conditional_6_Conditional_1_Template");
function SearchDialog_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "\u672A\u627E\u5230\u7ED3\u679C");
    \u0275\u0275elementEnd()();
  }
}
__name(SearchDialog_Conditional_6_Conditional_2_Template, "SearchDialog_Conditional_6_Conditional_2_Template");
function SearchDialog_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, SearchDialog_Conditional_6_Conditional_1_Template, 3, 0, "div", 26)(2, SearchDialog_Conditional_6_Conditional_2_Template, 3, 0, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.resultsResource.hasValue() ? 1 : ctx_r3.searchResults().length === 0 ? 2 : -1);
  }
}
__name(SearchDialog_Conditional_6_Template, "SearchDialog_Conditional_6_Template");
function TopLevelBannerComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0)(1, "h1", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 5)(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.link(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.text());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.text());
  }
}
__name(TopLevelBannerComponent_Conditional_0_Conditional_0_Template, "TopLevelBannerComponent_Conditional_0_Conditional_0_Template");
function TopLevelBannerComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 5)(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.text());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.text());
  }
}
__name(TopLevelBannerComponent_Conditional_0_Conditional_1_Template, "TopLevelBannerComponent_Conditional_0_Conditional_1_Template");
function TopLevelBannerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, TopLevelBannerComponent_Conditional_0_Conditional_0_Template, 6, 3, "a", 0)(1, TopLevelBannerComponent_Conditional_0_Conditional_1_Template, 6, 2, "div", 1);
    \u0275\u0275elementStart(2, "button", 2);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function TopLevelBannerComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    }, "TopLevelBannerComponent_Conditional_0_Template_button_click_2_listener"));
    \u0275\u0275elementStart(3, "docs-icon", 3);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.link() ? 0 : 1);
  }
}
__name(TopLevelBannerComponent_Conditional_0_Template, "TopLevelBannerComponent_Conditional_0_Template");
var _ClickOutside = class _ClickOutside {
  // TODO: Understand why replacing this @Input with a signal input breaks the tests
  ignoredElementsIds = [];
  clickOutside = output({
    alias: "docsClickOutside"
  });
  document = inject(DOCUMENT);
  elementRef = inject(ElementRef);
  onClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target) && !this.wasClickedOnIgnoredElement(event)) {
      this.clickOutside.emit();
    }
  }
  wasClickedOnIgnoredElement(event) {
    if (this.ignoredElementsIds.length === 0) {
      return false;
    }
    return this.ignoredElementsIds.some((elementId) => {
      const element = this.document.getElementById(elementId);
      const target = event.target;
      const contains = element?.contains(target);
      return contains;
    });
  }
};
__name(_ClickOutside, "ClickOutside");
__publicField(_ClickOutside, "\u0275fac", /* @__PURE__ */ __name(function ClickOutside_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClickOutside)();
}, "ClickOutside_Factory"));
__publicField(_ClickOutside, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ClickOutside,
  selectors: [["", "docsClickOutside", ""]],
  hostBindings: /* @__PURE__ */ __name(function ClickOutside_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function ClickOutside_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      }, "ClickOutside_click_HostBindingHandler"), \u0275\u0275resolveDocument);
    }
  }, "ClickOutside_HostBindings"),
  inputs: {
    ignoredElementsIds: [0, "docsClickOutsideIgnore", "ignoredElementsIds"]
  },
  outputs: {
    clickOutside: "docsClickOutside"
  }
}));
var ClickOutside = _ClickOutside;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickOutside, [{
    type: Directive,
    args: [{
      selector: "[docsClickOutside]",
      host: {
        "(document:click)": "onClick($event)"
      }
    }]
  }], null, {
    ignoredElementsIds: [{
      type: Input,
      args: ["docsClickOutsideIgnore"]
    }]
  });
})();
var setCookieConsent = /* @__PURE__ */ __name((state) => {
  try {
    if (window.gtag) {
      const consentOptions = {
        ad_user_data: state,
        ad_personalization: state,
        ad_storage: state,
        analytics_storage: state
      };
      if (state === "denied") {
        window.gtag("consent", "default", __spreadProps(__spreadValues({}, consentOptions), {
          wait_for_update: 500
        }));
      } else if (state === "granted") {
        window.gtag("consent", "update", __spreadValues({}, consentOptions));
      }
    }
  } catch {
    if (state === "denied") {
      console.error("Unable to set default cookie consent.");
    } else if (state === "granted") {
      console.error("Unable to grant cookie consent.");
    }
  }
}, "setCookieConsent");
var shouldReduceMotion = /* @__PURE__ */ __name(() => typeof window !== "undefined" && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true, "shouldReduceMotion");
var isMobile = typeof window !== "undefined" && window.navigator.userAgent.toLowerCase().includes("mobi");
var isApple = typeof window !== "undefined" && (/iPad|iPhone/.test(window.navigator.userAgent) || window.navigator.userAgent.includes("Mac"));
var isIpad = typeof window !== "undefined" && isApple && !!window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1;
var isIos = isMobile && isApple || isIpad;
var isFirefox = typeof window !== "undefined" && window.navigator.userAgent.includes("Firefox/");
var DOCS_CONTENT_LOADER = new InjectionToken("DOCS_CONTENT_LOADER");
function contentResolver(contentPath) {
  return () => inject(DOCS_CONTENT_LOADER).getContent(contentPath);
}
__name(contentResolver, "contentResolver");
var ENVIRONMENT = new InjectionToken("ENVIRONMENT");
var EXAMPLE_VIEWER_CONTENT_LOADER = new InjectionToken("EXAMPLE_VIEWER_CONTENT_LOADER");
var IS_SEARCH_DIALOG_OPEN = new InjectionToken("", {
  providedIn: "root",
  factory: /* @__PURE__ */ __name(() => signal(false), "factory")
});
var LOCAL_STORAGE = new InjectionToken("LOCAL_STORAGE", {
  providedIn: "root",
  factory: /* @__PURE__ */ __name(() => getStorage(inject(PLATFORM_ID)), "factory")
});
var getStorage = /* @__PURE__ */ __name((platformId) => {
  return isPlatformBrowser(platformId) ? new LocalStorage() : null;
}, "getStorage");
var _LocalStorage = class _LocalStorage {
  get length() {
    try {
      return localStorage.length;
    } catch {
      return 0;
    }
  }
  clear() {
    try {
      localStorage.clear();
    } catch {
    }
  }
  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
  key(index) {
    try {
      return localStorage.key(index);
    } catch {
      return null;
    }
  }
  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch {
    }
  }
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
    }
  }
};
__name(_LocalStorage, "LocalStorage");
var LocalStorage = _LocalStorage;
var PREVIEWS_COMPONENTS = new InjectionToken("PREVIEWS_COMPONENTS");
var WINDOW = new InjectionToken("WINDOW");
function windowProvider(document2) {
  return document2.defaultView;
}
__name(windowProvider, "windowProvider");
var flatNavigationData = /* @__PURE__ */ __name((tree) => {
  const result = [];
  const traverse = /* @__PURE__ */ __name((node, level) => {
    node.level = level;
    if (node.path) {
      result.push(node);
    }
    if (node.children) {
      for (const child of node.children) {
        child.parent = node;
        traverse(child, level + 1);
      }
    }
  }, "traverse");
  for (const node of tree) {
    traverse(node, 1);
  }
  return result;
}, "flatNavigationData");
var getNavigationItemsTree = /* @__PURE__ */ __name((tree, mapFn) => {
  const traverse = /* @__PURE__ */ __name((node) => {
    mapFn(node);
    if (node.children) {
      for (const child of node.children) {
        traverse(child);
      }
    }
  }, "traverse");
  for (const node of tree) {
    traverse(node);
  }
  return tree;
}, "getNavigationItemsTree");
var findNavigationItem = /* @__PURE__ */ __name((items, predicate) => {
  let result = null;
  const traverse = /* @__PURE__ */ __name((node) => {
    if (predicate(node)) {
      result = node;
    }
    if (node.children && !result) {
      for (const child of node.children) {
        traverse(child);
      }
    }
  }, "traverse");
  for (const node of items) {
    traverse(node);
  }
  return result;
}, "findNavigationItem");
function isExternalLink(link) {
  return link.startsWith("http://") || link.startsWith("https://");
}
__name(isExternalLink, "isExternalLink");
function markExternalLinks(item) {
  if (item.path) {
    item.isExternal = isExternalLink(item.path);
  }
}
__name(markExternalLinks, "markExternalLinks");
var mapNavigationItemsToRoutes = /* @__PURE__ */ __name((navigationItems, additionalRouteProperties) => navigationItems.filter((route) => Boolean(route.path)).map((navigationItem) => {
  const route = __spreadValues({
    path: navigationItem.path
  }, additionalRouteProperties);
  route.data = __spreadValues(__spreadValues({}, navigationItem), route.data);
  route.resolve = __spreadValues({
    "docContent": /* @__PURE__ */ __name((snapshot) => {
      return snapshot.data["contentPath"] !== void 0 ? inject(DOCS_CONTENT_LOADER).getContent(snapshot.data["contentPath"]) : void 0;
    }, "docContent")
  }, route.resolve);
  return route;
}), "mapNavigationItemsToRoutes");
var normalizePath = /* @__PURE__ */ __name((path) => {
  if (path[0] === "/") {
    return path.substring(1);
  }
  return path;
}, "normalizePath");
var getBaseUrlAfterRedirects = /* @__PURE__ */ __name((url, router) => {
  const route = router.parseUrl(url);
  route.fragment = null;
  route.queryParams = {};
  return normalizePath(route.toString());
}, "getBaseUrlAfterRedirects");
function handleHrefClickEventWithRouter(e, router, relativeUrl) {
  const pointerEvent = e;
  if (pointerEvent.ctrlKey || pointerEvent.shiftKey || pointerEvent.altKey || pointerEvent.metaKey) {
    return;
  }
  e.preventDefault();
  router.navigateByUrl(relativeUrl);
}
__name(handleHrefClickEventWithRouter, "handleHrefClickEventWithRouter");
function getActivatedRouteSnapshotFromRouter(router) {
  let route = router.routerState.root.snapshot;
  while (route.firstChild) {
    route = route.firstChild;
  }
  return route;
}
__name(getActivatedRouteSnapshotFromRouter, "getActivatedRouteSnapshotFromRouter");
var checkFilesInDirectory = /* @__PURE__ */ __name(async (dir, fs, filterFromRootPredicate, files = []) => {
  const entries = await fs.readdir(dir, {
    withFileTypes: true
  }) ?? [];
  for (const entry of entries) {
    const fullPath = normalizePath(`${dir}/${entry.name}`);
    if (filterFromRootPredicate && !filterFromRootPredicate?.(entry.name)) {
      continue;
    }
    if (entry.isFile()) {
      const content = await fs.readFile(fullPath, "utf-8");
      files.push({
        content,
        path: fullPath
      });
    } else if (entry.isDirectory()) {
      await checkFilesInDirectory(fullPath, fs, null, files);
    }
  }
  return files;
}, "checkFilesInDirectory");
var removeTrailingSlash = /* @__PURE__ */ __name((url) => {
  if (url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
}, "removeTrailingSlash");
var zip;
var strToU8;
async function generateZip(files) {
  if (zip === void 0 || strToU8 === void 0) {
    const fflate = require_browser();
    zip = fflate.zip;
    strToU8 = fflate.strToU8;
  }
  const filesObj = {};
  files.forEach(({
    path,
    content
  }) => {
    filesObj[path] = typeof content === "string" ? strToU8(content) : content;
  });
  return new Promise((resolve, reject) => {
    zip(filesObj, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
__name(generateZip, "generateZip");
var _ExternalLink = class _ExternalLink {
  anchor = inject(ElementRef);
  platformId = inject(PLATFORM_ID);
  target;
  constructor() {
    this.setAnchorTarget();
  }
  setAnchorTarget() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (isExternalLink(this.anchor.nativeElement.href)) {
      this.target = "_blank";
    }
  }
};
__name(_ExternalLink, "ExternalLink");
__publicField(_ExternalLink, "\u0275fac", /* @__PURE__ */ __name(function ExternalLink_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExternalLink)();
}, "ExternalLink_Factory"));
__publicField(_ExternalLink, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ExternalLink,
  selectors: [["a", "href", "", 3, "noBlankForExternalLink", ""]],
  hostVars: 1,
  hostBindings: /* @__PURE__ */ __name(function ExternalLink_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("target", ctx.target);
    }
  }, "ExternalLink_HostBindings")
}));
var ExternalLink = _ExternalLink;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalLink, [{
    type: Directive,
    args: [{
      selector: "a[href]:not([noBlankForExternalLink])",
      host: {
        "[attr.target]": "target"
      }
    }]
  }], () => [], null);
})();
var _SearchItem = class _SearchItem {
  // Those inputs are required by the Highlightable interface
  // We can't migrate them to signals yet
  disabled = false;
  item = input(...ngDevMode ? [void 0, {
    debugName: "item"
  }] : []);
  elementRef = inject(ElementRef);
  _isActive = signal(false, ...ngDevMode ? [{
    debugName: "_isActive"
  }] : []);
  get isActive() {
    return this._isActive();
  }
  setActiveStyles() {
    this._isActive.set(true);
  }
  setInactiveStyles() {
    this._isActive.set(false);
  }
  scrollIntoView() {
    this.elementRef?.nativeElement.scrollIntoView({
      block: "nearest"
    });
  }
};
__name(_SearchItem, "SearchItem");
__publicField(_SearchItem, "\u0275fac", /* @__PURE__ */ __name(function SearchItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchItem)();
}, "SearchItem_Factory"));
__publicField(_SearchItem, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SearchItem,
  selectors: [["", "docsSearchItem", ""]],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function SearchItem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("active", ctx.isActive);
    }
  }, "SearchItem_HostBindings"),
  inputs: {
    disabled: "disabled",
    item: [1, "item"]
  }
}));
var SearchItem = _SearchItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchItem, [{
    type: Directive,
    args: [{
      selector: "[docsSearchItem]",
      host: {
        "[class.active]": "isActive"
      }
    }]
  }], null, {
    disabled: [{
      type: Input
    }]
  });
})();
var _NavigationState = class _NavigationState {
  router = inject(Router);
  _activeNavigationItem = signal(null, ...ngDevMode ? [{
    debugName: "_activeNavigationItem"
  }] : []);
  _expandedItems = signal([], ...ngDevMode ? [{
    debugName: "_expandedItems"
  }] : []);
  _isMobileNavVisible = signal(false, ...ngDevMode ? [{
    debugName: "_isMobileNavVisible"
  }] : []);
  _level = linkedSignal(() => this._expandedItems().length);
  primaryActiveRouteItem = signal(null, ...ngDevMode ? [{
    debugName: "primaryActiveRouteItem"
  }] : []);
  activeNavigationItem = this._activeNavigationItem.asReadonly();
  expandedItems = this._expandedItems.asReadonly();
  isMobileNavVisible = this._isMobileNavVisible.asReadonly();
  level = this._level.asReadonly();
  async toggleItem(item) {
    if (!item.children) {
      return;
    }
    if (item.isExpanded) {
      this.collapse(item);
    } else if (item.children && item.children.length > 0 && item.children[0].path) {
      const navigationSucceeds = await this.navigateToFirstPageOfTheCategory(item.children[0].path);
      if (!navigationSucceeds) {
        this.expand(item);
      }
    }
  }
  cleanExpandedState() {
    this._expandedItems.set([]);
  }
  expandItemHierarchy(item, shouldExpand, skipExpandPredicateFn) {
    if (skipExpandPredicateFn && skipExpandPredicateFn(item)) {
      this.cleanExpandedState();
      return;
    }
    const parentItem = this.actualExpandedItems().find((expandedItem) => item.parent?.label === expandedItem.label && item.parent?.path === expandedItem.path);
    if (parentItem) {
      this._expandedItems.update((expandedItems) => expandedItems.filter((item2) => item2.level !== void 0 && parentItem.level !== void 0 && item2.level <= parentItem.level));
    } else {
      let itemsToExpand = [];
      let node = item.parent;
      while (node && shouldExpand(node)) {
        itemsToExpand.push(__spreadProps(__spreadValues({}, node), {
          isExpanded: true
        }));
        node = node.parent;
      }
      this._expandedItems.set(itemsToExpand.reverse());
    }
  }
  setActiveNavigationItem(item) {
    this._activeNavigationItem.set(item);
  }
  setMobileNavigationListVisibility(isVisible) {
    this._isMobileNavVisible.set(isVisible);
  }
  expand(item) {
    this._expandedItems.update((expandedItems) => {
      return [...this.actualExpandedItems() ?? [], __spreadProps(__spreadValues({}, item), {
        isExpanded: true
      })];
    });
  }
  collapse(item) {
    item.isExpanded = false;
    this._level.set(this.actualExpandedItems().length - 1);
  }
  /**
   * return the actual navigation items, that is to say the one that match the current level
   */
  actualExpandedItems() {
    return this.expandedItems().slice(0, this.level());
  }
  async navigateToFirstPageOfTheCategory(path) {
    return this.router.navigateByUrl(path);
  }
};
__name(_NavigationState, "NavigationState");
__publicField(_NavigationState, "\u0275fac", /* @__PURE__ */ __name(function NavigationState_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavigationState)();
}, "NavigationState_Factory"));
__publicField(_NavigationState, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NavigationState,
  factory: _NavigationState.\u0275fac,
  providedIn: "root"
}));
var NavigationState = _NavigationState;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TOC_SKIP_CONTENT_MARKER = "toc-skip-content";
var _TableOfContentsLoader = class _TableOfContentsLoader {
  // There are some cases when default browser anchor scrolls a little above the
  // heading In that cases wrong item was selected. The value found by trial and
  // error.
  toleranceThreshold = 40;
  tableOfContentItems = signal([], ...ngDevMode ? [{
    debugName: "tableOfContentItems"
  }] : []);
  document = inject(DOCUMENT);
  buildTableOfContent(docElement) {
    const headings = this.getHeadings(docElement);
    const tocList = headings.map((heading) => ({
      id: heading.id,
      level: heading.tagName.toLowerCase(),
      title: this.getHeadingTitle(heading)
    }));
    this.tableOfContentItems.set(tocList);
  }
  getHeadingTitle(heading) {
    const div = this.document.createElement("div");
    div.innerHTML = heading.innerHTML;
    return (div.textContent || "").trim();
  }
  // Get all headings (h2 and h3) with ids, which are not children of the
  // docs-example-viewer component.
  getHeadings(element) {
    return Array.from(element.querySelectorAll(`h2[id]:not(docs-example-viewer h2):not([${TOC_SKIP_CONTENT_MARKER}]),h3[id]:not(docs-example-viewer h3):not([${TOC_SKIP_CONTENT_MARKER}])`));
  }
  /**
   * The methods setups several IntersectionObservers to determine when a heading is at the top of
   * the viewport. Using an IntersectionObserver is more efficient than reading DOM position
   * as it won't trigger any reflow.
   */
  setupIntersectionObserver(element, destroyRef, onActiveId) {
    const headings = this.getHeadings(element);
    onActiveId(headings[0].id);
    headings.forEach((heading) => {
      const ioConfiguration = {
        /**
         * This rootMargin creates a horizontal line at 5% from the top of the viewport
         * that will help trigger an intersection at that the very point.
         */
        rootMargin: "0% 0% -95% 0%",
        /** 0 is the default  */
        threshold: 0
      };
      const observer = new IntersectionObserver((entries, o) => {
        if (entries[0].isIntersecting) {
          onActiveId(entries[0].target.id);
        }
      }, ioConfiguration);
      observer.observe(heading);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
};
__name(_TableOfContentsLoader, "TableOfContentsLoader");
__publicField(_TableOfContentsLoader, "\u0275fac", /* @__PURE__ */ __name(function TableOfContentsLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableOfContentsLoader)();
}, "TableOfContentsLoader_Factory"));
__publicField(_TableOfContentsLoader, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TableOfContentsLoader,
  factory: _TableOfContentsLoader.\u0275fac,
  providedIn: "root"
}));
var TableOfContentsLoader = _TableOfContentsLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableOfContentsLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SEARCH_DELAY = 200;
var MAX_VALUE_PER_FACET = 5;
var ALGOLIA_CLIENT = new InjectionToken("Search service");
var provideAlgoliaSearchClient = /* @__PURE__ */ __name((config) => {
  return {
    provide: ALGOLIA_CLIENT,
    useFactory: /* @__PURE__ */ __name(() => liteClient(config.algolia.appId, config.algolia.apiKey), "useFactory")
  };
}, "provideAlgoliaSearchClient");
var _Search = class _Search {
  searchQuery = signal("", ...ngDevMode ? [{
    debugName: "searchQuery"
  }] : []);
  config = inject(ENVIRONMENT);
  client = inject(ALGOLIA_CLIENT);
  resultsResource = resource({
    params: /* @__PURE__ */ __name(() => this.searchQuery() || void 0, "params"),
    // coerces empty string to undefined
    loader: /* @__PURE__ */ __name(async ({
      params: query,
      abortSignal
    }) => {
      await wait(SEARCH_DELAY, abortSignal);
      return this.client.search([{
        indexName: this.config.algolia.indexName,
        params: {
          query,
          maxValuesPerFacet: MAX_VALUE_PER_FACET,
          attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"],
          hitsPerPage: 20,
          snippetEllipsisText: "\u2026",
          highlightPreTag: "<\u0275>",
          highlightPostTag: "</\u0275>",
          attributesToHighlight: [],
          attributesToSnippet: ["hierarchy.lvl1:10", "hierarchy.lvl2:10", "hierarchy.lvl3:10", "hierarchy.lvl4:10", "hierarchy.lvl5:10", "hierarchy.lvl6:10", "content:10"]
        },
        type: "default"
      }]).then((response) => {
        return this.parseResult(response);
      });
    }, "loader")
  });
  searchResults = linkedSignal({
    source: this.resultsResource.value,
    computation: /* @__PURE__ */ __name((next, prev) => (!next && this.searchQuery() ? prev?.value : next) ?? [], "computation")
  });
  getUniqueSearchResultItems(items) {
    const uniqueUrls = /* @__PURE__ */ new Set();
    return items.filter((item) => {
      if (item.type === "content" && !item._snippetResult.content) {
        return false;
      }
      if (item.type.indexOf("lvl") === 0 && item._snippetResult.hierarchy?.[item.type]?.matchLevel === "none") {
        return false;
      }
      if (item["url"] && typeof item["url"] === "string" && !uniqueUrls.has(item["url"])) {
        uniqueUrls.add(item["url"]);
        return true;
      }
      return false;
    });
  }
  parseResult(response) {
    if (!response) {
      return;
    }
    const result = response.results[0];
    if (!result || !("hits" in result)) {
      return;
    }
    const items = result.hits;
    return this.getUniqueSearchResultItems(items).map((hitItem) => {
      const content = hitItem._snippetResult.content;
      const hierarchy = hitItem._snippetResult.hierarchy;
      const hasSubLabel = content || hierarchy?.lvl2 || hierarchy?.lvl3 || hierarchy?.lvl4;
      return {
        id: hitItem.objectID,
        type: hitItem.hierarchy.lvl0 === "Tutorials" ? "code" : "doc",
        url: hitItem.url,
        labelHtml: this.parseLabelToHtml(hitItem._snippetResult.hierarchy?.lvl1?.value ?? ""),
        subLabelHtml: this.parseLabelToHtml(hasSubLabel ? this.getBestSnippetForMatch(hitItem) : null),
        category: hitItem.hierarchy?.lvl0 ?? null
      };
    });
  }
  getBestSnippetForMatch(result) {
    if (result._snippetResult.content !== void 0) {
      return result._snippetResult.content.value;
    }
    const hierarchy = result._snippetResult.hierarchy;
    if (hierarchy === void 0) {
      return "";
    }
    if (matched(hierarchy.lvl4)) {
      return hierarchy.lvl4.value;
    }
    if (matched(hierarchy.lvl3)) {
      return hierarchy.lvl3.value;
    }
    if (matched(hierarchy.lvl2)) {
      return hierarchy.lvl2.value;
    }
    return hierarchy.lvl3?.value ?? hierarchy.lvl2?.value ?? "";
  }
  /**
   * Returns an HTML string with marked text for the matches
   */
  parseLabelToHtml(label) {
    if (label === null) {
      return null;
    }
    const parts = [];
    while (label.indexOf("<\u0275>") !== -1) {
      const beforeMatch = label.substring(0, label.indexOf("<\u0275>"));
      const match = label.substring(label.indexOf("<\u0275>") + 3, label.indexOf("</\u0275>"));
      parts.push({
        highlight: false,
        text: beforeMatch
      });
      parts.push({
        highlight: true,
        text: match
      });
      label = label.substring(label.indexOf("</\u0275>") + 4);
    }
    parts.push({
      highlight: false,
      text: label
    });
    return parts.map((part) => {
      return part.highlight ? `<mark>${part.text}</mark>` : `<span>${part.text}</span>`;
    }).join("");
  }
};
__name(_Search, "Search");
__publicField(_Search, "\u0275fac", /* @__PURE__ */ __name(function Search_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Search)();
}, "Search_Factory"));
__publicField(_Search, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Search,
  factory: _Search.\u0275fac,
  providedIn: "root"
}));
var Search = _Search;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Search, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function matched(snippet) {
  return snippet?.matchLevel !== void 0 && snippet.matchLevel !== "none";
}
__name(matched, "matched");
function wait(ms, signal2) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => resolve(), ms);
    signal2.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject(new Error("Operation aborted"));
    }, {
      once: true
    });
  });
}
__name(wait, "wait");
var SEARCH_HISTORY_LS_KEY = "docs-search-history-v1";
var MAX_RECENT_HISTORY_SIZE = 10;
var _SearchHistory = class _SearchHistory {
  localStorage = inject(LOCAL_STORAGE);
  history = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{
    debugName: "history"
  }] : []);
  allItems = computed(() => Array.from(this.history().values()).sort((a, b) => b.createdAt - a.createdAt), ...ngDevMode ? [{
    debugName: "allItems"
  }] : []);
  items = computed(() => ({
    recent: this.allItems().filter((v) => !v.isFavorite),
    favorite: this.allItems().filter((v) => v.isFavorite)
  }), ...ngDevMode ? [{
    debugName: "items"
  }] : []);
  hasItems = computed(() => this.allItems().length > 0, ...ngDevMode ? [{
    debugName: "hasItems"
  }] : []);
  constructor() {
    this.loadHistory();
  }
  addItem(item) {
    this.updateHistory((map2) => {
      const labelHtml = (item.labelHtml || "").replace(/<\/?mark>/g, "");
      map2.set(item.id, {
        id: item.id,
        labelHtml,
        url: item.url,
        isFavorite: false,
        createdAt: Date.now()
      });
      if (this.items().recent.length >= MAX_RECENT_HISTORY_SIZE) {
        const {
          id
        } = this.items().recent.at(-1);
        map2.delete(id);
      }
    });
  }
  removeItem(item) {
    this.updateHistory((map2) => {
      map2.delete(item.id);
    });
  }
  makeFavorite(item) {
    this.updateHistory((map2) => {
      const updated = map2.get(item.id);
      if (updated) {
        map2.set(item.id, __spreadProps(__spreadValues({}, updated), {
          isFavorite: true,
          createdAt: Date.now()
        }));
      }
    });
  }
  loadHistory() {
    let parsedData;
    try {
      const historyData = this.localStorage?.getItem(SEARCH_HISTORY_LS_KEY);
      parsedData = JSON.parse(historyData ?? "[]");
    } catch {
      parsedData = [];
    }
    const history = /* @__PURE__ */ new Map();
    for (const item of parsedData) {
      history.set(item.id, item);
    }
    this.history.set(history);
  }
  updateHistory(updateFn) {
    const history = new Map(this.history());
    updateFn(history);
    this.history.set(history);
    try {
      this.localStorage?.setItem(SEARCH_HISTORY_LS_KEY, JSON.stringify(this.allItems()));
    } catch {
    }
  }
};
__name(_SearchHistory, "SearchHistory");
__publicField(_SearchHistory, "\u0275fac", /* @__PURE__ */ __name(function SearchHistory_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchHistory)();
}, "SearchHistory_Factory"));
__publicField(_SearchHistory, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SearchHistory,
  factory: _SearchHistory.\u0275fac,
  providedIn: "root"
}));
var SearchHistory = _SearchHistory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchHistory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var TableOfContentsLevel;
(function(TableOfContentsLevel2) {
  TableOfContentsLevel2["H2"] = "h2";
  TableOfContentsLevel2["H3"] = "h3";
})(TableOfContentsLevel || (TableOfContentsLevel = {}));
var _IconComponent = class _IconComponent {
  fontSize = computed(() => _IconComponent.isFontLoaded() ? null : 0, ...ngDevMode ? [{
    debugName: "fontSize"
  }] : []);
  constructor() {
    if (_IconComponent.isFontLoaded()) {
      return;
    }
    const document2 = inject(DOCUMENT);
    afterNextRender(async () => {
      _IconComponent.whenFontLoad ??= document2.fonts.load('normal 1px "Material Symbols Outlined"');
      await _IconComponent.whenFontLoad;
      _IconComponent.isFontLoaded.set(true);
    });
  }
};
__name(_IconComponent, "IconComponent");
__publicField(_IconComponent, "isFontLoaded", signal(false, ...ngDevMode ? [{
  debugName: "isFontLoaded"
}] : []));
/** Share the same promise across different instances of the component */
__publicField(_IconComponent, "whenFontLoad");
__publicField(_IconComponent, "\u0275fac", /* @__PURE__ */ __name(function IconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconComponent)();
}, "IconComponent_Factory"));
__publicField(_IconComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _IconComponent,
  selectors: [["docs-icon"]],
  hostAttrs: ["aria-hidden", "true", "translate", "no", 1, "material-symbols-outlined"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function IconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("font-size", ctx.fontSize(), "px");
    }
  }, "IconComponent_HostBindings"),
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, "IconComponent_Template"),
  styles: [".docs-icon_high-contrast[_ngcontent-%COMP%]{color:var(--primary-contrast)}/*# sourceMappingURL=icon.component.css.map */"],
  changeDetection: 0
}));
var IconComponent = _IconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "docs-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "material-symbols-outlined",
        "[style.font-size.px]": "fontSize()",
        "aria-hidden": "true",
        "translate": "no"
      },
      template: "<ng-content />",
      styles: [".docs-icon_high-contrast{color:var(--primary-contrast)}/*# sourceMappingURL=icon.component.css.map */\n"]
    }]
  }], () => [], null);
})();
var _TableOfContents = class _TableOfContents {
  // Element that contains the content from which the Table of Contents is built
  contentSourceElement = input.required(...ngDevMode ? [{
    debugName: "contentSourceElement"
  }] : []);
  location = inject(Location);
  tableOfContentsLoader = inject(TableOfContentsLoader);
  viewportScroller = inject(ViewportScroller);
  destroyRef = inject(DestroyRef);
  tableOfContentItems = this.tableOfContentsLoader.tableOfContentItems;
  activeItemId = signal(null, ...ngDevMode ? [{
    debugName: "activeItemId"
  }] : []);
  TableOfContentsLevel = TableOfContentsLevel;
  constructor() {
    afterNextRender({
      read: /* @__PURE__ */ __name(() => {
        this.tableOfContentsLoader.buildTableOfContent(this.contentSourceElement());
        this.setupActiveItemListener(this.contentSourceElement());
      }, "read")
    });
  }
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  setupActiveItemListener(contentSourceElement) {
    if (contentSourceElement) {
      this.tableOfContentsLoader.setupIntersectionObserver(contentSourceElement, this.destroyRef, (id) => {
        this.activeItemId.set(id);
      });
    }
  }
};
__name(_TableOfContents, "TableOfContents");
__publicField(_TableOfContents, "\u0275fac", /* @__PURE__ */ __name(function TableOfContents_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableOfContents)();
}, "TableOfContents_Factory"));
__publicField(_TableOfContents, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TableOfContents,
  selectors: [["docs-table-of-contents"]],
  inputs: {
    contentSourceElement: [1, "contentSourceElement"]
  },
  decls: 12,
  vars: 0,
  consts: [[1, "docs-title"], [1, "docs-faceted-list"], [1, "docs-faceted-list-item", 3, "docs-toc-item-h2", "docs-toc-item-h3"], ["type", "button", 3, "click"], ["role", "presentation"], [1, "docs-faceted-list-item"], [3, "href"]],
  template: /* @__PURE__ */ __name(function TableOfContents_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside")(1, "nav")(2, "header")(3, "h2", 0);
      \u0275\u0275text(4, "\u5728\u672C\u9875\u4E2D");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "ul", 1);
      \u0275\u0275repeaterCreate(6, TableOfContents_For_7_Template, 3, 8, "li", 2, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function TableOfContents_Template_button_click_8_listener() {
        return ctx.scrollToTop();
      }, "TableOfContents_Template_button_click_8_listener"));
      \u0275\u0275elementStart(9, "docs-icon", 4);
      \u0275\u0275text(10, "arrow_upward_alt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " \u8FD4\u56DE\u9876\u90E8 ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.tableOfContentItems());
    }
  }, "TableOfContents_Template"),
  dependencies: [IconComponent],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;position:fixed;right:1rem;top:0;height:fit-content;width:14rem;padding-right:2rem;max-height:100vh;overflow-y:scroll;box-sizing:border-box}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]{margin-bottom:2rem}[_nghost-%COMP%]   [_ngcontent-%COMP%]:has(ul li:only-child){display:none}@media(max-width: 1430px){[_nghost-%COMP%]{position:relative;right:0;max-height:min-content;width:100%}}[_nghost-%COMP%]   .docs-title[_ngcontent-%COMP%]{font-size:1.25rem;margin-block-start:var(--layout-padding)}[_nghost-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,0);cursor:pointer}[_nghost-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--septenary-contrast);border-radius:10px;transition:background-color .3s ease}[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--quinary-contrast)}[_nghost-%COMP%]   .docs-faceted-list-item[_ngcontent-%COMP%]{font-size:.875rem}[_nghost-%COMP%]   .docs-faceted-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem .5rem .5rem 1rem;font-weight:500}[_nghost-%COMP%]   .docs-faceted-list-item.docs-toc-item-h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-inline-start:2rem}button[_ngcontent-%COMP%]{background:rgba(0,0,0,0);border:none;font-size:.875rem;font-family:var(--inter-font);display:flex;align-items:center;margin:.5rem 0;color:var(--tertiary-contrast);transition:color .3s ease;cursor:pointer}button[_ngcontent-%COMP%]   docs-icon[_ngcontent-%COMP%]{margin-inline-end:.35rem;opacity:.6;transition:opacity .3s ease}button[_ngcontent-%COMP%]:hover   docs-icon[_ngcontent-%COMP%]{opacity:1}@media(max-width: 1430px){button[_ngcontent-%COMP%]{display:none}}/*# sourceMappingURL=table-of-contents.component.css.map */"],
  changeDetection: 0
}));
var TableOfContents = _TableOfContents;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableOfContents, [{
    type: Component,
    args: [{
      selector: "docs-table-of-contents",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [IconComponent],
      template: `<aside>
  <nav>
    <header>
      <h2 class="docs-title">\u5728\u672C\u9875\u4E2D</h2>
    </header>
    <ul class="docs-faceted-list">
      <!-- TODO: Hide li elements with class docs-toc-item-h3 for laptop, table and phone screen resolutions  -->
      @for (item of tableOfContentItems(); track item.id) {
      <li class="docs-faceted-list-item" [class.docs-toc-item-h2]="item.level === TableOfContentsLevel.H2"
        [class.docs-toc-item-h3]="item.level === TableOfContentsLevel.H3">
        <!-- Not using routerLink + fragment because of: https://github.com/angular/angular/issues/30139 -->
        <a [href]="location.path() + '#' + item.id" [class.docs-faceted-list-item-active]="item.id === activeItemId()">
          {{ item.title }}
        </a>
      </li>
      }
    </ul>
  </nav>
  <button type="button" (click)="scrollToTop()">
    <docs-icon role="presentation">arrow_upward_alt</docs-icon>
    \u8FD4\u56DE\u9876\u90E8
  </button>
</aside>
`,
      styles: [":host{display:flex;flex-direction:column;position:fixed;right:1rem;top:0;height:fit-content;width:14rem;padding-right:2rem;max-height:100vh;overflow-y:scroll;box-sizing:border-box}:host aside{margin-bottom:2rem}:host :has(ul li:only-child){display:none}@media(max-width: 1430px){:host{position:relative;right:0;max-height:min-content;width:100%}}:host .docs-title{font-size:1.25rem;margin-block-start:var(--layout-padding)}:host::-webkit-scrollbar-track{background:rgba(0,0,0,0);cursor:pointer}:host::-webkit-scrollbar{width:6px;height:6px}:host::-webkit-scrollbar-thumb{background-color:var(--septenary-contrast);border-radius:10px;transition:background-color .3s ease}:host::-webkit-scrollbar-thumb:hover{background-color:var(--quinary-contrast)}:host .docs-faceted-list-item{font-size:.875rem}:host .docs-faceted-list-item a{display:block;padding:.5rem .5rem .5rem 1rem;font-weight:500}:host .docs-faceted-list-item.docs-toc-item-h3 a{padding-inline-start:2rem}button{background:rgba(0,0,0,0);border:none;font-size:.875rem;font-family:var(--inter-font);display:flex;align-items:center;margin:.5rem 0;color:var(--tertiary-contrast);transition:color .3s ease;cursor:pointer}button docs-icon{margin-inline-end:.35rem;opacity:.6;transition:opacity .3s ease}button:hover docs-icon{opacity:1}@media(max-width: 1430px){button{display:none}}/*# sourceMappingURL=table-of-contents.component.css.map */\n"]
    }]
  }], () => [], null);
})();
var _Breadcrumb = class _Breadcrumb {
  navigationState = inject(NavigationState);
  breadcrumbItems = computed(() => {
    const breadcrumbs = [];
    let activeItem = this.navigationState.activeNavigationItem()?.parent;
    while (activeItem != null) {
      breadcrumbs.push(activeItem);
      activeItem = activeItem.parent;
    }
    return breadcrumbs.reverse();
  }, ...ngDevMode ? [{
    debugName: "breadcrumbItems"
  }] : []);
};
__name(_Breadcrumb, "Breadcrumb");
__publicField(_Breadcrumb, "\u0275fac", /* @__PURE__ */ __name(function Breadcrumb_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Breadcrumb)();
}, "Breadcrumb_Factory"));
__publicField(_Breadcrumb, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Breadcrumb,
  selectors: [["docs-breadcrumb"]],
  decls: 2,
  vars: 0,
  consts: [[1, "docs-breadcrumb"], [3, "href"], [3, "routerLink"]],
  template: /* @__PURE__ */ __name(function Breadcrumb_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, Breadcrumb_For_1_Template, 3, 1, "div", 0, \u0275\u0275repeaterTrackByIndex);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.breadcrumbItems());
    }
  }, "Breadcrumb_Template"),
  dependencies: [RouterLink],
  styles: ['[_nghost-%COMP%]{display:flex;align-items:center;padding-block-end:1.5rem}.docs-breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--quaternary-contrast);font-size:.875rem;display:flex;align-items:center}.docs-breadcrumb[_ngcontent-%COMP%]:not(:last-child)   span[_ngcontent-%COMP%]::after{content:"chevron_right";font-family:var(--icons);margin-inline:.5rem;color:var(--quinary-contrast)}/*# sourceMappingURL=breadcrumb.component.css.map */'],
  changeDetection: 0
}));
var Breadcrumb = _Breadcrumb;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Breadcrumb, [{
    type: Component,
    args: [{
      selector: "docs-breadcrumb",
      imports: [RouterLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@for (breadcrumb of breadcrumbItems(); track $index) {
  <div class="docs-breadcrumb">
    @if (breadcrumb.path) {
      @if (breadcrumb.isExternal) {
        <a [href]="breadcrumb.path">{{ breadcrumb.label }}</a>
      } @else {
        <a [routerLink]="'/' + breadcrumb.path">{{ breadcrumb.label }}</a>
      }
    } @else {
      <span>{{ breadcrumb.label }}</span>
    }
  </div>
}
`,
      styles: [':host{display:flex;align-items:center;padding-block-end:1.5rem}.docs-breadcrumb span{color:var(--quaternary-contrast);font-size:.875rem;display:flex;align-items:center}.docs-breadcrumb:not(:last-child) span::after{content:"chevron_right";font-family:var(--icons);margin-inline:.5rem;color:var(--quinary-contrast)}/*# sourceMappingURL=breadcrumb.component.css.map */\n']
    }]
  }], null, null);
})();
var REMOVED_LINE_CLASS_NAME = ".line.remove";
var CONFIRMATION_DISPLAY_TIME_MS = 2e3;
var _CopySourceCodeButton = class _CopySourceCodeButton {
  changeDetector = inject(ChangeDetectorRef);
  clipboard = inject(Clipboard);
  elementRef = inject(ElementRef);
  showCopySuccess = signal(false, ...ngDevMode ? [{
    debugName: "showCopySuccess"
  }] : []);
  showCopyFailure = signal(false, ...ngDevMode ? [{
    debugName: "showCopyFailure"
  }] : []);
  copySourceCode() {
    try {
      const codeElement = this.elementRef.nativeElement.parentElement.querySelector("code");
      const sourceCode = this.getSourceCode(codeElement);
      this.clipboard.copy(sourceCode);
      this.showResult(this.showCopySuccess);
    } catch {
      this.showResult(this.showCopyFailure);
    }
  }
  getSourceCode(codeElement) {
    this.showCopySuccess.set(false);
    this.showCopyFailure.set(false);
    const removedLines = codeElement.querySelectorAll(REMOVED_LINE_CLASS_NAME);
    if (removedLines.length) {
      const formattedText = Array.from(codeElement.querySelectorAll(".line:not(.remove)")).map((line) => line.innerText).join("\n");
      return formattedText.trim();
    } else {
      const text = codeElement.innerText || "";
      return text.replace(/\n\n\n/g, ``).trim();
    }
  }
  showResult(messageState) {
    messageState.set(true);
    setTimeout(() => {
      messageState.set(false);
      this.changeDetector.markForCheck();
    }, CONFIRMATION_DISPLAY_TIME_MS);
  }
};
__name(_CopySourceCodeButton, "CopySourceCodeButton");
__publicField(_CopySourceCodeButton, "\u0275fac", /* @__PURE__ */ __name(function CopySourceCodeButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CopySourceCodeButton)();
}, "CopySourceCodeButton_Factory"));
__publicField(_CopySourceCodeButton, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CopySourceCodeButton,
  selectors: [["button", "docs-copy-source-code", ""]],
  hostAttrs: ["type", "button", "aria-label", "Copy example source to clipboard", "title", "Copy example source"],
  hostVars: 4,
  hostBindings: /* @__PURE__ */ __name(function CopySourceCodeButton_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function CopySourceCodeButton_click_HostBindingHandler() {
        return ctx.copySourceCode();
      }, "CopySourceCodeButton_click_HostBindingHandler"));
    }
    if (rf & 2) {
      \u0275\u0275classProp("docs-copy-source-code-button-success", ctx.showCopySuccess())("docs-copy-source-code-button-failed", ctx.showCopyFailure());
    }
  }, "CopySourceCodeButton_HostBindings"),
  attrs: _c12,
  decls: 5,
  vars: 0,
  consts: [["aria-hidden", "true", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "docs-copy"], ["d", "M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16Z", "fill", "#A39FA9"], [1, "docs-check"]],
  template: /* @__PURE__ */ __name(function CopySourceCodeButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "i");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 0);
      \u0275\u0275element(2, "path", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(3, "docs-icon", 2);
      \u0275\u0275text(4, "check");
      \u0275\u0275elementEnd();
    }
  }, "CopySourceCodeButton_Template"),
  dependencies: [CommonModule, IconComponent],
  encapsulation: 2,
  changeDetection: 0
}));
var CopySourceCodeButton = _CopySourceCodeButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CopySourceCodeButton, [{
    type: Component,
    args: [{
      selector: "button[docs-copy-source-code]",
      imports: [CommonModule, IconComponent],
      host: {
        "type": "button",
        "aria-label": "Copy example source to clipboard",
        "title": "Copy example source",
        "(click)": "copySourceCode()",
        "[class.docs-copy-source-code-button-success]": "showCopySuccess()",
        "[class.docs-copy-source-code-button-failed]": "showCopyFailure()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<i>\n  <svg\n    aria-hidden="true"\n    width="24"\n    height="24"\n    viewBox="0 0 24 24"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n    class="docs-copy"\n  >\n    <path\n      d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16Z"\n      fill="#A39FA9"\n    />\n  </svg>\n</i>\n\n<docs-icon class="docs-check">check</docs-icon>\n'
    }]
  }], null, null);
})();
var CodeExampleViewMode;
(function(CodeExampleViewMode2) {
  CodeExampleViewMode2["SNIPPET"] = "snippet";
  CodeExampleViewMode2["MULTI_FILE"] = "multi";
})(CodeExampleViewMode || (CodeExampleViewMode = {}));
var CODE_LINE_NUMBER_CLASS_NAME = "shiki-ln-number";
var CODE_LINE_CLASS_NAME = "line";
var GAP_CODE_LINE_CLASS_NAME = "gap";
var HIDDEN_CLASS_NAME = "hidden";
var _ExampleViewer = class _ExampleViewer {
  exampleMetadata = input(null, ...ngDevMode ? [{
    debugName: "exampleMetadata",
    alias: "metadata"
  }] : [{
    alias: "metadata"
  }]);
  githubUrl = input(null, ...ngDevMode ? [{
    debugName: "githubUrl"
  }] : []);
  stackblitzUrl = input(null, ...ngDevMode ? [{
    debugName: "stackblitzUrl"
  }] : []);
  matTabGroup = viewChild("codeTabs", ...ngDevMode ? [{
    debugName: "matTabGroup"
  }] : []);
  changeDetector = inject(ChangeDetectorRef);
  clipboard = inject(Clipboard);
  destroyRef = inject(DestroyRef);
  document = inject(DOCUMENT);
  injector = inject(Injector);
  elementRef = inject(ElementRef);
  exampleViewerContentLoader = inject(EXAMPLE_VIEWER_CONTENT_LOADER);
  shouldDisplayFullName = computed(() => {
    const fileExtensions = this.exampleMetadata()?.files.map((file) => this.getFileExtension(file.name)) ?? [];
    return new Set(fileExtensions).size !== fileExtensions.length;
  }, ...ngDevMode ? [{
    debugName: "shouldDisplayFullName"
  }] : []);
  CodeExampleViewMode = CodeExampleViewMode;
  exampleComponent;
  expandable = signal(false, ...ngDevMode ? [{
    debugName: "expandable"
  }] : []);
  expanded = signal(false, ...ngDevMode ? [{
    debugName: "expanded"
  }] : []);
  snippetCode = signal(void 0, ...ngDevMode ? [{
    debugName: "snippetCode"
  }] : []);
  showCode = signal(true, ...ngDevMode ? [{
    debugName: "showCode"
  }] : []);
  tabs = computed(() => this.exampleMetadata()?.files.map((file) => ({
    name: file.title ?? (this.shouldDisplayFullName() ? file.name : this.getFileExtension(file.name)),
    code: file.sanitizedContent
  })), ...ngDevMode ? [{
    debugName: "tabs"
  }] : []);
  view = computed(() => this.exampleMetadata()?.files.length === 1 ? CodeExampleViewMode.SNIPPET : CodeExampleViewMode.MULTI_FILE, ...ngDevMode ? [{
    debugName: "view"
  }] : []);
  async renderExample() {
    if (this.exampleMetadata()?.path && this.exampleMetadata()?.preview) {
      this.exampleComponent = await this.exampleViewerContentLoader.loadPreview(this.exampleMetadata()?.path);
    }
    this.snippetCode.set(this.exampleMetadata()?.files[0]);
    if (this.exampleMetadata()?.hideCode) {
      this.showCode.set(false);
    }
    afterNextRender(() => {
      this.setCodeLinesVisibility();
      this.elementRef.nativeElement.setAttribute("id", `example-${this.exampleMetadata()?.id.toString()}`);
      this.matTabGroup()?.realignInkBar();
      this.listenToMatTabIndexChange();
      const lines = this.getHiddenCodeLines();
      const lineNumbers = this.getHiddenCodeLineNumbers();
      this.expandable.set(lines.length > 0 || lineNumbers.length > 0);
    }, {
      injector: this.injector
    });
  }
  toggleExampleVisibility() {
    this.expanded.update((expanded) => !expanded);
    this.setCodeLinesVisibility();
  }
  copyLink() {
    const fullUrl = location.origin + location.pathname + location.search + "#example-" + this.exampleMetadata()?.id;
    this.clipboard.copy(fullUrl);
  }
  listenToMatTabIndexChange() {
    const matTabGroup = this.matTabGroup();
    matTabGroup?.realignInkBar();
    matTabGroup?.selectedIndexChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((index) => {
      this.snippetCode.set(this.exampleMetadata()?.files[index]);
      this.changeDetector.detectChanges();
      this.setCodeLinesVisibility();
    });
  }
  getFileExtension(name) {
    const segments = name.split(".");
    return segments.length ? segments[segments.length - 1].toLocaleUpperCase() : "";
  }
  setCodeLinesVisibility() {
    this.expanded() ? this.handleExpandedStateForCodeBlock() : this.handleCollapsedStateForCodeBlock();
  }
  handleExpandedStateForCodeBlock() {
    const lines = this.getHiddenCodeLines();
    const lineNumbers = this.getHiddenCodeLineNumbers();
    const gapLines = Array.from(this.elementRef.nativeElement.querySelectorAll(`.${CODE_LINE_CLASS_NAME}.${GAP_CODE_LINE_CLASS_NAME}`));
    for (const line of lines) {
      line.classList.remove(HIDDEN_CLASS_NAME);
    }
    for (const lineNumber of lineNumbers) {
      lineNumber.classList.remove(HIDDEN_CLASS_NAME);
    }
    for (const expandLine of gapLines) {
      expandLine.remove();
    }
  }
  handleCollapsedStateForCodeBlock() {
    const visibleLinesRange = this.snippetCode()?.visibleLinesRange;
    if (!visibleLinesRange) {
      return;
    }
    const linesToDisplay = (visibleLinesRange?.split(",") ?? []).map((line) => Number(line));
    const lines = Array.from(this.elementRef.nativeElement.querySelectorAll(`.${CODE_LINE_CLASS_NAME}`));
    const lineNumbers = Array.from(this.elementRef.nativeElement.querySelectorAll(`.${CODE_LINE_NUMBER_CLASS_NAME}`));
    const appendGapBefore = [];
    for (const [index, line] of lines.entries()) {
      if (!linesToDisplay.includes(index)) {
        line.classList.add(HIDDEN_CLASS_NAME);
      } else if (!linesToDisplay.includes(index - 1)) {
        appendGapBefore.push(line);
      }
    }
    for (const [index, lineNumber] of lineNumbers.entries()) {
      if (!linesToDisplay.includes(index)) {
        lineNumber.classList.add(HIDDEN_CLASS_NAME);
      }
    }
    for (const [index, element] of appendGapBefore.entries()) {
      if (index === 0) {
        continue;
      }
      const separator = this.document.createElement("div");
      separator.textContent = `...`;
      separator.classList.add(CODE_LINE_CLASS_NAME);
      separator.classList.add(GAP_CODE_LINE_CLASS_NAME);
      element.parentNode?.insertBefore(separator, element);
    }
  }
  getHiddenCodeLines() {
    return Array.from(this.elementRef.nativeElement.querySelectorAll(`.${CODE_LINE_CLASS_NAME}.${HIDDEN_CLASS_NAME}`));
  }
  getHiddenCodeLineNumbers() {
    return Array.from(this.elementRef.nativeElement.querySelectorAll(`.${CODE_LINE_NUMBER_CLASS_NAME}.${HIDDEN_CLASS_NAME}`));
  }
};
__name(_ExampleViewer, "ExampleViewer");
__publicField(_ExampleViewer, "\u0275fac", /* @__PURE__ */ __name(function ExampleViewer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleViewer)();
}, "ExampleViewer_Factory"));
__publicField(_ExampleViewer, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ExampleViewer,
  selectors: [["docs-example-viewer"]],
  viewQuery: /* @__PURE__ */ __name(function ExampleViewer_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.matTabGroup, _c22, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, "ExampleViewer_Query"),
  inputs: {
    exampleMetadata: [1, "metadata", "exampleMetadata"],
    githubUrl: [1, "githubUrl"],
    stackblitzUrl: [1, "stackblitzUrl"]
  },
  decls: 18,
  vars: 10,
  consts: [["openCodeInExternalProvider", ""], ["codeTabs", ""], ["role", "group", 1, "docs-example-viewer"], [1, "docs-example-viewer-actions"], ["aria-hidden", "true"], [1, "docs-example-viewer-icons"], ["type", "button", "role", "switch", "matTooltipPosition", "above", 1, "docs-example-code-toggle", 3, "click", "matTooltip"], ["type", "button", "matTooltip", "Copy link to example", "matTooltipPosition", "above", 1, "docs-example-copy-link", 3, "click"], ["aria-hidden", "true", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "inherit", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11 17H7C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H13Z", "fill", "inherit"], [4, "ngTemplateOutlet"], ["type", "button", "matTooltipPosition", "above", 3, "matTooltip"], [1, "docs-example-viewer-code-wrapper", 3, "docs-example-viewer-snippet", "docs-example-viewer-multi-file"], [1, "docs-example-viewer-preview"], ["animationDuration", "0ms", "mat-stretch-tabs", "false"], [3, "label"], ["type", "button", "matTooltipPosition", "above", 3, "click", "matTooltip"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none"], ["d", "M3 21v-8h2v4.6L17.6 5H13V3h8v8h-2V6.4L6.4 19H11v2H3Z"], ["fill", "var(--gray-400)", "d", "M3.4 22 2 20.6 8.6 14H4v-2h8v8h-2v-4.6L3.4 22ZM12 12V4h2v4.6L20.6 2 22 3.4 15.4 10H20v2h-8Z"], [1, "docs-example-viewer-code-wrapper"], ["docs-copy-source-code", ""], [3, "innerHTML"], [4, "ngComponentOutlet"], ["target", "_blank", "aria-label", "Open example on GitHub", "matTooltip", "Open example on GitHub", "matTooltipPosition", "above", 1, "docs-example-github-link", 3, "href"], ["target", "_blank", "aria-label", "Edit example in StackBlitz", "matTooltip", "Edit example in StackBlitz", "matTooltipPosition", "above", 1, "docs-example-stackblitz-link", 3, "href"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.16141 22.8681C9.16141 22.5894 9.15159 21.8509 9.14614 20.8707C5.96014 21.5798 5.28759 19.296 5.28759 19.296C4.76668 17.9389 4.01559 17.5778 4.01559 17.5778C2.97541 16.8485 4.09414 16.8638 4.09414 16.8638C5.24396 16.9467 5.84886 18.0747 5.84886 18.0747C6.8705 19.8692 8.52923 19.3516 9.18268 19.0505C9.28686 18.2912 9.5825 17.7736 9.90977 17.4801C7.36632 17.184 4.69196 16.176 4.69196 11.6754C4.69196 10.3936 5.13868 9.34523 5.87123 8.52377C5.75396 8.22705 5.36014 7.03305 5.98359 5.41577C5.98359 5.41577 6.94577 5.09996 9.13359 6.61959C10.0467 6.35941 11.0269 6.2285 12.0016 6.22414C12.9741 6.2285 13.9538 6.35941 14.869 6.61959C17.0558 5.09996 18.0163 5.41577 18.0163 5.41577C18.6414 7.0325 18.2481 8.2265 18.1298 8.52377C18.864 9.34523 19.3069 10.3936 19.3069 11.6754C19.3069 16.1874 16.6287 17.1801 14.077 17.4709C14.4889 17.8336 14.8543 18.5503 14.8543 19.6461C14.8543 21.2165 14.8396 22.4836 14.8396 22.8681C14.8396 23.1829 15.0463 23.5478 15.6278 23.4327C20.1758 21.877 23.4545 17.4774 23.4545 12.2907C23.4545 5.80359 18.3256 0.54541 11.9994 0.54541C5.67432 0.54541 0.54541 5.80359 0.54541 12.2907C0.545956 17.479 3.82796 21.8814 8.37977 23.4343C8.95196 23.5418 9.16141 23.179 9.16141 22.8681Z", "fill", "inherit"], ["width", "24", "height", "24", "viewBox", "0 0 356 511", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M138.719 150.22C62.6928 232.614 0.340573 300.4 0.158928 300.856C-0.0227172 301.311 33.9559 301.799 75.6665 301.939L151.505 302.195L117.656 396.511C74.7852 515.966 76.7972 510.288 77.3522 510.288C78.2145 510.288 355.296 209.735 355.296 208.799C355.296 208.245 325.263 207.879 279.943 207.879C233.709 207.879 204.591 207.518 204.591 206.943C204.591 206.428 220.136 162.751 239.137 109.883C279.06 -1.20153 278.545 0.264614 277.638 0.347453C277.26 0.382384 214.746 67.8247 138.719 150.22Z"]],
  template: /* @__PURE__ */ __name(function ExampleViewer_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "header", 3);
      \u0275\u0275conditionalCreate(2, ExampleViewer_Conditional_2_Template, 2, 2)(3, ExampleViewer_Conditional_3_Template, 2, 0, "span", 4);
      \u0275\u0275elementStart(4, "div", 5)(5, "button", 6);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function ExampleViewer_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showCode.set(!ctx.showCode()));
      }, "ExampleViewer_Template_button_click_5_listener"));
      \u0275\u0275elementStart(6, "docs-icon");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function ExampleViewer_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.copyLink());
      }, "ExampleViewer_Template_button_click_8_listener"));
      \u0275\u0275elementStart(9, "i", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "path", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, ExampleViewer_ng_container_12_Template, 1, 0, "ng-container", 10);
      \u0275\u0275conditionalCreate(13, ExampleViewer_Conditional_13_Template, 4, 4, "button", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, ExampleViewer_Conditional_14_Template, 3, 5, "div", 12);
      \u0275\u0275conditionalCreate(15, ExampleViewer_Conditional_15_Template, 2, 1, "div", 13);
      \u0275\u0275template(16, ExampleViewer_ng_template_16_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      const openCodeInExternalProvider_r5 = \u0275\u0275reference(17);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showCode() ? 2 : 3);
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.showCode() ? "Hide code" : "Show code");
      \u0275\u0275attribute("aria-checked", ctx.showCode())("aria-label", ctx.showCode() ? "Hide code" : "Show code");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showCode() ? "code_off" : "code");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", "Copy link to " + ((tmp_6_0 = ctx.exampleMetadata()) == null ? null : tmp_6_0.title) + " example to the clipboard");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", openCodeInExternalProvider_r5);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.expandable() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCode() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.exampleComponent ? 15 : -1);
    }
  }, "ExampleViewer_Template"),
  dependencies: [CommonModule, NgComponentOutlet, NgTemplateOutlet, CopySourceCodeButton, MatTabsModule, MatTab, MatTabGroup, MatTooltipModule, MatTooltip, IconComponent],
  styles: [".docs-dark-mode   [_nghost-%COMP%]   .docs-example-viewer-preview[_ngcontent-%COMP%]{color:var(--primary-contrast);background:var(--gray-900)}@media screen and (prefers-color-scheme: dark){[_nghost-%COMP%]   .docs-example-viewer-preview[_ngcontent-%COMP%]{color:var(--primary-contrast);background:var(--gray-900)}}.docs-light-mode   [_nghost-%COMP%]   .docs-example-viewer-preview[_ngcontent-%COMP%]{background:var(--page-background)}.docs-example-viewer[_ngcontent-%COMP%]{border:1px solid var(--senary-contrast);border-radius:.25rem;overflow:hidden}.docs-example-viewer-actions[_ngcontent-%COMP%]{background:var(--subtle-purple);display:flex;justify-content:space-between;align-items:center;gap:.5rem;border-bottom:1px solid var(--senary-contrast);transition:background .3s ease,border-color .3s ease;padding-inline-end:.65rem;font-family:var(--inter-tight-font)}.docs-example-viewer-actions[_ngcontent-%COMP%]   mat-tab-group[_ngcontent-%COMP%]{max-width:calc(100% - 140px)}.docs-example-viewer-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{background-image:var(--purple-to-blue-horizontal-gradient);background-clip:text;-webkit-background-clip:text;color:rgba(0,0,0,0);padding:.7rem 1.1rem;font-size:.875rem;font-style:normal;font-weight:400;line-height:1.4rem;letter-spacing:-0.00875rem;margin:0;word-wrap:break-word;width:fit-content}.docs-example-viewer-actions[_ngcontent-%COMP%]   .docs-example-viewer-icons[_ngcontent-%COMP%]{display:flex;gap:.75rem}.docs-example-viewer-actions[_ngcontent-%COMP%]   .docs-example-viewer-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .docs-example-viewer-actions[_ngcontent-%COMP%]   .docs-example-viewer-icons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;margin:0;cursor:pointer;height:24px;width:24px;color:var(--gray-400)}.docs-example-viewer-actions[_ngcontent-%COMP%]   .docs-example-viewer-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .docs-example-viewer-actions[_ngcontent-%COMP%]   .docs-example-viewer-icons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{transition:fill .3s ease}.docs-example-viewer-actions[_ngcontent-%COMP%]   .docs-example-viewer-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .docs-example-viewer-actions[_ngcontent-%COMP%]   .docs-example-viewer-icons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:currentColor}.docs-example-viewer-actions[_ngcontent-%COMP%]   .docs-example-viewer-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .docs-example-viewer-actions[_ngcontent-%COMP%]   .docs-example-viewer-icons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:var(--tertiary-contrast)}.docs-example-viewer-code-wrapper[_ngcontent-%COMP%]{position:relative;font-size:.875rem;transition:border-color .3s ease;container:viewerblock/inline-size;background-color:var(--octonary-contrast)}.docs-example-viewer-code-wrapper[_ngcontent-%COMP%]   button[docs-copy-source-code][_ngcontent-%COMP%]{top:.31rem}  .docs-example-viewer-preview{all:initial;display:block;padding:1rem;border-block-start:1px solid var(--senary-contrast)}  .docs-example-viewer-preview *,   .docs-example-viewer-preview code::before,   .docs-example-viewer-preview code,   .docs-example-viewer-preview pre,   .docs-example-viewer-preview a,   .docs-example-viewer-preview i,   .docs-example-viewer-preview p,   .docs-example-viewer-preview h1,   .docs-example-viewer-preview h2,   .docs-example-viewer-preview h3,   .docs-example-viewer-preview h4,   .docs-example-viewer-preview h5,   .docs-example-viewer-preview h6,   .docs-example-viewer-preview ol,   .docs-example-viewer-preview ul,   .docs-example-viewer-preview li,   .docs-example-viewer-preview hr,   .docs-example-viewer-preview input,   .docs-example-viewer-preview select,   .docs-example-viewer-preview table{all:revert}/*# sourceMappingURL=example-viewer.component.css.map */"],
  changeDetection: 0
}));
var ExampleViewer = _ExampleViewer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleViewer, [{
    type: Component,
    args: [{
      selector: "docs-example-viewer",
      imports: [CommonModule, CopySourceCodeButton, MatTabsModule, MatTooltipModule, IconComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="docs-example-viewer" role="group">
  <header class="docs-example-viewer-actions">
    @if (showCode()) {
      @if (view() === CodeExampleViewMode.SNIPPET) {
        <span>{{ exampleMetadata()?.title }}</span>
      }

      @if (view() === CodeExampleViewMode.MULTI_FILE) {
        <mat-tab-group #codeTabs animationDuration="0ms" mat-stretch-tabs="false">
          @for (tab of tabs(); track tab) {
            <mat-tab [label]="tab.name" />
          }
        </mat-tab-group>
      }
    } @else {
      <!-- Title placeholder -->
      <span aria-hidden="true">&nbsp;</span>
    }

    <div class="docs-example-viewer-icons">
      <button
        type="button"
        role="switch"
        class="docs-example-code-toggle"
        [attr.aria-checked]="showCode()"
        [attr.aria-label]="showCode() ? 'Hide code' : 'Show code'"
        (click)="showCode.set(!showCode())"
        [matTooltip]="showCode() ? 'Hide code' : 'Show code'"
        matTooltipPosition="above"
      >
        <docs-icon>{{showCode() ? 'code_off' : 'code'}}</docs-icon>
      </button>
      <button
        type="button"
        class="docs-example-copy-link"
        [attr.aria-label]="'Copy link to ' + exampleMetadata()?.title + ' example to the clipboard'"
        (click)="copyLink()"
        matTooltip="Copy link to example"
        matTooltipPosition="above"
      >
        <i aria-hidden="true">
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- link icon -->
            <path
              d="M11 17H7C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H13Z"
              fill="inherit"
            />
          </svg>
        </i>
      </button>
      <ng-container *ngTemplateOutlet="openCodeInExternalProvider" />
      @if (expandable()) {
        <button
          type="button"
          (click)="toggleExampleVisibility()"
          [attr.aria-label]="(expanded() ? 'Collapse' : 'Expand') + ' code example'"
          matTooltip="{{ expanded() ? 'Collapse' : 'Expand' }} example"
          matTooltipPosition="above"
        >
          <i aria-hidden="true">
            @if (!expanded()) {
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <!-- Expand arrow -->
                <path d="M3 21v-8h2v4.6L17.6 5H13V3h8v8h-2V6.4L6.4 19H11v2H3Z" />
              </svg>
            } @else {
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="var(--gray-400)"
                  d="M3.4 22 2 20.6 8.6 14H4v-2h8v8h-2v-4.6L3.4 22ZM12 12V4h2v4.6L20.6 2 22 3.4 15.4 10H20v2h-8Z"
                />
              </svg>
            }
          </i>
        </button>
      }
    </div>
  </header>

  @if (showCode()) {
    <div
      class="docs-example-viewer-code-wrapper"
      [class.docs-example-viewer-snippet]="view() === CodeExampleViewMode.SNIPPET"
      [class.docs-example-viewer-multi-file]="view() === CodeExampleViewMode.MULTI_FILE"
    >
      <button docs-copy-source-code></button>
      @if (snippetCode()?.sanitizedContent; as content) {
        <div [innerHTML]="content"></div>
      }
    </div>
  }

  @if (exampleComponent) {
    <div class="docs-example-viewer-preview">
      <ng-container *ngComponentOutlet="exampleComponent" />
    </div>
  }

  <ng-template #openCodeInExternalProvider>
    @if (exampleComponent) {
      @if (githubUrl()) {
        <a
          [href]="githubUrl()"
          target="_blank"
          class="docs-example-github-link"
          aria-label="Open example on GitHub"
          matTooltip="Open example on GitHub"
          matTooltipPosition="above"
        >
          <i aria-hidden="true">
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.16141 22.8681C9.16141 22.5894 9.15159 21.8509 9.14614 20.8707C5.96014 21.5798 5.28759 19.296 5.28759 19.296C4.76668 17.9389 4.01559 17.5778 4.01559 17.5778C2.97541 16.8485 4.09414 16.8638 4.09414 16.8638C5.24396 16.9467 5.84886 18.0747 5.84886 18.0747C6.8705 19.8692 8.52923 19.3516 9.18268 19.0505C9.28686 18.2912 9.5825 17.7736 9.90977 17.4801C7.36632 17.184 4.69196 16.176 4.69196 11.6754C4.69196 10.3936 5.13868 9.34523 5.87123 8.52377C5.75396 8.22705 5.36014 7.03305 5.98359 5.41577C5.98359 5.41577 6.94577 5.09996 9.13359 6.61959C10.0467 6.35941 11.0269 6.2285 12.0016 6.22414C12.9741 6.2285 13.9538 6.35941 14.869 6.61959C17.0558 5.09996 18.0163 5.41577 18.0163 5.41577C18.6414 7.0325 18.2481 8.2265 18.1298 8.52377C18.864 9.34523 19.3069 10.3936 19.3069 11.6754C19.3069 16.1874 16.6287 17.1801 14.077 17.4709C14.4889 17.8336 14.8543 18.5503 14.8543 19.6461C14.8543 21.2165 14.8396 22.4836 14.8396 22.8681C14.8396 23.1829 15.0463 23.5478 15.6278 23.4327C20.1758 21.877 23.4545 17.4774 23.4545 12.2907C23.4545 5.80359 18.3256 0.54541 11.9994 0.54541C5.67432 0.54541 0.54541 5.80359 0.54541 12.2907C0.545956 17.479 3.82796 21.8814 8.37977 23.4343C8.95196 23.5418 9.16141 23.179 9.16141 22.8681Z"
                fill="inherit"
              />
            </svg>
          </i>
        </a>
      }
      @if (stackblitzUrl()) {
        <a
          [href]="stackblitzUrl()"
          target="_blank"
          class="docs-example-stackblitz-link"
          aria-label="Edit example in StackBlitz"
          matTooltip="Edit example in StackBlitz"
          matTooltipPosition="above"
        >
          <i aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 356 511"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M138.719 150.22C62.6928 232.614 0.340573 300.4 0.158928 300.856C-0.0227172 301.311 33.9559 301.799 75.6665 301.939L151.505 302.195L117.656 396.511C74.7852 515.966 76.7972 510.288 77.3522 510.288C78.2145 510.288 355.296 209.735 355.296 208.799C355.296 208.245 325.263 207.879 279.943 207.879C233.709 207.879 204.591 207.518 204.591 206.943C204.591 206.428 220.136 162.751 239.137 109.883C279.06 -1.20153 278.545 0.264614 277.638 0.347453C277.26 0.382384 214.746 67.8247 138.719 150.22Z"
              />
            </svg>
          </i>
        </a>
      }
    }
  </ng-template>
</div>
`,
      styles: [".docs-dark-mode :host .docs-example-viewer-preview{color:var(--primary-contrast);background:var(--gray-900)}@media screen and (prefers-color-scheme: dark){:host .docs-example-viewer-preview{color:var(--primary-contrast);background:var(--gray-900)}}.docs-light-mode :host .docs-example-viewer-preview{background:var(--page-background)}.docs-example-viewer{border:1px solid var(--senary-contrast);border-radius:.25rem;overflow:hidden}.docs-example-viewer-actions{background:var(--subtle-purple);display:flex;justify-content:space-between;align-items:center;gap:.5rem;border-bottom:1px solid var(--senary-contrast);transition:background .3s ease,border-color .3s ease;padding-inline-end:.65rem;font-family:var(--inter-tight-font)}.docs-example-viewer-actions mat-tab-group{max-width:calc(100% - 140px)}.docs-example-viewer-actions span:first-of-type{background-image:var(--purple-to-blue-horizontal-gradient);background-clip:text;-webkit-background-clip:text;color:rgba(0,0,0,0);padding:.7rem 1.1rem;font-size:.875rem;font-style:normal;font-weight:400;line-height:1.4rem;letter-spacing:-0.00875rem;margin:0;word-wrap:break-word;width:fit-content}.docs-example-viewer-actions .docs-example-viewer-icons{display:flex;gap:.75rem}.docs-example-viewer-actions .docs-example-viewer-icons a,.docs-example-viewer-actions .docs-example-viewer-icons button{padding:0;margin:0;cursor:pointer;height:24px;width:24px;color:var(--gray-400)}.docs-example-viewer-actions .docs-example-viewer-icons a path,.docs-example-viewer-actions .docs-example-viewer-icons button path{transition:fill .3s ease}.docs-example-viewer-actions .docs-example-viewer-icons a svg,.docs-example-viewer-actions .docs-example-viewer-icons button svg{fill:currentColor}.docs-example-viewer-actions .docs-example-viewer-icons a:hover,.docs-example-viewer-actions .docs-example-viewer-icons button:hover{color:var(--tertiary-contrast)}.docs-example-viewer-code-wrapper{position:relative;font-size:.875rem;transition:border-color .3s ease;container:viewerblock/inline-size;background-color:var(--octonary-contrast)}.docs-example-viewer-code-wrapper button[docs-copy-source-code]{top:.31rem}::ng-deep .docs-example-viewer-preview{all:initial;display:block;padding:1rem;border-block-start:1px solid var(--senary-contrast)}::ng-deep .docs-example-viewer-preview *,::ng-deep .docs-example-viewer-preview code::before,::ng-deep .docs-example-viewer-preview code,::ng-deep .docs-example-viewer-preview pre,::ng-deep .docs-example-viewer-preview a,::ng-deep .docs-example-viewer-preview i,::ng-deep .docs-example-viewer-preview p,::ng-deep .docs-example-viewer-preview h1,::ng-deep .docs-example-viewer-preview h2,::ng-deep .docs-example-viewer-preview h3,::ng-deep .docs-example-viewer-preview h4,::ng-deep .docs-example-viewer-preview h5,::ng-deep .docs-example-viewer-preview h6,::ng-deep .docs-example-viewer-preview ol,::ng-deep .docs-example-viewer-preview ul,::ng-deep .docs-example-viewer-preview li,::ng-deep .docs-example-viewer-preview hr,::ng-deep .docs-example-viewer-preview input,::ng-deep .docs-example-viewer-preview select,::ng-deep .docs-example-viewer-preview table{all:revert}/*# sourceMappingURL=example-viewer.component.css.map */\n"]
    }]
  }], null, null);
})();
var TOC_HOST_ELEMENT_NAME = "docs-table-of-contents";
var DOCS_VIEWER_SELECTOR = "docs-viewer, main[docsViewer]";
var DOCS_CODE_SELECTOR = ".docs-code";
var DOCS_CODE_MUTLIFILE_SELECTOR = ".docs-code-multifile";
var GITHUB_CONTENT_URL = "https://github.com/angular/angular/blob/main/";
var _DocViewer = class _DocViewer {
  docContent = input(...ngDevMode ? [void 0, {
    debugName: "docContent"
  }] : []);
  hasToc = input(false, ...ngDevMode ? [{
    debugName: "hasToc"
  }] : []);
  contentLoaded = output();
  destroyRef = inject(DestroyRef);
  document = inject(DOCUMENT);
  elementRef = inject(ElementRef);
  location = inject(Location);
  navigationState = inject(NavigationState);
  router = inject(Router);
  viewContainer = inject(ViewContainerRef);
  environmentInjector = inject(EnvironmentInjector);
  injector = inject(Injector);
  appRef = inject(ApplicationRef);
  sanitizer = inject(DomSanitizer);
  animateContent = false;
  pendingTasks = inject(PendingTasks);
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  countOfExamples = 0;
  constructor() {
    effect(async () => {
      const removeTask = this.pendingTasks.add();
      await this.renderContentsAndRunClientSetup(this.docContent());
      removeTask();
    });
  }
  async renderContentsAndRunClientSetup(content) {
    const contentContainer = this.elementRef.nativeElement;
    if (content) {
      if (this.isBrowser && !this.document.startViewTransition) {
        this.animateContent = true;
      }
      contentContainer.innerHTML = content;
    }
    if (this.isBrowser) {
      this.setupAnchorListeners(contentContainer);
      this.rewriteRelativeAnchors(contentContainer);
      await this.loadExamples();
      this.loadCopySourceCodeButtons();
    }
    this.loadBreadcrumb(contentContainer);
    this.loadIcons(contentContainer);
    this.renderTableOfContents(contentContainer);
    this.contentLoaded.emit();
  }
  /**
   * Load ExampleViewer component when:
   * - exists docs-code-multifile element with multiple files OR
   * - exists docs-code element with single file AND
   *   - 'preview' attribute was provided OR
   *   - 'visibleLines' attribute was provided
   */
  async loadExamples() {
    const multifileCodeExamples = Array.from(this.elementRef.nativeElement.querySelectorAll(DOCS_CODE_MUTLIFILE_SELECTOR));
    for (let placeholder of multifileCodeExamples) {
      const path = placeholder.getAttribute("path");
      const snippets = this.getCodeSnippetsFromMultifileWrapper(placeholder);
      await this.renderExampleViewerComponents(placeholder, snippets, path);
    }
    const docsCodeElements = this.elementRef.nativeElement.querySelectorAll(DOCS_CODE_SELECTOR);
    for (const placeholder of docsCodeElements) {
      const snippet = this.getStandaloneCodeSnippet(placeholder);
      if (snippet) {
        await this.renderExampleViewerComponents(placeholder, [snippet], snippet.name);
      }
    }
  }
  renderTableOfContents(element) {
    if (!this.hasToc()) {
      return;
    }
    const firstHeading = element.querySelector("h2,h3[id]");
    if (!firstHeading) {
      return;
    }
    let tocHostElement = element.querySelector(TOC_HOST_ELEMENT_NAME);
    if (!tocHostElement) {
      tocHostElement = this.document.createElement(TOC_HOST_ELEMENT_NAME);
      tocHostElement.setAttribute(TOC_SKIP_CONTENT_MARKER, "true");
      firstHeading?.parentNode?.insertBefore(tocHostElement, firstHeading);
    }
    this.renderComponent(TableOfContents, tocHostElement, {
      contentSourceElement: element
    });
  }
  async renderExampleViewerComponents(placeholder, snippets, path) {
    const preview = Boolean(placeholder.getAttribute("preview"));
    const hideCode = Boolean(placeholder.getAttribute("hideCode"));
    const title = placeholder.getAttribute("header") ?? void 0;
    const firstCodeSnippetTitle = snippets.length > 0 ? snippets[0].title ?? snippets[0].name : void 0;
    const exampleRef = this.viewContainer.createComponent(ExampleViewer);
    this.countOfExamples++;
    exampleRef.setInput("metadata", {
      title: title ?? firstCodeSnippetTitle,
      path,
      files: snippets,
      preview,
      hideCode,
      id: this.countOfExamples
    });
    exampleRef.setInput("githubUrl", `${GITHUB_CONTENT_URL}/${snippets[0].name}`);
    exampleRef.setInput("stackblitzUrl", null);
    placeholder.parentElement.replaceChild(exampleRef.location.nativeElement, placeholder);
    await exampleRef.instance.renderExample();
  }
  getCodeSnippetsFromMultifileWrapper(element) {
    const tabs = Array.from(element.querySelectorAll(DOCS_CODE_SELECTOR));
    return tabs.map((tab) => ({
      name: tab.getAttribute("path") ?? tab.getAttribute("header") ?? "",
      sanitizedContent: this.sanitizer.bypassSecurityTrustHtml(tab.innerHTML),
      visibleLinesRange: tab.getAttribute("visibleLines") ?? void 0
    }));
  }
  getStandaloneCodeSnippet(element) {
    const visibleLines = element.getAttribute("visibleLines") ?? void 0;
    const preview = element.getAttribute("preview");
    if (!visibleLines && !preview) {
      return null;
    }
    const content = element.querySelector("pre");
    const path = element.getAttribute("path");
    const title = element.getAttribute("header") ?? void 0;
    return {
      title,
      name: path,
      sanitizedContent: content?.outerHTML ? this.sanitizer.bypassSecurityTrustHtml(content.outerHTML) : "",
      visibleLinesRange: visibleLines
    };
  }
  // If the content contains static code snippets, we should add buttons to copy
  // the code
  loadCopySourceCodeButtons() {
    const staticCodeSnippets = Array.from(this.elementRef.nativeElement.querySelectorAll(".docs-code:not([mermaid])"));
    for (let codeSnippet of staticCodeSnippets) {
      const copySourceCodeButton = this.viewContainer.createComponent(CopySourceCodeButton);
      codeSnippet.appendChild(copySourceCodeButton.location.nativeElement);
    }
  }
  loadBreadcrumb(element) {
    const breadcrumbPlaceholder = element.querySelector("docs-breadcrumb");
    const activeNavigationItem = this.navigationState.activeNavigationItem();
    if (breadcrumbPlaceholder && !!activeNavigationItem?.parent) {
      this.renderComponent(Breadcrumb, breadcrumbPlaceholder);
    }
  }
  loadIcons(element) {
    element.querySelectorAll("docs-icon:not([docs-copy-source-code] docs-icon)").forEach((iconsPlaceholder) => {
      this.renderComponent(IconComponent, iconsPlaceholder);
    });
  }
  /**
   * Helper method to render a component dynamically in a context of this class.
   */
  renderComponent(type, hostElement, inputs) {
    const componentRef = createComponent(type, {
      hostElement,
      elementInjector: this.injector,
      environmentInjector: this.environmentInjector
    });
    if (inputs) {
      for (const [name, value] of Object.entries(inputs)) {
        componentRef.setInput(name, value);
      }
    }
    this.appRef.attachView(componentRef.hostView);
    if (this.isBrowser) {
      this.destroyRef.onDestroy(() => componentRef.destroy());
    }
    return componentRef;
  }
  setupAnchorListeners(element) {
    element.querySelectorAll(`a[href]`).forEach((anchor) => {
      const url = new URL(anchor.href);
      const isExternalLink2 = url.origin !== this.document.location.origin;
      if (isExternalLink2) {
        return;
      }
      fromEvent(anchor, "click").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((e) => {
        const closestAnchor = e.target.closest("a");
        if (closestAnchor?.target && closestAnchor.target !== "self") {
          return;
        }
        const hrefAttr = closestAnchor?.getAttribute?.("href");
        if (!hrefAttr) {
          return;
        }
        let relativeUrl;
        if (hrefAttr.startsWith("http")) {
          const url2 = new URL(hrefAttr);
          relativeUrl = `${url2.pathname}${url2.hash}${url2.search}`;
        } else {
          relativeUrl = hrefAttr;
        }
        const scrollToElementExists = relativeUrl.startsWith(this.location.path() + "#");
        if (!scrollToElementExists) {
          handleHrefClickEventWithRouter(e, this.router, relativeUrl);
        }
      });
    });
  }
  rewriteRelativeAnchors(element) {
    for (const anchor of Array.from(element.querySelectorAll(`a[href^="#"]:not(a[download])`))) {
      const url = new URL(anchor.href);
      anchor.href = this.location.path() + url.hash;
    }
  }
};
__name(_DocViewer, "DocViewer");
__publicField(_DocViewer, "\u0275fac", /* @__PURE__ */ __name(function DocViewer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocViewer)();
}, "DocViewer_Factory"));
__publicField(_DocViewer, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _DocViewer,
  selectors: [["docs-viewer"], ["main", "docsViewer", ""]],
  hostVars: 4,
  hostBindings: /* @__PURE__ */ __name(function DocViewer_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("docs-animate-content", ctx.animateContent)("docs-with-TOC", ctx.hasToc());
    }
  }, "DocViewer_HostBindings"),
  inputs: {
    docContent: [1, "docContent"],
    hasToc: [1, "hasToc"]
  },
  outputs: {
    contentLoaded: "contentLoaded"
  },
  decls: 0,
  vars: 0,
  template: /* @__PURE__ */ __name(function DocViewer_Template(rf, ctx) {
  }, "DocViewer_Template"),
  styles: ['\uFEFF:host{--translate-y: clamp(5px, 0.25em, 7px)}.docs-viewer{display:flex;flex-direction:column;padding:0px;box-sizing:border-box;padding-inline:var(--layout-padding)}@media(max-width: 1430px){.docs-viewer{container:docs-content/inline-size}}@media(min-width: 1800.01px){.docs-viewer{max-width:var(--page-width)}}@media(min-width: 1430.01px){.docs-viewer{margin-left:-16rem;width:calc(100% - 16rem)}}.docs-viewer>*:not(docs-table-of-contents){max-width:calc(1800px - var(--secondary-nav-width) - var(--primary-nav-width) - var(--layout-padding)*2)}.docs-viewer pre{margin-block:0}.docs-viewer h1 .docs-anchor,.docs-viewer h2 .docs-anchor,.docs-viewer h3 .docs-anchor,.docs-viewer h4 .docs-anchor,.docs-viewer h5 .docs-anchor,.docs-viewer h6 .docs-anchor{margin-block-start:.75rem;display:inline-block;color:inherit}.docs-viewer h1 .docs-anchor::after,.docs-viewer h2 .docs-anchor::after,.docs-viewer h3 .docs-anchor::after,.docs-viewer h4 .docs-anchor::after,.docs-viewer h5 .docs-anchor::after,.docs-viewer h6 .docs-anchor::after{content:"\uE157";font-family:"Material Symbols Outlined";opacity:0;margin-left:8px;vertical-align:middle;color:var(--quaternary-contrast);font-size:clamp(18px,1.25em,30px);transition:opacity .3s ease}.docs-viewer h1 .docs-anchor:hover::after,.docs-viewer h2 .docs-anchor:hover::after,.docs-viewer h3 .docs-anchor:hover::after,.docs-viewer h4 .docs-anchor:hover::after,.docs-viewer h5 .docs-anchor:hover::after,.docs-viewer h6 .docs-anchor:hover::after{opacity:1}.docs-viewer h1{font-size:2.5rem;margin-block-end:0}.docs-viewer h2{font-size:2rem;margin-block-end:.5rem}.docs-viewer h3{font-size:1.5rem;margin-block-end:.5rem}.docs-viewer h4{font-size:1.25rem;margin-block-end:.5rem}.docs-viewer h5{font-size:1rem;margin-block-end:0}.docs-viewer h6{font-size:.875rem;margin-block-end:0}.docs-viewer>:last-child{margin-block-end:0}.docs-viewer a:not(.docs-github-links):not(.docs-card):not(.docs-pill):not(.docs-example-github-link)[href^="http:"]::after,.docs-viewer a:not(.docs-github-links):not(.docs-card):not(.docs-pill):not(.docs-example-github-link)[href^="https:"]::after{display:inline-block;content:"\uE89E";font-family:"Material Symbols Outlined";margin-left:.2rem;vertical-align:middle}.docs-viewer-scroll-margin-large h2,.docs-viewer-scroll-margin-large h3{scroll-margin:5em}.docs-header{margin-block-end:1rem}.docs-header>p:first-child{color:var(--quaternary-contrast);font-weight:500;margin:0}.docs-page-title{display:flex;justify-content:space-between}.docs-page-title h1{margin-block:0;font-size:2.25rem}.docs-page-title a{color:var(--primary-contrast);height:fit-content}.docs-page-title a docs-icon{color:var(--gray-400);transition:color .3s ease}.docs-page-title a:hover docs-icon{color:var(--primary-contrast)}/*# sourceMappingURL=docs-viewer.component.css.map */\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var DocViewer = _DocViewer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocViewer, [{
    type: Component,
    args: [{
      selector: DOCS_VIEWER_SELECTOR,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.docs-animate-content]": "animateContent",
        "[class.docs-with-TOC]": "hasToc()"
      },
      styles: ['\uFEFF:host{--translate-y: clamp(5px, 0.25em, 7px)}.docs-viewer{display:flex;flex-direction:column;padding:0px;box-sizing:border-box;padding-inline:var(--layout-padding)}@media(max-width: 1430px){.docs-viewer{container:docs-content/inline-size}}@media(min-width: 1800.01px){.docs-viewer{max-width:var(--page-width)}}@media(min-width: 1430.01px){.docs-viewer{margin-left:-16rem;width:calc(100% - 16rem)}}.docs-viewer>*:not(docs-table-of-contents){max-width:calc(1800px - var(--secondary-nav-width) - var(--primary-nav-width) - var(--layout-padding)*2)}.docs-viewer pre{margin-block:0}.docs-viewer h1 .docs-anchor,.docs-viewer h2 .docs-anchor,.docs-viewer h3 .docs-anchor,.docs-viewer h4 .docs-anchor,.docs-viewer h5 .docs-anchor,.docs-viewer h6 .docs-anchor{margin-block-start:.75rem;display:inline-block;color:inherit}.docs-viewer h1 .docs-anchor::after,.docs-viewer h2 .docs-anchor::after,.docs-viewer h3 .docs-anchor::after,.docs-viewer h4 .docs-anchor::after,.docs-viewer h5 .docs-anchor::after,.docs-viewer h6 .docs-anchor::after{content:"\uE157";font-family:"Material Symbols Outlined";opacity:0;margin-left:8px;vertical-align:middle;color:var(--quaternary-contrast);font-size:clamp(18px,1.25em,30px);transition:opacity .3s ease}.docs-viewer h1 .docs-anchor:hover::after,.docs-viewer h2 .docs-anchor:hover::after,.docs-viewer h3 .docs-anchor:hover::after,.docs-viewer h4 .docs-anchor:hover::after,.docs-viewer h5 .docs-anchor:hover::after,.docs-viewer h6 .docs-anchor:hover::after{opacity:1}.docs-viewer h1{font-size:2.5rem;margin-block-end:0}.docs-viewer h2{font-size:2rem;margin-block-end:.5rem}.docs-viewer h3{font-size:1.5rem;margin-block-end:.5rem}.docs-viewer h4{font-size:1.25rem;margin-block-end:.5rem}.docs-viewer h5{font-size:1rem;margin-block-end:0}.docs-viewer h6{font-size:.875rem;margin-block-end:0}.docs-viewer>:last-child{margin-block-end:0}.docs-viewer a:not(.docs-github-links):not(.docs-card):not(.docs-pill):not(.docs-example-github-link)[href^="http:"]::after,.docs-viewer a:not(.docs-github-links):not(.docs-card):not(.docs-pill):not(.docs-example-github-link)[href^="https:"]::after{display:inline-block;content:"\uE89E";font-family:"Material Symbols Outlined";margin-left:.2rem;vertical-align:middle}.docs-viewer-scroll-margin-large h2,.docs-viewer-scroll-margin-large h3{scroll-margin:5em}.docs-header{margin-block-end:1rem}.docs-header>p:first-child{color:var(--quaternary-contrast);font-weight:500;margin:0}.docs-page-title{display:flex;justify-content:space-between}.docs-page-title h1{margin-block:0;font-size:2.25rem}.docs-page-title a{color:var(--primary-contrast);height:fit-content}.docs-page-title a docs-icon{color:var(--gray-400);transition:color .3s ease}.docs-page-title a:hover docs-icon{color:var(--primary-contrast)}/*# sourceMappingURL=docs-viewer.component.css.map */\n']
    }]
  }], () => [], null);
})();
var STORAGE_KEY = "docs-accepts-cookies";
var _CookiePopup = class _CookiePopup {
  localStorage = inject(LOCAL_STORAGE);
  /** Whether the user has accepted the cookie disclaimer. */
  hasAccepted = signal(false, ...ngDevMode ? [{
    debugName: "hasAccepted"
  }] : []);
  constructor() {
    try {
      this.hasAccepted.set(this.localStorage?.getItem(STORAGE_KEY) === "true");
    } catch {
      this.hasAccepted.set(false);
    }
  }
  /** Accepts the cookie disclaimer. */
  accept() {
    try {
      this.localStorage?.setItem(STORAGE_KEY, "true");
    } catch {
    }
    this.hasAccepted.set(true);
    setCookieConsent("granted");
  }
};
__name(_CookiePopup, "CookiePopup");
__publicField(_CookiePopup, "\u0275fac", /* @__PURE__ */ __name(function CookiePopup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CookiePopup)();
}, "CookiePopup_Factory"));
__publicField(_CookiePopup, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CookiePopup,
  selectors: [["docs-cookie-popup"]],
  decls: 1,
  vars: 1,
  consts: [[1, "docs-cookies-popup", "docs-invert-mode"], ["href", "https://policies.google.com/technologies/cookies", "target", "_blank", "rel", "noopener"], ["aria-label", "\u4E86\u89E3\u66F4\u591A", 1, "docs-primary-btn"], ["type", "button", "aria-label", "\u597D\u7684\uFF0C\u6211\u77E5\u9053\u4E86", 1, "docs-primary-btn", 3, "click"]],
  template: /* @__PURE__ */ __name(function CookiePopup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CookiePopup_Conditional_0_Template, 9, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.hasAccepted() ? 0 : -1);
    }
  }, "CookiePopup_Template"),
  styles: ["[_nghost-%COMP%]{position:fixed;bottom:.5rem;right:.5rem;z-index:var(--z-index-cookie-consent);opacity:0;visibility:hidden;animation:1s linear forwards .5s _ngcontent-%COMP%_fadeIn}.docs-cookies-popup[_ngcontent-%COMP%]{padding:1rem;background-color:var(--page-background);border:1px solid var(--senary-contrast);border-radius:.25rem;font-size:.875rem;max-width:265px;transition:background-color .3s ease,border-color .3s ease,color .3s ease;box-shadow:0 0 10px 0 rgba(0,0,0,.1)}.docs-cookies-popup[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center;width:100%;margin-block-start:1rem}.docs-cookies-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-block:0;color:var(--primary-contrast)}@keyframes _ngcontent-%COMP%_fadeIn{100%{opacity:100%;visibility:visible}}/*# sourceMappingURL=cookie-popup.component.css.map */"],
  changeDetection: 0
}));
var CookiePopup = _CookiePopup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookiePopup, [{
    type: Component,
    args: [{
      selector: "docs-cookie-popup",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (!hasAccepted()) {
<div class="docs-cookies-popup docs-invert-mode">
  <p>\u672C\u7F51\u7AD9\u4F7F\u7528 Google \u7684 Cookie \u6765\u63D0\u4F9B\u670D\u52A1\u5E76\u5206\u6790\u6D41\u91CF\u3002</p>

  <div>
    <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">
      <button class="docs-primary-btn" [attr.text]="'\u4E86\u89E3\u66F4\u591A'" aria-label="\u4E86\u89E3\u66F4\u591A">
        \u4E86\u89E3\u66F4\u591A
      </button>
    </a>
    <button
      type="button"
      (click)="accept()"
      class="docs-primary-btn"
      [attr.text]="'\u597D\u7684\uFF0C\u6211\u77E5\u9053\u4E86'"
      aria-label="\u597D\u7684\uFF0C\u6211\u77E5\u9053\u4E86"
    >
      \u597D\u7684\uFF0C\u6211\u77E5\u9053\u4E86
    </button>
  </div>
</div>
}
`,
      styles: [":host{position:fixed;bottom:.5rem;right:.5rem;z-index:var(--z-index-cookie-consent);opacity:0;visibility:hidden;animation:1s linear forwards .5s fadeIn}.docs-cookies-popup{padding:1rem;background-color:var(--page-background);border:1px solid var(--senary-contrast);border-radius:.25rem;font-size:.875rem;max-width:265px;transition:background-color .3s ease,border-color .3s ease,color .3s ease;box-shadow:0 0 10px 0 rgba(0,0,0,.1)}.docs-cookies-popup>div{display:flex;gap:.5rem;align-items:center;width:100%;margin-block-start:1rem}.docs-cookies-popup p{margin-block:0;color:var(--primary-contrast)}@keyframes fadeIn{100%{opacity:100%;visibility:visible}}/*# sourceMappingURL=cookie-popup.component.css.map */\n"]
    }]
  }], () => [], null);
})();
var _IsActiveNavigationItem = class _IsActiveNavigationItem {
  // Check whether provided item: `itemToCheck` should be marked as active, based on `activeItem`.
  // In addition to `activeItem`, we should mark all its parents, grandparents, etc. as active.
  transform(itemToCheck, activeItem) {
    let node = activeItem?.parent;
    while (node) {
      if (node === itemToCheck) {
        return true;
      }
      node = node.parent;
    }
    return false;
  }
};
__name(_IsActiveNavigationItem, "IsActiveNavigationItem");
__publicField(_IsActiveNavigationItem, "\u0275fac", /* @__PURE__ */ __name(function IsActiveNavigationItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IsActiveNavigationItem)();
}, "IsActiveNavigationItem_Factory"));
__publicField(_IsActiveNavigationItem, "\u0275pipe", /* @__PURE__ */ \u0275\u0275definePipe({
  name: "isActiveNavigationItem",
  type: _IsActiveNavigationItem,
  pure: true
}));
var IsActiveNavigationItem = _IsActiveNavigationItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IsActiveNavigationItem, [{
    type: Pipe,
    args: [{
      name: "isActiveNavigationItem"
    }]
  }], null, null);
})();
var _RelativeLink = class _RelativeLink {
  transform(absoluteUrl, result = "relative") {
    const url = new URL(normalizePath(absoluteUrl));
    if (result === "hash") {
      return url.hash?.substring(1) ?? "";
    }
    if (result === "pathname") {
      return `${removeTrailingSlash(normalizePath(url.pathname))}`;
    }
    return `${removeTrailingSlash(normalizePath(url.pathname))}${url.hash ?? ""}`;
  }
};
__name(_RelativeLink, "RelativeLink");
__publicField(_RelativeLink, "\u0275fac", /* @__PURE__ */ __name(function RelativeLink_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RelativeLink)();
}, "RelativeLink_Factory"));
__publicField(_RelativeLink, "\u0275pipe", /* @__PURE__ */ \u0275\u0275definePipe({
  name: "relativeLink",
  type: _RelativeLink,
  pure: true
}));
var RelativeLink = _RelativeLink;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RelativeLink, [{
    type: Pipe,
    args: [{
      name: "relativeLink"
    }]
  }], null, null);
})();
var _NavigationList = class _NavigationList {
  navigationItems = input.required(...ngDevMode ? [{
    debugName: "navigationItems"
  }] : []);
  displayItemsToLevel = input(2, ...ngDevMode ? [{
    debugName: "displayItemsToLevel"
  }] : []);
  collapsableLevel = input(...ngDevMode ? [void 0, {
    debugName: "collapsableLevel"
  }] : []);
  expandableLevel = input(2, ...ngDevMode ? [{
    debugName: "expandableLevel"
  }] : []);
  isDropdownView = input(false, ...ngDevMode ? [{
    debugName: "isDropdownView"
  }] : []);
  linkClicked = output();
  navigationState = inject(NavigationState);
  activeItem = this.navigationState.activeNavigationItem;
  toggle(item) {
    if (item.level === 1 && item.level !== this.expandableLevel() && item.level !== this.collapsableLevel()) {
      return;
    }
    this.navigationState.toggleItem(item);
  }
  emitClickOnLink() {
    this.linkClicked.emit();
  }
};
__name(_NavigationList, "NavigationList");
__publicField(_NavigationList, "\u0275fac", /* @__PURE__ */ __name(function NavigationList_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavigationList)();
}, "NavigationList_Factory"));
__publicField(_NavigationList, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NavigationList,
  selectors: [["docs-navigation-list"]],
  inputs: {
    navigationItems: [1, "navigationItems"],
    displayItemsToLevel: [1, "displayItemsToLevel"],
    collapsableLevel: [1, "collapsableLevel"],
    expandableLevel: [1, "expandableLevel"],
    isDropdownView: [1, "isDropdownView"]
  },
  outputs: {
    linkClicked: "linkClicked"
  },
  decls: 5,
  vars: 4,
  consts: [["navigationList", ""], ["itemStatus", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "docs-navigation-list", "docs-faceted-list"], [1, "docs-faceted-list-item"], ["target", "_blank", "matTooltipPosition", "after", 3, "href", "matTooltip", "matTooltipDisabled", "matTooltipClass"], ["routerLinkActive", "docs-faceted-list-item-active", "matTooltipPosition", "after", 3, "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "matTooltipClass"], [1, "docs-faceted-list-item-text"], ["routerLinkActive", "docs-faceted-list-item-active", "matTooltipPosition", "after", 3, "click", "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "matTooltipClass"], ["matTooltipPosition", "after", 1, "docs-secondary-nav-header", 3, "matTooltip", "matTooltipDisabled", "matTooltipClass"], ["type", "button", "matTooltipPosition", "after", 1, "docs-secondary-nav-button", 3, "docs-faceted-list-item-active", "docs-expanded-button", "docs-not-expanded-button", "docs-nav-item-has-icon", "matTooltip", "matTooltipDisabled", "matTooltipClass"], ["type", "button", "matTooltipPosition", "after", 1, "docs-secondary-nav-button", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipClass"], [1, "tag", "docs-new-item"], [1, "tag", "docs-updated-item"]],
  template: /* @__PURE__ */ __name(function NavigationList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NavigationList_ng_template_0_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, NavigationList_ng_container_2_Template, 1, 0, "ng-container", 2)(3, NavigationList_ng_template_3_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const navigationList_r6 = \u0275\u0275reference(1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", navigationList_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c32, ctx.navigationItems()));
    }
  }, "NavigationList_Template"),
  dependencies: [RouterLink, RouterLinkActive, IconComponent, NgTemplateOutlet, MatTooltipModule, MatTooltip, IsActiveNavigationItem],
  styles: ['[_nghost-%COMP%]{display:flex;min-width:var(--secondary-nav-width);list-style:none;overflow-y:auto;overflow-x:hidden;height:100vh;padding:0;margin:0;padding-block:1.5rem;font-size:.875rem;box-sizing:border-box}[_nghost-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,0);cursor:pointer}[_nghost-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_nghost-%COMP%]::-webkit-scrollbar-thumb{border-radius:10px;transition:background-color .3s ease;background-color:var(--septenary-contrast)}@media(max-width: 900px){[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--quinary-contrast)}}[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--quinary-contrast)}.docs-nav-secondary   [_nghost-%COMP%]{padding-block:2rem}[_nghost-%COMP%] > .docs-faceted-list[_ngcontent-%COMP%]{border:0}[_nghost-%COMP%]   .docs-faceted-list-item-text[_ngcontent-%COMP%]{max-width:calc(100% - 1rem);overflow:hidden;text-overflow:ellipsis}[_nghost-%COMP%]   .docs-nav-item-has-icon[_ngcontent-%COMP%]::after{content:"chevron_right";font-size:1.25rem;font-family:var(--icons)}[_nghost-%COMP%]   .tag[_ngcontent-%COMP%]{--label-theme: var(--symbolic-purple);color:var(--label-theme);background:color-mix(in srgb, var(--label-theme) 10%, white);margin-inline-start:.5rem;border-radius:.25rem;font-size:.7rem;padding:.25rem .5rem}.docs-dark-mode   [_nghost-%COMP%]   .tag[_ngcontent-%COMP%]{background:color-mix(in srgb, var(--label-theme) 17%, #272727)}.docs-light-mode   [_nghost-%COMP%]   .tag[_ngcontent-%COMP%]{background:color-mix(in srgb, var(--label-theme) 10%, white)}[_nghost-%COMP%]   .tag.docs-new-item[_ngcontent-%COMP%]{--label-theme: var(--symbolic-green)}[_nghost-%COMP%]   .tag.docs-updated-item[_ngcontent-%COMP%]{--label-theme: var(--symbolic-blue)}.docs-secondary-nav-header[_ngcontent-%COMP%]{padding-block:1.25rem;font-weight:500}.docs-secondary-nav-button[_ngcontent-%COMP%]{width:15rem;display:flex;justify-content:space-between;align-items:center;border:none;padding-block:1.25rem;padding-inline-start:0;color:var(--primary-contrast);font-size:.875rem;font-family:var(--inter-font);line-height:160%;letter-spacing:-0.00875rem;transition:color .3s ease,background .3s ease;text-align:left}.docs-secondary-nav-button.docs-secondary-nav-button-active[_ngcontent-%COMP%]{background-image:var(--pink-to-purple-vertical-gradient)}.docs-secondary-nav-button.docs-secondary-nav-button-active[_ngcontent-%COMP%]::before{opacity:1;transform:scaleY(1);background:var(--pink-to-purple-vertical-gradient)}.docs-secondary-nav-button.docs-secondary-nav-button-active[_ngcontent-%COMP%]:hover::before{opacity:1;transform:scaleY(1.1)}.docs-expanded-button[_ngcontent-%COMP%]{justify-content:start;gap:.5rem}a[_ngcontent-%COMP%], .docs-not-expanded-button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-weight:500;line-height:1.4rem;letter-spacing:-0.00875rem;padding:.5rem;padding-inline-start:1rem;text-align:left}.docs-navigation-list[_ngcontent-%COMP%]{width:100%}.docs-navigation-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   ul[_ngcontent-%COMP%]:last-of-type   li[_ngcontent-%COMP%]:last-of-type{padding-block-end:1rem}.docs-navigation-list[_ngcontent-%COMP%]:first-child{margin-inline-start:1rem}.docs-external-link[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:.5rem}.docs-external-link[_ngcontent-%COMP%]::after{content:"open_in_new";font-family:var(--icons);font-size:1.1rem;color:var(--quinary-contrast);transition:color .3s ease;margin-inline-end:.4rem}  .API-tooltip .mat-mdc-tooltip-surface{max-width:unset;width:auto;word-break:keep-all;white-space:pre}/*# sourceMappingURL=navigation-list.component.css.map */'],
  changeDetection: 0
}));
var NavigationList = _NavigationList;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationList, [{
    type: Component,
    args: [{
      selector: "docs-navigation-list",
      imports: [RouterLink, RouterLinkActive, IconComponent, IsActiveNavigationItem, NgTemplateOutlet, MatTooltipModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-template #navigationList let-navigationItems>
  <ul
    class="docs-navigation-list docs-faceted-list"
    [class.docs-navigation-list-dropdown]="isDropdownView()"
  >
    @for (item of navigationItems; track $index) {
      <li class="docs-faceted-list-item">
        @if (item.path) {
          @if (item.isExternal) {
            <a
              [href]="item.path"
              target="_blank"
              [matTooltip]="item.label"
              [matTooltipDisabled]="item.label.length < 27"
              matTooltipPosition="after"
              [attr.aria-label]="item.label"
              [matTooltipClass]="'API-tooltip'"
            >
              <span
                [class.docs-external-link]="item.isExternal"
                class="docs-faceted-list-item-text"
              >
                {{ item.label }}
                <ng-container *ngTemplateOutlet="itemStatus; context: {$implicit: item}" />
              </span>

              @if (item.children && item.level! > 1 && !item.isExpanded) {
                <docs-icon>chevron_right</docs-icon>
              }
            </a>
          } @else {
            <a
              [routerLink]="'/' + item.path"
              routerLinkActive="docs-faceted-list-item-active"
              [routerLinkActiveOptions]="{ exact: true }"
              (click)="emitClickOnLink()"
              [matTooltip]="item.label"
              [matTooltipDisabled]="item.label.length < 27"
              matTooltipPosition="after"
              [attr.aria-label]="item.label"
              [matTooltipClass]="'API-tooltip'"
            >
              <span class="docs-faceted-list-item-text">
                {{item.label}}
                <ng-container *ngTemplateOutlet="itemStatus; context: {$implicit: item}" />
              </span>

              @if (item.children && !item.isExpanded) {
                <docs-icon>chevron_right</docs-icon>
              }
            </a>
          }
        } @else {
          <!-- Nav Section Header -->
          @if (item.level !== collapsableLevel() && item.level !== expandableLevel()) {
            <div
              class="docs-secondary-nav-header"
              [matTooltip]="item.label"
              [matTooltipDisabled]="item.label.length < 27"
              matTooltipPosition="after"
              [attr.aria-label]="item.label"
              [matTooltipClass]="'API-tooltip'"
            >
              <span class="docs-faceted-list-item-text">
                {{item.label}}
                <ng-container *ngTemplateOutlet="itemStatus; context: {$implicit: item}" />
              </span>
            </div>
          }

          <!-- Nav Button Expand/Collapse -->
          @if (
            (item.children && item.level === expandableLevel()) || item.level === collapsableLevel()
          ) {
            <button
              type="button"
              (click)="toggle(item)"
              [attr.aria-label]="(item.isExpanded ? '\u6536\u8D77' : '\u5C55\u5F00') + ' ' + item.label"
              [attr.aria-expanded]="item.isExpanded"
              class="docs-secondary-nav-button"
              [class.docs-faceted-list-item-active]="item | isActiveNavigationItem: activeItem()"
              [class.docs-expanded-button]="item.children && item.level == collapsableLevel()"
              [class.docs-not-expanded-button]="item.children && item.level === expandableLevel()"
              [class.docs-nav-item-has-icon]="
              item.children && item.level === expandableLevel() && !item.isExpanded"
              [matTooltip]="item.label"
              [matTooltipDisabled]="item.label.length < 27"
              matTooltipPosition="after"
              [attr.aria-label]="item.label"
              [matTooltipClass]="'API-tooltip'"
            >
              @if (item.children && item.level === collapsableLevel()) {
                <docs-icon>arrow_back</docs-icon>
              }
              <span class="docs-faceted-list-item-text">
                {{ item.label }}
                <ng-container *ngTemplateOutlet="itemStatus; context: {$implicit: item}" />
              </span>
            </button>
          }
        }
        @if (displayItemsToLevel() > item.level && item.children?.length > 0) {
          <ng-container *ngTemplateOutlet="navigationList; context: {$implicit: item.children}" />
        }
      </li>
    }
  </ul>
</ng-template>

<ng-container *ngTemplateOutlet="navigationList; context: {$implicit: navigationItems()}" />

<ng-template let-item #itemStatus>
  @if (item.status === 'new') {
    <span class="tag docs-new-item">New</span>
  } @else if (item.status === 'updated') {
    <span class="tag docs-updated-item">Updated</span>
  }
</ng-template>
`,
      styles: [':host{display:flex;min-width:var(--secondary-nav-width);list-style:none;overflow-y:auto;overflow-x:hidden;height:100vh;padding:0;margin:0;padding-block:1.5rem;font-size:.875rem;box-sizing:border-box}:host::-webkit-scrollbar-track{background:rgba(0,0,0,0);cursor:pointer}:host::-webkit-scrollbar{width:6px;height:6px}:host::-webkit-scrollbar-thumb{border-radius:10px;transition:background-color .3s ease;background-color:var(--septenary-contrast)}@media(max-width: 900px){:host::-webkit-scrollbar-thumb{background-color:var(--quinary-contrast)}}:host::-webkit-scrollbar-thumb:hover{background-color:var(--quinary-contrast)}.docs-nav-secondary :host{padding-block:2rem}:host>.docs-faceted-list{border:0}:host .docs-faceted-list-item-text{max-width:calc(100% - 1rem);overflow:hidden;text-overflow:ellipsis}:host .docs-nav-item-has-icon::after{content:"chevron_right";font-size:1.25rem;font-family:var(--icons)}:host .tag{--label-theme: var(--symbolic-purple);color:var(--label-theme);background:color-mix(in srgb, var(--label-theme) 10%, white);margin-inline-start:.5rem;border-radius:.25rem;font-size:.7rem;padding:.25rem .5rem}.docs-dark-mode :host .tag{background:color-mix(in srgb, var(--label-theme) 17%, #272727)}.docs-light-mode :host .tag{background:color-mix(in srgb, var(--label-theme) 10%, white)}:host .tag.docs-new-item{--label-theme: var(--symbolic-green)}:host .tag.docs-updated-item{--label-theme: var(--symbolic-blue)}.docs-secondary-nav-header{padding-block:1.25rem;font-weight:500}.docs-secondary-nav-button{width:15rem;display:flex;justify-content:space-between;align-items:center;border:none;padding-block:1.25rem;padding-inline-start:0;color:var(--primary-contrast);font-size:.875rem;font-family:var(--inter-font);line-height:160%;letter-spacing:-0.00875rem;transition:color .3s ease,background .3s ease;text-align:left}.docs-secondary-nav-button.docs-secondary-nav-button-active{background-image:var(--pink-to-purple-vertical-gradient)}.docs-secondary-nav-button.docs-secondary-nav-button-active::before{opacity:1;transform:scaleY(1);background:var(--pink-to-purple-vertical-gradient)}.docs-secondary-nav-button.docs-secondary-nav-button-active:hover::before{opacity:1;transform:scaleY(1.1)}.docs-expanded-button{justify-content:start;gap:.5rem}a,.docs-not-expanded-button{display:flex;justify-content:space-between;align-items:center;font-weight:500;line-height:1.4rem;letter-spacing:-0.00875rem;padding:.5rem;padding-inline-start:1rem;text-align:left}.docs-navigation-list{width:100%}.docs-navigation-list li:last-of-type ul:last-of-type li:last-of-type{padding-block-end:1rem}.docs-navigation-list:first-child{margin-inline-start:1rem}.docs-external-link{display:flex;align-items:center;justify-content:space-between;width:100%;gap:.5rem}.docs-external-link::after{content:"open_in_new";font-family:var(--icons);font-size:1.1rem;color:var(--quinary-contrast);transition:color .3s ease;margin-inline-end:.4rem}::ng-deep .API-tooltip .mat-mdc-tooltip-surface{max-width:unset;width:auto;word-break:keep-all;white-space:pre}/*# sourceMappingURL=navigation-list.component.css.map */\n']
    }]
  }], null, null);
})();
var _Select = class _Select {
  id = input.required(...ngDevMode ? [{
    debugName: "id",
    alias: "selectId"
  }] : [{
    alias: "selectId"
  }]);
  name = input.required(...ngDevMode ? [{
    debugName: "name"
  }] : []);
  options = input.required(...ngDevMode ? [{
    debugName: "options"
  }] : []);
  disabled = model(false, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  // Implemented as part of ControlValueAccessor.
  onChange = /* @__PURE__ */ __name((_) => {
  }, "onChange");
  onTouched = /* @__PURE__ */ __name(() => {
  }, "onTouched");
  selectedOption = signal(null, ...ngDevMode ? [{
    debugName: "selectedOption"
  }] : []);
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.selectedOption.set(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this.onChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  setOption($event) {
    if (this.disabled()) {
      return;
    }
    this.selectedOption.set($event);
    this.onChange($event);
    this.onTouched();
  }
};
__name(_Select, "Select");
__publicField(_Select, "\u0275fac", /* @__PURE__ */ __name(function Select_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Select)();
}, "Select_Factory"));
__publicField(_Select, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _Select,
  selectors: [["docs-select"]],
  hostAttrs: [1, "docs-form-element"],
  inputs: {
    id: [1, "selectId", "id"],
    name: [1, "name"],
    options: [1, "options"],
    disabled: [1, "disabled"]
  },
  outputs: {
    disabled: "disabledChange"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _Select),
    multi: true
  }])],
  decls: 3,
  vars: 3,
  consts: [[3, "ngModelChange", "ngModel"], [3, "value"]],
  template: /* @__PURE__ */ __name(function Select_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "select", 0);
      \u0275\u0275listener("ngModelChange", /* @__PURE__ */ __name(function Select_Template_select_ngModelChange_0_listener($event) {
        return ctx.setOption($event);
      }, "Select_Template_select_ngModelChange_0_listener"));
      \u0275\u0275repeaterCreate(1, Select_For_2_Template, 2, 2, "option", 1, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngModel", ctx.selectedOption());
      \u0275\u0275attribute("id", ctx.id())("name", ctx.name());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.options());
    }
  }, "Select_Template"),
  dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel],
  styles: ["/*# sourceMappingURL=select.component.css.map */"],
  changeDetection: 0
}));
var Select = _Select;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select, [{
    type: Component,
    args: [{
      selector: "docs-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CommonModule, FormsModule],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => Select),
        multi: true
      }],
      host: {
        class: "docs-form-element"
      },
      template: '<select\n  [attr.id]="id()"\n  [attr.name]="name()"\n  [ngModel]="selectedOption()"\n  (ngModelChange)="setOption($event)"\n>\n  @for (item of options(); track item) {\n    <option [value]="item.value">{{ item.label }}</option>\n  }\n</select>\n',
      styles: ["/*# sourceMappingURL=select.component.css.map */\n"]
    }]
  }], null, null);
})();
var _SlideToggle = class _SlideToggle {
  buttonId = input.required(...ngDevMode ? [{
    debugName: "buttonId"
  }] : []);
  label = input.required(...ngDevMode ? [{
    debugName: "label"
  }] : []);
  disabled = model(false, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  // Implemented as part of ControlValueAccessor.
  onChange = /* @__PURE__ */ __name((_) => {
  }, "onChange");
  onTouched = /* @__PURE__ */ __name(() => {
  }, "onTouched");
  checked = signal(false, ...ngDevMode ? [{
    debugName: "checked"
  }] : []);
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked.set(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this.onChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  // Toggles the checked state of the slide-toggle.
  toggle() {
    if (this.disabled()) {
      return;
    }
    this.checked.update((checked) => !checked);
    this.onChange(this.checked());
    this.onTouched();
  }
};
__name(_SlideToggle, "SlideToggle");
__publicField(_SlideToggle, "\u0275fac", /* @__PURE__ */ __name(function SlideToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SlideToggle)();
}, "SlideToggle_Factory"));
__publicField(_SlideToggle, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SlideToggle,
  selectors: [["docs-slide-toggle"]],
  inputs: {
    buttonId: [1, "buttonId"],
    label: [1, "label"],
    disabled: [1, "disabled"]
  },
  outputs: {
    disabled: "disabledChange"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _SlideToggle),
    multi: true
  }])],
  decls: 6,
  vars: 6,
  consts: [[1, "docs-label"], [1, "docs-toggle"], ["type", "checkbox", "role", "switch", 3, "click", "id", "checked"], [1, "docs-slider"]],
  template: /* @__PURE__ */ __name(function SlideToggle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "label")(1, "span", 0);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "input", 2);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function SlideToggle_Template_input_click_4_listener() {
        return ctx.toggle();
      }, "SlideToggle_Template_input_click_4_listener"));
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "span", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("for", ctx.buttonId());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("docs-toggle-active", ctx.checked());
      \u0275\u0275property("id", ctx.buttonId())("checked", ctx.checked());
    }
  }, "SlideToggle_Template"),
  dependencies: [CommonModule],
  styles: ['[_nghost-%COMP%], label[_ngcontent-%COMP%]{display:inline-flex;gap:.5em;align-items:center}.docs-label[_ngcontent-%COMP%]{font-size:.875rem;font-style:normal;font-weight:500;line-height:160%;letter-spacing:-0.00875rem;color:var(--quaternary-contrast)}.docs-toggle[_ngcontent-%COMP%]{position:relative;display:inline-block;width:3rem;height:1.5rem;border:1px solid var(--senary-contrast);border-radius:34px}.docs-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.docs-slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;border-radius:34px;inset:0;background-color:var(--septenary-contrast);transition:background-color .3s ease,border-color .3s ease}.docs-slider[_ngcontent-%COMP%]::before{content:"";position:absolute;inset:0;border-radius:34px;background:var(--pink-to-purple-horizontal-gradient);opacity:0;transition:opacity .3s ease}.docs-slider[_ngcontent-%COMP%]::after{position:absolute;content:"";height:1.25rem;width:1.25rem;left:.125rem;bottom:.125rem;background-color:var(--page-background);transition:transform .3s ease,background-color .3s ease;border-radius:50%}input[_ngcontent-%COMP%]:checked + .docs-slider[_ngcontent-%COMP%]::before{opacity:1}input[_ngcontent-%COMP%]:checked + .docs-slider[_ngcontent-%COMP%]::after{transform:translateX(1.5rem)}/*# sourceMappingURL=slide-toggle.component.css.map */'],
  changeDetection: 0
}));
var SlideToggle = _SlideToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlideToggle, [{
    type: Component,
    args: [{
      selector: "docs-slide-toggle",
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SlideToggle),
        multi: true
      }],
      template: '<label [attr.for]="buttonId()">\n  <span class="docs-label">{{ label() }}</span>\n  <div class="docs-toggle">\n    <input\n      type="checkbox"\n      [id]="buttonId()"\n      role="switch"\n      (click)="toggle()"\n      [class.docs-toggle-active]="checked()"\n      [checked]="checked()"\n    />\n    <span class="docs-slider"></span>\n  </div>\n</label>\n',
      styles: [':host,label{display:inline-flex;gap:.5em;align-items:center}.docs-label{font-size:.875rem;font-style:normal;font-weight:500;line-height:160%;letter-spacing:-0.00875rem;color:var(--quaternary-contrast)}.docs-toggle{position:relative;display:inline-block;width:3rem;height:1.5rem;border:1px solid var(--senary-contrast);border-radius:34px}.docs-toggle input{opacity:0;width:0;height:0}.docs-slider{position:absolute;cursor:pointer;border-radius:34px;inset:0;background-color:var(--septenary-contrast);transition:background-color .3s ease,border-color .3s ease}.docs-slider::before{content:"";position:absolute;inset:0;border-radius:34px;background:var(--pink-to-purple-horizontal-gradient);opacity:0;transition:opacity .3s ease}.docs-slider::after{position:absolute;content:"";height:1.25rem;width:1.25rem;left:.125rem;bottom:.125rem;background-color:var(--page-background);transition:transform .3s ease,background-color .3s ease;border-radius:50%}input:checked+.docs-slider::before{opacity:1}input:checked+.docs-slider::after{transform:translateX(1.5rem)}/*# sourceMappingURL=slide-toggle.component.css.map */\n']
    }]
  }], null, null);
})();
var _TextField = class _TextField {
  input = viewChild.required("inputRef");
  name = input(null, ...ngDevMode ? [{
    debugName: "name"
  }] : []);
  placeholder = input(null, ...ngDevMode ? [{
    debugName: "placeholder"
  }] : []);
  disabled = model(false, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  hideIcon = input(false, ...ngDevMode ? [{
    debugName: "hideIcon"
  }] : []);
  autofocus = input(false, ...ngDevMode ? [{
    debugName: "autofocus"
  }] : []);
  resetLabel = input(null, ...ngDevMode ? [{
    debugName: "resetLabel"
  }] : []);
  // Implemented as part of ControlValueAccessor.
  onChange = /* @__PURE__ */ __name((_) => {
  }, "onChange");
  onTouched = /* @__PURE__ */ __name(() => {
  }, "onTouched");
  value = signal(null, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  constructor() {
    afterNextRender(() => {
      if (this.autofocus()) {
        this.input().nativeElement.focus();
      }
    });
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.value.set(typeof value === "string" ? value : null);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this.onChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  setValue(value) {
    if (this.disabled()) {
      return;
    }
    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }
  clearTextField() {
    this.setValue("");
  }
};
__name(_TextField, "TextField");
__publicField(_TextField, "\u0275fac", /* @__PURE__ */ __name(function TextField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TextField)();
}, "TextField_Factory"));
__publicField(_TextField, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TextField,
  selectors: [["docs-text-field"]],
  viewQuery: /* @__PURE__ */ __name(function TextField_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.input, _c52, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, "TextField_Query"),
  hostAttrs: [1, "docs-form-element"],
  inputs: {
    name: [1, "name"],
    placeholder: [1, "placeholder"],
    disabled: [1, "disabled"],
    hideIcon: [1, "hideIcon"],
    autofocus: [1, "autofocus"],
    resetLabel: [1, "resetLabel"]
  },
  outputs: {
    disabled: "disabledChange"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _TextField),
    multi: true
  }])],
  decls: 4,
  vars: 5,
  consts: [["inputRef", ""], [1, "docs-icon_high-contrast"], ["type", "text", 1, "docs-text-field", 3, "input", "value"], ["type", "reset", 1, "docs-text-reset", 3, "title"], ["type", "reset", 1, "docs-text-reset", 3, "click", "title"], ["width", "20", "height", "20", "viewBox", "0 0 20 20"], ["d", "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", "stroke", "currentColor", "fill", "none", "fill-rule", "evenodd", "stroke-linecap", "round", "stroke-linejoin", "round"]],
  template: /* @__PURE__ */ __name(function TextField_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275conditionalCreate(0, TextField_Conditional_0_Template, 2, 0, "docs-icon", 1);
      \u0275\u0275elementStart(1, "input", 2, 0);
      \u0275\u0275listener("input", /* @__PURE__ */ __name(function TextField_Template_input_input_1_listener() {
        \u0275\u0275restoreView(_r1);
        const inputRef_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(ctx.setValue(inputRef_r2.value));
      }, "TextField_Template_input_input_1_listener"));
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, TextField_Conditional_3_Template, 3, 2, "button", 3);
    }
    if (rf & 2) {
      const inputRef_r2 = \u0275\u0275reference(2);
      \u0275\u0275conditional(!ctx.hideIcon() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.value());
      \u0275\u0275attribute("placeholder", ctx.placeholder())("name", ctx.name());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.resetLabel() && inputRef_r2.value.length > 0 ? 3 : -1);
    }
  }, "TextField_Template"),
  dependencies: [CommonModule, FormsModule, IconComponent],
  styles: [".docs-text-field[_ngcontent-%COMP%]{font-size:1.125rem}docs-icon[_ngcontent-%COMP%] + .docs-text-field[_ngcontent-%COMP%]{font-size:1rem}button[_ngcontent-%COMP%]{color:var(--secondary-contrast)}button[_ngcontent-%COMP%]:hover{color:var(--vivid-pink)}/*# sourceMappingURL=text-field.component.css.map */"],
  changeDetection: 0
}));
var TextField = _TextField;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextField, [{
    type: Component,
    args: [{
      selector: "docs-text-field",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CommonModule, FormsModule, IconComponent],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextField),
        multi: true
      }],
      host: {
        class: "docs-form-element"
      },
      template: '@if (!hideIcon()) {\n  <docs-icon class="docs-icon_high-contrast">search</docs-icon>\n}\n<input\n  #inputRef\n  type="text"\n  [attr.placeholder]="placeholder()"\n  [attr.name]="name()"\n  [value]="value()"\n  (input)="setValue(inputRef.value)"\n  class="docs-text-field"\n/>\n\n@if (resetLabel() && inputRef.value.length > 0) {\n  <button\n    type="reset"\n    [title]="resetLabel()"\n    class="docs-text-reset"\n    [attr.aria-label]="resetLabel()"\n    (click)="clearTextField()"\n  >\n    <svg width="20" height="20" viewBox="0 0 20 20">\n      <path\n        d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"\n        stroke="currentColor"\n        fill="none"\n        fill-rule="evenodd"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n      ></path>\n    </svg>\n  </button>\n}\n',
      styles: [".docs-text-field{font-size:1.125rem}docs-icon+.docs-text-field{font-size:1rem}button{color:var(--secondary-contrast)}button:hover{color:var(--vivid-pink)}/*# sourceMappingURL=text-field.component.css.map */\n"]
    }]
  }], () => [], null);
})();
var _AlgoliaIcon = class _AlgoliaIcon {
};
__name(_AlgoliaIcon, "AlgoliaIcon");
__publicField(_AlgoliaIcon, "\u0275fac", /* @__PURE__ */ __name(function AlgoliaIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlgoliaIcon)();
}, "AlgoliaIcon_Factory"));
__publicField(_AlgoliaIcon, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AlgoliaIcon,
  selectors: [["docs-algolia-icon"]],
  decls: 13,
  vars: 0,
  consts: [["id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 2196.2 500", 1, "docs-algolia-logo"], ["d", "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z", 1, "cls-2"], ["x", "1845.88", "y", "104.73", "width", "62.58", "height", "277.9", "rx", "5.9", "ry", "5.9", 1, "cls-1"], ["d", "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z", 1, "cls-2"], ["d", "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z", 1, "cls-2"], ["d", "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z", 1, "cls-2"], ["d", "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z", 1, "cls-2"], ["d", "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z", 1, "cls-2"], ["d", "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z", 1, "cls-2"], ["d", "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z", 1, "cls-1"]],
  template: /* @__PURE__ */ __name(function AlgoliaIcon_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(0, "svg", 0)(1, "defs")(2, "style");
      \u0275\u0275text(3, " .cls-1, .cls-2 { fill: #003dff; } .cls-2 { fill-rule: evenodd; } ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(4, "path", 1)(5, "rect", 2)(6, "path", 3)(7, "path", 4)(8, "path", 5)(9, "path", 6)(10, "path", 7)(11, "path", 8)(12, "path", 9);
      \u0275\u0275domElementEnd();
    }
  }, "AlgoliaIcon_Template"),
  encapsulation: 2,
  changeDetection: 0
}));
var AlgoliaIcon = _AlgoliaIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlgoliaIcon, [{
    type: Component,
    args: [{
      selector: "docs-algolia-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<!-- Algolia logo -->\n<svg\nid="Layer_1"\nclass="docs-algolia-logo"\nxmlns="http://www.w3.org/2000/svg"\nviewBox="0 0 2196.2 500"\n>\n<defs>\n  <style>\n    .cls-1,\n    .cls-2 {\n      fill: #003dff;\n    }\n    .cls-2 {\n      fill-rule: evenodd;\n    }\n  </style>\n</defs>\n<path\n  class="cls-2"\n  d="M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"\n/>\n<rect class="cls-1" x="1845.88" y="104.73" width="62.58" height="277.9" rx="5.9" ry="5.9" />\n<path\n  class="cls-2"\n  d="M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"\n/>\n<path\n  class="cls-2"\n  d="M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"\n/>\n<path\n  class="cls-2"\n  d="M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"\n/>\n<path\n  class="cls-2"\n  d="M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"\n/>\n<path\n  class="cls-2"\n  d="M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"\n/>\n<path\n  class="cls-2"\n  d="M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"\n/>\n<path\n  class="cls-1"\n  d="M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"\n/>\n</svg>\n'
    }]
  }], null, null);
})();
var _SearchHistoryComponent = class _SearchHistoryComponent {
  items = viewChildren(SearchItem, ...ngDevMode ? [{
    debugName: "items"
  }] : []);
  history = inject(SearchHistory);
  injector = inject(Injector);
  router = inject(Router);
  relativeLink = new RelativeLink();
  keyManager = new ActiveDescendantKeyManager(this.items, this.injector).withWrap();
  lastMouseCoor = {
    x: 0,
    y: 0
  };
  constructor() {
    inject(DestroyRef).onDestroy(() => this.keyManager.destroy());
    afterNextRender({
      write: /* @__PURE__ */ __name(() => {
        if (this.items().length) {
          this.keyManager.setFirstItemActive();
        }
      }, "write")
    });
    const keyManagerActive = toSignal(this.keyManager.change);
    effect(() => {
      if (keyManagerActive() !== void 0) {
        this.keyManager.activeItem?.scrollIntoView();
      }
    });
  }
  onKeydown(e) {
    if (e.key === "Enter") {
      this.navigateToTheActiveItem();
    } else {
      this.keyManager.onKeydown(e);
    }
  }
  onMouseMove(e) {
    this.lastMouseCoor = {
      x: e.clientX,
      y: e.clientY
    };
  }
  onMouseEnter(e, idx) {
    const {
      x,
      y
    } = this.lastMouseCoor;
    if (e.clientX === x && e.clientY === y) {
      return;
    }
    this.keyManager.setActiveItem(idx);
  }
  navigateToTheActiveItem() {
    const activeItemLink = this.keyManager.activeItem?.item()?.url;
    if (activeItemLink) {
      const url = this.relativeLink.transform(activeItemLink);
      this.router.navigateByUrl(url);
    }
  }
};
__name(_SearchHistoryComponent, "SearchHistoryComponent");
__publicField(_SearchHistoryComponent, "\u0275fac", /* @__PURE__ */ __name(function SearchHistoryComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchHistoryComponent)();
}, "SearchHistoryComponent_Factory"));
__publicField(_SearchHistoryComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SearchHistoryComponent,
  selectors: [["docs-search-history"]],
  viewQuery: /* @__PURE__ */ __name(function SearchHistoryComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.items, SearchItem, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, "SearchHistoryComponent_Query"),
  hostBindings: /* @__PURE__ */ __name(function SearchHistoryComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", /* @__PURE__ */ __name(function SearchHistoryComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      }, "SearchHistoryComponent_keydown_HostBindingHandler"), \u0275\u0275resolveDocument)("mousemove", /* @__PURE__ */ __name(function SearchHistoryComponent_mousemove_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      }, "SearchHistoryComponent_mousemove_HostBindingHandler"), \u0275\u0275resolveDocument);
    }
  }, "SearchHistoryComponent_HostBindings"),
  decls: 3,
  vars: 3,
  consts: [[1, "title"], [1, "history-results", "recent"], ["docsSearchItem", "", 3, "item"], ["docsSearchItem", "", 3, "mouseenter", "item"], [3, "click", "routerLink", "fragment"], ["role", "presentation", "aria-hidden", "true", 1, "material-symbols-outlined"], [3, "innerHTML"], ["type", "button", "title", "Make favorite", 1, "fav-btn", 3, "click"], ["type", "button", "title", "Remove item", 1, "remove-btn", 3, "click"], [1, "history-results", "favorite"], [3, "routerLink", "fragment"]],
  template: /* @__PURE__ */ __name(function SearchHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275declareLet(0);
      \u0275\u0275conditionalCreate(1, SearchHistoryComponent_Conditional_1_Template, 5, 0);
      \u0275\u0275conditionalCreate(2, SearchHistoryComponent_Conditional_2_Template, 5, 0);
    }
    if (rf & 2) {
      const items_r9 = \u0275\u0275storeLet(ctx.history.items());
      \u0275\u0275advance();
      \u0275\u0275conditional(items_r9.recent.length ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(items_r9.favorite.length ? 2 : -1);
    }
  }, "SearchHistoryComponent_Template"),
  dependencies: [RouterLink, SearchItem, RelativeLink],
  styles: ["[_nghost-%COMP%]{display:block;max-height:50vh;overflow-y:auto;overscroll-behavior:contain}[_nghost-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-inline:1rem;margin-block-start:1rem;margin-block-end:0;font-size:.875rem;font-weight:600}[_nghost-%COMP%]   .history-results[_ngcontent-%COMP%]{list-style-type:none;padding-inline:0;padding-block:.75rem;margin:0}[_nghost-%COMP%]   .history-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-inline-start:2px solid var(--senary-contrast);margin-inline-start:1rem;display:flex;align-items:center;gap:.5rem;padding-inline-end:1rem}[_nghost-%COMP%]   .history-results[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:var(--octonary-contrast);border-inline-start:2px solid var(--primary-contrast)}[_nghost-%COMP%]   .history-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-inline:.75rem;padding-block:1rem;flex:1;display:flex;align-items:center;gap:.5rem;color:var(--secondary-contrast);transition:color .3s ease}[_nghost-%COMP%]   .history-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-contrast)}[_nghost-%COMP%]   .history-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--secondary-contrast);transition:color .3s ease}[_nghost-%COMP%]   .history-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:var(--vivid-pink)}/*# sourceMappingURL=search-history.component.css.map */"]
}));
var SearchHistoryComponent = _SearchHistoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchHistoryComponent, [{
    type: Component,
    args: [{
      selector: "docs-search-history",
      imports: [RelativeLink, RouterLink, SearchItem],
      host: {
        "(document:keydown)": "onKeydown($event)",
        "(document:mousemove)": "onMouseMove($event)"
      },
      template: `@let items = history.items();

@if (items.recent.length) {
  <p class="title">Recent</p>
  <ul class="history-results recent">
    @for (item of items.recent; track item.id; let idx = $index) {
      <li docsSearchItem [item]="item" (mouseenter)="onMouseEnter($event, idx)">
        <a
          [routerLink]="'/' + item.url | relativeLink: 'pathname'"
          [fragment]="item.url | relativeLink: 'hash'"
          (click)="history.addItem(item)"
        >
          <i role="presentation" class="material-symbols-outlined" aria-hidden="true"> history </i>
          <span [innerHTML]="item.labelHtml"></span>
        </a>

        <button
          type="button"
          class="fav-btn"
          (click)="history.makeFavorite(item)"
          title="Make favorite"
        >
          <i role="presentation" class="material-symbols-outlined" aria-hidden="true"> star </i>
        </button>
        <button
          type="button"
          class="remove-btn"
          (click)="history.removeItem(item)"
          title="Remove item"
        >
          <i role="presentation" class="material-symbols-outlined" aria-hidden="true"> close </i>
        </button>
      </li>
    }
  </ul>
}

@if (items.favorite.length) {
  <p class="title">Favorite</p>
  <ul class="history-results favorite">
    @for (item of items.favorite; track item.id; let idx = $index) {
      <li
        docsSearchItem
        [item]="item"
        (mouseenter)="onMouseEnter($event, items.recent.length + idx)"
      >
        <a
          [routerLink]="'/' + item.url | relativeLink: 'pathname'"
          [fragment]="item.url | relativeLink: 'hash'"
        >
          <i role="presentation" class="material-symbols-outlined" aria-hidden="true"> star </i>
          <span [innerHTML]="item.labelHtml"></span>
        </a>

        <button
          type="button"
          class="remove-btn"
          (click)="history.removeItem(item)"
          title="Remove item"
        >
          <i role="presentation" class="material-symbols-outlined" aria-hidden="true"> close </i>
        </button>
      </li>
    }
  </ul>
}
`,
      styles: [":host{display:block;max-height:50vh;overflow-y:auto;overscroll-behavior:contain}:host i{font-size:1.2rem}:host .title{margin-inline:1rem;margin-block-start:1rem;margin-block-end:0;font-size:.875rem;font-weight:600}:host .history-results{list-style-type:none;padding-inline:0;padding-block:.75rem;margin:0}:host .history-results li{border-inline-start:2px solid var(--senary-contrast);margin-inline-start:1rem;display:flex;align-items:center;gap:.5rem;padding-inline-end:1rem}:host .history-results li.active{background-color:var(--octonary-contrast);border-inline-start:2px solid var(--primary-contrast)}:host .history-results li a{padding-inline:.75rem;padding-block:1rem;flex:1;display:flex;align-items:center;gap:.5rem;color:var(--secondary-contrast);transition:color .3s ease}:host .history-results li a:hover{color:var(--primary-contrast)}:host .history-results li button{color:var(--secondary-contrast);transition:color .3s ease}:host .history-results li button:hover{color:var(--vivid-pink)}/*# sourceMappingURL=search-history.component.css.map */\n"]
    }]
  }], () => [], null);
})();
var _SearchDialog = class _SearchDialog {
  onClose = output();
  dialog = viewChild.required("searchDialog");
  items = viewChildren(SearchItem, ...ngDevMode ? [{
    debugName: "items"
  }] : []);
  textField = viewChild(TextField, ...ngDevMode ? [{
    debugName: "textField"
  }] : []);
  history = inject(SearchHistory);
  search = inject(Search);
  relativeLink = new RelativeLink();
  router = inject(Router);
  window = inject(WINDOW);
  injector = inject(Injector);
  keyManager = new ActiveDescendantKeyManager(this.items, this.injector).withWrap();
  searchQuery = this.search.searchQuery;
  resultsResource = this.search.resultsResource;
  searchResults = this.search.searchResults;
  // We use a FormControl instead of relying on NgModel+signal to avoid
  // the issue https://github.com/angular/angular/issues/13568
  // TODO: Use signal forms when available
  searchControl = new FormControl(this.searchQuery(), {
    nonNullable: true
  });
  constructor() {
    inject(DestroyRef).onDestroy(() => this.keyManager.destroy());
    this.searchControl.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      this.searchQuery.set(value);
    });
    effect(() => {
      this.items();
      afterNextRender({
        write: /* @__PURE__ */ __name(() => this.keyManager.setFirstItemActive(), "write")
      }, {
        injector: this.injector
      });
    });
    this.keyManager.change.pipe(takeUntilDestroyed()).subscribe(() => {
      this.keyManager.activeItem?.scrollIntoView();
    });
    afterNextRender({
      write: /* @__PURE__ */ __name(() => {
        if (!this.dialog().nativeElement.open) {
          this.dialog().nativeElement.showModal?.();
        }
        this.textField()?.input().nativeElement.select();
      }, "write")
    });
    fromEvent(this.window, "keydown").pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event.key === "Enter") {
        this.navigateToTheActiveItem();
      } else {
        this.keyManager.onKeydown(event);
      }
    });
  }
  closeSearchDialog() {
    this.dialog().nativeElement.close();
    this.onClose.emit();
  }
  navigateToTheActiveItem() {
    const activeItemLink = this.keyManager.activeItem?.item()?.url;
    if (!activeItemLink) {
      return;
    }
    this.router.navigateByUrl(this.relativeLink.transform(activeItemLink));
    this.onClose.emit();
  }
};
__name(_SearchDialog, "SearchDialog");
__publicField(_SearchDialog, "\u0275fac", /* @__PURE__ */ __name(function SearchDialog_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchDialog)();
}, "SearchDialog_Factory"));
__publicField(_SearchDialog, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SearchDialog,
  selectors: [["docs-search-dialog"]],
  viewQuery: /* @__PURE__ */ __name(function SearchDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.dialog, _c62, 5);
      \u0275\u0275viewQuerySignal(ctx.items, SearchItem, 5);
      \u0275\u0275viewQuerySignal(ctx.textField, TextField, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  }, "SearchDialog_Query"),
  outputs: {
    onClose: "onClose"
  },
  decls: 41,
  vars: 5,
  consts: [["searchDialog", ""], [1, "docs-search-container", 3, "docsClickOutside"], ["placeholder", "\u641C\u7D22\u6587\u6863", 1, "docs-search-input", 3, "autofocus", "hideIcon", "formControl", "resetLabel"], [1, "docs-search-results", "docs-mini-scroll-track"], [1, "docs-search-footer"], [1, "docs-search-commands"], [1, "docs-search-commands-key"], ["width", "15", "height", "15", "aria-label", "\u56DE\u8F66\u952E", "role", "img"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.2"], ["d", "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"], ["width", "15", "height", "15", "aria-label", "Arrow down", "role", "img"], ["d", "M7.5 3.5v8M10.5 8.5l-3 3-3-3"], ["width", "15", "height", "15", "aria-label", "Arrow up", "role", "img"], ["d", "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"], ["width", "15", "height", "15", "aria-label", "Escape key", "role", "img"], ["d", "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"], [1, "docs-algolia"], ["target", "_blank", "rel", "noopener", "href", "https://www.algolia.com/developers/?utm_source=angular.dev&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"], ["docsSearchItem", "", 3, "item"], [3, "click", "routerLink", "fragment"], [1, "docs-result-icon-and-type"], ["aria-hidden", "true", 1, "docs-search-result-icon"], ["role", "presentation", 1, "material-symbols-outlined", "docs-icon-small"], [1, "docs-search-results__type", 3, "innerHtml"], [1, "docs-search-results__type", "docs-search-results__lvl2", 3, "innerHtml"], [1, "docs-result-page-title"], [1, "docs-search-results__start-typing"], [1, "docs-search-results__no-results"]],
  template: /* @__PURE__ */ __name(function SearchDialog_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "dialog", null, 0)(2, "div", 1);
      \u0275\u0275listener("docsClickOutside", /* @__PURE__ */ __name(function SearchDialog_Template_div_docsClickOutside_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeSearchDialog());
      }, "SearchDialog_Template_div_docsClickOutside_2_listener"));
      \u0275\u0275element(3, "docs-text-field", 2);
      \u0275\u0275conditionalCreate(4, SearchDialog_Conditional_4_Template, 3, 0, "ul", 3)(5, SearchDialog_Conditional_5_Template, 1, 0, "docs-search-history")(6, SearchDialog_Conditional_6_Template, 3, 1, "div", 3);
      \u0275\u0275elementStart(7, "div", 4)(8, "ul", 5)(9, "li")(10, "kbd", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 7)(12, "g", 8);
      \u0275\u0275element(13, "path", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "to select");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "kbd", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10)(19, "g", 8);
      \u0275\u0275element(20, "path", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "kbd", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 12)(23, "g", 8);
      \u0275\u0275element(24, "path", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "to navigate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "kbd", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 14)(30, "g", 8);
      \u0275\u0275element(31, "path", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "\u5173\u95ED");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 16)(35, "span");
      \u0275\u0275text(36, "\u7531");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 17);
      \u0275\u0275element(38, "docs-algolia-icon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "\u63D0\u4F9B\u641C\u7D22\u652F\u6301");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("autofocus", true)("hideIcon", true)("formControl", ctx.searchControl)("resetLabel", "Clear the search");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchResults().length ? 4 : ctx.history.hasItems() && !ctx.searchControl.value.length ? 5 : 6);
    }
  }, "SearchDialog_Template"),
  dependencies: [ClickOutside, TextField, ReactiveFormsModule, NgControlStatus, FormControlDirective, SearchItem, AlgoliaIcon, RouterLink, SearchHistoryComponent, RelativeLink],
  styles: ["dialog[_ngcontent-%COMP%]{background-color:rgba(0,0,0,0);border:none;padding-block-end:3rem;margin:0 auto;top:15vh}dialog[_ngcontent-%COMP%]::backdrop{backdrop-filter:blur(5px)}.docs-search-container[_ngcontent-%COMP%]{width:750px;max-width:90vw;background-color:var(--page-background);border:1px solid var(--senary-contrast);border-radius:.25rem;box-sizing:border-box}.docs-search-container[_ngcontent-%COMP%]   .docs-search-input[_ngcontent-%COMP%]{border-radius:.25rem .25rem 0 0;border:none;border-block-end:1px solid var(--senary-contrast);height:2.6875rem;padding-inline-start:1rem;position:relative}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]{max-height:50vh;overflow-y:auto;overscroll-behavior:contain;list-style-type:none;padding-inline:0;padding-block-start:1rem;padding-block-end:1rem;margin:0;border-block-end:1px solid var(--senary-contrast)}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-inline-start:2px solid var(--senary-contrast);margin-inline-start:1rem;padding-inline-end:1rem;padding-block:.25rem}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     mark{background:#e62600;background:var(--red-to-orange-horizontal-gradient);background-clip:text;-webkit-background-clip:text;color:rgba(0,0,0,0)}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--secondary-contrast);display:flex;justify-content:space-between;gap:.5rem}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .docs-search-result-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1.2rem}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:var(--septenary-contrast)}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:var(--octonary-contrast);border-inline-start:2px solid var(--primary-contrast)}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.docs-result-page-title), .docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .docs-search-results__type[_ngcontent-%COMP%], .docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.docs-result-page-title), .docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .docs-search-results__type[_ngcontent-%COMP%]{color:var(--primary-contrast)}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.docs-result-page-title)   i[_ngcontent-%COMP%], .docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .docs-search-results__type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.docs-result-page-title)   i[_ngcontent-%COMP%], .docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .docs-search-results__type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--primary-contrast)}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   .docs-search-result-icon[_ngcontent-%COMP%], .docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   .docs-search-results__type[_ngcontent-%COMP%], .docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   .docs-result-page-title[_ngcontent-%COMP%]{color:var(--quaternary-contrast);display:inline-block;font-size:.875rem;transition:color .3s ease;padding:.75rem;padding-inline-end:0}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   .docs-search-results__lvl2[_ngcontent-%COMP%]{display:inline-block;margin-inline-start:2rem;padding-block-start:0}.docs-search-container[_ngcontent-%COMP%]   .docs-search-results[_ngcontent-%COMP%]   .docs-search-results__lvl3[_ngcontent-%COMP%]{margin-inline-start:2rem;padding-block-start:0}.docs-search-container[_ngcontent-%COMP%]   .docs-result-page-title[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400}.docs-search-results__start-typing[_ngcontent-%COMP%], .docs-search-results__no-results[_ngcontent-%COMP%]{padding:.75rem;color:var(--gray-400)}.docs-result-icon-and-type[_ngcontent-%COMP%]{display:flex}.docs-result-icon-and-type[_ngcontent-%COMP%]   .docs-search-results__type[_ngcontent-%COMP%]{padding-inline-start:0}.docs-search-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:var(--gray-400);padding:1rem;font-size:.75rem;font-weight:500;background-color:var(--page-background);border-radius:0 0 .25rem .25rem;container-type:inline-size;container-name:footer}.docs-search-footer[_ngcontent-%COMP%]   .docs-search-commands[_ngcontent-%COMP%]{display:flex;list-style:none;gap:1rem;margin:0;padding:0}.docs-search-footer[_ngcontent-%COMP%]   .docs-search-commands[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;gap:.25rem}.docs-search-footer[_ngcontent-%COMP%]   .docs-search-commands[_ngcontent-%COMP%]   .docs-search-commands-key[_ngcontent-%COMP%]{display:flex;align-items:center}@container footer (max-width: 600px){.docs-search-footer[_ngcontent-%COMP%]   .docs-search-commands[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:none}}.docs-search-footer[_ngcontent-%COMP%]   .docs-algolia[_ngcontent-%COMP%]{display:flex;gap:.25rem;align-items:center}.docs-search-footer[_ngcontent-%COMP%]   docs-algolia-icon[_ngcontent-%COMP%]{display:block;margin-block-start:5px;margin-inline-start:.15rem;width:4rem}/*# sourceMappingURL=search-dialog.component.css.map */"],
  changeDetection: 0
}));
var SearchDialog = _SearchDialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchDialog, [{
    type: Component,
    args: [{
      selector: "docs-search-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [ClickOutside, TextField, ReactiveFormsModule, SearchItem, AlgoliaIcon, RelativeLink, RouterLink, SearchHistoryComponent],
      template: `<dialog #searchDialog>
  <div class="docs-search-container" (docsClickOutside)="closeSearchDialog()">
    <docs-text-field
      [autofocus]="true"
      [hideIcon]="true"
      [formControl]="searchControl"
      [resetLabel]="'Clear the search'"
      class="docs-search-input"
      placeholder="\u641C\u7D22\u6587\u6863"
    />

    @if (searchResults().length) {
      <ul class="docs-search-results docs-mini-scroll-track">
        @for (result of searchResults(); track result.id) {
          <li docsSearchItem [item]="result">
            <a
              [routerLink]="'/' + result.url | relativeLink: 'pathname'"
              [fragment]="result.url | relativeLink: 'hash'"
              (click)="history.addItem(result)"
            >
              <div>
                <div class="docs-result-icon-and-type">
                  <!-- Icon -->
                  <span class="docs-search-result-icon" aria-hidden="true">
                    <i role="presentation" class="material-symbols-outlined docs-icon-small">
                      {{ result.type === 'code' ? 'code' : 'description'}}
                    </i>
                  </span>
                  <!-- Results type -->
                  <span class="docs-search-results__type" [innerHtml]="result.labelHtml"></span>
                </div>

                @if (result.subLabelHtml) {
                  <span
                    class="docs-search-results__type docs-search-results__lvl2"
                    [innerHtml]="result.subLabelHtml"
                  >
                  </span>
                }
              </div>

              <!-- Page title -->
              <span class="docs-result-page-title">{{ result.category }}</span>
            </a>
          </li>
        }
      </ul>
    } @else if (history.hasItems() && !this.searchControl.value.length) {
      <docs-search-history />
    } @else {
      <div class="docs-search-results docs-mini-scroll-track">
        @if (!resultsResource.hasValue()) {
          <div class="docs-search-results__start-typing">
            <span>\u5F00\u59CB\u8F93\u5165\u4EE5\u67E5\u770B\u7ED3\u679C</span>
          </div>
        } @else if (searchResults().length === 0) {
          <div class="docs-search-results__no-results">
            <span>\u672A\u627E\u5230\u7ED3\u679C</span>
          </div>
        }
      </div>
    }

    <div class="docs-search-footer">
      <ul class="docs-search-commands">
        <li>
          <kbd class="docs-search-commands-key">
            <svg width="15" height="15" aria-label="\u56DE\u8F66\u952E" role="img">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              >
                <path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path>
              </g>
            </svg>
          </kbd>
          <span>to select</span>
        </li>
        <li>
          <kbd class="docs-search-commands-key">
            <svg width="15" height="15" aria-label="Arrow down" role="img">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              >
                <path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path>
              </g>
            </svg>
          </kbd>
          <kbd class="docs-search-commands-key">
            <svg width="15" height="15" aria-label="Arrow up" role="img">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              >
                <path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path>
              </g>
            </svg>
          </kbd>
          <span>to navigate</span>
        </li>
        <li>
          <kbd class="docs-search-commands-key"
            ><svg width="15" height="15" aria-label="Escape key" role="img">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              >
                <path
                  d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"
                ></path>
              </g>
            </svg>
          </kbd>
          <span>\u5173\u95ED</span>
        </li>
      </ul>
      <div class="docs-algolia">
        <span>\u7531</span>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.algolia.com/developers/?utm_source=angular.dev&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"
        >
          <docs-algolia-icon />
        </a>
        <span>\u63D0\u4F9B\u641C\u7D22\u652F\u6301</span>
      </div>
    </div>
  </div>
</dialog>
`,
      styles: ["dialog{background-color:rgba(0,0,0,0);border:none;padding-block-end:3rem;margin:0 auto;top:15vh}dialog::backdrop{backdrop-filter:blur(5px)}.docs-search-container{width:750px;max-width:90vw;background-color:var(--page-background);border:1px solid var(--senary-contrast);border-radius:.25rem;box-sizing:border-box}.docs-search-container .docs-search-input{border-radius:.25rem .25rem 0 0;border:none;border-block-end:1px solid var(--senary-contrast);height:2.6875rem;padding-inline-start:1rem;position:relative}.docs-search-container .docs-search-results{max-height:50vh;overflow-y:auto;overscroll-behavior:contain;list-style-type:none;padding-inline:0;padding-block-start:1rem;padding-block-end:1rem;margin:0;border-block-end:1px solid var(--senary-contrast)}.docs-search-container .docs-search-results li{border-inline-start:2px solid var(--senary-contrast);margin-inline-start:1rem;padding-inline-end:1rem;padding-block:.25rem}.docs-search-container .docs-search-results li ::ng-deep mark{background:#e62600;background:var(--red-to-orange-horizontal-gradient);background-clip:text;-webkit-background-clip:text;color:rgba(0,0,0,0)}.docs-search-container .docs-search-results li a{color:var(--secondary-contrast);display:flex;justify-content:space-between;gap:.5rem}.docs-search-container .docs-search-results li a .docs-search-result-icon i{display:flex;align-items:center;font-size:1.2rem}.docs-search-container .docs-search-results li.active{background-color:var(--septenary-contrast)}.docs-search-container .docs-search-results li:hover,.docs-search-container .docs-search-results li.active{background-color:var(--octonary-contrast);border-inline-start:2px solid var(--primary-contrast)}.docs-search-container .docs-search-results li:hover a span:not(.docs-result-page-title),.docs-search-container .docs-search-results li:hover a .docs-search-results__type,.docs-search-container .docs-search-results li.active a span:not(.docs-result-page-title),.docs-search-container .docs-search-results li.active a .docs-search-results__type{color:var(--primary-contrast)}.docs-search-container .docs-search-results li:hover a span:not(.docs-result-page-title) i,.docs-search-container .docs-search-results li:hover a .docs-search-results__type i,.docs-search-container .docs-search-results li.active a span:not(.docs-result-page-title) i,.docs-search-container .docs-search-results li.active a .docs-search-results__type i{color:var(--primary-contrast)}.docs-search-container .docs-search-results .docs-search-result-icon,.docs-search-container .docs-search-results .docs-search-results__type,.docs-search-container .docs-search-results .docs-result-page-title{color:var(--quaternary-contrast);display:inline-block;font-size:.875rem;transition:color .3s ease;padding:.75rem;padding-inline-end:0}.docs-search-container .docs-search-results .docs-search-results__lvl2{display:inline-block;margin-inline-start:2rem;padding-block-start:0}.docs-search-container .docs-search-results .docs-search-results__lvl3{margin-inline-start:2rem;padding-block-start:0}.docs-search-container .docs-result-page-title{font-size:.875rem;font-weight:400}.docs-search-results__start-typing,.docs-search-results__no-results{padding:.75rem;color:var(--gray-400)}.docs-result-icon-and-type{display:flex}.docs-result-icon-and-type .docs-search-results__type{padding-inline-start:0}.docs-search-footer{display:flex;align-items:center;justify-content:space-between;color:var(--gray-400);padding:1rem;font-size:.75rem;font-weight:500;background-color:var(--page-background);border-radius:0 0 .25rem .25rem;container-type:inline-size;container-name:footer}.docs-search-footer .docs-search-commands{display:flex;list-style:none;gap:1rem;margin:0;padding:0}.docs-search-footer .docs-search-commands li{display:flex;gap:.25rem}.docs-search-footer .docs-search-commands .docs-search-commands-key{display:flex;align-items:center}@container footer (max-width: 600px){.docs-search-footer .docs-search-commands li{display:none}}.docs-search-footer .docs-algolia{display:flex;gap:.25rem;align-items:center}.docs-search-footer docs-algolia-icon{display:block;margin-block-start:5px;margin-inline-start:.15rem;width:4rem}/*# sourceMappingURL=search-dialog.component.css.map */\n"]
    }]
  }], () => [], null);
})();
var STORAGE_KEY_PREFIX = "docs-was-closed-top-banner-";
var _TopLevelBannerComponent = class _TopLevelBannerComponent {
  localStorage = inject(LOCAL_STORAGE);
  /**
   * Unique identifier for the banner. This ID is required to ensure that
   * the state of the banner (e.g., whether it has been closed) is tracked
   * separately for different events or instances. Without a unique ID,
   * closing one banner could inadvertently hide other banners for different events.
   */
  id = input.required(...ngDevMode ? [{
    debugName: "id"
  }] : []);
  // Optional URL link that the banner should navigate to when clicked.
  link = input(...ngDevMode ? [void 0, {
    debugName: "link"
  }] : []);
  // Text content to be displayed in the banner.
  text = input.required(...ngDevMode ? [{
    debugName: "text"
  }] : []);
  // Optional expiry date. Setting the default expiry as a future date so we
  // don't have to deal with undefined signal values.
  expiry = input(/* @__PURE__ */ new Date("3000-01-01"), ...ngDevMode ? [{
    debugName: "expiry",
    transform: parseDate
  }] : [{
    transform: parseDate
  }]);
  // Whether the user has closed the banner or the survey has expired.
  hasClosed = linkedSignal(() => {
    const expired = Date.now() > this.expiry().getTime();
    try {
      return this.localStorage?.getItem(this.getBannerStorageKey()) === "true" || expired;
    } catch {
      return false;
    }
  });
  close() {
    this.localStorage?.setItem(this.getBannerStorageKey(), "true");
    this.hasClosed.set(true);
  }
  getBannerStorageKey() {
    return `${STORAGE_KEY_PREFIX}${this.id()}`;
  }
};
__name(_TopLevelBannerComponent, "TopLevelBannerComponent");
__publicField(_TopLevelBannerComponent, "\u0275fac", /* @__PURE__ */ __name(function TopLevelBannerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TopLevelBannerComponent)();
}, "TopLevelBannerComponent_Factory"));
__publicField(_TopLevelBannerComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TopLevelBannerComponent,
  selectors: [["docs-top-level-banner"]],
  inputs: {
    id: [1, "id"],
    link: [1, "link"],
    text: [1, "text"],
    expiry: [1, "expiry"]
  },
  decls: 1,
  vars: 1,
  consts: [[1, "docs-top-level-banner", 3, "href"], [1, "docs-top-level-banner"], ["type", "button", 1, "docs-top-level-banner-close", 3, "click"], [1, "docs-icon_high-contrast"], ["tabindex", "-1", 1, "docs-top-level-banner-cta", "shimmer"], ["tabindex", "0", 1, "docs-top-level-banner-cta", "background"], [1, "docs-top-level-banner-cta__text"]],
  template: /* @__PURE__ */ __name(function TopLevelBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TopLevelBannerComponent_Conditional_0_Template, 5, 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.hasClosed() ? 0 : -1);
    }
  }, "TopLevelBannerComponent_Template"),
  dependencies: [ExternalLink, IconComponent],
  styles: ['[_nghost-%COMP%]:not(:empty){z-index:var(--z-index-top-level-banner);position:fixed;display:flex;align-items:center;justify-content:center;height:auto;width:100vw;padding:.5rem;border-bottom:1px solid var(--septenary-contrast);text-align:center;align-content:center;backdrop-filter:blur(16px);background-color:color-mix(in srgb, var(--page-background) 70%, transparent)}[_nghost-%COMP%]   a.docs-top-level-banner[_ngcontent-%COMP%]{display:grid;width:auto;margin:0rem 2.5rem}[_nghost-%COMP%]   a.docs-top-level-banner[_ngcontent-%COMP%]:hover   h1.docs-top-level-banner-cta.background[_ngcontent-%COMP%]   span.docs-top-level-banner-cta__text[_ngcontent-%COMP%]::after{transform:scaleX(1);transform-origin:bottom left}[_nghost-%COMP%]   h1.docs-top-level-banner-cta[_ngcontent-%COMP%]{grid-row-start:1;grid-column-start:1;font-size:.875rem;margin:0;width:fit-content;font-weight:500}[_nghost-%COMP%]   h1.docs-top-level-banner-cta.background[_ngcontent-%COMP%]{color:var(--tertiary-contrast)}[_nghost-%COMP%]   h1.docs-top-level-banner-cta.background[_ngcontent-%COMP%]   .docs-top-level-banner-cta__text[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   h1.docs-top-level-banner-cta.background[_ngcontent-%COMP%]   .docs-top-level-banner-cta__text[_ngcontent-%COMP%]::after{content:"";position:absolute;width:calc(100% + 2rem);height:1px;bottom:-2px;left:-1rem;background:var(--tertiary-contrast);transform:scaleX(0);transform-origin:bottom right}@media(prefers-reduced-motion: no-preference){[_nghost-%COMP%]   h1.docs-top-level-banner-cta.background[_ngcontent-%COMP%]   .docs-top-level-banner-cta__text[_ngcontent-%COMP%]::after{transition:transform .3s ease}}[_nghost-%COMP%]   h1.docs-top-level-banner-cta[_ngcontent-%COMP%]:not(.background){color:rgba(0,0,0,0)}[_nghost-%COMP%]   .docs-top-level-banner-close[_ngcontent-%COMP%]{position:absolute;top:.25rem;right:1.4rem;color:var(--tertiary-contrast);padding-left:0rem}.shimmer[_ngcontent-%COMP%]{background:var(--red-to-pink-to-purple-horizontal-gradient);z-index:1}@media(prefers-reduced-motion: no-preference){.shimmer[_ngcontent-%COMP%]{background-repeat:no-repeat;-webkit-background-size:125px 100%;-moz-background-size:125px 100%;background-size:125px 100%;-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;-webkit-animation-name:_ngcontent-%COMP%_shimmer;-moz-animation-name:shimmer;animation-name:_ngcontent-%COMP%_shimmer;-webkit-animation-duration:10s;-moz-animation-duration:10s;animation-duration:10s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-iteration-count:infinite}}@-moz-keyframes shimmer{0%{background-position:top left;background-position-x:-150px}100%{background-position:top right;background-position-x:500px}}@-webkit-keyframes _ngcontent-%COMP%_shimmer{0%{background-position:top left;background-position-x:-150px}100%{background-position:top right;background-position-x:500px}}@-o-keyframes shimmer{0%{background-position:top left;background-position-x:-150px}100%{background-position:top right;background-position-x:500px}}@keyframes _ngcontent-%COMP%_shimmer{0%{background-position:top left;background-position-x:-150px}100%{background-position:top right;background-position-x:500px}}/*# sourceMappingURL=top-level-banner.component.css.map */'],
  changeDetection: 0
}));
var TopLevelBannerComponent = _TopLevelBannerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopLevelBannerComponent, [{
    type: Component,
    args: [{
      selector: "docs-top-level-banner",
      imports: [ExternalLink, IconComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '@if (!hasClosed()) {\n@if (link()) {\n<a [href]="link()" class="docs-top-level-banner">\n  <h1 tabindex="-1" class="docs-top-level-banner-cta shimmer">{{ text() }}</h1>\n  <h1 tabindex="0" class="docs-top-level-banner-cta background"><span class="docs-top-level-banner-cta__text">{{ text()\n      }}</span></h1>\n</a>\n} @else {\n<div class="docs-top-level-banner">\n  <h1 tabindex="-1" class="docs-top-level-banner-cta shimmer">{{ text() }}</h1>\n  <h1 tabindex="0" class="docs-top-level-banner-cta background"><span class="docs-top-level-banner-cta__text">{{ text()\n      }}</span></h1>\n</div>\n}\n\n<button class="docs-top-level-banner-close" type="button" (click)="close()">\n  <docs-icon class="docs-icon_high-contrast">close</docs-icon>\n</button>\n}\n',
      styles: [':host:not(:empty){z-index:var(--z-index-top-level-banner);position:fixed;display:flex;align-items:center;justify-content:center;height:auto;width:100vw;padding:.5rem;border-bottom:1px solid var(--septenary-contrast);text-align:center;align-content:center;backdrop-filter:blur(16px);background-color:color-mix(in srgb, var(--page-background) 70%, transparent)}:host a.docs-top-level-banner{display:grid;width:auto;margin:0rem 2.5rem}:host a.docs-top-level-banner:hover h1.docs-top-level-banner-cta.background span.docs-top-level-banner-cta__text::after{transform:scaleX(1);transform-origin:bottom left}:host h1.docs-top-level-banner-cta{grid-row-start:1;grid-column-start:1;font-size:.875rem;margin:0;width:fit-content;font-weight:500}:host h1.docs-top-level-banner-cta.background{color:var(--tertiary-contrast)}:host h1.docs-top-level-banner-cta.background .docs-top-level-banner-cta__text{position:relative}:host h1.docs-top-level-banner-cta.background .docs-top-level-banner-cta__text::after{content:"";position:absolute;width:calc(100% + 2rem);height:1px;bottom:-2px;left:-1rem;background:var(--tertiary-contrast);transform:scaleX(0);transform-origin:bottom right}@media(prefers-reduced-motion: no-preference){:host h1.docs-top-level-banner-cta.background .docs-top-level-banner-cta__text::after{transition:transform .3s ease}}:host h1.docs-top-level-banner-cta:not(.background){color:rgba(0,0,0,0)}:host .docs-top-level-banner-close{position:absolute;top:.25rem;right:1.4rem;color:var(--tertiary-contrast);padding-left:0rem}.shimmer{background:var(--red-to-pink-to-purple-horizontal-gradient);z-index:1}@media(prefers-reduced-motion: no-preference){.shimmer{background-repeat:no-repeat;-webkit-background-size:125px 100%;-moz-background-size:125px 100%;background-size:125px 100%;-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;-webkit-animation-name:shimmer;-moz-animation-name:shimmer;animation-name:shimmer;-webkit-animation-duration:10s;-moz-animation-duration:10s;animation-duration:10s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-iteration-count:infinite}}@-moz-keyframes shimmer{0%{background-position:top left;background-position-x:-150px}100%{background-position:top right;background-position-x:500px}}@-webkit-keyframes shimmer{0%{background-position:top left;background-position-x:-150px}100%{background-position:top right;background-position-x:500px}}@-o-keyframes shimmer{0%{background-position:top left;background-position-x:-150px}100%{background-position:top right;background-position-x:500px}}@keyframes shimmer{0%{background-position:top left;background-position-x:-150px}100%{background-position:top right;background-position-x:500px}}/*# sourceMappingURL=top-level-banner.component.css.map */\n']
    }]
  }], null, null);
})();
var parseDate = /* @__PURE__ */ __name((inputDate) => {
  if (inputDate instanceof Date) {
    return inputDate;
  }
  const outputDate = new Date(inputDate);
  if (isNaN(outputDate.getTime())) {
    throw new Error(`Invalid date string: ${inputDate}`);
  }
  return outputDate;
}, "parseDate");

export {
  Clipboard,
  InputModalityDetector,
  FocusMonitor,
  _VisuallyHiddenLoader,
  BreakpointObserver,
  ObserversModule,
  LiveAnnouncer,
  FocusKeyManager,
  SharedResizeObserver,
  getSupportedInputTypes,
  Breakpoints,
  _animationsDisabled,
  _StructuralStylesLoader,
  coerceBooleanProperty,
  defaultRippleAnimationConfig,
  RippleRenderer,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatRipple,
  MatCommonModule,
  MatTabLabel,
  MatTab,
  MatTabGroup,
  MatTabsModule,
  MatTooltip,
  MatTooltipModule,
  WebContainer,
  ClickOutside,
  setCookieConsent,
  shouldReduceMotion,
  isMobile,
  isApple,
  isIos,
  isFirefox,
  DOCS_CONTENT_LOADER,
  contentResolver,
  ENVIRONMENT,
  EXAMPLE_VIEWER_CONTENT_LOADER,
  IS_SEARCH_DIALOG_OPEN,
  LOCAL_STORAGE,
  PREVIEWS_COMPONENTS,
  WINDOW,
  windowProvider,
  flatNavigationData,
  getNavigationItemsTree,
  findNavigationItem,
  markExternalLinks,
  mapNavigationItemsToRoutes,
  getBaseUrlAfterRedirects,
  getActivatedRouteSnapshotFromRouter,
  checkFilesInDirectory,
  generateZip,
  ExternalLink,
  NavigationState,
  provideAlgoliaSearchClient,
  Search,
  IconComponent,
  DocViewer,
  STORAGE_KEY,
  CookiePopup,
  NavigationList,
  TextField,
  SearchDialog,
  TopLevelBannerComponent
};
/*! Bundled license information:

@angular/docs/fesm2022/shared-docs.mjs:
  (**
   * @license Angular v0.0.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)

@angular/docs/fesm2022/shared-docs.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=chunk-A6VPSR6T.js.map

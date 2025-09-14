import {
  CdkDrag,
  CdkDragPreview,
  CdkDropList,
  moveItemInArray
} from "./chunk-B2C7H6VM.js";
import "./chunk-H7FALWCD.js";
import "./chunk-OV2CFM4K.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2CX5BJWG.js";

// src/content/examples/drag-drop/src/custom-preview/app/app.component.ts
function CdkDragDropCustomPreviewExample_For_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const movie_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", movie_r1.poster, \u0275\u0275sanitizeUrl)("alt", movie_r1.title);
  }
}
__name(CdkDragDropCustomPreviewExample_For_2_img_2_Template, "CdkDragDropCustomPreviewExample_For_2_img_2_Template");
function CdkDragDropCustomPreviewExample_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CdkDragDropCustomPreviewExample_For_2_img_2_Template, 1, 2, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", movie_r1.title, " ");
  }
}
__name(CdkDragDropCustomPreviewExample_For_2_Template, "CdkDragDropCustomPreviewExample_For_2_Template");
var _CdkDragDropCustomPreviewExample = class _CdkDragDropCustomPreviewExample {
  // tslint:disable:max-line-length
  movies = [
    {
      title: "Episode I - The Phantom Menace",
      poster: "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg"
    },
    {
      title: "Episode II - Attack of the Clones",
      poster: "https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg"
    },
    {
      title: "Episode III - Revenge of the Sith",
      poster: "https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg"
    },
    {
      title: "Episode IV - A New Hope",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
    },
    {
      title: "Episode V - The Empire Strikes Back",
      poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg"
    },
    {
      title: "Episode VI - Return of the Jedi",
      poster: "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg"
    },
    {
      title: "Episode VII - The Force Awakens",
      poster: "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg"
    },
    {
      title: "Episode VIII - The Last Jedi",
      poster: "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg"
    },
    {
      title: "Episode IX \u2013 The Rise of Skywalker",
      poster: "https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg"
    }
  ];
  // tslint:enable:max-line-length
  drop(event) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
};
__name(_CdkDragDropCustomPreviewExample, "CdkDragDropCustomPreviewExample");
__publicField(_CdkDragDropCustomPreviewExample, "\u0275fac", /* @__PURE__ */ __name(function CdkDragDropCustomPreviewExample_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkDragDropCustomPreviewExample)();
}, "CdkDragDropCustomPreviewExample_Factory"));
__publicField(_CdkDragDropCustomPreviewExample, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDragDropCustomPreviewExample, selectors: [["cdk-drag-drop-custom-preview-example"]], decls: 3, vars: 0, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box"], [3, "src", "alt", 4, "cdkDragPreview"], [3, "src", "alt"]], template: /* @__PURE__ */ __name(function CdkDragDropCustomPreviewExample_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("cdkDropListDropped", /* @__PURE__ */ __name(function CdkDragDropCustomPreviewExample_Template_div_cdkDropListDropped_0_listener($event) {
      return ctx.drop($event);
    }, "CdkDragDropCustomPreviewExample_Template_div_cdkDropListDropped_0_listener"));
    \u0275\u0275repeaterCreate(1, CdkDragDropCustomPreviewExample_For_2_Template, 3, 1, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.movies);
  }
}, "CdkDragDropCustomPreviewExample_Template"), dependencies: [CdkDropList, CdkDrag, CdkDragPreview], styles: ["\n\n.example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var CdkDragDropCustomPreviewExample = _CdkDragDropCustomPreviewExample;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragDropCustomPreviewExample, [{
    type: Component,
    args: [{ selector: "cdk-drag-drop-custom-preview-example", standalone: true, imports: [CdkDropList, CdkDrag, CdkDragPreview], template: '<div cdkDropList class="example-list" (cdkDropListDropped)="drop($event)">\n  @for (movie of movies; track movie) {\n    <div class="example-box" cdkDrag>\n      {{movie.title}}\n      <img *cdkDragPreview [src]="movie.poster" [alt]="movie.title">\n    </div>\n  }\n</div>\n', styles: ["/* src/content/examples/drag-drop/src/custom-preview/app/app.component.css */\n.example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDragDropCustomPreviewExample, { className: "CdkDragDropCustomPreviewExample", filePath: "src/content/examples/drag-drop/src/custom-preview/app/app.component.ts", lineNumber: 20 });
})();
export {
  CdkDragDropCustomPreviewExample
};
//# sourceMappingURL=chunk-QOQB63X3.js.map

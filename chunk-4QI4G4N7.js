import {
  BehaviorSubject,
  Injectable,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-2CX5BJWG.js";

// src/app/editor/constants.ts
var TUTORIALS_ASSETS_WEB_PATH = "/assets/tutorials";
var TUTORIALS_ASSETS_SOURCE_CODE_DIRECTORY = "source-code";
var TUTORIALS_ASSETS_METADATA_DIRECTORY = "metadata";
var TUTORIALS_SOURCE_CODE_WEB_PATH = `${TUTORIALS_ASSETS_WEB_PATH}/${TUTORIALS_ASSETS_SOURCE_CODE_DIRECTORY}`;
var TUTORIALS_METADATA_WEB_PATH = `${TUTORIALS_ASSETS_WEB_PATH}/${TUTORIALS_ASSETS_METADATA_DIRECTORY}`;

// src/app/editor/embedded-tutorial-manager.service.ts
var _EmbeddedTutorialManager = class _EmbeddedTutorialManager {
  tutorialId = signal("", ...ngDevMode ? [{ debugName: "tutorialId" }] : []);
  tutorialFilesystemTree = signal(null, ...ngDevMode ? [{ debugName: "tutorialFilesystemTree" }] : []);
  commonFilesystemTree = signal(null, ...ngDevMode ? [{ debugName: "commonFilesystemTree" }] : []);
  type = signal(void 0, ...ngDevMode ? [{ debugName: "type" }] : []);
  allFiles = signal([], ...ngDevMode ? [{ debugName: "allFiles" }] : []);
  hiddenFiles = signal([], ...ngDevMode ? [{ debugName: "hiddenFiles" }] : []);
  tutorialFiles = signal({}, ...ngDevMode ? [{ debugName: "tutorialFiles" }] : []);
  openFiles = signal([], ...ngDevMode ? [{ debugName: "openFiles" }] : []);
  answerFiles = signal({}, ...ngDevMode ? [{ debugName: "answerFiles" }] : []);
  dependencies = signal(void 0, ...ngDevMode ? [{ debugName: "dependencies" }] : []);
  _shouldReInstallDependencies = signal(false, ...ngDevMode ? [{ debugName: "_shouldReInstallDependencies" }] : []);
  shouldReInstallDependencies = this._shouldReInstallDependencies.asReadonly();
  metadata = signal(void 0, ...ngDevMode ? [{ debugName: "metadata" }] : []);
  _shouldChangeTutorial$ = new BehaviorSubject(false);
  tutorialChanged$ = this._shouldChangeTutorial$.asObservable();
  _filesToDeleteFromPreviousProject = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "_filesToDeleteFromPreviousProject" }] : []);
  filesToDeleteFromPreviousProject = this._filesToDeleteFromPreviousProject.asReadonly();
  async fetchAndSetTutorialFiles(tutorial) {
    const [commonSourceCode, tutorialSourceCode, metadata] = await Promise.all([
      this.fetchCommonFiles(),
      this.fetchTutorialSourceCode(tutorial),
      this.fetchTutorialMetadata(tutorial)
    ]);
    const projectChanged = !!this.tutorialId() && this.tutorialId() !== tutorial;
    this.tutorialId.set(tutorial);
    this.type.set(metadata.type);
    this.metadata.set(metadata);
    if (tutorialSourceCode) {
      if (projectChanged) {
        const filesToRemove = this.computeFilesToRemove(metadata.allFiles, this.allFiles());
        if (filesToRemove) {
          this._filesToDeleteFromPreviousProject.set(filesToRemove);
        }
        this._shouldReInstallDependencies.set(this.checkIfDependenciesChanged(metadata.dependencies ?? {}));
      }
      this.tutorialFilesystemTree.set(tutorialSourceCode);
      this.dependencies.set(metadata.dependencies ?? {});
      this.tutorialFiles.set(metadata.tutorialFiles);
      this.answerFiles.set(metadata.answerFiles ?? {});
      this.openFiles.set(metadata.openFiles);
      this.hiddenFiles.set(metadata.hiddenFiles);
      this.allFiles.set(metadata.allFiles);
      if (!this.commonFilesystemTree())
        this.commonFilesystemTree.set(commonSourceCode);
    }
    this._shouldChangeTutorial$.next(projectChanged);
  }
  revealAnswer() {
    const answerFilenames = Object.keys(this.answerFiles());
    const openFilesAndAnswer = Array.from(
      // use Set to remove duplicates, spread openFiles first to keep files order
      /* @__PURE__ */ new Set([...this.openFiles(), ...answerFilenames])
    ).filter((filename) => !this.hiddenFiles()?.includes(filename));
    const tutorialFiles = Object.fromEntries(openFilesAndAnswer.map((file) => [file, this.answerFiles()[file]]));
    const allFilesWithAnswer = [...this.allFiles(), ...answerFilenames];
    const filesToDelete = this.computeFilesToRemove(allFilesWithAnswer, this.allFiles());
    if (filesToDelete) {
      this._filesToDeleteFromPreviousProject.set(filesToDelete);
    }
    this.allFiles.set(allFilesWithAnswer);
    this.tutorialFiles.set(tutorialFiles);
    this.openFiles.set(openFilesAndAnswer);
    this._shouldChangeTutorial$.next(true);
  }
  resetRevealAnswer() {
    const allFilesWithoutAnswer = this.metadata().allFiles;
    const filesToDelete = this.computeFilesToRemove(allFilesWithoutAnswer, this.allFiles());
    if (filesToDelete) {
      this._filesToDeleteFromPreviousProject.set(filesToDelete);
    }
    this.tutorialFiles.set(this.metadata().tutorialFiles);
    this.openFiles.set(this.metadata().openFiles);
    this._shouldChangeTutorial$.next(true);
  }
  async fetchCommonFiles() {
    if (this.commonFilesystemTree() !== null)
      return this.commonFilesystemTree();
    return {};
  }
  async fetchTutorialSourceCode(tutorial) {
    const tutorialSourceCode = await fetch(`${TUTORIALS_ASSETS_WEB_PATH}/${tutorial}/source-code.json`);
    if (!tutorialSourceCode.ok)
      throw new Error(`\u7F3A\u5C11\u6559\u7A0B ${tutorial} \u7684\u6E90\u4EE3\u7801\u3002`);
    return await tutorialSourceCode.json();
  }
  async fetchTutorialMetadata(tutorial) {
    const tutorialSourceCode = await fetch(`${TUTORIALS_ASSETS_WEB_PATH}/${tutorial}/metadata.json`);
    if (!tutorialSourceCode.ok)
      throw new Error(`\u7F3A\u5C11\u6559\u7A0B ${tutorial} \u7684\u5143\u6570\u636E\u3002`);
    return await tutorialSourceCode.json();
  }
  /**
   * Compare previous and new dependencies to determine if the dependencies changed.
   */
  checkIfDependenciesChanged(newDeps) {
    const existingDeps = this.dependencies();
    for (const name of Object.keys(newDeps)) {
      if (existingDeps?.[name] !== newDeps[name]) {
        return true;
      }
    }
    return false;
  }
  computeFilesToRemove(newFiles, existingFiles) {
    const filesToDelete = new Set(existingFiles);
    for (const file of newFiles) {
      filesToDelete.delete(file);
    }
    return filesToDelete;
  }
};
__name(_EmbeddedTutorialManager, "EmbeddedTutorialManager");
__publicField(_EmbeddedTutorialManager, "\u0275fac", /* @__PURE__ */ __name(function EmbeddedTutorialManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmbeddedTutorialManager)();
}, "EmbeddedTutorialManager_Factory"));
__publicField(_EmbeddedTutorialManager, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmbeddedTutorialManager, factory: _EmbeddedTutorialManager.\u0275fac, providedIn: "root" }));
var EmbeddedTutorialManager = _EmbeddedTutorialManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmbeddedTutorialManager, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  EmbeddedTutorialManager
};
/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
//# sourceMappingURL=chunk-4QI4G4N7.js.map

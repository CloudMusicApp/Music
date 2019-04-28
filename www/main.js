(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/containers/user/index": [
		"./src/app/containers/user/index.ts",
		"app-containers-user-index"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-player class=\"navbar navbar-default navbar-fixed-bottom\"></app-player>\n\n<app-sidebar [class.closed]=\"sidebarCollapsed$ | async\"></app-sidebar>\n\n<div class=\"container-main\">\n  <router-outlet></router-outlet>\n</div>\n \n<app-error-handler></app-error-handler>\n "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: var(--app-bg-color);\n  display: block;\n  height: 100%; }\n  :host .container-main {\n    height: 100vh;\n    display: block;\n    transition: margin 0.3s ease-out;\n    margin-left: 0; }\n  @media (min-width: 768px) {\n  :host .closed + .container-main {\n    margin-left: 7rem; } }\n  @media (min-width: 1024px) {\n  :host .container-main {\n    margin-left: 29.5rem; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_services_version_checker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/version-checker.service */ "./src/app/core/services/version-checker.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/app-core */ "./src/app/core/store/app-core/index.ts");
/* harmony import */ var _core_api_app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/api/app.api */ "./src/app/core/api/app.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AppComponent = class AppComponent {
    constructor(store, appApi, versionCheckerService) {
        this.store = store;
        this.appApi = appApi;
        this.versionCheckerService = versionCheckerService;
        this.sidebarCollapsed$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_app_core__WEBPACK_IMPORTED_MODULE_3__["getSidebarCollapsed"]));
        this.theme$ = this.store.select(_store_app_core__WEBPACK_IMPORTED_MODULE_3__["getAppTheme"]);
        this.style = 'arctic';
        this.versionCheckerService.start();
        this.appApi.checkUserAuth();
    }
    ngOnInit() {
        this.theme$.subscribe(theme => (this.style = theme));
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class'),
    __metadata("design:type", Object)
], AppComponent.prototype, "style", void 0);
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'body',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"],
        _core_api_app_api__WEBPACK_IMPORTED_MODULE_4__["AppApi"],
        _core_services_version_checker_service__WEBPACK_IMPORTED_MODULE_1__["VersionCheckerService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components */ "./src/app/core/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_error_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/error-handler */ "./src/app/core/services/error-handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], { useHash: true }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _shared_index__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ..._core_components__WEBPACK_IMPORTED_MODULE_8__["APP_CORE_MODULES"],
            ..._containers__WEBPACK_IMPORTED_MODULE_9__["APP_CONTAINER_MODULES"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('/ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
            })
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _core_services_error_handler__WEBPACK_IMPORTED_MODULE_14__["AppErrorHandler"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/containers/user/index#UserModule' }
];


/***/ }),

/***/ "./src/app/app.themes.ts":
/*!*******************************!*\
  !*** ./src/app/app.themes.ts ***!
  \*******************************/
/*! exports provided: Themes, DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Themes", function() { return Themes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
const Themes = ['arctic', 'halloween', 'bumblebee'];
const DEFAULT_THEME = Themes[0];


/***/ }),

/***/ "./src/app/containers/app-navbar/app-navbar-menu/app-navbar-menu.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/containers/app-navbar/app-navbar-menu/app-navbar-menu.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host .btn-toggle {\n    padding: 1rem;\n    font-size: 2rem;\n    color: var(--navbar-text-color); }\n    :host .btn-toggle .update-indicator {\n      position: absolute;\n      top: 13px;\n      /* for pulse animation*/ }\n  :host .menu-dropdown {\n    position: absolute;\n    right: 0;\n    min-width: 250px;\n    z-index: 1030;\n    -webkit-transform-origin: top right;\n            transform-origin: top right; }\n    :host .menu-dropdown.end-animation {\n      top: -35rem; }\n    :host .menu-dropdown.slideInDown {\n      -webkit-animation: slideInDown 0.5s 1;\n              animation: slideInDown 0.5s 1;\n      top: 5rem;\n      -webkit-transform-origin: top right;\n              transform-origin: top right; }\n    :host .menu-dropdown.slideOutDown {\n      -webkit-animation: slideOutDown 0.8s 1 forwards;\n              animation: slideOutDown 0.8s 1 forwards;\n      top: 5rem;\n      -webkit-transform-origin: top right;\n              transform-origin: top right; }\n    :host .menu-dropdown .list-group-item icon {\n      margin-right: 5px; }\n    :host .menu-dropdown .navbar-action-link {\n      display: block; }\n    :host .menu-dropdown .menu-version {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between; }\n    :host .menu-dropdown icon {\n      font-size: 2em;\n      vertical-align: middle; }\n  :host .menu-backdrop {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0; } }\n"

/***/ }),

/***/ "./src/app/containers/app-navbar/app-navbar-menu/app-navbar-menu.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/containers/app-navbar/app-navbar-menu/app-navbar-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: AppNavbarMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavbarMenuComponent", function() { return AppNavbarMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/animations/fade-in.animation */ "./src/app/shared/animations/fade-in.animation.ts");
/* harmony import */ var _shared_directives_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/directives/icon */ "./src/app/shared/directives/icon/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Key;
(function (Key) {
    Key[Key["Backspace"] = 8] = "Backspace";
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Shift"] = 16] = "Shift";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
let AppNavbarMenuComponent = class AppNavbarMenuComponent {
    constructor() {
        this.end = false;
        this.hide = true;
        this.signedIn = false;
        this.appVersion = {
            semver: '',
            isNewAvailable: false,
            checkingForVersion: false
        };
        this.theme = { themes: [], selected: '' };
        this.signOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.versionUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.versionCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.themeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get menuState() {
        return this.hide ? 'hide' : 'show';
    }
    handleKeyPress(event) {
        if (event.keyCode === Key.Escape) {
            this.hideMenu();
        }
    }
    ngOnInit() { }
    handleSignOut() {
        this.signOut.emit();
    }
    hideMenu() {
        this.hide = true;
    }
    toggleMenu() {
        this.end = false;
        this.hide = !this.hide;
    }
    handleVersionUpdate() {
        this.versionUpdate.emit();
    }
    handleVersionCheck() {
        this.versionCheck.emit();
    }
    updateTheme(theme) {
        this.themeChange.emit(theme);
    }
    endAnimation({ toState }) {
        if (toState === 'hide') {
            this.end = true;
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AppNavbarMenuComponent.prototype, "signedIn", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AppNavbarMenuComponent.prototype, "appVersion", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AppNavbarMenuComponent.prototype, "theme", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AppNavbarMenuComponent.prototype, "signOut", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AppNavbarMenuComponent.prototype, "versionUpdate", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AppNavbarMenuComponent.prototype, "versionCheck", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AppNavbarMenuComponent.prototype, "themeChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AppNavbarMenuComponent.prototype, "handleKeyPress", null);
AppNavbarMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navbar-menu',
        animations: [_shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["expandFadeInAnimation"]],
        template: `
    <button class="btn btn-navbar btn-transparent ux-maker btn-toggle"
      (click)="toggleMenu()">
      <icon name="ellipsis-v"></icon>
      <icon *ngIf="appVersion.isNewAvailable" name="dot-circle-o" class="pulse update-indicator text-primary"></icon>
    </button>
    <div class="menu-backdrop" *ngIf="!hide" (click)="hideMenu()"></div>
    <div class="panel menu-dropdown"
      [class.end-animation]="end"
      [@expandFadeIn]="menuState"
      (@expandFadeIn.done)="endAnimation($event)"
      >
      <div class="list-group">
        <div *ngIf="appVersion.isNewAvailable" class="list-group-item">
          <button class="btn btn-success" title="click to update Echoes"
            (click)="handleVersionUpdate()">
            New Version Is Available - UPDATE NOW
          </button>
        </div>
        <a class="list-group-item" href="https://github.com/CloudMusicApp/Music" target="_blank">
        <icon name="github" prefix="${_shared_directives_icon__WEBPACK_IMPORTED_MODULE_2__["ICON_PREFIX_BRAND"]}"></icon> Source Code @Github
        </a>
        
        <div class="list-group-item menu-version" target="_blank">
          <section>
            <icon name="code-fork"></icon>
            <a href="https://github.com/CloudMusicApp/Music" target="_blank" rel="noopener">
              {{ appVersion.semver }}
            </a>
          </section>
          <button *ngIf="!appVersion.isNewAvailable"
          class="btn btn-info" (click)="handleVersionCheck()">
          Check For Updates
          </button>
          <div *ngIf="appVersion.checkingForVersion" class="text-info">
          checking for version...
          </div>
        </div>
        <div class="list-group-item">
          <icon name="paint-brush" class="text-primary"></icon> Theme: 
          <button-group [buttons]="theme.themes" [selectedButton]="theme.selected"
            (buttonClick)="updateTheme($event)"></button-group>
        </div>
        
        <a class="list-group-item navbar-action-link" href="https://docs.google.com/forms/d/e/1FAIpQLSdAyYOwonN4YQ4tt05inEeW2ZW5YzWWy1ecx-PnxFWlNdrujA/viewform?usp=sf_link" target="_blank" rel="noopener">
          <icon name="star-o"></icon> Request New Features
        </a>
        <button class="list-group-item"
          *ngIf="signedIn"
          (click)="handleSignOut()">
          <icon name="sign-out"></icon> Sign Out
        </button>
      </div>
    </div>
  `,
        styles: [__webpack_require__(/*! ./app-navbar-menu.component.scss */ "./src/app/containers/app-navbar/app-navbar-menu/app-navbar-menu.component.scss")],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [])
], AppNavbarMenuComponent);



/***/ }),

/***/ "./src/app/containers/app-navbar/app-navbar-menu/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/containers/app-navbar/app-navbar-menu/index.ts ***!
  \****************************************************************/
/*! exports provided: AppNavbarMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_navbar_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-navbar-menu.component */ "./src/app/containers/app-navbar/app-navbar-menu/app-navbar-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppNavbarMenuComponent", function() { return _app_navbar_menu_component__WEBPACK_IMPORTED_MODULE_0__["AppNavbarMenuComponent"]; });




/***/ }),

/***/ "./src/app/containers/app-navbar/app-navbar-user/app-navbar-user.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/containers/app-navbar/app-navbar-user/app-navbar-user.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 0.2rem 0; }\n  :host .navbar-link {\n    line-height: 4rem;\n    margin: 0;\n    padding: 0; }\n"

/***/ }),

/***/ "./src/app/containers/app-navbar/app-navbar-user/app-navbar-user.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/containers/app-navbar/app-navbar-user/app-navbar-user.component.ts ***!
  \************************************************************************************/
/*! exports provided: AppNavbarUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavbarUserComponent", function() { return AppNavbarUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppNavbarUserComponent = class AppNavbarUserComponent {
    constructor() {
        this.userImageUrl = '';
        this.signedIn = false;
        this.signIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleSignIn() {
        this.signIn.emit();
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AppNavbarUserComponent.prototype, "userImageUrl", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AppNavbarUserComponent.prototype, "signedIn", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AppNavbarUserComponent.prototype, "signIn", void 0);
AppNavbarUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navbar-user',
        template: `
    <a class="btn btn-link navbar-link navbar-btn"
      *ngIf="signedIn; else userNotSignedIn"
      [routerLink]="['/user']">
      <img [src]="userImageUrl" class="user-icon">
    </a>
    <ng-template #userNotSignedIn>
      <span class="btn btn-link navbar-link navbar-btn"
        (click)="handleSignIn()">
        <icon name="sign-in"></icon>
        Sign In
      </span>
    </ng-template>
  `,
        styles: [__webpack_require__(/*! ./app-navbar-user.component.scss */ "./src/app/containers/app-navbar/app-navbar-user/app-navbar-user.component.scss")],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [])
], AppNavbarUserComponent);



/***/ }),

/***/ "./src/app/containers/app-navbar/app-navbar-user/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/containers/app-navbar/app-navbar-user/index.ts ***!
  \****************************************************************/
/*! exports provided: AppNavbarUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_navbar_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-navbar-user.component */ "./src/app/containers/app-navbar/app-navbar-user/app-navbar-user.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppNavbarUserComponent", function() { return _app_navbar_user_component__WEBPACK_IMPORTED_MODULE_0__["AppNavbarUserComponent"]; });




/***/ }),

/***/ "./src/app/containers/app-navbar/app-navbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/app-navbar/app-navbar.component.ts ***!
  \***************************************************************/
/*! exports provided: AppNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavbarComponent", function() { return AppNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _api_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/app.api */ "./src/app/core/api/app.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AppNavbarComponent = class AppNavbarComponent {
    constructor(authorization, appApi) {
        this.authorization = authorization;
        this.appApi = appApi;
        this.user$ = this.appApi.user$;
        this.appVersion$ = this.appApi.appVersion$;
        this.themes$ = this.appApi.themes$;
        this.headerIcon = '';
        this.mainIcon = '';
        this.signIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.headerMainIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    signInUser() {
        this.appApi.signinUser();
        this.signIn.next();
    }
    signOutUser() {
        this.appApi.signoutUser();
        this.signOut.next();
    }
    isSignIn() {
        return this.authorization.isSignIn();
    }
    updateVersion() {
        this.appApi.updateVersion();
    }
    checkVersion() {
        this.appApi.checkVersion();
    }
    handleMainIconClick() {
        this.headerMainIconClick.emit();
    }
    changeTheme(theme) {
        this.appApi.changeTheme(theme.value);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], AppNavbarComponent.prototype, "header", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AppNavbarComponent.prototype, "headerIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AppNavbarComponent.prototype, "mainIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AppNavbarComponent.prototype, "signIn", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AppNavbarComponent.prototype, "signOut", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AppNavbarComponent.prototype, "headerMainIconClick", void 0);
AppNavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navbar',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./app-navbar.scss */ "./src/app/containers/app-navbar/app-navbar.scss")],
        template: `
    <nav class="row navbar navbar-default navbar-fixed-top">
      <div class="navbar-container">
        <div class="navbar__content">
        <h3 *ngIf="header" class="navbar__header navbar-text">
            <button *ngIf="mainIcon" class="navbar-btn__main btn-transparent"
              (click)="handleMainIconClick()">
              <icon [name]="mainIcon"></icon>
            </button>
            <icon [name]="headerIcon" *ngIf="headerIcon"></icon> {{ header }}
          </h3>
          <ng-content></ng-content>
        </div>
        <section class="navbar-text navbar-actions">
          <app-navbar-user
            [signedIn]="isSignIn()"
            [userImageUrl]="(user$ | async).profile.imageUrl"
            (signIn)="signInUser()"
            ></app-navbar-user>
          <app-navbar-menu
            [appVersion]="appVersion$ | async"
            [theme]="themes$ | async"
            (themeChange)="changeTheme($event)"
            [signedIn]="isSignIn()"
            (signOut)="signOutUser()"
            (versionUpdate)="updateVersion()"
            (versionCheck)="checkVersion()"
          ></app-navbar-menu>
        </section>
      </div>
    </nav>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["Authorization"], _api_app_api__WEBPACK_IMPORTED_MODULE_2__["AppApi"]])
], AppNavbarComponent);



/***/ }),

/***/ "./src/app/containers/app-navbar/app-navbar.scss":
/*!*******************************************************!*\
  !*** ./src/app/containers/app-navbar/app-navbar.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  app-navbar {\n    display: block; }\n    app-navbar nav.navbar {\n      margin-left: 0;\n      background-image: none;\n      background-color: var(--navbar-bg-color);\n      border-color: var(--navbar-bg-color);\n      color: var(--navbar-text-color);\n      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.5);\n      transition: margin-left 0.3s ease-out, -webkit-transform;\n      transition: transform, margin-left 0.3s ease-out;\n      transition: transform, margin-left 0.3s ease-out, -webkit-transform;\n      z-index: 1020; }\n    app-navbar .user-icon {\n      width: 4rem;\n      height: 4rem;\n      vertical-align: middle;\n      border-radius: 50%;\n      border: 1px solid #fff;\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.5); }\n    app-navbar .navbar-container {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      padding: 0.5rem 5rem; }\n      app-navbar .navbar-container .navbar__content {\n        flex: 3 0 0;\n        padding-left: 0;\n        display: flex;\n        flex-flow: wrap;\n        justify-content: center; }\n        app-navbar .navbar-container .navbar__content .navbar-header {\n          width: auto;\n          margin-right: 7px;\n          line-height: 1rem; }\n          app-navbar .navbar-container .navbar__content .navbar-header icon {\n            margin-right: 10px; }\n          app-navbar .navbar-container .navbar__content .navbar-header .navbar-btn__main {\n            box-shadow: none;\n            border: none;\n            padding-top: 0;\n            padding-bottom: 0; }\n      app-navbar .navbar-container .navbar__header {\n        color: var(--brand-primary); }\n    app-navbar .navbar-text {\n      margin: 0;\n      line-height: 2; }\n    app-navbar .navbar-brand {\n      margin-left: 0 !important; }\n    app-navbar .navbar-actions {\n      display: flex;\n      flex: 1;\n      flex-direction: column-reverse;\n      justify-content: flex-end;\n      padding-right: 1rem;\n      position: absolute;\n      right: 0;\n      top: 0; }\n      app-navbar .navbar-actions .navbar-action-link {\n        display: none; } }\n\n@media (min-width: 768px) {\n  app-navbar nav.navbar.navbar-fixed-top {\n    margin-left: 29.5rem; }\n  app-navbar .navbar-container {\n    padding: 0.5rem 0; }\n    app-navbar .navbar-container .navbar__content {\n      display: block;\n      padding-left: 2.5rem; }\n  app-navbar .navbar-actions {\n    position: relative;\n    flex-direction: row; }\n  .closed + .container-main app-navbar .navbar {\n    margin-left: 7rem; } }\n"

/***/ }),

/***/ "./src/app/containers/app-navbar/index.ts":
/*!************************************************!*\
  !*** ./src/app/containers/app-navbar/index.ts ***!
  \************************************************/
/*! exports provided: AppNavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavbarModule", function() { return AppNavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-navbar.component */ "./src/app/containers/app-navbar/app-navbar.component.ts");
/* harmony import */ var _app_navbar_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-navbar-menu */ "./src/app/containers/app-navbar/app-navbar-menu/index.ts");
/* harmony import */ var _app_navbar_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-navbar-user */ "./src/app/containers/app-navbar/app-navbar-user/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let AppNavbarModule = class AppNavbarModule {
};
AppNavbarModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _shared_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        declarations: [
            _app_navbar_component__WEBPACK_IMPORTED_MODULE_3__["AppNavbarComponent"],
            _app_navbar_menu__WEBPACK_IMPORTED_MODULE_4__["AppNavbarMenuComponent"],
            _app_navbar_user__WEBPACK_IMPORTED_MODULE_5__["AppNavbarUserComponent"]
        ],
        exports: [
            _app_navbar_component__WEBPACK_IMPORTED_MODULE_3__["AppNavbarComponent"]
        ]
    })
], AppNavbarModule);



/***/ }),

/***/ "./src/app/containers/app-search/app-search.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/app-search/app-search.component.ts ***!
  \***************************************************************/
/*! exports provided: AppSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSearchComponent", function() { return AppSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_store_user_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/store/user-profile */ "./src/app/core/store/user-profile/index.ts");
/* harmony import */ var _core_store_player_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/store/player-search */ "./src/app/core/store/player-search/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// selectors


let AppSearchComponent = class AppSearchComponent {
    constructor(store, playerSearchActions) {
        this.store = store;
        this.playerSearchActions = playerSearchActions;
        this.query$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store_player_search__WEBPACK_IMPORTED_MODULE_3__["getQuery"]));
        this.currentPlaylist$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store_user_profile__WEBPACK_IMPORTED_MODULE_2__["getUserViewPlaylist"]));
        this.queryParamPreset$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store_player_search__WEBPACK_IMPORTED_MODULE_3__["getQueryParamPreset"]));
        this.presets$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_store_player_search__WEBPACK_IMPORTED_MODULE_3__["getPresets"]));
    }
    ngOnInit() { }
    search(query) {
        if (!query.hasOwnProperty('isTrusted')) {
            this.store.dispatch(this.playerSearchActions.searchNewQuery(query));
        }
    }
    resetPageToken(query) {
        this.store.dispatch(this.playerSearchActions.resetPageToken());
        this.store.dispatch(new _core_store_player_search__WEBPACK_IMPORTED_MODULE_3__["UpdateQueryAction"](query));
    }
    searchMore() {
        this.store.dispatch(this.playerSearchActions.searchMoreForQuery());
    }
    updatePreset(preset) {
        this.store.dispatch(this.playerSearchActions.updateQueryParam({ preset: preset.value }));
    }
};
AppSearchComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-search',
        styles: [__webpack_require__(/*! ./app-search.scss */ "./src/app/containers/app-search/app-search.scss")],
        template: `
  <article
    infiniteScroll
    [infiniteScrollDistance]="2"
    [infiniteScrollDisabled]="currentPlaylist$ | async"
    (scrolled)="searchMore()"
    [immediateCheck]="true">
    <app-navbar>
      <div class="navbar-header">
        <player-search
          [query]="query$ | async"
          (queryChange)="resetPageToken($event)"
          (search)="search($event)"
        ></player-search>
      </div>
      <button-group class="nav-toolbar"
        [buttons]="presets$ | async"
        [selectedButton]="queryParamPreset$ | async"
        (buttonClick)="updatePreset($event)"
      ></button-group>
      <search-navigator></search-navigator>
    </app-navbar>
    <router-outlet></router-outlet>
    </article>
    `
    }),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _core_store_player_search__WEBPACK_IMPORTED_MODULE_3__["PlayerSearchActions"]])
], AppSearchComponent);



/***/ }),

/***/ "./src/app/containers/app-search/app-search.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/containers/app-search/app-search.routing.ts ***!
  \*************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _youtube_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube-videos */ "./src/app/containers/app-search/youtube-videos/index.ts");
/* harmony import */ var _app_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-search.component */ "./src/app/containers/app-search/app-search.component.ts");
/* harmony import */ var _youtube_playlists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube-playlists */ "./src/app/containers/app-search/youtube-playlists/index.ts");




const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    {
        path: 'search',
        component: _app_search_component__WEBPACK_IMPORTED_MODULE_2__["AppSearchComponent"],
        children: [
            { path: '', redirectTo: 'videos', pathMatch: 'full' },
            { path: 'videos', component: _youtube_videos__WEBPACK_IMPORTED_MODULE_1__["YoutubeVideosComponent"] },
            { path: 'playlists', component: _youtube_playlists__WEBPACK_IMPORTED_MODULE_3__["YoutubePlaylistsComponent"] }
        ]
    }
]);


/***/ }),

/***/ "./src/app/containers/app-search/app-search.scss":
/*!*******************************************************!*\
  !*** ./src/app/containers/app-search/app-search.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host > article {\n    padding-top: 10.5rem; } }\n"

/***/ }),

/***/ "./src/app/containers/app-search/index.ts":
/*!************************************************!*\
  !*** ./src/app/containers/app-search/index.ts ***!
  \************************************************/
/*! exports provided: AppSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSearchModule", function() { return AppSearchModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _app_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-search.component */ "./src/app/containers/app-search/app-search.component.ts");
/* harmony import */ var _app_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-navbar */ "./src/app/containers/app-navbar/index.ts");
/* harmony import */ var _youtube_videos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./youtube-videos */ "./src/app/containers/app-search/youtube-videos/index.ts");
/* harmony import */ var _youtube_playlists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./youtube-playlists */ "./src/app/containers/app-search/youtube-playlists/index.ts");
/* harmony import */ var _player_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-search */ "./src/app/containers/app-search/player-search/index.ts");
/* harmony import */ var _search_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-navigator */ "./src/app/containers/app-search/search-navigator/index.ts");
/* harmony import */ var _app_search_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-search.routing */ "./src/app/containers/app-search/app-search.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppSearchModule = class AppSearchModule {
};
AppSearchModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_index__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _app_navbar__WEBPACK_IMPORTED_MODULE_4__["AppNavbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _app_search_routing__WEBPACK_IMPORTED_MODULE_9__["routing"]],
        declarations: [
            _app_search_component__WEBPACK_IMPORTED_MODULE_3__["AppSearchComponent"],
            _youtube_videos__WEBPACK_IMPORTED_MODULE_5__["YoutubeVideosComponent"],
            _youtube_playlists__WEBPACK_IMPORTED_MODULE_6__["YoutubePlaylistsComponent"],
            _player_search__WEBPACK_IMPORTED_MODULE_7__["PlayerSearchComponent"],
            _search_navigator__WEBPACK_IMPORTED_MODULE_8__["SearchNavigatorComponent"]
        ],
        exports: [_app_search_component__WEBPACK_IMPORTED_MODULE_3__["AppSearchComponent"]],
        providers: []
    })
], AppSearchModule);



/***/ }),

/***/ "./src/app/containers/app-search/player-search/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/containers/app-search/player-search/index.ts ***!
  \**************************************************************/
/*! exports provided: PlayerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-search.component */ "./src/app/containers/app-search/player-search/player-search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchComponent", function() { return _player_search_component__WEBPACK_IMPORTED_MODULE_0__["PlayerSearchComponent"]; });




/***/ }),

/***/ "./src/app/containers/app-search/player-search/player-search.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/containers/app-search/player-search/player-search.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlayerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchComponent", function() { return PlayerSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PlayerSearchComponent = class PlayerSearchComponent {
    constructor(fb) {
        this.fb = fb;
        this.queryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.params = {
            hl: 'en',
            ds: 'yt',
            xhr: 't',
            client: 'youtube'
        };
        this.searchForm = fb.group({
            searchInput: this.query
        });
        this.formState = this.searchForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(value => !value.hasOwnProperty('isTrusted')))
            .subscribe(formState => {
            this.onQueryChange(formState.searchInput);
        });
    }
    ngOnChanges(changes) {
        const changedQuery = changes && changes.query;
        if (changedQuery &&
            changedQuery.currentValue &&
            changedQuery.currentValue.hasOwnProperty('length')) {
            this.patchSearchInput(changedQuery.currentValue);
        }
    }
    ngOnDestroy() {
        this.formState.unsubscribe();
    }
    patchSearchInput(searchInput) {
        this.searchForm.patchValue({ searchInput }, { emitEvent: false });
    }
    onQueryChange(query) {
        this.queryChange.emit(query);
    }
    onSearch() {
        const searchFormState = this.searchForm.value;
        this.selectSuggestion(searchFormState.searchInput);
    }
    handleSelectSuggestion(suggestion) {
        this.selectSuggestion(suggestion);
    }
    selectSuggestion(suggestion) {
        if (!suggestion.hasOwnProperty('isTrusted'))
            this.search.emit(suggestion);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PlayerSearchComponent.prototype, "query", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlayerSearchComponent.prototype, "queryChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlayerSearchComponent.prototype, "search", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mediaSearch'),
    __metadata("design:type", Object)
], PlayerSearchComponent.prototype, "mediaSearch", void 0);
PlayerSearchComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'player-search',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./player-search.scss */ "./src/app/containers/app-search/player-search/player-search.scss")],
        template: `
    <form class="navbar-form form-search" id="media-explorer"
      [formGroup]="searchForm"
      >
      <div class="form-group clearfix is-flex-row">
        <input placeholder="Seach track on your mind..." id="media-search"
          #mediaSearch
          ngxTypeahead
          [taUrl]="'//suggestqueries.google.com/complete/search'"
          [taParams]="params"
          [taAllowEmpty]="true"
          (taSelected)="handleSelectSuggestion($event)"
          type="search" class="form-control" autocomplete="off"
          name="mediaSearch"
          formControlName="searchInput"
          >
        <button class="btn btn-transparent btn-submit" tooltip="search with echoes">
          <icon name="search"></icon>
        </button>
      </div>
    </form>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], PlayerSearchComponent);



/***/ }),

/***/ "./src/app/containers/app-search/player-search/player-search.scss":
/*!************************************************************************!*\
  !*** ./src/app/containers/app-search/player-search/player-search.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  player-search {\n    display: inline-block; }\n    player-search .form-search {\n      float: none;\n      position: relative;\n      border: 0; }\n      player-search .form-search .btn-submit {\n        color: #555;\n        font-size: 1.5rem; }\n      player-search .form-search .dropdown-menu {\n        box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 8px 0px;\n        -webkit-transform: translatey(0rem);\n                transform: translatey(0rem);\n        max-height: none;\n        background-color: white;\n        opacity: 1; }\n        player-search .form-search .dropdown-menu > li.active a {\n          color: white; }\n        player-search .form-search .dropdown-menu > li a {\n          color: #444;\n          line-height: 3; }\n      player-search .form-search .form-group {\n        background-color: white;\n        border-radius: 3px;\n        position: relative; }\n      player-search .form-search input.form-control {\n        width: 25rem;\n        height: 32px;\n        border: none;\n        box-shadow: none;\n        font-size: 17px; }\n    player-search .ta-results {\n      position: absolute;\n      top: 32px;\n      z-index: 10;\n      box-shadow: 0rem 0.3rem 3rem -0.5rem rgba(0, 0, 0, 0.5); }\n      player-search .ta-results .ta-item {\n        border-radius: 0; }\n        player-search .ta-results .ta-item.active {\n          background-color: var(--brand-primary);\n          border-color: var(--brand-primary); } }\n\n@media (min-width: 460px) {\n  player-search .form-search input.form-control {\n    display: inline-block; } }\n"

/***/ }),

/***/ "./src/app/containers/app-search/search-navigator/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/containers/app-search/search-navigator/index.ts ***!
  \*****************************************************************/
/*! exports provided: SearchNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_navigator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-navigator.component */ "./src/app/containers/app-search/search-navigator/search-navigator.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchNavigatorComponent", function() { return _search_navigator_component__WEBPACK_IMPORTED_MODULE_0__["SearchNavigatorComponent"]; });




/***/ }),

/***/ "./src/app/containers/app-search/search-navigator/search-navigator.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/containers/app-search/search-navigator/search-navigator.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host {\n    --border-active-color: var(--brand-primary);\n    --link-active-color: var(--navbar-link-color); }\n    :host .search-selector {\n      clear: both; }\n      :host .search-selector.nav > li > a {\n        text-transform: uppercase;\n        border: none;\n        border-radius: none;\n        background-color: transparent;\n        color: var(--navbar-text-color); }\n      :host .search-selector.nav-tabs {\n        border-bottom: none; }\n        :host .search-selector.nav-tabs > li.active > a {\n          border-bottom: 0.2rem solid var(--border-active-color);\n          color: var(--link-active-color);\n          box-shadow: none; } }\n"

/***/ }),

/***/ "./src/app/containers/app-search/search-navigator/search-navigator.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/containers/app-search/search-navigator/search-navigator.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SearchNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNavigatorComponent", function() { return SearchNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_store_player_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/store/player-search */ "./src/app/core/store/player-search/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SearchNavigatorComponent = class SearchNavigatorComponent {
    constructor() {
        this.searchTypes = [
            { label: 'Videos', link: '/search/videos', type: _core_store_player_search__WEBPACK_IMPORTED_MODULE_1__["CSearchTypes"].VIDEO },
            { label: 'Playlists', link: '/search/playlists', type: _core_store_player_search__WEBPACK_IMPORTED_MODULE_1__["CSearchTypes"].PLAYLIST },
        ];
    }
    ngOnInit() { }
};
SearchNavigatorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'search-navigator',
        styles: [__webpack_require__(/*! ./search-navigator.component.scss */ "./src/app/containers/app-search/search-navigator/search-navigator.component.scss")],
        template: `
  <ul class="nav nav-tabs search-selector" role="tablist">
    <li *ngFor="let search of searchTypes"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">
      <a routerLink="{{ search.link }}">{{ search.label }}</a>
    </li>
  </ul>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    })
], SearchNavigatorComponent);



/***/ }),

/***/ "./src/app/containers/app-search/youtube-playlists/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/containers/app-search/youtube-playlists/index.ts ***!
  \******************************************************************/
/*! exports provided: YoutubePlaylistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _youtube_playlists_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-playlists.component */ "./src/app/containers/app-search/youtube-playlists/youtube-playlists.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubePlaylistsComponent", function() { return _youtube_playlists_component__WEBPACK_IMPORTED_MODULE_0__["YoutubePlaylistsComponent"]; });




/***/ }),

/***/ "./src/app/containers/app-search/youtube-playlists/youtube-playlists.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/containers/app-search/youtube-playlists/youtube-playlists.component.ts ***!
  \****************************************************************************************/
/*! exports provided: YoutubePlaylistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlaylistsComponent", function() { return YoutubePlaylistsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_store_player_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/store/player-search */ "./src/app/core/store/player-search/index.ts");
/* harmony import */ var _core_api_app_player_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/api/app-player.api */ "./src/app/core/api/app-player.api.ts");
/* harmony import */ var _shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/animations/fade-in.animation */ "./src/app/shared/animations/fade-in.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// selectors



let YoutubePlaylistsComponent = class YoutubePlaylistsComponent {
    constructor(store, appPlayerApi) {
        this.store = store;
        this.appPlayerApi = appPlayerApi;
        this.results$ = this.store.select(_core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["getPlayerSearchResults"]);
        this.isSearching$ = this.store.select(_core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["getIsSearching"]);
    }
    ngOnInit() {
        this.store.dispatch(new _core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["UpdateSearchType"](_core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["CSearchTypes"].PLAYLIST));
        this.store.dispatch(_core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["PlayerSearchActions"].PLAYLISTS_SEARCH_START.creator());
    }
    playPlaylist(media) {
        this.appPlayerApi.playPlaylist(media);
    }
    queueSelectedPlaylist(media) {
        this.appPlayerApi.queuePlaylist(media);
    }
};
YoutubePlaylistsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'youtube-playlists',
        animations: [_shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInAnimation"]],
        template: `
  <loader [message]="'Loading Awesome Playlists Results'" [loading]="isSearching$ | async"></loader>
  <section class="videos-list">
    <div class="ux-maker is-flex-row is-flex-wrap is-content-aligned-h">
      <youtube-playlist class="is-media-responsive"
        [@fadeIn]
        *ngFor="let playlist of results$ | async"
        link=""
        [media]="playlist"
        (play)="playPlaylist(playlist)"
        (queue)="queueSelectedPlaylist(playlist)">
      </youtube-playlist>
    </div>
  </section>
  `
    }),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
        _core_api_app_player_api__WEBPACK_IMPORTED_MODULE_3__["AppPlayerApi"]])
], YoutubePlaylistsComponent);



/***/ }),

/***/ "./src/app/containers/app-search/youtube-videos/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/app-search/youtube-videos/index.ts ***!
  \***************************************************************/
/*! exports provided: YoutubeVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _youtube_videos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-videos.component */ "./src/app/containers/app-search/youtube-videos/youtube-videos.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideosComponent", function() { return _youtube_videos_component__WEBPACK_IMPORTED_MODULE_0__["YoutubeVideosComponent"]; });




/***/ }),

/***/ "./src/app/containers/app-search/youtube-videos/youtube-videos.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/containers/app-search/youtube-videos/youtube-videos.component.ts ***!
  \**********************************************************************************/
/*! exports provided: YoutubeVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideosComponent", function() { return YoutubeVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_store_player_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/store/player-search */ "./src/app/core/store/player-search/index.ts");
/* harmony import */ var _core_api_app_player_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/api/app-player.api */ "./src/app/core/api/app-player.api.ts");
/* harmony import */ var _core_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/store/now-playlist */ "./src/app/core/store/now-playlist/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// selectors

let YoutubeVideosComponent = class YoutubeVideosComponent {
    constructor(store, appPlayerApi) {
        this.store = store;
        this.appPlayerApi = appPlayerApi;
        this.videos$ = this.store.select(_core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["getPlayerSearchResults"]);
        this.playlistIds$ = this.store.select(_core_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["getPlaylistMediaIds"]);
        this.loading$ = this.store.select(_core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["getIsSearching"]);
    }
    ngOnInit() {
        this.store.dispatch(new _core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["UpdateSearchType"](_core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["CSearchTypes"].VIDEO));
        this.store.dispatch(new _core_store_player_search__WEBPACK_IMPORTED_MODULE_2__["SearchCurrentQuery"]());
    }
    playSelectedVideo(media) {
        this.appPlayerApi.playVideo(media);
    }
    queueSelectedVideo(media) {
        this.appPlayerApi.queueVideo(media);
    }
    removeVideoFromPlaylist(media) {
        this.appPlayerApi.removeVideoFromPlaylist(media);
    }
};
YoutubeVideosComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'youtube-videos',
        styles: [__webpack_require__(/*! ./youtube-videos.scss */ "./src/app/containers/app-search/youtube-videos/youtube-videos.scss")],
        template: `
    <loader [message]="'Loading Awesome Media Results'" [loading]="loading$ | async"></loader>
    <youtube-list
      [list]="videos$ | async"
      [queued]="playlistIds$ | async"
      (play)="playSelectedVideo($event)"
      (queue)="queueSelectedVideo($event)"
      (unqueue)="removeVideoFromPlaylist($event)"
    ></youtube-list>
  `
    }),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
        _core_api_app_player_api__WEBPACK_IMPORTED_MODULE_3__["AppPlayerApi"]])
], YoutubeVideosComponent);



/***/ }),

/***/ "./src/app/containers/app-search/youtube-videos/youtube-videos.scss":
/*!**************************************************************************!*\
  !*** ./src/app/containers/app-search/youtube-videos/youtube-videos.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host .nav-toolbar {\n    margin: 0.9rem .5rem;\n    display: inline-block; }\n  @media (min-width: 320px) {\n  :host {\n    position: relative; }\n    :host .nav-toolbar .btn {\n      padding: 1rem 2.7rem; } }\n  @media (min-width: 768px) {\n  :host {\n    padding-left: 0; }\n    :host .nav-toolbar .btn {\n      padding: 0.7rem 1.5rem; }\n    :host .videos-list {\n      padding-left: 1.6rem; } }\n"

/***/ }),

/***/ "./src/app/containers/index.ts":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: APP_CONTAINER_MODULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONTAINER_MODULES", function() { return APP_CONTAINER_MODULES; });
/* harmony import */ var _app_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-search */ "./src/app/containers/app-search/index.ts");
/* harmony import */ var _app_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-navbar */ "./src/app/containers/app-navbar/index.ts");
/* harmony import */ var _playlist_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist-view */ "./src/app/containers/playlist-view/index.ts");



const APP_CONTAINER_MODULES = [
    _app_search__WEBPACK_IMPORTED_MODULE_0__["AppSearchModule"],
    // UserModule,
    _app_navbar__WEBPACK_IMPORTED_MODULE_1__["AppNavbarModule"],
    _playlist_view__WEBPACK_IMPORTED_MODULE_2__["PlaylistViewModule"]
];


/***/ }),

/***/ "./src/app/containers/playlist-view/index.ts":
/*!***************************************************!*\
  !*** ./src/app/containers/playlist-view/index.ts ***!
  \***************************************************/
/*! exports provided: PlaylistViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistViewModule", function() { return PlaylistViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _app_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-navbar */ "./src/app/containers/app-navbar/index.ts");
/* harmony import */ var _playlist_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist-view.component */ "./src/app/containers/playlist-view/playlist-view.component.ts");
/* harmony import */ var _playlist_view_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlist-view.proxy */ "./src/app/containers/playlist-view/playlist-view.proxy.ts");
/* harmony import */ var _playlist_view_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playlist-view.routing */ "./src/app/containers/playlist-view/playlist-view.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let PlaylistViewModule = class PlaylistViewModule {
};
PlaylistViewModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _shared_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _app_navbar__WEBPACK_IMPORTED_MODULE_2__["AppNavbarModule"],
            _playlist_view_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
        ],
        declarations: [
            _playlist_view_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistViewComponent"]
        ],
        exports: [
            _playlist_view_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistViewComponent"]
        ],
        providers: [
            _playlist_view_proxy__WEBPACK_IMPORTED_MODULE_4__["PlaylistProxy"]
        ]
    })
], PlaylistViewModule);



/***/ }),

/***/ "./src/app/containers/playlist-view/playlist-view.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/containers/playlist-view/playlist-view.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/containers/playlist-view/playlist-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/containers/playlist-view/playlist-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlaylistViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistViewComponent", function() { return PlaylistViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _playlist_view_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist-view.proxy */ "./src/app/containers/playlist-view/playlist-view.proxy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PlaylistViewComponent = class PlaylistViewComponent {
    constructor(playlistProxy, route) {
        this.playlistProxy = playlistProxy;
        this.route = route;
        this.playlist$ = this.playlistProxy.fetchPlaylist(this.route);
        this.videos$ = this.playlistProxy.fetchPlaylistVideos(this.route);
        this.header$ = this.playlistProxy.fetchPlaylistHeader(this.route);
        this.nowPlaylistIds$ = this.playlistProxy.nowPlaylistIds$;
    }
    ngOnInit() { }
    playPlaylist(playlist) {
        this.playlistProxy.playPlaylist(playlist);
    }
    queuePlaylist(playlist) {
        this.playlistProxy.queuePlaylist(playlist);
    }
    queueVideo(media) {
        this.playlistProxy.queueVideo(media);
    }
    playVideo(media) {
        this.playlistProxy.playVideo(media);
    }
    unqueueVideo(media) {
        this.playlistProxy.unqueueVideo(media);
    }
    handleBack() {
        this.playlistProxy.goBack();
    }
};
PlaylistViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'playlist-view',
        styles: [__webpack_require__(/*! ./playlist-view.component.scss */ "./src/app/containers/playlist-view/playlist-view.component.scss")],
        template: `
  <article>
    <app-navbar [header]="header$ | async"
      [mainIcon]="'chevron-left'"
      (headerMainIconClick)="handleBack()">
    </app-navbar>
    <div class="row">
      <playlist-viewer class="clearfix"
        [videos]="videos$ | async"
        [playlist]="playlist$ | async"
        [queuedPlaylist]="nowPlaylistIds$ | async"
        (playPlaylist)="playPlaylist($event)"
        (queuePlaylist)="queuePlaylist($event)"
        (playVideo)="playVideo($event)"
        (queueVideo)="queueVideo($event)"
        (unqueueVideo)="unqueueVideo($event)"
      ></playlist-viewer>
    </div>
  </article>
  `
    }),
    __metadata("design:paramtypes", [_playlist_view_proxy__WEBPACK_IMPORTED_MODULE_2__["PlaylistProxy"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], PlaylistViewComponent);



/***/ }),

/***/ "./src/app/containers/playlist-view/playlist-view.proxy.ts":
/*!*****************************************************************!*\
  !*** ./src/app/containers/playlist-view/playlist-view.proxy.ts ***!
  \*****************************************************************/
/*! exports provided: PlaylistProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistProxy", function() { return PlaylistProxy; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_store_now_playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/store/now-playlist */ "./src/app/core/store/now-playlist/index.ts");
/* harmony import */ var _core_store_user_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/store/user-profile */ "./src/app/core/store/user-profile/index.ts");
/* harmony import */ var _api_app_player_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @api/app-player.api */ "./src/app/core/api/app-player.api.ts");
/* harmony import */ var _api_app_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @api/app.api */ "./src/app/core/api/app.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let PlaylistProxy = class PlaylistProxy {
    constructor(store, userProfileActions, appPlayerApi, appApi) {
        this.store = store;
        this.userProfileActions = userProfileActions;
        this.appPlayerApi = appPlayerApi;
        this.appApi = appApi;
        this.nowPlaylistIds$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_core_store_now_playlist__WEBPACK_IMPORTED_MODULE_3__["getPlaylistMediaIds"]));
    }
    goBack() {
        this.appApi.navigateBack();
    }
    toRouteData(route) {
        return route.data;
    }
    fetchPlaylist(route) {
        return this.toRouteData(route).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.playlist));
    }
    fetchPlaylistVideos(route) {
        return this.toRouteData(route).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.videos));
    }
    fetchPlaylistHeader(route) {
        return this.fetchPlaylist(route).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((playlist) => {
            const { snippet, contentDetails } = playlist;
            return `${snippet.title} (${contentDetails.itemCount} videos)`;
        }));
    }
    playPlaylist(playlist) {
        this.appPlayerApi.playPlaylist(playlist);
    }
    queuePlaylist(playlist) {
        this.appPlayerApi.queuePlaylist(playlist);
    }
    queueVideo(media) {
        this.appPlayerApi.queueVideo(media);
    }
    playVideo(media) {
        this.appPlayerApi.playVideo(media);
    }
    unqueueVideo(media) {
        this.appPlayerApi.removeVideoFromPlaylist(media);
    }
};
PlaylistProxy = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"],
        _core_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"],
        _api_app_player_api__WEBPACK_IMPORTED_MODULE_5__["AppPlayerApi"],
        _api_app_api__WEBPACK_IMPORTED_MODULE_6__["AppApi"]])
], PlaylistProxy);



/***/ }),

/***/ "./src/app/containers/playlist-view/playlist-view.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/containers/playlist-view/playlist-view.routing.ts ***!
  \*******************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _core_resolvers_playlist_videos_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/resolvers/playlist-videos.resolver */ "./src/app/core/resolvers/playlist-videos.resolver.ts");
/* harmony import */ var _core_resolvers_playlist_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/resolvers/playlist.resolver */ "./src/app/core/resolvers/playlist.resolver.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _playlist_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist-view.component */ "./src/app/containers/playlist-view/playlist-view.component.ts");




const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
    {
        path: 'playlist/:id', component: _playlist_view_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistViewComponent"],
        resolve: {
            videos: _core_resolvers_playlist_videos_resolver__WEBPACK_IMPORTED_MODULE_0__["PlaylistVideosResolver"],
            playlist: _core_resolvers_playlist_resolver__WEBPACK_IMPORTED_MODULE_1__["PlaylistResolver"]
        }
    }
]);


/***/ }),

/***/ "./src/app/core/api/app-player.api.ts":
/*!********************************************!*\
  !*** ./src/app/core/api/app-player.api.ts ***!
  \********************************************/
/*! exports provided: AppPlayerApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPlayerApi", function() { return AppPlayerApi; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _utils_data_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/data.utils */ "./src/app/shared/utils/data.utils.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_app_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/app-player */ "./src/app/core/store/app-player/index.ts");
/* harmony import */ var _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/now-playlist */ "./src/app/core/store/now-playlist/index.ts");
/* harmony import */ var _core_effects_now_playlist_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/effects/now-playlist.effects */ "./src/app/core/effects/now-playlist.effects.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AppPlayerApi = class AppPlayerApi {
    constructor(store, nowPlaylistEffects) {
        this.store = store;
        this.nowPlaylistEffects = nowPlaylistEffects;
    }
    playPlaylist(playlist) {
        this.nowPlaylistEffects.playPlaylistFirstTrack$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_1__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe((media) => this.playVideo(media));
        this.queuePlaylist(playlist);
    }
    queuePlaylist(playlist) {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["LoadPlaylistAction"](playlist.id));
    }
    playVideo(media) {
        this.store.dispatch(new _store_app_player__WEBPACK_IMPORTED_MODULE_3__["LoadAndPlay"](media));
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["SelectVideo"](media));
    }
    queueVideo(media) {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["QueueVideo"](media));
    }
    removeVideoFromPlaylist(media) {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["RemoveVideo"](media));
    }
    pauseVideo() {
        this.store.dispatch(new _store_app_player__WEBPACK_IMPORTED_MODULE_3__["PauseVideo"]());
    }
    togglePlayer() {
        this.store.dispatch(new _store_app_player__WEBPACK_IMPORTED_MODULE_3__["TogglePlayer"](true));
    }
    toggleFullScreen() {
        this.store.dispatch(new _store_app_player__WEBPACK_IMPORTED_MODULE_3__["FullScreen"]());
    }
    toggleRepeat() {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ToggleRepeat"]());
    }
    resetPlayer() {
        this.store.dispatch(new _store_app_player__WEBPACK_IMPORTED_MODULE_3__["Reset"]());
    }
    setupPlayer(player) {
        this.store.dispatch(new _store_app_player__WEBPACK_IMPORTED_MODULE_3__["SetupPlayer"](player));
    }
    changePlayerState(event) {
        this.store.dispatch(new _store_app_player__WEBPACK_IMPORTED_MODULE_3__["PlayerStateChange"](event.data));
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["PlayerStateChange"](event.data));
    }
};
AppPlayerApi = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"],
        _core_effects_now_playlist_effects__WEBPACK_IMPORTED_MODULE_5__["NowPlaylistEffects"]])
], AppPlayerApi);



/***/ }),

/***/ "./src/app/core/api/app.api.ts":
/*!*************************************!*\
  !*** ./src/app/core/api/app.api.ts ***!
  \*************************************/
/*! exports provided: AppApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppApi", function() { return AppApi; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/app-core */ "./src/app/core/store/app-core/index.ts");
/* harmony import */ var _store_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/router-store */ "./src/app/core/store/router-store/index.ts");
/* harmony import */ var _store_user_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/user-profile */ "./src/app/core/store/user-profile/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Actions



let AppApi = class AppApi {
    constructor(store) {
        this.store = store;
        this.themes$ = this.store.select(_store_app_core__WEBPACK_IMPORTED_MODULE_2__["getAppThemes"]);
        this.appVersion$ = this.store.select(_store_app_core__WEBPACK_IMPORTED_MODULE_2__["getAppVersion"]);
        this.user$ = this.store.select(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["getUser"]);
    }
    toggleSidebar() {
        this.store.dispatch(new _store_app_core__WEBPACK_IMPORTED_MODULE_2__["ToggleSidebar"]());
    }
    navigateBack() {
        this.store.dispatch(new _store_router_store__WEBPACK_IMPORTED_MODULE_3__["Back"]());
    }
    updateVersion() {
        this.store.dispatch(new _store_app_core__WEBPACK_IMPORTED_MODULE_2__["UpdateAppVersion"]());
    }
    checkVersion() {
        this.store.dispatch(new _store_app_core__WEBPACK_IMPORTED_MODULE_2__["CheckVersion"]());
    }
    changeTheme(theme) {
        this.store.dispatch(new _store_app_core__WEBPACK_IMPORTED_MODULE_2__["ThemeChange"](theme));
    }
    notifyNewVersion(response) {
        this.store.dispatch(new _store_app_core__WEBPACK_IMPORTED_MODULE_2__["RecievedAppVersion"](response));
    }
    recievedNewVersion(response) {
        this.store.dispatch(new _store_app_core__WEBPACK_IMPORTED_MODULE_2__["RecievedAppVersion"](response));
    }
    // AUTHORIZATION
    signinUser() {
        this.store.dispatch(new _store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserSignin"]());
    }
    signoutUser() {
        this.store.dispatch(new _store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserSignout"]());
    }
    checkUserAuth() {
        this.store.dispatch(new _store_user_profile__WEBPACK_IMPORTED_MODULE_4__["CheckUserAuth"]());
    }
    notifyError(error) {
        this.store.dispatch(new _store_app_core__WEBPACK_IMPORTED_MODULE_2__["AddError"](error));
    }
};
AppApi = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
], AppApi);



/***/ }),

/***/ "./src/app/core/api/index.ts":
/*!***********************************!*\
  !*** ./src/app/core/api/index.ts ***!
  \***********************************/
/*! exports provided: APP_APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_APIS", function() { return APP_APIS; });
/* harmony import */ var _app_player_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-player.api */ "./src/app/core/api/app-player.api.ts");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.api */ "./src/app/core/api/app.api.ts");


const APP_APIS = [
    _app_player_api__WEBPACK_IMPORTED_MODULE_0__["AppPlayerApi"],
    _app_api__WEBPACK_IMPORTED_MODULE_1__["AppApi"]
];


/***/ }),

/***/ "./src/app/core/components/app-brand/app-brand.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/app-brand/app-brand.component.ts ***!
  \******************************************************************/
/*! exports provided: AppBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrandComponent", function() { return AppBrandComponent; });
/* harmony import */ var _api_app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/app.api */ "./src/app/core/api/app.api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppBrandComponent = class AppBrandComponent {
    constructor(appApi) {
        this.appApi = appApi;
    }
    ngOnInit() { }
    toggleSidebar() {
        return this.appApi.toggleSidebar();
    }
};
AppBrandComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brand',
        styles: [__webpack_require__(/*! ./app-brand.scss */ "./src/app/core/components/app-brand/app-brand.scss")],
        template: `
  <div class="brand-container bg-primary"
    (click)="toggleSidebar()">
    <section class="brand-text">
      <h3 class="text brand-text-item">Ech</h3>
      <icon name="headphones" class="brand-icon brand-text-item"></icon>
      <h3 class="text brand-text-item">es</h3>
    </section>
    <button class="btn btn-transparent sidebar-toggle">
      <icon name="bars 2x"></icon>
    </button>
  </div>
  `
    }),
    __metadata("design:paramtypes", [_api_app_api__WEBPACK_IMPORTED_MODULE_0__["AppApi"]])
], AppBrandComponent);



/***/ }),

/***/ "./src/app/core/components/app-brand/app-brand.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/components/app-brand/app-brand.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host .brand-container {\n    padding: 0.5rem 1.5rem;\n    margin: 0;\n    text-transform: uppercase;\n    position: relative;\n    display: flex; }\n    :host .brand-container .brand-text {\n      flex: 1;\n      display: flex;\n      flex-direction: row; }\n      :host .brand-container .brand-text .brand-text-item {\n        margin: 0;\n        transition: flex, opacity 0.3s ease-in;\n        line-height: 2; }\n    :host .brand-container .brand-icon {\n      font-size: 30px;\n      margin: 0 0.3rem;\n      color: #ecf0f1;\n      padding-top: 8px;\n      flex: 0 0 0%; }\n      :host .brand-container .brand-icon.brand-text-item {\n        line-height: 1 !important; }\n      .closed :host .brand-container .brand-icon {\n        flex: 0; }\n    :host .brand-container .text {\n      flex: 0 1 0%; }\n    :host .brand-container .sidebar-toggle {\n      transition: -webkit-transform;\n      transition: transform;\n      transition: transform, -webkit-transform;\n      -webkit-transform: translateX(37.5rem);\n              transform: translateX(37.5rem);\n      color: var(--brand-primary); }\n      .closed :host .brand-container .sidebar-toggle {\n        position: absolute;\n        -webkit-transform: translateY(-4rem);\n                transform: translateY(-4rem); } }\n\n@media (min-width: 768px) {\n  :host .brand-container .sidebar-toggle {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    color: var(--brand-inverse-text); }\n  .closed :host .brand-container .brand-icon {\n    flex: 1 1 100%; } }\n\n@media (min-width: 1024px) {\n  .closed :host .brand-container {\n    text-align: center; }\n  .closed :host .brand-container .text {\n    flex: 0 1 00%;\n    width: 0;\n    overflow: hidden;\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/core/components/app-brand/index.ts":
/*!****************************************************!*\
  !*** ./src/app/core/components/app-brand/index.ts ***!
  \****************************************************/
/*! exports provided: AppBrandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrandModule", function() { return AppBrandModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _app_brand_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-brand.component */ "./src/app/core/components/app-brand/app-brand.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppBrandModule = class AppBrandModule {
};
AppBrandModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_shared_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
        exports: [_app_brand_component__WEBPACK_IMPORTED_MODULE_2__["AppBrandComponent"]],
        declarations: [_app_brand_component__WEBPACK_IMPORTED_MODULE_2__["AppBrandComponent"]],
        providers: [],
    })
], AppBrandModule);



/***/ }),

/***/ "./src/app/core/components/app-error-handler/app-error-handler.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/components/app-error-handler/app-error-handler.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AppErrorHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandlerComponent", function() { return AppErrorHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_error_handler_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error-handler.proxy */ "./src/app/core/components/app-error-handler/app-error-handler.proxy.ts");
/* harmony import */ var _store_app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/app-core */ "./src/app/core/store/app-core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AppErrorHandlerComponent = class AppErrorHandlerComponent {
    constructor(appErrorHandlerProxy) {
        this.appErrorHandlerProxy = appErrorHandlerProxy;
        this.errorMessage$ = this.appErrorHandlerProxy.errorMessage$;
        this.errorShow$ = this.appErrorHandlerProxy.isShowError$;
        this.errorAction$ = this.appErrorHandlerProxy.errorAction$;
    }
    ngOnInit() { }
    handleAction(errorAction) {
        switch (errorAction) {
            case _store_app_core__WEBPACK_IMPORTED_MODULE_2__["ErrorActions"].NONE:
                this.appErrorHandlerProxy.toggleError();
                break;
            case _store_app_core__WEBPACK_IMPORTED_MODULE_2__["ErrorActions"].RELOAD:
                this.appErrorHandlerProxy.cleanError();
                location.reload();
                break;
            default:
                break;
        }
    }
    close() {
        this.handleAction(_store_app_core__WEBPACK_IMPORTED_MODULE_2__["ErrorActions"].NONE);
    }
};
AppErrorHandlerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-error-handler',
        template: __webpack_require__(/*! ./app-error-handler.html */ "./src/app/core/components/app-error-handler/app-error-handler.html"),
        styles: [__webpack_require__(/*! ./app-error-handler.scss */ "./src/app/core/components/app-error-handler/app-error-handler.scss")]
    }),
    __metadata("design:paramtypes", [_app_error_handler_proxy__WEBPACK_IMPORTED_MODULE_1__["AppErrorHandlerProxy"]])
], AppErrorHandlerComponent);



/***/ }),

/***/ "./src/app/core/components/app-error-handler/app-error-handler.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/app-error-handler/app-error-handler.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section\n  class=\"is-flex-column is-flex-valign bg-danger\"\n  *ngIf=\"errorShow$ | async\">\n  <article class=\"is-flex-row is-flex-valign\">\n    <h4 class=\"is-strechable\">\n      <icon name=\"info-circle\"></icon> Something Went Wrong\n    </h4>\n    <button-icon\n      (click)=\"close()\"\n      icon=\"close\"\n      types=\"primary\"></button-icon>\n  </article>\n  <article class=\"text-left\">{{ errorMessage$ | async }}</article>\n  <ng-container *ngIf=\"errorAction$ | async as errorAction\">\n    <button\n      class=\"btn btn-default\"\n      (click)=\"handleAction(errorAction)\">\n      {{ errorAction }}\n    </button>\n  </ng-container>\n</section>\n"

/***/ }),

/***/ "./src/app/core/components/app-error-handler/app-error-handler.proxy.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/app-error-handler/app-error-handler.proxy.ts ***!
  \******************************************************************************/
/*! exports provided: AppErrorHandlerProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandlerProxy", function() { return AppErrorHandlerProxy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _api_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/app.api */ "./src/app/core/api/app.api.ts");
/* harmony import */ var _store_app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/app-core */ "./src/app/core/store/app-core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppErrorHandlerProxy = class AppErrorHandlerProxy {
    constructor(store, appApi) {
        this.store = store;
        this.appApi = appApi;
        this.errorMessage$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_app_core__WEBPACK_IMPORTED_MODULE_3__["selectErrorMessage"]));
        this.isShowError$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_app_core__WEBPACK_IMPORTED_MODULE_3__["selectIsErrorShow"]));
        this.errorAction$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_app_core__WEBPACK_IMPORTED_MODULE_3__["selectErrorAction"]));
    }
    toggleError() {
        this.store.dispatch(new _store_app_core__WEBPACK_IMPORTED_MODULE_3__["ToggleError"]());
    }
    cleanError() {
        this.store.dispatch(new _store_app_core__WEBPACK_IMPORTED_MODULE_3__["CleanError"]());
    }
};
AppErrorHandlerProxy = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _api_app_api__WEBPACK_IMPORTED_MODULE_2__["AppApi"]])
], AppErrorHandlerProxy);



/***/ }),

/***/ "./src/app/core/components/app-error-handler/app-error-handler.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/app-error-handler/app-error-handler.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host section {\n    position: fixed;\n    bottom: 2rem;\n    right: 2rem;\n    z-index: 1032;\n    box-shadow: var(--app-lite-shadow);\n    padding: 1rem;\n    min-width: 20vw;\n    max-width: 20vw; }\n  :host article {\n    width: 100%;\n    max-height: 20vh;\n    overflow: auto;\n    word-break: break-word; } }\n"

/***/ }),

/***/ "./src/app/core/components/app-error-handler/index.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/app-error-handler/index.ts ***!
  \************************************************************/
/*! exports provided: AppErrorHandlerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandlerModule", function() { return AppErrorHandlerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _app_error_handler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-error-handler.component */ "./src/app/core/components/app-error-handler/app-error-handler.component.ts");
/* harmony import */ var _app_error_handler_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-error-handler.proxy */ "./src/app/core/components/app-error-handler/app-error-handler.proxy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AppErrorHandlerModule = class AppErrorHandlerModule {
};
AppErrorHandlerModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_app_error_handler_component__WEBPACK_IMPORTED_MODULE_2__["AppErrorHandlerComponent"]],
        imports: [_shared_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
        exports: [_app_error_handler_component__WEBPACK_IMPORTED_MODULE_2__["AppErrorHandlerComponent"]],
        providers: [_app_error_handler_proxy__WEBPACK_IMPORTED_MODULE_3__["AppErrorHandlerProxy"]]
    })
], AppErrorHandlerModule);



/***/ }),

/***/ "./src/app/core/components/app-navigator/app-navigator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/app-navigator/app-navigator.component.ts ***!
  \**************************************************************************/
/*! exports provided: AppNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavigatorComponent", function() { return AppNavigatorComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_store_player_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/store/player-search */ "./src/app/core/store/player-search/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppNavigatorComponent = class AppNavigatorComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.closed = false;
        this.searchType = _core_store_player_search__WEBPACK_IMPORTED_MODULE_3__["CSearchTypes"].VIDEO;
        this.searchType$ = this.store.select(_core_store_player_search__WEBPACK_IMPORTED_MODULE_3__["getSearchType"]);
        this.routes = [
            { link: 'search', icon: 'music', label: 'Explore' }
            // { link: '/user', icon: 'heart', label: 'My Profile' }
        ];
    }
    ngOnInit() {
    }
    go(link) {
        this.router.navigate([`/${link}/${this.searchType}s`]);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    __metadata("design:type", Object)
], AppNavigatorComponent.prototype, "closed", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    __metadata("design:type", Object)
], AppNavigatorComponent.prototype, "searchType", void 0);
AppNavigatorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navigator',
        styles: [__webpack_require__(/*! ./app-navigator.scss */ "./src/app/core/components/app-navigator/app-navigator.scss")],
        template: `
  <div class="list-group"
    [class.closed]="closed">
    <button class="list-group-item ux-maker"
      *ngFor="let route of routes;"
      (click)="go(route.link)">
      <icon [name]="route.icon"></icon>
      <span class="text">{{ route.label }}</span>
    </button>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
], AppNavigatorComponent);



/***/ }),

/***/ "./src/app/core/components/app-navigator/app-navigator.scss":
/*!******************************************************************!*\
  !*** ./src/app/core/components/app-navigator/app-navigator.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .list-group {\n  margin: 0; }\n\n:host .list-group-item {\n  color: #ecf0f1;\n  border: none;\n  background: transparent; }\n\n:host .list-group-item:hover {\n    background: rgba(10, 10, 10, 0.2);\n    box-shadow: inset 0px 0px 6px rgba(10, 10, 10, 0.5); }\n\n.closed :host .list-group-item {\n    text-align: center; }\n\n:host .list-group-item icon {\n    color: var(--brand-primary);\n    margin-right: 10px; }\n\n.closed :host .list-group-item icon {\n      margin: 0; }\n\n@media (min-width: 768px) {\n  :host .closed {\n    width: 7rem; }\n    :host .closed a {\n      text-indent: 0.6rem; }\n    :host .closed .text {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/core/components/app-navigator/index.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/app-navigator/index.ts ***!
  \********************************************************/
/*! exports provided: AppNavigatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavigatorModule", function() { return AppNavigatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _app_navigator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-navigator.component */ "./src/app/core/components/app-navigator/app-navigator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AppNavigatorModule = class AppNavigatorModule {
};
AppNavigatorModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _shared_index__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ],
        declarations: [
            _app_navigator_component__WEBPACK_IMPORTED_MODULE_3__["AppNavigatorComponent"]
        ],
        exports: [
            _app_navigator_component__WEBPACK_IMPORTED_MODULE_3__["AppNavigatorComponent"]
        ],
        providers: []
    })
], AppNavigatorModule);

// export * from './navigator.component';


/***/ }),

/***/ "./src/app/core/components/app-player/app-player.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/app-player/app-player.component.ts ***!
  \********************************************************************/
/*! exports provided: AppPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPlayerComponent", function() { return AppPlayerComponent; });
/* harmony import */ var _core_effects_now_playlist_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/effects/now-playlist.effects */ "./src/app/core/effects/now-playlist.effects.ts");
/* harmony import */ var _store_app_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/app-player */ "./src/app/core/store/app-player/index.ts");
/* harmony import */ var _store_now_playlist_now_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/now-playlist/now-playlist.selectors */ "./src/app/core/store/now-playlist/now-playlist.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _api_app_player_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @api/app-player.api */ "./src/app/core/api/app-player.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AppPlayerComponent = class AppPlayerComponent {
    constructor(nowPlaylistService, store, nowPlaylistEffects, appPlayerApi) {
        this.nowPlaylistService = nowPlaylistService;
        this.store = store;
        this.nowPlaylistEffects = nowPlaylistEffects;
        this.appPlayerApi = appPlayerApi;
        this.player$ = this.store.select(_store_app_player__WEBPACK_IMPORTED_MODULE_1__["getPlayer"]);
        this.media$ = this.store.select(_store_app_player__WEBPACK_IMPORTED_MODULE_1__["getCurrentMedia"]);
        this.isPlayerPlaying$ = this.store.select(_store_app_player__WEBPACK_IMPORTED_MODULE_1__["getIsPlayerPlaying"]);
        this.isPlayerInRepeat$ = this.store.select(_store_now_playlist_now_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__["isPlayerInRepeat"]);
        this.isPlayerFullscreen$ = this.store.select(_store_app_player__WEBPACK_IMPORTED_MODULE_1__["getPlayerFullscreen"]);
        this.isShowPlayer$ = this.store.select(_store_app_player__WEBPACK_IMPORTED_MODULE_1__["getShowPlayer"]);
        this.style = true;
    }
    ngOnInit() {
        this.appPlayerApi.resetPlayer();
        this.nowPlaylistEffects.loadNextTrack$.subscribe(action => this.playVideo(action.payload));
    }
    ngOnDestroy() { }
    setupPlayer(player) {
        this.appPlayerApi.setupPlayer(player);
    }
    updatePlayerState(event) {
        this.appPlayerApi.changePlayerState(event);
    }
    playVideo(media) {
        this.appPlayerApi.playVideo(media);
    }
    pauseVideo() {
        this.appPlayerApi.pauseVideo();
    }
    togglePlayer() {
        this.appPlayerApi.togglePlayer();
    }
    toggleFullScreen() {
        this.appPlayerApi.toggleFullScreen();
    }
    playNextTrack() {
        this.nowPlaylistService.selectNextIndex();
        this.playVideo(this.nowPlaylistService.getCurrent());
    }
    playPreviousTrack() {
        this.nowPlaylistService.selectPreviousIndex();
        this.playVideo(this.nowPlaylistService.getCurrent());
    }
    toggleRepeat() {
        this.appPlayerApi.toggleRepeat();
    }
    selectTrackInVideo(trackEvent) {
        this.playVideo(trackEvent.media);
        this.nowPlaylistService.seekToTrack(trackEvent);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"])('class.youtube-player'),
    __metadata("design:type", Object)
], AppPlayerComponent.prototype, "style", void 0);
AppPlayerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-player',
        styles: [__webpack_require__(/*! ./app-player.scss */ "./src/app/core/components/app-player/app-player.scss")],
        template: `
  <section
    [class.show-youtube-player]="isShowPlayer$ | async"
    [class.fullscreen]="(isPlayerFullscreen$ | async).on">
    <div class="yt-player ux-maker">
      <player-resizer
        (toggle)="togglePlayer()"
        [fullScreen]="isShowPlayer$ | async"
      ></player-resizer>
      <youtube-player
        (ready)="setupPlayer($event)"
        (change)="updatePlayerState($event)"
      ></youtube-player>
    </div>
    <div class="container">
      <image-blur [media]="media$ | async" *ngIf="!(isPlayerFullscreen$ | async).on"></image-blur>
      <media-info
        [player]="player$ | async"
        [minimized]="media$ | async"
        (thumbClick)="toggleFullScreen()"
        (seekTrack)="selectTrackInVideo($event)"
      ></media-info>
      <player-controls class="controls-container nicer-ux"
        [isRepeat]="isPlayerInRepeat$ | async"
        [playing]="isPlayerPlaying$ | async"
        [media]="media$ | async"
        (pause)="pauseVideo()"
        (next)="playNextTrack()"
        (play)="playVideo($event)"
        (previous)="playPreviousTrack()"
        (repeat)="toggleRepeat()"
      ></player-controls>
    </div>
  </section>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_5__["NowPlaylistService"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
        _core_effects_now_playlist_effects__WEBPACK_IMPORTED_MODULE_0__["NowPlaylistEffects"],
        _api_app_player_api__WEBPACK_IMPORTED_MODULE_6__["AppPlayerApi"]])
], AppPlayerComponent);



/***/ }),

/***/ "./src/app/core/components/app-player/app-player.scss":
/*!************************************************************!*\
  !*** ./src/app/core/components/app-player/app-player.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 1031 !important; }\n  :host .show-youtube-player .yt-player {\n    -webkit-transform: translate3d(-10%, -90%, 0) scale(0.8, 0.8);\n            transform: translate3d(-10%, -90%, 0) scale(0.8, 0.8); }\n  :host .show-youtube-player .social-shares {\n    display: block; }\n  :host .fullscreen .btn.fullscreen {\n    border-bottom: 4px solid #1abc9c; }\n  :host .fullscreen .btn.fullscreen i {\n      -webkit-transform: scale(0.8) rotate(45deg);\n      transform: scale(0.8) rotate(45deg); }\n  :host .fullscreen.show-youtube-player .container {\n    z-index: 1040;\n    position: fixed;\n    -webkit-transform: translateY(-9rem);\n            transform: translateY(-9rem);\n    opacity: 0; }\n  :host .fullscreen.show-youtube-player .container:hover {\n      opacity: 0.8; }\n  :host .fullscreen.show-youtube-player .yt-player {\n    top: 40px; }\n  :host .fullscreen.show-youtube-player .yt-player:hover + .container {\n      -webkit-transform: translateY(-9rem);\n              transform: translateY(-9rem);\n      opacity: 0.3; }\n  :host .container {\n    padding: 0;\n    z-index: 1030;\n    background: var(--player-controls-bar-bg) url(\"/assets/images/developed-with-youtube-sentence-case-light.png\") no-repeat right center;\n    background-size: contain;\n    position: relative;\n    transition: all 0.3s;\n    display: flex;\n    flex-direction: row; }\n  :host .container media-info {\n      width: 41%;\n      z-index: 10; }\n  :host .yt-player {\n    z-index: 1040;\n    position: absolute;\n    left: 0;\n    top: 0;\n    box-shadow: 1px -1px 2px 0px black;\n    background: var(--brand-dark-bg-color-transparent);\n    -webkit-transform: translate3d(-40%, -38%, 0) scale(0.24);\n            transform: translate3d(-40%, -38%, 0) scale(0.24); }\n  :host .show-youtube-player .btn.show-player {\n    -webkit-transform: translatey(0rem);\n            transform: translatey(0rem);\n    border-bottom: 4px solid #1abc9c; }\n  @media (min-width: 320px) {\n  :host {\n    border: 0 !important; }\n    :host .yt-player iframe {\n      display: block;\n      clear: both; }\n    :host .dropdown .dropdown-menu,\n    :host .dropup .dropdown-menu {\n      position: absolute; }\n    :host .nav.navbar-nav {\n      margin: 0; }\n    :host .current-playlist-info {\n      display: none; }\n      :host .current-playlist-info .playlist-provider-item {\n        height: 52px; }\n        :host .current-playlist-info .playlist-provider-item img {\n          width: 60px; }\n    :host .current-track-info-container .btn.dropdown-toggle {\n      padding: 1px;\n      height: 46px;\n      width: 100px; } }\n  @media (min-width: 768px) {\n  :host .fullscreen.show-youtube-player .container {\n    width: 70%;\n    left: 15%;\n    border-radius: 50px;\n    overflow: hidden; }\n  :host .fullscreen.show-youtube-player .yt-player {\n    top: 40px;\n    -webkit-transform: translate3d(0, -100%, 0) scale(1, 1);\n            transform: translate3d(0, -100%, 0) scale(1, 1); }\n    :host .fullscreen.show-youtube-player .yt-player:hover + .container {\n      -webkit-transform: translatey(-9rem);\n      transform: translatey(-9rem); }\n  :host .current-track-info-container .btn.dropdown-toggle {\n    width: 405px; } }\n"

/***/ }),

/***/ "./src/app/core/components/app-player/image-blur/image-blur.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/components/app-player/image-blur/image-blur.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ImageBlurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlurComponent", function() { return ImageBlurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ImageBlurComponent = class ImageBlurComponent {
    get style() {
        const hasMedia = this.media && this.media.snippet;
        return {
            backgroundImage: hasMedia
                ? `url(${this.extractBestImage(hasMedia.thumbnails)})`
                : ''
        };
    }
    extractBestImage(thumbnails) {
        const quality = thumbnails && thumbnails.hasOwnProperty('high') ? 'high' : 'default';
        const hasContent = thumbnails && quality && thumbnails[quality];
        return hasContent ? thumbnails[quality].url : '';
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ImageBlurComponent.prototype, "media", void 0);
ImageBlurComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'image-blur',
        styles: [__webpack_require__(/*! ./image-blur.scss */ "./src/app/core/components/app-player/image-blur/image-blur.scss")],
        template: `
  <div class="media-bg" [ngStyle]="style"></div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    })
], ImageBlurComponent);



/***/ }),

/***/ "./src/app/core/components/app-player/image-blur/image-blur.scss":
/*!***********************************************************************!*\
  !*** ./src/app/core/components/app-player/image-blur/image-blur.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  overflow: hidden;\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n  :host .media-bg {\n    background-size: 40%;\n    background-position: top;\n    -webkit-filter: blur(20px);\n            filter: blur(20px);\n    box-shadow: none;\n    height: 290px;\n    -webkit-transform: rotate(-20deg) translateY(-120px);\n            transform: rotate(-20deg) translateY(-120px); }\n"

/***/ }),

/***/ "./src/app/core/components/app-player/image-blur/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/app-player/image-blur/index.ts ***!
  \****************************************************************/
/*! exports provided: ImageBlurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_blur_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-blur.component */ "./src/app/core/components/app-player/image-blur/image-blur.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageBlurComponent", function() { return _image_blur_component__WEBPACK_IMPORTED_MODULE_0__["ImageBlurComponent"]; });




/***/ }),

/***/ "./src/app/core/components/app-player/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/components/app-player/index.ts ***!
  \*****************************************************/
/*! exports provided: AppPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPlayerModule", function() { return AppPlayerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _app_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-player.component */ "./src/app/core/components/app-player/app-player.component.ts");
/* harmony import */ var _media_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-info */ "./src/app/core/components/app-player/media-info/index.ts");
/* harmony import */ var _player_controls_player_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-controls/player-controls.component */ "./src/app/core/components/app-player/player-controls/player-controls.component.ts");
/* harmony import */ var _player_resizer_player_resizer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-resizer/player-resizer.component */ "./src/app/core/components/app-player/player-resizer/player-resizer.component.ts");
/* harmony import */ var _image_blur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-blur */ "./src/app/core/components/app-player/image-blur/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let AppPlayerModule = class AppPlayerModule {
};
AppPlayerModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _shared_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [
            _app_player_component__WEBPACK_IMPORTED_MODULE_2__["AppPlayerComponent"],
            _media_info__WEBPACK_IMPORTED_MODULE_3__["MediaInfoComponent"],
            _player_controls_player_controls_component__WEBPACK_IMPORTED_MODULE_4__["PlayerControlsComponent"],
            _player_resizer_player_resizer_component__WEBPACK_IMPORTED_MODULE_5__["PlayerResizerComponent"],
            _image_blur__WEBPACK_IMPORTED_MODULE_6__["ImageBlurComponent"]
        ],
        exports: [
            _app_player_component__WEBPACK_IMPORTED_MODULE_2__["AppPlayerComponent"]
        ]
    })
], AppPlayerModule);



/***/ }),

/***/ "./src/app/core/components/app-player/media-info/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/app-player/media-info/index.ts ***!
  \****************************************************************/
/*! exports provided: MediaInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-info.component */ "./src/app/core/components/app-player/media-info/media-info.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaInfoComponent", function() { return _media_info_component__WEBPACK_IMPORTED_MODULE_0__["MediaInfoComponent"]; });




/***/ }),

/***/ "./src/app/core/components/app-player/media-info/media-info.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/components/app-player/media-info/media-info.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MediaInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaInfoComponent", function() { return MediaInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MediaInfoComponent = class MediaInfoComponent {
    constructor(mediaParser) {
        this.mediaParser = mediaParser;
        this.player = {};
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.seekTrack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayInfo = false;
        this.tracks = [];
    }
    ngOnInit() { }
    ngAfterContentInit() {
        if (this.player.media) {
            this.extractTracks(this.player.media);
        }
    }
    extractTracks(media) {
        const tracks = this.mediaParser.extractTracks(media.snippet.description);
        if (Array.isArray(tracks)) {
            this.tracks = tracks;
        }
    }
    keyEvent(event) {
        if (this.player.fullscreen.on) {
            this.handleThumbClick();
        }
    }
    handleThumbClick() {
        this.thumbClick.next();
    }
    toggleInfo() {
        this.displayInfo = !this.displayInfo;
    }
    handleSelectTrack($event, track, media) {
        $event.stopImmediatePropagation();
        const time = this.mediaParser.extractTime(track);
        if (time) {
            this.seekTrack.emit({ time: time[0], media });
        }
    }
    hasTracks() {
        return this.tracks.length > 0;
    }
    get _minimized() {
        return !this.minimized.hasOwnProperty('id');
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], MediaInfoComponent.prototype, "player", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], MediaInfoComponent.prototype, "minimized", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], MediaInfoComponent.prototype, "thumbClick", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], MediaInfoComponent.prototype, "seekTrack", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup.Escape', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], MediaInfoComponent.prototype, "keyEvent", null);
MediaInfoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'media-info',
        styles: [__webpack_require__(/*! ./media-info.scss */ "./src/app/core/components/app-player/media-info/media-info.scss")],
        template: `
  <article class="media-info is-flex-row is-flex-valign">
    <aside class="media-thumb-container"
    title="maximize / minimize"
    (click)="handleThumbClick()">
      <img class="media-thumb" *ngIf="player.media.snippet.thumbnails" [src]="player?.media?.snippet?.thumbnails?.default?.url">
      <icon name="code 2x" *ngIf="!player.media.snippet.thumbnails"></icon>
      <icon name="arrows-alt" [class.invisible]="_minimized" class="minimize-icon"></icon>
    </aside>
    <section class="title ellipsis">{{ player?.media?.snippet?.title }}</section>
    <article class="track-info" [ngClass]="{ 'show-info': displayInfo }">
      <nav class="is-flex-row is-justify-right is-sticky">
        <button (click)="toggleInfo()" class="btn btn-default">
          <icon name="close"></icon>
          Close
        </button>
      </nav>
      {{ player.media.snippet.description }}
      <div class="track-tracks list-group" *ngIf="hasTracks()">
        <h3 class="text-primary">Tracks (Select &amp; Play)</h3>
        <button class="list-group-item btn-transparent"
          *ngFor="let track of tracks | parseTracks"
          (click)="handleSelectTrack($event, track, player.media)">
          {{ track }}
        </button>
      </div>
    </article>
    <button class="btn btn-transparent text-info more-info-btn" (click)="toggleInfo()">
      <icon name="info-circle 2x"></icon>
    </button>
  </article>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["MediaParserService"]])
], MediaInfoComponent);



/***/ }),

/***/ "./src/app/core/components/app-player/media-info/media-info.scss":
/*!***********************************************************************!*\
  !*** ./src/app/core/components/app-player/media-info/media-info.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host {\n    --media-title-text-color: var(--brand-primary);\n    --media-title-shadow: var(--brand-dark-bg-color);\n    --media-expand-icon-bg-color: var(--brand-dark-bg-color-transparent);\n    line-height: 1.5rem;\n    z-index: 100;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n    :host .media-info {\n      color: var(--media-title-text-color);\n      margin: 0;\n      justify-content: space-evenly;\n      height: 100%; }\n      :host .media-info .media-thumb-container {\n        position: relative;\n        cursor: pointer; }\n        :host .media-info .media-thumb-container .media-thumb {\n          height: 6rem; }\n        :host .media-info .media-thumb-container .minimize-icon {\n          position: absolute;\n          right: 0;\n          bottom: 0;\n          background: var(--media-expand-icon-bg-color); }\n      :host .media-info .title {\n        text-shadow: 0px 0px 0.5rem var(--media-title-shadow);\n        font-size: 2rem;\n        line-height: 60px;\n        vertical-align: middle;\n        flex: 2;\n        margin: 0 1rem; }\n      :host .media-info .more-info-btn {\n        max-height: 30px;\n        border: none; }\n        :host .media-info .more-info-btn:hover {\n          box-shadow: none;\n          opacity: .5; }\n      :host .media-info .track-info {\n        position: absolute;\n        bottom: -400px;\n        height: 300px;\n        width: 300px;\n        word-wrap: break-word;\n        transition: bottom 0.3s ease-out;\n        background-color: var(--brand-dark-bg-color-transparent);\n        box-shadow: 1px -1px 2px 0px black;\n        right: 0;\n        white-space: pre-line;\n        overflow: auto;\n        padding: 0 2rem;\n        z-index: 1030;\n        line-height: 1.5;\n        font-size: 1.5rem; }\n        :host .media-info .track-info.show-info {\n          bottom: 65px; }\n      :host .media-info .list-group-item {\n        border: none;\n        color: var(--brand-inverse-text);\n        padding: 0; }\n        :host .media-info .list-group-item:hover {\n          color: var(--brand-primary); } }\n\n@media (min-width: 640px) {\n  :host .media-info .track-info {\n    left: 310px;\n    right: auto; } }\n"

/***/ }),

/***/ "./src/app/core/components/app-player/player-controls/player-controls.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/components/app-player/player-controls/player-controls.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PlayerControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerControlsComponent", function() { return PlayerControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PlayerControlsComponent = class PlayerControlsComponent {
    constructor() {
        this.isRepeat = false;
        this.playing = false;
        this.play = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pause = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.previous = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.repeat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.controls = [
            {
                title: 'previous',
                icon: 'step-backward',
                handler: this.handlePrevious,
                feature: 'previous'
            },
            {
                title: 'pause',
                icon: 'pause',
                handler: this.handlePause,
                feature: 'pause'
            },
            {
                title: 'play',
                icon: 'play',
                handler: this.handlePlay,
                feature: 'play'
            },
            {
                title: 'play next track',
                icon: 'step-forward',
                handler: this.handleNext,
                feature: 'next'
            },
            {
                title: 'repeat playlist',
                icon: 'repeat',
                handler: this.handleRepeat,
                feature: 'repeat'
            }
        ];
    }
    handlePlay() {
        this.play.emit(this.media);
    }
    handlePrevious() {
        this.previous.emit();
    }
    handlePause() {
        this.pause.emit();
    }
    handleNext() {
        this.next.emit();
    }
    handleRepeat() {
        this.repeat.emit();
    }
    handleControl(control) {
        control.handler.call(this);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PlayerControlsComponent.prototype, "media", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.yt-repeat-on'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PlayerControlsComponent.prototype, "isRepeat", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.yt-playing'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PlayerControlsComponent.prototype, "playing", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlayerControlsComponent.prototype, "play", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlayerControlsComponent.prototype, "pause", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlayerControlsComponent.prototype, "previous", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlayerControlsComponent.prototype, "next", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlayerControlsComponent.prototype, "repeat", void 0);
PlayerControlsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'player-controls',
        styles: [__webpack_require__(/*! ./player-controls.scss */ "./src/app/core/components/app-player/player-controls/player-controls.scss")],
        template: `
  <div class="btn-group player-controls is-flex-row">
    <button *ngFor="let control of controls"
      [title]="control.title"
      class="btn btn-default btn-lg"
      [ngClass]="[control.feature]"
      (click)="handleControl(control)">
      <icon [name]="control.icon"></icon>
    </button>
  </div>
  `
    })
], PlayerControlsComponent);



/***/ }),

/***/ "./src/app/core/components/app-player/player-controls/player-controls.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/core/components/app-player/player-controls/player-controls.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --btn-color: var(--brand-inverse-text);\n  --btn-control-primary-color: var(--brand-primary);\n  z-index: 100; }\n  :host .btn.next, :host .btn.previous, :host .btn.repeat {\n    padding: 1.5rem; }\n  :host .btn {\n    border: none;\n    background: transparent;\n    color: var(--btn-color);\n    border-radius: 0;\n    outline: none;\n    font-size: 1.5rem;\n    vertical-align: middle;\n    line-height: 0; }\n  :host .btn:hover {\n      border: none;\n      background: transparent;\n      color: var(--btn-color);\n      border-radius: 0;\n      outline: none;\n      font-size: 1.5rem;\n      opacity: .5; }\n  :host .btn.pause {\n      display: none; }\n  :host .btn.play, :host .btn.pause {\n      border: 0;\n      color: var(--btn-control-primary-color);\n      padding: 0.9rem 1.4rem;\n      margin: 0;\n      font-size: 3rem; }\n  :host .show-player {\n    -webkit-transform: translatey(0);\n            transform: translatey(0); }\n  :host .player-controls {\n    padding: .5rem; }\n  :host .play,\n  :host .pause {\n    mix-blend-mode: screen; }\n  :host.yt-playing .player-controls .play {\n    display: none; }\n  :host.yt-playing .player-controls .pause {\n    display: inline-block; }\n  :host.yt-repeat-on .player-controls .repeat {\n    color: var(--btn-control-primary-color); }\n"

/***/ }),

/***/ "./src/app/core/components/app-player/player-resizer/player-resizer.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/core/components/app-player/player-resizer/player-resizer.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PlayerResizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerResizerComponent", function() { return PlayerResizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PlayerResizerComponent = class PlayerResizerComponent {
    constructor() {
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    togglePlayer() {
        this.toggle.next();
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], PlayerResizerComponent.prototype, "fullScreen", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlayerResizerComponent.prototype, "toggle", void 0);
PlayerResizerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'player-resizer',
        styles: [__webpack_require__(/*! ./player-resizer.scss */ "./src/app/core/components/app-player/player-resizer/player-resizer.scss")],
        template: `
    <button title="minimize / maximize player"
      [class.full-screen]="!fullScreen"
      (click)="togglePlayer()"
      class="btn btn-sm navbar-btn show-player pull-right">
      <icon name="chevron-down" class="icon-minimize"></icon>
      <icon name="expand" class="icon-max"></icon>
    </button>
  `
    }),
    __metadata("design:paramtypes", [])
], PlayerResizerComponent);



/***/ }),

/***/ "./src/app/core/components/app-player/player-resizer/player-resizer.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/components/app-player/player-resizer/player-resizer.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host .btn.show-player {\n    background-color: var(--brand-primary);\n    color: var(--brand-inverse-text); }\n  :host .full-screen.show-player {\n    -webkit-transform: scale(5);\n            transform: scale(5);\n    background-color: transparent;\n    color: var(--brand-primary);\n    border: none;\n    left: 16rem;\n    position: absolute;\n    font-size: 2rem;\n    top: 11rem;\n    padding: 1rem 2rem;\n    margin: 0; }\n  :host .icon-max {\n    display: block; }\n  :host .icon-minimize {\n    display: none; }\n  .show-youtube-player :host {\n    display: block; }\n    .show-youtube-player :host .icon-max {\n      display: none; }\n    .show-youtube-player :host .icon-minimize {\n      display: block; } }\n"

/***/ }),

/***/ "./src/app/core/components/app-sidebar/app-sidebar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/app-sidebar/app-sidebar.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_sidebar_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar.proxy */ "./src/app/core/components/app-sidebar/app-sidebar.proxy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppSidebarComponent = class AppSidebarComponent {
    constructor(appSidebarProxy) {
        this.appSidebarProxy = appSidebarProxy;
        this.sidebarCollapsed$ = this.appSidebarProxy.sidebarCollapsed$;
        this.searchType$ = this.appSidebarProxy.searchType$;
    }
    toggleSidebar() {
        this.appSidebarProxy.toggleSidebar();
    }
};
AppSidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidebar',
        styles: [__webpack_require__(/*! ./app-sidebar.scss */ "./src/app/core/components/app-sidebar/app-sidebar.scss")],
        template: `
  <div id="sidebar" class="sidebar ux-maker"
    [class.closed]="sidebarCollapsed$ | async">
    <div class="sidebar-backdrop" (click)="toggleSidebar()"></div>
    <nav class="navbar navbar-transparent">
      <app-brand></app-brand>
      <app-navigator [closed]="sidebarCollapsed$ | async" [searchType]="searchType$ | async">
      </app-navigator>
    </nav>
    <now-playing></now-playing>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [_app_sidebar_proxy__WEBPACK_IMPORTED_MODULE_1__["AppSidebarProxy"]])
], AppSidebarComponent);



/***/ }),

/***/ "./src/app/core/components/app-sidebar/app-sidebar.proxy.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/app-sidebar/app-sidebar.proxy.ts ***!
  \******************************************************************/
/*! exports provided: AppSidebarProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarProxy", function() { return AppSidebarProxy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _api_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/app.api */ "./src/app/core/api/app.api.ts");
/* harmony import */ var _store_app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/app-core */ "./src/app/core/store/app-core/index.ts");
/* harmony import */ var _store_player_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/player-search */ "./src/app/core/store/player-search/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AppSidebarProxy = class AppSidebarProxy {
    constructor(store, appApi) {
        this.store = store;
        this.appApi = appApi;
        this.sidebarCollapsed$ = this.store.select(_store_app_core__WEBPACK_IMPORTED_MODULE_3__["getSidebarCollapsed"]);
        this.searchType$ = this.store.select(_store_player_search__WEBPACK_IMPORTED_MODULE_4__["getSearchType"]);
    }
    toggleSidebar() {
        this.appApi.toggleSidebar();
    }
};
AppSidebarProxy = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _api_app_api__WEBPACK_IMPORTED_MODULE_2__["AppApi"]])
], AppSidebarProxy);



/***/ }),

/***/ "./src/app/core/components/app-sidebar/app-sidebar.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/app-sidebar/app-sidebar.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host {\n    position: fixed;\n    bottom: 0;\n    top: 0;\n    left: -30rem;\n    margin: 0;\n    padding: 0rem;\n    z-index: 1030;\n    transition: left .3s;\n    transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1); }\n    :host.closed {\n      left: 0; }\n    :host .sidebar {\n      --sidebar-bg-color: var(--sidebar-bg);\n      --sidebar-brand-bg: var(--brand-primary);\n      --sidebar-text-color: var(--sidebar-text);\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: initial;\n      align-self: auto;\n      height: 100%;\n      width: 29.5rem;\n      z-index: 1030;\n      -webkit-transform: translatex(-30rem);\n              transform: translatex(-30rem);\n      background-color: var(--sidebar-bg-color);\n      padding-bottom: 21%;\n      border: none;\n      border-radius: 0; }\n      :host .sidebar .navbar-brand {\n        float: none;\n        width: 100%;\n        line-height: 5rem;\n        padding-left: 1.5rem;\n        color: #323538; }\n      :host .sidebar.closed {\n        -webkit-transform: none;\n                transform: none; }\n        :host .sidebar.closed .sidebar-backdrop {\n          position: fixed;\n          left: 29.5rem;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          display: block;\n          background-color: var(--brand-dark-bg-color-transparent); }\n      :host .sidebar .sidebar-backdrop {\n        display: none; }\n      :host .sidebar .navbar {\n        margin-bottom: 0;\n        border-bottom: none;\n        z-index: 1030;\n        border-radius: 0;\n        border: none; }\n      :host .sidebar .sidebar-backdrop {\n        z-index: 1029; } }\n\n@media (min-width: 768px) {\n  :host {\n    left: 0; }\n    :host .sidebar {\n      transition: width .3s ease-out, -webkit-transform;\n      transition: transform, width .3s ease-out;\n      transition: transform, width .3s ease-out, -webkit-transform;\n      -webkit-transform: none;\n              transform: none; }\n      :host .sidebar.closed > .sidebar-backdrop {\n        display: none; }\n      :host .sidebar + .sidebar-backdrop {\n        display: none; }\n      :host .sidebar.closed {\n        width: 7rem; }\n        :host .sidebar.closed .navbar-brand {\n          /*width: @sidebar-closed-width;*/\n          padding: 0;\n          text-align: center; } }\n\n@media (min-width: 1024px) {\n  .sidebar-left-fixed.closed {\n    -webkit-transform: translatex(0rem);\n    transform: translatex(0rem); }\n    .sidebar-left-fixed.closed .sidebar-backdrop {\n      display: none; }\n  .sidebar .sidebar-backdrop {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/core/components/app-sidebar/index.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/app-sidebar/index.ts ***!
  \******************************************************/
/*! exports provided: AppSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarModule", function() { return AppSidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-sidebar.component */ "./src/app/core/components/app-sidebar/app-sidebar.component.ts");
/* harmony import */ var _app_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-brand */ "./src/app/core/components/app-brand/index.ts");
/* harmony import */ var _app_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-navigator */ "./src/app/core/components/app-navigator/index.ts");
/* harmony import */ var _now_playing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../now-playing */ "./src/app/core/components/now-playing/index.ts");
/* harmony import */ var _app_sidebar_proxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-sidebar.proxy */ "./src/app/core/components/app-sidebar/app-sidebar.proxy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let AppSidebarModule = class AppSidebarModule {
};
AppSidebarModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _shared_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _app_brand__WEBPACK_IMPORTED_MODULE_3__["AppBrandModule"],
            _app_navigator__WEBPACK_IMPORTED_MODULE_4__["AppNavigatorModule"],
            _now_playing__WEBPACK_IMPORTED_MODULE_5__["NowPlayingModule"]
        ],
        exports: [_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["AppSidebarComponent"]],
        declarations: [_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["AppSidebarComponent"]],
        providers: [_app_sidebar_proxy__WEBPACK_IMPORTED_MODULE_6__["AppSidebarProxy"]],
    })
], AppSidebarModule);



/***/ }),

/***/ "./src/app/core/components/index.ts":
/*!******************************************!*\
  !*** ./src/app/core/components/index.ts ***!
  \******************************************/
/*! exports provided: APP_CORE_MODULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CORE_MODULES", function() { return APP_CORE_MODULES; });
/* harmony import */ var _app_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-player */ "./src/app/core/components/app-player/index.ts");
/* harmony import */ var _app_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar */ "./src/app/core/components/app-sidebar/index.ts");
/* harmony import */ var _app_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-error-handler */ "./src/app/core/components/app-error-handler/index.ts");



const APP_CORE_MODULES = [
    _app_player__WEBPACK_IMPORTED_MODULE_0__["AppPlayerModule"],
    _app_sidebar__WEBPACK_IMPORTED_MODULE_1__["AppSidebarModule"],
    _app_error_handler__WEBPACK_IMPORTED_MODULE_2__["AppErrorHandlerModule"]
];


/***/ }),

/***/ "./src/app/core/components/now-playing/index.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/now-playing/index.ts ***!
  \******************************************************/
/*! exports provided: NowPlayingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlayingModule", function() { return NowPlayingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _now_playing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./now-playing.component */ "./src/app/core/components/now-playing/now-playing.component.ts");
/* harmony import */ var _now_playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./now-playlist */ "./src/app/core/components/now-playing/now-playlist/index.ts");
/* harmony import */ var _now_playlist_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./now-playlist-filter */ "./src/app/core/components/now-playing/now-playlist-filter/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let NowPlayingModule = class NowPlayingModule {
};
NowPlayingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _shared_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ],
        declarations: [
            _now_playing_component__WEBPACK_IMPORTED_MODULE_2__["NowPlayingComponent"],
            _now_playlist__WEBPACK_IMPORTED_MODULE_3__["NowPlaylistComponent"],
            _now_playlist__WEBPACK_IMPORTED_MODULE_3__["NowPlaylistTrackComponent"],
            _now_playlist_filter__WEBPACK_IMPORTED_MODULE_4__["NowPlaylistFilterComponent"]
        ],
        exports: [
            _now_playing_component__WEBPACK_IMPORTED_MODULE_2__["NowPlayingComponent"]
        ]
    })
], NowPlayingModule);



/***/ }),

/***/ "./src/app/core/components/now-playing/now-playing.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playing.component.ts ***!
  \**********************************************************************/
/*! exports provided: NowPlayingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlayingComponent", function() { return NowPlayingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _core_services_now_playlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/now-playlist.service */ "./src/app/core/services/now-playlist.service.ts");
/* harmony import */ var _store_app_player_app_player_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/app-player/app-player.actions */ "./src/app/core/store/app-player/app-player.actions.ts");
/* harmony import */ var _now_playlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./now-playlist */ "./src/app/core/components/now-playing/now-playlist/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let NowPlayingComponent = class NowPlayingComponent {
    constructor(store, nowPlaylistService) {
        this.store = store;
        this.nowPlaylistService = nowPlaylistService;
    }
    ngOnInit() {
        this.nowPlaylist$ = this.nowPlaylistService.playlist$;
    }
    selectVideo(media) {
        this.store.dispatch(new _store_app_player_app_player_actions__WEBPACK_IMPORTED_MODULE_3__["PlayVideo"](media));
        this.nowPlaylistService.updateIndexByMedia(media.id);
    }
    sortVideo() { }
    updateFilter(searchFilter) {
        this.nowPlaylistService.updateFilter(searchFilter);
    }
    resetFilter() {
        this.nowPlaylistService.updateFilter('');
    }
    clearPlaylist() {
        this.nowPlaylistService.clearPlaylist();
    }
    removeVideo(media) {
        this.nowPlaylistService.removeVideo(media);
    }
    onHeaderClick() {
        this.nowPlaylistComponent.scrollToActiveTrack();
    }
    selectTrackInVideo(trackEvent) {
        this.store.dispatch(new _store_app_player_app_player_actions__WEBPACK_IMPORTED_MODULE_3__["PlayVideo"](trackEvent.media));
        this.nowPlaylistService.seekToTrack(trackEvent);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_now_playlist__WEBPACK_IMPORTED_MODULE_4__["NowPlaylistComponent"]),
    __metadata("design:type", _now_playlist__WEBPACK_IMPORTED_MODULE_4__["NowPlaylistComponent"])
], NowPlayingComponent.prototype, "nowPlaylistComponent", void 0);
NowPlayingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'now-playing',
        styles: [__webpack_require__(/*! ./now-playing.scss */ "./src/app/core/components/now-playing/now-playing.scss")],
        template: `
  <div class="sidebar-pane">
    <now-playlist-filter
      [playlist]="nowPlaylist$ | async"
      (clear)="clearPlaylist()"
      (filter)="updateFilter($event)"
      (reset)="resetFilter()"
      (headerClick)="onHeaderClick()"
    ></now-playlist-filter>
    <now-playlist
      [playlist]="nowPlaylist$ | async"
      (select)="selectVideo($event)"
      (selectTrack)="selectTrackInVideo($event)"
      (remove)="removeVideo($event)"
    ></now-playlist>
  </div>
  `,
        // (sort)="sortVideo($event)"
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _core_services_now_playlist_service__WEBPACK_IMPORTED_MODULE_2__["NowPlaylistService"]])
], NowPlayingComponent);



/***/ }),

/***/ "./src/app/core/components/now-playing/now-playing.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playing.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-grow: 16;\n  flex-shrink: 0;\n  flex-basis: 0rem;\n  display: flex;\n  flex-direction: column; }\n  :host .sidebar-pane {\n    flex: 1 1 0;\n    display: flex;\n    flex-direction: column;\n    overflow-y: hidden; }\n  :host now-playlist-filter {\n    flex-grow: 0;\n    flex-shrink: 1;\n    flex-basis: 0rem; }\n  :host now-playlist {\n    flex: 1 1 0;\n    overflow-y: auto;\n    padding-bottom: 31rem; }\n"

/***/ }),

/***/ "./src/app/core/components/now-playing/now-playlist-filter/index.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playlist-filter/index.ts ***!
  \**************************************************************************/
/*! exports provided: NowPlaylistFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _now_playlist_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now-playlist-filter.component */ "./src/app/core/components/now-playing/now-playlist-filter/now-playlist-filter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NowPlaylistFilterComponent", function() { return _now_playlist_filter_component__WEBPACK_IMPORTED_MODULE_0__["NowPlaylistFilterComponent"]; });




/***/ }),

/***/ "./src/app/core/components/now-playing/now-playlist-filter/now-playlist-filter.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playlist-filter/now-playlist-filter.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NowPlaylistFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlaylistFilterComponent", function() { return NowPlaylistFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_now_playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/now-playlist */ "./src/app/core/store/now-playlist/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NowPlaylistFilterComponent = class NowPlaylistFilterComponent {
    constructor() {
        // @Output() save = new EventEmitter();
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.headerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleFilterChange(searchFilter) {
        this.filter.next(searchFilter);
    }
    resetSearchFilter() {
        this.reset.next('');
    }
    isFilterEmpty() {
        return this.playlist.filter === '';
    }
    clearPlaylist() {
        this.clear.next('');
    }
    isPlaylistEmpty() {
        return this.playlistLength === 0;
    }
    onNowPlayingClick() {
        this.headerClick.next();
    }
    get playlistLength() {
        return this.playlist.videos.length;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], NowPlaylistFilterComponent.prototype, "playlist", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistFilterComponent.prototype, "clear", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistFilterComponent.prototype, "filter", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistFilterComponent.prototype, "reset", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistFilterComponent.prototype, "headerClick", void 0);
NowPlaylistFilterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'now-playlist-filter',
        styles: [__webpack_require__(/*! ./now-playlist-filter.scss */ "./src/app/core/components/now-playing/now-playlist-filter/now-playlist-filter.scss")],
        template: `
  <section class="nav-header user-playlists-filter">
  <span class="playlist-header" (click)="onNowPlayingClick()">
      <icon name="play-circle-o" class="text-primary"></icon>
      <span class="text btn-transparent playlist-count"
        tooltip="Reveal now playing track">
        Now Playing <span *ngIf="!isPlaylistEmpty()">({{ playlistLength }})</span>
      </span>
    </span>
    <button class="btn btn-link btn-xs btn-clear"
      tooltip="Clear All Tracks In Now Playlist"
      [disabled]="isPlaylistEmpty()"
      (click)="clearPlaylist()">
      <icon name="trash"></icon>
    </button>
    <button class="btn btn-link btn-xs btn-save" title="Save All These Tracks To A New Playlist"
      disabled
      ng-disabled="!nowPlaylistFilter.playlist.length"
      ng-click="nowPlaylistFilter.togglePlaylistSaver()">
      <icon name="cloud-upload-alt"></icon>
    </button>
    <div class="playlist-filter">
      <icon name="search" *ngIf="isFilterEmpty()"></icon>
      <icon name="times" class="text-danger"
        *ngIf="!isFilterEmpty()"
        (click)="resetSearchFilter()"
      ></icon>
      <input type="search" name="playlist-search"
        [value]="playlist.filter"
        #searchFilter
        (input)="handleFilterChange(searchFilter.value)">
    </div>
  </section>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [])
], NowPlaylistFilterComponent);



/***/ }),

/***/ "./src/app/core/components/now-playing/now-playlist-filter/now-playlist-filter.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playlist-filter/now-playlist-filter.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host .user-playlists-filter {\n    --filter-bg: var(--sidebar-bg);\n    --filter-darker-bg: var(--sidebar-bg-secondary);\n    position: relative;\n    background-color: var(--filter-bg);\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1.5rem;\n    font-size: 10px; }\n    :host .user-playlists-filter .playlist-count,\n    :host .user-playlists-filter .playlist-filter {\n      color: var(--sidebar-text-color); }\n    :host .user-playlists-filter.nav-header {\n      box-shadow: -1rem -0.2rem 2rem #000 !important;\n      line-height: 26px;\n      color: var(--sidebar-text-color);\n      text-transform: uppercase;\n      font-size: 1.3rem; }\n    :host .user-playlists-filter .btn-clear {\n      color: #e74c3c; }\n      :host .user-playlists-filter .btn-clear:disabled {\n        color: grey; }\n    :host .user-playlists-filter .playlist-header {\n      cursor: pointer; }\n    :host .user-playlists-filter .playlist-filter {\n      position: absolute;\n      right: 0;\n      top: 0.6rem;\n      background: var(--filter-darker-bg);\n      padding-left: 5px; }\n      :host .user-playlists-filter .playlist-filter input {\n        background: transparent;\n        border: none;\n        padding: 0 3px;\n        margin-bottom: 0;\n        color: var(--brand-inverse-text); } }\n\n@media (min-width: 768px) {\n  :host .text.btn-transparent {\n    cursor: pointer; }\n  .closed :host .user-playlists-filter .playlist-filter {\n    -webkit-transform: translateX(-100rem);\n            transform: translateX(-100rem); }\n  .closed :host .text,\n  .closed :host .btn-save,\n  .closed :host .playlist-count,\n  .closed :host .btn-clear {\n    display: none; }\n  .closed :host .playlist-header {\n    font-size: 2rem; }\n  .closed :host .nav-header.user-playlists-filter {\n    padding: 0 1rem;\n    text-align: center; } }\n"

/***/ }),

/***/ "./src/app/core/components/now-playing/now-playlist/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playlist/index.ts ***!
  \*******************************************************************/
/*! exports provided: NowPlaylistComponent, NowPlaylistTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _now_playlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now-playlist.component */ "./src/app/core/components/now-playing/now-playlist/now-playlist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NowPlaylistComponent", function() { return _now_playlist_component__WEBPACK_IMPORTED_MODULE_0__["NowPlaylistComponent"]; });

/* harmony import */ var _now_playlist_track_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now-playlist-track.component */ "./src/app/core/components/now-playing/now-playlist/now-playlist-track.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NowPlaylistTrackComponent", function() { return _now_playlist_track_component__WEBPACK_IMPORTED_MODULE_1__["NowPlaylistTrackComponent"]; });





/***/ }),

/***/ "./src/app/core/components/now-playing/now-playlist/now-playlist-track.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playlist/now-playlist-track.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NowPlaylistTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlaylistTrackComponent", function() { return NowPlaylistTrackComponent; });
/* harmony import */ var _core_services_media_parser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/media-parser.service */ "./src/app/core/services/media-parser.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/fade-in.animation */ "./src/app/shared/animations/fade-in.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let NowPlaylistTrackComponent = class NowPlaylistTrackComponent {
    constructor(mediaParser) {
        this.mediaParser = mediaParser;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectTrack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayTracks = false;
        this.displayInfo = false;
        this.tracks = [];
        this.hasTracks = false;
        this.parsedTracks = false;
    }
    ngAfterContentInit() {
        this.extractTracks(this.video);
    }
    extractTracks(media) {
        if (!this.parsedTracks) {
            const tracks = this.mediaParser.extractTracks(media.snippet.description);
            if (Array.isArray(tracks)) {
                this.parsedTracks = true;
                this.tracks = tracks;
                this.hasTracks = true;
            }
        }
    }
    isPlaylistMedia(media) {
        return this.hasTracks;
    }
    toggleTracks(media) {
        this.displayTracks = !this.displayTracks;
        return this.displayTracks;
    }
    handleToggleTracks(event, media) {
        event.stopImmediatePropagation();
        this.toggleTracks(media);
    }
    handleSelectTrack($event, track, media) {
        $event.stopImmediatePropagation();
        const time = this.mediaParser.extractTime(track);
        if (time) {
            this.selectTrack.emit({ time: time[0], media });
        }
    }
    markSelected(video) {
        this.select.emit(video);
    }
    toggleInfo() {
        this.displayInfo = !this.displayInfo;
        return this.displayInfo;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    __metadata("design:type", Object)
], NowPlaylistTrackComponent.prototype, "video", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    __metadata("design:type", Number)
], NowPlaylistTrackComponent.prototype, "index", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistTrackComponent.prototype, "remove", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistTrackComponent.prototype, "select", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistTrackComponent.prototype, "selectTrack", void 0);
NowPlaylistTrackComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'now-playlist-track',
        styles: [__webpack_require__(/*! ./now-playlist-track.scss */ "./src/app/core/components/now-playing/now-playlist/now-playlist-track.scss")],
        template: `
  <div class="now-playlist-track__trigger">
    <div class="track-contents">
      <section class="video-thumb playlist-track__thumb"
        (click)="markSelected(video)">
        <span class="track-number">{{ index + 1 }}</span>
        <img draggable="false" class="video-thumb__image"
        src="{{ video | videoToThumb }}"
        xtitle="Drag to sort">
        <span class="badge badge-info">
          {{ video.contentDetails.duration | toFriendlyDuration }}
        </span>
      </section>

      <section class="video-title" (click)="markSelected(video)" [tooltip]="video.snippet.title">{{ video.snippet.title }}</section>
      </div>
    <aside class="playlist-track__content">
      <section class="track-actions">
        <button class="btn btn-transparent text-primary playlist-track"
          *ngIf="isPlaylistMedia(video)"
          (click)="handleToggleTracks($event, video)"
          tooltip="Album Track - click to select cued tracks">
          <icon name="list-ul"></icon>
        </button>
        <button class="btn btn-transparent text-info playlist-track"
          (click)="toggleInfo()"
          tooltip="More information for this media">
          <icon name="info-circle"></icon>
        </button>
      </section>
      <button class="btn btn-transparent text-danger ux-maker remove-track" tooltip="Remove From Playlist"
        (click)="remove.emit(video)">
        <icon name="trash"></icon>
      </button>
    </aside>
    <article [@flyInOut] *ngIf="displayTracks" class="track-tracks list-group">
      <aside class="album-tracks-heading">Tracks</aside>
      <button type="button" class="list-group-item btn-transparent"
        *ngFor="let track of tracks | parseTracks"
        (click)="handleSelectTrack($event, track, video)">
        {{ track }}
      </button>
    </article>
    <article [@flyOut] *ngIf="displayInfo" class="track-info">
      {{ video.snippet.description }}
    </article>
  </div>
  `,
        animations: [_shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__["flyOut"], _shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__["flyInOut"]],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [_core_services_media_parser_service__WEBPACK_IMPORTED_MODULE_0__["MediaParserService"]])
], NowPlaylistTrackComponent);



/***/ }),

/***/ "./src/app/core/components/now-playing/now-playlist/now-playlist-track.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playlist/now-playlist-track.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host {\n    --track-badge-color: var(--brand-dark-bg-color);\n    --text-color: var(--brand-inverse-text);\n    --track-active-border-color: var(--brand-primary);\n    --track-bg-active-color: var(--brand-dark-bg-color-transparent); }\n    :host .now-playlist-track__trigger {\n      text-shadow: none;\n      padding: 1.5rem;\n      border-radius: 7px;\n      background-color: var(--sidebar-bg-secondary);\n      margin: 1rem;\n      position: relative; }\n      :host .now-playlist-track__trigger .track-contents {\n        display: flex;\n        flex-direction: row;\n        height: 65px; }\n      .active :host .now-playlist-track__trigger {\n        color: var(--text-color);\n        border-right: 6px solid var(--track-active-border-color);\n        background: var(--track-bg-active-color);\n        margin: 0;\n        border-radius: 0; }\n    :host .track-number {\n      position: absolute;\n      left: 1.5rem;\n      padding: 0.5rem;\n      background-color: rgba(0, 0, 0, 0.9);\n      font-size: 1rem;\n      font-weight: bold;\n      color: var(--sidebar-text-lighter); }\n    :host .track-actions {\n      position: absolute;\n      top: 7rem;\n      right: 0; }\n    :host .track-info {\n      max-height: 400px;\n      overflow: auto;\n      color: var(--sidebar-text-lighter);\n      margin-top: 2rem; }\n    :host .playlist-track {\n      font-size: 2rem;\n      display: inline-block; }\n    :host .video-title {\n      overflow: hidden;\n      max-height: 6rem;\n      min-height: 6.5rem;\n      min-width: 195px;\n      transition: -webkit-transform 300ms ease-out 200ms;\n      transition: transform 300ms ease-out 200ms;\n      transition: transform 300ms ease-out 200ms, -webkit-transform 300ms ease-out 200ms;\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      width: 100%;\n      padding: 0 1rem;\n      color: var(--sidebar-text-lighter); }\n    :host .video-thumb {\n      height: 4.8rem;\n      width: 6.4rem; }\n      :host .video-thumb .video-thumb__image {\n        height: 100%; }\n    :host .remove-track {\n      position: absolute;\n      top: 1rem;\n      right: 0rem;\n      z-index: 15;\n      font-size: 2rem;\n      -webkit-transform: translatex(-1rem);\n              transform: translatex(-1rem); }\n    :host .badge-info {\n      border-radius: 0;\n      background: var(--track-badge-color);\n      margin: 0 auto;\n      display: block;\n      font-size: 1rem;\n      margin-top: 0;\n      z-index: 10;\n      position: relative; }\n    :host .track-tracks {\n      margin: 1.5rem -1.5rem 0;\n      border-top: 1px solid var(--track-active-border-color); }\n      :host .track-tracks .album-tracks-heading {\n        margin: 0 2rem;\n        color: var(--track-active-border-color);\n        font-size: 1.5rem; }\n      :host .track-tracks .list-group-item {\n        border: none;\n        color: var(--text-color); }\n        :host .track-tracks .list-group-item:hover {\n          color: var(--track-active-border-color); } }\n\n@media (min-width: 768px) {\n  :host .remove-track {\n    -webkit-transform: translatex(5rem);\n            transform: translatex(5rem); }\n  :host:hover .remove-track {\n    -webkit-transform: translatex(0rem);\n            transform: translatex(0rem); }\n  .closed :host .track-actions {\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  .closed :host .track-info {\n    display: none; }\n  :host .track-tracks .btn {\n    font-size: 1.5rem; } }\n"

/***/ }),

/***/ "./src/app/core/components/now-playing/now-playlist/now-playlist.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playlist/now-playlist.component.ts ***!
  \************************************************************************************/
/*! exports provided: NowPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlaylistComponent", function() { return NowPlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_now_playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/now-playlist */ "./src/app/core/store/now-playlist/index.ts");
/* harmony import */ var _shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/fade-in.animation */ "./src/app/shared/animations/fade-in.animation.ts");
/* harmony import */ var _shared_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utils/data.utils */ "./src/app/shared/utils/data.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let NowPlaylistComponent = class NowPlaylistComponent {
    constructor(zone) {
        this.zone = zone;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectTrack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // @Output() sort = new EventEmitter<GoogleApiYouTubeSearchResource>();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hasActiveChanged = false;
    }
    ngAfterViewChecked() {
        if (this.hasActiveChanged && this.activeTrackElement) {
            this.zone.runOutsideAngular(() => this.scrollToActiveTrack());
        }
    }
    ngOnChanges({ activeId }) {
        if (activeId) {
            this.hasActiveChanged = Object(_shared_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["isNewChange"])(activeId);
        }
    }
    scrollToActiveTrack() {
        if (this.activeTrackElement) {
            this.activeTrackElement.scrollIntoView();
        }
    }
    selectVideo(media) {
        this.select.emit(media);
    }
    removeVideo(media) {
        this.remove.emit(media);
    }
    sortVideo(media) {
        // this.sort.next(media);
    }
    isActiveMedia(mediaId, trackElement) {
        const isActive = this.playlist.selectedId === mediaId;
        if (isActive) {
            this.activeTrackElement = trackElement;
        }
        return isActive;
    }
    selectTrackInVideo(trackEvent) {
        this.selectTrack.emit(trackEvent);
    }
    get isPlaylistEmpty() {
        return this.playlist.videos.length === 0;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], NowPlaylistComponent.prototype, "playlist", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistComponent.prototype, "select", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistComponent.prototype, "selectTrack", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], NowPlaylistComponent.prototype, "remove", void 0);
NowPlaylistComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'now-playlist',
        animations: [_shared_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__["flyOut"]],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./now-playlist.scss */ "./src/app/core/components/now-playing/now-playlist/now-playlist.scss")],
        template: `
  <section class="now-playlist ux-maker">
    <div *ngIf="isPlaylistEmpty" class="empty-list text-center" [@flyOut]>
      <icon name="music 4x" class="bg-primary"></icon>
      <article>
        <h3 class="text-primary">Playlist Is Empty</h3>
        <p class="text-primary">Queue Media From Results</p>
      </article>
    </div>
    <ul class="nav nav-list ux-maker nicer-ux">
      <li class="now-playlist-track" #playlistTrack
        [ngClass]="{
          'active': isActiveMedia(video.id, playlistTrack)
        }"
        *ngFor="let video of playlist.videos | search:playlist.filter; let index = index"
        [@flyOut]>
        <now-playlist-track
          [video]="video" [index]="index"
          (remove)="removeVideo($event)"
          (select)="selectVideo(video)"
          (selectTrack)="selectTrackInVideo($event)"
        ></now-playlist-track>
      </li>
    </ul>
  </section>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
], NowPlaylistComponent);



/***/ }),

/***/ "./src/app/core/components/now-playing/now-playlist/now-playlist.scss":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/now-playing/now-playlist/now-playlist.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  --track-active-border-color: var(--brand-primary);\n  --track-bg-active-color: var(--brand-dark-bg-color-transparent);\n  .now-playlist {\n    position: relative; }\n    .now-playlist .nav-list {\n      overflow: hidden; }\n      .now-playlist .nav-list > :not(.active) a:hover {\n        background: rgba(10, 10, 10, 0.2); }\n    .now-playlist .empty-list {\n      padding: 1.5rem;\n      opacity: .5; }\n      .now-playlist .empty-list icon {\n        border-radius: 50%;\n        padding: 5rem;\n        margin: 2rem 0; }\n    .now-playlist .now-playlist-track {\n      cursor: pointer;\n      opacity: 1; }\n      .now-playlist .now-playlist-track a .playlist-track__content {\n        height: 6rem; }\n  .ng-enter + .now-playlist.slide-down {\n    -webkit-transform: translatey(10px);\n            transform: translatey(10px); } }\n\n@media (min-width: 768px) {\n  .now-playlist .now-playlist-track a .playlist-track__content {\n    overflow: hidden; }\n  .closed now-playlist .now-playlist-track a,\n  .closed now-playlist .now-playlist-track a.active {\n    padding: 0;\n    min-height: 6rem;\n    margin: 0.7rem 0; }\n  .closed now-playlist .now-playlist-track .now-playlist-track__trigger {\n    padding: 0;\n    margin: 1rem 0; }\n  .closed now-playlist .now-playlist-track .playlist-track__content,\n  .closed now-playlist .now-playlist-track .video-title {\n    min-height: 0;\n    max-height: 0;\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px);\n    position: absolute;\n    top: 0;\n    right: 0; }\n  .closed now-playlist .now-playlist-track .track-number {\n    left: 0; }\n  .closed now-playlist .now-playlist-track .video-thumb {\n    height: 5rem;\n    width: 7rem; }\n  .closed now-playlist .now-playlist-track .track-tracks {\n    display: none; }\n  .closed now-playlist .now-playlist-track .playlist-track {\n    -webkit-transform: translateX(5rem);\n            transform: translateX(5rem); } }\n"

/***/ }),

/***/ "./src/app/core/effects/analytics.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/core/effects/analytics.effects.ts ***!
  \***************************************************/
/*! exports provided: AnalyticsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsEffects", function() { return AnalyticsEffects; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_user_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/user-profile */ "./src/app/core/store/user-profile/index.ts");
/* harmony import */ var _store_player_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/player-search */ "./src/app/core/store/player-search/index.ts");
/* harmony import */ var _store_app_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/app-player */ "./src/app/core/store/app-player/index.ts");
/* harmony import */ var _core_services_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/analytics.service */ "./src/app/core/services/analytics.service.ts");
/* harmony import */ var _utils_data_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/data.utils */ "./src/app/shared/utils/data.utils.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let AnalyticsEffects = class AnalyticsEffects {
    constructor(actions$, store, userProfileActions, analytics) {
        this.actions$ = actions$;
        this.store = store;
        this.userProfileActions = userProfileActions;
        this.analytics = analytics;
        this.trackToken$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_3__["UserProfileActions"].USER_PROFILE_RECIEVED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => this.analytics.trackSignin()));
        this.trackSearch$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_4__["PlayerSearchActions"].SEARCH_NEW_QUERY, _store_player_search__WEBPACK_IMPORTED_MODULE_4__["PlayerSearchActions"].SEARCH_MORE_FOR_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["withLatestFrom"])(this.store.select(_store_player_search__WEBPACK_IMPORTED_MODULE_4__["getSearchType"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((states) => this.analytics.trackSearch(states[1].presets)));
        this.trackPlay$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_app_player__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].PLAY_STARTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => this.analytics.trackVideoPlay()));
    }
};
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AnalyticsEffects.prototype, "trackToken$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AnalyticsEffects.prototype, "trackSearch$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AnalyticsEffects.prototype, "trackPlay$", void 0);
AnalyticsEffects = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"],
        _store_user_profile__WEBPACK_IMPORTED_MODULE_3__["UserProfileActions"],
        _core_services_analytics_service__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"]])
], AnalyticsEffects);



/***/ }),

/***/ "./src/app/core/effects/app-core.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/core/effects/app-core.effects.ts ***!
  \**************************************************/
/*! exports provided: AppCoreEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCoreEffects", function() { return AppCoreEffects; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/app-core */ "./src/app/core/store/app-core/index.ts");
/* harmony import */ var _core_services_version_checker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/version-checker.service */ "./src/app/core/services/version-checker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AppCoreEffects = class AppCoreEffects {
    constructor(actions$, store, versionCheckerService) {
        this.actions$ = actions$;
        this.store = store;
        this.versionCheckerService = versionCheckerService;
        this.updateAppVersion$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_app_core__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].APP_UPDATE_VERSION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.versionCheckerService.updateVersion()));
        this.checkForNewAppVersion$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_app_core__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].APP_CHECK_VERSION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.versionCheckerService.checkForVersion()));
    }
};
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AppCoreEffects.prototype, "updateAppVersion$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AppCoreEffects.prototype, "checkForNewAppVersion$", void 0);
AppCoreEffects = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"],
        _core_services_version_checker_service__WEBPACK_IMPORTED_MODULE_5__["VersionCheckerService"]])
], AppCoreEffects);



/***/ }),

/***/ "./src/app/core/effects/app-player.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/core/effects/app-player.effects.ts ***!
  \****************************************************/
/*! exports provided: AppPlayerEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPlayerEffects", function() { return AppPlayerEffects; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _utils_data_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/data.utils */ "./src/app/shared/utils/data.utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_app_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/app-player */ "./src/app/core/store/app-player/index.ts");
/* harmony import */ var _core_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/youtube-player.service */ "./src/app/core/services/youtube-player.service.ts");
/* harmony import */ var _core_services_youtube_videos_info_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/youtube-videos-info.service */ "./src/app/core/services/youtube-videos-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let AppPlayerEffects = class AppPlayerEffects {
    constructor(actions$, store, youtubePlayerService, youtubeVideosInfo) {
        this.actions$ = actions$;
        this.store = store;
        this.youtubePlayerService = youtubePlayerService;
        this.youtubeVideosInfo = youtubeVideosInfo;
        this.init$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_app_player__WEBPACK_IMPORTED_MODULE_6__["ResetFullScreen"]()));
        this.playVideo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_app_player__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].PLAY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(media => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.youtubePlayerService.playVideo(media)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((video) => new _store_app_player__WEBPACK_IMPORTED_MODULE_6__["PlayStarted"](video)))));
        this.pauseVideo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_app_player__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].PAUSE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.youtubePlayerService.pause()));
        this.loadAndPlay$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_app_player__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].LOAD_AND_PLAY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((media) => this.youtubeVideosInfo
            .fetchVideoData(media.id || media.id.videoId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((video) => new _store_app_player__WEBPACK_IMPORTED_MODULE_6__["PlayVideo"](video)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ type: 'LOAD_AND_PLAY_ERROR' })));
        this.toggleFullscreen$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_app_player__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].FULLSCREEN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select(_store_app_player__WEBPACK_IMPORTED_MODULE_6__["getPlayerFullscreen"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((states) => this.youtubePlayerService.setSize(states[1].height, states[1].width)));
        this.setupPlayer$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_app_player__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].SETUP_PLAYER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(player => this.youtubePlayerService.setupPlayer(player)));
        this.playerStateChange$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_store_app_player__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].PLAYER_STATE_CHANGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => new _store_app_player__WEBPACK_IMPORTED_MODULE_6__["UpdateState"](data)));
    }
};
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    __metadata("design:type", Object)
], AppPlayerEffects.prototype, "init$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    __metadata("design:type", Object)
], AppPlayerEffects.prototype, "playVideo$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AppPlayerEffects.prototype, "pauseVideo$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    __metadata("design:type", Object)
], AppPlayerEffects.prototype, "loadAndPlay$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AppPlayerEffects.prototype, "toggleFullscreen$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AppPlayerEffects.prototype, "setupPlayer$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    __metadata("design:type", Object)
], AppPlayerEffects.prototype, "playerStateChange$", void 0);
AppPlayerEffects = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"],
        _core_services_youtube_player_service__WEBPACK_IMPORTED_MODULE_7__["YoutubePlayerService"],
        _core_services_youtube_videos_info_service__WEBPACK_IMPORTED_MODULE_8__["YoutubeVideosInfo"]])
], AppPlayerEffects);



/***/ }),

/***/ "./src/app/core/effects/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/effects/index.ts ***!
  \***************************************/
/*! exports provided: AppEffectsModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffectsModules", function() { return AppEffectsModules; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _app_player_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-player.effects */ "./src/app/core/effects/app-player.effects.ts");
/* harmony import */ var _analytics_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.effects */ "./src/app/core/effects/analytics.effects.ts");
/* harmony import */ var _now_playlist_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./now-playlist.effects */ "./src/app/core/effects/now-playlist.effects.ts");
/* harmony import */ var _user_profile_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.effects */ "./src/app/core/effects/user-profile.effects.ts");
/* harmony import */ var _player_search_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-search.effects */ "./src/app/core/effects/player-search.effects.ts");
/* harmony import */ var _app_core_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-core.effects */ "./src/app/core/effects/app-core.effects.ts");
/* harmony import */ var _router_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router.effects */ "./src/app/core/effects/router.effects.ts");








const AppEffectsModules = _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["EffectsModule"].forRoot([
    _app_player_effects__WEBPACK_IMPORTED_MODULE_1__["AppPlayerEffects"],
    _now_playlist_effects__WEBPACK_IMPORTED_MODULE_3__["NowPlaylistEffects"],
    _user_profile_effects__WEBPACK_IMPORTED_MODULE_4__["UserProfileEffects"],
    _player_search_effects__WEBPACK_IMPORTED_MODULE_5__["PlayerSearchEffects"],
    _app_core_effects__WEBPACK_IMPORTED_MODULE_6__["AppCoreEffects"],
    _router_effects__WEBPACK_IMPORTED_MODULE_7__["RouterEffects"],
    _analytics_effects__WEBPACK_IMPORTED_MODULE_2__["AnalyticsEffects"]
]);


/***/ }),

/***/ "./src/app/core/effects/now-playlist.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/core/effects/now-playlist.effects.ts ***!
  \******************************************************/
/*! exports provided: NowPlaylistEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlaylistEffects", function() { return NowPlaylistEffects; });
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/now-playlist */ "./src/app/core/store/now-playlist/index.ts");
/* harmony import */ var _core_services_user_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/user-profile.service */ "./src/app/core/services/user-profile.service.ts");
/* harmony import */ var _utils_data_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/data.utils */ "./src/app/shared/utils/data.utils.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let NowPlaylistEffects = class NowPlaylistEffects {
    constructor(actions$, store, mediaParser, playerService, userProfile) {
        this.actions$ = actions$;
        this.store = store;
        this.mediaParser = mediaParser;
        this.playerService = playerService;
        this.userProfile = userProfile;
        this.queueVideo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].SELECT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_6__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((media) => new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["QueueVideo"](media)));
        this.playerStateChange$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].PLAYER_STATE_CHANGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_6__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((data) => data === YT.PlayerState.ENDED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(() => new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["MediaEnded"]()));
        /* if it's the last track
         * AND repeat is on
         * THEN play the first track
        **/
        this.loadNextTrack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].MEDIA_ENDED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_6__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.store.select(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["getSelectedMedia"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((states) => states[1] && states[1].hasOwnProperty('id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((states) => new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["SelectVideo"](states[1])));
        this.selectBeforeSeekToTime$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].SELECT_AND_SEEK_TO_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_6__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(trackEvent => new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["UpdateIndexByMedia"](trackEvent.media.id)));
        this.seekToTime$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].SELECT_AND_SEEK_TO_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_6__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(trackEvent => this.playerService.seekTo(this.mediaParser.toNumber(trackEvent.time))));
        this.loadPlaylist$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].LOAD_PLAYLIST_START), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_6__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((id) => this.userProfile.fetchAllPlaylistItems(id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((playlistItems) => new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["LoadPlaylistEndAction"](playlistItems)));
        this.addPlaylistItems$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].LOAD_PLAYLIST_END), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_6__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((playlistItems) => new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["QueueVideos"](playlistItems)));
        this.playPlaylistFirstTrack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].LOAD_PLAYLIST_END), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_6__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((playlistItems) => new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["SelectVideo"](playlistItems[0])));
        this.playPlaylist$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].PLAY_PLAYLIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_6__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((id) => new _store_now_playlist__WEBPACK_IMPORTED_MODULE_4__["LoadPlaylistAction"](id)));
    }
};
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], NowPlaylistEffects.prototype, "queueVideo$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], NowPlaylistEffects.prototype, "playerStateChange$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], NowPlaylistEffects.prototype, "loadNextTrack$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], NowPlaylistEffects.prototype, "selectBeforeSeekToTime$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], NowPlaylistEffects.prototype, "seekToTime$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], NowPlaylistEffects.prototype, "loadPlaylist$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], NowPlaylistEffects.prototype, "addPlaylistItems$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], NowPlaylistEffects.prototype, "playPlaylistFirstTrack$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], NowPlaylistEffects.prototype, "playPlaylist$", void 0);
NowPlaylistEffects = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
        _core_services__WEBPACK_IMPORTED_MODULE_0__["MediaParserService"],
        _core_services__WEBPACK_IMPORTED_MODULE_0__["YoutubePlayerService"],
        _core_services_user_profile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfile"]])
], NowPlaylistEffects);



/***/ }),

/***/ "./src/app/core/effects/player-search.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/effects/player-search.effects.ts ***!
  \*******************************************************/
/*! exports provided: PlayerSearchEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchEffects", function() { return PlayerSearchEffects; });
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_player_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/player-search */ "./src/app/core/store/player-search/index.ts");
/* harmony import */ var _utils_data_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/data.utils */ "./src/app/shared/utils/data.utils.ts");
/* harmony import */ var _core_services_youtube_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/youtube.search */ "./src/app/core/services/youtube.search.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let PlayerSearchEffects = class PlayerSearchEffects {
    constructor(actions$, store, playerSearchActions, youtubeSearch, youtubeVideosInfo) {
        this.actions$ = actions$;
        this.store = store;
        this.playerSearchActions = playerSearchActions;
        this.youtubeSearch = youtubeSearch;
        this.youtubeVideosInfo = youtubeVideosInfo;
        this.searchQuery$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].SEARCH_NEW_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((latest) => latest[1]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((store) => this.youtubeSearch
            .resetPageToken()
            .searchFor(store.search.searchType, store.search.query, store.search.queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(youtubeResponse => this.playerSearchActions.searchResultsReturned(youtubeResponse)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.playerSearchActions.errorInSearch(err))))));
        this.resetVideos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].SEARCH_NEW_QUERY, _store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].PLAYLISTS_SEARCH_START.action), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.playerSearchActions.resetResults()));
        this.searchResultsReturned$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].SEARCH_RESULTS_RETURNED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.select(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["getSearchType"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((states) => {
            if (states[1] === _store_player_search__WEBPACK_IMPORTED_MODULE_6__["CSearchTypes"].VIDEO) {
                return _store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].ADD_METADATA_TO_VIDEOS.creator(states[0]);
            }
            return _store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].ADD_PLAYLISTS_TO_RESULTS.creator(states[0]);
        }));
        this.addPlaylistsToResults$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].ADD_PLAYLISTS_TO_RESULTS.action), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => _store_player_search__WEBPACK_IMPORTED_MODULE_6__["AddResultsAction"].creator(result.items)));
        this.addMetadataToVideos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].ADD_METADATA_TO_VIDEOS.action), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((medias) => medias.items.map(media => media.id.videoId).join(',')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((mediaIds) => this.youtubeVideosInfo
            .fetchVideosData(mediaIds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((videos) => _store_player_search__WEBPACK_IMPORTED_MODULE_6__["AddResultsAction"].creator(videos)))));
        this.searchMoreForQuery$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].SEARCH_MORE_FOR_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((latest) => latest[1]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((store) => !store.search.isSearching), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((store) => {
            this.youtubeSearch.searchMore(store.search.pageToken.next);
            return this.youtubeSearch
                .searchFor(store.search.searchType, store.search.query, store.search.queryParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(youtubeResponse => this.playerSearchActions.searchResultsReturned(youtubeResponse)));
        }));
        this.searchMoreSearchStarted$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].SEARCH_MORE_FOR_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.select(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["getIsSearching"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((states) => !states[1]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.playerSearchActions.searchStarted()));
        this.updatePreset$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].UPDATE_QUERY_PARAM), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => new _store_player_search__WEBPACK_IMPORTED_MODULE_6__["SearchCurrentQuery"]()));
        this.resetVideosAfterParamUpdate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].UPDATE_QUERY_PARAM), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.playerSearchActions.resetResults()));
        this.resetPageToken$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].RESET_PAGE_TOKEN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.youtubeSearch.resetPageToken())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => ({ type: 'PAGE_RESET_DONE' })));
        this.searchCurrentQuery$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].SEARCH_CURRENT_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_7__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.select(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["getQuery"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((latest) => latest[1]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((query) => this.playerSearchActions.searchNewQuery(query)));
        // Playlists SEARCH EFFECTS
        this.playlistsSearchStart$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"].PLAYLISTS_SEARCH_START.action), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((latest) => latest[1]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((store) => this.youtubeSearch
            .searchForPlaylist(store.search.query, store.search.queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((youtubeResponse) => _store_player_search__WEBPACK_IMPORTED_MODULE_6__["AddResultsAction"].creator(youtubeResponse.items)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.playerSearchActions.errorInSearch(err))))));
    }
};
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "searchQuery$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "resetVideos$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "searchResultsReturned$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "addPlaylistsToResults$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "addMetadataToVideos$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "searchMoreForQuery$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "searchMoreSearchStarted$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "updatePreset$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "resetVideosAfterParamUpdate$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "resetPageToken$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "searchCurrentQuery$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", Object)
], PlayerSearchEffects.prototype, "playlistsSearchStart$", void 0);
PlayerSearchEffects = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _store_player_search__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchActions"], _core_services_youtube_search__WEBPACK_IMPORTED_MODULE_8__["YoutubeSearch"],
        _core_services__WEBPACK_IMPORTED_MODULE_0__["YoutubeVideosInfo"]])
], PlayerSearchEffects);



/***/ }),

/***/ "./src/app/core/effects/router.effects.ts":
/*!************************************************!*\
  !*** ./src/app/core/effects/router.effects.ts ***!
  \************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/router-store */ "./src/app/core/store/router-store/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let RouterEffects = class RouterEffects {
    constructor(actions$, router, location) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_router_store__WEBPACK_IMPORTED_MODULE_4__["GO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(({ path, query: queryParams, extras }) => this.router.navigate(path, Object.assign({ queryParams }, extras))));
        this.navigateBack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_router_store__WEBPACK_IMPORTED_MODULE_4__["BACK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.location.back()));
        this.navigateForward$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_router_store__WEBPACK_IMPORTED_MODULE_4__["FORWARD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.location.forward()));
    }
};
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], RouterEffects.prototype, "navigate$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], RouterEffects.prototype, "navigateBack$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], RouterEffects.prototype, "navigateForward$", void 0);
RouterEffects = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], RouterEffects);



/***/ }),

/***/ "./src/app/core/effects/user-profile.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/core/effects/user-profile.effects.ts ***!
  \******************************************************/
/*! exports provided: UserProfileEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileEffects", function() { return UserProfileEffects; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_user_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/user-profile */ "./src/app/core/store/user-profile/index.ts");
/* harmony import */ var _utils_data_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/data.utils */ "./src/app/shared/utils/data.utils.ts");
/* harmony import */ var _core_services_user_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/user-profile.service */ "./src/app/core/services/user-profile.service.ts");
/* harmony import */ var _core_services_authorization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/authorization.service */ "./src/app/core/services/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let UserProfileEffects = class UserProfileEffects {
    constructor(actions$, userProfileActions, userProfile, auth) {
        this.actions$ = actions$;
        this.userProfileActions = userProfileActions;
        this.userProfile = userProfile;
        this.auth = auth;
        this.checkUserAuth$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].CHECK_USER_AUTH), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => this.auth.loadAuth()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((googleUser) => new _store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserSigninSuccess"](googleUser)));
        this.updateToken$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].UPDATE_TOKEN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_5__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((token) => (this.auth.accessToken = token)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(token => this.userProfile.getPlaylists(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => this.userProfileActions.updateData(response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            console.log(`error in fetching user's playlists ${error}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new _store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserPlaylistsFetchError"](error));
        }))));
        this.addUserPlaylists$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].UPDATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_5__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => this.userProfileActions.addPlaylists(data.items)));
        this.updateNextPageToken$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].UPDATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_5__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ nextPageToken }) => nextPageToken
            ? this.userProfileActions.updatePageToken(nextPageToken)
            : this.userProfileActions.userProfileCompleted()));
        this.getMorePlaylists$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].UPDATE_NEXT_PAGE_TOKEN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_5__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((pageToken) => this.userProfile.updatePageToken(pageToken)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((pageToken) => this.userProfile.getPlaylists(false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => this.userProfileActions.updateData(response)));
        this.userProfileRecieved$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].USER_PROFILE_RECIEVED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_5__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(profile => this.userProfile.toUserJson(profile)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((profile) => this.userProfileActions.updateUserProfile(profile)));
        // SIGN IN/OUT EFFECTS
        this.userSignin$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].USER_SIGNIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => new _store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserSigninStart"]()));
        this.userSigninStart$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].USER_SIGNIN_START), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => this.auth
            .signIn()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.auth.handleFailedLogin(error)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => new _store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserSigninSuccess"](response)));
        this.userSigninSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].USER_SIGNIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((response) => this.auth.setAuthTimer(response)));
        this.updateTokenAfterSigninSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].USER_SIGNIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_5__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((googleUser) => this.userProfileActions.updateToken(this.auth.extractToken(googleUser))));
        this.updateProfileAfterSigninSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].USER_SIGNIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_utils_data_utils__WEBPACK_IMPORTED_MODULE_5__["toPayload"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((googleUser) => this.userProfileActions.userProfileRecieved(googleUser.getBasicProfile())));
        this.userSignout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].USER_SIGNOUT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => this.auth.signOut()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => new _store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserSignoutSuccess"]()));
        this.userSignoutSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"].USER_SIGNOUT_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.auth.disposeAutoSignIn()));
    }
};
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "checkUserAuth$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "updateToken$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "addUserPlaylists$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "updateNextPageToken$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "getMorePlaylists$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "userProfileRecieved$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "userSignin$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "userSigninStart$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "userSigninSuccess$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "updateTokenAfterSigninSuccess$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "updateProfileAfterSigninSuccess$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "userSignout$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], UserProfileEffects.prototype, "userSignoutSuccess$", void 0);
UserProfileEffects = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
        _store_user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfileActions"],
        _core_services_user_profile_service__WEBPACK_IMPORTED_MODULE_6__["UserProfile"],
        _core_services_authorization_service__WEBPACK_IMPORTED_MODULE_7__["Authorization"]])
], UserProfileEffects);



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/app/core/store/index.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ "./src/app/core/effects/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/app/core/resolvers/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ "./src/app/core/api/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_app_http_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/app-http-interceptor */ "./src/app/core/services/app-http-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_store__WEBPACK_IMPORTED_MODULE_1__["CoreStoreModule"], _effects__WEBPACK_IMPORTED_MODULE_2__["AppEffectsModules"]],
        declarations: [],
        exports: [_store__WEBPACK_IMPORTED_MODULE_1__["CoreStoreModule"]],
        providers: [
            ..._services__WEBPACK_IMPORTED_MODULE_3__["APP_SERVICES"],
            ..._resolvers__WEBPACK_IMPORTED_MODULE_4__["APP_RESOLVERS"],
            ..._api__WEBPACK_IMPORTED_MODULE_5__["APP_APIS"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _services_app_http_interceptor__WEBPACK_IMPORTED_MODULE_7__["AppHttpInterceptor"],
                multi: true
            }
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/resolvers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/resolvers/index.ts ***!
  \*****************************************/
/*! exports provided: APP_RESOLVERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_RESOLVERS", function() { return APP_RESOLVERS; });
/* harmony import */ var _playlist_videos_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist-videos.resolver */ "./src/app/core/resolvers/playlist-videos.resolver.ts");
/* harmony import */ var _playlist_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist.resolver */ "./src/app/core/resolvers/playlist.resolver.ts");


const APP_RESOLVERS = [
    _playlist_videos_resolver__WEBPACK_IMPORTED_MODULE_0__["PlaylistVideosResolver"],
    _playlist_resolver__WEBPACK_IMPORTED_MODULE_1__["PlaylistResolver"],
];


/***/ }),

/***/ "./src/app/core/resolvers/playlist-videos.resolver.ts":
/*!************************************************************!*\
  !*** ./src/app/core/resolvers/playlist-videos.resolver.ts ***!
  \************************************************************/
/*! exports provided: PlaylistVideosResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistVideosResolver", function() { return PlaylistVideosResolver; });
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PlaylistVideosResolver = class PlaylistVideosResolver {
    constructor(userProfile) {
        this.userProfile = userProfile;
    }
    resolve(route) {
        const playlistId = route.params['id'];
        return this.userProfile.fetchAllPlaylistItems(playlistId);
    }
};
PlaylistVideosResolver = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_0__["UserProfile"]])
], PlaylistVideosResolver);



/***/ }),

/***/ "./src/app/core/resolvers/playlist.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/resolvers/playlist.resolver.ts ***!
  \*****************************************************/
/*! exports provided: PlaylistResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistResolver", function() { return PlaylistResolver; });
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PlaylistResolver = class PlaylistResolver {
    constructor(userProfile) {
        this.userProfile = userProfile;
    }
    resolve(route) {
        const playlistId = route.params['id'];
        return this.userProfile
            .fetchPlaylist(playlistId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response.items[0]));
    }
};
PlaylistResolver = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_0__["UserProfile"]])
], PlaylistResolver);



/***/ }),

/***/ "./src/app/core/services/analytics.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/analytics.service.ts ***!
  \****************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events#default-event-categories-and-labels
// Google Analytics Events
const Events = {
    Login: {
        NAME: 'login',
        LABEL: 'method'
    },
    Search: {
        NAME: 'search',
        LABEL: 'search_term'
    }
};
const CustomEvents = {
    VIDEO_PLAY: 'video_play'
};
let AnalyticsService = class AnalyticsService {
    constructor() {
        this.projectId = window['GA_PROJECT_ID'];
        this.assignGtag();
    }
    assignGtag() {
        const hasGtagLoaded = 'gtag' in window;
        if (!hasGtagLoaded) {
            console.info('GTAG has not been loaded');
        }
        this.gtag = hasGtagLoaded ? gtag : () => undefined;
    }
    trackPage(page) {
        this.gtag('config', this.projectId, {
            page_title: page,
            page_location: location.origin,
            page_path: location.hash
        });
    }
    trackSearch(searchType) {
        this.gtag('event', Events.Search.NAME, {
            [Events.Search.LABEL]: searchType
        });
    }
    trackSignin() {
        this.gtag('event', Events.Login.NAME, { [Events.Login.LABEL]: 'Google' });
    }
    trackVideoPlay() {
        this.gtag('event', CustomEvents.VIDEO_PLAY);
    }
};
AnalyticsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AnalyticsService);



/***/ }),

/***/ "./src/app/core/services/app-http-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/app-http-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AppHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpInterceptor", function() { return AppHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler */ "./src/app/core/services/error-handler.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/app-core */ "./src/app/core/store/app-core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AppHttpInterceptor = class AppHttpInterceptor {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    intercept(req, next) {
        const onLine = navigator.onLine;
        if (!onLine) {
            this.handleError(_store_app_core__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"].OFFLINE);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => { }, err => {
            this.handleError(`${_store_app_core__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"].RESPONSE_ERROR}, More Details: ${err.message}`);
            if (err.status === 404) {
            }
        }));
    }
    handleError(message) {
        this.errorHandler.handleError({
            message
        });
    }
};
AppHttpInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_error_handler__WEBPACK_IMPORTED_MODULE_1__["AppErrorHandler"]])
], AppHttpInterceptor);



/***/ }),

/***/ "./src/app/core/services/authorization.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/authorization.service.ts ***!
  \********************************************************/
/*! exports provided: Authorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authorization", function() { return Authorization; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _gapi_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gapi-loader.service */ "./src/app/core/services/gapi-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const extractAccessToken = (_googleAuth) => {
    return (_googleAuth && _googleAuth.currentUser.get().getAuthResponse().access_token);
};
let Authorization = class Authorization {
    constructor(zone, gapiLoader) {
        this.zone = zone;
        this.gapiLoader = gapiLoader;
        this._scope = 'profile email https://www.googleapis.com/auth/youtube';
    }
    set accessToken(value) {
        this._accessToken = value;
    }
    get accessToken() {
        const token = {
            fromGoogle: extractAccessToken(this._googleAuth),
            fromApp: this._accessToken,
            equal: true
        };
        return token.fromGoogle;
    }
    loadAuth() {
        // attempt to SILENT authorize
        return this.gapiLoader.load('auth2').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.authorize()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((googleAuth) => {
            this.saveGoogleAuth(googleAuth);
            this.listenToGoogleAuthSignIn(googleAuth);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((googleAuth) => this.isSignIn() && this.hasAccessToken(googleAuth)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((googleAuth) => googleAuth.currentUser.get()));
    }
    authorize() {
        // if (this._googleAuth) {
        //   console.log('signedIn?', this._googleAuth.isSignedIn.get());
        // }
        const authOptions = {
            client_id: _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].youtube.CLIENT_ID,
            scope: this._scope
        };
        return window['gapi'].auth2.init(authOptions);
    }
    hasAccessToken(googleAuth) {
        return (googleAuth &&
            googleAuth.currentUser
                .get()
                .getAuthResponse()
                .hasOwnProperty('access_token'));
    }
    saveGoogleAuth(googleAuth) {
        this._googleAuth = googleAuth;
        return googleAuth;
    }
    listenToGoogleAuthSignIn(googleAuth) {
        window['gapi']['auth2'].getAuthInstance().isSignedIn.listen(authState => {
            console.log('authState changed', authState);
        });
    }
    signIn() {
        const signOptions = { scope: this._scope };
        if (this._googleAuth) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this._googleAuth.signIn(signOptions));
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](obs => obs.complete());
    }
    extractToken(googleUser) {
        const authResponse = googleUser.getAuthResponse();
        return authResponse.access_token;
    }
    setAuthTimer(googleUser) {
        const MILLISECOND = 1000;
        const expireTime = 60 * 5;
        const expireTimeInMs = expireTime * MILLISECOND;
        this.disposeAutoSignIn();
        this.autoSignInTimer = this.startTimerToNextAuth(expireTimeInMs);
    }
    startTimerToNextAuth(timeInMs) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(timeInMs)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeInterval"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.authorize()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((googleAuth) => this.saveGoogleAuth(googleAuth)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((googleAuth) => googleAuth.currentUser.get()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            window.location.reload();
            return error;
        }))
            .subscribe((googleUser) => {
            this.zone.run(() => this.setAuthTimer(googleUser));
        });
    }
    handleFailedLogin(response) {
        console.error('FAILED TO LOGIN:', response);
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](obs => {
            obs.error();
            obs.complete();
        });
    }
    isSignIn() {
        return this._googleAuth && this._googleAuth.isSignedIn.get();
    }
    signOut() {
        return this._googleAuth.signOut();
    }
    disposeAutoSignIn() {
        if (this.autoSignInTimer) {
            this.autoSignInTimer.unsubscribe();
        }
    }
};
Authorization = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _gapi_loader_service__WEBPACK_IMPORTED_MODULE_4__["GapiLoader"]])
], Authorization);



/***/ }),

/***/ "./src/app/core/services/error-handler.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/error-handler.ts ***!
  \************************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/app.api */ "./src/app/core/api/app.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppErrorHandler = class AppErrorHandler {
    constructor(injector) {
        this.injector = injector;
    }
    handleError(error) {
        const appApi = this.injector.get(_api_app_api__WEBPACK_IMPORTED_MODULE_1__["AppApi"]);
        console.log('There was an ERROR:', error);
        appApi.notifyError(error);
    }
};
AppErrorHandler = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
], AppErrorHandler);



/***/ }),

/***/ "./src/app/core/services/gapi-loader.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/gapi-loader.service.ts ***!
  \******************************************************/
/*! exports provided: GapiLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapiLoader", function() { return GapiLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let GapiLoader = class GapiLoader {
    constructor() { }
    loadGoogleApi(api, api$) {
        const gapi = 'https://apis.google.com/js/api.js';
        const script = document.createElement('script');
        script.addEventListener('load', () => this._loadApi(api, api$));
        script.setAttribute('src', gapi);
        document.body.appendChild(script);
    }
    load(api) {
        const api$ = this.createApi(api);
        this.loadGoogleApi(api, api$);
        return api$;
    }
    _loadApi(api, api$) {
        const gapi = window['gapi'];
        const gapiAuthLoaded = gapi && gapi.auth2 && gapi.auth2.getAuthInstance();
        if (gapiAuthLoaded && gapiAuthLoaded.currentUser) {
            api$.complete(gapiAuthLoaded);
        }
        else {
            gapi.load(api, response => api$.next(response));
        }
    }
    createApi(api) {
        const api$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return api$;
    }
};
GapiLoader = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GapiLoader);



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: VersionCheckerService, APP_SERVICES, UserProfile, SearchParams, YoutubeSearch, YoutubePlayerService, NowPlaylistService, YoutubeVideosInfo, GapiLoader, Authorization, MediaParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SERVICES", function() { return APP_SERVICES; });
/* harmony import */ var _user_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.service */ "./src/app/core/services/user-profile.service.ts");
/* harmony import */ var _youtube_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube.search */ "./src/app/core/services/youtube.search.ts");
/* harmony import */ var _youtube_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube-player.service */ "./src/app/core/services/youtube-player.service.ts");
/* harmony import */ var _now_playlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./now-playlist.service */ "./src/app/core/services/now-playlist.service.ts");
/* harmony import */ var _youtube_videos_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./youtube-videos-info.service */ "./src/app/core/services/youtube-videos-info.service.ts");
/* harmony import */ var _gapi_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gapi-loader.service */ "./src/app/core/services/gapi-loader.service.ts");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authorization.service */ "./src/app/core/services/authorization.service.ts");
/* harmony import */ var _youtube_data_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./youtube-data-api */ "./src/app/core/services/youtube-data-api/index.ts");
/* harmony import */ var _version_checker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./version-checker.service */ "./src/app/core/services/version-checker.service.ts");
/* harmony import */ var _media_parser_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-parser.service */ "./src/app/core/services/media-parser.service.ts");
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./analytics.service */ "./src/app/core/services/analytics.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return _user_profile_service__WEBPACK_IMPORTED_MODULE_0__["UserProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchParams", function() { return _youtube_search__WEBPACK_IMPORTED_MODULE_1__["SearchParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubeSearch", function() { return _youtube_search__WEBPACK_IMPORTED_MODULE_1__["YoutubeSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerService", function() { return _youtube_player_service__WEBPACK_IMPORTED_MODULE_2__["YoutubePlayerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NowPlaylistService", function() { return _now_playlist_service__WEBPACK_IMPORTED_MODULE_3__["NowPlaylistService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideosInfo", function() { return _youtube_videos_info_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeVideosInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GapiLoader", function() { return _gapi_loader_service__WEBPACK_IMPORTED_MODULE_5__["GapiLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Authorization", function() { return _authorization_service__WEBPACK_IMPORTED_MODULE_6__["Authorization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionCheckerService", function() { return _version_checker_service__WEBPACK_IMPORTED_MODULE_8__["VersionCheckerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaParserService", function() { return _media_parser_service__WEBPACK_IMPORTED_MODULE_9__["MediaParserService"]; });





















const APP_SERVICES = [
    _user_profile_service__WEBPACK_IMPORTED_MODULE_0__["UserProfile"],
    _youtube_search__WEBPACK_IMPORTED_MODULE_1__["YoutubeSearch"],
    _youtube_player_service__WEBPACK_IMPORTED_MODULE_2__["YoutubePlayerService"],
    _now_playlist_service__WEBPACK_IMPORTED_MODULE_3__["NowPlaylistService"],
    _youtube_videos_info_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeVideosInfo"],
    _gapi_loader_service__WEBPACK_IMPORTED_MODULE_5__["GapiLoader"],
    _authorization_service__WEBPACK_IMPORTED_MODULE_6__["Authorization"],
    _youtube_data_api__WEBPACK_IMPORTED_MODULE_7__["YoutubeDataApi"],
    _version_checker_service__WEBPACK_IMPORTED_MODULE_8__["VersionCheckerService"],
    _media_parser_service__WEBPACK_IMPORTED_MODULE_9__["MediaParserService"],
    _analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"]
];


/***/ }),

/***/ "./src/app/core/services/media-parser.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/media-parser.service.ts ***!
  \*******************************************************/
/*! exports provided: MediaParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaParserService", function() { return MediaParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const LINE_WITH_TRACKre = /([a-zA-Z \S\d]){0,}(\d{1,2}:\d{2}:{0,1}\d{0,2})+([a-zA-Z \S]){0,}/;
const HH_MM_SSre = /(\d{1,2}):\d{2}:?\d{0,2}/;
let MediaParserService = class MediaParserService {
    constructor() { }
    extractTracks(description) {
        const hasTracksRegexp = new RegExp(LINE_WITH_TRACKre, 'gmi');
        const tracks = description ? description.match(hasTracksRegexp) : [];
        // make sure there's a first track
        if (tracks && tracks.length && !tracks[0].includes('00:0')) {
            tracks.unshift('00:00');
        }
        return tracks;
    }
    extractTime(track) {
        const title = track.match(HH_MM_SSre);
        return title;
    }
    verifyTracksCue(tracks) {
        const isCueValid = tracks
            .map((track) => this.extractTime(track))
            .every((track, index, arr) => {
            const prev = index > 0 ? this.toNumber(arr[index - 1][0]) : false;
            const current = this.toNumber(track[0]);
            return prev ? current > prev : true;
        });
        return isCueValid;
    }
    parseTracks(tracks = []) {
        let _tracks = [];
        const isFormatValid = this.verifyTracksCue(tracks);
        if (isFormatValid && tracks) {
            _tracks = tracks.filter((track) => {
                const isTrack = HH_MM_SSre.test(track);
                return isTrack;
            });
        }
        return _tracks;
    }
    /**
     * converts time format of HH:MM:SS to seconds
     * @param time string
     */
    toNumber(time) {
        const timeUnitRatio = {
            '3': 60 * 60,
            '2': 60,
            '1': 1
        };
        return time
            .split(':')
            .reverse()
            .map((num) => parseInt(num, 10))
            .reduce((acc, current, index, arr) => {
            return acc + current * +timeUnitRatio[index + 1];
        }, 0);
    }
};
MediaParserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MediaParserService);



/***/ }),

/***/ "./src/app/core/services/now-playlist.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/now-playlist.service.ts ***!
  \*******************************************************/
/*! exports provided: NowPlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlaylistService", function() { return NowPlaylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/now-playlist */ "./src/app/core/store/now-playlist/index.ts");
/* harmony import */ var _youtube_videos_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube-videos-info.service */ "./src/app/core/services/youtube-videos-info.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let NowPlaylistService = class NowPlaylistService {
    constructor(store, youtubeVideosInfo) {
        this.store = store;
        this.youtubeVideosInfo = youtubeVideosInfo;
        this.playlist$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["getNowPlaylist"]));
    }
    queueVideo(mediaId) {
        return this.youtubeVideosInfo.api
            .list(mediaId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(items => items[0]));
    }
    queueVideos(medias) {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["QueueVideos"](medias));
    }
    removeVideo(media) {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["RemoveVideo"](media));
    }
    selectVideo(media) {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["SelectVideo"](media));
    }
    updateFilter(filter) {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["FilterChange"](filter));
    }
    clearPlaylist() {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["RemoveAll"]());
    }
    selectNextIndex() {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["SelectNext"]());
    }
    selectPreviousIndex() {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["SelectPrevious"]());
    }
    trackEnded() {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["MediaEnded"]());
    }
    getCurrent() {
        let media;
        this.playlist$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(playlist => {
            media = playlist.videos.find(video => video.id === playlist.selectedId);
        });
        return media;
    }
    updateIndexByMedia(mediaId) {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["UpdateIndexByMedia"](mediaId));
    }
    isInLastTrack() {
        let nowPlaylist;
        this.playlist$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(_nowPlaylist => (nowPlaylist = _nowPlaylist));
        const currentVideoId = nowPlaylist.selectedId;
        const indexOfCurrentVideo = nowPlaylist.videos.findIndex(video => video.id === currentVideoId);
        const isCurrentLast = indexOfCurrentVideo + 1 === nowPlaylist.videos.length;
        return isCurrentLast;
    }
    seekToTrack(trackEvent) {
        this.store.dispatch(new _store_now_playlist__WEBPACK_IMPORTED_MODULE_2__["SeekTo"](trackEvent));
    }
};
NowPlaylistService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
        _youtube_videos_info_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeVideosInfo"]])
], NowPlaylistService);



/***/ }),

/***/ "./src/app/core/services/user-profile.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/user-profile.service.ts ***!
  \*******************************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _youtube_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube-api.service */ "./src/app/core/services/youtube-api.service.ts");
/* harmony import */ var _youtube_videos_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./youtube-videos-info.service */ "./src/app/core/services/youtube-videos-info.service.ts");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authorization.service */ "./src/app/core/services/authorization.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let UserProfile = class UserProfile {
    constructor(http, zone, youtubeVideosInfo, authorization) {
        this.http = http;
        this.zone = zone;
        this.youtubeVideosInfo = youtubeVideosInfo;
        this.authorization = authorization;
        this.isSearching = false;
        this.playlistInfo = new _youtube_api_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeApiService"]({
            url: 'https://www.googleapis.com/youtube/v3/playlistItems',
            http: this.http,
            idKey: 'playlistId',
            config: {
                mine: 'true'
            }
        }, authorization);
        // TODO - extract to a Model / Reducer?
        // Reducer - because nextPageToken is changed
        // Model - new _config should be recreated easily with a new nextPageToken
        this.playlists = new _youtube_api_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeApiService"]({
            url: 'https://www.googleapis.com/youtube/v3/playlists',
            http: this.http,
            config: {
                mine: 'true',
                part: 'snippet,id,contentDetails'
            }
        }, authorization);
        this.playlistApi = new _youtube_api_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeApiService"]({
            url: 'https://www.googleapis.com/youtube/v3/playlists',
            http: this.http,
            idKey: 'id',
            config: {
                part: 'snippet,id,contentDetails'
            }
        }, authorization);
    }
    getPlaylists(isNewPage) {
        const hasAccessToken = this.playlists.hasToken();
        if (!hasAccessToken) {
            return;
        }
        if (isNewPage) {
            this.playlists.resetPageToken();
        }
        // TODO - extract to a reducer or/and an @Effect - SEARCH_START, SEARCH_COMPLETED
        this.isSearching = true;
        return this.playlists.getList();
    }
    updatePageToken(pageToken) {
        this.playlists.setPageToken(pageToken);
    }
    resetPageToken() {
        this.playlists.resetPageToken();
    }
    fetchPlaylist(playlistId) {
        return this.playlistApi.list(playlistId);
    }
    fetchPlaylistItems(playlistId, pageToken = '') {
        // const token = this.playlists.config.get('access_token');
        if ('' === pageToken) {
            this.playlistInfo.deletePageToken();
        }
        else {
            this.playlistInfo.setPageToken(pageToken);
        }
        return this.playlistInfo.list(playlistId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((response) => {
            const videoIds = response.items
                .map(video => video.snippet.resourceId.videoId)
                .join(',');
            return this.youtubeVideosInfo.api.list(videoIds);
        }));
    }
    fetchAllPlaylistItems(playlistId) {
        let items = [];
        const subscriptions = [];
        const items$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        let nextPageToken = '';
        const fetchMetadata = response => {
            const videoIds = response.items
                .map(video => video.snippet.resourceId.videoId)
                .join(',');
            nextPageToken = response.nextPageToken;
            return this.youtubeVideosInfo.api.list(videoIds);
        };
        const collectItems = videos => {
            items = [...items, ...videos.items];
            if (nextPageToken) {
                fetchItems(playlistId, nextPageToken);
            }
            else {
                items$.next(items);
                subscriptions.forEach(_s => _s.unsubscribe());
                items$.complete();
            }
        };
        const fetchItems = (id, token) => {
            this.playlistInfo.setPageToken(token);
            const sub = this.playlistInfo
                .list(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(response => fetchMetadata(response)))
                .subscribe(response => collectItems(response));
            subscriptions.push(sub);
            return sub;
        };
        fetchItems(playlistId, '');
        return items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
    }
    toUserJson(profile) {
        const _profile = {};
        if (profile) {
            _profile.imageUrl = profile.getImageUrl();
            _profile.name = profile.getName();
        }
        return _profile;
    }
    fetchMetadata(items) {
        const videoIds = items.map(video => video.id).join(',');
        return this.youtubeVideosInfo.api.list(videoIds);
    }
};
UserProfile = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _youtube_videos_info_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeVideosInfo"],
        _authorization_service__WEBPACK_IMPORTED_MODULE_5__["Authorization"]])
], UserProfile);



/***/ }),

/***/ "./src/app/core/services/version-checker.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/version-checker.service.ts ***!
  \**********************************************************/
/*! exports provided: VersionCheckerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionCheckerService", function() { return VersionCheckerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/app.api */ "./src/app/core/api/app.api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function verifyPackage(packageJson) {
    return packageJson.hasOwnProperty('version');
}
let VersionCheckerService = class VersionCheckerService {
    constructor(http, zone, appApi) {
        this.http = http;
        this.zone = zone;
        this.appApi = appApi;
        this.interval = 1000 * 60 * 60;
        this.protocol = 'https';
        this.prefix = 'raw.githubusercontent.com';
        this.repo = 'orizens/echoes-player';
        this.repoBranch = 'gh-pages';
        this.pathToFile = 'assets/package.json';
        this.url = `${this.protocol}://${this.prefix}/${this.repo}/${this.repoBranch}/${this.pathToFile}`;
    }
    check() {
        return this.http.get(this.url);
    }
    start() {
        let checkTimer;
        this.zone.runOutsideAngular(() => {
            checkTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, this.interval)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.check()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(verifyPackage))
                .subscribe(response => this.appApi.recievedNewVersion(response));
        });
        return checkTimer;
    }
    updateVersion() {
        if (window) {
            window.location.reload(true);
        }
    }
    checkForVersion() {
        return this.check()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(verifyPackage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(response => this.appApi.notifyNewVersion(response));
    }
};
VersionCheckerService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _api_app_api__WEBPACK_IMPORTED_MODULE_3__["AppApi"]])
], VersionCheckerService);



/***/ }),

/***/ "./src/app/core/services/youtube-api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/youtube-api.service.ts ***!
  \******************************************************/
/*! exports provided: YoutubeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeApiService", function() { return YoutubeApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



const defaultParams = {
    part: 'snippet,contentDetails',
    key: _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].youtube.API_KEY,
    maxResults: '50',
    pageToken: ''
};
// @Injectable()
class YoutubeApiService {
    constructor(options, authService) {
        this.authService = authService;
        this.authorize = false;
        this.isSearching = false;
        this.resetConfig();
        if (authService) {
            this.authorize = true;
        }
        if (options) {
            this.url = options.url;
            this.http = options.http;
            this.idKey = options.idKey || '';
            if (options.config) {
                this.setConfig(options.config);
            }
        }
    }
    setConfig(options) {
        this.params = Object.keys(options).reduce((params, option) => {
            return params.set(option, options[option]);
        }, this.params);
    }
    hasToken() {
        return this.authService && this.authService.accessToken.length > 0;
    }
    resetConfig() {
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({ fromObject: defaultParams });
    }
    getList() {
        this.isSearching = true;
        const options = {
            params: this.params,
            headers: this.createHeaders()
        };
        return this.http.get(this.url, options);
    }
    list(id) {
        if (this.idKey) {
            this.setConfig({ [this.idKey]: id });
            // this.params[this.idKey] = id;
        }
        this.isSearching = true;
        const options = {
            params: this.params,
            headers: this.createHeaders()
        };
        return this.http.get(this.url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            this.nextPageToken = response.nextPageToken;
            this.isSearching = false;
            return response;
        }));
    }
    fetchNextPage() {
        if (!this.isSearching) {
            // this.params['pageToken'] = this.nextPageToken;
            this.setPageToken(this.nextPageToken);
        }
    }
    resetPageToken() {
        // this.params['pageToken'] = '';
        this.setPageToken('');
    }
    setPageToken(pageToken) {
        this.setConfig({ pageToken });
    }
    deletePageToken() {
        this.params = this.params.delete('pageToken');
    }
    createHeaders() {
        const accessToken = this.authService && this.authService.accessToken;
        const headers = {};
        if (accessToken && this.authorize) {
            headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return headers;
    }
}


/***/ }),

/***/ "./src/app/core/services/youtube-data-api/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/youtube-data-api/index.ts ***!
  \*********************************************************/
/*! exports provided: DataApiProviders, _defaultUrlParams, YoutubeDataApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiProviders", function() { return DataApiProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_defaultUrlParams", function() { return _defaultUrlParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeDataApi", function() { return YoutubeDataApi; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authorization.service */ "./src/app/core/services/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const DataApiProviders = {
    SEARCH: 'search',
    PLAYLISTS: 'playlists'
};
const _defaultUrlParams = {
    part: 'snippet,id',
    maxResults: '50',
    key: _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].youtube.API_KEY
};
/**
 * Performs http requests using HttpClientModule to youtube-api v3.
 *
 * `YoutubeApi` is available as an injectable class, with methods to perform youtube api
 *  methods requests
 *
 * ### Example
 *
 * ```typescript
 * import {YoutubeDataApi} from './services/YoutubeDataApi';
 * @Component({
 *   selector: 'yt-app',
 * })
 * class VideosComponent {
 *   options = {
 *    part: 'snippet,id',
 *    q: 'chillstep'
 *   };
 *   constructor(yt: YoutubeDataApi) {
 *     yt.list('search', options)
 *       // Subscribe to the observable to get the parsed videos
 *       .subscribe(response => this.videos = response.videos);
 *   }
 * }
 * ```
 */
let YoutubeDataApi = class YoutubeDataApi {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        // public _config: HttpParams = new HttpParams();
        this._apiPrefixUrl = 'https://www.googleapis.com/youtube';
        this._apiVersion = 'v3';
    }
    get _apiUrl() {
        return `${this._apiPrefixUrl}/${this._apiVersion}`;
    }
    list(api, options) {
        const params = Object.assign({}, _defaultUrlParams, options);
        const _options = {
            params,
            headers: this.createHeaders(false)
        };
        return this.http.get(this.getApi(api), _options);
    }
    delete(api, options) {
        return this._request(api);
    }
    insert(api, options) {
        return this.http.post(this.getApi(api), {});
    }
    update(api) {
        return this._request(api);
    }
    _request(api) {
        // const options: RequestOptionsArgs = {
        //   search: this.config,
        //   headers: this.createHeaders()
        // };
        // this.http.
    }
    createHeaders(addAuth) {
        const accessToken = this.auth.accessToken;
        const headersOptions = {};
        if (accessToken && addAuth) {
            headersOptions['authorization'] = `Bearer ${accessToken}`;
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](headersOptions);
    }
    getApi(api) {
        return `${this._apiUrl}/${api}`;
    }
};
YoutubeDataApi = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _authorization_service__WEBPACK_IMPORTED_MODULE_3__["Authorization"]])
], YoutubeDataApi);



/***/ }),

/***/ "./src/app/core/services/youtube-player.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/youtube-player.service.ts ***!
  \*********************************************************/
/*! exports provided: YoutubePlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerService", function() { return YoutubePlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let YoutubePlayerService = class YoutubePlayerService {
    constructor(store, zone) {
        this.store = store;
        this.zone = zone;
    }
    setupPlayer(player) {
        this.player = player;
    }
    play() {
        this.zone.runOutsideAngular(() => this.player.playVideo());
    }
    pause() {
        this.zone.runOutsideAngular(() => this.player.pauseVideo());
    }
    playVideo(media, seconds) {
        const id = media.id;
        const isLoaded = this.player.getVideoUrl().includes(id);
        if (!isLoaded) {
            this.zone.runOutsideAngular(() => this.player.loadVideoById(id, seconds || undefined));
        }
        this.play();
    }
    seekTo(seconds) {
        this.zone.runOutsideAngular(() => this.player.seekTo(seconds, true));
    }
    // Not in use
    onPlayerStateChange(event) {
        const state = event.data;
        // let autoNext = false;
        // play the next song if its not the end of the playlist
        // should add a "repeat" feature
        if (state === YT.PlayerState.ENDED) {
            // this.listeners.ended.forEach(callback => callback(state));
        }
        if (state === YT.PlayerState.PAUSED) {
            // service.playerState = YT.PlayerState.PAUSED;
        }
        if (state === YT.PlayerState.PLAYING) {
            // service.playerState = YT.PlayerState.PLAYING;
        }
    }
    setSize(height, width) {
        this.zone.runOutsideAngular(() => {
            this.player.setSize(width, height);
        });
    }
};
YoutubePlayerService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
], YoutubePlayerService);



/***/ }),

/***/ "./src/app/core/services/youtube-videos-info.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/youtube-videos-info.service.ts ***!
  \**************************************************************/
/*! exports provided: YoutubeVideosInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideosInfo", function() { return YoutubeVideosInfo; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _youtube_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube-api.service */ "./src/app/core/services/youtube-api.service.ts");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorization.service */ "./src/app/core/services/authorization.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let YoutubeVideosInfo = class YoutubeVideosInfo {
    constructor(http, auth) {
        this.http = http;
        this.api = new _youtube_api_service__WEBPACK_IMPORTED_MODULE_2__["YoutubeApiService"]({
            url: 'https://www.googleapis.com/youtube/v3/videos',
            http: this.http,
            idKey: 'id',
            config: {
                part: 'snippet,contentDetails,statistics'
            }
        }, auth);
    }
    fetchVideoData(mediaId) {
        return this.api.list(mediaId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response.items[0]));
    }
    fetchVideosData(mediaIds) {
        return this.api.list(mediaIds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response.items));
    }
};
YoutubeVideosInfo = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _authorization_service__WEBPACK_IMPORTED_MODULE_3__["Authorization"]])
], YoutubeVideosInfo);



/***/ }),

/***/ "./src/app/core/services/youtube.search.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/youtube.search.ts ***!
  \*************************************************/
/*! exports provided: SearchParams, YoutubeSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchParams", function() { return SearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeSearch", function() { return YoutubeSearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _youtube_data_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube-data-api */ "./src/app/core/services/youtube-data-api/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



const SearchTypes = {
    VIDEO: 'video',
    PLAYLIST: 'playlist',
    CHANNEL: 'channel'
};
const SearchParams = {
    Types: {
        [SearchTypes.VIDEO]: 'video',
        [SearchTypes.PLAYLIST]: 'playlist',
        [SearchTypes.CHANNEL]: 'channel'
    }
};
let YoutubeSearch = class YoutubeSearch {
    constructor(youtubeDataApi) {
        this.youtubeDataApi = youtubeDataApi;
        this._api = _youtube_data_api__WEBPACK_IMPORTED_MODULE_1__["DataApiProviders"].SEARCH;
        this._apiOptions = {
            part: 'snippet,id',
            q: '',
            type: 'video',
            pageToken: ''
        };
    }
    /**
     * search for video
     * @param query {string}
     * @param params {key/value object}
     */
    search(query, params) {
        if (query || '' === query) {
            const preset = params ? ` ${params.preset}` : '';
            this._apiOptions.q = `${query}${preset}`;
        }
        return this.youtubeDataApi.list(this._api, this._apiOptions);
    }
    /**
     * resolves which type to search for
     * @param type any type of SearchTypes
     * @param query any string
     * @param params params of api
     */
    searchFor(type, query, params) {
        switch (type) {
            case SearchTypes.VIDEO: {
                return this.searchVideo(query, params);
            }
            case SearchTypes.PLAYLIST: {
                return this.searchForPlaylist(query, params);
            }
        }
    }
    /**
     * search for video
     * @param query {string}
     * @param params {key/value object}
     */
    searchVideo(query, params) {
        this._apiOptions.type = SearchParams.Types[SearchTypes.VIDEO];
        return this.search(query, params);
    }
    /**
     * search for playlist
     * @param query {string}
     * @param params {key/value object}
     */
    searchForPlaylist(query, params) {
        this._apiOptions.type = SearchParams.Types[SearchTypes.PLAYLIST];
        return this.search(query, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((response) => {
            const options = {
                part: 'snippet,id,contentDetails',
                id: response.items.map(pl => pl.id.playlistId).join(',')
            };
            return this.youtubeDataApi.list(_youtube_data_api__WEBPACK_IMPORTED_MODULE_1__["DataApiProviders"].PLAYLISTS, options);
        }));
    }
    searchMore(nextPageToken) {
        this._apiOptions.pageToken = nextPageToken;
        return this;
    }
    resetPageToken() {
        this._apiOptions.pageToken = '';
        return this;
    }
};
YoutubeSearch = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_youtube_data_api__WEBPACK_IMPORTED_MODULE_1__["YoutubeDataApi"]])
], YoutubeSearch);



/***/ }),

/***/ "./src/app/core/store/app-core/app-core.actions.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/store/app-core/app-core.actions.ts ***!
  \*********************************************************/
/*! exports provided: ActionTypes, RecievedAppVersion, UpdateAppVersion, CheckVersion, ExpandSidebar, CollapseSidebar, ToggleSidebar, ThemeChange, AddError, ToggleError, CleanError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievedAppVersion", function() { return RecievedAppVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAppVersion", function() { return UpdateAppVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckVersion", function() { return CheckVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandSidebar", function() { return ExpandSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseSidebar", function() { return CollapseSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSidebar", function() { return ToggleSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeChange", function() { return ThemeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddError", function() { return AddError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleError", function() { return ToggleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanError", function() { return CleanError; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["SIDEBAR_EXPAND"] = "[APP CORE] SIDEBAR_EXPAND";
    ActionTypes["SIDEBAR_COLLAPSE"] = "[APP CORE] SIDEBAR_COLLAPSE";
    ActionTypes["SIDEBAR_TOGGLE"] = "[APP CORE] SIDEBAR_TOGGLE";
    ActionTypes["APP_VERSION_RECIEVED"] = "[APP CORE] APP_VERSION_RECIEVED";
    ActionTypes["APP_UPDATE_VERSION"] = "[APP CORE] APP_UPDATE_VERSION";
    ActionTypes["APP_CHECK_VERSION"] = "[APP CORE] APP_CHECK_VERSION";
    ActionTypes["APP_THEME_CHANGE"] = "[APP CORE] APP_THEME_CHANGE";
    ActionTypes["ERROR_ADD"] = "[APP CORE] Error Add";
    ActionTypes["ERROR_CLEAN"] = "[APP CORE] Error Clean";
    ActionTypes["TOGGLE_ERROR"] = "[APP CORE] Error Toggle";
})(ActionTypes || (ActionTypes = {}));
class RecievedAppVersion {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.APP_VERSION_RECIEVED;
    }
}
class UpdateAppVersion {
    constructor() {
        this.type = ActionTypes.APP_UPDATE_VERSION;
        this.payload = '';
    }
}
class CheckVersion {
    constructor() {
        this.type = ActionTypes.APP_CHECK_VERSION;
        this.payload = '';
    }
}
class ExpandSidebar {
    constructor() {
        this.type = ActionTypes.SIDEBAR_EXPAND;
        this.payload = true;
    }
}
class CollapseSidebar {
    constructor() {
        this.type = ActionTypes.SIDEBAR_COLLAPSE;
        this.payload = false;
    }
}
class ToggleSidebar {
    constructor() {
        this.type = ActionTypes.SIDEBAR_TOGGLE;
        this.payload = '';
    }
}
class ThemeChange {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.APP_THEME_CHANGE;
    }
}
class AddError {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.ERROR_ADD;
    }
}
class ToggleError {
    constructor(payload = {}) {
        this.payload = payload;
        this.type = ActionTypes.TOGGLE_ERROR;
    }
}
class CleanError {
    constructor(payload = false) {
        this.payload = payload;
        this.type = ActionTypes.ERROR_CLEAN;
    }
}


/***/ }),

/***/ "./src/app/core/store/app-core/app-core.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/store/app-core/app-core.reducer.ts ***!
  \*********************************************************/
/*! exports provided: ErrorActions, ErrorMessages, appCore, getSidebarExpanded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorActions", function() { return ErrorActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return ErrorMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appCore", function() { return appCore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSidebarExpanded", function() { return getSidebarExpanded; });
/* harmony import */ var _app_core_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-core.actions */ "./src/app/core/store/app-core/app-core.actions.ts");
/* harmony import */ var _app_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.themes */ "./src/app/app.themes.ts");
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store.utils */ "./src/app/core/store/store.utils.ts");



var ErrorActions;
(function (ErrorActions) {
    ErrorActions["RELOAD"] = "Reload";
    ErrorActions[ErrorActions["NONE"] = 0] = "NONE";
    ErrorActions[ErrorActions["RESET"] = 1] = "RESET";
})(ErrorActions || (ErrorActions = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["OFFLINE"] = "No Connection Available";
    ErrorMessages["RESPONSE_ERROR"] = "Error With Providing Response";
})(ErrorMessages || (ErrorMessages = {}));
const newInitialState = {
    sidebarExpanded: true,
    requestInProcess: false,
    version: {
        semver: '',
        isNewAvailable: false,
        checkingForVersion: false
    },
    theme: _app_themes__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_THEME"],
    themes: _app_themes__WEBPACK_IMPORTED_MODULE_1__["Themes"].sort(),
    error: {
        message: '',
        show: false,
        action: ErrorActions.NONE
    }
};
const initialState = Object(_store_utils__WEBPACK_IMPORTED_MODULE_2__["migrateReducerState"])('appLayout', newInitialState, localStorage);
function appCore(state = initialState, action) {
    switch (action.type) {
        case _app_core_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIDEBAR_EXPAND:
            return Object.assign({}, state, { sidebarExpanded: true });
        case _app_core_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIDEBAR_COLLAPSE:
            return Object.assign({}, state, { sidebarExpanded: false });
        case _app_core_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SIDEBAR_TOGGLE:
            return Object.assign({}, state, { sidebarExpanded: !state.sidebarExpanded });
        case _app_core_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].APP_VERSION_RECIEVED: {
            const version = getVersion(state, action.payload);
            return Object.assign({}, state, { version });
        }
        case _app_core_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].APP_CHECK_VERSION: {
            const version = Object.assign({}, state.version, { checkingForVersion: true });
            return Object.assign({}, state, { version });
        }
        case _app_core_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].APP_THEME_CHANGE: {
            return Object.assign({}, state, { theme: action.payload });
        }
        case _app_core_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ERROR_ADD: {
            const { payload: { message } } = action;
            return Object.assign({}, state, { error: {
                    message,
                    show: true,
                    action: ErrorActions.RELOAD
                } });
        }
        case _app_core_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ERROR_CLEAN: {
            return Object.assign({}, state, { error: Object.assign({}, initialState.error) });
        }
        case _app_core_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].TOGGLE_ERROR: {
            return Object.assign({}, state, { error: Object.assign({}, initialState.error, { show: false }) });
        }
        default:
            return Object.assign({}, initialState, state, { themes: _app_themes__WEBPACK_IMPORTED_MODULE_1__["Themes"].sort() });
    }
}
function getSidebarExpanded($state) {
    return $state.select(state => state.sidebarExpanded);
}
function getVersion(state, packageJson) {
    const currentVersion = state.version.semver;
    const remoteVersion = packageJson.version;
    const version = {
        semver: '',
        isNewAvailable: state.version.isNewAvailable,
        checkingForVersion: false
    };
    const isCurrentVersionEmpty = '' === currentVersion;
    const isCurrentDifferentFromRemote = !isCurrentVersionEmpty && currentVersion !== remoteVersion;
    if (isCurrentVersionEmpty) {
        version.semver = remoteVersion;
    }
    if (isCurrentDifferentFromRemote && !version.isNewAvailable) {
        version.semver = currentVersion;
        version.isNewAvailable = true;
    }
    else {
        // upgrade is completed
        version.semver = remoteVersion;
        version.isNewAvailable = false;
    }
    return version;
}


/***/ }),

/***/ "./src/app/core/store/app-core/app-core.selectors.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/store/app-core/app-core.selectors.ts ***!
  \***********************************************************/
/*! exports provided: getAppCore, getAppTheme, getAllAppThemes, getAppThemes, getAppVersion, getSidebarCollapsed, selectError, selectErrorMessage, selectIsErrorShow, selectErrorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppCore", function() { return getAppCore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppTheme", function() { return getAppTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAppThemes", function() { return getAllAppThemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppThemes", function() { return getAppThemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppVersion", function() { return getAppVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSidebarCollapsed", function() { return getSidebarCollapsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectErrorMessage", function() { return selectErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsErrorShow", function() { return selectIsErrorShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectErrorAction", function() { return selectErrorAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const getAppCore = (state) => state.appCore;
const getAppTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppCore, (state) => state.theme);
const getAllAppThemes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppCore, (state) => state.themes);
const getAppThemes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppCore, getAppTheme, getAllAppThemes, (appLayout, theme, themes) => ({
    selected: theme,
    themes: themes.map(_theme => ({ label: _theme, value: _theme }))
}));
const getAppVersion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppCore, (state) => state.version);
const getSidebarCollapsed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppCore, (state) => !state.sidebarExpanded);
const selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppCore, (state) => state.error);
const selectErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectError, (error) => error.message);
const selectIsErrorShow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectError, (error) => error.show);
const selectErrorAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectError, (error) => error.action);


/***/ }),

/***/ "./src/app/core/store/app-core/index.ts":
/*!**********************************************!*\
  !*** ./src/app/core/store/app-core/index.ts ***!
  \**********************************************/
/*! exports provided: ErrorActions, ErrorMessages, appCore, getSidebarExpanded, ActionTypes, RecievedAppVersion, UpdateAppVersion, CheckVersion, ExpandSidebar, CollapseSidebar, ToggleSidebar, ThemeChange, AddError, ToggleError, CleanError, getAppCore, getAppTheme, getAllAppThemes, getAppThemes, getAppVersion, getSidebarCollapsed, selectError, selectErrorMessage, selectIsErrorShow, selectErrorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_core_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-core.reducer */ "./src/app/core/store/app-core/app-core.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorActions", function() { return _app_core_reducer__WEBPACK_IMPORTED_MODULE_0__["ErrorActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return _app_core_reducer__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appCore", function() { return _app_core_reducer__WEBPACK_IMPORTED_MODULE_0__["appCore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSidebarExpanded", function() { return _app_core_reducer__WEBPACK_IMPORTED_MODULE_0__["getSidebarExpanded"]; });

/* harmony import */ var _app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-core.actions */ "./src/app/core/store/app-core/app-core.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecievedAppVersion", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["RecievedAppVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateAppVersion", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateAppVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckVersion", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["CheckVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandSidebar", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["ExpandSidebar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseSidebar", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["CollapseSidebar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleSidebar", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleSidebar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeChange", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["ThemeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddError", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["AddError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleError", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CleanError", function() { return _app_core_actions__WEBPACK_IMPORTED_MODULE_1__["CleanError"]; });

/* harmony import */ var _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-core.selectors */ "./src/app/core/store/app-core/app-core.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppCore", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["getAppCore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppTheme", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["getAppTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllAppThemes", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["getAllAppThemes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppThemes", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["getAppThemes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppVersion", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["getAppVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSidebarCollapsed", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["getSidebarCollapsed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["selectError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectErrorMessage", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["selectErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsErrorShow", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["selectIsErrorShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectErrorAction", function() { return _app_core_selectors__WEBPACK_IMPORTED_MODULE_2__["selectErrorAction"]; });






/***/ }),

/***/ "./src/app/core/store/app-player/app-player.actions.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/store/app-player/app-player.actions.ts ***!
  \*************************************************************/
/*! exports provided: ActionTypes, PlayVideo, PauseVideo, TogglePlayer, LoadNextTrack, LoadAndPlay, PlayStarted, UpdateState, FullScreen, ResetFullScreen, Reset, SetupPlayer, PlayerStateChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayVideo", function() { return PlayVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseVideo", function() { return PauseVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglePlayer", function() { return TogglePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadNextTrack", function() { return LoadNextTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAndPlay", function() { return LoadAndPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayStarted", function() { return PlayStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateState", function() { return UpdateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreen", function() { return FullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetFullScreen", function() { return ResetFullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupPlayer", function() { return SetupPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStateChange", function() { return PlayerStateChange; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ActionTypes = class ActionTypes {
};
ActionTypes.PLAY = '[Player] PLAY';
ActionTypes.PAUSE = '[Player] PAUSE';
ActionTypes.SETUP_PLAYER = '[Player] SETUP_PLAYER';
ActionTypes.LOAD_AND_PLAY = '[Player] LOAD_AND_PLAY';
ActionTypes.QUEUE = '[Player] REMOVE';
ActionTypes.PLAY_STARTED = '[Player] PLAY_STARTED';
ActionTypes.TOGGLE_PLAYER = '[Player] TOGGLE_PLAYER';
ActionTypes.UPDATE_STATE = '[Player] STATE_CHANGE';
ActionTypes.PLAYER_STATE_CHANGE = '[Player] PLAYER_STATE_CHANGE';
ActionTypes.FULLSCREEN = '[Player] FULLSCREEN';
ActionTypes.RESET = '[Player] RESET';
ActionTypes.LOAD_NEXT_TRACK = '[Player] LOAD_NEXT_TRACK';
ActionTypes.RESET_FULLSCREEN = '[Player] RESET_FULLSCREEN';
ActionTypes = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], ActionTypes);

class PlayVideo {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.PLAY;
    }
}
class PauseVideo {
    constructor(payload = '') {
        this.payload = payload;
        this.type = ActionTypes.PAUSE;
    }
}
class TogglePlayer {
    constructor(payload = true) {
        this.payload = payload;
        this.type = ActionTypes.TOGGLE_PLAYER;
    }
}
class LoadNextTrack {
    constructor() {
        this.type = ActionTypes.LOAD_NEXT_TRACK;
        this.payload = '';
    }
}
class LoadAndPlay {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_AND_PLAY;
    }
}
class PlayStarted {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.PLAY_STARTED;
    }
}
class UpdateState {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_STATE;
    }
}
class FullScreen {
    constructor() {
        this.type = ActionTypes.FULLSCREEN;
        this.payload = '';
    }
}
class ResetFullScreen {
    constructor() {
        this.type = ActionTypes.RESET_FULLSCREEN;
        this.payload = '';
    }
}
class Reset {
    constructor() {
        this.type = ActionTypes.RESET;
        this.payload = '';
    }
}
class SetupPlayer {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SETUP_PLAYER;
    }
}
class PlayerStateChange {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.PLAYER_STATE_CHANGE;
    }
}


/***/ }),

/***/ "./src/app/core/store/app-player/app-player.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/store/app-player/app-player.reducer.ts ***!
  \*************************************************************/
/*! exports provided: player, playVideo, toggleVisibility, changePlayerState, ActionTypes, PlayVideo, PauseVideo, TogglePlayer, LoadNextTrack, LoadAndPlay, PlayStarted, UpdateState, FullScreen, ResetFullScreen, Reset, SetupPlayer, PlayerStateChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playVideo", function() { return playVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleVisibility", function() { return toggleVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayerState", function() { return changePlayerState; });
/* harmony import */ var _app_player_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-player.actions */ "./src/app/core/store/app-player/app-player.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayVideo", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["PlayVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PauseVideo", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["PauseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TogglePlayer", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["TogglePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadNextTrack", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["LoadNextTrack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAndPlay", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["LoadAndPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayStarted", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["PlayStarted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateState", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullScreen", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["FullScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetFullScreen", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["ResetFullScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["Reset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetupPlayer", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["SetupPlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerStateChange", function() { return _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["PlayerStateChange"]; });



const initialPlayerState = {
    index: 0,
    media: {
        snippet: { title: 'No Media Yet', thumbnails: { default: { url: '' } } }
    },
    showPlayer: true,
    playerState: 0,
    fullscreen: {
        on: false,
        height: 270,
        width: 367
    },
    isFullscreen: false
};
function player(state = initialPlayerState, action) {
    switch (action.type) {
        case _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PLAY:
            return playVideo(state, action.payload);
        case _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].QUEUE:
            return state;
        case _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].TOGGLE_PLAYER:
            return toggleVisibility(state);
        case _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].UPDATE_STATE:
            return changePlayerState(state, action.payload);
        case _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].FULLSCREEN: {
            const on = !state.fullscreen.on;
            let { height, width } = initialPlayerState.fullscreen;
            if (on) {
                height = window.innerHeight;
                width = window.innerWidth;
            }
            const fullscreen = { on, height, width };
            return Object.assign({}, state, { fullscreen });
        }
        case _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].RESET:
            return Object.assign({}, state, { isFullscreen: false, playerState: 0 });
        case _app_player_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].RESET_FULLSCREEN: {
            const fullscreen = initialPlayerState.fullscreen;
            return Object.assign({}, initialPlayerState, state, { fullscreen });
        }
        default:
            return Object.assign({}, initialPlayerState, state);
    }
}
function playVideo(state, media) {
    return Object.assign({}, state, { mediaId: media.id || '', media });
}
function toggleVisibility(state) {
    return Object.assign({}, state, { showPlayer: !state.showPlayer });
}
function changePlayerState(state, playerState) {
    return Object.assign({}, state, { playerState: playerState });
}


/***/ }),

/***/ "./src/app/core/store/app-player/app-player.selectors.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/store/app-player/app-player.selectors.ts ***!
  \***************************************************************/
/*! exports provided: getPlayer, getCurrentMedia, getIsPlayerPlaying, getShowPlayer, getPlayerFullscreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayer", function() { return getPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentMedia", function() { return getCurrentMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsPlayerPlaying", function() { return getIsPlayerPlaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowPlayer", function() { return getShowPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayerFullscreen", function() { return getPlayerFullscreen; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const getPlayer = (state) => state.player;
const getCurrentMedia = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayer, (player) => player.media);
const getIsPlayerPlaying = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayer, (player) => player.playerState === 1);
const getShowPlayer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayer, (player) => player.showPlayer);
const getPlayerFullscreen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayer, (player) => player.fullscreen);


/***/ }),

/***/ "./src/app/core/store/app-player/index.ts":
/*!************************************************!*\
  !*** ./src/app/core/store/app-player/index.ts ***!
  \************************************************/
/*! exports provided: player, playVideo, toggleVisibility, changePlayerState, ActionTypes, PlayVideo, PauseVideo, TogglePlayer, LoadNextTrack, LoadAndPlay, PlayStarted, UpdateState, FullScreen, ResetFullScreen, Reset, SetupPlayer, PlayerStateChange, getPlayer, getCurrentMedia, getIsPlayerPlaying, getShowPlayer, getPlayerFullscreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-player.reducer */ "./src/app/core/store/app-player/app-player.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "player", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["player"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playVideo", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["playVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleVisibility", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["toggleVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changePlayerState", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["changePlayerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayVideo", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["PlayVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PauseVideo", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["PauseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TogglePlayer", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["TogglePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadNextTrack", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["LoadNextTrack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAndPlay", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["LoadAndPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayStarted", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["PlayStarted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateState", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["UpdateState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullScreen", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["FullScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetFullScreen", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["ResetFullScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["Reset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetupPlayer", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["SetupPlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerStateChange", function() { return _app_player_reducer__WEBPACK_IMPORTED_MODULE_0__["PlayerStateChange"]; });

/* harmony import */ var _app_player_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-player.actions */ "./src/app/core/store/app-player/app-player.actions.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _app_player_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-player.selectors */ "./src/app/core/store/app-player/app-player.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlayer", function() { return _app_player_selectors__WEBPACK_IMPORTED_MODULE_2__["getPlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentMedia", function() { return _app_player_selectors__WEBPACK_IMPORTED_MODULE_2__["getCurrentMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsPlayerPlaying", function() { return _app_player_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsPlayerPlaying"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowPlayer", function() { return _app_player_selectors__WEBPACK_IMPORTED_MODULE_2__["getShowPlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlayerFullscreen", function() { return _app_player_selectors__WEBPACK_IMPORTED_MODULE_2__["getPlayerFullscreen"]; });






/***/ }),

/***/ "./src/app/core/store/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/store/index.ts ***!
  \*************************************/
/*! exports provided: localStorageSyncReducer, CoreStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreStoreModule", function() { return CoreStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-localstorage */ "./node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/app/core/store/reducers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';


function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__["localStorageSync"])({
        keys: Object.keys(_reducers__WEBPACK_IMPORTED_MODULE_5__["EchoesReducers"]),
        rehydrate: true
    })(reducer);
}
const metaReducers = [localStorageSyncReducer];
const optionalImports = [];
if (!_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    // Note that you must instrument after importing StoreModule
    optionalImports.push(_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"].instrument({ maxAge: 25 }));
}
let CoreStoreModule = class CoreStoreModule {
};
CoreStoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_5__["EchoesReducers"], { metaReducers }),
            // StoreRouterConnectingModule,
            ...optionalImports
        ],
        declarations: [],
        exports: [],
        providers: [
            ..._reducers__WEBPACK_IMPORTED_MODULE_5__["EchoesActions"]
            // { provide: RouterStateSerializer, useClass: NavigationSerializer }
        ]
    })
], CoreStoreModule);



/***/ }),

/***/ "./src/app/core/store/now-playlist/index.ts":
/*!**************************************************!*\
  !*** ./src/app/core/store/now-playlist/index.ts ***!
  \**************************************************/
/*! exports provided: getNowPlaylist, isPlayerInRepeat, getPlaylistVideos, getPlaylistMediaIds, getSelectedMediaId, getSelectedMedia, nowPlaylist, ActionTypes, SeekTo, QueueLoadVideo, UpdateIndexByMedia, QueueFailed, QueueVideo, QueueVideos, RemoveVideo, FilterChange, SelectVideo, PlayPlaylistAction, PlayPlaylistStartAction, LoadPlaylistAction, LoadPlaylistEndAction, MediaEnded, SelectNext, SelectPrevious, RemoveAll, ToggleRepeat, PlayerStateChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _now_playlist_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now-playlist.reducer */ "./src/app/core/store/now-playlist/now-playlist.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nowPlaylist", function() { return _now_playlist_reducer__WEBPACK_IMPORTED_MODULE_0__["nowPlaylist"]; });

/* harmony import */ var _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now-playlist.actions */ "./src/app/core/store/now-playlist/now-playlist.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeekTo", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["SeekTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueueLoadVideo", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["QueueLoadVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateIndexByMedia", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateIndexByMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueueFailed", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["QueueFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueueVideo", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["QueueVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueueVideos", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["QueueVideos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveVideo", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["RemoveVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterChange", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["FilterChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectVideo", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["SelectVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayPlaylistAction", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["PlayPlaylistAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayPlaylistStartAction", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["PlayPlaylistStartAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadPlaylistAction", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["LoadPlaylistAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadPlaylistEndAction", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["LoadPlaylistEndAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaEnded", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["MediaEnded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectNext", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["SelectNext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectPrevious", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["SelectPrevious"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveAll", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["RemoveAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleRepeat", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleRepeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerStateChange", function() { return _now_playlist_actions__WEBPACK_IMPORTED_MODULE_1__["PlayerStateChange"]; });

/* harmony import */ var _now_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./now-playlist.selectors */ "./src/app/core/store/now-playlist/now-playlist.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNowPlaylist", function() { return _now_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__["getNowPlaylist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlayerInRepeat", function() { return _now_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__["isPlayerInRepeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaylistVideos", function() { return _now_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__["getPlaylistVideos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaylistMediaIds", function() { return _now_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__["getPlaylistMediaIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedMediaId", function() { return _now_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedMediaId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedMedia", function() { return _now_playlist_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedMedia"]; });






/***/ }),

/***/ "./src/app/core/store/now-playlist/now-playlist.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/store/now-playlist/now-playlist.actions.ts ***!
  \*****************************************************************/
/*! exports provided: ActionTypes, SeekTo, QueueLoadVideo, UpdateIndexByMedia, QueueFailed, QueueVideo, QueueVideos, RemoveVideo, FilterChange, SelectVideo, PlayPlaylistAction, PlayPlaylistStartAction, LoadPlaylistAction, LoadPlaylistEndAction, MediaEnded, SelectNext, SelectPrevious, RemoveAll, ToggleRepeat, PlayerStateChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekTo", function() { return SeekTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueLoadVideo", function() { return QueueLoadVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIndexByMedia", function() { return UpdateIndexByMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueFailed", function() { return QueueFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueVideo", function() { return QueueVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueVideos", function() { return QueueVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveVideo", function() { return RemoveVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterChange", function() { return FilterChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVideo", function() { return SelectVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPlaylistAction", function() { return PlayPlaylistAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPlaylistStartAction", function() { return PlayPlaylistStartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPlaylistAction", function() { return LoadPlaylistAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPlaylistEndAction", function() { return LoadPlaylistEndAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaEnded", function() { return MediaEnded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectNext", function() { return SelectNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPrevious", function() { return SelectPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAll", function() { return RemoveAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleRepeat", function() { return ToggleRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStateChange", function() { return PlayerStateChange; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["QUEUE_LOAD_VIDEO"] = "[NowPlaylist] QUEUE_LOAD_VIDEO";
    ActionTypes["QUEUE"] = "[NowPlaylist] QUEUE";
    ActionTypes["QUEUE_LOAD_VIDEO_SUCCESS"] = "[NowPlaylist] QUEUE_LOAD_VIDEO_SUCCESS";
    ActionTypes["SELECT"] = "[NowPlaylist] SELECT";
    ActionTypes["REMOVE"] = "[NowPlaylist] REMOVE";
    ActionTypes["UPDATE_INDEX"] = "[NowPlaylist] UPDATE_INDEX";
    ActionTypes["QUEUE_FAILED"] = "[NowPlaylist] QUEUE_FAILED";
    ActionTypes["FILTER_CHANGE"] = "[NowPlaylist] FILTER_CHANGE";
    ActionTypes["REMOVE_ALL"] = "[NowPlaylist] REMOVE_ALL";
    ActionTypes["SELECT_NEXT"] = "[NowPlaylist] SELECT_NEXT";
    ActionTypes["SELECT_PREVIOUS"] = "[NowPlaylist] SELECT_PREVIOUS";
    ActionTypes["QUEUE_VIDEOS"] = "[NowPlaylist] QUEUE_VIDEOS";
    ActionTypes["MEDIA_ENDED"] = "[NowPlaylist] MEDIA_ENDED";
    ActionTypes["TOGGLE_REPEAT"] = "[NowPlaylist] TOGGLE_REPEAT";
    ActionTypes["SELECT_AND_SEEK_TO_TIME"] = "[NowPlaylist] SELECT_AND_SEEK_TO_TIME";
    ActionTypes["LOAD_PLAYLIST_START"] = "[NowPlaylist] LOAD_PLAYLIST_START";
    ActionTypes["LOAD_PLAYLIST_END"] = "[NowPlaylist] LOAD_PLAYLIST_END";
    ActionTypes["PLAY_PLAYLIST"] = "[NowPlaylist] PLAY_PLAYLIST";
    ActionTypes["PLAY_PLAYLIST_START"] = "[NowPlaylist] PLAY_PLAYLIST_START";
    ActionTypes["PLAYER_STATE_CHANGE"] = "[NowPlaylist] PLAYER_STATE_CHANGE";
})(ActionTypes || (ActionTypes = {}));
class SeekTo {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SELECT_AND_SEEK_TO_TIME;
    }
}
class QueueLoadVideo {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.QUEUE_LOAD_VIDEO;
    }
}
class UpdateIndexByMedia {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_INDEX;
    }
}
class QueueFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.QUEUE_FAILED;
    }
}
class QueueVideo {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.QUEUE;
    }
}
class QueueVideos {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.QUEUE_VIDEOS;
    }
}
class RemoveVideo {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE;
    }
}
class FilterChange {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.FILTER_CHANGE;
    }
}
class SelectVideo {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SELECT;
    }
}
class PlayPlaylistAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.PLAY_PLAYLIST;
    }
}
class PlayPlaylistStartAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.PLAY_PLAYLIST_START;
    }
}
class LoadPlaylistAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_PLAYLIST_START;
    }
}
class LoadPlaylistEndAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_PLAYLIST_END;
    }
}
class MediaEnded {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.MEDIA_ENDED;
    }
}
class SelectNext {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SELECT_NEXT;
    }
}
class SelectPrevious {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SELECT_PREVIOUS;
    }
}
class RemoveAll {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_ALL;
    }
}
class ToggleRepeat {
    constructor(payload = '') {
        this.payload = payload;
        this.type = ActionTypes.TOGGLE_REPEAT;
    }
}
class PlayerStateChange {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.PLAYER_STATE_CHANGE;
    }
}


/***/ }),

/***/ "./src/app/core/store/now-playlist/now-playlist.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/store/now-playlist/now-playlist.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: nowPlaylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowPlaylist", function() { return nowPlaylist; });
/* harmony import */ var _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now-playlist.actions */ "./src/app/core/store/now-playlist/now-playlist.actions.ts");

const initialState = {
    videos: [],
    selectedId: '',
    filter: '',
    repeat: false
};
function nowPlaylist(state = initialState, action) {
    switch (action.type) {
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SELECT:
            return Object.assign({}, state, { selectedId: action.payload.id });
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].QUEUE:
            return Object.assign({}, state, { videos: addMedia(state.videos, action.payload) });
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].QUEUE_VIDEOS:
            return Object.assign({}, state, { videos: addMedias(state.videos, action.payload) });
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].REMOVE:
            return Object.assign({}, state, { videos: removeMedia(state.videos, action.payload) });
        // updates index by media
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].UPDATE_INDEX:
            return Object.assign({}, state, { selectedId: action.payload });
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].FILTER_CHANGE:
            return Object.assign({}, state, { filter: action.payload });
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].REMOVE_ALL:
            return Object.assign({}, state, { videos: [], filter: '', selectedId: '' });
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SELECT_NEXT: {
            return Object.assign({}, state, { selectedId: selectNextIndex(state.videos, state.selectedId, state.filter, state.repeat) });
        }
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SELECT_PREVIOUS:
            return Object.assign({}, state, { selectedId: selectPreviousIndex(state.videos, state.selectedId, state.filter) });
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].MEDIA_ENDED:
            return selectNextOrPreviousTrack(state, state.filter);
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].TOGGLE_REPEAT: {
            return Object.assign({}, state, { repeat: !state.repeat });
        }
        case _now_playlist_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOAD_PLAYLIST_END: {
            return Object.assign({}, state);
        }
        default:
            return state;
    }
}
function addMedia(videos, media) {
    const newMedia = videos.findIndex(video => video.id === media.id);
    const newMedias = [];
    if (newMedia === -1) {
        newMedias.push(media);
    }
    return [...videos, ...newMedias];
}
function addMedias(videos, medias) {
    const allVideoIds = videos.map(video => video.id);
    const newVideos = medias.filter(media => !allVideoIds.includes(media.id));
    return [...videos, ...newVideos];
}
function filterVideos(videos, filter) {
    const sanitizedFilter = filter.toLowerCase();
    return videos.filter(video => JSON.stringify(video)
        .toLowerCase()
        .includes(sanitizedFilter));
}
function getSelectedInFilteredVideos(videos, filter, selectedId) {
    const filteredVideos = filterVideos(videos, filter);
    const currentIndex = filteredVideos.findIndex(video => video.id === selectedId);
    return {
        filteredVideos,
        currentIndex
    };
}
function selectNextIndex(videos, selectedId, filter, isRepeat) {
    const { filteredVideos, currentIndex } = getSelectedInFilteredVideos(videos, filter, selectedId);
    let nextIndex = currentIndex + 1;
    if (!filteredVideos.length) {
        nextIndex = 0;
    }
    if (filteredVideos.length === nextIndex) {
        nextIndex = isRepeat ? 0 : currentIndex;
    }
    return filteredVideos[nextIndex].id || '';
}
function selectPreviousIndex(videos, selectedId, filter) {
    const { filteredVideos, currentIndex } = getSelectedInFilteredVideos(videos, filter, selectedId);
    let previousIndex = currentIndex - 1;
    if (!filteredVideos.length || previousIndex < 0) {
        previousIndex = 0;
    }
    return filteredVideos[previousIndex].id || '';
}
function selectNextOrPreviousTrack(state, filter) {
    const { videos, selectedId, repeat } = state;
    const { filteredVideos, currentIndex } = getSelectedInFilteredVideos(videos, filter, selectedId);
    const isCurrentLast = currentIndex + 1 === filteredVideos.length;
    const nextId = isCurrentLast
        ? getNextIdForPlaylist(filteredVideos, repeat, selectedId)
        : selectNextIndex(filteredVideos, selectedId, filter, repeat);
    return Object.assign({}, state, { selectedId: nextId });
}
function getNextIdForPlaylist(videos, repeat, currentId = '') {
    let id = '';
    if (videos.length && repeat) {
        id = videos[0].id;
    }
    return id;
}
function removeMedia(videos, media) {
    return videos.filter((_media) => _media.id !== media.id);
}


/***/ }),

/***/ "./src/app/core/store/now-playlist/now-playlist.selectors.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/store/now-playlist/now-playlist.selectors.ts ***!
  \*******************************************************************/
/*! exports provided: getNowPlaylist, isPlayerInRepeat, getPlaylistVideos, getPlaylistMediaIds, getSelectedMediaId, getSelectedMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNowPlaylist", function() { return getNowPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlayerInRepeat", function() { return isPlayerInRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaylistVideos", function() { return getPlaylistVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaylistMediaIds", function() { return getPlaylistMediaIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedMediaId", function() { return getSelectedMediaId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedMedia", function() { return getSelectedMedia; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const getNowPlaylist = (state) => state.nowPlaylist;
const isPlayerInRepeat = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNowPlaylist, (nowPlaylist) => nowPlaylist.repeat);
const getPlaylistVideos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNowPlaylist, (nowPlaylist) => nowPlaylist.videos);
const getPlaylistMediaIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlaylistVideos, (playlist) => playlist.map(media => media.id));
const getSelectedMediaId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNowPlaylist, (nowPlaylist) => nowPlaylist.selectedId);
const getSelectedMedia = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNowPlaylist, getSelectedMediaId, (nowPlaylist, selectedId) => {
    const mediaIds = nowPlaylist.videos.map(video => video.id);
    const selectedMediaIndex = mediaIds.indexOf(selectedId);
    return nowPlaylist.videos[selectedMediaIndex];
});


/***/ }),

/***/ "./src/app/core/store/player-search/index.ts":
/*!***************************************************!*\
  !*** ./src/app/core/store/player-search/index.ts ***!
  \***************************************************/
/*! exports provided: search, ActionTypes, PlayerSearchActions, UpdateQueryAction, UpdateSearchType, SearchCurrentQuery, AddResultsAction, getPlayerSearch, getPlayerSearchResults, getQuery, getQueryParams, getQueryParamPreset, getSearchType, getIsSearching, getPresets, CSearchTypes, CPresetTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_search_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-search.reducer */ "./src/app/core/store/player-search/player-search.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "search", function() { return _player_search_reducer__WEBPACK_IMPORTED_MODULE_0__["search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSearchTypes", function() { return _player_search_reducer__WEBPACK_IMPORTED_MODULE_0__["CSearchTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CPresetTypes", function() { return _player_search_reducer__WEBPACK_IMPORTED_MODULE_0__["CPresetTypes"]; });

/* harmony import */ var _player_search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-search.actions */ "./src/app/core/store/player-search/player-search.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _player_search_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchActions", function() { return _player_search_actions__WEBPACK_IMPORTED_MODULE_1__["PlayerSearchActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateQueryAction", function() { return _player_search_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateQueryAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateSearchType", function() { return _player_search_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateSearchType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchCurrentQuery", function() { return _player_search_actions__WEBPACK_IMPORTED_MODULE_1__["SearchCurrentQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddResultsAction", function() { return _player_search_actions__WEBPACK_IMPORTED_MODULE_1__["AddResultsAction"]; });

/* harmony import */ var _player_search_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-search.selectors */ "./src/app/core/store/player-search/player-search.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlayerSearch", function() { return _player_search_selectors__WEBPACK_IMPORTED_MODULE_2__["getPlayerSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlayerSearchResults", function() { return _player_search_selectors__WEBPACK_IMPORTED_MODULE_2__["getPlayerSearchResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return _player_search_selectors__WEBPACK_IMPORTED_MODULE_2__["getQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryParams", function() { return _player_search_selectors__WEBPACK_IMPORTED_MODULE_2__["getQueryParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryParamPreset", function() { return _player_search_selectors__WEBPACK_IMPORTED_MODULE_2__["getQueryParamPreset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchType", function() { return _player_search_selectors__WEBPACK_IMPORTED_MODULE_2__["getSearchType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsSearching", function() { return _player_search_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsSearching"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPresets", function() { return _player_search_selectors__WEBPACK_IMPORTED_MODULE_2__["getPresets"]; });






/***/ }),

/***/ "./src/app/core/store/player-search/player-search.actions.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/store/player-search/player-search.actions.ts ***!
  \*******************************************************************/
/*! exports provided: ActionTypes, PlayerSearchActions, UpdateQueryAction, UpdateSearchType, SearchCurrentQuery, AddResultsAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchActions", function() { return PlayerSearchActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQueryAction", function() { return UpdateQueryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSearchType", function() { return UpdateSearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCurrentQuery", function() { return SearchCurrentQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResultsAction", function() { return AddResultsAction; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-action-creator-factory */ "./node_modules/ngrx-action-creator-factory/ngrx-action-creator-factory.js");
/* harmony import */ var ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PlayerSearchActions_1;


var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD"] = "[Videos] ADD";
    ActionTypes["SET_SELECTED_VIDEO"] = "[Videos] SET_SELECTED_VIDEO";
    ActionTypes["UPDATE_FILTER"] = "[PlayerSearch] UPDATE_FILTER";
    ActionTypes["UPDATE_QUERY_PARAM"] = "[PlayerSearch] UPDATE_QUERY_PARAM";
    ActionTypes["UPDATE_QUERY"] = "[PlayerSearch] UPDATE_QUERY";
    ActionTypes["SEARCH_NEW_QUERY"] = "[PlayerSearch] SEARCH_NEW_QUERY";
    ActionTypes["SEARCH_MORE_FOR_QUERY"] = "[PlayerSearch] SEARCH_MORE_FOR_QUERY";
    ActionTypes["GET_SUGGESTIONS"] = "[PlayerSearch] GET_SUGGESTIONS";
    ActionTypes["RESET_PAGE_TOKEN"] = "[PlayerSearch] RESET_PAGE_TOKEN";
    ActionTypes["SEARCH_RESULTS_RETURNED"] = "[PlayerSearch] SERACH_RESULTS_RETURNED";
    ActionTypes["SEARCH_CURRENT_QUERY"] = "[PlayerSearch] SEARCH_CURRENT_QUERY";
    ActionTypes["SEARCH_STARTED"] = "[PlayerSearch] SEARCH_STARTED";
    ActionTypes["SEARCH_TYPE_UPDATE"] = "[PlayerSearch] SEARCH_TYPE_UPDATE";
    ActionTypes["ADD_PLAYLISTS_TO_RESULTS"] = "[PlayerSearch] ADD_PLAYLISTS_TO_RESULTS";
    ActionTypes["ADD_METADATA_TO_VIDEOS"] = "[PlayerSearch] ADD_METADATA_TO_VIDEOS";
    ActionTypes["PLAYLISTS_SEARCH_START"] = "[PlayerSearch] PLAYLISTS_SEARCH_START";
    ActionTypes["ADD_RESULTS"] = "[PlayerSearch] ADD_RESULTS";
    ActionTypes["RESET_RESULTS"] = "[PlayerSearch] RESET_RESULTS";
    ActionTypes["ERROR_RESULTS"] = "[PlayerSearch] ERROR_RESULTS";
})(ActionTypes || (ActionTypes = {}));
let PlayerSearchActions = PlayerSearchActions_1 = class PlayerSearchActions {
    constructor() {
        this.getSuggestions = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.GET_SUGGESTIONS);
        this.searchNewQuery = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.SEARCH_NEW_QUERY);
        this.searchMoreForQuery = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.SEARCH_MORE_FOR_QUERY);
        this.updateFilter = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.UPDATE_FILTER);
        this.updateQueryParam = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.UPDATE_QUERY_PARAM);
        this.resetPageToken = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.RESET_PAGE_TOKEN);
        this.searchResultsReturned = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.SEARCH_RESULTS_RETURNED);
        this.searchStarted = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.SEARCH_STARTED);
        // addResults = ActionCreatorFactory.create(PlayerSearchActions.ADD_RESULTS);
        this.resetResults = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.RESET_RESULTS);
        this.errorInSearch = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_1__["ActionCreatorFactory"].create(PlayerSearchActions_1.ERROR_RESULTS);
    }
};
// @ActionCreator({
//   type: 'UPDATE_FILTER',
//   payload: string
// })
// @ActionCreator<string>(PlayerSearchActions.UPDATE_FILTER)
// update;
PlayerSearchActions.UPDATE_FILTER = '[PlayerSearch] UPDATE_FILTER';
PlayerSearchActions.UPDATE_QUERY_PARAM = '[PlayerSearch] UPDATE_QUERY_PARAM';
PlayerSearchActions.UPDATE_QUERY = '[PlayerSearch] UPDATE_QUERY';
PlayerSearchActions.SEARCH_NEW_QUERY = '[PlayerSearch] SEARCH_NEW_QUERY';
PlayerSearchActions.SEARCH_MORE_FOR_QUERY = '[PlayerSearch] SEARCH_MORE_FOR_QUERY';
PlayerSearchActions.GET_SUGGESTIONS = '[PlayerSearch] GET_SUGGESTIONS';
PlayerSearchActions.RESET_PAGE_TOKEN = '[PlayerSearch] RESET_PAGE_TOKEN';
PlayerSearchActions.SEARCH_RESULTS_RETURNED = '[PlayerSearch] SERACH_RESULTS_RETURNED';
PlayerSearchActions.SEARCH_CURRENT_QUERY = '[PlayerSearch] SEARCH_CURRENT_QUERY';
PlayerSearchActions.SEARCH_STARTED = '[PlayerSearch] SEARCH_STARTED';
PlayerSearchActions.SEARCH_TYPE_UPDATE = '[PlayerSearch] SEARCH_TYPE_UPDATE';
PlayerSearchActions.ADD_PLAYLISTS_TO_RESULTS = {
    action: '[PlayerSearch] ADD_PLAYLISTS_TO_RESULTS',
    creator: payload => ({
        payload,
        type: PlayerSearchActions_1.ADD_PLAYLISTS_TO_RESULTS.action
    })
};
PlayerSearchActions.ADD_METADATA_TO_VIDEOS = {
    action: '[PlayerSearch] ADD_METADATA_TO_VIDEOS',
    creator: payload => ({
        payload,
        type: PlayerSearchActions_1.ADD_METADATA_TO_VIDEOS.action
    })
};
PlayerSearchActions.PLAYLISTS_SEARCH_START = {
    action: '[PlayerSearch] PLAYLISTS_SEARCH_START',
    creator: () => ({ type: PlayerSearchActions_1.PLAYLISTS_SEARCH_START.action })
};
// Results Actions
PlayerSearchActions.ADD_RESULTS = '[PlayerSearch] ADD_RESULTS';
PlayerSearchActions.RESET_RESULTS = '[PlayerSearch] RESET_RESULTS';
PlayerSearchActions.ERROR_RESULTS = '[PlayerSearch] ERROR_RESULTS';
PlayerSearchActions = PlayerSearchActions_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], PlayerSearchActions);

class UpdateQueryAction {
    constructor(payload) {
        this.payload = payload;
        this.type = PlayerSearchActions.UPDATE_QUERY;
    }
}
class UpdateSearchType {
    constructor(payload) {
        this.payload = payload;
        this.type = PlayerSearchActions.SEARCH_TYPE_UPDATE;
    }
}
class SearchCurrentQuery {
    constructor() {
        this.type = PlayerSearchActions.SEARCH_CURRENT_QUERY;
    }
}
// export class AddResults implements Action {
//   readonly type = PlayerSearchActions.ADD_RESULTS;
//   constructor(public payload: GoogleApiYouTubeVideoResource[]) { }
// }
const AddResultsAction = {
    type: PlayerSearchActions.ADD_RESULTS,
    creator(payload) {
        return { payload, type: this.type };
    },
    handler(state, payload) {
        return Object.assign({}, state, { results: [...state.results, ...payload], isSearching: false });
    }
};


/***/ }),

/***/ "./src/app/core/store/player-search/player-search.interfaces.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/store/player-search/player-search.interfaces.ts ***!
  \**********************************************************************/
/*! exports provided: CSearchTypes, CPresetTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSearchTypes", function() { return CSearchTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPresetTypes", function() { return CPresetTypes; });
class CSearchTypes {
}
CSearchTypes.VIDEO = 'video';
CSearchTypes.PLAYLIST = 'playlist';
class CPresetTypes {
}
CPresetTypes.FULL_ALBUMS = 'full albums';
CPresetTypes.LIVE = 'live';


/***/ }),

/***/ "./src/app/core/store/player-search/player-search.reducer.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/store/player-search/player-search.reducer.ts ***!
  \*******************************************************************/
/*! exports provided: search, CSearchTypes, CPresetTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony import */ var _player_search_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-search.actions */ "./src/app/core/store/player-search/player-search.actions.ts");
/* harmony import */ var _player_search_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-search.interfaces */ "./src/app/core/store/player-search/player-search.interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSearchTypes", function() { return _player_search_interfaces__WEBPACK_IMPORTED_MODULE_1__["CSearchTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CPresetTypes", function() { return _player_search_interfaces__WEBPACK_IMPORTED_MODULE_1__["CPresetTypes"]; });




const initialState = {
    query: '',
    filter: '',
    searchType: _player_search_interfaces__WEBPACK_IMPORTED_MODULE_1__["CSearchTypes"].VIDEO,
    queryParams: {
        preset: '',
        duration: -1
    },
    presets: [
        { label: 'Any', value: '' },
        { label: 'Albums', value: _player_search_interfaces__WEBPACK_IMPORTED_MODULE_1__["CPresetTypes"].FULL_ALBUMS },
        { label: 'Live', value: _player_search_interfaces__WEBPACK_IMPORTED_MODULE_1__["CPresetTypes"].LIVE }
    ],
    pageToken: {
        next: '',
        prev: ''
    },
    isSearching: false,
    results: []
};
function search(state = initialState, action) {
    switch (action.type) {
        case _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["PlayerSearchActions"].UPDATE_QUERY: {
            return Object.assign({}, state, { query: action.payload });
        }
        case _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["PlayerSearchActions"].SEARCH_NEW_QUERY:
            return Object.assign({}, state, { query: action.payload, isSearching: true });
        case _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["PlayerSearchActions"].UPDATE_QUERY_PARAM:
            const queryParams = Object.assign({}, state.queryParams, action.payload);
            return Object.assign({}, state, { queryParams });
        case _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["PlayerSearchActions"].SEARCH_RESULTS_RETURNED:
            const { nextPageToken, prevPageToken } = action.payload;
            const statePageToken = state.pageToken;
            const pageToken = {
                next: nextPageToken || statePageToken.next,
                prev: prevPageToken || statePageToken.prev
            };
            return Object.assign({}, state, { pageToken });
        case _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["PlayerSearchActions"].SEARCH_STARTED:
            return Object.assign({}, state, { isSearching: true });
        case _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["AddResultsAction"].type:
            return _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["AddResultsAction"].handler(state, action.payload);
        case _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["PlayerSearchActions"].RESET_RESULTS:
            return Object.assign({}, state, { results: [] });
        case _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["PlayerSearchActions"].SEARCH_TYPE_UPDATE: {
            return Object.assign({}, state, { searchType: action.payload });
        }
        case _player_search_actions__WEBPACK_IMPORTED_MODULE_0__["PlayerSearchActions"].PLAYLISTS_SEARCH_START.action: {
            return Object.assign({}, state, { isSearching: true });
        }
        default:
            // upgrade policy - for when the initialState has changed
            return Object.assign({}, initialState, state);
    }
}


/***/ }),

/***/ "./src/app/core/store/player-search/player-search.selectors.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/store/player-search/player-search.selectors.ts ***!
  \*********************************************************************/
/*! exports provided: getPlayerSearch, getPlayerSearchResults, getQuery, getQueryParams, getQueryParamPreset, getSearchType, getIsSearching, getPresets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayerSearch", function() { return getPlayerSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayerSearchResults", function() { return getPlayerSearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return getQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParams", function() { return getQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParamPreset", function() { return getQueryParamPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchType", function() { return getSearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsSearching", function() { return getIsSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPresets", function() { return getPresets; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const getPlayerSearch = (state) => state.search;
const getPlayerSearchResults = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayerSearch, (search) => search.results);
const getQuery = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayerSearch, (search) => search.query);
const getQueryParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayerSearch, (search) => search.queryParams);
const getQueryParamPreset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayerSearch, getQueryParams, (search, queryParams) => queryParams.preset);
const getSearchType = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayerSearch, (search) => search.searchType);
const getIsSearching = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayerSearch, (search) => search.isSearching);
const getPresets = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayerSearch, (search) => search.presets);


/***/ }),

/***/ "./src/app/core/store/reducers.ts":
/*!****************************************!*\
  !*** ./src/app/core/store/reducers.ts ***!
  \****************************************/
/*! exports provided: EchoesReducers, EchoesActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchoesReducers", function() { return EchoesReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchoesActions", function() { return EchoesActions; });
/* harmony import */ var _app_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-player */ "./src/app/core/store/app-player/index.ts");
/* harmony import */ var _now_playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now-playlist */ "./src/app/core/store/now-playlist/index.ts");
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile */ "./src/app/core/store/user-profile/index.ts");
/* harmony import */ var _player_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-search */ "./src/app/core/store/player-search/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-core */ "./src/app/core/store/app-core/index.ts");
// import { routerReducer, RouterReducerState } from '@ngrx/router-store';
// reducers





let EchoesReducers = {
    player: _app_player__WEBPACK_IMPORTED_MODULE_0__["player"],
    nowPlaylist: _now_playlist__WEBPACK_IMPORTED_MODULE_1__["nowPlaylist"],
    user: _user_profile__WEBPACK_IMPORTED_MODULE_2__["user"],
    search: _player_search__WEBPACK_IMPORTED_MODULE_3__["search"],
    appCore: _app_core__WEBPACK_IMPORTED_MODULE_4__["appCore"]
    // routerReducer
};
let EchoesActions = [
    _app_player__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"],
    _user_profile__WEBPACK_IMPORTED_MODULE_2__["UserProfileActions"],
    _player_search__WEBPACK_IMPORTED_MODULE_3__["PlayerSearchActions"]
];


/***/ }),

/***/ "./src/app/core/store/router-store/index.ts":
/*!**************************************************!*\
  !*** ./src/app/core/store/router-store/index.ts ***!
  \**************************************************/
/*! exports provided: GO, BACK, FORWARD, Go, Back, Forward, NavigationSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-store.actions */ "./src/app/core/store/router-store/router-store.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return _router_store_actions__WEBPACK_IMPORTED_MODULE_0__["GO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return _router_store_actions__WEBPACK_IMPORTED_MODULE_0__["BACK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return _router_store_actions__WEBPACK_IMPORTED_MODULE_0__["FORWARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _router_store_actions__WEBPACK_IMPORTED_MODULE_0__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _router_store_actions__WEBPACK_IMPORTED_MODULE_0__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _router_store_actions__WEBPACK_IMPORTED_MODULE_0__["Forward"]; });

/* harmony import */ var _router_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router-store.reducer */ "./src/app/core/store/router-store/router-store.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationSerializer", function() { return _router_store_reducer__WEBPACK_IMPORTED_MODULE_1__["NavigationSerializer"]; });





/***/ }),

/***/ "./src/app/core/store/router-store/router-store.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/store/router-store/router-store.actions.ts ***!
  \*****************************************************************/
/*! exports provided: GO, BACK, FORWARD, Go, Back, Forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return GO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return Go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
const GO = '[Router] Go';
const BACK = '[Router] Back';
const FORWARD = '[Router] Forward';
class Go {
    constructor(payload) {
        this.payload = payload;
        this.type = GO;
    }
}
class Back {
    constructor() {
        this.type = BACK;
    }
}
class Forward {
    constructor() {
        this.type = FORWARD;
    }
}


/***/ }),

/***/ "./src/app/core/store/router-store/router-store.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/store/router-store/router-store.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: NavigationSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSerializer", function() { return NavigationSerializer; });
class NavigationSerializer {
    serialize(routerState) {
        // console.log('ROUTE', routerState);
        const { url } = routerState;
        const queryParams = routerState.root.queryParams;
        return { url, queryParams };
    }
}


/***/ }),

/***/ "./src/app/core/store/store.utils.ts":
/*!*******************************************!*\
  !*** ./src/app/core/store/store.utils.ts ***!
  \*******************************************/
/*! exports provided: migrateReducerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrateReducerState", function() { return migrateReducerState; });
/**
 * migrate reducer strategy
 */
function migrateReducerState(prevReducerKey, newReducerState, storage) {
    const prevReducerState = storage.getItem(prevReducerKey);
    const prevStateJson = prevReducerState && prevReducerState.length > 0
        ? JSON.parse(prevReducerState)
        : false;
    if (prevStateJson) {
        storage.removeItem(prevReducerKey);
    }
    return prevStateJson
        ? Object.assign({}, newReducerState, prevStateJson) : newReducerState;
}


/***/ }),

/***/ "./src/app/core/store/user-profile/index.ts":
/*!**************************************************!*\
  !*** ./src/app/core/store/user-profile/index.ts ***!
  \**************************************************/
/*! exports provided: user, UserProfileActions, UserSignin, UserSigninStart, UserSigninSuccess, UserSignout, UserSignoutSuccess, CheckUserAuth, UserPlaylistsFetchError, getUser, getUserPlaylists, getUserViewPlaylist, getIsUserSignedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.reducer */ "./src/app/core/store/user-profile/user-profile.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "user", function() { return _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__["user"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfileActions", function() { return _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__["UserProfileActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSignin", function() { return _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__["UserSignin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSigninStart", function() { return _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__["UserSigninStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSigninSuccess", function() { return _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__["UserSigninSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSignout", function() { return _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__["UserSignout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSignoutSuccess", function() { return _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__["UserSignoutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckUserAuth", function() { return _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__["CheckUserAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPlaylistsFetchError", function() { return _user_profile_reducer__WEBPACK_IMPORTED_MODULE_0__["UserPlaylistsFetchError"]; });

/* harmony import */ var _user_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.actions */ "./src/app/core/store/user-profile/user-profile.actions.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _user_profile_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.selectors */ "./src/app/core/store/user-profile/user-profile.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _user_profile_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserPlaylists", function() { return _user_profile_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserPlaylists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserViewPlaylist", function() { return _user_profile_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserViewPlaylist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsUserSignedIn", function() { return _user_profile_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsUserSignedIn"]; });






/***/ }),

/***/ "./src/app/core/store/user-profile/user-profile.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/store/user-profile/user-profile.actions.ts ***!
  \*****************************************************************/
/*! exports provided: UserProfileActions, UserSignin, UserSigninStart, UserSigninSuccess, UserSignout, UserSignoutSuccess, CheckUserAuth, UserPlaylistsFetchError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileActions", function() { return UserProfileActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignin", function() { return UserSignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSigninStart", function() { return UserSigninStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSigninSuccess", function() { return UserSigninSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignout", function() { return UserSignout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignoutSuccess", function() { return UserSignoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckUserAuth", function() { return CheckUserAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPlaylistsFetchError", function() { return UserPlaylistsFetchError; });
/* harmony import */ var ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-action-creator-factory */ "./node_modules/ngrx-action-creator-factory/ngrx-action-creator-factory.js");
/* harmony import */ var ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserProfileActions_1;


let UserProfileActions = UserProfileActions_1 = class UserProfileActions {
    constructor() {
        this.setViewPlaylist = ngrx_action_creator_factory__WEBPACK_IMPORTED_MODULE_0__["ActionCreatorFactory"].create(UserProfileActions_1.VIEWED_PLAYLIST);
        this.updateData = (data) => ({ type: UserProfileActions_1.UPDATE, payload: data });
        this.updateToken = (payload) => ({ type: UserProfileActions_1.UPDATE_TOKEN, payload });
    }
    addPlaylists(playlists) {
        return {
            type: UserProfileActions_1.ADD_PLAYLISTS,
            payload: playlists
        };
    }
    updatePageToken(token) {
        return {
            type: UserProfileActions_1.UPDATE_NEXT_PAGE_TOKEN,
            payload: token
        };
    }
    userProfileCompleted() {
        return {
            type: UserProfileActions_1.USER_PROFILE_COMPLETED
        };
    }
    userProfileRecieved(profile) {
        return {
            type: UserProfileActions_1.USER_PROFILE_RECIEVED,
            payload: profile
        };
    }
    updateUserProfile(profile) {
        return {
            type: UserProfileActions_1.UPDATE_USER_PROFILE,
            payload: profile
        };
    }
};
UserProfileActions.UPDATE = '[UserProfile] UPDATE';
UserProfileActions.ADD_PLAYLISTS = '[UserProfile] ADD_PLAYLISTS';
UserProfileActions.UPDATE_TOKEN = '[UserProfile] UPDATE_TOKEN';
UserProfileActions.UPDATE_NEXT_PAGE_TOKEN = '[UserProfile] UPDATE_NEXT_PAGE_TOKEN';
UserProfileActions.USER_PROFILE_COMPLETED = '[UserProfile] USER_PROFILE_COMPLETED';
UserProfileActions.UPDATE_USER_PROFILE = '[UserProfile] UPDATE_USER_PROFILE';
UserProfileActions.USER_PROFILE_RECIEVED = '[UserProfile] USER_PROFILE_RECIEVED';
UserProfileActions.VIEWED_PLAYLIST = '[UserProfile] VIEWED_PLAYLIST';
UserProfileActions.CHECK_USER_AUTH = '[UserProfile] CHECK_USER_AUTH';
UserProfileActions.USER_SIGNIN = '[UserProfile] USER_SIGNIN';
UserProfileActions.USER_SIGNIN_START = '[UserProfile] USER_SIGNIN_START';
UserProfileActions.USER_SIGNIN_SUCCESS = '[UserProfile] USER_SIGNIN_SUCCESS';
UserProfileActions.USER_SIGNOUT = '[UserProfile] USER_SIGNOUT';
UserProfileActions.USER_SIGNOUT_SUCCESS = '[UserProfile] USER_SIGNOUT_SUCCESS';
UserProfileActions.USER_PLAYLISTS_FETCH_ERROR = '[UserProfile] USER_PLAYLISTS_FETCH_ERROR';
UserProfileActions = UserProfileActions_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserProfileActions);

class UserSignin {
    constructor() {
        this.type = UserProfileActions.USER_SIGNIN;
    }
}
class UserSigninStart {
    constructor() {
        this.type = UserProfileActions.USER_SIGNIN_START;
    }
}
class UserSigninSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserProfileActions.USER_SIGNIN_SUCCESS;
    }
}
class UserSignout {
    constructor() {
        this.type = UserProfileActions.USER_SIGNOUT;
    }
}
class UserSignoutSuccess {
    constructor() {
        this.type = UserProfileActions.USER_SIGNOUT_SUCCESS;
    }
}
class CheckUserAuth {
    constructor() {
        this.type = UserProfileActions.CHECK_USER_AUTH;
    }
}
class UserPlaylistsFetchError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserProfileActions.USER_PLAYLISTS_FETCH_ERROR;
    }
}


/***/ }),

/***/ "./src/app/core/store/user-profile/user-profile.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/store/user-profile/user-profile.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: user, UserProfileActions, UserSignin, UserSigninStart, UserSigninSuccess, UserSignout, UserSignoutSuccess, CheckUserAuth, UserPlaylistsFetchError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.actions */ "./src/app/core/store/user-profile/user-profile.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfileActions", function() { return _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSignin", function() { return _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserSignin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSigninStart", function() { return _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserSigninStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSigninSuccess", function() { return _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserSigninSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSignout", function() { return _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserSignout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSignoutSuccess", function() { return _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserSignoutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckUserAuth", function() { return _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["CheckUserAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPlaylistsFetchError", function() { return _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserPlaylistsFetchError"]; });



const initialUserState = {
    access_token: '',
    playlists: [],
    data: {},
    nextPageToken: '',
    profile: {},
    viewedPlaylist: ''
};
function user(state = initialUserState, action) {
    switch (action.type) {
        case _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActions"].ADD_PLAYLISTS:
            return Object.assign({}, state, { playlists: [...state.playlists, ...action.payload] });
        case _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActions"].UPDATE_TOKEN:
            return Object.assign({}, state, { access_token: action.payload, playlists: [] });
        case _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActions"].USER_SIGNOUT_SUCCESS:
            return Object.assign({}, initialUserState);
        case _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActions"].UPDATE:
            return Object.assign({}, state, { data: action.payload });
        case _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActions"].UPDATE_NEXT_PAGE_TOKEN:
            return Object.assign({}, state, { nextPageToken: action.payload });
        case _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActions"].UPDATE_USER_PROFILE:
            return Object.assign({}, state, { profile: action.payload });
        case _user_profile_actions__WEBPACK_IMPORTED_MODULE_0__["UserProfileActions"].VIEWED_PLAYLIST:
            return Object.assign({}, state, { viewedPlaylist: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/store/user-profile/user-profile.selectors.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/store/user-profile/user-profile.selectors.ts ***!
  \*******************************************************************/
/*! exports provided: getUser, getUserPlaylists, getUserViewPlaylist, getIsUserSignedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPlaylists", function() { return getUserPlaylists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserViewPlaylist", function() { return getUserViewPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsUserSignedIn", function() { return getIsUserSignedIn; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const getUser = (state) => state.user;
const getUserPlaylists = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, (user) => user.playlists);
const getUserViewPlaylist = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, (user) => user.viewedPlaylist);
const getIsUserSignedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUser, (user) => user.access_token !== '');


/***/ }),

/***/ "./src/app/shared/animations/fade-in.animation.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/fade-in.animation.ts ***!
  \********************************************************/
/*! exports provided: fadeInAnimation, flyOut, flyInOut, heightReveal, expandFadeInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyOut", function() { return flyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heightReveal", function() { return heightReveal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandFadeInAnimation", function() { return expandFadeInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-2rem)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0rem)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(-2rem)'
        }))
    ])
]);
const flyOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-30%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0%)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(-80%)'
        }))
    ])
]);
const flyInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
    ])
]);
const heightReveal = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300)]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 100 }))])
]);
const expandFadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandFadeIn', [
    // state('void', style({ top: '-35rem' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(0.4)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
]);


/***/ }),

/***/ "./src/app/shared/components/btn/btn.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/btn/btn.directive.ts ***!
  \********************************************************/
/*! exports provided: ButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return ButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_utils_data_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/data.utils */ "./src/app/shared/utils/data.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ButtonDirective = class ButtonDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.btn = '';
        this.mainStyle = 'btn';
        this.stylePrefix = 'btn-';
    }
    ngOnInit() {
        this.addClass(this.mainStyle);
    }
    ngOnChanges({ btn }) {
        if (btn && Object(_shared_utils_data_utils__WEBPACK_IMPORTED_MODULE_1__["isNewChange"])(btn)) {
            this.applyStyles();
        }
    }
    addClass(className) {
        this.renderer.addClass(this.element.nativeElement, className);
    }
    applyStyles() {
        const prefix = this.stylePrefix;
        const styles = this.btn.split(' ').map(style => `${prefix}${style}`)
            .forEach(className => this.addClass(className));
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "btn", void 0);
ButtonDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[btn]'
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
], ButtonDirective);



/***/ }),

/***/ "./src/app/shared/components/btn/index.ts":
/*!************************************************!*\
  !*** ./src/app/shared/components/btn/index.ts ***!
  \************************************************/
/*! exports provided: ButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _btn_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btn.directive */ "./src/app/shared/components/btn/btn.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return _btn_directive__WEBPACK_IMPORTED_MODULE_0__["ButtonDirective"]; });




/***/ }),

/***/ "./src/app/shared/components/button-group/button-group.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/button-group/button-group.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block; }\n  :host .btn {\n    border: 0; }\n  :host .btn.btn-default.active {\n      background-color: var(--brand-primary);\n      color: var(--brand-inverse-text); }\n  :host .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px; }\n  :host .btn-group > .btn:last-child:not(:first-child) {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px; }\n"

/***/ }),

/***/ "./src/app/shared/components/button-group/button-group.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/button-group/button-group.component.ts ***!
  \**************************************************************************/
/*! exports provided: ButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function() { return ButtonGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ButtonGroupComponent = class ButtonGroupComponent {
    constructor() {
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    isSelectedButton(buttonValue) {
        return buttonValue === this.selectedButton;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], ButtonGroupComponent.prototype, "buttons", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], ButtonGroupComponent.prototype, "selectedButton", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], ButtonGroupComponent.prototype, "buttonClick", void 0);
ButtonGroupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'button-group',
        styles: [__webpack_require__(/*! ./button-group.component.scss */ "./src/app/shared/components/button-group/button-group.component.scss")],
        template: `
    <div class="btn-group btn-group-sm navbar-btn">
      <button class="btn btn-default"
        *ngFor="let button of buttons"
        [class.active]="isSelectedButton(button.value)"
        (click)="buttonClick.next(button)">
        {{ button.label }}
      </button>
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    })
], ButtonGroupComponent);



/***/ }),

/***/ "./src/app/shared/components/button-group/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/button-group/index.ts ***!
  \*********************************************************/
/*! exports provided: ButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-group.component */ "./src/app/shared/components/button-group/button-group.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function() { return _button_group_component__WEBPACK_IMPORTED_MODULE_0__["ButtonGroupComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/button-icon/button-icon.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/button-icon/button-icon.component.ts ***!
  \************************************************************************/
/*! exports provided: ButtonIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIconComponent", function() { return ButtonIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ButtonIconComponent = class ButtonIconComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], ButtonIconComponent.prototype, "icon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], ButtonIconComponent.prototype, "types", void 0);
ButtonIconComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'button-icon',
        // styleUrls: ['./button-icon.scss'],
        template: `
    <button [ngClass]="types">
      <icon [name]="icon"></icon> <ng-content></ng-content>
    </button>
  `,
    }),
    __metadata("design:paramtypes", [])
], ButtonIconComponent);



/***/ }),

/***/ "./src/app/shared/components/button-icon/index.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/button-icon/index.ts ***!
  \********************************************************/
/*! exports provided: ButtonIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-icon.component */ "./src/app/shared/components/button-icon/button-icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonIconComponent", function() { return _button_icon_component__WEBPACK_IMPORTED_MODULE_0__["ButtonIconComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: CORE_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORE_COMPONENTS", function() { return CORE_COMPONENTS; });
/* harmony import */ var _youtube_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-list */ "./src/app/shared/components/youtube-list/index.ts");
/* harmony import */ var _youtube_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube-media */ "./src/app/shared/components/youtube-media/index.ts");
/* harmony import */ var _youtube_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube-playlist */ "./src/app/shared/components/youtube-playlist/index.ts");
/* harmony import */ var _button_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-group */ "./src/app/shared/components/button-group/index.ts");
/* harmony import */ var _playlist_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlist-viewer */ "./src/app/shared/components/playlist-viewer/index.ts");
/* harmony import */ var _loading_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-indicator */ "./src/app/shared/components/loading-indicator/index.ts");
/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./btn */ "./src/app/shared/components/btn/index.ts");
/* harmony import */ var _button_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button-icon */ "./src/app/shared/components/button-icon/index.ts");








const CORE_COMPONENTS = [
    _youtube_list__WEBPACK_IMPORTED_MODULE_0__["YoutubeListComponent"],
    _youtube_media__WEBPACK_IMPORTED_MODULE_1__["YoutubeMediaComponent"],
    _youtube_playlist__WEBPACK_IMPORTED_MODULE_2__["YoutubePlaylistComponent"],
    _button_group__WEBPACK_IMPORTED_MODULE_3__["ButtonGroupComponent"],
    _playlist_viewer__WEBPACK_IMPORTED_MODULE_4__["PlaylistViewerComponent"], _playlist_viewer__WEBPACK_IMPORTED_MODULE_4__["PlaylistCoverComponent"],
    _loading_indicator__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicatorComponent"],
    _btn__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"],
    _button_icon__WEBPACK_IMPORTED_MODULE_7__["ButtonIconComponent"]
];


/***/ }),

/***/ "./src/app/shared/components/loading-indicator/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loading-indicator/index.ts ***!
  \**************************************************************/
/*! exports provided: LoadingIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_indicator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-indicator.component */ "./src/app/shared/components/loading-indicator/loading-indicator.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function() { return _loading_indicator_component__WEBPACK_IMPORTED_MODULE_0__["LoadingIndicatorComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/loading-indicator/loading-indicator.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/loading-indicator/loading-indicator.component.ts ***!
  \************************************************************************************/
/*! exports provided: LoadingIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function() { return LoadingIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LoadingIndicatorComponent = class LoadingIndicatorComponent {
    constructor() {
        this.message = '';
        this.loading = false;
    }
    get show() {
        return this.loading;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], LoadingIndicatorComponent.prototype, "message", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], LoadingIndicatorComponent.prototype, "loading", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.show-loader'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], LoadingIndicatorComponent.prototype, "show", null);
LoadingIndicatorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'loader',
        styles: [__webpack_require__(/*! ./loading-indicator.scss */ "./src/app/shared/components/loading-indicator/loading-indicator.scss")],
        template: `
  <div class="alert alert-info">
    <icon name="circle-o-notch spin"></icon> {{ message }}
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    })
], LoadingIndicatorComponent);



/***/ }),

/***/ "./src/app/shared/components/loading-indicator/loading-indicator.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/loading-indicator/loading-indicator.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 2rem;\n  position: fixed;\n  z-index: 1000;\n  min-width: 40%;\n  transition: -webkit-transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), -webkit-transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  -webkit-transform: translatey(-20rem);\n          transform: translatey(-20rem); }\n  :host.show-loader {\n    -webkit-transform: translatey(0rem);\n            transform: translatey(0rem); }\n  :host .alert {\n    background-color: var(--sidebar-bg);\n    box-shadow: 0 0 20px -3px #000;\n    padding: 2rem; }\n  :host .alert.alert-info {\n      color: var(--brand-primary); }\n"

/***/ }),

/***/ "./src/app/shared/components/playlist-viewer/index.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/playlist-viewer/index.ts ***!
  \************************************************************/
/*! exports provided: PlaylistViewerComponent, PlaylistCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playlist_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist-viewer.component */ "./src/app/shared/components/playlist-viewer/playlist-viewer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaylistViewerComponent", function() { return _playlist_viewer_component__WEBPACK_IMPORTED_MODULE_0__["PlaylistViewerComponent"]; });

/* harmony import */ var _playlist_cover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist-cover.component */ "./src/app/shared/components/playlist-viewer/playlist-cover.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaylistCoverComponent", function() { return _playlist_cover_component__WEBPACK_IMPORTED_MODULE_1__["PlaylistCoverComponent"]; });





/***/ }),

/***/ "./src/app/shared/components/playlist-viewer/playlist-cover.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/playlist-viewer/playlist-cover.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PlaylistCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistCoverComponent", function() { return PlaylistCoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PlaylistCoverComponent = class PlaylistCoverComponent {
    constructor() {
        this.play = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    get title() {
        return this.playlist && this.playlist.snippet
            ? this.playlist.snippet.title
            : '...';
    }
    get total() {
        return this.playlist && this.playlist.contentDetails
            ? this.playlist.contentDetails.itemCount
            : '...';
    }
    get thumbUrl() {
        const thumbnails = this.playlist && this.playlist.snippet.thumbnails;
        const sizes = ['default', 'medium'];
        return sizes.reduce((acc, size) => thumbnails.hasOwnProperty(size) && thumbnails[size].url, '');
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PlaylistCoverComponent.prototype, "playlist", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlaylistCoverComponent.prototype, "play", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlaylistCoverComponent.prototype, "queue", void 0);
PlaylistCoverComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'playlist-cover',
        styles: [__webpack_require__(/*! ./playlist-cover.scss */ "./src/app/shared/components/playlist-viewer/playlist-cover.scss")],
        template: `
  <div class="playlist-cover is-flex-row is-flex-valign">
    <div class="cover-bg" [ngStyle]="{ 'background-image': 'url(' + thumbUrl + ')' }"></div>
    <div class="btn btn-transparent playlist-thumbnail">
      <img [src]="thumbUrl">
    </div>
    <div class="actions is-flex-2">
      <button class="btn btn-lg ux-maker play-media bg-primary"
        (click)="play.emit(playlist)" title="play playlist">
        <icon name="play"></icon>
      </button>
      <button class="btn btn-lg ux-maker play-media bg-primary"
        (click)="queue.emit(playlist)" title="queue playlist">
        <icon name="share"></icon>
      </button>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [])
], PlaylistCoverComponent);



/***/ }),

/***/ "./src/app/shared/components/playlist-viewer/playlist-cover.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/playlist-viewer/playlist-cover.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host .playlist-cover {\n    position: relative;\n    padding-top: 3rem;\n    margin-bottom: 1rem;\n    overflow: hidden;\n    height: 21rem; }\n  :host .playlist-cover .cover-bg {\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      -webkit-filter: blur(5px);\n              filter: blur(5px);\n      -webkit-transform: scale(1.2 1.2);\n              transform: scale(1.2 1.2);\n      height: 24rem;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%; }\n  :host .playlist-cover .playlist-thumbnail {\n      z-index: 100; }\n  :host .playlist-cover h4 {\n      margin: 0;\n      line-height: 5rem; }\n  :host .playlist-cover h4 span {\n        font-weight: normal;\n        position: relative;\n        background-color: rgba(255, 255, 255, 0.5);\n        padding: 1rem; }\n  :host .playlist-cover .actions {\n      z-index: 100;\n      align-self: flex-end;\n      text-align: left; }\n  :host .playlist-cover .actions .btn {\n        color: white; }\n  :host .playlist-cover .actions .btn:hover {\n          color: black; }\n"

/***/ }),

/***/ "./src/app/shared/components/playlist-viewer/playlist-viewer.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/playlist-viewer/playlist-viewer.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlaylistViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistViewerComponent", function() { return PlaylistViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PlaylistViewerComponent = class PlaylistViewerComponent {
    constructor() {
        this.videos = [];
        this.queuedPlaylist = [];
        this.queuePlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queueVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unqueueVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onPlayPlaylist(playlist) {
        this.playPlaylist.emit(playlist);
    }
    onQueueVideo(media) {
        this.queueVideo.emit(media);
    }
    onPlayVideo(media) {
        this.playVideo.emit(media);
    }
    onQueuePlaylist(playlist) {
        this.queuePlaylist.emit(playlist);
    }
    onRemove(media) {
        this.unqueueVideo.emit(media);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], PlaylistViewerComponent.prototype, "videos", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PlaylistViewerComponent.prototype, "playlist", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PlaylistViewerComponent.prototype, "queuedPlaylist", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlaylistViewerComponent.prototype, "queuePlaylist", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlaylistViewerComponent.prototype, "playPlaylist", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlaylistViewerComponent.prototype, "queueVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlaylistViewerComponent.prototype, "playVideo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PlaylistViewerComponent.prototype, "unqueueVideo", void 0);
PlaylistViewerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'playlist-viewer',
        styles: [__webpack_require__(/*! ./playlist-viewer.scss */ "./src/app/shared/components/playlist-viewer/playlist-viewer.scss")],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        template: `
  <playlist-cover
    [playlist]="playlist"
    (play)="onPlayPlaylist($event)"
    (queue)="onQueuePlaylist($event)">
  </playlist-cover>
  <section>
    <youtube-list
      [list]="videos"
      [queued]="queuedPlaylist"
      (play)="onPlayVideo($event)"
      (queue)="onQueueVideo($event)"
      (unqueue)="onRemove($event)"
    ></youtube-list>
  </section>
  `
    }),
    __metadata("design:paramtypes", [])
], PlaylistViewerComponent);



/***/ }),

/***/ "./src/app/shared/components/playlist-viewer/playlist-viewer.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/playlist-viewer/playlist-viewer.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding-bottom: 6rem; }\n"

/***/ }),

/***/ "./src/app/shared/components/youtube-list/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/youtube-list/index.ts ***!
  \*********************************************************/
/*! exports provided: YoutubeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _youtube_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-list */ "./src/app/shared/components/youtube-list/youtube-list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubeListComponent", function() { return _youtube_list__WEBPACK_IMPORTED_MODULE_0__["YoutubeListComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/youtube-list/youtube-list.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/youtube-list/youtube-list.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host ul {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center; }\n  :host .youtube-list-item {\n    width: 100%;\n    max-width: 100%; }\n    :host .youtube-list-item:hover {\n      box-shadow: none; } }\n\n@media (min-width: 480px) {\n  :host .youtube-list-item {\n    width: 33%; } }\n\n@media (min-width: 767px) {\n  :host .youtube-list-item {\n    max-width: 28rem;\n    width: 24.5%; } }\n\n@media (min-width: 1440px) {\n  :host .youtube-list-item {\n    width: 28rem; } }\n"

/***/ }),

/***/ "./src/app/shared/components/youtube-list/youtube-list.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/youtube-list/youtube-list.ts ***!
  \****************************************************************/
/*! exports provided: YoutubeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeListComponent", function() { return YoutubeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @animations/fade-in.animation */ "./src/app/shared/animations/fade-in.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function createIdMap(list) {
    return list.reduce((acc, cur) => {
        acc[cur.id] = true;
        return acc;
    }, {});
}
let YoutubeListComponent = class YoutubeListComponent {
    constructor() {
        this.list = [];
        this.queued = [];
        this.play = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unqueue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queuedMediaIdMap = {};
    }
    ngOnChanges({ queued }) {
        // if (queued && queued.currentValue) {
        //   console.log('YoutubeListComponent.createIdMap()');
        //   this.queuedMediaIdMap = createIdMap(queued.currentValue);
        // }
    }
    playSelectedVideo(media) {
        this.play.emit(media);
    }
    queueSelectedVideo(media) {
        this.queue.emit(media);
    }
    addVideo(media) {
        this.add.emit(media);
    }
    unqueueSelectedVideo(media) {
        this.unqueue.emit(media);
    }
    getMediaStatus(media) {
        return {
            queued: this.queuedMediaIdMap[media.id]
        };
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], YoutubeListComponent.prototype, "list", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], YoutubeListComponent.prototype, "queued", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubeListComponent.prototype, "play", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubeListComponent.prototype, "queue", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubeListComponent.prototype, "add", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubeListComponent.prototype, "unqueue", void 0);
YoutubeListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'youtube-list',
        styles: [__webpack_require__(/*! ./youtube-list.scss */ "./src/app/shared/components/youtube-list/youtube-list.scss")],
        animations: [_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]],
        template: `
  <ul class="list-unstyled clearfix">
    <li class="youtube-list-item" [@fadeIn] *ngFor="let media of list">
      <youtube-media
        [media]="media"
        [queued]="media | isInQueue:queued"
        (play)="playSelectedVideo(media)"
        (queue)="queueSelectedVideo(media)"
        (unqueue)="unqueueSelectedVideo(media)"
        (add)="addVideo(media)">
      </youtube-media>
    </li>
  </ul>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [])
], YoutubeListComponent);



/***/ }),

/***/ "./src/app/shared/components/youtube-media/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/youtube-media/index.ts ***!
  \**********************************************************/
/*! exports provided: YoutubeMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _youtube_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-media */ "./src/app/shared/components/youtube-media/youtube-media.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubeMediaComponent", function() { return _youtube_media__WEBPACK_IMPORTED_MODULE_0__["YoutubeMediaComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/youtube-media/youtube-media.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/youtube-media/youtube-media.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section\n  class=\"youtube-item card ux-maker\"\n  [class.show-description]=\"showDesc\">\n  <section class=\"media-card\">\n\n    <div class=\"front face is-rounded-bottom\">\n      <div class=\"indicators clearfix\">\n\n        <span class=\"pull-left item-is-playing\">\n\t\t\t\t\t<icon name=\"play\"></icon>Now Playing\n\t\t\t\t</span>\n\n      </div>\n\n      <div\n        rel=\"tooltip\"\n        class=\"media-thumb is-rounded-top\"\n        [tooltip]=\"media.snippet.title\"\n        (click)=\"playVideo(media)\">\n\n        <div class=\"thumbnail\">\n          <img\n            name\n            class=\"thumb-image\"\n            [src]=\"media | videoToThumb\">\n        </div>\n\n        <section class=\"stats is-absolute-bottom is-flex-row\">\n          <span class=\"item-duration item-action\">\n\t\t\t\t\t\t<icon name=\"clock-o\"></icon> {{ media.contentDetails?.duration | toFriendlyDuration }}\n\t\t\t\t\t</span>\n\n          <span\n            class=\"item-likes item-action\"\n            rel=\"tooltip\"\n            title=\"Likes\">\n\t\t\t\t\t\t<icon name=\"thumbs-up\"></icon> {{ media.statistics?.likeCount | number:'2.0'}}\n\t\t\t\t\t</span>\n\n          <span\n            class=\"item-views item-action\"\n            rel=\"tooltip\"\n            title=\"Views\">\n\t\t\t\t\t\t<icon name=\"eye\"></icon> {{ media.statistics?.viewCount | number:'2.0'}}\n\t\t\t\t\t</span>\n        </section>\n\n        <button class=\"btn btn-transparent text-primary btn-lg ux-maker play-media\">\n          <icon name=\"youtube-play 3x\"></icon>\n        </button>\n      </div>\n\n      <section class=\"item-actions main-actions is-rounded-bottom\">\n        <h4 class=\"title\">\n\t\t\t\t\t<a\n            href=\"#/video/\"\n            rel=\"tooltip\"\n            class=\"media-thumb ellipsis\"\n            [tooltip]=\"media.snippet.title\">\n            {{ media.snippet.title }}\n          </a>\n\t\t\t\t</h4>\n        <section class=\"media-actions is-flex-row is-flex-valign\">\n          <button\n            *ngIf=\"!queued\"\n            class=\"btn btn-transparent text-info first-action\"\n            tooltip=\"Queue this video to now playlist\"\n            (click)=\"queueVideo(media)\">\n            <icon name=\"reply\"></icon>\n            Queue To Playlist\n          </button>\n          <button\n            *ngIf=\"queued\"\n            class=\"btn btn-transparent text-danger no-padding\"\n            tooltip=\"Queue this video to now playlist\"\n            (click)=\"removeVideoFromQueue(media)\">\n            <icon name=\"trash\"></icon>\n            Remove From Queue\n          </button>\n          <button\n            class=\"btn btn-link add-to-playlist\"\n            disabled\n            tooltip=\"Add this video to a playlist\"\n            (click)=\"addVideo(media)\">\n            <icon name=\"plus\"></icon>\n            Add\n          </button>\n          <span class=\"is-strechable\"></span>\n          <button class=\"btn btn-transparent no-padding\">\n            <icon\n              name=\"info-circle\"\n              class=\"text-info text-md is-media-valign\"\n              (click)=\"toggle(showDesc)\"\n              tooltip=\"more info about this video\"></icon>\n          </button>\n        </section>\n      </section>\n    </div>\n\n    <div class=\"description back face is-rounded is-absolute-top is-absolute-left\">\n      <h4>\n\t\t\t\t<a\n          href=\"https://youtube.com/watch?v={{ media.id }}\"\n          target=\"_blank\"\n          rel=\"noopener\"\n          tooltip=\"Open in YouTube\"\n          class=\"media-thumb\"><icon\n            name=\"youtube\"\n            [prefix]=\"ICON_PREFIX_BRAND\"></icon>\n          {{ media.snippet.title}}\n        </a>\n\t\t\t</h4>\n      <div *ngIf=\"showDesc\">{{ media.snippet.description }}</div>\n    </div>\n\n    <section\n      *ngIf=\"showDesc\"\n      class=\"close-desc is-absolute-bottom is-absolute-right\">\n      <button\n        (click)=\"toggle(showDesc)\"\n        class=\"btn-transparent btn-xs text-md text-success\"\n        tooltip=\"flip back...\">\n        <icon name=\"times-circle\"></icon>\n      </button>\n    </section>\n\n  </section>\n\n</section>\n"

/***/ }),

/***/ "./src/app/shared/components/youtube-media/youtube-media.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/youtube-media/youtube-media.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host {\n    --media-primary-color: var(--brand-primary);\n    --media-dark-transparent: var(--brand-dark-bg-color-transparent);\n    --text-color: var(--brand-primary-text-color);\n    --text-primary-color-inverse: var(--brand-inverse-text); }\n    :host .youtube-item.show-description .item-actions {\n      visibility: none; }\n    :host .youtube-item .item-actions {\n      visibility: visible; }\n    :host .youtube-item .tooltip {\n      white-space: normal; }\n    :host .youtube-item {\n      width: 100%;\n      max-width: 100%;\n      margin: 0;\n      position: relative;\n      padding: 1rem;\n      border-radius: 0;\n      background-color: transparent;\n      box-shadow: none;\n      border: none; }\n      :host .youtube-item .media-card {\n        color: gray;\n        text-shadow: none;\n        display: block;\n        position: relative;\n        text-decoration: none; }\n      :host .youtube-item .media-actions .first-action {\n        padding-left: 0; }\n      :host .youtube-item .front {\n        padding: 0px;\n        box-shadow: 0 1px 30px -5px var(--media-dark-transparent);\n        position: relative; }\n      :host .youtube-item .title {\n        height: 27px;\n        margin: 0;\n        color: var(--text-color); }\n      :host .youtube-item .media-thumb {\n        display: block;\n        position: relative;\n        cursor: pointer;\n        font-weight: normal;\n        overflow: hidden; }\n        :host .youtube-item .media-thumb .stats {\n          background: var(--brand-dark-bg-color-transparent);\n          width: 100%;\n          padding: 1rem;\n          color: white;\n          justify-content: space-between; }\n          :host .youtube-item .media-thumb .stats .item-action {\n            color: var(--link-primary-color); }\n            :host .youtube-item .media-thumb .stats .item-action.item-likes {\n              margin-right: 0.5rem; }\n            :host .youtube-item .media-thumb .stats .item-action icon {\n              color: rgba(255, 255, 255, 0.9); }\n        :host .youtube-item .media-thumb:hover img {\n          -webkit-transform: scale(1.4) translate(0, 0);\n                  transform: scale(1.4) translate(0, 0); }\n        :host .youtube-item .media-thumb:hover .play-media {\n          opacity: 1; }\n      :host .youtube-item .play-media {\n        opacity: 0;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        border: none; }\n        :host .youtube-item .play-media:hover {\n          color: inherit; }\n      :host .youtube-item .item-is-playing {\n        display: none;\n        color: var(--media-primary-color);\n        text-shadow: 0 0px 1px var(--media-primary-color); }\n        :host .youtube-item .item-is-playing i {\n          margin: 2px 4px 0 0; }\n        :host .youtube-item .item-is-playing.playing-true {\n          display: initial; }\n      :host .youtube-item .thumbnail {\n        overflow: hidden;\n        border-radius: 0;\n        clear: both;\n        height: 149px;\n        border: none;\n        background-color: var(--text-primary-color-inverse);\n        padding: 0;\n        box-shadow: none;\n        margin-bottom: 0; }\n        :host .youtube-item .thumbnail .thumb-image {\n          height: 100%;\n          -webkit-transform: scale(1.7) translatey(0);\n                  transform: scale(1.7) translatey(0);\n          transition: -webkit-transform 0.3s ease-out;\n          transition: transform 0.3s ease-out;\n          transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n          display: block;\n          max-width: 100%;\n          margin-left: auto;\n          margin-right: auto;\n          border: 0; }\n      :host .youtube-item .description {\n        height: 219px;\n        overflow: hidden;\n        background-color: var(--media-bg-primary);\n        margin: 0;\n        padding: 8px 8px 36px 8px;\n        box-sizing: border-box;\n        word-wrap: break-word;\n        font-size: 16px;\n        color: var(--text-color);\n        width: 100%; }\n      :host .youtube-item.show-description .description {\n        overflow: auto; }\n      :host .youtube-item.show-description .stats {\n        display: none; }\n      :host .youtube-item.show-description .main-actions.item-actions {\n        visibility: hidden; }\n      :host .youtube-item .close-desc .text-success {\n        padding: 0.5rem 1rem; }\n      :host .youtube-item .indicators {\n        height: 22px;\n        position: absolute;\n        z-index: 1000; }\n      :host .youtube-item .item-actions {\n        background: var(--media-bg-primary);\n        padding: 1rem;\n        margin: 0;\n        box-shadow: none;\n        bottom: -1px; }\n        :host .youtube-item .item-actions a:hover {\n          text-decoration: none; }\n        :host .youtube-item .item-actions span {\n          vertical-align: middle;\n          font-size: 1.2rem; }\n      :host .youtube-item .item-views {\n        display: inline-block; }\n      :host .youtube-item .share {\n        position: absolute;\n        right: 0px;\n        z-index: 10;\n        text-align: center; }\n        :host .youtube-item .share .dropdown-toggle {\n          padding: 0px 10px; }\n        :host .youtube-item .share .dropdown-menu {\n          right: 0px;\n          left: auto; } }\n\n@media (min-width: 500px) and (max-width: 767px) {\n  :host .youtube-item .item-views {\n    display: block; } }\n\n@media (min-width: 768px) {\n  :host .youtube-item .play-media {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); } }\n\n@media (max-width: 767px) {\n  :host .youtube-item .play-media {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); } }\n"

/***/ }),

/***/ "./src/app/shared/components/youtube-media/youtube-media.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/youtube-media/youtube-media.ts ***!
  \******************************************************************/
/*! exports provided: YoutubeMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeMediaComponent", function() { return YoutubeMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_directives_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/directives/icon */ "./src/app/shared/directives/icon/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let YoutubeMediaComponent = class YoutubeMediaComponent {
    constructor() {
        this.queued = false;
        this.play = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unqueue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showDesc = false;
        this.isPlaying = false;
        this.ICON_PREFIX_BRAND = _shared_directives_icon__WEBPACK_IMPORTED_MODULE_1__["ICON_PREFIX_BRAND"];
    }
    playVideo(media) {
        this.play.emit(media);
    }
    queueVideo(media) {
        this.queue.emit(media);
    }
    addVideo(media) {
        this.add.emit(media);
    }
    toggle(showDesc) {
        this.showDesc = !showDesc;
    }
    removeVideoFromQueue(media) {
        this.unqueue.emit(media);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], YoutubeMediaComponent.prototype, "media", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], YoutubeMediaComponent.prototype, "queued", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubeMediaComponent.prototype, "play", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubeMediaComponent.prototype, "queue", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubeMediaComponent.prototype, "add", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubeMediaComponent.prototype, "unqueue", void 0);
YoutubeMediaComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'youtube-media',
        styles: [__webpack_require__(/*! ./youtube-media.scss */ "./src/app/shared/components/youtube-media/youtube-media.scss")],
        template: __webpack_require__(/*! ./youtube-media.html */ "./src/app/shared/components/youtube-media/youtube-media.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [])
], YoutubeMediaComponent);



/***/ }),

/***/ "./src/app/shared/components/youtube-playlist/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/youtube-playlist/index.ts ***!
  \*************************************************************/
/*! exports provided: YoutubePlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _youtube_playlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-playlist */ "./src/app/shared/components/youtube-playlist/youtube-playlist.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubePlaylistComponent", function() { return _youtube_playlist__WEBPACK_IMPORTED_MODULE_0__["YoutubePlaylistComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/youtube-playlist/youtube-playlist.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/youtube-playlist/youtube-playlist.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"youtube-playlist-item ux-maker card\">\n  <section class=\"media-title front\">\n    <div\n      class=\"media-thumb\"\n      [tooltip]=\"media.snippet.title\">\n      <div class=\"thumbnail is-rounded\">\n        <img\n          [src]=\"media | videoToThumb\"\n          class=\"thumb-image\">\n      </div>\n      <button\n        class=\"btn btn-transparent text-primary btn-lg play-media\"\n        (click)=\"playPlaylist(media)\">\n        <icon name=\"youtube-play 2x\"></icon>\n      </button>\n    </div>\n\n    <section class=\"item-actions is-absolute is-rounded-bottom\">\n      <a\n        class=\"playlist-link\"\n        [routerLink]=\"[ link + '/playlist', media.id ]\"\n        [tooltip]=\"media.snippet.title\"\n        (click)=\"onNavigateToPlaylist()\">\n        <h4 class=\"title ellipsis\">\n          {{ media.snippet.title }}\n        </h4>\n        <section class=\"text-info is-flex-row is-flex-valign\">\n          <icon name=\"list-ul\"></icon>\n          <span class=\"is-flex-1\">{{ media.contentDetails.itemCount }}</span>\n          <icon\n            *ngIf=\"loading\"\n            name=\"refresh spin\"\n            class=\"loader\"></icon>\n        </section>\n      </a>\n    </section>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/youtube-playlist/youtube-playlist.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/youtube-playlist/youtube-playlist.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 320px) {\n  :host {\n    --playlist-primary: var(--brand-primary);\n    --playlist-bg-primary: var(--brand-bg-lite-transparent);\n    --playlist-dark-transparent: var(--brand-dark-bg-color-transparent);\n    --playlist-inverse-color: var(--brand-inverse-text);\n    --playlist-link-color: var(--link-primary-color); }\n    :host .youtube-playlist-item {\n      margin: 0;\n      padding: 1rem;\n      border-radius: 0;\n      background-color: transparent;\n      box-shadow: none;\n      border: none; }\n      :host .youtube-playlist-item .playlist-link .title {\n        color: var(--playlist-link-color); }\n    :host .media-title {\n      text-shadow: none;\n      display: block;\n      position: relative;\n      font-family: 'Open Sans Condensed', sans-serif;\n      text-decoration: none; }\n    :host .front {\n      padding: 0px;\n      background: var(--playlist-bg-primary);\n      box-shadow: 0 1px 30px -5px var(--playlist-dark-transparent);\n      position: relative; }\n    :host .media-thumb {\n      display: block;\n      position: relative;\n      cursor: pointer;\n      font-weight: normal; }\n      :host .media-thumb .thumb-image {\n        transition: -webkit-transform 0.3s ease-out;\n        transition: transform 0.3s ease-out;\n        transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n        height: 100%;\n        -webkit-transform: scale(1.7) translatey(0);\n                transform: scale(1.7) translatey(0);\n        display: block;\n        max-width: 100%;\n        margin-left: auto;\n        margin-right: auto;\n        border: 0; }\n      :host .media-thumb:hover .thumb-image {\n        -webkit-transform: scale(1.4) translate(0, 0);\n                transform: scale(1.4) translate(0, 0); }\n      :host .media-thumb:hover .play-media {\n        opacity: 1;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n      :host .media-thumb .play-media {\n        opacity: 0;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        background: var(--playlist-primary);\n        color: var(--playlist-inverse-color);\n        border: none; }\n      :host .media-thumb .thumbnail {\n        overflow: hidden;\n        clear: both;\n        height: 190px;\n        border: none;\n        background-color: var(--playlist-inverse-color);\n        padding: 0;\n        box-shadow: none;\n        margin-bottom: 0; }\n    :host .item-actions {\n      padding: 1rem;\n      margin: 0;\n      bottom: 0px;\n      width: 100%;\n      background-color: var(--playlist-dark-transparent); }\n      :host .item-actions .title {\n        margin: 0; }\n      :host .item-actions .playlist-link:hover {\n        text-decoration: none; }\n      :host .item-actions .loader {\n        color: var(--brand-primary); } }\n\n@media (min-width: 768px) {\n  :host {\n    width: 24.5%;\n    max-width: 28rem; }\n    :host .item-actions .playlist-link {\n      display: block; } }\n\n@media (min-width: 767px) {\n  :host .youtube-list-item {\n    max-width: 320px; } }\n\n@media (min-width: 1440px) {\n  :host {\n    width: 280px; } }\n"

/***/ }),

/***/ "./src/app/shared/components/youtube-playlist/youtube-playlist.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/youtube-playlist/youtube-playlist.ts ***!
  \************************************************************************/
/*! exports provided: YoutubePlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlaylistComponent", function() { return YoutubePlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let YoutubePlaylistComponent = class YoutubePlaylistComponent {
    constructor() {
        this.link = './';
        this.play = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isPlaying = false;
        this.loading = false;
    }
    playPlaylist(media) {
        this.play.next(media);
    }
    queuePlaylist(media) {
        this.queue.next(media);
    }
    onNavigateToPlaylist() {
        this.loading = true;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], YoutubePlaylistComponent.prototype, "media", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], YoutubePlaylistComponent.prototype, "link", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubePlaylistComponent.prototype, "play", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], YoutubePlaylistComponent.prototype, "queue", void 0);
YoutubePlaylistComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'youtube-playlist',
        styles: [__webpack_require__(/*! ./youtube-playlist.scss */ "./src/app/shared/components/youtube-playlist/youtube-playlist.scss")],
        template: __webpack_require__(/*! ./youtube-playlist.html */ "./src/app/shared/components/youtube-playlist/youtube-playlist.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
    })
], YoutubePlaylistComponent);



/***/ }),

/***/ "./src/app/shared/directives/icon/icon.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/icon/icon.directive.ts ***!
  \**********************************************************/
/*! exports provided: ICON_PREFIX_BRAND, IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_PREFIX_BRAND", function() { return ICON_PREFIX_BRAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_data_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/data.utils */ "./src/app/shared/utils/data.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


const ICON_PREFIX_STANDARD = 'fa';
const ICON_PREFIX_BRAND = 'fa';
const ICON_LIB_PREFIX = 'fa';
let IconComponent = class IconComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.name = '';
        this.prefix = ICON_PREFIX_STANDARD;
        this.icons = {
            fa: true
        };
    }
    ngOnInit() {
        const { name } = this;
        let classes = [this.prefix];
        if (name) {
            classes = [...classes, ...this.createIconStyles(name)];
        }
        this.setClasses(classes);
    }
    ngOnChanges({ name }) {
        if (name && Object(_utils_data_utils__WEBPACK_IMPORTED_MODULE_1__["isNewChange"])(name)) {
            this.createIconStyles(name.currentValue);
        }
    }
    createIconStyles(names) {
        return names.split(' ').map(name => `${ICON_LIB_PREFIX}-${name}`);
    }
    setClasses(names) {
        names.forEach(name => this.renderer.addClass(this.el.nativeElement, name));
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], IconComponent.prototype, "name", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], IconComponent.prototype, "prefix", void 0);
IconComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'icon',
        template: `<ng-content></ng-content>`
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
], IconComponent);



/***/ }),

/***/ "./src/app/shared/directives/icon/index.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/directives/icon/index.ts ***!
  \*************************************************/
/*! exports provided: ICON_PREFIX_BRAND, IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.directive */ "./src/app/shared/directives/icon/icon.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICON_PREFIX_BRAND", function() { return _icon_directive__WEBPACK_IMPORTED_MODULE_0__["ICON_PREFIX_BRAND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return _icon_directive__WEBPACK_IMPORTED_MODULE_0__["IconComponent"]; });




/***/ }),

/***/ "./src/app/shared/directives/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/directives/index.ts ***!
  \********************************************/
/*! exports provided: CORE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORE_DIRECTIVES", function() { return CORE_DIRECTIVES; });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/app/shared/directives/icon/index.ts");

const CORE_DIRECTIVES = [_icon__WEBPACK_IMPORTED_MODULE_0__["IconComponent"]];


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var ngx_typeahead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-typeahead */ "./node_modules/ngx-typeahead/esm2015/ngx-typeahead.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm2015/ngx-youtube-player.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives */ "./src/app/shared/directives/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes */ "./src/app/shared/pipes/index.ts");
/* harmony import */ var ngx_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-tooltip */ "./node_modules/ngx-tooltip/index.js");
/* harmony import */ var ngx_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_tooltip__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YoutubePlayerModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
            ngx_typeahead__WEBPACK_IMPORTED_MODULE_5__["NgxTypeaheadModule"],
            ngx_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"]
        ],
        declarations: [..._components__WEBPACK_IMPORTED_MODULE_7__["CORE_COMPONENTS"], ..._directives__WEBPACK_IMPORTED_MODULE_8__["CORE_DIRECTIVES"], ..._pipes__WEBPACK_IMPORTED_MODULE_9__["PIPES"]],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ..._components__WEBPACK_IMPORTED_MODULE_7__["CORE_COMPONENTS"],
            ..._directives__WEBPACK_IMPORTED_MODULE_8__["CORE_DIRECTIVES"],
            ..._pipes__WEBPACK_IMPORTED_MODULE_9__["PIPES"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YoutubePlayerModule"],
            ngx_typeahead__WEBPACK_IMPORTED_MODULE_5__["NgxTypeaheadModule"],
            ngx_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"]
        ],
        providers: []
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! exports provided: PIPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIPES", function() { return PIPES; });
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var _toFriendlyDuration_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toFriendlyDuration.pipe */ "./src/app/shared/pipes/toFriendlyDuration.pipe.ts");
/* harmony import */ var _videoToThumb_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoToThumb.pipe */ "./src/app/shared/pipes/videoToThumb.pipe.ts");
/* harmony import */ var _parseTracks_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseTracks.pipe */ "./src/app/shared/pipes/parseTracks.pipe.ts");
/* harmony import */ var _isInQueue_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isInQueue.pipe */ "./src/app/shared/pipes/isInQueue.pipe.ts");





const PIPES = [
    _search_pipe__WEBPACK_IMPORTED_MODULE_0__["SearchPipe"],
    _toFriendlyDuration_pipe__WEBPACK_IMPORTED_MODULE_1__["ToFriendlyDurationPipe"],
    _videoToThumb_pipe__WEBPACK_IMPORTED_MODULE_2__["VideoToThumbPipe"],
    _parseTracks_pipe__WEBPACK_IMPORTED_MODULE_3__["ParseTracksPipe"],
    _isInQueue_pipe__WEBPACK_IMPORTED_MODULE_4__["IsInQueuePipe"]
];


/***/ }),

/***/ "./src/app/shared/pipes/isInQueue.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/isInQueue.pipe.ts ***!
  \************************************************/
/*! exports provided: IsInQueuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsInQueuePipe", function() { return IsInQueuePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let IsInQueuePipe = class IsInQueuePipe {
    transform(media, medias) {
        return medias.includes(media.id);
    }
};
IsInQueuePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'isInQueue' })
], IsInQueuePipe);



/***/ }),

/***/ "./src/app/shared/pipes/parseTracks.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/parseTracks.pipe.ts ***!
  \**************************************************/
/*! exports provided: ParseTracksPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseTracksPipe", function() { return ParseTracksPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_media_parser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/media-parser.service */ "./src/app/core/services/media-parser.service.ts");
/* harmony import */ var memo_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memo-decorator */ "./node_modules/memo-decorator/index.js");
/* harmony import */ var memo_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(memo_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ParseTracksPipe = class ParseTracksPipe {
    constructor(mediaParser) {
        this.mediaParser = mediaParser;
    }
    transform(value) {
        return this.mediaParser.parseTracks(value);
    }
};
__decorate([
    memo_decorator__WEBPACK_IMPORTED_MODULE_2___default()(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ParseTracksPipe.prototype, "transform", null);
ParseTracksPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'parseTracks' }),
    __metadata("design:paramtypes", [_core_services_media_parser_service__WEBPACK_IMPORTED_MODULE_1__["MediaParserService"]])
], ParseTracksPipe);



/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SearchPipe = class SearchPipe {
    transform(values, args) {
        const term = args.length ? args.toLowerCase() : '';
        const matchString = (key) => {
            if (typeof key === 'string') {
                return key.toLowerCase().indexOf(term) > -1;
            }
            return Object.keys(key).some(prop => matchString(key[prop]));
        };
        return values.filter(matchString);
    }
};
SearchPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'search',
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/shared/pipes/toFriendlyDuration.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/toFriendlyDuration.pipe.ts ***!
  \*********************************************************/
/*! exports provided: ToFriendlyDurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToFriendlyDurationPipe", function() { return ToFriendlyDurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var memo_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memo-decorator */ "./node_modules/memo-decorator/index.js");
/* harmony import */ var memo_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(memo_decorator__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ToFriendlyDurationPipe = class ToFriendlyDurationPipe {
    transform(value, args) {
        const time = value;
        if (!time) {
            return '...';
        }
        return ['PT', 'H', 'M', 'S']
            .reduce((prev, cur, i, arr) => {
            const now = prev.rest.split(cur);
            if (cur !== 'PT' && cur !== 'H' && !prev.rest.match(cur)) {
                prev.new.push('00');
            }
            if (now.length === 1) {
                return prev;
            }
            prev.new.push(now[0]);
            return {
                rest: now[1].replace(cur, ''),
                new: prev.new
            };
        }, { rest: time, new: [] })
            .new.filter(_time => _time !== '')
            .map(_time => (_time.length === 1 ? `0${_time}` : _time))
            .join(':');
    }
};
__decorate([
    memo_decorator__WEBPACK_IMPORTED_MODULE_1___default()(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Object)
], ToFriendlyDurationPipe.prototype, "transform", null);
ToFriendlyDurationPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'toFriendlyDuration'
    })
], ToFriendlyDurationPipe);



/***/ }),

/***/ "./src/app/shared/pipes/videoToThumb.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/videoToThumb.pipe.ts ***!
  \***************************************************/
/*! exports provided: VideoToThumbPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoToThumbPipe", function() { return VideoToThumbPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_media_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/media.utils */ "./src/app/shared/utils/media.utils.ts");
/* harmony import */ var memo_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memo-decorator */ "./node_modules/memo-decorator/index.js");
/* harmony import */ var memo_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(memo_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let VideoToThumbPipe = class VideoToThumbPipe {
    transform(value) {
        const thumb = Object(_utils_media_utils__WEBPACK_IMPORTED_MODULE_1__["extractThumbUrl"])(value);
        return thumb || '';
    }
};
__decorate([
    memo_decorator__WEBPACK_IMPORTED_MODULE_2___default()(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], VideoToThumbPipe.prototype, "transform", null);
VideoToThumbPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'videoToThumb' })
], VideoToThumbPipe);



/***/ }),

/***/ "./src/app/shared/utils/data.utils.ts":
/*!********************************************!*\
  !*** ./src/app/shared/utils/data.utils.ts ***!
  \********************************************/
/*! exports provided: isNewChange, toPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewChange", function() { return isNewChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPayload", function() { return toPayload; });
const isNewChange = (prop) => {
    return prop.currentValue !== prop.previousValue;
};
const toPayload = (action) => action.payload;


/***/ }),

/***/ "./src/app/shared/utils/media.utils.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utils/media.utils.ts ***!
  \*********************************************/
/*! exports provided: getSnippet, extractThumbnail, extractThumbUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSnippet", function() { return getSnippet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractThumbnail", function() { return extractThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractThumbUrl", function() { return extractThumbUrl; });
function getSnippet(media) {
    return media && media.hasOwnProperty('snippet') && media.snippet;
}
function extractThumbnail(snippet) {
    let thumbUrl = '';
    if (snippet) {
        const thumbs = snippet.thumbnails;
        const sizes = ['high', 'standard', 'default'];
        const thumb = sizes.reduce((acc, size) => {
            acc.result = !acc.result.length && thumbs[size] ? thumbs[size].url : acc.result;
            return acc;
        }, { result: '' });
        thumbUrl = thumb.result;
    }
    return thumbUrl;
}
function extractThumbUrl(media) {
    return extractThumbnail(getSnippet(media));
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    youtube: {
        API_KEY: 'AIzaSyCLacjgOFr-o7EwjneiXcJLg6nbjlB_a1I',
        CLIENT_ID: '478407516629-bcehs3a266favp1agbtj0ekb4n5g40r3.apps.googleusercontent.com'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sudee\Desktop\final\echoes-player-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
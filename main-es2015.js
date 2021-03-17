(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/System-administration/change-password/change-password.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/System-administration/change-password/change-password.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>change-password works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/System-administration/login/login.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/System-administration/login/login.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-content>\n        <!-- [formGroup]=\"form\" -->\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <img src=\"assets/logo/wk-logo.jpg\"/>\n            <h2>Log In</h2>\n            <mat-error *ngIf=\"loginInvalid\">\n                The username and password were not recognised\n            </mat-error>\n            <!-- <mat-form-field class=\"full-width-input\">\n                <input matInput placeholder=\"Email\" name=\"username\" formControlName=\"username\" required>\n                <mat-error>\n                    Please provide a valid email address\n                </mat-error>\n            </mat-form-field> -->\n            <mat-form-field class=\"full-width-input\">\n                <!-- <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required> -->\n                <input matInput type=\"text\" placeholder=\"Username\" formControlName=\"username\" required>\n                <mat-error>\n                    Please provide a valid username\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"full-width-input\">\n                <!-- <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required> -->\n                <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n                <mat-error>\n                    Please provide a valid password\n                </mat-error>\n            </mat-form-field>\n            <mat-error>\n                {{errorMessage}}\n            </mat-error>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!isConnecting\" type=\"submit\">Login</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"isConnecting\" type=\"button\">Connecting..</button>\n\n\n        </form>\n    </mat-card-content>\n</mat-card>\n\n\n<!-- <mat-card>\n\t<h4><i>mat-form-field</i> with <i>mat-error</i></h4>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Email\" [(ngModel)]=\"username\" required>\n\t\t<mat-error>Email Required!</mat-error>\n\t</mat-form-field>\n</mat-card> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n<!-- <app-front-page></app-front-page> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client-edit/client-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client-edit/client-edit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"ownerForm\" class=\"normal-form\" (ngSubmit)=\"onSubmit()\">\n    <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n        <mat-grid-tile>\n            <div class=\"controles-container\">\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Names*\" formControlName=\"name\" id=\"name\">\n                    <mat-hint align=\"end\">Not more then 20 characters long.</mat-hint>\n                    <mat-error *ngIf=\"hasError('name', 'required')\">Names is required</mat-error>\n                    <mat-error *ngIf=\"hasError('name', 'maxlength')\">You have more than 60 characters</mat-error>\n                </mat-form-field>\n                &nbsp;&nbsp;\n                <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Phone*\" formControlName=\"phone\" id=\"phone\">\n                    <mat-hint align=\"end\">Not more then 20 characters long.</mat-hint>\n                    <mat-error *ngIf=\"hasError('phone', 'required')\">Phone is required</mat-error>\n                    <mat-error *ngIf=\"hasError('phone', 'maxlength')\">You have more than 60 characters</mat-error>\n                </mat-form-field>\n                <!-- <mat-form-field>\n                    <mat-select formControlName=\"roleId\" placeholder=\"Roles\">\n                        <mat-option>None</mat-option>\n                        <ng-container *ngFor=\"let role of roles\">\n                            <mat-option value=\"{{role.roleid}}\">{{role.name}}</mat-option>\n                        </ng-container>\n                    </mat-select>\n                </mat-form-field> -->\n               \n                <div class=\"button-row\">\n                    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n                    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"onClear()\">Clear</button>\n                </div>\n\n\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div class=\"controles-container\">\n\n            </div>\n        </mat-grid-tile>\n    </mat-grid-list>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\" [hidden]=\"isNewUser\">\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" (click)=\"newEmployee()\">+ New Client</button>\n    </div>\n    <table #table mat-table [dataSource]=\"dataSource\">\n\n        <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n        <!-- Position Column -->\n        <!-- <ng-container matColumnDef=\"position\">\n            <th mat-header-cell *matHeaderCellDef> No. </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n        </ng-container> -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> ID </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n    \n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Action </th>\n            <td mat-cell *matCellDef=\"let element\">\n                <!-- <button mat-mini-fab color=\"accent\" type=\"button\" (click)=\"deleteProduct(element)\" aria-label=\"Example icon button with a delete icon\">\n                    <mat-icon>delete</mat-icon>\n                </button>&nbsp;&nbsp;\n                <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n                    <mat-icon>edit</mat-icon>\n                </button> -->\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                    <!--  -->\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"openDialog(element)\">\n                        <mat-icon>add_shopping_cart</mat-icon>\n                        <span>Sold</span>\n                    </button>\n                    <!-- <button mat-menu-item disabled>\n                        <mat-icon>announcement</mat-icon>\n                        <span>Issues</span>\n                    </button>\n                    <button mat-menu-item>\n                        <mat-icon>notifications_off</mat-icon>\n                        <span>DIsable alerts</span>\n                    </button> -->\n                </mat-menu>\n            </td>\n        </ng-container>\n\n        \n\n\n\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 50]\" showFirstLastButtons></mat-paginator>\n</div>\n<!-- <button type=\"button\" (click)=\"addItem()\">Add</button> -->\n\n\n\n<div *ngIf=\"isNewUser\">\n    <app-client-edit (backToTitle)=\"backToProduct($event)\"></app-client-edit>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/to_clients/front-page/front-page.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/to_clients/front-page/front-page.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-profile works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/partner-service-edit/partner-service-edit.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/partner-service-edit/partner-service-edit.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/partner-services/partner-services.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/partner-services/partner-services.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>header works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <span>GAHUNDA</span>\n    <span class=\"spacer\"></span>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <!--  -->\n        <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"loginRT()\">\n            <mat-icon>fingerprint</mat-icon>\n            <span>Login</span>\n        </button>\n        <button mat-menu-item disabled>\n            <mat-icon>announcement</mat-icon>\n            <span>Issues</span>\n        </button>\n        <button mat-menu-item>\n            <mat-icon>notifications_off</mat-icon>\n            <span>DIsable alerts</span>\n        </button>\n        <button mat-menu-item (click)=\"logoutRT()\">\n            <mat-icon>fingerprint</mat-icon>\n            <span>Sin out</span>\n        </button>\n    </mat-menu>\n</mat-toolbar>\n\n<mat-tab-group>\n    <!-- <mat-tab label=\"Gallery\">\n        <div>\n            <mat-card *ngFor=\"let spaceScreen of spaceScreens; let i = index\">\n                <img mat-card-image src=\"{{ spaceScreen.img }}\">\n                <mat-card-content>\n                    <p>{{ spaceScreen.caption }}</p>\n                </mat-card-content>\n                <mat-card-actions>\n                    <button mat-button (click)=\"likeMe(i)\">\n                        <i class=\"material-icons mat-18\" [class.red-color]=\"spaceScreen.liked == '1'\">favorite</i> LIKE\n                    </button>\n                    <button mat-button (click)=\"deleteMe(i)\">\n                    <button mat-button (click)=\"deleteMe(spaceScreen.id)\">\n                        <i class=\"material-icons mat-18\">delete</i> DELETE\n                    </button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n        <div *ngIf=\"spaceScreens.length === 0\">\n            <h2>No Items..</h2>\n        </div>\n    </mat-tab> -->\n    <mat-tab label=\"User Management\">\n        <div id=\"page-padding\">\n            <h1>User Management</h1>\n            <!-- <p>Here you can control the various settings associated with your app. There</p>\n            <label>Number of Thumbnails</label>\n            <mat-slider showTicks=\"true\" max=\"100\" min=\"0\" step=\"1\" thumbLabel=\"true\" value=\"18\"></mat-slider>\n            <mat-slide-toggle>Some setting</mat-slide-toggle> -->\n        </div>\n\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        User\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        User Management\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <!-- <app-users></app-users> -->\n            </mat-expansion-panel>\n            <!-- client management -->\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Client\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Client Management\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <app-clients></app-clients>\n            </mat-expansion-panel>\n            <!-- client management -->\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Partners\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Partner Management\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <!-- <app-partners></app-partners> -->\n            </mat-expansion-panel>\n            <!-- <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\"> -->\n            <!-- <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Self aware panel\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <p>I'm visible because I am open</p>\n            </mat-expansion-panel> -->\n        </mat-accordion>\n    </mat-tab>\n    <mat-tab label=\"Setting\">\n        <div id=\"page-products\">\n            <h1>Settings</h1>\n            <!-- <app-products></app-products> -->\n        </div>\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Partner Service\n                    </mat-panel-title>\n                    <!-- <mat-panel-description>\n                        User Management\n                    </mat-panel-description> -->\n                </mat-expansion-panel-header>\n                <app-partner-services></app-partner-services>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </mat-tab>\n</mat-tab-group>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/System-administration/change-password/change-password.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/System-administration/change-password/change-password.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1N5c3RlbS1hZG1pbmlzdHJhdGlvbi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/System-administration/change-password/change-password.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/System-administration/change-password/change-password.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChangePasswordComponent = class ChangePasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/System-administration/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.scss */ "./src/app/System-administration/change-password/change-password.component.scss")).default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/System-administration/login/login.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/System-administration/login/login.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU3lzdGVtLWFkbWluaXN0cmF0aW9uL2xvZ2luL0U6XFxBbmd1bGFyUHJvamVjdFxcaWhvaG8tdWkvc3JjXFxhcHBcXFN5c3RlbS1hZG1pbmlzdHJhdGlvblxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9TeXN0ZW0tYWRtaW5pc3RyYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJRTtFQUNFLGNBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL1N5c3RlbS1hZG1pbmlzdHJhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gICIsIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/System-administration/login/login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/System-administration/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(fb, route, router, authService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.errorMessage = '';
        this.isConnecting = false;
    }
    // ngOnInit() {
    // }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';
            this.form = this.fb.group({
                // email: ['', Validators.email],
                username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            if (yield this.authService.checkAuthenticated()) {
                yield this.router.navigate([this.returnUrl]);
            }
        });
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isConnecting = true;
            if (this.form.valid) {
                try {
                    const username = this.form.get('username').value;
                    const password = this.form.get('password').value;
                    // console.log(username, password);
                    // await this.authService.login(username, password);
                    this.errorMessage = '';
                    const data = {
                        username: username,
                        password: password
                    };
                    yield (yield this.authService.login(data))
                        .subscribe(data => {
                        this.authService.setToken(data.token);
                        this.router.navigate(['/dashboard']);
                    }, error => {
                        this.isConnecting = false;
                        // this.errorMessage = error.error.status === 401 ? 'Username or password is incorrect' : error.error.status;
                        console.log(error.error);
                        this.errorMessage = error + '';
                    });
                }
                catch (err) {
                    this.isConnecting = false;
                }
            }
            else {
                this.isConnecting = false;
            }
        });
    }
    onEnter(element) {
        if ((element.value !== undefined && element.value.length >= 0) || $(this).attr('placeholder') !== null) {
            element.parentNode.querySelector('label').classList.add('active');
        }
    }
    onExit(element) {
        if ((element.value !== undefined && element.value.length === 0) || $(this).attr('placeholder') === null) {
            element.parentNode.querySelector('label').classList.remove('active');
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/System-administration/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/System-administration/login/login.component.scss")).default]
    })
], LoginComponent);

function onEnter(element) {
    if ((element.value !== undefined && element.value.length >= 0) || $(this).attr('placeholder') !== null) {
        element.parentNode.querySelector('label').classList.add('active');
    }
}
function onExit(element) {
    if ((element.value !== undefined && element.value.length === 0) || $(this).attr('placeholder') === null) {
        element.parentNode.querySelector('label').classList.remove('active');
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_to_clients_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/to_clients/front-page/front-page.component */ "./src/app/components/to_clients/front-page/front-page.component.ts");
/* harmony import */ var _System_administration_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./System-administration/login/login.component */ "./src/app/System-administration/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");






const routes = [
    { path: 'login', component: _System_administration_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] },
    // { path: 'dashboard', component: TemplateComponent},
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | modules-dashboard-dashboard-module */ "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) },
    { path: 'front_view', component: _components_to_clients_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_3__["FrontPageComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ihoho-ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppConfig {
    constructor() {
        this.apiUrl = 'https://wckare.azurewebsites.net/';
        // tslint:disable-next-line:variable-name
        this.JWT_Token = 'IHOHO-MIS';
        // tslint:disable-next-line:variable-name
        this.Session_User = 'UserData';
        // tslint:disable-next-line:variable-name
        this.valide_User = 'session';
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _System_administration_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./System-administration/login/login.component */ "./src/app/System-administration/login/login.component.ts");
/* harmony import */ var _System_administration_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./System-administration/change-password/change-password.component */ "./src/app/System-administration/change-password/change-password.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./client-edit/client-edit.component */ "./src/app/client-edit/client-edit.component.ts");
/* harmony import */ var _setting_partner_services_partner_services_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./setting/partner-services/partner-services.component */ "./src/app/setting/partner-services/partner-services.component.ts");
/* harmony import */ var _setting_partner_service_edit_partner_service_edit_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./setting/partner-service-edit/partner-service-edit.component */ "./src/app/setting/partner-service-edit/partner-service-edit.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_to_clients_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/to_clients/front-page/front-page.component */ "./src/app/components/to_clients/front-page/front-page.component.ts");







// import {
//   MatAutocompleteModule,
//   MatButtonToggle,
//   MatButtonToggleModule,
//   MatTabsModule,
//   MatToolbarModule,
//   MatTooltipModule,
// } from '@angular/material';




































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_29__["AppComponent"],
            _System_administration_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
            _System_administration_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_31__["ChangePasswordComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_32__["HeaderComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_33__["FooterComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_36__["WelcomeComponent"],
            _clients_clients_component__WEBPACK_IMPORTED_MODULE_37__["ClientsComponent"],
            // PartnersComponent,
            // UsersComponent,
            // UserEditComponent,
            _client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_38__["ClientEditComponent"],
            // PartnerEditComponent,
            _setting_partner_services_partner_services_component__WEBPACK_IMPORTED_MODULE_39__["PartnerServicesComponent"],
            _setting_partner_service_edit_partner_service_edit_component__WEBPACK_IMPORTED_MODULE_40__["PartnerServiceEditComponent"],
            _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_41__["UserProfileComponent"],
            _components_to_clients_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_42__["FrontPageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"]
        ],
        providers: [_app_config__WEBPACK_IMPORTED_MODULE_35__["AppConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_29__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/client-edit/client-edit.component.scss":
/*!********************************************************!*\
  !*** ./src/app/client-edit/client-edit.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form.normal-form {\n  margin: 50px;\n}\n\n.controles-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controles-container > * {\n  width: 100%;\n}\n\n.add-bottom-padding {\n  padding-bottom: 10px;\n}\n\nmat-radio-group mat-radio-button {\n  margin-left: 5px;\n}\n\n.button-row button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50LWVkaXQvRTpcXEFuZ3VsYXJQcm9qZWN0XFxpaG9oby11aS9zcmNcXGFwcFxcY2xpZW50LWVkaXRcXGNsaWVudC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnQtZWRpdC9jbGllbnQtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFlBQUE7QUNISjs7QURLQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0FDRko7O0FES0E7RUFDSSxvQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURTQTtFQUNJLFdBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC1lZGl0L2NsaWVudC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWF0LWZvcm0tZmllbGR7XHJcbi8vICAgICB3aWR0aDogNDAwcHg7XHJcbi8vIH1cclxuXHJcbmZvcm0ubm9ybWFsLWZvcm0ge1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG59XHJcbi5jb250cm9sZXMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNvbnRyb2xlcy1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWRkLWJvdHRvbS1wYWRkaW5ne1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4vLyBtYXQtY2FyZC10aXRsZXtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuXHJcbi5idXR0b24tcm93IGJ1dHRvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG59IiwiZm9ybS5ub3JtYWwtZm9ybSB7XG4gIG1hcmdpbjogNTBweDtcbn1cblxuLmNvbnRyb2xlcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkLWJvdHRvbS1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbm1hdC1yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/client-edit/client-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/client-edit/client-edit.component.ts ***!
  \******************************************************/
/*! exports provided: ClientEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditComponent", function() { return ClientEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/users/user.service */ "./src/app/services/users/user.service.ts");





let ClientEditComponent = class ClientEditComponent {
    // genders = [
    //   { id: 3, value: 'Male' },
    //   { id: 2, value: 'Female' },
    //   { id: 4, value: 'Other' }
    // ];
    constructor(location, userService, datepipe) {
        this.location = location;
        this.userService = userService;
        this.datepipe = datepipe;
        this.hasError = (controlName, errorName) => {
            return this.ownerForm.controls[controlName].hasError(errorName);
        };
        // public onCancel = () => {
        //   this.location.back();
        // }
        this.createOwner = (ownerFormValue) => {
            if (this.ownerForm.valid) {
                this.executeOwnerCreation(ownerFormValue);
            }
        };
        this.executeOwnerCreation = (ownerFormValue) => {
            const owner = {
                name: ownerFormValue.name,
                phone: ownerFormValue.phone,
            };
            const apiUrl = 'api/owner';
            // this.repository.create(apiUrl, owner)
            //   .subscribe(res => {
            //     //this is temporary, until we create our dialogs
            //     this.location.back();
            //   },
            //     (error => {
            //       //temporary as well
            //       this.location.back();
            //     })
            //   );
        };
        this.loadRoles();
    }
    ngOnInit() {
        this.ownerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
        });
    }
    loadRoles() {
        this.userService.getRoles()
            .subscribe(data => { this.roles = data; }, error => { });
    }
    onClear() {
        this.ownerForm.reset();
        this.initializeFormGroup();
    }
    initializeFormGroup() {
        this.ownerForm.setValue({
            name: '',
            phone: '',
        });
    }
    onSubmit() {
        if (this.ownerForm.invalid) {
            return;
        }
        else {
            // this.ownerForm.controls['dob'].setValue(this.datepipe.transform(this.ownerForm.get('dob').value, 'yyyy-MM-dd'));
            console.log(this.ownerForm.value);
            this.userService.createUser(this.ownerForm.value)
                .subscribe(data => {
                window.location.reload();
                console.log('well done');
            }, error => { console.log(error + ''); });
        }
        // console.log(this.datepipe.transform(this.ownerForm.get('dob').value, 'yyyy-MM-dd'));
    }
};
ClientEditComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }
];
ClientEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-client-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/client-edit/client-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-edit.component.scss */ "./src/app/client-edit/client-edit.component.scss")).default]
    })
], ClientEditComponent);



/***/ }),

/***/ "./src/app/clients/clients.component.scss":
/*!************************************************!*\
  !*** ./src/app/clients/clients.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9FOlxcQW5ndWxhclByb2plY3RcXGlob2hvLXVpL3NyY1xcYXBwXFxjbGllbnRzXFxjbGllbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FET0U7RUFDRSx5SEFBQTtFQUNBLFlBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjRweCAwO1xyXG4gIH1cclxuXHJcbiAgLy8gbWF0LXJhaXNlZC1idXR0b257XHJcbiAgLy8gICBwYWRkaW5nOiAxMDBweCAxMDBweCAwO1xyXG4gIC8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vIH1cclxuXHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmc6IDhweCAyNHB4IDA7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientElement, ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientElement", function() { return ClientElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/users/user.service */ "./src/app/services/users/user.service.ts");





class ClientElement {
}
let ClientsComponent = class ClientsComponent {
    constructor(userService) {
        this.userService = userService;
        // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'type', 'action'];
        this.displayedColumns = ['id', 'name'];
    }
    ngOnInit() {
        this.loadUsers('none');
    }
    loadUsers(value) {
        this.userService.getClients()
            .subscribe(data => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            this.dataSource.paginator = this.paginator;
            // this.table.renderRows();
            if (value === 'add' || value === 'delete') {
                window.location.reload();
            }
        }, error => { console.log(error + ''); });
    }
    newEmployee() {
        this.isNewUser = true;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    backToProduct(even) {
        // if (even) {}
        this.loadUsers('add');
        this.isNewUser = even;
    }
    openDialog(element) {
        // const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
        //   width: '250px',
        //   data: {name: element.name, productid: element.id}
        // });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   this.animal = result;
        // });
    }
};
ClientsComponent.ctorParameters = () => [
    { type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: false })
], ClientsComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], ClientsComponent.prototype, "paginator", void 0);
ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clients',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clients.component.scss */ "./src/app/clients/clients.component.scss")).default]
    })
], ClientsComponent);



/***/ }),

/***/ "./src/app/components/to_clients/front-page/front-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/to_clients/front-page/front-page.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9fY2xpZW50cy9mcm9udC1wYWdlL2Zyb250LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/to_clients/front-page/front-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/to_clients/front-page/front-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: FrontPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageComponent", function() { return FrontPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FrontPageComponent = class FrontPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
FrontPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-front-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./front-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/to_clients/front-page/front-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./front-page.component.scss */ "./src/app/components/to_clients/front-page/front-page.component.scss")).default]
    })
], FrontPageComponent);



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserProfileComponent = class UserProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/components/user-profile/user-profile.component.scss")).default]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let AuthService = class AuthService {
    constructor(router, http, config) {
        this.router = router;
        this.http = http;
        this.config = config;
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json;', 'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                Accept: 'q=0.8;application/json;q=0.9'
            })
        };
        this.postUrl = this.config.apiUrl;
    }
    isLogedIn() {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    }
    login(credentials) {
        const body = JSON.stringify(credentials);
        return this.http.post(this.config.apiUrl + 'users/login', body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleErrors));
    }
    setToken(token) {
        localStorage.setItem(this.config.JWT_Token, token);
    }
    getToken() {
        return localStorage.getItem(this.config.JWT_Token);
    }
    setLoginUser(userData, response) {
        localStorage.setItem(this.config.Session_User, userData);
    }
    setUserSession(Persmission) {
        localStorage.setItem(this.config.valide_User, Persmission);
    }
    getUserSession() {
        return JSON.parse(localStorage.getItem(this.config.valide_User));
    }
    checkAuthenticated() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const authenticated = await this.authClient.session.exists();
            // this.isAuthenticated.next(authenticated);
            // return authenticated;
            return null;
        });
    }
    logout(redirect) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // await this.authClient.signOut();
                this.isAuthenticated.next(false);
                this.router.navigate([redirect]);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    handleErrors(error) {
        if (error.status > 0) {
            if (error.status > 0) {
                if (error.status === 401) {
                    if (error) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
                    }
                    else {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Unauthorized');
                    }
                }
                else if (error.status === 500) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Contact your administrator');
                }
                else if (error.status === 302) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Already have an open session.');
                }
                else if (error.status === 404) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error || 'Server error');
                }
            }
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Please check your connection or Contact Your administrator');
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/users/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/users/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);








let UserService = class UserService {
    constructor(http, configuration, authService) {
        this.http = http;
        this.configuration = configuration;
        this.authService = authService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json;', 'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                // Authorization: this.authService.getToken(),
                Accept: 'q=0.8;application/json;q=0.9',
                'Access-Control-Max-Age': '600',
                'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
                Pragma: 'no-cache',
                Expires: '0'
            })
        };
        this.url = this.configuration.apiUrl;
    }
    getUsers() {
        return this.http.get(this.url + 'users', this.httpOptions);
    }
    createUser(user) {
        const body = JSON.stringify(user);
        return this.http.post(this.url + 'users', body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrors));
    }
    createPartner(data) {
        const user = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem(this.configuration.JWT_Token));
        data.userId = user.UserId;
        const body = JSON.stringify(data);
        return this.http.post(this.url + 'partners', body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrors));
    }
    createBarber(data) {
        const user = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem(this.configuration.JWT_Token));
        data.userId = user.UserId;
        data.partnerId = +user.PartnerId;
        const body = JSON.stringify(data);
        return this.http.post(this.url + 'barbers', body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrors));
    }
    getBarbers() {
        const user = jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem(this.configuration.JWT_Token));
        return this.http.get(this.url + 'barbers/partner/' + user.PartnerId, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrors));
    }
    getClients() {
        return this.http.get(this.url + 'businessClients', this.httpOptions);
    }
    getPartners() {
        return this.http.get(this.url + 'partners', this.httpOptions);
    }
    getRoles() {
        return this.http.get(this.url + 'roles', this.httpOptions);
    }
    getBusinessService() {
        return this.http.get(this.url + 'businessServices', this.httpOptions);
    }
    getParterService() {
        return this.http.get(this.url + 'roles', this.httpOptions);
    }
    createParterService(user) {
        const body = JSON.stringify(user);
        return this.http.post(this.url + 'partnerServices', body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrors));
    }
    handleErrors(error) {
        console.log(error);
        if (error.status > 0) {
            if (error.status > 0) {
                if (error.status === 401) {
                    // return throwError('Unauthorized');
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
                }
                else if (error.status === 500) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Please try again');
                }
                else if (error.status === 302) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Already have an open session.');
                }
                else if (error.status === 404) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
                }
                else {
                    console.log(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error || 'Please try again');
                }
            }
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Check Connection and Try again');
        }
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/setting/partner-service-edit/partner-service-edit.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/setting/partner-service-edit/partner-service-edit.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form.normal-form {\n  margin: 50px;\n}\n\n.controles-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controles-container > * {\n  width: 100%;\n}\n\n.add-bottom-padding {\n  padding-bottom: 10px;\n}\n\nmat-radio-group mat-radio-button {\n  margin-left: 5px;\n}\n\n.button-row button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9wYXJ0bmVyLXNlcnZpY2UtZWRpdC9FOlxcQW5ndWxhclByb2plY3RcXGlob2hvLXVpL3NyY1xcYXBwXFxzZXR0aW5nXFxwYXJ0bmVyLXNlcnZpY2UtZWRpdFxccGFydG5lci1zZXJ2aWNlLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmcvcGFydG5lci1zZXJ2aWNlLWVkaXQvcGFydG5lci1zZXJ2aWNlLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFBO0FDSEo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtBQ0ZKOztBREtBO0VBQ0ksb0JBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FEU0E7RUFDSSxXQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3BhcnRuZXItc2VydmljZS1lZGl0L3BhcnRuZXItc2VydmljZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWF0LWZvcm0tZmllbGR7XHJcbi8vICAgICB3aWR0aDogNDAwcHg7XHJcbi8vIH1cclxuXHJcbmZvcm0ubm9ybWFsLWZvcm0ge1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG59XHJcbi5jb250cm9sZXMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNvbnRyb2xlcy1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWRkLWJvdHRvbS1wYWRkaW5ne1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4vLyBtYXQtY2FyZC10aXRsZXtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuXHJcbi5idXR0b24tcm93IGJ1dHRvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG59IiwiZm9ybS5ub3JtYWwtZm9ybSB7XG4gIG1hcmdpbjogNTBweDtcbn1cblxuLmNvbnRyb2xlcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5jb250cm9sZXMtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkLWJvdHRvbS1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbm1hdC1yYWRpby1ncm91cCBtYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/setting/partner-service-edit/partner-service-edit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/setting/partner-service-edit/partner-service-edit.component.ts ***!
  \********************************************************************************/
/*! exports provided: PartnerServiceEditComponent, PartnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerServiceEditComponent", function() { return PartnerServiceEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerService", function() { return PartnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users/user.service */ "./src/app/services/users/user.service.ts");




let PartnerServiceEditComponent = class PartnerServiceEditComponent {
    constructor(userService) {
        this.userService = userService;
        this.businesses = [];
        this.partners = [];
        this.backToUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasError = (controlName, errorName) => {
            return this.ownerForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.ownerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            partnerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            businessServiceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            seats: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            minDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
        });
        this.loadBusinessService();
        this.loadPartners();
    }
    loadBusinessService() {
        this.userService.getBusinessService()
            .subscribe(data => { this.businesses = data; }, error => { });
    }
    loadPartners() {
        this.userService.getPartners()
            .subscribe(data => { this.partners = data; }, error => { });
    }
    // public createOwner = (ownerFormValue) => {
    //   if (this.ownerForm.valid) {
    //     this.executeOwnerCreation(ownerFormValue);
    //   }
    // }
    // private executeOwnerCreation = (ownerFormValue) => {
    //   const owner: OwnerForCreation = {
    //     names: ownerFormValue.names,
    //     roleId: ownerFormValue.roleId,
    //     username: ownerFormValue.username,
    //   };
    //   const apiUrl = 'api/owner';
    // }
    initializeFormGroup() {
        this.ownerForm.setValue({
            partnerId: '',
            businessServiceId: '',
            price: '',
            seats: '',
            minDuration: '',
        });
    }
    onSubmit() {
        if (this.ownerForm.invalid) {
            return;
        }
        else {
            // this.ownerForm.controls['dob'].setValue(this.datepipe.transform(this.ownerForm.get('dob').value, 'yyyy-MM-dd'));
            console.log(this.ownerForm.value);
            this.userService.createParterService(this.ownerForm.value)
                .subscribe(data => {
                // window.location.reload();
                console.log('well done');
                this.closeForm();
            }, error => { console.log(error + ''); });
        }
        // console.log(this.datepipe.transform(this.ownerForm.get('dob').value, 'yyyy-MM-dd'));
    }
    onClear() {
        this.ownerForm.reset();
        this.initializeFormGroup();
        this.closeForm();
    }
    closeForm() {
        this.backToUser.emit(false);
    }
};
PartnerServiceEditComponent.ctorParameters = () => [
    { type: src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PartnerServiceEditComponent.prototype, "backToUser", void 0);
PartnerServiceEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partner-service-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partner-service-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/partner-service-edit/partner-service-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partner-service-edit.component.scss */ "./src/app/setting/partner-service-edit/partner-service-edit.component.scss")).default]
    })
], PartnerServiceEditComponent);

class PartnerService {
}


/***/ }),

/***/ "./src/app/setting/partner-services/partner-services.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/setting/partner-services/partner-services.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9wYXJ0bmVyLXNlcnZpY2VzL0U6XFxBbmd1bGFyUHJvamVjdFxcaWhvaG8tdWkvc3JjXFxhcHBcXHNldHRpbmdcXHBhcnRuZXItc2VydmljZXNcXHBhcnRuZXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmcvcGFydG5lci1zZXJ2aWNlcy9wYXJ0bmVyLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRE9FO0VBQ0UseUhBQUE7RUFDQSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3BhcnRuZXItc2VydmljZXMvcGFydG5lci1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjRweCAwO1xyXG4gIH1cclxuXHJcbiAgLy8gbWF0LXJhaXNlZC1idXR0b257XHJcbiAgLy8gICBwYWRkaW5nOiAxMDBweCAxMDBweCAwO1xyXG4gIC8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vIH1cclxuXHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmc6IDhweCAyNHB4IDA7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/setting/partner-services/partner-services.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/setting/partner-services/partner-services.component.ts ***!
  \************************************************************************/
/*! exports provided: PartnerServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerServicesComponent", function() { return PartnerServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users/user.service */ "./src/app/services/users/user.service.ts");





let PartnerServicesComponent = class PartnerServicesComponent {
    // dataSource = ELEMENT_DATA;
    // newPeriod: PeriodicElement;
    constructor(userService) {
        this.userService = userService;
        // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'type', 'action'];
        this.displayedColumns = ['names', 'role'];
    }
    ngOnInit() {
        this.loadPartnerService('add');
    }
    loadPartnerService(value) {
        this.userService.getUsers()
            .subscribe(data => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            this.dataSource.paginator = this.paginator;
            // this.table.renderRows();
            if (value === 'add' || value === 'delete') {
                // window.location.reload();
            }
            this.isNewUser = false;
        }, error => { console.log(error + ''); });
    }
};
PartnerServicesComponent.ctorParameters = () => [
    { type: src_app_services_users_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: false })
], PartnerServicesComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], PartnerServicesComponent.prototype, "paginator", void 0);
PartnerServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partner-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partner-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/partner-services/partner-services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partner-services.component.scss */ "./src/app/setting/partner-services/partner-services.component.scss")).default]
    })
], PartnerServicesComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#page-products {\n  padding: 0 1.5em 1.5em 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9FOlxcQW5ndWxhclByb2plY3RcXGlob2hvLXVpL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2UtcHJvZHVjdHMge1xyXG4gICAgcGFkZGluZzogMCAxLjVlbSAxLjVlbSAxLjVlbTtcclxufSIsIiNwYWdlLXByb2R1Y3RzIHtcbiAgcGFkZGluZzogMCAxLjVlbSAxLjVlbSAxLjVlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WelcomeComponent = class WelcomeComponent {
    constructor(router) {
        this.router = router;
        this.spaceScreens = [];
    }
    ngOnInit() {
    }
    logoutRT() { }
    loginRT() {
        this.router.navigate(['/login']);
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")).default]
    })
], WelcomeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\AngularProject\ihoho-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
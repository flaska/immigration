(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/modules/admin/admin.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/admin/admin.module.ts ***!
  \*******************************************/
/*! exports provided: routes, AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _news_news_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news/news.module */ "./src/modules/news/news.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_main_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.admin.component */ "./src/modules/admin/main/main.admin.component.ts");
/* harmony import */ var _components_block_resource_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/block.resource.component */ "./src/modules/admin/components/block.resource.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'main', component: _main_main_admin_component__WEBPACK_IMPORTED_MODULE_5__["MainAdminComponent"] },
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _main_main_admin_component__WEBPACK_IMPORTED_MODULE_5__["MainAdminComponent"],
                _components_block_resource_component__WEBPACK_IMPORTED_MODULE_6__["BlockResourceComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _news_news_module__WEBPACK_IMPORTED_MODULE_3__["NewsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
            ],
            providers: []
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/modules/admin/components/block.resource.component.css":
/*!*******************************************************************!*\
  !*** ./src/modules/admin/components/block.resource.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block-url-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/modules/admin/components/block.resource.component.html":
/*!********************************************************************!*\
  !*** ./src/modules/admin/components/block.resource.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"full-width\">\r\n  <input matInput placeholder=\"URL\" [(ngModel)]=\"url\">\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"full-width\">\r\n  <input matInput placeholder=\"Password\" [(ngModel)]=\"password\">\r\n</mat-form-field>\r\n<button (click)=\"blockUrl()\" mat-raised-button color=\"accent\">Remove</button>\r\n\r\n<hr>\r\n\r\n<mat-list>\r\n  <mat-list-item *ngFor=\"let url of blockedUrls\"> {{url.date | date}} | {{url.url}} </mat-list-item>\r\n</mat-list>\r\n"

/***/ }),

/***/ "./src/modules/admin/components/block.resource.component.ts":
/*!******************************************************************!*\
  !*** ./src/modules/admin/components/block.resource.component.ts ***!
  \******************************************************************/
/*! exports provided: BlockResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockResourceComponent", function() { return BlockResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _news_services_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../news/services/news.api.service */ "./src/modules/news/services/news.api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockResourceComponent = /** @class */ (function () {
    function BlockResourceComponent(newsApiService, snackBar) {
        this.newsApiService = newsApiService;
        this.snackBar = snackBar;
    }
    BlockResourceComponent.prototype.fetchBlockedUrls = function () {
        var _this = this;
        this.newsApiService.getBlockedFeeds().subscribe(function (data) {
            _this.blockedUrls = data;
        });
    };
    BlockResourceComponent.prototype.ngOnInit = function () {
        this.fetchBlockedUrls();
    };
    BlockResourceComponent.prototype.blockUrl = function () {
        var _this = this;
        this.newsApiService.blockUrl(this.url, this.password).subscribe(function () {
            _this.snackBar.open("URL Blocked", "Close", {
                duration: 3000,
            });
            _this.fetchBlockedUrls();
        }, function () {
            _this.snackBar.open("Error", "Close", {
                duration: 3000,
            });
        });
    };
    BlockResourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'block-resource',
            template: __webpack_require__(/*! ./block.resource.component.html */ "./src/modules/admin/components/block.resource.component.html"),
            styles: [__webpack_require__(/*! ./block.resource.component.css */ "./src/modules/admin/components/block.resource.component.css")]
        }),
        __metadata("design:paramtypes", [_news_services_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], BlockResourceComponent);
    return BlockResourceComponent;
}());



/***/ }),

/***/ "./src/modules/admin/main/main.admin.component.html":
/*!**********************************************************!*\
  !*** ./src/modules/admin/main/main.admin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-resource></block-resource>\r\n"

/***/ }),

/***/ "./src/modules/admin/main/main.admin.component.ts":
/*!********************************************************!*\
  !*** ./src/modules/admin/main/main.admin.component.ts ***!
  \********************************************************/
/*! exports provided: MainAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAdminComponent", function() { return MainAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainAdminComponent = /** @class */ (function () {
    function MainAdminComponent() {
    }
    MainAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-admin-component',
            template: __webpack_require__(/*! ./main.admin.component.html */ "./src/modules/admin/main/main.admin.component.html")
        })
    ], MainAdminComponent);
    return MainAdminComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map
webpackJsonp(["blank-page.module"],{

/***/ "./src/app/layout/blank-page/blank-page-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_page_component__ = __webpack_require__("./src/app/layout/blank-page/blank-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__blank_page_component__["a" /* BlankPageComponent */]
    }
];
var BlankPageRoutingModule = /** @class */ (function () {
    function BlankPageRoutingModule() {
    }
    BlankPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], BlankPageRoutingModule);
    return BlankPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <!-- <app-page-header [heading]=\"'Solicitudes'\" [icon]=\"'fa-table'\"></app-page-header> -->\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    Solicitudes pendientes\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Nombre</th>\r\n                            <th>Estado</th>\r\n                            <th>apellido</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">3</th>\r\n                            <td>Larry</td>\r\n                            <td>the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n           \r\n           \r\n           \r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent() {
    }
    BlankPageComponent.prototype.ngOnInit = function () { };
    BlankPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__("./src/app/layout/blank-page/blank-page.component.html"),
            styles: [__webpack_require__("./src/app/layout/blank-page/blank-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_page_routing_module__ = __webpack_require__("./src/app/layout/blank-page/blank-page-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank_page_component__ = __webpack_require__("./src/app/layout/blank-page/blank-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BlankPageModule = /** @class */ (function () {
    function BlankPageModule() {
    }
    BlankPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__blank_page_routing_module__["a" /* BlankPageRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__blank_page_component__["a" /* BlankPageComponent */]]
        })
    ], BlankPageModule);
    return BlankPageModule;
}());



/***/ })

});
//# sourceMappingURL=blank-page.module.chunk.js.map
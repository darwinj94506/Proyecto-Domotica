webpackJsonp(["alarmas.module"],{

/***/ "./src/app/layout/alarmas/alarmas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alarmas_alarmas_component__ = __webpack_require__("./src/app/layout/alarmas/alarmas/alarmas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__alarmas_alarmas_component__["a" /* AlarmasComponent */]
    }
];
var AlarmasRoutingModule = /** @class */ (function () {
    function AlarmasRoutingModule() {
    }
    AlarmasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AlarmasRoutingModule);
    return AlarmasRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/alarmas/alarmas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmasModule", function() { return AlarmasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_alarmas_service__ = __webpack_require__("./src/app/shared/services/alarmas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alarmas_routing_module__ = __webpack_require__("./src/app/layout/alarmas/alarmas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alarmas_alarmas_component__ = __webpack_require__("./src/app/layout/alarmas/alarmas/alarmas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AlarmasModule = /** @class */ (function () {
    function AlarmasModule() {
    }
    AlarmasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__alarmas_routing_module__["a" /* AlarmasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_0__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__alarmas_alarmas_component__["a" /* AlarmasComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_alarmas_service__["a" /* AlarmasService */]]
        })
    ], AlarmasModule);
    return AlarmasModule;
}());



/***/ }),

/***/ "./src/app/layout/alarmas/alarmas/alarmas.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n<div>\r\n  <button class=\"btn\" (click)=\"crearAlarma()\">Crear Alarma</button>\r\n  <ngx-datatable\r\n          #alarmasTable \r\n          style=\"width: 90%\"\r\n          class=\"material\"\r\n          [rows]=\"rows\"\r\n          [columnMode]=\"'force'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"'auto'\"\r\n          [limit]=\"5\"\r\n          [selected]=\"selected\"\r\n          [selectionType]=\"'checkbox'\"\r\n          [selectAllRowsOnPage]=\"false\"          \r\n          (activate)=\"onActivate($event)\"\r\n          (select)='onSelect($event)'\r\n          [trackByProp]=\"'updated'\">\r\n          <ngx-datatable-column\r\n            [width]=\"30\"\r\n            [sortable]=\"false\"\r\n            [canAutoResize]=\"false\"\r\n            [draggable]=\"false\"\r\n            [resizeable]=\"false\"\r\n            [headerCheckboxable]=\"true\"\r\n            [checkboxable]=\"true\"\r\n            >\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Fecha\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n                {{value}}\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Hora\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n                {{value}}\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Tipo\">\r\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\r\n                <span\r\n                  title=\"Doble click para editar\"\r\n                  (dblclick)=\"editing[rowIndex + '-tipo'] = true\"\r\n                  *ngIf=\"!editing[rowIndex + '-tipo']\">\r\n                  {{value}}\r\n                </span>\r\n                <input\r\n                  autofocus\r\n                  (blur)=\"updateValue($event, 'tipo', rowIndex)\"\r\n                  *ngIf=\"editing[rowIndex+ '-tipo']\"\r\n                  type=\"text\"\r\n                  [value]=\"value\"\r\n                />\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Sector\">\r\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\r\n                <span\r\n                  title=\"Doble click para editar\"\r\n                  (dblclick)=\"editing[rowIndex + '-sector'] = true\"\r\n                  *ngIf=\"!editing[rowIndex + '-sector']\">\r\n                  {{value}}\r\n                </span>\r\n                <input\r\n                  autofocus\r\n                  (blur)=\"updateValue($event, 'sector', rowIndex)\"\r\n                  *ngIf=\"editing[rowIndex+ '-sector']\"\r\n                  type=\"text\"\r\n                  [value]=\"value\"\r\n                />\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Responsable\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n                {{value}}\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Correo\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n                {{value}}\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Estado\">\r\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\r\n                <span\r\n                  title=\"Doble click para editar\"\r\n                  (dblclick)=\"editing[rowIndex + '-estado'] = true\"\r\n                  *ngIf=\"!editing[rowIndex + '-estado']\">\r\n                  <!-- {{value}} -->\r\n                  <span *ngIf=\"value==true\">\r\n                    ACK\r\n                  </span>\r\n                  <span *ngIf=\"value==false\">\r\n                      NO ACK\r\n                    </span>                  \r\n                </span>\r\n                <!-- <input\r\n                  autofocus\r\n                  (blur)=\"updateValue($event, 'tipo', rowIndex)\"\r\n                  *ngIf=\"editing[rowIndex+ '-tipo']\"\r\n                  type=\"text\"\r\n                  [value]=\"value\"\r\n                /> -->\r\n                <input \r\n                \r\n              type=\"checkbox\"\r\n              *ngIf=\"editing[rowIndex + '-estado']\"\r\n              (blur)=\"editing[rowIndex + '-estado']=false\"              \r\n              (change)=\"checkEditing($event, row, rowIndex)\" \r\n              [value]=\"value\"               \r\n              [checked]=\"value\"\r\n              >\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Eliminar\">\r\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\r\n                <button (click)=\"eliminarRow(rowIndex)\">Eliminar</button>\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Actualizar\">\r\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\r\n                <button (click)=\"actualizarRow(rowIndex)\">Actualizar</button>\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/alarmas/alarmas/alarmas.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/alarmas/alarmas/alarmas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_models_alarma__ = __webpack_require__("./src/app/shared/models/alarma.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_alarmas_service__ = __webpack_require__("./src/app/shared/services/alarmas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlarmasComponent = /** @class */ (function () {
    function AlarmasComponent(_alarmaServ) {
        this._alarmaServ = _alarmaServ;
        this.editing = {};
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.swapColumns = false;
        this.temp = [];
    }
    AlarmasComponent.prototype.ngOnInit = function () {
        this.cargarDatos();
    };
    AlarmasComponent.prototype.cargarDatos = function () {
        var _this = this;
        this.rows = [];
        this._alarmaServ.get()
            .subscribe(function (n) {
            _this.tabla(n);
            console.log("registro:", n);
        }, function (err) {
            console.log("err:", err);
        });
    };
    AlarmasComponent.prototype.tabla = function (n) {
        var alarma = [];
        console.log("u", n.length);
        if (n.length != 0) {
            __WEBPACK_IMPORTED_MODULE_4_lodash__["forEach"](n, function (o, i) {
                var oAux = {};
                oAux["x"] = i;
                oAux["id"] = o.id;
                oAux["estado"] = JSON.parse(o.estado.toLowerCase());
                oAux["fecha"] = o.fecha;
                oAux["hora"] = o.hora;
                oAux["tipo"] = o.tipo;
                oAux["sector"] = o.sector;
                oAux["responsableId"] = o.usuario.id;
                oAux["responsable"] = o.usuario.nombre;
                oAux["correo"] = o.usuario.email;
                alarma.push(oAux);
            });
            this.rows = alarma;
        }
        this.columns = [
            { nama: 'X' },
            { name: 'Id' },
            { name: 'ResponsableId' },
            { name: 'Estado' },
            { name: 'Fecha' },
            { name: 'Hora' },
            { name: 'Tipo' },
            { name: 'Sector' },
            { name: 'Responsable' },
            { name: 'Correo' }
        ];
    };
    AlarmasComponent.prototype.crearAlarma = function () {
        var oAux = {};
        if (this.rows == undefined) {
            oAux['x'] = 0;
        }
        else {
            oAux['x'] = this.rows.length;
        }
        oAux['responsableId'] = JSON.parse(localStorage.getItem('identity')).userId;
        oAux["id"] = null;
        oAux["estado"] = false;
        oAux["fecha"] = __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY MM DD');
        oAux["hora"] = __WEBPACK_IMPORTED_MODULE_5_moment__().format('LTS');
        oAux["tipo"] = "Sin dato";
        oAux["sector"] = "Sin dato";
        oAux["responsable"] = JSON.parse(localStorage.getItem('user'));
        oAux["correo"] = JSON.parse(localStorage.getItem('user'));
        this.rows = [oAux].concat(this.rows);
    };
    AlarmasComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    //   addRowToSelection(row: any) {
    //     this.selected.push(row); // Example of how you might make a change that won't be detected with OnPush    
    //     this.selected = [...this.selected]; // However you updated the rows, use this to make a copy
    // }
    AlarmasComponent.prototype.onActivate = function (event) {
        console.log('Activate Event', event);
    };
    AlarmasComponent.prototype.updateValue = function (event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        if (event.target.value == null || event.target.value == undefined) {
            // cadena está vacía
            // console.log("Hola");
            event.target.value = "Sin dato";
        }
        this.rows = this.rows.slice();
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    };
    AlarmasComponent.prototype.checkEditing = function (e, rowChk, rowIndex) {
        var _this = this;
        if (this.rows[rowIndex].estado != null) {
            this.rows[rowIndex].estado = !this.rows[rowIndex].estado;
            __WEBPACK_IMPORTED_MODULE_4_lodash__["forEach"](this.selected, function (n) {
                __WEBPACK_IMPORTED_MODULE_4_lodash__["forEach"](_this.rows, function (r) {
                    if (r['x'] === n['x']) {
                        r['estado'] = _this.rows[rowIndex].estado;
                    }
                });
            });
        }
    };
    AlarmasComponent.prototype.eliminarRow = function (rowIndex) {
        var _this = this;
        console.log("Eliminando..:", rowIndex);
        if (this.rows[rowIndex].id == null) {
            this.rows.splice(rowIndex, 1);
            this.rows = this.rows.slice();
        }
        else {
            this._alarmaServ.delete(this.rows[rowIndex].id)
                .subscribe(function (n) {
                _this.rows.splice(rowIndex, 1);
                _this.rows = _this.rows.slice();
                console.log("eliminado..:", n);
                alert("Eliminado");
            }, function (err) {
                console.log("err:", err);
                alert("Error");
            });
        }
    };
    AlarmasComponent.prototype.actualizarRow = function (rowIndex) {
        var _this = this;
        console.log("Actualizando..:", rowIndex);
        if (this.rows[rowIndex].id != null) {
            var alarma = new __WEBPACK_IMPORTED_MODULE_0__shared_models_alarma__["a" /* Alarma */]();
            alarma.id = this.rows[rowIndex].id;
            alarma.fecha = this.rows[rowIndex].fecha;
            alarma.hora = this.rows[rowIndex].hora;
            alarma.tipo = this.rows[rowIndex].tipo;
            alarma.sector = this.rows[rowIndex].sector;
            alarma.estado = this.rows[rowIndex].estado;
            alarma.usuarioId = this.rows[rowIndex].responsableId;
            this._alarmaServ.put(alarma, this.rows[rowIndex].id)
                .subscribe(function (n) {
                console.log("actualizado:", n);
                alert("Actualizado");
                _this.cargarDatos();
            }, function (err) {
                console.log("err:", err);
                alert("Error");
            });
        }
        else {
            // delete this.rows[rowIndex]["id"];
            var alarma = new __WEBPACK_IMPORTED_MODULE_0__shared_models_alarma__["a" /* Alarma */]();
            alarma.fecha = this.rows[rowIndex].fecha;
            alarma.hora = this.rows[rowIndex].hora;
            alarma.tipo = this.rows[rowIndex].tipo;
            alarma.sector = this.rows[rowIndex].sector;
            alarma.estado = this.rows[rowIndex].estado;
            alarma.usuarioId = this.rows[rowIndex].responsableId;
            console.log("res", alarma);
            this._alarmaServ.post(alarma)
                .subscribe(function (n) {
                console.log("Guardado nuevo:", n);
                alert("Guardado nuevo");
                _this.cargarDatos();
            }, function (err) {
                console.log("err:", err);
                alert("Error");
            });
            ;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('alarmasTable'),
        __metadata("design:type", Object)
    ], AlarmasComponent.prototype, "table", void 0);
    AlarmasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-alarmas',
            template: __webpack_require__("./src/app/layout/alarmas/alarmas/alarmas.component.html"),
            styles: [__webpack_require__("./src/app/layout/alarmas/alarmas/alarmas.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_alarmas_service__["a" /* AlarmasService */]])
    ], AlarmasComponent);
    return AlarmasComponent;
}());



/***/ })

});
//# sourceMappingURL=alarmas.module.chunk.js.map
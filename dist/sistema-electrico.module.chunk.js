webpackJsonp(["sistema-electrico.module"],{

/***/ "./src/app/layout/sistema-electrico/add-electrico/add-electrico.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <!-- <app-page-header [heading]=\"'Bootstrap Elements'\" [icon]=\"'fa-desktop'\"></app-page-header> -->\r\n  <nav aria-label=\"breadcrumb\">\r\n    <div class=\"card\">\r\n            <!-- <div class=\"card-header\">Add images</div> -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8\">\r\n                    <div class=\"card-body max-height\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/1.1.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/2.1.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/3.1.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/4.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/5.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/6.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/7.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/8.png\">\r\n                            <!-- <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/9.png\"> -->\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/10.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/11.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Electrico/12.png\">\r\n\r\n\r\n                                            \r\n                    </div>\r\n  \r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n               \r\n                        <!-- <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" [disabled]=\"url==null || url==''\"\r\n                                        title=\"Guardar\" type=\"button\" class=\"btn btn-primary\"\r\n                                            (click)=\"saveCanvasToJSON();\">\r\n                                            <i class=\"fa fa-save\" aria-hidden=\"true\">Guardar</i></button>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clean Canvas\" type=\"button\" class=\"btn btn-danger\" (click)=\"confirmClear();\">\r\n                                                <i class=\"fa fa-ban\" aria-hidden=\"true\" block>Limpiar</i></button>\r\n\r\n                                </div>\r\n                               \r\n                            </div>\r\n                            \r\n                            \r\n                            <br>\r\n                            \r\n                            \r\n                        </div> -->\r\n    \r\n                <div class=\"card-body max-height\">\r\n                    <div class=\"btn-toolbar mb-3\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                              \r\n\r\n                                    <button *ngIf=\"!espiner\" [disabled]=\"url==null || url=='' || nombrePiso==null || nombrePiso==''\" type=\"button\"\r\n                            (click)=\"saveCanvasToJSON();\" class=\"btn btn-primary\">\r\n                            <i class=\"fa fa-save\" aria-hidden=\"true\"></i></button>\r\n                        <button *ngIf=\"!espiner\"  type=\"button\" class=\"btn btn-danger\"(click)=\"confirmClear();\"> \r\n                            <i class=\"fa fa-ban\" aria-hidden=\"true\"></i></button>\r\n                        <button *ngIf=\"espiner\" type=\"button\" class=\"btn btn-info\">\r\n                                <i class=\"fa fa-spinner fa-spin\"></i>Espere\r\n                        </button>\r\n\r\n                                \r\n                            </div>\r\n                            <div class=\"input-group\" *ngIf=\"!espiner\">\r\n                                <!-- <div class=\"input-group-prepend\">\r\n                                <div class=\"input-group-text\" id=\"btnGroupAddon\"></div>\r\n                                </div> -->\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Nombre de piso\" [(ngModel)]=\"nombrePiso\" name=\"nombrePiso\"\r\n                                aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon\">\r\n                    </div>\r\n\r\n                </div>\r\n                \r\n                       \r\n                </div>\r\n                              \r\n                            \r\n                           \r\n            \r\n             </div>\r\n  \r\n        </div>\r\n        \r\n    </div>\r\n  </nav>\r\n  \r\n  <div>\r\n  \r\n    <!-- <ngb-tabset type=\"pills\">\r\n        <ngb-tab title=\"{{piso.nombre}}\" *ngFor=\"let piso of pisos\">\r\n            <ng-template ngbTabContent>\r\n                <div class=\"container2\" [style.background-image]=\"sanitizeImage(piso.imagen)\" >   -->\r\n                        <div class=\"container\">\r\n                                <div class=\"row\">\r\n                                    <!-- <div class=\"col-xl-12 main-title\">\r\n                                        <h4>Agregue sus pisos a su Edificio </h4>\r\n                                    </div> -->\r\n                                    <!-- <div class=\"col-xl-12\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xl-12 text-right\">\r\n                                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to image\" type=\"button\" class=\"btn btn-success\" (click)=\"rasterize();\">\r\n                                                    <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Exportar como imagen</button>\r\n                                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to SVG\" type=\"button\" class=\"btn btn-primary\" (click)=\"rasterizeSVG();\">\r\n                                                    <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Export to SVG</button> \r\n                                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Save in localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                                                    (click)=\"saveCanvasToJSON();\">\r\n                                                    <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button>\r\n                                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Load from localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                                                    (click)=\"loadCanvasFromJSON();\">\r\n                                                    <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Cargar última</button>\r\n                                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clean Canvas\" type=\"button\" class=\"btn btn-danger\" (click)=\"confirmClear();\">\r\n                                                    <i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Limpiar</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div> -->\r\n                                </div>\r\n                                <hr>\r\n                                <div class=\"row\">\r\n                                    <!-- <div class=\"col-xl-2\"> -->\r\n                                        <!-- <div class=\"card\">\r\n                                            <div class=\"card-header\">Size</div>\r\n                                            <div class=\"card-body\">\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"input-group\">\r\n                                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.width\" (keyup)=\"changeSize()\">\r\n                                                        <div class=\"input-group-append\">\r\n                                                            <span class=\"input-group-text\">\r\n                                                                Width\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"input-group mb-3\">\r\n                                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.height\" (keyup)=\"changeSize()\">\r\n                                                        <div class=\"input-group-append\">\r\n                                                            <span class=\"input-group-text\">\r\n                                                                Height\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> -->\r\n                                        <!-- <br/> -->\r\n                                        <!-- <div class=\"card\">\r\n                                            <div class=\"card-header\">Add images</div>\r\n                                            <div class=\"card-body max-height\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/extractor_icon.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/estacion manual_icono.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/electric.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_valvula.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_bomba.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_bomba1.png\">\r\n                                                \r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_estroboscopica.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_ventilador.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/led_on 50x50.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/reservacion_icon.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sensor_humo.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sprinkler.png\">\r\n                            \r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sprinkler_icon.png\">\r\n                                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/valve_icon.png\">\r\n                                            </div>\r\n                                        </div> -->\r\n                                        <!-- <br>\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-header\">Add text</div>\r\n                                            <div class=\"card-body\">\r\n                                                <div class=\"input-group\">\r\n                                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n                                                    <div class=\"input-group-append\">\r\n                                                        <span class=\"input-group-text\">\r\n                                                            <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\" class=\"btn btn-primary\" (click)=\"addText()\">\r\n                                                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                                            </button>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <br/> -->\r\n  <!--                                       \r\n                                        <br/>\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-header\">Upload image</div>\r\n                                            <div class=\"card-body text-center\">\r\n                                                <img id=\"testImage\" *ngIf=\"url\" class=\"images-item-upload\" [src]=\"url\" (click)=\"addImageOnCanvas(url);\">\r\n                                                <input type=\"file\" (change)=\"readUrl($event);\">\r\n                                                <br/>\r\n                                                <br/>\r\n                                                <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n                                                    <div class=\"btn-group\" role=\"group\">\r\n                                                        <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeWhite(url);\">\r\n                                                            <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Remove</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> -->\r\n                                        <!-- <br/>\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-header\">Add figure</div>\r\n                                            <div class=\"card-body text-center max-height\">\r\n                                                <div class=\"btn-group btn-group-vertical\" role=\"group\" aria-label=\"...\">\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('rectangle');\">Rectangle</button>\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('square');\">Square</button>\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('triangle');\">Triangle</button>\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('circle');\">Circle</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> -->\r\n                                    <!-- </div> -->\r\n                                    <div class=\"col-xl-10\">\r\n                                        <canvas id=\"canvas\" [style.background-image]=\"sanitizeImage(url)\"></canvas>\r\n                                    </div>\r\n                                    <div class=\"col-xl-2\">\r\n                                        <!-- <div class=\"card\">\r\n                                            <div class=\"card-header\">Añadir texto</div>\r\n                                            <div class=\"card-body\">\r\n                                                <div class=\"input-group\">\r\n                                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n                                                    <div class=\"input-group-append\">\r\n                                                        <span class=\"input-group-text\">\r\n                                                            <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\" class=\"btn btn-primary\" (click)=\"addText()\">\r\n                                                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                                            </button>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                           \r\n                                        <br/> -->\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-header\">Cargar Plano</div>\r\n                                            <div class=\"card-body text-center\">\r\n                                                <img id=\"testImage\" *ngIf=\"url\" class=\"images-item-upload\" [src]=\"url\">\r\n                                                <input  type=\"file\" (change)=\"readUrl($event);\">\r\n                                                <br/>\r\n                                                <br/>\r\n                                                <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n                                                    <div class=\"btn-group\" role=\"group\">\r\n                                                        <button [disabled]=\"url==null || url==''\" type=\"button\" class=\"btn btn-outline-danger btn-sm\" \r\n                                                        (click)=\"removeWhite(url);\" >\r\n                                                            <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Remover</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-header\">Opciones</div>\r\n                                            <div class=\"card-body text-center\">\r\n                                                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete element\" type=\"button\" class=\"btn btn-outline-danger\" [disabled]=\"!selected\"\r\n                                                        (click)=\"removeSelected();\">\r\n                                                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                    </button>\r\n                                                    <!-- <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to back\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                                        (click)=\"sendToBack();\">\r\n                                                        <i class=\"fa fa-level-down\" aria-hidden=\"true\"></i>\r\n                                                    </button>\r\n                                                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to front\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                                        (click)=\"bringToFront();\">\r\n                                                        <i class=\"fa fa-level-up\" aria-hidden=\"true\"></i>\r\n                                                    </button> -->\r\n                                                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clone\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected || selected.type == 'group'\"\r\n                                                        (click)=\"clone();\">\r\n                                                        <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\r\n                                                    </button>\r\n                                                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Unselect\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                                        (click)=\"cleanSelect()\">\r\n                                                        <i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <br/>\r\n                                        <!-- <div class=\"card\" *ngIf=\"!selected\">\r\n                                            <div class=\"card-header\">Canvas</div>\r\n                                            <div class=\"card-body\">\r\n                                                <div class=\"custom-item\" *ngIf=\"!props.canvasImage\">\r\n                                                    <div class=\"custom-item-title\">Background Color</div>\r\n                                                    <div class=\"custom-item-body\">\r\n                                                        <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.canvasFill\" [style.background]=\"props.canvasFill\"\r\n                                                            [value]=\"props.canvasFill\" (colorPickerChange)=\"setCanvasFill()\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"custom-item\">\r\n                                                    <div class=\"custom-item-title\">Background Image (url)</div>\r\n                                                    <div class=\"custom-item-body\">\r\n                                                        <input type=\"text\" class=\"form-control\" placeholder=\"http://example.jpg\" [(ngModel)]=\"props.canvasImage\" (keyup)=\"setCanvasImage()\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> -->\r\n                                        <!-- <br/> -->\r\n                                        <div class=\"card\">\r\n                                            <div class=\"card-header\">Caracteristicas</div>\r\n                                            <div class=\"card-body\">\r\n                                                <div class=\"custom-item\" *ngIf=\"selected  && selected.type == 'group'\">Group Selected</div>\r\n                                                <div class=\"custom-item\" *ngIf=\"!selected\">No hay item seleccionado</div>\r\n                                                <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                                                    <div class=\"custom-item-title\">ID</div>\r\n                                                    <div class=\"custom-item-body\">\r\n                                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"props.id\" (keyup)=\"setId()\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                                                    <div class=\"custom-item-title\">Opacity</div>\r\n                                                    <div class=\"custom-item-body\">\r\n                                                        <input type=\"range\" [(ngModel)]=\"props.opacity\" (change)=\"setOpacity()\">{{props.opacity}}</div>\r\n                                                </div>\r\n                                                <div class=\"custom-item\" *ngIf=\"selected && textEditor || selected && figureEditor\">\r\n                                                    <div class=\"custom-item-title\">Fill</div>\r\n                                                    <div class=\"custom-item-body\">\r\n                                                        <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.fill\" [style.background]=\"props.fill\"\r\n                                                            [value]=\"props.fill\" (colorPickerChange)=\"setFill()\">\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                    <div class=\"custom-item-title\">Font family</div>\r\n                                                    <div class=\"custom-item-body\">\r\n                                                        <select [(ngModel)]=\"props.fontFamily\" class=\"form-control\" (change)=\"setFontFamily()\">\r\n                                                            <option value=\"arial\">Arial</option>\r\n                                                            <option value=\"helvetica\" selected>Helvetica</option>\r\n                                                            <option value=\"verdana\">Verdana</option>\r\n                                                            <option value=\"courier\">Courier</option>\r\n                                                            <option value=\"Roboto\">Roboto</option>\r\n                                                            <option value=\"Open Sans\">Open Sans</option>\r\n                                                            <option value=\"Zilla Slab\">Zilla Slab</option>\r\n                                                            <option value=\"Lato\">Lato</option>\r\n                                                            <option value=\"Bellefair\">Bellefair</option>\r\n                                                            <option value=\"Fresca\">Fresca</option>\r\n                                                            <option value=\"Raleway\">Raleway</option>\r\n                                                            <option value=\"Open Sans Condensed\">Open Sans Condensed</option>\r\n                                                            <option value=\"Indie Flower\">Indie Flower</option>\r\n                                                            <option value=\"Josefin Sans\">Josefin Sans</option>\r\n                                                            <option value=\"Inconsolata\">Inconsolata</option>\r\n                                                            <option value=\"Pacifico\">Pacifico</option>\r\n                                                            <option value=\"Gloria Hallelujah\">Gloria Hallelujah</option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                    <div class=\"custom-item-title\">Text Align</div>\r\n                                                    <div class=\"custom-item-body text-center\">\r\n                                                        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                                            <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'left' }\" (click)=\"setTextAlign('left')\">\r\n                                                                <i class=\"fa fa-align-left\"></i>\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'center' }\" (click)=\"setTextAlign('center')\">\r\n                                                                <i class=\"fa fa-align-center\"></i>\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'right' }\" (click)=\"setTextAlign('right')\">\r\n                                                                <i class=\"fa fa-align-right\"></i>\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'justify' }\" (click)=\"setTextAlign('justify')\">\r\n                                                                <i class=\"fa fa-align-justify\"></i>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                    <div class=\"custom-item-title\">Style</div>\r\n                                                    <div class=\"custom-item-body text-center\">\r\n                                                        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                                            <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontWeight }\" (click)=\"setBold()\">\r\n                                                                <i class=\"fa fa-bold\"></i>\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontStyle }\" (click)=\"setFontStyle()\">\r\n                                                                <i class=\"fa fa-italic\"></i>\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('underline') }\"\r\n                                                                (click)=\"setTextDecoration('underline')\">\r\n                                                                <i class=\"fa fa-underline\"></i>\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('overline') }\"\r\n                                                                (click)=\"setTextDecoration('overline')\">\r\n                                                                <i class=\"fa fa-underline fa-flip-vertical\"></i>\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('line-through') }\"\r\n                                                                (click)=\"setTextDecoration('line-through')\">\r\n                                                                <i class=\"fa fa-strikethrough\"></i>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                    <div class=\"custom-item-title\">Font Size</div>\r\n                                                    <div class=\"custom-item-body\">\r\n                                                        <input type=\"range\" [(ngModel)]=\"props.fontSize\" (change)=\"setFontSize()\" step=\"1\" min=\"1\" max=\"120\">{{props.fontSize}}</div>\r\n                                                </div>\r\n                                                <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                    <div class=\"custom-item-title\">Line Height</div>\r\n                                                    <div class=\"custom-item-body\">\r\n                                                        <input type=\"range\" [(ngModel)]=\"props.lineHeight\" (change)=\"setLineHeight()\" step=\"0.1\" min=\"0\" max=\"10\">{{props.lineHeight}}</div>\r\n                                                </div>\r\n                                                <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                    <div class=\"custom-item-title\">Char Spacing</div>\r\n                                                    <div class=\"custom-item-body\">\r\n                                                        <input type=\"range\" [(ngModel)]=\"props.charSpacing\" (change)=\"setCharSpacing()\" step=\"10\" min=\"-200\" max=\"800\">{{props.charSpacing}}</div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            \r\n                              \r\n                                <br>\r\n                            </div> \r\n  \r\n                </div>\r\n\r\n                <!-- mensajes dee rror -->\r\n         <div>\r\n             \r\n                <ng-template #errorAutorizacion let-c=\"close\" let-d=\"dismiss\">\r\n                        <div class=\"modal-header\">\r\n                          <h4 class=\"modal-title\">Error</h4>\r\n                          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                          </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                          <p>No esta autorizado para realizar esta acción&hellip;</p>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                          <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n         </div>\r\n    \r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/layout/sistema-electrico/add-electrico/add-electrico.component.scss":
/***/ (function(module, exports) {

module.exports = ".container2 {\n  width: 100%;\n  height: 500px;\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n#canvas {\n  border: 2px dashed #cccccc;\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n.main-title {\n  margin-top: 10px; }\n\n.images-item {\n  width: 48%;\n  cursor: pointer;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n  padding: 0.5px;\n  max-width: 50px;\n  margin: 2px; }\n\n.images-item:hover {\n  opacity: 0.7; }\n\n.images-item-upload {\n  width: 80%;\n  cursor: pointer;\n  padding-bottom: 10px;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease; }\n\n.images-item-upload:hover {\n  opacity: 0.7; }\n\n.custom-item {\n  border-bottom: 2px solid #f3f3f3; }\n\n.custom-item .custom-item-title {\n  color: #666666;\n  font-weight: 600; }\n\n.custom-item .custom-item-body {\n  padding: 10px 0; }\n\n.max-height {\n  overflow: auto;\n  max-height: 300px; }\n"

/***/ }),

/***/ "./src/app/layout/sistema-electrico/add-electrico/add-electrico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddElectricoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("./src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fabric__ = __webpack_require__("./node_modules/fabric/dist/fabric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fabric__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddElectricoComponent = /** @class */ (function () {
    function AddElectricoComponent(router, _sanitizer, _crud, modalService) {
        this.router = router;
        this._sanitizer = _sanitizer;
        this._crud = _crud;
        this.modalService = modalService;
        this.espiner = false;
        this.props = {
            canvasFill: '#ffffff',
            canvasImage: '',
            id: null,
            opacity: null,
            fill: null,
            fontSize: null,
            lineHeight: null,
            charSpacing: null,
            fontWeight: null,
            fontStyle: null,
            textAlign: null,
            fontFamily: null,
            TextDecoration: ''
        };
        this.url = '';
        this.size = {
            width: 900,
            height: 700
        };
        this.globalEditor = false;
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
    }
    AddElectricoComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    AddElectricoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //setup front side canvas
        this.canvas = new fabric.Canvas('canvas', {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'blue'
        });
        this.canvas.on({
            'object:moving': function (e) { },
            'object:modified': function (e) { },
            'object:selected': function (e) {
                var selectedObject = e.target;
                _this.selected = selectedObject;
                selectedObject.hasRotatingPoint = true;
                selectedObject.transparentCorners = false;
                // selectedObject.cornerColor = 'rgba(255, 87, 34, 0.7)';
                _this.resetPanels();
                if (selectedObject.type !== 'group' && selectedObject) {
                    _this.getId();
                    _this.getOpacity();
                    switch (selectedObject.type) {
                        case 'rect':
                        case 'circle':
                        case 'triangle':
                            _this.figureEditor = true;
                            _this.getFill();
                            break;
                        case 'i-text':
                            _this.textEditor = true;
                            _this.getLineHeight();
                            _this.getCharSpacing();
                            _this.getBold();
                            _this.getFontStyle();
                            _this.getFill();
                            _this.getTextDecoration();
                            _this.getTextAlign();
                            _this.getFontFamily();
                            break;
                        case 'image':
                            console.log(selectedObject);
                            console.log('image');
                            break;
                    }
                }
            },
            'selection:cleared': function (e) {
                _this.selected = null;
                _this.resetPanels();
            }
        });
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
        // get references to the html canvas element & its context
        // this.canvas.on('mouse:down', (e) => {
        // let canvasElement: any = document.getElementById('canvas');
        // console.log(canvasElement)
        // });
    };
    /*------------------------Block elements------------------------*/
    //Block "Size"
    AddElectricoComponent.prototype.changeSize = function (event) {
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
    };
    //Block "Add text"
    AddElectricoComponent.prototype.addText = function () {
        var textString = this.textString;
        var text = new fabric.IText(textString, {
            left: 10,
            top: 10,
            fontFamily: 'helvetica',
            angle: 0,
            fill: '#000000',
            scaleX: 0.5,
            scaleY: 0.5,
            fontWeight: '',
            hasRotatingPoint: true
        });
        this.extend(text, this.randomId());
        this.canvas.add(text);
        this.selectItemAfterAdded(text);
        this.textString = '';
    };
    //Block "Add images"
    AddElectricoComponent.prototype.getImgPolaroid = function (event) {
        var _this = this;
        var el = event.target;
        fabric.Image.fromURL(el.src, function (image) {
            image.set({
                left: 450,
                top: 150,
                angle: 0,
                padding: 10,
                cornersize: 10,
                hasRotatingPoint: true,
                peloas: 12
            });
            //aqui la escucha de evento
            image.setWidth(40);
            image.setHeight(30);
            _this.extend(image, _this.randomId());
            _this.canvas.add(image);
            _this.selectItemAfterAdded(image);
        });
    };
    //Block "Upload Image"
    AddElectricoComponent.prototype.addImageOnCanvas = function (url) {
        var _this = this;
        if (url) {
            fabric.Image.fromURL(url, function (image) {
                image.set({
                    left: 10,
                    top: 10,
                    angle: 0,
                    padding: 10,
                    cornersize: 10,
                    hasRotatingPoint: true
                });
                image.setWidth(200);
                image.setHeight(200);
                _this.extend(image, _this.randomId());
                _this.canvas.add(image);
                _this.selectItemAfterAdded(image);
            });
        }
    };
    AddElectricoComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            //aumento
            this.filesToUpload = event.target.files;
            console.log(this.filesToUpload);
            //
            reader.onload = function (event) {
                _this.url = event.target['result'];
                console.log(_this.url);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AddElectricoComponent.prototype.removeWhite = function (url) {
        this.url = '';
    };
    ;
    //Block "Add figure"
    AddElectricoComponent.prototype.addFigure = function (figure) {
        var add;
        switch (figure) {
            case 'rectangle':
                add = new fabric.Rect({
                    width: 200, height: 100, left: 10, top: 10, angle: 0,
                    fill: '#3f51b5'
                });
                break;
            case 'square':
                add = new fabric.Rect({
                    width: 100, height: 100, left: 10, top: 10, angle: 0,
                    fill: '#4caf50'
                });
                break;
            case 'triangle':
                add = new fabric.Triangle({
                    width: 100, height: 100, left: 10, top: 10, fill: '#2196f3'
                });
                break;
            case 'circle':
                add = new fabric.Circle({
                    radius: 50, left: 10, top: 10, fill: '#ff5722'
                });
                break;
        }
        this.extend(add, this.randomId());
        this.canvas.add(add);
        this.selectItemAfterAdded(add);
    };
    /*Canvas*/
    AddElectricoComponent.prototype.cleanSelect = function () {
        this.canvas.deactivateAllWithDispatch().renderAll();
    };
    AddElectricoComponent.prototype.selectItemAfterAdded = function (obj) {
        this.canvas.deactivateAllWithDispatch().renderAll();
        this.canvas.setActiveObject(obj);
    };
    AddElectricoComponent.prototype.setCanvasFill = function () {
        if (!this.props.canvasImage) {
            this.canvas.backgroundColor = this.props.canvasFill;
            this.canvas.renderAll();
        }
    };
    AddElectricoComponent.prototype.extend = function (obj, id) {
        obj.toObject = (function (toObject) {
            return function () {
                return fabric.util.object.extend(toObject.call(this), {
                    id: id
                });
            };
        })(obj.toObject);
    };
    AddElectricoComponent.prototype.setCanvasImage = function () {
        var self = this;
        if (this.props.canvasImage) {
            this.canvas.setBackgroundColor({ source: this.props.canvasImage, repeat: 'repeat' }, function () {
                // self.props.canvasFill = '';
                self.canvas.renderAll();
            });
        }
    };
    AddElectricoComponent.prototype.randomId = function () {
        return Math.floor(Math.random() * 999999) + 1;
    };
    /*------------------------Global actions for element------------------------*/
    AddElectricoComponent.prototype.getActiveStyle = function (styleName, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return '';
        return (object.getSelectionStyles && object.isEditing)
            ? (object.getSelectionStyles()[styleName] || '')
            : (object[styleName] || '');
    };
    AddElectricoComponent.prototype.setActiveStyle = function (styleName, value, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return;
        if (object.setSelectionStyles && object.isEditing) {
            var style = {};
            style[styleName] = value;
            object.setSelectionStyles(style);
            object.setCoords();
        }
        else {
            object.set(styleName, value);
        }
        object.setCoords();
        this.canvas.renderAll();
    };
    AddElectricoComponent.prototype.getActiveProp = function (name) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return '';
        return object[name] || '';
    };
    AddElectricoComponent.prototype.setActiveProp = function (name, value) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return;
        object.set(name, value).setCoords();
        this.canvas.renderAll();
    };
    AddElectricoComponent.prototype.clone = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            var clone = void 0;
            switch (activeObject.type) {
                case 'rect':
                    clone = new fabric.Rect(activeObject.toObject());
                    break;
                case 'circle':
                    clone = new fabric.Circle(activeObject.toObject());
                    break;
                case 'triangle':
                    clone = new fabric.Triangle(activeObject.toObject());
                    break;
                case 'i-text':
                    clone = new fabric.IText('', activeObject.toObject());
                    break;
                case 'image':
                    clone = fabric.util.object.clone(activeObject);
                    break;
            }
            if (clone) {
                clone.set({ left: 10, top: 10 });
                this.canvas.add(clone);
                this.selectItemAfterAdded(clone);
            }
        }
    };
    AddElectricoComponent.prototype.getId = function () {
        this.props.id = this.canvas.getActiveObject().toObject().id;
    };
    AddElectricoComponent.prototype.setId = function () {
        var val = this.props.id;
        var complete = this.canvas.getActiveObject().toObject();
        console.log(complete);
        this.canvas.getActiveObject().toObject = function () {
            complete.id = val;
            return complete;
        };
    };
    AddElectricoComponent.prototype.getOpacity = function () {
        this.props.opacity = this.getActiveStyle('opacity', null) * 100;
    };
    AddElectricoComponent.prototype.setOpacity = function () {
        this.setActiveStyle('opacity', parseInt(this.props.opacity) / 100, null);
    };
    AddElectricoComponent.prototype.getFill = function () {
        this.props.fill = this.getActiveStyle('fill', null);
    };
    AddElectricoComponent.prototype.setFill = function () {
        this.setActiveStyle('fill', this.props.fill, null);
    };
    AddElectricoComponent.prototype.getLineHeight = function () {
        this.props.lineHeight = this.getActiveStyle('lineHeight', null);
    };
    AddElectricoComponent.prototype.setLineHeight = function () {
        this.setActiveStyle('lineHeight', parseFloat(this.props.lineHeight), null);
    };
    AddElectricoComponent.prototype.getCharSpacing = function () {
        this.props.charSpacing = this.getActiveStyle('charSpacing', null);
    };
    AddElectricoComponent.prototype.setCharSpacing = function () {
        this.setActiveStyle('charSpacing', this.props.charSpacing, null);
    };
    AddElectricoComponent.prototype.getFontSize = function () {
        this.props.fontSize = this.getActiveStyle('fontSize', null);
    };
    AddElectricoComponent.prototype.setFontSize = function () {
        this.setActiveStyle('fontSize', parseInt(this.props.fontSize), null);
    };
    AddElectricoComponent.prototype.getBold = function () {
        this.props.fontWeight = this.getActiveStyle('fontWeight', null);
    };
    AddElectricoComponent.prototype.setBold = function () {
        this.props.fontWeight = !this.props.fontWeight;
        this.setActiveStyle('fontWeight', this.props.fontWeight ? 'bold' : '', null);
    };
    AddElectricoComponent.prototype.getFontStyle = function () {
        this.props.fontStyle = this.getActiveStyle('fontStyle', null);
    };
    AddElectricoComponent.prototype.setFontStyle = function () {
        this.props.fontStyle = !this.props.fontStyle;
        this.setActiveStyle('fontStyle', this.props.fontStyle ? 'italic' : '', null);
    };
    AddElectricoComponent.prototype.getTextDecoration = function () {
        this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
    };
    AddElectricoComponent.prototype.setTextDecoration = function (value) {
        var iclass = this.props.TextDecoration;
        if (iclass.includes(value)) {
            iclass = iclass.replace(RegExp(value, "g"), "");
        }
        else {
            iclass += " " + value;
        }
        this.props.TextDecoration = iclass;
        this.setActiveStyle('textDecoration', this.props.TextDecoration, null);
    };
    AddElectricoComponent.prototype.hasTextDecoration = function (value) {
        return this.props.TextDecoration.includes(value);
    };
    AddElectricoComponent.prototype.getTextAlign = function () {
        this.props.textAlign = this.getActiveProp('textAlign');
    };
    AddElectricoComponent.prototype.setTextAlign = function (value) {
        this.props.textAlign = value;
        this.setActiveProp('textAlign', this.props.textAlign);
    };
    AddElectricoComponent.prototype.getFontFamily = function () {
        this.props.fontFamily = this.getActiveProp('fontFamily');
    };
    AddElectricoComponent.prototype.setFontFamily = function () {
        this.setActiveProp('fontFamily', this.props.fontFamily);
    };
    /*System*/
    AddElectricoComponent.prototype.removeSelected = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            this.canvas.remove(activeObject);
            // this.textString = '';
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            var self_1 = this;
            objectsInGroup.forEach(function (object) {
                self_1.canvas.remove(object);
            });
        }
    };
    AddElectricoComponent.prototype.bringToFront = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            activeObject.bringToFront();
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                object.bringToFront();
            });
        }
    };
    AddElectricoComponent.prototype.sendToBack = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            activeObject.sendToBack();
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                object.sendToBack();
            });
        }
    };
    AddElectricoComponent.prototype.confirmClear = function () {
        if (confirm('Are you sure?')) {
            this.canvas.clear();
        }
    };
    AddElectricoComponent.prototype.rasterize = function () {
        if (!fabric.Canvas.supports('toDataURL')) {
            alert('This browser doesn\'t provide means to serialize canvas to an image');
        }
        else {
            console.log(this.canvas.toDataURL('png'));
            //window.open(this.canvas.toDataURL('png'));
            var image = new Image();
            image.src = this.canvas.toDataURL('png');
            var w = window.open("");
            w.document.write(image.outerHTML);
        }
    };
    AddElectricoComponent.prototype.rasterizeSVG = function () {
        console.log(this.canvas.toSVG());
        // window.open(
        //   'data:image/svg+xml;utf8,' +
        //   encodeURIComponent(this.canvas.toSVG()));
        // console.log(this.canvas.toSVG())
        // var image = new Image();
        // image.src = this.canvas.toSVG()
        var w = window.open("");
        w.document.write(this.canvas.toSVG());
    };
    ;
    AddElectricoComponent.prototype.saveCanvasToJSON = function () {
        var _this = this;
        //primero subir la imagen al servidor
        this.espiner = true;
        console.log(this.filesToUpload);
        var json = JSON.stringify(this.canvas);
        this._crud.subirImagenElectrico(this.filesToUpload).then(function (n) {
            console.log(n);
            console.log("ggg", n.result.files.archivo[0].name);
            // alert("subio la imagen");
            var ob = {};
            // "containers/incendios-img/upload"
            ob.ruta = '/containers/electricos-img/download/' + n.result.files.archivo[0].name;
            ob.nombre = n.result.files.archivo[0].originalFilename;
            var json2 = JSON.parse(json);
            var objects = json2.objects;
            var piso = {
                planta: {
                    nombre: _this.nombrePiso,
                    img: ob.ruta,
                },
                objects: objects
            };
            _this._crud.addPisoElectrico(JSON.stringify(piso)).subscribe(function () {
                _this.espiner = false;
                _this.router.navigate(['/sistema-electrico']);
            });
        }).catch(function () {
            _this.espiner = false;
            alert("error al subir imagen");
        });
    };
    AddElectricoComponent.prototype.loadCanvasFromJSON = function () {
        var _this = this;
        var CANVAS = localStorage.getItem('Kanvas');
        console.log('CANVAS');
        console.log(CANVAS);
        // and load everything from the same json
        this.canvas.loadFromJSON(CANVAS, function () {
            console.log('CANVAS untar');
            console.log(CANVAS);
            // making sure to render canvas at the end
            _this.canvas.renderAll();
            // and checking if object's "name" is preserved
            console.log('this.canvas.item(0).name');
            console.log(_this.canvas);
        });
    };
    ;
    AddElectricoComponent.prototype.rasterizeJSON = function () {
        this.json = JSON.stringify(this.canvas, null, 2);
    };
    AddElectricoComponent.prototype.resetPanels = function () {
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
    };
    //----------------------------------Para fondo de imagen-----------------------
    AddElectricoComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errorAutorizacion'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddElectricoComponent.prototype, "errorAutorizacion", void 0);
    AddElectricoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-electrico',
            template: __webpack_require__("./src/app/layout/sistema-electrico/add-electrico/add-electrico.component.html"),
            styles: [__webpack_require__("./src/app/layout/sistema-electrico/add-electrico/add-electrico.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]])
    ], AddElectricoComponent);
    return AddElectricoComponent;
}());



/***/ }),

/***/ "./src/app/layout/sistema-electrico/sistema-electrico-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SistemaElectricoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sistema_electrico_component__ = __webpack_require__("./src/app/layout/sistema-electrico/sistema-electrico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_electrico_add_electrico_component__ = __webpack_require__("./src/app/layout/sistema-electrico/add-electrico/add-electrico.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__sistema_electrico_component__["a" /* SistemaElectricoComponent */]
    },
    {
        path: 'add-electrico', component: __WEBPACK_IMPORTED_MODULE_3__add_electrico_add_electrico_component__["a" /* AddElectricoComponent */]
    }
];
var SistemaElectricoRoutingModule = /** @class */ (function () {
    function SistemaElectricoRoutingModule() {
    }
    SistemaElectricoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], SistemaElectricoRoutingModule);
    return SistemaElectricoRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/sistema-electrico/sistema-electrico.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n        <!-- <app-page-header [heading]=\"'Bootstrap Elements'\" [icon]=\"'fa-desktop'\"></app-page-header> -->\r\n    <nav aria-label=\"breadcrumb\">\r\n        <div class=\"card\">\r\n                <!-- <div class=\"card-header\">Add images</div> -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-10\">\r\n                        <!-- <div class=\"card-body max-height\"> -->\r\n                                <!-- <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/1.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/2.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/3.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/4.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/5.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/6.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/7.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/8.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/9.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/10.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/11.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/12.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/13.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/14.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/15.png\">                               -->\r\n<!--                         \r\n                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" type=\"button\" \r\n                                    *ngFor=\"let piso of pisos\" (click)=\"cargardesdeJSON(piso)\"\r\n                                    class=\"btn btn-primary\">\r\n                                    <i class=\"fa fa-fw fa-eye\"></i>&nbsp;{{piso.planta.nombre}}\r\n                                </button> -->\r\n                                <div class=\"card-body\">\r\n                                        <ul class=\"nav nav-pills card-header-pills\">\r\n                                        <li class=\"nav-item\" *ngFor=\"let piso of pisos;let i=index;\">\r\n                                            <a  (click)=\"cargardesdeJSON(piso,i)\"  \r\n                                            [ngClass]=\"{ active: activeBoton=== i}\"\r\n                                            type=\"button\" class=\"btn btn-secondary\">\r\n                                            {{piso.planta.nombre}}</a>\r\n                                        </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                            \r\n                        <!-- </div> -->\r\n\r\n                </div>\r\n                <div class=\"col-lg-2\">\r\n                    <!-- <button data-toggle=\"tooltip\" data-placement=\"bottom\" type=\"button\" \r\n                    [routerLink]=\"['add-electrico']\" [routerLinkActive]=\"['router-link-active']\" \r\n                        class=\"btn btn-warning\">\r\n                        <i class=\"fa fa-fw fa-table\"></i>&nbsp;Nuevo\r\n                    </button> -->\r\n                   \r\n                \r\n\r\n                <div class=\"card-body max-height\">\r\n                        <div class=\"btn-toolbar mb-3\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                                <button type=\"button\"\r\n                                  class=\"btn btn-success\" [routerLink]=\"['add-electrico']\"\r\n                                  [routerLinkActive]=\"['router-link-active']\">\r\n                                  <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>Nuevo</button>\r\n                            \r\n                                \r\n                            </div>\r\n                        </div>\r\n                    \r\n                           \r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            \r\n        </div>\r\n    </nav>\r\n\r\n    <div>\r\n\r\n        <!-- <ngb-tabset type=\"pills\">\r\n            <ngb-tab title=\"{{piso.planta.nombre}}\" *ngFor=\"let piso of pisos\">\r\n                <ng-template ngbTabContent>\r\n                    <div >   -->\r\n                            <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <!-- <div class=\"col-xl-12 main-title\">\r\n                                            <h4>Agregue sus pisos a su Edificio </h4>\r\n                                        </div> -->\r\n                                        <!-- <div class=\"col-xl-12\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-xl-12 text-right\">\r\n                                                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to image\" type=\"button\" class=\"btn btn-success\" (click)=\"rasterize();\">\r\n                                                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Exportar como imagen</button>\r\n                                                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to SVG\" type=\"button\" class=\"btn btn-primary\" (click)=\"rasterizeSVG();\">\r\n                                                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Export to SVG</button> \r\n                                                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Save in localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                                                        (click)=\"saveCanvasToJSON();\">\r\n                                                        <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button>\r\n                                                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Load from localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                                                        (click)=\"loadCanvasFromJSON();\">\r\n                                                        <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Cargar última</button>\r\n                                                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clean Canvas\" type=\"button\" class=\"btn btn-danger\" (click)=\"confirmClear();\">\r\n                                                        <i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Limpiar</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> -->\r\n                                    </div>\r\n                                    <hr>\r\n                                    <div class=\"row\">\r\n                                        <!-- <div class=\"col-xl-2\"> -->\r\n                                            <!-- <div class=\"card\">\r\n                                                <div class=\"card-header\">Size</div>\r\n                                                <div class=\"card-body\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <div class=\"input-group\">\r\n                                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.width\" (keyup)=\"changeSize()\">\r\n                                                            <div class=\"input-group-append\">\r\n                                                                <span class=\"input-group-text\">\r\n                                                                    Width\r\n                                                                </span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group\">\r\n                                                        <div class=\"input-group mb-3\">\r\n                                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.height\" (keyup)=\"changeSize()\">\r\n                                                            <div class=\"input-group-append\">\r\n                                                                <span class=\"input-group-text\">\r\n                                                                    Height\r\n                                                                </span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                            <!-- <br/> -->\r\n                                            <!-- <div class=\"card\">\r\n                                                <div class=\"card-header\">Add images</div>\r\n                                                <div class=\"card-body max-height\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/extractor_icon.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/estacion manual_icono.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/electric.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_valvula.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_bomba.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_bomba1.png\">\r\n                                                    \r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_estroboscopica.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_ventilador.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/led_on 50x50.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/reservacion_icon.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sensor_humo.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sprinkler.png\">\r\n                                \r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sprinkler_icon.png\">\r\n                                                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/valve_icon.png\">\r\n                                                </div>\r\n                                            </div> -->\r\n                                            <!-- <br>\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header\">Add text</div>\r\n                                                <div class=\"card-body\">\r\n                                                    <div class=\"input-group\">\r\n                                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n                                                        <div class=\"input-group-append\">\r\n                                                            <span class=\"input-group-text\">\r\n                                                                <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\" class=\"btn btn-primary\" (click)=\"addText()\">\r\n                                                                    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                                                </button>\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br/> -->\r\n                                            \r\n                                            <!-- <br/>\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header\">Upload image</div>\r\n                                                <div class=\"card-body text-center\">\r\n                                                    <img id=\"testImage\" *ngIf=\"url\" class=\"images-item-upload\" [src]=\"url\" (click)=\"addImageOnCanvas(url);\">\r\n                                                    <input type=\"file\" (change)=\"readUrl($event);\">\r\n                                                    <br/>\r\n                                                    <br/>\r\n                                                    <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n                                                        <div class=\"btn-group\" role=\"group\">\r\n                                                            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeWhite(url);\">\r\n                                                                <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Remove</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                            <!-- <br/>\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header\">Add figure</div>\r\n                                                <div class=\"card-body text-center max-height\">\r\n                                                    <div class=\"btn-group btn-group-vertical\" role=\"group\" aria-label=\"...\">\r\n                                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('rectangle');\">Rectangle</button>\r\n                                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('square');\">Square</button>\r\n                                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('triangle');\">Triangle</button>\r\n                                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('circle');\">Circle</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                        <!-- </div> -->\r\n                                        <div class=\"col-xl-10\" >\r\n                                            <canvas id=\"canvas\" [style.background-image]=\"fondoDeCanvas\"></canvas>\r\n                                        </div>\r\n                                        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->\r\n\r\n                                        <div class=\"col-xl-2\">\r\n                                            <!-- <div class=\"card\">\r\n                                                <div class=\"card-header\">Añadir texto</div>\r\n                                                <div class=\"card-body\">\r\n                                                    <div class=\"input-group\">\r\n                                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n                                                        <div class=\"input-group-append\">\r\n                                                            <span class=\"input-group-text\">\r\n                                                                <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\" class=\"btn btn-primary\" (click)=\"addText()\">\r\n                                                                    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                                                </button>\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header\">Opciones</div>\r\n                                                <div class=\"card-body text-center\">\r\n                                                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete element\" type=\"button\" class=\"btn btn-outline-danger\" [disabled]=\"!selected\"\r\n                                                            (click)=\"removeSelected();\">\r\n                                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                        </button>\r\n                                                        <!-- <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to back\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                                            (click)=\"sendToBack();\">\r\n                                                            <i class=\"fa fa-level-down\" aria-hidden=\"true\"></i>\r\n                                                        </button>\r\n                                                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to front\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                                            (click)=\"bringToFront();\">\r\n                                                            <i class=\"fa fa-level-up\" aria-hidden=\"true\"></i>\r\n                                                        </button> -->\r\n                                                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clone\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected || selected.type == 'group'\"\r\n                                                            (click)=\"clone();\">\r\n                                                            <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\r\n                                                        </button>\r\n                                                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Unselect\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                                            (click)=\"cleanSelect()\">\r\n                                                            <i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\r\n                                                        </button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br/>\r\n                                            <!-- <div class=\"card\" *ngIf=\"!selected\">\r\n                                                <div class=\"card-header\">Canvas</div>\r\n                                                <div class=\"card-body\">\r\n                                                    <div class=\"custom-item\" *ngIf=\"!props.canvasImage\">\r\n                                                        <div class=\"custom-item-title\">Background Color</div>\r\n                                                        <div class=\"custom-item-body\">\r\n                                                            <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.canvasFill\" [style.background]=\"props.canvasFill\"\r\n                                                                [value]=\"props.canvasFill\" (colorPickerChange)=\"setCanvasFill()\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"custom-item\">\r\n                                                        <div class=\"custom-item-title\">Background Image (url)</div>\r\n                                                        <div class=\"custom-item-body\">\r\n                                                            <input type=\"text\" class=\"form-control\" placeholder=\"http://example.jpg\" [(ngModel)]=\"props.canvasImage\" (keyup)=\"setCanvasImage()\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                            <!-- <br/> -->\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header\">Caracteristicas</div>\r\n                                                <div class=\"card-body\">\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected  && selected.type == 'group'\">Group Selected</div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"!selected\">No hay item seleccionado</div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                                                        <div class=\"custom-item-title\">ID</div>\r\n                                                        <div class=\"custom-item-body\">\r\n                                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"props.id\" (keyup)=\"setId()\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                                                        <div class=\"custom-item-title\">Opacity</div>\r\n                                                        <div class=\"custom-item-body\">\r\n                                                            <input type=\"range\" [(ngModel)]=\"props.opacity\" (change)=\"setOpacity()\">{{props.opacity}}</div>\r\n                                                    </div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected && textEditor || selected && figureEditor\">\r\n                                                        <div class=\"custom-item-title\">Fill</div>\r\n                                                        <div class=\"custom-item-body\">\r\n                                                            <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.fill\" [style.background]=\"props.fill\"\r\n                                                                [value]=\"props.fill\" (colorPickerChange)=\"setFill()\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                        <div class=\"custom-item-title\">Font family</div>\r\n                                                        <div class=\"custom-item-body\">\r\n                                                            <select [(ngModel)]=\"props.fontFamily\" class=\"form-control\" (change)=\"setFontFamily()\">\r\n                                                                <option value=\"arial\">Arial</option>\r\n                                                                <option value=\"helvetica\" selected>Helvetica</option>\r\n                                                                <option value=\"verdana\">Verdana</option>\r\n                                                                <option value=\"courier\">Courier</option>\r\n                                                                <option value=\"Roboto\">Roboto</option>\r\n                                                                <option value=\"Open Sans\">Open Sans</option>\r\n                                                                <option value=\"Zilla Slab\">Zilla Slab</option>\r\n                                                                <option value=\"Lato\">Lato</option>\r\n                                                                <option value=\"Bellefair\">Bellefair</option>\r\n                                                                <option value=\"Fresca\">Fresca</option>\r\n                                                                <option value=\"Raleway\">Raleway</option>\r\n                                                                <option value=\"Open Sans Condensed\">Open Sans Condensed</option>\r\n                                                                <option value=\"Indie Flower\">Indie Flower</option>\r\n                                                                <option value=\"Josefin Sans\">Josefin Sans</option>\r\n                                                                <option value=\"Inconsolata\">Inconsolata</option>\r\n                                                                <option value=\"Pacifico\">Pacifico</option>\r\n                                                                <option value=\"Gloria Hallelujah\">Gloria Hallelujah</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                        <div class=\"custom-item-title\">Text Align</div>\r\n                                                        <div class=\"custom-item-body text-center\">\r\n                                                            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                                                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'left' }\" (click)=\"setTextAlign('left')\">\r\n                                                                    <i class=\"fa fa-align-left\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'center' }\" (click)=\"setTextAlign('center')\">\r\n                                                                    <i class=\"fa fa-align-center\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'right' }\" (click)=\"setTextAlign('right')\">\r\n                                                                    <i class=\"fa fa-align-right\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'justify' }\" (click)=\"setTextAlign('justify')\">\r\n                                                                    <i class=\"fa fa-align-justify\"></i>\r\n                                                                </button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                        <div class=\"custom-item-title\">Style</div>\r\n                                                        <div class=\"custom-item-body text-center\">\r\n                                                            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontWeight }\" (click)=\"setBold()\">\r\n                                                                    <i class=\"fa fa-bold\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontStyle }\" (click)=\"setFontStyle()\">\r\n                                                                    <i class=\"fa fa-italic\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('underline') }\"\r\n                                                                    (click)=\"setTextDecoration('underline')\">\r\n                                                                    <i class=\"fa fa-underline\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('overline') }\"\r\n                                                                    (click)=\"setTextDecoration('overline')\">\r\n                                                                    <i class=\"fa fa-underline fa-flip-vertical\"></i>\r\n                                                                </button>\r\n                                                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('line-through') }\"\r\n                                                                    (click)=\"setTextDecoration('line-through')\">\r\n                                                                    <i class=\"fa fa-strikethrough\"></i>\r\n                                                                </button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                        <div class=\"custom-item-title\">Font Size</div>\r\n                                                        <div class=\"custom-item-body\">\r\n                                                            <input type=\"range\" [(ngModel)]=\"props.fontSize\" (change)=\"setFontSize()\" step=\"1\" min=\"1\" max=\"120\">{{props.fontSize}}</div>\r\n                                                    </div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                        <div class=\"custom-item-title\">Line Height</div>\r\n                                                        <div class=\"custom-item-body\">\r\n                                                            <input type=\"range\" [(ngModel)]=\"props.lineHeight\" (change)=\"setLineHeight()\" step=\"0.1\" min=\"0\" max=\"10\">{{props.lineHeight}}</div>\r\n                                                    </div>\r\n                                                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                        <div class=\"custom-item-title\">Char Spacing</div>\r\n                                                        <div class=\"custom-item-body\">\r\n                                                            <input type=\"range\" [(ngModel)]=\"props.charSpacing\" (change)=\"setCharSpacing()\" step=\"10\" min=\"-200\" max=\"800\">{{props.charSpacing}}</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                \r\n                                  \r\n                                    <br>\r\n                                </div> \r\n\r\n    </div>\r\n                <!-- </ng-template>\r\n            </ngb-tab>       \r\n        </ngb-tabset>\r\n    </div>  -->\r\n    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->\r\n    <div>\r\n            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                    <div class=\"modal-header\">\r\n                      <h4 class=\"modal-title\">Seleccione un color</h4>\r\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                      <form>\r\n                        <!-- <div class=\"form-group\">\r\n                          <label for=\"dateOfBirth\">Date of birth</label>\r\n                          <div class=\"input-group\">\r\n                            <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n                            <div class=\"input-group-append\">\r\n                              <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\r\n                                <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\r\n                              </button>\r\n                            </div>\r\n\r\n\r\n                          </div>\r\n                        </div> -->\r\n                        <div class=\"form-group\">\r\n                            <label for=\"dateOfBirth\">Color</label>\r\n                            <div class=\"input-group\">\r\n                                <input [value]=\"color\"\r\n                                [style.background]=\"color\"\r\n                                [cpOKButton]=\"true\"\r\n                                [cpSaveClickOutside]=\"false\"\r\n                                [cpOKButtonClass]= \"'btn btn-primary btn-xs'\"\r\n                                [(colorPicker)]=\"color\"/>      \r\n\r\n                            </div>\r\n                            \r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n                    </div>\r\n                  </ng-template>\r\n                  <ng-template #contentCisterna let-c=\"close\" let-d=\"dismiss\">\r\n                        <div class=\"modal-header\">\r\n                          <h4 class=\"modal-title\">Nivel de agua</h4>\r\n                          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                          </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                          <form>\r\n                           \r\n                            <div class=\"form-group\">\r\n                                <!-- <label for=\"dateOfBirth\">Color</label>\r\n                                <p>This progress bar uses the customized default values.</p> -->\r\n                                <p><ngb-progressbar [showValue]=\"true\"  value=\"50\"></ngb-progressbar></p>\r\n                               \r\n                            </div>\r\n                          </form>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cerrar</button>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                     \r\n\r\n                          <ng-template #contentNetwork let-c=\"close\" let-d=\"dismiss\">\r\n                                <div class=\"modal-header\">\r\n                                  <h4 class=\"modal-title\">Red</h4>\r\n                                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                  </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                  <form>\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"dateOfBirth\">Configuración</label>\r\n                                      <div class=\"input-group\">\r\n                                        <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\" Dirección IP 181.196.53.179\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n                                        <div class=\"input-group-append\">\r\n                                         \r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"input-group\">\r\n                                            <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"Subnet ID 181.196.53.179\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n                                            <div class=\"input-group-append\">\r\n                                             \r\n                                            </div>\r\n                                          </div>\r\n                                    </div>\r\n                                  </form>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Guardar</button>\r\n                                </div>\r\n                              </ng-template>\r\n                              \r\n            \r\n\r\n                      <ng-template #contentTermometro let-c=\"close\" let-d=\"dismiss\">\r\n                            <div class=\"modal-header\">\r\n                              <h4 class=\"modal-title\">Termometro</h4>\r\n                              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                              </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                              <form>\r\n                               \r\n                                <div class=\"form-group\">\r\n                                    <!-- <label for=\"dateOfBirth\">Color</label>\r\n                                    <p>This progress bar uses the customized default values.</p> -->\r\n                                    <p><input type=\"range\"/></p>\r\n                                   \r\n                                </div>\r\n                              </form>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cerrar</button>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n\r\n\r\n                          <ng-template #errorAutorizacion let-c=\"close\" let-d=\"dismiss\">\r\n                                <div class=\"modal-header\">\r\n                                  <h4 class=\"modal-title\">Error</h4>\r\n                                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                  </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                  <p>No esta autorizado para realizar esta acción&hellip;</p>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                  <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">OK</button>\r\n                                </div>\r\n                              </ng-template>\r\n\r\n\r\n                          \r\n\r\n                          \r\n                          \r\n    </div>\r\n    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->\r\n\r\n        \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/sistema-electrico/sistema-electrico.component.scss":
/***/ (function(module, exports) {

module.exports = ".fondo-canvas {\n  width: 100%;\n  height: 700px;\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n#canvas {\n  border: 2px dashed #cccccc;\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n.main-title {\n  margin-top: 10px; }\n\n.images-item {\n  width: 48%;\n  cursor: pointer;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n  padding: 3px;\n  max-width: 40px; }\n\n.images-item:hover {\n  opacity: 0.7; }\n\n.images-item-upload {\n  width: 80%;\n  cursor: pointer;\n  padding-bottom: 10px;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease; }\n\n.images-item-upload:hover {\n  opacity: 0.7; }\n\n.custom-item {\n  border-bottom: 2px solid #f3f3f3; }\n\n.custom-item .custom-item-title {\n  color: #666666;\n  font-weight: 600; }\n\n.custom-item .custom-item-body {\n  padding: 10px 0; }\n\n.max-height {\n  overflow: auto;\n  max-height: 300px; }\n"

/***/ }),

/***/ "./src/app/layout/sistema-electrico/sistema-electrico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SistemaElectricoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("./src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fabric__ = __webpack_require__("./node_modules/fabric/dist/fabric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fabric__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_global__ = __webpack_require__("./src/app/shared/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SistemaElectricoComponent = /** @class */ (function () {
    function SistemaElectricoComponent(_sanitizer, config, _crud, modalService) {
        this._sanitizer = _sanitizer;
        this._crud = _crud;
        this.modalService = modalService;
        this.color = 'rgb(0, 255, 255)';
        this.props = {
            canvasFill: '#ffffff',
            canvasImage: '',
            id: null,
            opacity: null,
            fill: null,
            fontSize: null,
            lineHeight: null,
            charSpacing: null,
            fontWeight: null,
            fontStyle: null,
            textAlign: null,
            fontFamily: null,
            TextDecoration: ''
        };
        this.url = '';
        this.size = {
            width: 900,
            height: 700
        };
        this.globalEditor = false;
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
        //configuracion de progress bar
        config.max = 100;
        config.striped = true;
        config.animated = true;
        config.type = 'primary';
        config.height = '20px';
        //Configuracion de de url
        this.URLGLOBAL = __WEBPACK_IMPORTED_MODULE_5__shared_services_global__["a" /* GLOBAL */].url;
        this.URLIMAGEN = __WEBPACK_IMPORTED_MODULE_5__shared_services_global__["a" /* GLOBAL */].urlImagen;
    }
    //xxxxxxxxxxxxxxxxxxx
    SistemaElectricoComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    SistemaElectricoComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    SistemaElectricoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._crud.getPisosElectricos().subscribe(function (data) {
            _this.pisos = data;
            console.log(data);
        });
        //setup front side canvas
        this.canvas = new fabric.Canvas('canvas', {
            hoverCursor: 'pointer',
            selection: false,
            selectionBorderColor: 'blue'
        });
        console.log(this.canvas);
        this.canvas.on({
            'object:moving': function (e) {
                var selectedObject = e.target;
                // this.selected = selectedObject;
                // selectedObject.lockMovementX = true;
                // selectedObject.lockMovementY = true;
            },
            'object:modified': function (e) { },
            'object:selected': function (e) {
                var selectedObject = e.target;
                _this.selected = selectedObject;
                // console.log(e);
                console.log(selectedObject);
                selectedObject.hasRotatingPoint = false;
                selectedObject.transparentCorners = true;
                // selectedObject.cornerColor = 'rgba(255, 87, 34, 0.7)';
                _this.resetPanels();
                if (selectedObject.type !== 'group' && selectedObject) {
                    _this.getId();
                    _this.getOpacity();
                    switch (selectedObject.type) {
                        case 'rect':
                        case 'circle':
                        case 'triangle':
                            _this.figureEditor = true;
                            _this.getFill();
                            break;
                        case 'i-text':
                            _this.textEditor = true;
                            _this.getLineHeight();
                            _this.getCharSpacing();
                            _this.getBold();
                            _this.getFontStyle();
                            _this.getFill();
                            _this.getTextDecoration();
                            _this.getTextAlign();
                            _this.getFontFamily();
                            break;
                        case 'image':
                            selectedObject.lockMovementX = true;
                            selectedObject.lockMovementY = true;
                            // this.cleanSelect();
                            console.log(_this.canvas);
                            var id_1 = selectedObject.id;
                            var self_1 = _this;
                            _this.json2.objects.forEach(function (element) {
                                if (element.id == id_1) {
                                    switch (element.src) {
                                        case _this.URLIMAGEN + 'assets/recursos/Sistema-Electrico/1.png':
                                            element.src = _this.URLIMAGEN + 'assets/recursos/Sistema-Electrico/1.1.png';
                                            break;
                                        case _this.URLIMAGEN + 'assets/recursos/Sistema-Electrico/1.1.png':
                                            element.src = _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/1.png";
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/2.png":
                                            element.src = _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/2.1.png";
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/2.1.png":
                                            element.src = _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/2.png";
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/3.png":
                                            element.src = _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/3.1.png";
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/3.1.png":
                                            element.src = _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/3.png";
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/4.png":
                                            // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/4.1.png";
                                            _this.open(_this.contentNetwork);
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/5.png":
                                            element.src = _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/5.1.png";
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/5.1.png":
                                            element.src = _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/5.png";
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/6.png":
                                            // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/6.1.png";
                                            _this.open(_this.contentTermometro);
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/7.png":
                                            element.src = _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/7.1.png";
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/7.1.png":
                                            element.src = _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/7.png";
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/8.png":
                                            // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/8.1.png";
                                            _this.open(_this.contentCisterna);
                                            break;
                                        // case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.png":
                                        // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.1.png";
                                        // break;
                                        // case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.1png":
                                        // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.png";
                                        // break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/11.png":
                                            // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.png";
                                            _this.open(_this.content);
                                            break;
                                        case _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/12.png":
                                            // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.png";
                                            _this.open(_this.content);
                                            break;
                                    }
                                    if (element.scr != _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/8.png" ||
                                        element.src != _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/4.png" ||
                                        element.src != _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/6.png" ||
                                        element.src != _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/11.png" ||
                                        element.src != _this.URLIMAGEN + "assets/recursos/Sistema-Electrico/12.png") {
                                        _this.canvas.loadFromJSON(_this.json2, function () {
                                            _this.fondoDeCanvas = _this.sanitizeImage(_this.URLGLOBAL + _this.json2.planta.img);
                                            _this.canvas.renderAll();
                                        });
                                    }
                                    return;
                                }
                            });
                            // this.canvas.item(0).set({src:'http://localhost:4200/assets/recursos/Sistema-Electrico/1.png'})
                            // this.canvas.setActiveObject(this.canvas.item(0));
                            // this.canvas.setActiveObject(selectedObject);
                            // this.canvas.renderAll();
                            break;
                    }
                }
            },
            'selection:cleared': function (e) {
                _this.selected = null;
                _this.resetPanels();
            }
        });
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
        // get references to the html canvas element & its context
        // this.canvas.on('mouse:down', (e) => {
        // let canvasElement: any = document.getElementById('canvas');
        // console.log(canvasElement)
        // });
    };
    /*------------------------Block elements------------------------*/
    //Block "Size"
    SistemaElectricoComponent.prototype.changeSize = function (event) {
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
    };
    //Block "Add text"
    SistemaElectricoComponent.prototype.addText = function () {
        var textString = this.textString;
        var text = new fabric.IText(textString, {
            left: 10,
            top: 10,
            fontFamily: 'helvetica',
            angle: 0,
            fill: '#000000',
            scaleX: 0.5,
            scaleY: 0.5,
            fontWeight: '',
            hasRotatingPoint: true
        });
        this.extend(text, this.randomId());
        this.canvas.add(text);
        this.selectItemAfterAdded(text);
        this.textString = '';
    };
    //Block "Add images"
    SistemaElectricoComponent.prototype.getImgPolaroid = function (event) {
        var _this = this;
        var el = event.target;
        fabric.Image.fromURL(el.src, function (image) {
            image.set({
                left: 10,
                top: 10,
                angle: 0,
                padding: 10,
                cornersize: 10,
                hasRotatingPoint: true,
                peloas: 12
            });
            //aqui la escucha de evento
            image.setWidth(40);
            image.setHeight(30);
            _this.extend(image, _this.randomId());
            _this.canvas.add(image);
            _this.selectItemAfterAdded(image);
        });
    };
    //Block "Upload Image"
    SistemaElectricoComponent.prototype.addImageOnCanvas = function (url) {
        var _this = this;
        if (url) {
            fabric.Image.fromURL(url, function (image) {
                image.set({
                    left: 10,
                    top: 10,
                    angle: 0,
                    padding: 10,
                    cornersize: 10,
                    hasRotatingPoint: true
                });
                image.setWidth(200);
                image.setHeight(200);
                _this.extend(image, _this.randomId());
                _this.canvas.add(image);
                _this.selectItemAfterAdded(image);
            });
        }
    };
    SistemaElectricoComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target['result'];
                console.log(_this.url);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    SistemaElectricoComponent.prototype.removeWhite = function (url) {
        this.url = '';
    };
    ;
    //Block "Add figure"
    SistemaElectricoComponent.prototype.addFigure = function (figure) {
        var add;
        switch (figure) {
            case 'rectangle':
                add = new fabric.Rect({
                    width: 200, height: 100, left: 10, top: 10, angle: 0,
                    fill: '#3f51b5'
                });
                break;
            case 'square':
                add = new fabric.Rect({
                    width: 100, height: 100, left: 10, top: 10, angle: 0,
                    fill: '#4caf50'
                });
                break;
            case 'triangle':
                add = new fabric.Triangle({
                    width: 100, height: 100, left: 10, top: 10, fill: '#2196f3'
                });
                break;
            case 'circle':
                add = new fabric.Circle({
                    radius: 50, left: 10, top: 10, fill: '#ff5722'
                });
                break;
        }
        this.extend(add, this.randomId());
        this.canvas.add(add);
        this.selectItemAfterAdded(add);
    };
    /*Canvas*/
    SistemaElectricoComponent.prototype.cleanSelect = function () {
        this.canvas.deactivateAllWithDispatch().renderAll();
    };
    SistemaElectricoComponent.prototype.selectItemAfterAdded = function (obj) {
        this.canvas.deactivateAllWithDispatch().renderAll();
        this.canvas.setActiveObject(obj);
    };
    SistemaElectricoComponent.prototype.setCanvasFill = function () {
        if (!this.props.canvasImage) {
            this.canvas.backgroundColor = this.props.canvasFill;
            this.canvas.renderAll();
        }
    };
    SistemaElectricoComponent.prototype.extend = function (obj, id) {
        obj.toObject = (function (toObject) {
            return function () {
                return fabric.util.object.extend(toObject.call(this), {
                    id: id
                });
            };
        })(obj.toObject);
    };
    SistemaElectricoComponent.prototype.setCanvasImage = function () {
        var self = this;
        // this.canvas.Image.fromUrl
        if (this.props.canvasImage) {
            this.canvas.setBackgroundColor({ source: this.props.canvasImage, repeat: 'repeat' }, function () {
                // self.props.canvasFill = '';
                self.canvas.renderAll();
                //
                //
            });
        }
    };
    SistemaElectricoComponent.prototype.randomId = function () {
        return Math.floor(Math.random() * 999999) + 1;
    };
    /*------------------------Global actions for element------------------------*/
    SistemaElectricoComponent.prototype.getActiveStyle = function (styleName, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return '';
        return (object.getSelectionStyles && object.isEditing)
            ? (object.getSelectionStyles()[styleName] || '')
            : (object[styleName] || '');
    };
    SistemaElectricoComponent.prototype.setActiveStyle = function (styleName, value, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return;
        if (object.setSelectionStyles && object.isEditing) {
            var style = {};
            style[styleName] = value;
            object.setSelectionStyles(style);
            object.setCoords();
        }
        else {
            object.set(styleName, value);
        }
        object.setCoords();
        this.canvas.renderAll();
    };
    SistemaElectricoComponent.prototype.getActiveProp = function (name) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return '';
        return object[name] || '';
    };
    SistemaElectricoComponent.prototype.setActiveProp = function (name, value) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return;
        object.set(name, value).setCoords();
        this.canvas.renderAll();
    };
    SistemaElectricoComponent.prototype.clone = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            var clone = void 0;
            switch (activeObject.type) {
                case 'rect':
                    clone = new fabric.Rect(activeObject.toObject());
                    break;
                case 'circle':
                    clone = new fabric.Circle(activeObject.toObject());
                    break;
                case 'triangle':
                    clone = new fabric.Triangle(activeObject.toObject());
                    break;
                case 'i-text':
                    clone = new fabric.IText('', activeObject.toObject());
                    break;
                case 'image':
                    clone = fabric.util.object.clone(activeObject);
                    break;
            }
            if (clone) {
                clone.set({ left: 10, top: 10 });
                this.canvas.add(clone);
                this.selectItemAfterAdded(clone);
            }
        }
    };
    SistemaElectricoComponent.prototype.getId = function () {
        console.log(this.canvas.getActiveObject().id);
        // this.props.id = this.canvas.getActiveObject().toObject().id; antes
        this.props.id = this.canvas.getActiveObject().id;
    };
    //darwin{}
    SistemaElectricoComponent.prototype.setImage = function () {
        var val = this.props.id;
        var complete = this.canvas.getActiveObject().toObject();
        console.log(complete);
        this.canvas.getActiveObject().toObject = function () {
            complete.id = val;
            return complete;
        };
    };
    SistemaElectricoComponent.prototype.setId = function () {
        var val = this.props.id;
        var complete = this.canvas.getActiveObject().toObject();
        console.log(complete);
        this.canvas.getActiveObject().toObject = function () {
            complete.id = val;
            return complete;
        };
    };
    SistemaElectricoComponent.prototype.getOpacity = function () {
        this.props.opacity = this.getActiveStyle('opacity', null) * 100;
    };
    SistemaElectricoComponent.prototype.setOpacity = function () {
        this.setActiveStyle('opacity', parseInt(this.props.opacity) / 100, null);
    };
    SistemaElectricoComponent.prototype.getFill = function () {
        this.props.fill = this.getActiveStyle('fill', null);
    };
    SistemaElectricoComponent.prototype.setFill = function () {
        this.setActiveStyle('fill', this.props.fill, null);
    };
    SistemaElectricoComponent.prototype.getLineHeight = function () {
        this.props.lineHeight = this.getActiveStyle('lineHeight', null);
    };
    SistemaElectricoComponent.prototype.setLineHeight = function () {
        this.setActiveStyle('lineHeight', parseFloat(this.props.lineHeight), null);
    };
    SistemaElectricoComponent.prototype.getCharSpacing = function () {
        this.props.charSpacing = this.getActiveStyle('charSpacing', null);
    };
    SistemaElectricoComponent.prototype.setCharSpacing = function () {
        this.setActiveStyle('charSpacing', this.props.charSpacing, null);
    };
    SistemaElectricoComponent.prototype.getFontSize = function () {
        this.props.fontSize = this.getActiveStyle('fontSize', null);
    };
    SistemaElectricoComponent.prototype.setFontSize = function () {
        this.setActiveStyle('fontSize', parseInt(this.props.fontSize), null);
    };
    SistemaElectricoComponent.prototype.getBold = function () {
        this.props.fontWeight = this.getActiveStyle('fontWeight', null);
    };
    SistemaElectricoComponent.prototype.setBold = function () {
        this.props.fontWeight = !this.props.fontWeight;
        this.setActiveStyle('fontWeight', this.props.fontWeight ? 'bold' : '', null);
    };
    SistemaElectricoComponent.prototype.getFontStyle = function () {
        this.props.fontStyle = this.getActiveStyle('fontStyle', null);
    };
    SistemaElectricoComponent.prototype.setFontStyle = function () {
        this.props.fontStyle = !this.props.fontStyle;
        this.setActiveStyle('fontStyle', this.props.fontStyle ? 'italic' : '', null);
    };
    SistemaElectricoComponent.prototype.getTextDecoration = function () {
        this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
    };
    SistemaElectricoComponent.prototype.setTextDecoration = function (value) {
        var iclass = this.props.TextDecoration;
        if (iclass.includes(value)) {
            iclass = iclass.replace(RegExp(value, "g"), "");
        }
        else {
            iclass += " " + value;
        }
        this.props.TextDecoration = iclass;
        this.setActiveStyle('textDecoration', this.props.TextDecoration, null);
    };
    SistemaElectricoComponent.prototype.hasTextDecoration = function (value) {
        return this.props.TextDecoration.includes(value);
    };
    SistemaElectricoComponent.prototype.getTextAlign = function () {
        this.props.textAlign = this.getActiveProp('textAlign');
    };
    SistemaElectricoComponent.prototype.setTextAlign = function (value) {
        this.props.textAlign = value;
        this.setActiveProp('textAlign', this.props.textAlign);
    };
    SistemaElectricoComponent.prototype.getFontFamily = function () {
        this.props.fontFamily = this.getActiveProp('fontFamily');
    };
    SistemaElectricoComponent.prototype.setFontFamily = function () {
        this.setActiveProp('fontFamily', this.props.fontFamily);
    };
    /*System*/
    SistemaElectricoComponent.prototype.removeSelected = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            this.canvas.remove(activeObject);
            // this.textString = '';
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            var self_2 = this;
            objectsInGroup.forEach(function (object) {
                self_2.canvas.remove(object);
            });
        }
    };
    SistemaElectricoComponent.prototype.bringToFront = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            activeObject.bringToFront();
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                object.bringToFront();
            });
        }
    };
    SistemaElectricoComponent.prototype.sendToBack = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            activeObject.sendToBack();
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                object.sendToBack();
            });
        }
    };
    SistemaElectricoComponent.prototype.confirmClear = function () {
        if (confirm('Are you sure?')) {
            this.canvas.clear();
        }
    };
    SistemaElectricoComponent.prototype.rasterize = function () {
        if (!fabric.Canvas.supports('toDataURL')) {
            alert('This browser doesn\'t provide means to serialize canvas to an image');
        }
        else {
            console.log(this.canvas.toDataURL('png'));
            //window.open(this.canvas.toDataURL('png'));
            var image = new Image();
            image.src = this.canvas.toDataURL('png');
            var w = window.open("");
            w.document.write(image.outerHTML);
        }
    };
    SistemaElectricoComponent.prototype.rasterizeSVG = function () {
        console.log(this.canvas.toSVG());
        // window.open(
        //   'data:image/svg+xml;utf8,' +
        //   encodeURIComponent(this.canvas.toSVG()));
        // console.log(this.canvas.toSVG())
        // var image = new Image();
        // image.src = this.canvas.toSVG()
        var w = window.open("");
        w.document.write(this.canvas.toSVG());
    };
    ;
    SistemaElectricoComponent.prototype.saveCanvasToJSON = function () {
        var json = JSON.stringify(this.canvas);
        localStorage.setItem('Kanvas', json);
        console.log('json');
        console.log(json);
    };
    SistemaElectricoComponent.prototype.loadCanvasFromJSON = function () {
        var _this = this;
        var CANVAS = localStorage.getItem('Kanvas');
        console.log('CANVAS');
        console.log(CANVAS);
        // and load everything from the same json
        this.canvas.loadFromJSON(CANVAS, function () {
            console.log('CANVAS untar');
            console.log(CANVAS);
            // making sure to render canvas at the end
            _this.canvas.renderAll();
            // and checking if object's "name" is preserved
            console.log('this.canvas.item(0).name');
            console.log(_this.canvas);
        });
    };
    ;
    SistemaElectricoComponent.prototype.rasterizeJSON = function () {
        this.json = JSON.stringify(this.canvas, null, 2);
    };
    SistemaElectricoComponent.prototype.resetPanels = function () {
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
    };
    SistemaElectricoComponent.prototype.cargardesdeJSON = function (json, i) {
        var _this = this;
        this.activeBoton = i;
        this.json2 = json;
        this.canvas.loadFromJSON(json, function () {
            _this.fondoDeCanvas = _this.sanitizeImage(_this.URLGLOBAL + json.planta.img);
            // making sure to render canvas at the end
            _this.canvas.renderAll();
        });
    };
    //dar
    //----------------------------------Para fondo de imagen-----------------------
    SistemaElectricoComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fondoCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SistemaElectricoComponent.prototype, "fondoCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SistemaElectricoComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentCisterna'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SistemaElectricoComponent.prototype, "contentCisterna", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentTermometro'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SistemaElectricoComponent.prototype, "contentTermometro", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentNetwork'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SistemaElectricoComponent.prototype, "contentNetwork", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('#errorAutorizacion'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SistemaElectricoComponent.prototype, "errorAutorizacion", void 0);
    SistemaElectricoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__("./src/app/layout/sistema-electrico/sistema-electrico.component.html"),
            styles: [__webpack_require__("./src/app/layout/sistema-electrico/sistema-electrico.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["g" /* NgbProgressbarConfig */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["e" /* NgbModal */]])
    ], SistemaElectricoComponent);
    return SistemaElectricoComponent;
}());



/***/ }),

/***/ "./src/app/layout/sistema-electrico/sistema-electrico.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SistemaElectricoModule", function() { return SistemaElectricoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_color_picker__ = __webpack_require__("./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sistema_electrico_routing_module__ = __webpack_require__("./src/app/layout/sistema-electrico/sistema-electrico-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sistema_electrico_component__ = __webpack_require__("./src/app/layout/sistema-electrico/sistema-electrico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_crud_service__ = __webpack_require__("./src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_electrico_add_electrico_component__ = __webpack_require__("./src/app/layout/sistema-electrico/add-electrico/add-electrico.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SistemaElectricoModule = /** @class */ (function () {
    function SistemaElectricoModule() {
    }
    SistemaElectricoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6__sistema_electrico_routing_module__["a" /* SistemaElectricoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["d" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__sistema_electrico_component__["a" /* SistemaElectricoComponent */], __WEBPACK_IMPORTED_MODULE_10__add_electrico_add_electrico_component__["a" /* AddElectricoComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__shared_services_crud_service__["a" /* CrudService */]]
        })
    ], SistemaElectricoModule);
    return SistemaElectricoModule;
}());



/***/ })

});
//# sourceMappingURL=sistema-electrico.module.chunk.js.map
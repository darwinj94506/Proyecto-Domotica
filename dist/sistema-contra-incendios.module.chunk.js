webpackJsonp(["sistema-contra-incendios.module"],{

/***/ "./src/app/layout/sistema-contra-incendios/add-incendios/add-incendios.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <!-- <app-page-header [heading]=\"'Bootstrap Elements'\" [icon]=\"'fa-desktop'\"></app-page-header> -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <div class=\"card\">\r\n          <!-- <div class=\"card-header\">Add images</div> -->\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-8\">\r\n                  <div class=\"card-body max-height\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/1.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/2.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/3.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/4.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/5.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/6.png\">\r\n                          <!-- <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/7.png\"> -->\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/8.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/9.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/10.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/11.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/12.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/13.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/14.png\">\r\n                          <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/15.png\">                              \r\n                      </div>\r\n\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n             \r\n                <!-- -->\r\n\r\n            <div class=\"card-body max-height\">\r\n                <div class=\"btn-toolbar mb-3\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                        <button *ngIf=\"!espiner\" [disabled]=\"url==null || url=='' || nombrePiso==null || nombrePiso==''\" type=\"button\"\r\n                            (click)=\"saveCanvasToJSON();\" class=\"btn btn-primary\">\r\n                            <i class=\"fa fa-save\" aria-hidden=\"true\"></i></button>\r\n                        <button *ngIf=\"!espiner\"  type=\"button\" class=\"btn btn-danger\"(click)=\"confirmClear();\"> \r\n                            <i class=\"fa fa-ban\" aria-hidden=\"true\"></i></button>\r\n                        <button *ngIf=\"espiner\" type=\"button\" class=\"btn btn-info\">\r\n                                <i class=\"fa fa-spinner fa-spin\"></i>Espere\r\n                        </button>\r\n\r\n                        \r\n                    </div>\r\n\r\n                    <div class=\"input-group\" *ngIf=\"!espiner\">\r\n                        <!-- <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\" id=\"btnGroupAddon\"></div>\r\n                        </div> -->\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Nombre de piso\" [(ngModel)]=\"nombrePiso\" name=\"nombrePiso\"\r\n                        aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon\">\r\n                    </div>\r\n\r\n                </div>\r\n            \r\n                    \r\n            </div>\r\n          \r\n          \r\n            </div>\r\n\r\n      </div>\r\n      \r\n  </div>\r\n</nav>\r\n\r\n<div>\r\n\r\n  <!-- <ngb-tabset type=\"pills\">\r\n      <ngb-tab title=\"{{piso.nombre}}\" *ngFor=\"let piso of pisos\">\r\n          <ng-template ngbTabContent>\r\n              <div class=\"container2\" [style.background-image]=\"sanitizeImage(piso.imagen)\" >   -->\r\n                      <div class=\"container\">\r\n                              <div class=\"row\">\r\n                                  <!-- <div class=\"col-xl-12 main-title\">\r\n                                      <h4>Agregue sus pisos a su Edificio </h4>\r\n                                  </div> -->\r\n                                  <!-- <div class=\"col-xl-12\">\r\n                                      <div class=\"row\">\r\n                                          <div class=\"col-xl-12 text-right\">\r\n                                              <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to image\" type=\"button\" class=\"btn btn-success\" (click)=\"rasterize();\">\r\n                                                  <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Exportar como imagen</button>\r\n                                              <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to SVG\" type=\"button\" class=\"btn btn-primary\" (click)=\"rasterizeSVG();\">\r\n                                                  <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Export to SVG</button> \r\n                                              <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Save in localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                                                  (click)=\"saveCanvasToJSON();\">\r\n                                                  <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button>\r\n                                              <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Load from localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                                                  (click)=\"loadCanvasFromJSON();\">\r\n                                                  <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Cargar última</button>\r\n                                              <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clean Canvas\" type=\"button\" class=\"btn btn-danger\" (click)=\"confirmClear();\">\r\n                                                  <i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Limpiar</button>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div> -->\r\n                              </div>\r\n                              <hr>\r\n                              <div class=\"row\">\r\n                                  <!-- <div class=\"col-xl-2\"> -->\r\n                                      <!-- <div class=\"card\">\r\n                                          <div class=\"card-header\">Size</div>\r\n                                          <div class=\"card-body\">\r\n                                              <div class=\"form-group\">\r\n                                                  <div class=\"input-group\">\r\n                                                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.width\" (keyup)=\"changeSize()\">\r\n                                                      <div class=\"input-group-append\">\r\n                                                          <span class=\"input-group-text\">\r\n                                                              Width\r\n                                                          </span>\r\n                                                      </div>\r\n                                                  </div>\r\n                                              </div>\r\n                                              <div class=\"form-group\">\r\n                                                  <div class=\"input-group mb-3\">\r\n                                                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.height\" (keyup)=\"changeSize()\">\r\n                                                      <div class=\"input-group-append\">\r\n                                                          <span class=\"input-group-text\">\r\n                                                              Height\r\n                                                          </span>\r\n                                                      </div>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div> -->\r\n                                      <!-- <br/> -->\r\n                                      <!-- <div class=\"card\">\r\n                                          <div class=\"card-header\">Add images</div>\r\n                                          <div class=\"card-body max-height\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/extractor_icon.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/estacion manual_icono.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/electric.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_valvula.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_bomba.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_bomba1.png\">\r\n                                              \r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_estroboscopica.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_ventilador.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/led_on 50x50.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/reservacion_icon.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sensor_humo.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sprinkler.png\">\r\n                          \r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sprinkler_icon.png\">\r\n                                              <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/valve_icon.png\">\r\n                                          </div>\r\n                                      </div> -->\r\n                                      <!-- <br>\r\n                                      <div class=\"card\">\r\n                                          <div class=\"card-header\">Add text</div>\r\n                                          <div class=\"card-body\">\r\n                                              <div class=\"input-group\">\r\n                                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n                                                  <div class=\"input-group-append\">\r\n                                                      <span class=\"input-group-text\">\r\n                                                          <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\" class=\"btn btn-primary\" (click)=\"addText()\">\r\n                                                              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                                          </button>\r\n                                                      </span>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                      <br/> -->\r\n<!--                                       \r\n                                      <br/>\r\n                                      <div class=\"card\">\r\n                                          <div class=\"card-header\">Upload image</div>\r\n                                          <div class=\"card-body text-center\">\r\n                                              <img id=\"testImage\" *ngIf=\"url\" class=\"images-item-upload\" [src]=\"url\" (click)=\"addImageOnCanvas(url);\">\r\n                                              <input type=\"file\" (change)=\"readUrl($event);\">\r\n                                              <br/>\r\n                                              <br/>\r\n                                              <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n                                                  <div class=\"btn-group\" role=\"group\">\r\n                                                      <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeWhite(url);\">\r\n                                                          <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Remove</button>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div> -->\r\n                                      <!-- <br/>\r\n                                      <div class=\"card\">\r\n                                          <div class=\"card-header\">Add figure</div>\r\n                                          <div class=\"card-body text-center max-height\">\r\n                                              <div class=\"btn-group btn-group-vertical\" role=\"group\" aria-label=\"...\">\r\n                                                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('rectangle');\">Rectangle</button>\r\n                                                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('square');\">Square</button>\r\n                                                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('triangle');\">Triangle</button>\r\n                                                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('circle');\">Circle</button>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div> -->\r\n                                  <!-- </div> -->\r\n                                  <div class=\"col-xl-10\">\r\n                                      <canvas id=\"canvas\" [style.background-image]=\"sanitizeImage(url)\"></canvas>\r\n                                  </div>\r\n                                  <div class=\"col-xl-2\">\r\n                                      <!-- <div class=\"card\">\r\n                                          <div class=\"card-header\">Añadir texto</div>\r\n                                          <div class=\"card-body\">\r\n                                              <div class=\"input-group\">\r\n                                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n                                                  <div class=\"input-group-append\">\r\n                                                      <span class=\"input-group-text\">\r\n                                                          <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\" class=\"btn btn-primary\" (click)=\"addText()\">\r\n                                                              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                                          </button>\r\n                                                      </span>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                         \r\n                                      <br/> -->\r\n                                      <div class=\"card\">\r\n                                          <div class=\"card-header\">Cargar Plano</div>\r\n                                          <div class=\"card-body text-center\">\r\n                                              <img id=\"testImage\" *ngIf=\"url\" class=\"images-item-upload\" [src]=\"url\">\r\n                                              <input type=\"file\" class=\"form-control-file\"  (change)=\"readUrl($event);\">\r\n                                              <br/>\r\n                                              <br/>\r\n                                              <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n                                                  <div class=\"btn-group\" role=\"group\">\r\n                                                      <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" \r\n                                                      [disabled]=\"url==null || url==''\"\r\n                                                       (click)=\"removeWhite(url);\">\r\n                                                          <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Remover</button>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"card\">\r\n                                          <div class=\"card-header\">Opciones</div>\r\n                                          <div class=\"card-body text-center\">\r\n                                              <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                                  <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete element\" type=\"button\" class=\"btn btn-outline-danger\" [disabled]=\"!selected\"\r\n                                                      (click)=\"removeSelected();\">\r\n                                                      <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                  </button>\r\n                                                  <!-- <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to back\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                                      (click)=\"sendToBack();\">\r\n                                                      <i class=\"fa fa-level-down\" aria-hidden=\"true\"></i>\r\n                                                  </button>\r\n                                                  <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to front\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                                      (click)=\"bringToFront();\">\r\n                                                      <i class=\"fa fa-level-up\" aria-hidden=\"true\"></i>\r\n                                                  </button> -->\r\n                                                  <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clone\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected || selected.type == 'group'\"\r\n                                                      (click)=\"clone();\">\r\n                                                      <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\r\n                                                  </button>\r\n                                                  <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Unselect\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                                      (click)=\"cleanSelect()\">\r\n                                                      <i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\r\n                                                  </button>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                      <br/>\r\n                                      <!-- <div class=\"card\" *ngIf=\"!selected\">\r\n                                          <div class=\"card-header\">Canvas</div>\r\n                                          <div class=\"card-body\">\r\n                                              <div class=\"custom-item\" *ngIf=\"!props.canvasImage\">\r\n                                                  <div class=\"custom-item-title\">Background Color</div>\r\n                                                  <div class=\"custom-item-body\">\r\n                                                      <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.canvasFill\" [style.background]=\"props.canvasFill\"\r\n                                                          [value]=\"props.canvasFill\" (colorPickerChange)=\"setCanvasFill()\">\r\n                                                  </div>\r\n                                              </div>\r\n                                              <div class=\"custom-item\">\r\n                                                  <div class=\"custom-item-title\">Background Image (url)</div>\r\n                                                  <div class=\"custom-item-body\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"http://example.jpg\" [(ngModel)]=\"props.canvasImage\" (keyup)=\"setCanvasImage()\">\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div> -->\r\n                                      <!-- <br/> -->\r\n                                      <div class=\"card\">\r\n                                          <div class=\"card-header\">Caracteristicas</div>\r\n                                          <div class=\"card-body\">\r\n                                              <div class=\"custom-item\" *ngIf=\"selected  && selected.type == 'group'\">Group Selected</div>\r\n                                              <div class=\"custom-item\" *ngIf=\"!selected\">No hay item seleccionado</div>\r\n                                              <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                                                  <div class=\"custom-item-title\">ID</div>\r\n                                                  <div class=\"custom-item-body\">\r\n                                                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"props.id\" (keyup)=\"setId()\">\r\n                                                  </div>\r\n                                              </div>\r\n                                              <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                                                  <div class=\"custom-item-title\">Opacity</div>\r\n                                                  <div class=\"custom-item-body\">\r\n                                                      <input type=\"range\" [(ngModel)]=\"props.opacity\" (change)=\"setOpacity()\">{{props.opacity}}</div>\r\n                                              </div>\r\n                                              <div class=\"custom-item\" *ngIf=\"selected && textEditor || selected && figureEditor\">\r\n                                                  <div class=\"custom-item-title\">Fill</div>\r\n                                                  <div class=\"custom-item-body\">\r\n                                                      <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.fill\" [style.background]=\"props.fill\"\r\n                                                          [value]=\"props.fill\" (colorPickerChange)=\"setFill()\">\r\n                                                  </div>\r\n                                              </div>\r\n                                              <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                  <div class=\"custom-item-title\">Font family</div>\r\n                                                  <div class=\"custom-item-body\">\r\n                                                      <select [(ngModel)]=\"props.fontFamily\" class=\"form-control\" (change)=\"setFontFamily()\">\r\n                                                          <option value=\"arial\">Arial</option>\r\n                                                          <option value=\"helvetica\" selected>Helvetica</option>\r\n                                                          <option value=\"verdana\">Verdana</option>\r\n                                                          <option value=\"courier\">Courier</option>\r\n                                                          <option value=\"Roboto\">Roboto</option>\r\n                                                          <option value=\"Open Sans\">Open Sans</option>\r\n                                                          <option value=\"Zilla Slab\">Zilla Slab</option>\r\n                                                          <option value=\"Lato\">Lato</option>\r\n                                                          <option value=\"Bellefair\">Bellefair</option>\r\n                                                          <option value=\"Fresca\">Fresca</option>\r\n                                                          <option value=\"Raleway\">Raleway</option>\r\n                                                          <option value=\"Open Sans Condensed\">Open Sans Condensed</option>\r\n                                                          <option value=\"Indie Flower\">Indie Flower</option>\r\n                                                          <option value=\"Josefin Sans\">Josefin Sans</option>\r\n                                                          <option value=\"Inconsolata\">Inconsolata</option>\r\n                                                          <option value=\"Pacifico\">Pacifico</option>\r\n                                                          <option value=\"Gloria Hallelujah\">Gloria Hallelujah</option>\r\n                                                      </select>\r\n                                                  </div>\r\n                                              </div>\r\n                                              <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                  <div class=\"custom-item-title\">Text Align</div>\r\n                                                  <div class=\"custom-item-body text-center\">\r\n                                                      <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                                          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'left' }\" (click)=\"setTextAlign('left')\">\r\n                                                              <i class=\"fa fa-align-left\"></i>\r\n                                                          </button>\r\n                                                          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'center' }\" (click)=\"setTextAlign('center')\">\r\n                                                              <i class=\"fa fa-align-center\"></i>\r\n                                                          </button>\r\n                                                          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'right' }\" (click)=\"setTextAlign('right')\">\r\n                                                              <i class=\"fa fa-align-right\"></i>\r\n                                                          </button>\r\n                                                          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'justify' }\" (click)=\"setTextAlign('justify')\">\r\n                                                              <i class=\"fa fa-align-justify\"></i>\r\n                                                          </button>\r\n                                                      </div>\r\n                                                  </div>\r\n                                              </div>\r\n                                              <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                  <div class=\"custom-item-title\">Style</div>\r\n                                                  <div class=\"custom-item-body text-center\">\r\n                                                      <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                                          <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontWeight }\" (click)=\"setBold()\">\r\n                                                              <i class=\"fa fa-bold\"></i>\r\n                                                          </button>\r\n                                                          <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontStyle }\" (click)=\"setFontStyle()\">\r\n                                                              <i class=\"fa fa-italic\"></i>\r\n                                                          </button>\r\n                                                          <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('underline') }\"\r\n                                                              (click)=\"setTextDecoration('underline')\">\r\n                                                              <i class=\"fa fa-underline\"></i>\r\n                                                          </button>\r\n                                                          <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('overline') }\"\r\n                                                              (click)=\"setTextDecoration('overline')\">\r\n                                                              <i class=\"fa fa-underline fa-flip-vertical\"></i>\r\n                                                          </button>\r\n                                                          <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('line-through') }\"\r\n                                                              (click)=\"setTextDecoration('line-through')\">\r\n                                                              <i class=\"fa fa-strikethrough\"></i>\r\n                                                          </button>\r\n                                                      </div>\r\n                                                  </div>\r\n                                              </div>\r\n                                              <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                  <div class=\"custom-item-title\">Font Size</div>\r\n                                                  <div class=\"custom-item-body\">\r\n                                                      <input type=\"range\" [(ngModel)]=\"props.fontSize\" (change)=\"setFontSize()\" step=\"1\" min=\"1\" max=\"120\">{{props.fontSize}}</div>\r\n                                              </div>\r\n                                              <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                  <div class=\"custom-item-title\">Line Height</div>\r\n                                                  <div class=\"custom-item-body\">\r\n                                                      <input type=\"range\" [(ngModel)]=\"props.lineHeight\" (change)=\"setLineHeight()\" step=\"0.1\" min=\"0\" max=\"10\">{{props.lineHeight}}</div>\r\n                                              </div>\r\n                                              <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                                  <div class=\"custom-item-title\">Char Spacing</div>\r\n                                                  <div class=\"custom-item-body\">\r\n                                                      <input type=\"range\" [(ngModel)]=\"props.charSpacing\" (change)=\"setCharSpacing()\" step=\"10\" min=\"-200\" max=\"800\">{{props.charSpacing}}</div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          \r\n                            \r\n                              <br>\r\n                          </div> \r\n\r\n              </div>\r\n          <!-- </ng-template>\r\n      </ngb-tab>\r\n          \r\n          \r\n  </ngb-tabset>\r\n  \r\n</div> -->\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/sistema-contra-incendios/add-incendios/add-incendios.component.scss":
/***/ (function(module, exports) {

module.exports = ".container2 {\n  width: 100%;\n  height: 500px;\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n#canvas {\n  border: 2px dashed #cccccc;\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n.main-title {\n  margin-top: 10px; }\n\n.images-item {\n  width: 48%;\n  cursor: pointer;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n  padding: 0.5px;\n  max-width: 40px;\n  margin: 0px; }\n\n.images-item:hover {\n  opacity: 0.7; }\n\n.images-item-upload {\n  width: 80%;\n  cursor: pointer;\n  padding-bottom: 10px;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease; }\n\n.images-item-upload:hover {\n  opacity: 0.7; }\n\n.custom-item {\n  border-bottom: 2px solid #f3f3f3; }\n\n.custom-item .custom-item-title {\n  color: #666666;\n  font-weight: 600; }\n\n.custom-item .custom-item-body {\n  padding: 10px 0; }\n\n.max-height {\n  overflow: auto;\n  max-height: 300px; }\n"

/***/ }),

/***/ "./src/app/layout/sistema-contra-incendios/add-incendios/add-incendios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddIncendiosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("./src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fabric__ = __webpack_require__("./node_modules/fabric/dist/fabric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fabric__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddIncendiosComponent = /** @class */ (function () {
    function AddIncendiosComponent(router, _sanitizer, _crud) {
        this.router = router;
        this._sanitizer = _sanitizer;
        this._crud = _crud;
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
    AddIncendiosComponent.prototype.ngOnInit = function () {
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
    AddIncendiosComponent.prototype.changeSize = function (event) {
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
    };
    //Block "Add text"
    AddIncendiosComponent.prototype.addText = function () {
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
    AddIncendiosComponent.prototype.getImgPolaroid = function (event) {
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
    AddIncendiosComponent.prototype.addImageOnCanvas = function (url) {
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
    AddIncendiosComponent.prototype.readUrl = function (event) {
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
    AddIncendiosComponent.prototype.removeWhite = function (url) {
        this.url = '';
    };
    ;
    //Block "Add figure"
    AddIncendiosComponent.prototype.addFigure = function (figure) {
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
    AddIncendiosComponent.prototype.cleanSelect = function () {
        this.canvas.deactivateAllWithDispatch().renderAll();
    };
    AddIncendiosComponent.prototype.selectItemAfterAdded = function (obj) {
        this.canvas.deactivateAllWithDispatch().renderAll();
        this.canvas.setActiveObject(obj);
    };
    AddIncendiosComponent.prototype.setCanvasFill = function () {
        if (!this.props.canvasImage) {
            this.canvas.backgroundColor = this.props.canvasFill;
            this.canvas.renderAll();
        }
    };
    AddIncendiosComponent.prototype.extend = function (obj, id) {
        obj.toObject = (function (toObject) {
            return function () {
                return fabric.util.object.extend(toObject.call(this), {
                    id: id
                });
            };
        })(obj.toObject);
    };
    AddIncendiosComponent.prototype.setCanvasImage = function () {
        var self = this;
        if (this.props.canvasImage) {
            this.canvas.setBackgroundColor({ source: this.props.canvasImage, repeat: 'repeat' }, function () {
                // self.props.canvasFill = '';
                self.canvas.renderAll();
            });
        }
    };
    AddIncendiosComponent.prototype.randomId = function () {
        return Math.floor(Math.random() * 999999) + 1;
    };
    /*------------------------Global actions for element------------------------*/
    AddIncendiosComponent.prototype.getActiveStyle = function (styleName, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return '';
        return (object.getSelectionStyles && object.isEditing)
            ? (object.getSelectionStyles()[styleName] || '')
            : (object[styleName] || '');
    };
    AddIncendiosComponent.prototype.setActiveStyle = function (styleName, value, object) {
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
    AddIncendiosComponent.prototype.getActiveProp = function (name) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return '';
        return object[name] || '';
    };
    AddIncendiosComponent.prototype.setActiveProp = function (name, value) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return;
        object.set(name, value).setCoords();
        this.canvas.renderAll();
    };
    AddIncendiosComponent.prototype.clone = function () {
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
    AddIncendiosComponent.prototype.getId = function () {
        this.props.id = this.canvas.getActiveObject().toObject().id;
    };
    AddIncendiosComponent.prototype.setId = function () {
        var val = this.props.id;
        var complete = this.canvas.getActiveObject().toObject();
        console.log(complete);
        this.canvas.getActiveObject().toObject = function () {
            complete.id = val;
            return complete;
        };
    };
    AddIncendiosComponent.prototype.getOpacity = function () {
        this.props.opacity = this.getActiveStyle('opacity', null) * 100;
    };
    AddIncendiosComponent.prototype.setOpacity = function () {
        this.setActiveStyle('opacity', parseInt(this.props.opacity) / 100, null);
    };
    AddIncendiosComponent.prototype.getFill = function () {
        this.props.fill = this.getActiveStyle('fill', null);
    };
    AddIncendiosComponent.prototype.setFill = function () {
        this.setActiveStyle('fill', this.props.fill, null);
    };
    AddIncendiosComponent.prototype.getLineHeight = function () {
        this.props.lineHeight = this.getActiveStyle('lineHeight', null);
    };
    AddIncendiosComponent.prototype.setLineHeight = function () {
        this.setActiveStyle('lineHeight', parseFloat(this.props.lineHeight), null);
    };
    AddIncendiosComponent.prototype.getCharSpacing = function () {
        this.props.charSpacing = this.getActiveStyle('charSpacing', null);
    };
    AddIncendiosComponent.prototype.setCharSpacing = function () {
        this.setActiveStyle('charSpacing', this.props.charSpacing, null);
    };
    AddIncendiosComponent.prototype.getFontSize = function () {
        this.props.fontSize = this.getActiveStyle('fontSize', null);
    };
    AddIncendiosComponent.prototype.setFontSize = function () {
        this.setActiveStyle('fontSize', parseInt(this.props.fontSize), null);
    };
    AddIncendiosComponent.prototype.getBold = function () {
        this.props.fontWeight = this.getActiveStyle('fontWeight', null);
    };
    AddIncendiosComponent.prototype.setBold = function () {
        this.props.fontWeight = !this.props.fontWeight;
        this.setActiveStyle('fontWeight', this.props.fontWeight ? 'bold' : '', null);
    };
    AddIncendiosComponent.prototype.getFontStyle = function () {
        this.props.fontStyle = this.getActiveStyle('fontStyle', null);
    };
    AddIncendiosComponent.prototype.setFontStyle = function () {
        this.props.fontStyle = !this.props.fontStyle;
        this.setActiveStyle('fontStyle', this.props.fontStyle ? 'italic' : '', null);
    };
    AddIncendiosComponent.prototype.getTextDecoration = function () {
        this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
    };
    AddIncendiosComponent.prototype.setTextDecoration = function (value) {
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
    AddIncendiosComponent.prototype.hasTextDecoration = function (value) {
        return this.props.TextDecoration.includes(value);
    };
    AddIncendiosComponent.prototype.getTextAlign = function () {
        this.props.textAlign = this.getActiveProp('textAlign');
    };
    AddIncendiosComponent.prototype.setTextAlign = function (value) {
        this.props.textAlign = value;
        this.setActiveProp('textAlign', this.props.textAlign);
    };
    AddIncendiosComponent.prototype.getFontFamily = function () {
        this.props.fontFamily = this.getActiveProp('fontFamily');
    };
    AddIncendiosComponent.prototype.setFontFamily = function () {
        this.setActiveProp('fontFamily', this.props.fontFamily);
    };
    /*System*/
    AddIncendiosComponent.prototype.removeSelected = function () {
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
    AddIncendiosComponent.prototype.bringToFront = function () {
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
    AddIncendiosComponent.prototype.sendToBack = function () {
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
    AddIncendiosComponent.prototype.confirmClear = function () {
        if (confirm('Are you sure?')) {
            this.canvas.clear();
        }
    };
    AddIncendiosComponent.prototype.rasterize = function () {
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
    AddIncendiosComponent.prototype.rasterizeSVG = function () {
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
    AddIncendiosComponent.prototype.saveCanvasToJSON = function () {
        var _this = this;
        console.log(this.canvas);
        var json = JSON.stringify(this.canvas);
        var json2 = JSON.parse(json);
        var objects = json2.objects;
        //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        this.espiner = true;
        this._crud.subirImagenIncendios(this.filesToUpload).then(function (n) {
            console.log(n);
            console.log("ggg", n.result.files.archivo[0].name);
            // alert("subio la imagen");
            var ob = {};
            // "containers/incendios-img/upload"
            ob.ruta = '/containers/incendios-img/download/' + n.result.files.archivo[0].name;
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
            _this._crud.addPisoIncendios(JSON.stringify(piso)).subscribe(function () {
                _this.espiner = false;
                _this.router.navigate(['/sistema-incendios']);
            });
        }).catch(function (err) {
            _this.espiner = false;
            alert("Ha ocurrido un error al subir la imagen al servidor");
        });
        //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    };
    AddIncendiosComponent.prototype.loadCanvasFromJSON = function () {
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
    AddIncendiosComponent.prototype.rasterizeJSON = function () {
        this.json = JSON.stringify(this.canvas, null, 2);
    };
    AddIncendiosComponent.prototype.resetPanels = function () {
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
    };
    //----------------------------------fin logica del canvas---------------------
    //----------------------------------Para fondo de imagen-----------------------
    AddIncendiosComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    AddIncendiosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-incendios',
            template: __webpack_require__("./src/app/layout/sistema-contra-incendios/add-incendios/add-incendios.component.html"),
            styles: [__webpack_require__("./src/app/layout/sistema-contra-incendios/add-incendios/add-incendios.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]])
    ], AddIncendiosComponent);
    return AddIncendiosComponent;
}());



/***/ }),

/***/ "./src/app/layout/sistema-contra-incendios/sistema-contra-incedios-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SistemaContraIncendiosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sistema_contra_incendios_component__ = __webpack_require__("./src/app/layout/sistema-contra-incendios/sistema-contra-incendios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_incendios_add_incendios_component__ = __webpack_require__("./src/app/layout/sistema-contra-incendios/add-incendios/add-incendios.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__sistema_contra_incendios_component__["a" /* SistemaContraIncendiosComponent */],
    },
    {
        path: 'add-incendios',
        component: __WEBPACK_IMPORTED_MODULE_3__add_incendios_add_incendios_component__["a" /* AddIncendiosComponent */]
    }
];
var SistemaContraIncendiosRoutingModule = /** @class */ (function () {
    function SistemaContraIncendiosRoutingModule() {
    }
    SistemaContraIncendiosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], SistemaContraIncendiosRoutingModule);
    return SistemaContraIncendiosRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/sistema-contra-incendios/sistema-contra-incendios.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <nav aria-label=\"breadcrumb\"> \r\n        <div class=\"card \">\r\n                <!-- <div class=\"card-header\">Add images</div> -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-10\">\r\n                        <!-- <div class=\"card-body max-height\"> -->\r\n                                <!-- <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/1.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/2.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/3.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/4.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/5.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/6.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/7.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/8.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/9.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/10.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/11.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/12.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/13.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/14.png\">\r\n                                <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/recursos/Sistema-Incendios/15.png\">                               -->\r\n                        \r\n                                <!-- <button data-toggle=\"tooltip\" data-placement=\"bottom\" type=\"button\" \r\n                                    *ngFor=\"let piso of pisos\" (click)=\"cargardesdeJSON(piso)\"\r\n                                    class=\"btn btn-primary\">\r\n                                    <i class=\"fa fa-fw fa-eye\"></i>&nbsp;{{piso.planta.nombre}}\r\n                                </button> -->\r\n                                <!-- <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"\">\r\n                                        <button  *ngFor=\"let piso of pisos\" (click)=\"cargardesdeJSON(piso)\" \r\n                                         type=\"button\" class=\"btn btn-secondary\">{{piso.planta.nombre}}</button>\r\n\r\n                                </div> -->\r\n                        \r\n                                <div class=\"card-body\">\r\n                                    <ul class=\"nav nav-pills card-header-pills\">\r\n                                    <li class=\"nav-item\" *ngFor=\"let piso of pisos;let i=index;\">\r\n                                        <a  (click)=\"cargardesdeJSON(piso,i)\"  \r\n                                        [ngClass]=\"{ active: activeBoton=== i}\"\r\n                                        type=\"button\" class=\"btn btn-secondary\">\r\n                                        {{piso.planta.nombre}}</a>\r\n                                    </li>\r\n                                    </ul>\r\n                                </div>\r\n                                        \r\n                                      \r\n\r\n                        <!-- </div> -->\r\n\r\n                </div>\r\n                <div class=\"col-lg-2\">\r\n                    \r\n\r\n                    <div class=\"card-body max-height\">\r\n                            <div class=\"btn-toolbar mb-3\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                                <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                                    <button type=\"button\"\r\n                                      class=\"btn btn-success\" \r\n                                      [routerLink]=\"['add-incendios']\" \r\n                                      [routerLinkActive]=\"['router-link-active']\">\r\n                                      <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>Nuevo</button>\r\n                                \r\n                                    \r\n                                </div>\r\n                            </div>\r\n                        \r\n                               \r\n                        </div>\r\n\r\n                    \r\n                   \r\n                </div>\r\n\r\n            </div>\r\n            \r\n        </div>\r\n    </nav>\r\n\r\n    <div>\r\n\r\n\r\n    <div class=\"container\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-xl-12 main-title\">\r\n                    <h4>Agregue sus pisos a su Edificio </h4>\r\n                </div> -->\r\n                <!-- <div class=\"col-xl-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-12 text-right\">\r\n                            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to image\" type=\"button\" class=\"btn btn-success\" (click)=\"rasterize();\">\r\n                                <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Exportar como imagen</button>\r\n                            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to SVG\" type=\"button\" class=\"btn btn-primary\" (click)=\"rasterizeSVG();\">\r\n                                <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Export to SVG</button> \r\n                            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Save in localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                                (click)=\"saveCanvasToJSON();\">\r\n                                <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button>\r\n                            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Load from localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                                (click)=\"loadCanvasFromJSON();\">\r\n                                <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Cargar última</button>\r\n                            <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clean Canvas\" type=\"button\" class=\"btn btn-danger\" (click)=\"confirmClear();\">\r\n                                <i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Limpiar</button>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-xl-2\"> -->\r\n                    <!-- <div class=\"card\">\r\n                        <div class=\"card-header\">Size</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.width\" (keyup)=\"changeSize()\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\">\r\n                                            Width\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group mb-3\">\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.height\" (keyup)=\"changeSize()\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\">\r\n                                            Height\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <br/> -->\r\n                    <!-- <div class=\"card\">\r\n                        <div class=\"card-header\">Add images</div>\r\n                        <div class=\"card-body max-height\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/extractor_icon.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/estacion manual_icono.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/electric.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_valvula.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_bomba.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_bomba1.png\">\r\n                            \r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_estroboscopica.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/icono_ventilador.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/led_on 50x50.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/reservacion_icon.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sensor_humo.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sprinkler.png\">\r\n        \r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/sprinkler_icon.png\">\r\n                            <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/elementos/valve_icon.png\">\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <br>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">Add text</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n                                <div class=\"input-group-append\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\" class=\"btn btn-primary\" (click)=\"addText()\">\r\n                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                        </button>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br/> -->\r\n                    \r\n                    <!-- <br/>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">Upload image</div>\r\n                        <div class=\"card-body text-center\">\r\n                            <img id=\"testImage\" *ngIf=\"url\" class=\"images-item-upload\" [src]=\"url\" (click)=\"addImageOnCanvas(url);\">\r\n                            <input type=\"file\" (change)=\"readUrl($event);\">\r\n                            <br/>\r\n                            <br/>\r\n                            <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n                                <div class=\"btn-group\" role=\"group\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeWhite(url);\">\r\n                                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Remove</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <br/>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">Add figure</div>\r\n                        <div class=\"card-body text-center max-height\">\r\n                            <div class=\"btn-group btn-group-vertical\" role=\"group\" aria-label=\"...\">\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('rectangle');\">Rectangle</button>\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('square');\">Square</button>\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('triangle');\">Triangle</button>\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('circle');\">Circle</button>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                <!-- </div> -->\r\n                <div class=\"col-xl-10\">\r\n                    <canvas id=\"canvas\" [style.background-image]=\"fondoDeCanvas\"></canvas>\r\n                </div>\r\n                <div class=\"col-xl-2\">\r\n                    <!-- <div class=\"card\">\r\n                        <div class=\"card-header\">Añadir texto</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n                                <div class=\"input-group-append\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\" class=\"btn btn-primary\" (click)=\"addText()\">\r\n                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                        </button>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">Opciones</div>\r\n                        <div class=\"card-body text-center\">\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete element\" type=\"button\" class=\"btn btn-outline-danger\" [disabled]=\"!selected\"\r\n                                    (click)=\"removeSelected();\">\r\n                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                                <!-- <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to back\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                    (click)=\"sendToBack();\">\r\n                                    <i class=\"fa fa-level-down\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to front\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                    (click)=\"bringToFront();\">\r\n                                    <i class=\"fa fa-level-up\" aria-hidden=\"true\"></i>\r\n                                </button> -->\r\n                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clone\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected || selected.type == 'group'\"\r\n                                    (click)=\"clone();\">\r\n                                    <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                                <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Unselect\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                                    (click)=\"cleanSelect()\">\r\n                                    <i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br/>\r\n                    <!-- <div class=\"card\" *ngIf=\"!selected\">\r\n                        <div class=\"card-header\">Canvas</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"custom-item\" *ngIf=\"!props.canvasImage\">\r\n                                <div class=\"custom-item-title\">Background Color</div>\r\n                                <div class=\"custom-item-body\">\r\n                                    <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.canvasFill\" [style.background]=\"props.canvasFill\"\r\n                                        [value]=\"props.canvasFill\" (colorPickerChange)=\"setCanvasFill()\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"custom-item\">\r\n                                <div class=\"custom-item-title\">Background Image (url)</div>\r\n                                <div class=\"custom-item-body\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"http://example.jpg\" [(ngModel)]=\"props.canvasImage\" (keyup)=\"setCanvasImage()\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <br/> -->\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">Caracteristicas</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"custom-item\" *ngIf=\"selected  && selected.type == 'group'\">Group Selected</div>\r\n                            <div class=\"custom-item\" *ngIf=\"!selected\">No hay item seleccionado</div>\r\n                            <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                                <div class=\"custom-item-title\">ID</div>\r\n                                <div class=\"custom-item-body\">\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"props.id\" (keyup)=\"setId()\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                                <div class=\"custom-item-title\">Opacity</div>\r\n                                <div class=\"custom-item-body\">\r\n                                    <input type=\"range\" [(ngModel)]=\"props.opacity\" (change)=\"setOpacity()\">{{props.opacity}}</div>\r\n                            </div>\r\n                            <div class=\"custom-item\" *ngIf=\"selected && textEditor || selected && figureEditor\">\r\n                                <div class=\"custom-item-title\">Fill</div>\r\n                                <div class=\"custom-item-body\">\r\n                                    <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.fill\" [style.background]=\"props.fill\"\r\n                                        [value]=\"props.fill\" (colorPickerChange)=\"setFill()\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                <div class=\"custom-item-title\">Font family</div>\r\n                                <div class=\"custom-item-body\">\r\n                                    <select [(ngModel)]=\"props.fontFamily\" class=\"form-control\" (change)=\"setFontFamily()\">\r\n                                        <option value=\"arial\">Arial</option>\r\n                                        <option value=\"helvetica\" selected>Helvetica</option>\r\n                                        <option value=\"verdana\">Verdana</option>\r\n                                        <option value=\"courier\">Courier</option>\r\n                                        <option value=\"Roboto\">Roboto</option>\r\n                                        <option value=\"Open Sans\">Open Sans</option>\r\n                                        <option value=\"Zilla Slab\">Zilla Slab</option>\r\n                                        <option value=\"Lato\">Lato</option>\r\n                                        <option value=\"Bellefair\">Bellefair</option>\r\n                                        <option value=\"Fresca\">Fresca</option>\r\n                                        <option value=\"Raleway\">Raleway</option>\r\n                                        <option value=\"Open Sans Condensed\">Open Sans Condensed</option>\r\n                                        <option value=\"Indie Flower\">Indie Flower</option>\r\n                                        <option value=\"Josefin Sans\">Josefin Sans</option>\r\n                                        <option value=\"Inconsolata\">Inconsolata</option>\r\n                                        <option value=\"Pacifico\">Pacifico</option>\r\n                                        <option value=\"Gloria Hallelujah\">Gloria Hallelujah</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                <div class=\"custom-item-title\">Text Align</div>\r\n                                <div class=\"custom-item-body text-center\">\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'left' }\" (click)=\"setTextAlign('left')\">\r\n                                            <i class=\"fa fa-align-left\"></i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'center' }\" (click)=\"setTextAlign('center')\">\r\n                                            <i class=\"fa fa-align-center\"></i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'right' }\" (click)=\"setTextAlign('right')\">\r\n                                            <i class=\"fa fa-align-right\"></i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'justify' }\" (click)=\"setTextAlign('justify')\">\r\n                                            <i class=\"fa fa-align-justify\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                <div class=\"custom-item-title\">Style</div>\r\n                                <div class=\"custom-item-body text-center\">\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontWeight }\" (click)=\"setBold()\">\r\n                                            <i class=\"fa fa-bold\"></i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontStyle }\" (click)=\"setFontStyle()\">\r\n                                            <i class=\"fa fa-italic\"></i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('underline') }\"\r\n                                            (click)=\"setTextDecoration('underline')\">\r\n                                            <i class=\"fa fa-underline\"></i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('overline') }\"\r\n                                            (click)=\"setTextDecoration('overline')\">\r\n                                            <i class=\"fa fa-underline fa-flip-vertical\"></i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('line-through') }\"\r\n                                            (click)=\"setTextDecoration('line-through')\">\r\n                                            <i class=\"fa fa-strikethrough\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                <div class=\"custom-item-title\">Font Size</div>\r\n                                <div class=\"custom-item-body\">\r\n                                    <input type=\"range\" [(ngModel)]=\"props.fontSize\" (change)=\"setFontSize()\" step=\"1\" min=\"1\" max=\"120\">{{props.fontSize}}</div>\r\n                            </div>\r\n                            <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                <div class=\"custom-item-title\">Line Height</div>\r\n                                <div class=\"custom-item-body\">\r\n                                    <input type=\"range\" [(ngModel)]=\"props.lineHeight\" (change)=\"setLineHeight()\" step=\"0.1\" min=\"0\" max=\"10\">{{props.lineHeight}}</div>\r\n                            </div>\r\n                            <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                                <div class=\"custom-item-title\">Char Spacing</div>\r\n                                <div class=\"custom-item-body\">\r\n                                    <input type=\"range\" [(ngModel)]=\"props.charSpacing\" (change)=\"setCharSpacing()\" step=\"10\" min=\"-200\" max=\"800\">{{props.charSpacing}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        \r\n            \r\n            <br>\r\n    </div> \r\n\r\n              \r\n    </div>  \r\n        \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/sistema-contra-incendios/sistema-contra-incendios.component.scss":
/***/ (function(module, exports) {

module.exports = ".container2 {\n  width: 100%;\n  height: 500px;\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n#canvas {\n  border: 2px dashed #cccccc;\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n.main-title {\n  margin-top: 10px; }\n\n.images-item {\n  width: 48%;\n  cursor: pointer;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease;\n  padding: 3px;\n  max-width: 40px; }\n\n.images-item:hover {\n  opacity: 0.7; }\n\n.images-item-upload {\n  width: 80%;\n  cursor: pointer;\n  padding-bottom: 10px;\n  -webkit-transition: .5s ease;\n  -webkit-transition: .5s ease; }\n\n.images-item-upload:hover {\n  opacity: 0.7; }\n\n.custom-item {\n  border-bottom: 2px solid #f3f3f3; }\n\n.custom-item .custom-item-title {\n  color: #666666;\n  font-weight: 600; }\n\n.custom-item .custom-item-body {\n  padding: 10px 0; }\n\n.max-height {\n  overflow: auto;\n  max-height: 300px; }\n"

/***/ }),

/***/ "./src/app/layout/sistema-contra-incendios/sistema-contra-incendios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SistemaContraIncendiosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("./src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fabric__ = __webpack_require__("./node_modules/fabric/dist/fabric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fabric__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SistemaContraIncendiosComponent = /** @class */ (function () {
    function SistemaContraIncendiosComponent(_sanitizer, _crud) {
        this._sanitizer = _sanitizer;
        this._crud = _crud;
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
    SistemaContraIncendiosComponent.prototype.ngOnInit = function () {
        //   this.pisos=[{
        //     "nombre":"piso1",
        //     "imagen":"assets/primero.jpg"
        // },{
        //     "nombre":"piso6",
        //     "imagen":"assets/dos.jpg"
        var _this = this;
        // }]
        this._crud.getPisosIncendios().subscribe(function (data) {
            _this.pisos = data;
            // this.longitud=data.length();
            // this.activeBoton=data.length();
            console.log(data);
        });
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
                            _this.cleanSelect();
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
    SistemaContraIncendiosComponent.prototype.changeSize = function (event) {
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
    };
    //Block "Add text"
    SistemaContraIncendiosComponent.prototype.addText = function () {
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
    SistemaContraIncendiosComponent.prototype.getImgPolaroid = function (event) {
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
    SistemaContraIncendiosComponent.prototype.addImageOnCanvas = function (url) {
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
    SistemaContraIncendiosComponent.prototype.readUrl = function (event) {
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
    SistemaContraIncendiosComponent.prototype.removeWhite = function (url) {
        this.url = '';
    };
    ;
    //Block "Add figure"
    SistemaContraIncendiosComponent.prototype.addFigure = function (figure) {
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
    SistemaContraIncendiosComponent.prototype.cleanSelect = function () {
        this.canvas.deactivateAllWithDispatch().renderAll();
    };
    SistemaContraIncendiosComponent.prototype.selectItemAfterAdded = function (obj) {
        this.canvas.deactivateAllWithDispatch().renderAll();
        this.canvas.setActiveObject(obj);
    };
    SistemaContraIncendiosComponent.prototype.setCanvasFill = function () {
        if (!this.props.canvasImage) {
            this.canvas.backgroundColor = this.props.canvasFill;
            this.canvas.renderAll();
        }
    };
    SistemaContraIncendiosComponent.prototype.extend = function (obj, id) {
        obj.toObject = (function (toObject) {
            return function () {
                return fabric.util.object.extend(toObject.call(this), {
                    id: id
                });
            };
        })(obj.toObject);
    };
    SistemaContraIncendiosComponent.prototype.setCanvasImage = function () {
        var self = this;
        if (this.props.canvasImage) {
            this.canvas.setBackgroundColor({ source: this.props.canvasImage, repeat: 'repeat' }, function () {
                // self.props.canvasFill = '';
                self.canvas.renderAll();
            });
        }
    };
    SistemaContraIncendiosComponent.prototype.randomId = function () {
        return Math.floor(Math.random() * 999999) + 1;
    };
    /*------------------------Global actions for element------------------------*/
    SistemaContraIncendiosComponent.prototype.getActiveStyle = function (styleName, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return '';
        return (object.getSelectionStyles && object.isEditing)
            ? (object.getSelectionStyles()[styleName] || '')
            : (object[styleName] || '');
    };
    SistemaContraIncendiosComponent.prototype.setActiveStyle = function (styleName, value, object) {
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
    SistemaContraIncendiosComponent.prototype.getActiveProp = function (name) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return '';
        return object[name] || '';
    };
    SistemaContraIncendiosComponent.prototype.setActiveProp = function (name, value) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return;
        object.set(name, value).setCoords();
        this.canvas.renderAll();
    };
    SistemaContraIncendiosComponent.prototype.clone = function () {
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
    SistemaContraIncendiosComponent.prototype.getId = function () {
        this.props.id = this.canvas.getActiveObject().id;
        // alert(this.props.id);
    };
    SistemaContraIncendiosComponent.prototype.setId = function () {
        var val = this.props.id;
        var complete = this.canvas.getActiveObject().toObject();
        console.log(complete);
        this.canvas.getActiveObject().toObject = function () {
            complete.id = val;
            return complete;
        };
    };
    SistemaContraIncendiosComponent.prototype.getOpacity = function () {
        this.props.opacity = this.getActiveStyle('opacity', null) * 100;
    };
    SistemaContraIncendiosComponent.prototype.setOpacity = function () {
        this.setActiveStyle('opacity', parseInt(this.props.opacity) / 100, null);
    };
    SistemaContraIncendiosComponent.prototype.getFill = function () {
        this.props.fill = this.getActiveStyle('fill', null);
    };
    SistemaContraIncendiosComponent.prototype.setFill = function () {
        this.setActiveStyle('fill', this.props.fill, null);
    };
    SistemaContraIncendiosComponent.prototype.getLineHeight = function () {
        this.props.lineHeight = this.getActiveStyle('lineHeight', null);
    };
    SistemaContraIncendiosComponent.prototype.setLineHeight = function () {
        this.setActiveStyle('lineHeight', parseFloat(this.props.lineHeight), null);
    };
    SistemaContraIncendiosComponent.prototype.getCharSpacing = function () {
        this.props.charSpacing = this.getActiveStyle('charSpacing', null);
    };
    SistemaContraIncendiosComponent.prototype.setCharSpacing = function () {
        this.setActiveStyle('charSpacing', this.props.charSpacing, null);
    };
    SistemaContraIncendiosComponent.prototype.getFontSize = function () {
        this.props.fontSize = this.getActiveStyle('fontSize', null);
    };
    SistemaContraIncendiosComponent.prototype.setFontSize = function () {
        this.setActiveStyle('fontSize', parseInt(this.props.fontSize), null);
    };
    SistemaContraIncendiosComponent.prototype.getBold = function () {
        this.props.fontWeight = this.getActiveStyle('fontWeight', null);
    };
    SistemaContraIncendiosComponent.prototype.setBold = function () {
        this.props.fontWeight = !this.props.fontWeight;
        this.setActiveStyle('fontWeight', this.props.fontWeight ? 'bold' : '', null);
    };
    SistemaContraIncendiosComponent.prototype.getFontStyle = function () {
        this.props.fontStyle = this.getActiveStyle('fontStyle', null);
    };
    SistemaContraIncendiosComponent.prototype.setFontStyle = function () {
        this.props.fontStyle = !this.props.fontStyle;
        this.setActiveStyle('fontStyle', this.props.fontStyle ? 'italic' : '', null);
    };
    SistemaContraIncendiosComponent.prototype.getTextDecoration = function () {
        this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
    };
    SistemaContraIncendiosComponent.prototype.setTextDecoration = function (value) {
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
    SistemaContraIncendiosComponent.prototype.hasTextDecoration = function (value) {
        return this.props.TextDecoration.includes(value);
    };
    SistemaContraIncendiosComponent.prototype.getTextAlign = function () {
        this.props.textAlign = this.getActiveProp('textAlign');
    };
    SistemaContraIncendiosComponent.prototype.setTextAlign = function (value) {
        this.props.textAlign = value;
        this.setActiveProp('textAlign', this.props.textAlign);
    };
    SistemaContraIncendiosComponent.prototype.getFontFamily = function () {
        this.props.fontFamily = this.getActiveProp('fontFamily');
    };
    SistemaContraIncendiosComponent.prototype.setFontFamily = function () {
        this.setActiveProp('fontFamily', this.props.fontFamily);
    };
    /*System*/
    SistemaContraIncendiosComponent.prototype.removeSelected = function () {
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
    SistemaContraIncendiosComponent.prototype.bringToFront = function () {
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
    SistemaContraIncendiosComponent.prototype.sendToBack = function () {
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
    SistemaContraIncendiosComponent.prototype.confirmClear = function () {
        if (confirm('Are you sure?')) {
            this.canvas.clear();
        }
    };
    SistemaContraIncendiosComponent.prototype.rasterize = function () {
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
    SistemaContraIncendiosComponent.prototype.rasterizeSVG = function () {
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
    SistemaContraIncendiosComponent.prototype.saveCanvasToJSON = function () {
        var json = JSON.stringify(this.canvas);
        localStorage.setItem('Kanvas', json);
        console.log('json');
        console.log(json);
    };
    SistemaContraIncendiosComponent.prototype.loadCanvasFromJSON = function () {
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
    SistemaContraIncendiosComponent.prototype.rasterizeJSON = function () {
        this.json = JSON.stringify(this.canvas, null, 2);
    };
    SistemaContraIncendiosComponent.prototype.resetPanels = function () {
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
    };
    SistemaContraIncendiosComponent.prototype.cargardesdeJSON = function (json, i) {
        var _this = this;
        this.activeBoton = i;
        this.canvas.loadFromJSON(json, function () {
            _this.fondoDeCanvas = _this.sanitizeImage('http://localhost:3000/api' + json.planta.img);
            _this.canvas.renderAll();
        });
    };
    //dar
    SistemaContraIncendiosComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    SistemaContraIncendiosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sistema-contra-incendios',
            template: __webpack_require__("./src/app/layout/sistema-contra-incendios/sistema-contra-incendios.component.html"),
            styles: [__webpack_require__("./src/app/layout/sistema-contra-incendios/sistema-contra-incendios.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]])
    ], SistemaContraIncendiosComponent);
    return SistemaContraIncendiosComponent;
}());



/***/ }),

/***/ "./src/app/layout/sistema-contra-incendios/sistema-contra-incendios.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SistemaContraIncendiosModule", function() { return SistemaContraIncendiosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__ = __webpack_require__("./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sistema_contra_incedios_routing_module__ = __webpack_require__("./src/app/layout/sistema-contra-incendios/sistema-contra-incedios-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sistema_contra_incendios_component__ = __webpack_require__("./src/app/layout/sistema-contra-incendios/sistema-contra-incendios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_incendios_add_incendios_component__ = __webpack_require__("./src/app/layout/sistema-contra-incendios/add-incendios/add-incendios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_crud_service__ = __webpack_require__("./src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SistemaContraIncendiosModule = /** @class */ (function () {
    function SistemaContraIncendiosModule() {
    }
    SistemaContraIncendiosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__sistema_contra_incedios_routing_module__["a" /* SistemaContraIncendiosRoutingModule */], __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared__["d" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__sistema_contra_incendios_component__["a" /* SistemaContraIncendiosComponent */], __WEBPACK_IMPORTED_MODULE_8__add_incendios_add_incendios_component__["a" /* AddIncendiosComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__shared_services_crud_service__["a" /* CrudService */]]
        })
    ], SistemaContraIncendiosModule);
    return SistemaContraIncendiosModule;
}());



/***/ })

});
//# sourceMappingURL=sistema-contra-incendios.module.chunk.js.map
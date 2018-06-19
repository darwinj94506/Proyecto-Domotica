import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import{CrudService} from './../../shared/services/crud.service';
import 'fabric';
import{DomSanitizer} from '@angular/platform-browser';
declare const fabric: any;
import{GLOBAL} from './../../shared/services/global';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-grid',
    templateUrl: './sistema-electrico.component.html',
    styleUrls: ['./sistema-electrico.component.scss'],
    animations: [routerTransition()]
})
export class SistemaElectricoComponent implements OnInit {
  closeResult: string;

  @ViewChild('fondoCanvas') fondoCanvas: ElementRef;
  @ViewChild('content') content: ElementRef;
  @ViewChild('contentCisterna') contentCisterna: ElementRef;
  @ViewChild('contentTermometro') contentTermometro: ElementRef;
  @ViewChild('contentNetwork') contentNetwork: ElementRef;
  @ViewChild('#errorAutorizacion') errorAutorizacion: ElementRef;

  public color: string = 'rgb(0, 255, 255)';

    public URLGLOBAL;
    public URLIMAGEN;
    constructor(private _sanitizer:DomSanitizer,config: NgbProgressbarConfig,
      private _crud:CrudService,private modalService: NgbModal){
        //configuracion de progress bar
        config.max = 100;
        config.striped = true;
        config.animated = true;
        config.type = 'primary';
        config.height = '20px';
        //Configuracion de de url
      this.URLGLOBAL=GLOBAL.url;
      this.URLIMAGEN=GLOBAL.urlImagen;
    }

    //xxxxxxxxxxxxxxxxxxx
    open(content) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    //xxxxxxxxxxxxxxxxxxx
      //----------------------------------logica del canvas-------------------------
      private canvas: any;
      private props: any = {
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
    
      private textString: string;
      private url: string = '';
      private size: any = {
        width: 900,
        height: 700
      };
    
      private json: any;
      private globalEditor: boolean = false;
      private textEditor: boolean = false;
      private imageEditor: boolean = false;
      private figureEditor: boolean = false;
      private selected: any;
      public pisos:any;
      ngOnInit() {
      
      this._crud.getPisosElectricos().subscribe((data)=>{
                      this.pisos=data;
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
            'object:moving': (e) => {
              let selectedObject = e.target;
              // this.selected = selectedObject;
              // selectedObject.lockMovementX = true;
              // selectedObject.lockMovementY = true;

             },
            'object:modified': (e) => { },
            'object:selected': (e) => {
      
              let selectedObject = e.target;
              this.selected = selectedObject
              // console.log(e);
              console.log(selectedObject);
              selectedObject.hasRotatingPoint = false;
              selectedObject.transparentCorners = true;
              // selectedObject.cornerColor = 'rgba(255, 87, 34, 0.7)';
      
              this.resetPanels();
      
              if (selectedObject.type !== 'group' && selectedObject) {
      
                this.getId();
                this.getOpacity();
      
                switch (selectedObject.type) {
                  case 'rect':
                  case 'circle':
                  case 'triangle':
                    this.figureEditor = true;
                    this.getFill();
                    break;
                  case 'i-text':
                    this.textEditor = true;
                    this.getLineHeight();
                    this.getCharSpacing();
                    this.getBold();
                    this.getFontStyle();
                    this.getFill();
                    this.getTextDecoration();
                    this.getTextAlign();
                    this.getFontFamily();
                    break;
                  case 'image':
                    selectedObject.lockMovementX = true;
                    selectedObject.lockMovementY = true;
                    // this.cleanSelect();
                    console.log(this.canvas);
                    let id=selectedObject.id;
                    let self=this;
                    this.json2.objects.forEach(element => {
                      if(element.id==id){
                        
                       
                        switch(element.src){
                          case this.URLIMAGEN+'assets/recursos/Sistema-Electrico/1.png':
                          element.src=this.URLIMAGEN+'assets/recursos/Sistema-Electrico/1.1.png';
                          break;
                          case this.URLIMAGEN+'assets/recursos/Sistema-Electrico/1.1.png':
                    
                          element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/1.png";
                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/2.png":
                          element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/2.1.png";

                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/2.1.png":
                          element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/2.png";

                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/3.png":
                          element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/3.1.png";

                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/3.1.png":
                          element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/3.png";

                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/4.png":
                          // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/4.1.png";
                          this.open(this.contentNetwork);


                          break;
                         
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/5.png":
                          element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/5.1.png";

                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/5.1.png":
                          element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/5.png";

                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/6.png":
                          // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/6.1.png";
                          this.open(this.contentTermometro);

                          break;
                        
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/7.png":
                          element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/7.1.png";

                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/7.1.png":
                          element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/7.png";

                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/8.png":
                          // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/8.1.png";
                          this.open(this.contentCisterna);

                          break;
                         
                          // case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.png":
                          // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.1.png";

                          // break;
                          // case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.1png":
                          // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.png";

                          // break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/11.png":
                          // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.png";
                          this.open(this.content);

                          break;
                          case this.URLIMAGEN+"assets/recursos/Sistema-Electrico/12.png":
                          // element.src=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/9.png";
                          this.open(this.content);

                          break;

                        }
                        if(element.scr!=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/8.png" ||
                            element.src!=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/4.png" ||
                           element.src!=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/6.png" ||
                          element.src!=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/11.png"||
                          element.src!=this.URLIMAGEN+"assets/recursos/Sistema-Electrico/12.png"){
                          this.canvas.loadFromJSON(this.json2, () => {
                            this.fondoDeCanvas=this.sanitizeImage(this.URLGLOBAL+this.json2.planta.img);
                            this.canvas.renderAll();
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
            'selection:cleared': (e) => {
              this.selected = null;
              this.resetPanels();
            }
          });
      
          this.canvas.setWidth(this.size.width);
          this.canvas.setHeight(this.size.height);
  
      
          // get references to the html canvas element & its context
          // this.canvas.on('mouse:down', (e) => {
          // let canvasElement: any = document.getElementById('canvas');
          // console.log(canvasElement)
          // });
      
        }
         /*------------------------Block elements------------------------*/
  
    //Block "Size"
  
    changeSize(event: any) {
      this.canvas.setWidth(this.size.width);
      this.canvas.setHeight(this.size.height);
    }
  
    //Block "Add text"
  
    addText() {
      let textString = this.textString;
      let text = new fabric.IText(textString, {
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
    }
  
    //Block "Add images"
  
    getImgPolaroid(event: any) {
      let el = event.target;
      fabric.Image.fromURL(el.src, (image) => {
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
        this.extend(image, this.randomId());
        this.canvas.add(image);
        this.selectItemAfterAdded(image);
      });
    }
  
    //Block "Upload Image"
  
    addImageOnCanvas(url) {
      if (url) {
        fabric.Image.fromURL(url, (image) => {
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
          this.extend(image, this.randomId());
          this.canvas.add(image);
          this.selectItemAfterAdded(image);
        });
      }
    }
  
    readUrl(event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event) => {
          this.url = event.target['result'];
          console.log(this.url);
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  
    removeWhite(url) {
      this.url = '';
    };
  
    //Block "Add figure"
  
    addFigure(figure) {
      let add: any;
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
    }
  
    /*Canvas*/
  
    cleanSelect() {
      this.canvas.deactivateAllWithDispatch().renderAll();
    }
  
    selectItemAfterAdded(obj) {
      this.canvas.deactivateAllWithDispatch().renderAll();
      this.canvas.setActiveObject(obj);
    }
  
    setCanvasFill() {
      if (!this.props.canvasImage) {
        this.canvas.backgroundColor = this.props.canvasFill;
        this.canvas.renderAll();
      }
    }
  
    extend(obj, id) {
      obj.toObject = (function (toObject) {
        return function () {
          return fabric.util.object.extend(toObject.call(this), {
            id: id
          });
        };
      })(obj.toObject);
    }
  
    setCanvasImage() {
      let self = this;
      // this.canvas.Image.fromUrl

      if (this.props.canvasImage) {
        this.canvas.setBackgroundColor({ source: this.props.canvasImage, repeat: 'repeat' }, function () {
          // self.props.canvasFill = '';
          self.canvas.renderAll();
          //
          //
        });
      }
    }
  
    randomId() {
      return Math.floor(Math.random() * 999999) + 1;
    }
  
    /*------------------------Global actions for element------------------------*/
  
    getActiveStyle(styleName, object) {
      object = object || this.canvas.getActiveObject();
      if (!object) return '';
  
      return (object.getSelectionStyles && object.isEditing)
        ? (object.getSelectionStyles()[styleName] || '')
        : (object[styleName] || '');
    }
  
  
    setActiveStyle(styleName, value, object) {
      object = object || this.canvas.getActiveObject();
      if (!object) return;
  
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
    }
  
  
    getActiveProp(name) {
      var object = this.canvas.getActiveObject();
      if (!object) return '';
  
      return object[name] || '';
    }
  
    setActiveProp(name, value) {
      var object = this.canvas.getActiveObject();
      if (!object) return;
      object.set(name, value).setCoords();
      this.canvas.renderAll();
    }
  
    clone() {
      let activeObject = this.canvas.getActiveObject(),
        activeGroup = this.canvas.getActiveGroup();
  
      if (activeObject) {
        let clone;
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
    }
  
    getId() {
      console.log(this.canvas.getActiveObject().id);
      // this.props.id = this.canvas.getActiveObject().toObject().id; antes
      this.props.id = this.canvas.getActiveObject().id;

    }
    //darwin{}
    setImage(){
      
      let val = this.props.id;
      let complete = this.canvas.getActiveObject().toObject();
      console.log(complete);
      this.canvas.getActiveObject().toObject = () => {
        complete.id = val;
        return complete;
      };
    
  
    }
  
    setId() {
      let val = this.props.id;
      let complete = this.canvas.getActiveObject().toObject();
      console.log(complete);
      this.canvas.getActiveObject().toObject = () => {
        complete.id = val;
        return complete;
      };
    }
  
    getOpacity() {
      this.props.opacity = this.getActiveStyle('opacity', null) * 100;
    }
  
    setOpacity() {
      this.setActiveStyle('opacity', parseInt(this.props.opacity) / 100, null);
    }
  
    getFill() {
      this.props.fill = this.getActiveStyle('fill', null);
    }
  
    setFill() {
      this.setActiveStyle('fill', this.props.fill, null);
    }
  
    getLineHeight() {
      this.props.lineHeight = this.getActiveStyle('lineHeight', null);
    }
  
    setLineHeight() {
      this.setActiveStyle('lineHeight', parseFloat(this.props.lineHeight), null);
    }
  
    getCharSpacing() {
      this.props.charSpacing = this.getActiveStyle('charSpacing', null);
    }
  
    setCharSpacing() {
      this.setActiveStyle('charSpacing', this.props.charSpacing, null);
    }
  
    getFontSize() {
      this.props.fontSize = this.getActiveStyle('fontSize', null);
    }
  
    setFontSize() {
      this.setActiveStyle('fontSize', parseInt(this.props.fontSize), null);
    }
  
    getBold() {
      this.props.fontWeight = this.getActiveStyle('fontWeight', null);
    }
  
    setBold() {
      this.props.fontWeight = !this.props.fontWeight;
      this.setActiveStyle('fontWeight', this.props.fontWeight ? 'bold' : '', null);
    }
  
    getFontStyle() {
      this.props.fontStyle = this.getActiveStyle('fontStyle', null);
    }
  
    setFontStyle() {
      this.props.fontStyle = !this.props.fontStyle;
      this.setActiveStyle('fontStyle', this.props.fontStyle ? 'italic' : '', null);
    }
  
  
    getTextDecoration() {
      this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
    }
  
    setTextDecoration(value) {
      let iclass = this.props.TextDecoration;
      if (iclass.includes(value)) {
        iclass = iclass.replace(RegExp(value, "g"), "");
      } else {
        iclass += ` ${value}`
      }
      this.props.TextDecoration = iclass;
      this.setActiveStyle('textDecoration', this.props.TextDecoration, null);
    }
  
    hasTextDecoration(value) {
      return this.props.TextDecoration.includes(value);
    }
  
  
    getTextAlign() {
      this.props.textAlign = this.getActiveProp('textAlign');
    }
  
    setTextAlign(value) {
      this.props.textAlign = value;
      this.setActiveProp('textAlign', this.props.textAlign);
    }
  
    getFontFamily() {
      this.props.fontFamily = this.getActiveProp('fontFamily');
    }
  
    setFontFamily() {
      this.setActiveProp('fontFamily', this.props.fontFamily);
    }
  
    /*System*/
  
  
    removeSelected() {
      let activeObject = this.canvas.getActiveObject(),
        activeGroup = this.canvas.getActiveGroup();
  
      if (activeObject) {
        this.canvas.remove(activeObject);
        // this.textString = '';
      }
      else if (activeGroup) {
        let objectsInGroup = activeGroup.getObjects();
        this.canvas.discardActiveGroup();
        let self = this;
        objectsInGroup.forEach(function (object) {
          self.canvas.remove(object);
        });
      }
    }
  
    bringToFront() {
      let activeObject = this.canvas.getActiveObject(),
        activeGroup = this.canvas.getActiveGroup();
  
      if (activeObject) {
        activeObject.bringToFront();
        // activeObject.opacity = 1;
      }
      else if (activeGroup) {
        let objectsInGroup = activeGroup.getObjects();
        this.canvas.discardActiveGroup();
        objectsInGroup.forEach((object) => {
          object.bringToFront();
        });
      }
    }
  
    sendToBack() {
      let activeObject = this.canvas.getActiveObject(),
        activeGroup = this.canvas.getActiveGroup();
  
      if (activeObject) {
        activeObject.sendToBack();
        // activeObject.opacity = 1;
      }
      else if (activeGroup) {
        let objectsInGroup = activeGroup.getObjects();
        this.canvas.discardActiveGroup();
        objectsInGroup.forEach((object) => {
          object.sendToBack();
        });
      }
    }
  
    confirmClear() {
      if (confirm('Are you sure?')) {
        this.canvas.clear();
      }
    }
  
    rasterize() {
      if (!fabric.Canvas.supports('toDataURL')) {
        alert('This browser doesn\'t provide means to serialize canvas to an image');
      }
      else {
        console.log(this.canvas.toDataURL('png'))
        //window.open(this.canvas.toDataURL('png'));
        var image = new Image();
        image.src = this.canvas.toDataURL('png')
        var w = window.open("");
        w.document.write(image.outerHTML);
      }
    }
  
    rasterizeSVG() {
      console.log(this.canvas.toSVG())
      // window.open(
      //   'data:image/svg+xml;utf8,' +
      //   encodeURIComponent(this.canvas.toSVG()));
      // console.log(this.canvas.toSVG())
      // var image = new Image();
      // image.src = this.canvas.toSVG()
      var w = window.open("");
      w.document.write(this.canvas.toSVG());
    };
  
  
    saveCanvasToJSON() {
      let json = JSON.stringify(this.canvas);
      localStorage.setItem('Kanvas', json);
      console.log('json');
      console.log(json);
  
    }
  
  
    loadCanvasFromJSON() {
      let CANVAS = localStorage.getItem('Kanvas');
      console.log('CANVAS');
      console.log(CANVAS);
  
      // and load everything from the same json
      this.canvas.loadFromJSON(CANVAS, () => {
        console.log('CANVAS untar');
        console.log(CANVAS);
  
        // making sure to render canvas at the end
        this.canvas.renderAll();
  
        // and checking if object's "name" is preserved
        console.log('this.canvas.item(0).name');
        console.log(this.canvas);
      });
  
    };
  
   
  
    rasterizeJSON() {
      this.json = JSON.stringify(this.canvas, null, 2);
    }
  
    resetPanels() {
      this.textEditor = false;
      this.imageEditor = false;
      this.figureEditor = false;
    }
  
  
     // dar

     public fondoDeCanvas:any;
     json2:any;
     cargardesdeJSON(json) {
       this.json2=json;
     
      this.canvas.loadFromJSON(json, () => {
        this.fondoDeCanvas=this.sanitizeImage(this.URLGLOBAL+json.planta.img);
        // making sure to render canvas at the end
        this.canvas.renderAll();
      });
    }
    
    //dar

      //----------------------------------Para fondo de imagen-----------------------
      public sanitizeImage(image:string){
          return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  
      }


    
}

import { Alarma } from './../../../shared/models/alarma';
import { Component, OnInit,ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import{AlarmasService} from './../../../shared/services/alarmas.service';
import * as _ from 'lodash';
import * as moment from 'moment';
@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.scss'],
  animations: [routerTransition()]
})
export class AlarmasComponent implements OnInit {
  @ViewChild('alarmasTable') table: any;

  editing = {};  
  selected = [];  
  public rows:any;
  public columns:any;
  loadingIndicator: boolean = true;

  reorderable: boolean = true;

  swapColumns: boolean = false;
  temp = []; 

  constructor(public _alarmaServ:AlarmasService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos()
  {
    this.rows=[];
    this._alarmaServ.get()
    .subscribe((n:any)=>
    {
      this.tabla(n);      
      console.log("registro:",n);      
    },
      (err:any)=>{
        console.log("err:",err);
      });
  }

  tabla(n)
  {

     var alarma=[];
     console.log("u",n.length);
     if(n.length!=0)
     {
      _.forEach(n,(o:any,i:any)=>{             
        var oAux={};
        oAux["x"]=i;
        oAux["id"]=o.id;
        oAux["estado"]=JSON.parse(o.estado.toLowerCase());
        oAux["fecha"]=o.fecha;
        oAux["hora"]=o.hora;
        oAux["tipo"]=o.tipo;
        oAux["sector"]=o.sector;
        oAux["responsableId"]=o.usuario.id; 
        oAux["responsable"]=o.usuario.nombre;
        oAux["correo"]=o.usuario.email;
        alarma.push(oAux);
      });     
      this.rows=alarma;       
     }
     this.columns = [
      {nama:'X'},
      {name:'Id'},
      {name:'ResponsableId'},
      {name:'Estado'}, 
     {name:'Fecha'}  ,  
     { name: 'Hora' },
     { name: 'Tipo' },
     { name: 'Sector' },
     { name: 'Responsable'},
     { name: 'Correo'}
      ];
  }
  crearAlarma()
  {

    var oAux={};
    if(this.rows==undefined)
    {
      oAux['x']=0;
    }else{
      oAux['x']=this.rows.length;
    }       
       oAux['responsableId']=JSON.parse(localStorage.getItem('identity')).userId;
       oAux["id"]=null;
       oAux["estado"]=false;       
       oAux["fecha"]=moment().format('YYYY MM DD');
       oAux["hora"]=moment().format('LTS');
       oAux["tipo"]="Sin dato";
       oAux["sector"]="Sin dato";
       oAux["responsable"]=JSON.parse(localStorage.getItem('user'));
       oAux["correo"]=JSON.parse(localStorage.getItem('user'));       
       this.rows = [oAux,...this.rows];          
  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);  
  }
//   addRowToSelection(row: any) {
    
//     this.selected.push(row); // Example of how you might make a change that won't be detected with OnPush    
//     this.selected = [...this.selected]; // However you updated the rows, use this to make a copy
// }
  onActivate(event) {
    console.log('Activate Event', event);
  }
  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    if ( event.target.value == null || event.target.value==undefined) {
      // cadena está vacía
      // console.log("Hola");
      event.target.value="Sin dato";
  }
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
    
  }

  checkEditing(e,rowChk,rowIndex)
  {
    if(this.rows[rowIndex].estado!=null)
    {      
      this.rows[rowIndex].estado=!this.rows[rowIndex].estado;
      _.forEach(this.selected,(n)=>{
        _.forEach(this.rows, (r:any)=>{            
            if(r['x']===n['x'])
            {               
                r['estado']=this.rows[rowIndex].estado;                                                          
            }
        });        
    });  
    }
  }
  eliminarRow(rowIndex)
  {
    console.log("Eliminando..:",rowIndex);
    if(this.rows[rowIndex].id==null)
    {
      this.rows.splice(rowIndex,1);  
      this.rows = [...this.rows];
    }else{
        this._alarmaServ.delete(this.rows[rowIndex].id)
        .subscribe((n:any)=>
      {            
        this.rows.splice(rowIndex,1);  
        this.rows = [...this.rows];
        console.log("eliminado..:",n);      
        alert("Eliminado");
      },
        (err:any)=>{
          console.log("err:",err);
          alert("Error");
        });
    }     
  }
  actualizarRow(rowIndex)
  {
    console.log("Actualizando..:",rowIndex);  
    if(this.rows[rowIndex].id!=null)
    {
      let alarma:Alarma=new Alarma();
      alarma.id=this.rows[rowIndex].id;
      alarma.fecha=this.rows[rowIndex].fecha;
      alarma.hora=this.rows[rowIndex].hora;
      alarma.tipo=this.rows[rowIndex].tipo;
      alarma.sector=this.rows[rowIndex].sector;
      alarma.estado=this.rows[rowIndex].estado;
      alarma.usuarioId=this.rows[rowIndex].responsableId;
      this._alarmaServ.put(alarma,this.rows[rowIndex].id)
      .subscribe((n:any)=>
      {            
        console.log("actualizado:",n);      
        alert("Actualizado");
        this.cargarDatos();
        
      },
        (err:any)=>{
          console.log("err:",err);
          alert("Error");
        });  
    }else{
      // delete this.rows[rowIndex]["id"];
      let alarma:Alarma=new Alarma();      
      alarma.fecha=this.rows[rowIndex].fecha;
      alarma.hora=this.rows[rowIndex].hora;
      alarma.tipo=this.rows[rowIndex].tipo;
      alarma.sector=this.rows[rowIndex].sector;
      alarma.estado=this.rows[rowIndex].estado;
      alarma.usuarioId=this.rows[rowIndex].responsableId;
      console.log("res",alarma);
      this._alarmaServ.post(alarma)
      .subscribe((n:any)=>
      {
             
        console.log("Guardado nuevo:",n);   

        alert("Guardado nuevo");
        this.cargarDatos();
      },
        (err:any)=>{
          console.log("err:",err);
          alert("Error");
        }); ;        
    }
  }

}

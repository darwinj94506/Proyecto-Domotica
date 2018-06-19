import { Component, OnInit ,ViewChild,OnDestroy } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import{AlarmasService} from './../../../shared/services/alarmas.service';
import { Alarma } from './../../../shared/models/alarma';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-reporte-alarmas',
  templateUrl: './reporte-alarmas.component.html',
  styleUrls: ['./reporte-alarmas.component.scss'],
  animations: [routerTransition()]
})
export class ReporteAlarmasComponent implements OnInit, OnDestroy{
  @ViewChild('alarmasTable') table: any;
  editing = {};  
  selected = []; 
  filtroFechaInicial:any; 
  filtroFechaFinal:any; 
  public rows:any;
  public columns:any;
  loadingIndicator: boolean = true;

  reorderable: boolean = true;

  swapColumns: boolean = false;
  temp = []; 


  //SOCKET IO
  messages = [];
  connection;
  message;
  sendMessage(){
    this._alarmaServ.sendMessage(this.message);
    this.message = '';
  }

  // fin socket
  constructor(public _alarmaServ:AlarmasService) { }
  ngOnInit() {
    this.cargarDatos();
  // SOCKET
    this.connection = this._alarmaServ.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log("mensaje llego",message);
    })
  }

  ngOnDestroy() {
// SOCKET
    this.connection.unsubscribe();
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
      this.temp = [...alarma];
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
  updateFilter(event) {
    if(this.filtroFechaFinal==null || this.filtroFechaInicial==null || (this.filtroFechaFinal < this.filtroFechaInicial))
    {
      this.filtroFechaInicial=moment().format('YYYY-MM-DD');
      this.filtroFechaFinal=moment().format('YYYY-MM-DD');
    }
    const val1 = this.filtroFechaInicial.toLowerCase();    
    const val2=this.filtroFechaFinal.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function(d) {
      return ((d.fecha.toLowerCase().indexOf(val1) !== -1 || !val1) || (d.fecha.toLowerCase()>=val1 && d.fecha.toLowerCase()<=val2));
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}

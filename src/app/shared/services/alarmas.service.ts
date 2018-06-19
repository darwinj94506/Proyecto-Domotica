import { Alarma } from './../models/alarma';
import { Injectable } from '@angular/core';
import{HttpModule,Http,Response,Headers,RequestOptions} from '@angular/http';
import{GLOBAL} from './global';
import 'rxjs/add/operator/map';
@Injectable()
export class AlarmasService {
  public identity;
  public token;
  public url:string;
  // this.id=id;
  // this.fecha=fecha;
  // this.hora=hora;
  // this.tipo=tipo;
  // this.sector=sector;
  // this.estado=estado;
  // this.responsableId=responsableId;
  constructor(private _http:Http) { 
    this.url=GLOBAL.url;
  }
  getIdentity(){
    let identity=JSON.parse(localStorage.getItem('identity'));
    if(identity!="undefined"){
      this.identity=identity;
    }else{
      this.identity=null;
    }
    return this.identity;
  }
 
  getToken(){
    let token=this.getIdentity();
    // alert(token)
    if(token!="undefined"){
      this.token=token.id;
    }else{
      this.token=null;
    }
    return this.token
  }

  get()
  {      
    let headers = new Headers({
      "Authorization":this.getToken(),
        "Content-Type": "application/json",
        "Accept":"application/json"
    })
    let options = new RequestOptions({headers:headers});
    return this._http.get(this.url+"alarmas_generadas?filter[include]=usuario",options)
    .map(res => res.json());
  }

  post(objAlarma)
  {  
    var data={};

    data["fecha"]=objAlarma.fecha;
    data["hora"]=objAlarma.hora;
    data["tipo"]=objAlarma.tipo;
    data["sector"]=objAlarma.sector;
    data["estado"]=JSON.stringify(objAlarma.estado);
    data["usuarioId"]=objAlarma.usuarioId;  
    let params=JSON.stringify(data);  
    let headers = new Headers({
      "Authorization":this.getToken(),
        "Content-Type": "application/json",
        "Accept":"application/json"
    })
    let options = new RequestOptions({headers:headers});
    return this._http.post(this.url+"alarmas_generadas",params,options)
    .map(res => res.json());
  }

  put(objAlarma,id)
  { 
   var data={};
    data["fecha"]=objAlarma.fecha;
    data["hora"]=objAlarma.hora;
    data["tipo"]=objAlarma.tipo;
    data["sector"]=objAlarma.sector;
    data["estado"]=JSON.stringify(objAlarma.estado);
    data["usuarioId"]=objAlarma.usuarioId;
    let params=JSON.stringify(data);  
    let headers = new Headers({
      "Authorization":this.getToken(),
        "Content-Type": "application/json",
        "Accept":"application/json"
    })
    let options = new RequestOptions({headers:headers});
    return this._http.put(this.url+"alarmas_generadas/"+id,params,options)
    .map(res => res.json());
  }
  delete(id)
  {      
    let headers = new Headers({
      "Authorization":this.getToken(),
        "Content-Type": "application/json",
        "Accept":"application/json"
    })
    let options = new RequestOptions({headers:headers});
    return this._http.delete(this.url+"alarmas_generadas/"+id,options)
    .map(res => res.json());
  }


}

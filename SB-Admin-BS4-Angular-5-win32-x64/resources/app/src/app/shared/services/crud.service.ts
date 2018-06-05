import{Injectable} from '@angular/core';
import{HttpModule,Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import{Observable} from 'rxjs/Observable';
import{GLOBAL} from './global';

@Injectable()
export class CrudService{
  public url:string;
  public identity;
  public token;

  constructor(private _http:Http){
    this.url=GLOBAL.url;
    }


  register(solicitud) {
    let params=JSON.stringify(solicitud);
    let headers=new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'User/User_create',params, {headers:headers})
                      .map( res => res.json());
    }


    signup(user_to_login){
      
      let credentials=JSON.stringify(user_to_login);
      let headers = new Headers({'Content-Type':'application/json'});
      return this._http.post(this.url+'Users/login',credentials,{headers:headers})
                      .map(res=>res.json());
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

    updateUser(user_to_update){
      console.log("este toquen:"+this.getToken());
      let params=JSON.stringify(user_to_update);
      let headers= new Headers({
        'Content-Type':'application/json',
        'Authorization':this.getToken()
      });
      return this._http.put(this.url+'update-user/'+user_to_update._id, params, {headers:headers})
                                                            .map(res=>res.json());
    }

     getKeepers(){
      return this._http.get(this.url+'keepers').map(res=>res.json());
    }

    //
    postFile(fileToUpload: File): Observable<boolean> {
      const endpoint = 'your-destination-url';
      const formData: FormData = new FormData();
      let headers= new Headers({
        'Content-Type':'application/json'
      });
      formData.append('fileKey', fileToUpload, fileToUpload.name);
      return this._http
        .post(endpoint, formData, { headers: headers })
        .map(() => { return true; })
  }

    //

   
   


    getCategorias(){
        return this._http.get(this.url+'categoria').map(res=>res.json());
    }
    getCategoria(id){
      return this._http.get(this.url+'categoria/'+id).map(res=>res.json());
    }
   
   
  guardarCategoria(categoria) {
    let params=JSON.stringify(categoria);
    let headers=new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'categoria',params, {headers:headers})
                      .map( res => res.json());
    }




    getDocumentos(id){
      return this._http.get(this.url+'categoria/'+id).map(res=>res.json());
    }
    
    getSolicitudes(){
        
      return this._http.get(this.url+'inscripcions?filter={"where":{"estado":"Pendiente"}}').map(res=>res.json());
  }

  editarCategoria(categoria,id,ruta){
    console.log(categoria);
    if(categoria.documentos==null)
    {
      categoria.documentos=[];
    }
    if(ruta!=null){
      categoria.documentos.push(ruta);    
    }
    
    let params=JSON.stringify(categoria);
    console.log("este toquen:"+this.getToken());
    let headers=new Headers({'Content-Type':'application/json','Authorization':this.getToken()});
    return this._http.put(this.url+'categoria/'+id,params, {headers:headers})
                      .map( res => res.json());
  }
  subirPdf(files:Array<File>){
    let c=this;
        return new Promise(function(resolve,reject){
          var formData:any=new FormData();
          var xhr=new XMLHttpRequest();
          if(files!=undefined){
            for(var i=0;i<files.length;i++){
              formData.append("archivo",files[i],files[i].name);
            }
          }
          xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
              if(xhr.status==200){
                resolve(JSON.parse(xhr.response));
                
              }else{
                reject(xhr.response);
              }
            }
          }    
          xhr.open('POST',c.url+"documentos/categorias/upload",true);
          xhr.send(formData);
        })        
  }

  getSolicitudesAceptadas(){
    return this._http.get(this.url+'inscripcions?filter[include]=usuario&filter[include]=categoria&filter[include]=grupo').map(res=>res.json());
}
  //filter={"where":{"estado":"Aprobado"}}
  // {"estado":"Aprobado"}
  // /api/inscripcions?filter[include]=usuario&filter[include]=categoria&filter[include]=grupo
  getSolicitud(id){
    return this._http.get(this.url+'inscripcions/'+id+'?filter[include]=usuario&filter[include]=categoria&filter[include]=grupo').map(res=>res.json());
  }
  updateSolicitud(solicitud){
    // console.log("este toquen:"+this.getToken());
    let params=JSON.stringify(solicitud);
    let headers= new Headers({
      'Content-Type':'application/json'
    });
    return this._http.put(this.url+'inscripcions/'+solicitud.id, params, {headers:headers})
                                                          .map(res=>res.json());
  }







    // https://apirbo.herokuapp.com/api/categoria
    
 addCategoria(categoria) {
   console.log(categoria);
    let params=JSON.stringify(categoria);
    console.log("este toquen:"+this.getToken());
    let headers=new Headers({'Content-Type':'application/json','Authorization':this.getToken()});
    return this._http.post(this.url+'categoria',params, {headers:headers})
                      .map( res => res.json());
    }


}

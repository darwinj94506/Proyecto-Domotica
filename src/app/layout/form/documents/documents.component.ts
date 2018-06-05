import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{CrudService} from './../../../shared/services/crud.service';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documentos:any[];
  idCategoria;

  constructor(private _crudService:CrudService, private _router:ActivatedRoute) { 
    this.idCategoria= this._router.snapshot.paramMap.get('id-categoria');
  }

  ngOnInit() {
    this.getDocumentos();
  }

  getDocumentos(){
    
    this._crudService.getDocumentos(this.idCategoria).subscribe(
    response=>{
        console.log(response);
      if(!response){
        console.log('categorias');
      }else{
        this.documentos=response.documentos;
        console.log(this.documentos);
      }
    },
    error=>{
      console.log(<any>error);
    }
  );
}

}

import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import{CrudService} from './../../shared/services/crud.service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    categorias:any[];
    espiner:boolean=true;

    constructor(private _crudService:CrudService) {}

    ngOnInit() {
        this.getCategorias();
        
    }


    getCategorias(){
        this._crudService.getCategorias().subscribe(
        response=>{
            console.log(response);
          if(!response){
            console.log('categorias');
          }else{
            this.categorias=response;
            this.espiner=false;
            console.log(this.categorias);
          }
        },
        error=>{
          console.log(<any>error);
        }
      );
    }
  
}

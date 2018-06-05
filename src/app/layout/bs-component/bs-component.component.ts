import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import{CrudService} from './../../shared/services/crud.service';


@Component({
    selector: 'app-bs-component',
    templateUrl: './bs-component.component.html',
    styleUrls: ['./bs-component.component.scss'],
    animations: [routerTransition()]
    
})
export class BsComponentComponent implements OnInit {
    solicitudes:any[];
    constructor(private _crudService:CrudService) {}

    ngOnInit() {
        this.getSolicitudes();
    }

    getSolicitudes(){
        this._crudService.getSolicitudesAceptadas().subscribe(
        response=>{
            console.log(response);
          if(!response){
            console.log('solicitudes');
          }else{
            this.solicitudes=response;
            console.log(this.solicitudes);
          }
        },
        error=>{
          console.log(<any>error);
        }
      );
    }
}

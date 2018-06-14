import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import{CrudService} from './../shared/services/crud.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    email:String='';
    clave:String='';
    username:String='';
    nombre:String='';
    permiso={};
    responsable:String='';
    espiner:Boolean=false;

        
    constructor(private _crud:CrudService) {}
    ngOnInit() {}
    registrar(){
        this.espiner=true;
        alert(this.responsable);
        this._crud.register({ 'email':this.email,
                              'clave':this.clave,
                              'nombre':this.nombre,
                              'permiso':this.permiso,
                              'responsable':this.responsable,
                              'password':this.clave,
                              'username':this.nombre}).subscribe(
                              (data)=>{this.espiner=false}
                              ,error=>{
                                  this.espiner=false;
                                  alert("error");});

    }
}

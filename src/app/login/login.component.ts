import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import{CrudService} from './../shared/services/crud.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    email:String='';
    password:String='';
    espiner:Boolean=false;
    constructor(public router: Router,private _crudService:CrudService) {}

    ngOnInit() {}

    onLoggedin() {
        console.log(this.password);
        console.log(this.email);
        this.espiner=true;
        this._crudService.signup({'email':this.email,'password':this.password})
                .subscribe(data=>{
                    if(data){
                        this.espiner=false;
                        localStorage.setItem('isLoggedin','true');
                        localStorage.setItem('identity', JSON.stringify(data));
                        this.router.navigate(['/tables']);    
                    }
                    
                    console.log(data)
                },error=>{
                    this.espiner=false;
                    alert("Correo o contraseña incorrectos");
            })
    }
}

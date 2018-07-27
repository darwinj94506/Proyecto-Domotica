import { dispositivo } from './../shared/services/dispositivo.service';
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
    constructor(public router: Router,private _crudService:CrudService,private soIO:dispositivo) {}

    ngOnInit() {

        this.soIO.messages.subscribe(msg=>{
            console.log(msg);
        })
    }

    onLoggedin() {
        console.log(this.password);
        console.log(this.email);
        this.espiner=true;
        this._crudService.login({'email':this.email,'password':this.password})
                .subscribe(data=>{
                    if(data){
                        this.espiner=false;
                        localStorage.setItem('isLoggedin','true');
                        localStorage.setItem('identity', JSON.stringify(data));
                        localStorage.setItem('user',JSON.stringify(this.email));
                        localStorage.setItem('password',JSON.stringify(this.password));
                        this.router.navigate(['/sistema-incendios']);    
                    }
                    
                    console.log(data)
                },error=>{
                    this.espiner=false;
                    alert("Correo o contraseña incorrectos");
            })
    }

    prender()
    {
        this.soIO.sendMsg("prenderFoco");
    }
    apagar()
    {
        this.soIO.sendMsg("apagarFoco");
    }
}

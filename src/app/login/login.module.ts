import { dispositivo } from './../shared/services/dispositivo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpModule} from '@angular/http';


import { BrowserModule } from '@angular/platform-browser';
import{CrudService} from './../shared/services/crud.service';



import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { WebsocketService } from '../shared/services/websocket.service';

@NgModule({
    imports: [
              CommonModule,
              FormsModule,
              HttpClientModule,
              HttpModule,
              ReactiveFormsModule,
              LoginRoutingModule
            ],
    declarations: [LoginComponent],
    providers: [CrudService,dispositivo,WebsocketService]
    
})
export class LoginModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import{CrudService} from './../shared/services/crud.service';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [SignupComponent],
  providers: [CrudService]

})
export class SignupModule { }

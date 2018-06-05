import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';

import{CrudService} from './../../shared/services/crud.service';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';
import { DocumentsComponent } from './documents/documents.component';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule,HttpModule,FormsModule, ReactiveFormsModule
    ],
    declarations: [FormComponent, AddCategoriaComponent, DocumentsComponent],
    providers: [CrudService]
    
})
export class FormModule {}

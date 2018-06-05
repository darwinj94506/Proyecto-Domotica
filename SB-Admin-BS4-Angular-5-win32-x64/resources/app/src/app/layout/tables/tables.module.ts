import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import{CrudService} from './../../shared/services/crud.service';
import { AddSolicitudComponent } from './add-solicitud/add-solicitud.component';

@NgModule({
    imports: [CommonModule, TablesRoutingModule,FormsModule, PageHeaderModule,HttpModule],
    declarations: [TablesComponent, AddSolicitudComponent],
    providers:[CrudService]
})
export class TablesModule {}

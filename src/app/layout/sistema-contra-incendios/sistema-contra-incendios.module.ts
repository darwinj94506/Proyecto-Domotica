import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { SistemaContraIncendiosRoutingModule } from './sistema-contra-incedios-routing.module';
import { SistemaContraIncendiosComponent } from './sistema-contra-incendios.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddIncendiosComponent } from './add-incendios/add-incendios.component';
import{CrudService} from './../../shared/services/crud.service';
import { HttpModule} from '@angular/http';


@NgModule({
    imports: [CommonModule,
        FormsModule,
        ColorPickerModule,
        NgbModule.forRoot(),
        SistemaContraIncendiosRoutingModule,HttpModule,
        PageHeaderModule],
    declarations: [SistemaContraIncendiosComponent, AddIncendiosComponent]
        ,providers:[CrudService]
})
export class SistemaContraIncendiosModule {}

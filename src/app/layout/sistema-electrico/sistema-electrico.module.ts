import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SistemaElectricoRoutingModule } from './sistema-electrico-routing.module';
import { SistemaElectricoComponent } from './sistema-electrico.component';
import { PageHeaderModule } from './../../shared';
import{CrudService} from './../../shared/services/crud.service';


@NgModule({
    imports: [CommonModule,
          FormsModule,
          ColorPickerModule,
          NgbModule.forRoot(),
          SistemaElectricoRoutingModule,
          PageHeaderModule,
          HttpModule],
    declarations: [SistemaElectricoComponent],
    providers:[CrudService]
})
export class SistemaElectricoModule {}

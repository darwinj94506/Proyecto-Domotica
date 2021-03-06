import { WebsocketService } from './../../shared/services/websocket.service';
import { dispositivo } from './../../shared/services/dispositivo.service';
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
import { AddElectricoComponent } from './add-electrico/add-electrico.component';


@NgModule({
    imports: [CommonModule,
          FormsModule,
          ColorPickerModule,
          NgbModule,
          SistemaElectricoRoutingModule,
          PageHeaderModule,
          HttpModule],
    declarations: [SistemaElectricoComponent, AddElectricoComponent],
    providers:[CrudService,dispositivo,WebsocketService]
})
export class SistemaElectricoModule {}

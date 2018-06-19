import { AlarmasService } from './../../shared/services/alarmas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteAlarmasRoutingModule } from './reporte-alarmas-routing.module';
import { ReporteAlarmasComponent } from './reporte-alarmas/reporte-alarmas.component';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,ReporteAlarmasRoutingModule,NgxDatatableModule,
    HttpModule,
    FormsModule
  ],
  declarations: [ReporteAlarmasComponent],
  providers:[AlarmasService]
})
export class ReporteAlarmasModule { }

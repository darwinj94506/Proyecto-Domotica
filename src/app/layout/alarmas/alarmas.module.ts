import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AlarmasService } from './../../shared/services/alarmas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmasRoutingModule } from './alarmas-routing.module';
import { AlarmasComponent} from './alarmas/alarmas.component';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, AlarmasRoutingModule,
    HttpModule,FormsModule,NgxDatatableModule
    ],
    declarations: [AlarmasComponent],
    providers:[AlarmasService]
})
export class AlarmasModule {}
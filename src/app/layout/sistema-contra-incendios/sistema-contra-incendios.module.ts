import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { SistemaContraIncendiosRoutingModule } from './sistema-contra-incedios-routing.module';
import { SistemaContraIncendiosComponent } from './sistema-contra-incendios.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [CommonModule,
        FormsModule,
        ColorPickerModule,
        NgbModule.forRoot(),
        SistemaContraIncendiosRoutingModule,
        PageHeaderModule],
    declarations: [SistemaContraIncendiosComponent]
})
export class SistemaContraIncendiosModule {}

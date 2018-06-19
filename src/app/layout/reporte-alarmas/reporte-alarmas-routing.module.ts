import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteAlarmasComponent } from './reporte-alarmas/reporte-alarmas.component';

const routes: Routes = [
    {
        path: '',
        component: ReporteAlarmasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReporteAlarmasRoutingModule {}

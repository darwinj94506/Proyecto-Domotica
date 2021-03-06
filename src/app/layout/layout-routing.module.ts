import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'sistema-incendios' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'sistema-incendios', 
              loadChildren: './sistema-contra-incendios/sistema-contra-incendios.module#SistemaContraIncendiosModule' },
            { path: 'sistema-electrico',
             loadChildren: './sistema-electrico/sistema-electrico.module#SistemaElectricoModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'alarmas', loadChildren: './alarmas/alarmas.module#AlarmasModule' },
            { path: 'reporte-alarmas', loadChildren: './reporte-alarmas/reporte-alarmas.module#ReporteAlarmasModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

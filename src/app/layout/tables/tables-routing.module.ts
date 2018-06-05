import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import{AddSolicitudComponent} from './add-solicitud/add-solicitud.component';

const routes: Routes = [
    {
        path: '', component: TablesComponent
    },
    {
        path: 'solicitud/:id/:action', component: AddSolicitudComponent
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}

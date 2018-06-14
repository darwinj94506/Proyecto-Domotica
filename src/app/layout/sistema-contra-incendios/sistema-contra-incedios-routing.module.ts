import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaContraIncendiosComponent } from './sistema-contra-incendios.component';
import { AddIncendiosComponent } from './add-incendios/add-incendios.component';


const routes: Routes = [
    {
        path: '',
        component: SistemaContraIncendiosComponent,

    },
    {
        path:'add-incendios',
        component:AddIncendiosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SistemaContraIncendiosRoutingModule {}

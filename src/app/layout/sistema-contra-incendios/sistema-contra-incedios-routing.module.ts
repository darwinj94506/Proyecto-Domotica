import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaContraIncendiosComponent } from './sistema-contra-incendios.component';

const routes: Routes = [
    {
        path: '',
        component: SistemaContraIncendiosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SistemaContraIncendiosRoutingModule {}

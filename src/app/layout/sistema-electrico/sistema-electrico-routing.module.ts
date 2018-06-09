import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaElectricoComponent } from './sistema-electrico.component';

const routes: Routes = [
    {
        path: '', component: SistemaElectricoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaElectricoRoutingModule { }

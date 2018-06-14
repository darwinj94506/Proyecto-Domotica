import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaElectricoComponent } from './sistema-electrico.component';
import { AddElectricoComponent } from './add-electrico/add-electrico.component';


const routes: Routes = [
    {
        path: '', component: SistemaElectricoComponent
    },
    {
        path: 'add-electrico', component: AddElectricoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaElectricoRoutingModule { }

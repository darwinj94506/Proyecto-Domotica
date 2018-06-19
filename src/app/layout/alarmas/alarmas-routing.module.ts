import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmasComponent } from './alarmas/alarmas.component';

const routes: Routes = [
    {
        path: '',
        component: AlarmasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlarmasRoutingModule {}

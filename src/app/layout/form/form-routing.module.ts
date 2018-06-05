import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import{AddCategoriaComponent} from './add-categoria/add-categoria.component';
import{DocumentsComponent} from './documents/documents.component';

const routes: Routes = [
    {
        path: '', component: FormComponent,
    },
    { 
        path: 'categoria/:id/:action', component: AddCategoriaComponent
    },
    { 
        path: 'documentos/:id-categoria', component: DocumentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule {
}

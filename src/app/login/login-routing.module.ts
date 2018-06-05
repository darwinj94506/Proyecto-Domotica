import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import{CrudService} from './../shared/services/crud.service';


const routes: Routes = [
    {
        path: '',component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[CrudService]
})
export class LoginRoutingModule {}

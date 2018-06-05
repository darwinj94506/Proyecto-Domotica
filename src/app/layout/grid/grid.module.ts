import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';


import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { PageHeaderModule } from './../../shared';
import{CrudService} from './../../shared/services/crud.service';


@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule,HttpModule],
    declarations: [GridComponent],
    providers:[CrudService]
})
export class GridModule {}

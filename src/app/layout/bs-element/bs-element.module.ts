import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';


import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    imports: [CommonModule,
        // ColorPickerModule,
        FormsModule,
        ColorPickerModule,
        NgbModule.forRoot(),
         BsElementRoutingModule, PageHeaderModule],
    declarations: [BsElementComponent]
})
export class BsElementModule {}

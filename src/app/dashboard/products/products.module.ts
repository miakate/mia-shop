import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

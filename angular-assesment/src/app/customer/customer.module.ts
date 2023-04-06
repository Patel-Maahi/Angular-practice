import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerComponent } from './customer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    CustomerListComponent,
    AddCustomerComponent,
    CustomerComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class CustomerModule { }

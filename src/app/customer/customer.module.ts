import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInputComponent } from './components/customer-input/customer-input.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';



@NgModule({
  declarations: [
    CustomerInputComponent,
    CustomerTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }

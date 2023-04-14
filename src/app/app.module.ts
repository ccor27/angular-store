import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerInputComponent } from './customer/components/customer-input/customer-input.component';
import { CustomerTableComponent } from './customer/components/customer-table/customer-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerInputComponent,
    CustomerTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

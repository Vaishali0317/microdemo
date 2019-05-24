import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BillingComponent],
  exports : [BillingComponent]
})
export class BillingModule { }

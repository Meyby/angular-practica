import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { accountantComponent } from './contador/accountant.component';



@NgModule({
  declarations: [
    accountantComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    accountantComponent
  ]
})
export class AccountantModule { }

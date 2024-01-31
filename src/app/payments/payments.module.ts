import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsHistoryComponent } from './pages/payments-history/payments-history.component';



@NgModule({
  declarations: [
    MainComponent,
    PaymentsHistoryComponent
  ],
  imports: [
    SharedModule,
    PaymentsRoutingModule,
    CommonModule
  ]
})
export class PaymentsModule { }

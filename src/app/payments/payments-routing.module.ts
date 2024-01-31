import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PaymentsHistoryComponent } from './pages/payments-history/payments-history.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
    {
      path:'history',
      component: PaymentsHistoryComponent,
    }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path:"auth",
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:"shared",
    loadChildren:()=> import('./shared/shared.module').then(m=>m.SharedModule)
  },
  {
    path:"analitics",
    loadChildren:()=> import('./analitics/analitics.module').then(m=>m.AnaliticsModule)
  },
  {
    path:"medical-consultation",
    loadChildren:()=> import('./medical-consultations/medical-consultations.module').then(m=>m.MedicalConsultationsModule)
  },
  {
    path:"patient-administration",
    loadChildren:()=> import('./patient-administration/patient-administration.module').then(m=>m.PatientAdministrationModule)
  },
  {
    path:"medical-advice",
    loadChildren:()=> import('./medical-advice/medical-advice.module').then(m=>m.MedicalAdviceModule)
  },
  {
    path:"blog",
    loadChildren:()=> import('./blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path:"payments",
    loadChildren:()=> import('./payments/payments.module').then(m=>m.PaymentsModule)
  },
  {
    path:"**",
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

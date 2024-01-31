import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PatientsComponent } from './pages/patients/patients.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'patients',
        component:PatientsComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PatientAdministrationRoutingModule { }

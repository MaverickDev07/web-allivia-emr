import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PatientAdministrationRoutingModule } from './patient-administration-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PatientsComponent } from './pages/patients/patients.component';



@NgModule({
  declarations: [
    PatientsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    PatientAdministrationRoutingModule,
    SharedModule
  ]
})
export class PatientAdministrationModule { }

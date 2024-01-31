import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { MedicalAdviceRoutingModule } from './medical-advice-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DoctorChatComponent } from './pages/doctor-chat/doctor-chat.component';





@NgModule({
  declarations: [
    MainComponent,
    DoctorChatComponent
  ],
  imports: [
    MedicalAdviceRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class MedicalAdviceModule { }

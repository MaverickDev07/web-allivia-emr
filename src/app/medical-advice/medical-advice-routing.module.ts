import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DoctorChatComponent } from './pages/doctor-chat/doctor-chat.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'doctor-chat',
        component:DoctorChatComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MedicalAdviceRoutingModule { }

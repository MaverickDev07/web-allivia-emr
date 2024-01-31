import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { WaitingRoomComponent } from './pages/waiting-room/waiting-room.component';
import { MedicalRecordComponent } from './pages/medical-record/medical-record.component';
import { MrAlliviaPointComponent } from './pages/mr-allivia-point/mr-allivia-point.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'calendar',
        component:CalendarComponent
      },
      {
        path:'waiting-room',
        component:WaitingRoomComponent
      },
      {
        path:'waiting-room/:id/:id_agenda',
        component:MrAlliviaPointComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class MedicalConsultationRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PanelComponent } from './components/panel/panel.component';
import { PanelBodyComponent } from './components/panel-body/panel-body.component';
import { PanelHeaderComponent } from './components/panel-header/panel-header.component';
import { SidebarMdComponent } from './components/sidebar-md/sidebar-md.component';
import { ResumeComponent } from './components/icons/resume/resume.component';
import { ProfileComponent } from './components/icons/profile/profile.component';
import { CalendarComponent } from './components/icons/calendar/calendar.component';
import { WaitingRoomComponent } from './components/icons/waiting-room/waiting-room.component';
import { PatientsComponent } from './components/icons/patients/patients.component';
import { DoctorChatComponent } from './components/icons/doctor-chat/doctor-chat.component';
import { QueryHistoryComponent } from './components/icons/query-history/query-history.component';
import { BlogComponent } from './components/icons/blog/blog.component';
import { PaymentsComponent } from './components/icons/payments/payments.component';
import { RoundImageComponent } from './components/round-image/round-image.component';
import { IconVideoStreamingComponent } from './components/icons/video-streaming/video-streaming.component';
import { ScheduleDateComponent } from './components/schedule-date/schedule-date.component';
import { MainAppComponent } from './pages/main-app/main-app.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';
import { DropdownOptionsComponent } from './components/dropdown-options/dropdown-options.component';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './components/radio/radio.component';
import { DotComponent } from './components/dot/dot.component';
import { CheckComponent } from './components/check/check.component';
import { RoundOnlyImageComponent } from './components/round-only-image/round-only-image.component';
import { SidebarImageComponent } from './components/sidebar-image/sidebar-image.component';



@NgModule({
  declarations: [
     SidebarComponent,
     ToolbarComponent,
      PanelComponent, 
      PanelBodyComponent, 
      PanelHeaderComponent,
      ResumeComponent, 
      ProfileComponent,
      CalendarComponent, 
      WaitingRoomComponent,
      PatientsComponent,
      DoctorChatComponent,
      QueryHistoryComponent, 
      BlogComponent,
      PaymentsComponent,
      SidebarMdComponent,
      RoundImageComponent,
      IconVideoStreamingComponent,
      ScheduleDateComponent,
      MainAppComponent,
      DropdownOptionsComponent,
      RadioComponent,
      DotComponent,
      CheckComponent,
      RoundOnlyImageComponent,
      SidebarImageComponent,
      ],
  exports:[
           MainAppComponent,
           SidebarComponent,
           ToolbarComponent,
           PanelComponent, 
           PanelBodyComponent, 
           ResumeComponent, 
           ProfileComponent, 
           CalendarComponent, 
           WaitingRoomComponent, 
           PatientsComponent, 
           DoctorChatComponent, 
           QueryHistoryComponent, 
           BlogComponent, 
           PaymentsComponent,
           RoundImageComponent,
           MaterialModule,
           PrimengModule,
           DropdownOptionsComponent,
           RadioComponent,
           DotComponent,
           CheckComponent,
           RoundOnlyImageComponent,
           SidebarImageComponent,
           ],
  imports: [
    SharedRoutingModule,
    CommonModule,
    MaterialModule,
    PrimengModule,
    FormsModule
  ],

  
})
export class SharedModule { }

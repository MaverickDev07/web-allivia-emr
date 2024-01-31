import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { MedicalConsultationRoutingModule } from './medical-consultation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { WaitingRoomComponent } from './pages/waiting-room/waiting-room.component';
import { PanelWaitingRoomComponent } from './components/panel-waiting-room/panel-waiting-room.component';
import {BlockUIModule} from 'primeng/blockui';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ShortDateAppPipe } from './pipes/short-date-app.pipe';
import { DatePipe } from '@angular/common';
import { MedicalRecordComponent } from './pages/medical-record/medical-record.component';
import {EditorModule} from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { MrLeftScreenComponent } from './components/mr-left-screen/mr-left-screen.component';
import { MrRigthScreenComponent } from './components/mr-rigth-screen/mr-rigth-screen.component';
import { MrButtonsComponent } from './components/mr-buttons/mr-buttons.component';
import { TextareaSpeechComponent } from './components/textarea-speech/textarea-speech.component';
import { MrAlliviaPointComponent } from './pages/mr-allivia-point/mr-allivia-point.component';
import { AccordionOptionsComponent } from './components/accordion-options/accordion-options.component';
import { AccordionAlliviaPointComponent } from './components/accordion-allivia-point/accordion-allivia-point.component';
import { ConfirmationService } from 'primeng/api';
import { ClinicHistoryComponent } from './components/clinic-history/clinic-history.component';
import { RowOptionsComponent } from './components/row-options/row-options.component';
import { RowTypesOptionsComponent } from './components/row-types-options/row-types-options.component';
import { DiabetesSectionComponent } from './components/clinic-history/family-background/diabetes-section/diabetes-section.component';
import { SocialBackgroundComponent } from './components/clinic-history/social-background/social-background.component';
import { PathologicalBackgroundComponent } from './components/clinic-history/pathological-background/pathological-background.component';
import { FamilyBackgroundComponent } from './components/clinic-history/family-background/family-background.component';
import { DotDropdownOptionsComponent } from './components/dot-dropdown-options/dot-dropdown-options.component';
import { CancerSectionComponent } from './components/clinic-history/family-background/cancer-section/cancer-section.component';
import { HeartDiseasesSectionComponent } from './components/clinic-history/family-background/heart-diseases-section/heart-diseases-section.component';
import { HypertensionSectionComponent } from './components/clinic-history/family-background/hypertension-section/hypertension-section.component';
import { ConclusionsComponent } from './components/conclusions/conclusions.component';
import { PhysicalExaminationModalComponent } from './components/physical-examination-modal/physical-examination-modal.component';
import { HeadComponent } from './components/physical-examination-modal/head/head.component';
import { NeckComponent } from './components/physical-examination-modal/neck/neck.component';
import { AnteriorThoraxComponent } from './components/physical-examination-modal/anterior-thorax/anterior-thorax.component';
import { PosteriorThoraxComponent } from './components/physical-examination-modal/posterior-thorax/posterior-thorax.component';
import { AbdomenComponent } from './components/physical-examination-modal/abdomen/abdomen.component';
import { PeripheralNervousSystemComponent } from './components/physical-examination-modal/peripheral-nervous-system/peripheral-nervous-system.component';
import { MotorNervousSystemComponent } from './components/physical-examination-modal/motor-nervous-system/motor-nervous-system.component';
import { ExtremitiesComponent } from './components/physical-examination-modal/extremities/extremities.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PanelCalendarComponent } from './components/panel-calendar/panel-calendar.component'; // must go before plugins

@NgModule({
  declarations: [
    MainComponent,
    CalendarComponent,
    WaitingRoomComponent,
    PanelWaitingRoomComponent,
    ShortDateAppPipe,
    MedicalRecordComponent,
    MrLeftScreenComponent,
    MrRigthScreenComponent,
    MrButtonsComponent,
    TextareaSpeechComponent,
    MrAlliviaPointComponent,
    AccordionOptionsComponent,
    AccordionAlliviaPointComponent,
    ClinicHistoryComponent,
    RowOptionsComponent,
    RowTypesOptionsComponent,
    DiabetesSectionComponent,
    SocialBackgroundComponent,
    PathologicalBackgroundComponent,
    FamilyBackgroundComponent,
    DotDropdownOptionsComponent,
    CancerSectionComponent,
    HeartDiseasesSectionComponent,
    HypertensionSectionComponent,
    ConclusionsComponent,
    PhysicalExaminationModalComponent,
    HeadComponent,
    NeckComponent,
    AnteriorThoraxComponent,
    PosteriorThoraxComponent,
    AbdomenComponent,
    PeripheralNervousSystemComponent,
    MotorNervousSystemComponent,
    ExtremitiesComponent,
    PanelCalendarComponent
  ],
  exports:[ClinicHistoryComponent],
  imports: [
    FormsModule,
    EditorModule,
    BlockUIModule,
    ProgressSpinnerModule,
    CommonModule,
    MedicalConsultationRoutingModule,
    SharedModule,
    FullCalendarModule, 
  ],
  providers: [
    DatePipe,
    ConfirmationService
  ],
})
export class MedicalConsultationsModule { }

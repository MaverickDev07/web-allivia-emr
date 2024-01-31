import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliticsRoutingModule } from './analitics-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './pages/resume/resume.component';
import { QueryHistoryComponent } from './pages/query-history/query-history.component';



@NgModule({
  declarations: [
    MainComponent,
    ResumeComponent,
    QueryHistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnaliticsRoutingModule
  ]
})
export class AnaliticsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { QueryHistoryComponent } from './pages/query-history/query-history.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'resume',
        component:ResumeComponent
      },
      {
        path:'history',
        component:QueryHistoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnaliticsRoutingModule { }

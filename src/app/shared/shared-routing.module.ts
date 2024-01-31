import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppComponent } from './pages/main-app/main-app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: MainAppComponent,
    children:[
    
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
export class SharedRoutingModule { }

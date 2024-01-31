import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register/register.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'**',
       redirectTo:'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

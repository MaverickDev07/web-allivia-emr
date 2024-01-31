import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import {BlockUIModule} from 'primeng/blockui';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegisterComponent,
    FormLoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    BlockUIModule,
    ProgressSpinnerModule,
    SharedModule
  ]
})
export class AuthModule { }

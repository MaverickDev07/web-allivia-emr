import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent  {

  loginForm: FormGroup = this.fb.group({
    email:    ['aruiz@allivia.app', [ Validators.required, Validators.email ]],
    password: ['12345678', [ Validators.required, Validators.minLength(6) ]],
  });

  @Output()
  blockScreen = new EventEmitter<boolean>();

  constructor( private fb: FormBuilder,
    private router:Router,private authService: AuthService ) { }


  login() {
  
    const { email, password } = this.loginForm.value;
    this.blockScreen.emit(true);


    setTimeout(() => {
      

      this.authService.login( email, password )
      .subscribe( ok => {
        if ( ok === true ) {
          this.router.navigateByUrl('/auth/profile');
        } else {
          Swal.fire('Error', ok, 'error');
        }
        this.blockScreen.emit(false);
      });


   }, 1000);



  }

}

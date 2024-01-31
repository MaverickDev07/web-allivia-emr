import { Component, OnInit } from '@angular/core';
import io from "socket.io-client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  blockedDocument: boolean = false;
  

 


  constructor(){
 
  }


  blockScreen(block:boolean){
    this.blockedDocument =block;
  }

 
 

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AbstractSocketComponent } from '../../sockets/base.socket.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends AbstractSocketComponent implements OnInit   {

  
  url!:string;

  configurationLinks={
    class:'nav-link link-sidebar',
    fillIconLink:'#d0dbe5',
    fillFontLink:'#151515'
  };

  configurationLinksActive={
    class:'nav-link link-sidebar app-li-active',
    fillIconLink:'#00d897',
    fillFontLink:'#00d897'
  };

  doctorName="";
  pathFile="";
  constructor(private router:Router,private authService: AuthService) {
    super(router);
  }
  ngOnInit(): void {
      this.doctorName=localStorage.getItem('name') as string;
      this.pathFile=localStorage.getItem('photo_profile') as string;
  }

  eventsComponent(): void {


    this.socket.on('datademo', (data: any) => {
      console.log(data);
      }); 
  
      this.socket.on("disconnect", () => {
        
      });

  }


  sendData(){
    this.socket.emit('enviar-mensaje', {
      msg: 'Client to server, can you hear me server?'
  });
  }


  dashboardLinkConfiguration(){
    this.url=this.router.url;
    return this.url.startsWith('/analitics/resume')?this.configurationLinksActive:this.configurationLinks;
  }   

  authLinkConfiguration(){
    return this.url.startsWith('/auth')?this.configurationLinksActive:this.configurationLinks;
  } 

  calendarLinkConfiguration(){
    return this.url.includes('/calendar')?this.configurationLinksActive:this.configurationLinks;
  } 

  waitingRoomConfiguration(){
    return this.url.includes('/waiting-room')?this.configurationLinksActive:this.configurationLinks;
  } 

  patientConfiguration(){
    return this.url.includes('/patient-administration/patients')?this.configurationLinksActive:this.configurationLinks;
  } 

  doctorChatConfiguration(){
    return this.url.includes('/medical-advice/doctor-chat')?this.configurationLinksActive:this.configurationLinks;
  } 


  historyConfiguration(){
    return this.url.includes('/analitics/history')?this.configurationLinksActive:this.configurationLinks;
  } 

  blogConfiguration(){
    return this.url.includes('/blog/blogs')?this.configurationLinksActive:this.configurationLinks;
  } 

  paymentsConfiguration(){
    return this.url.includes('/payments/history')?this.configurationLinksActive:this.configurationLinks;
  } 

  resume(){
    this.url=this.router.url;
    this.router.navigateByUrl('/analitics/resume');
  }

  
  profile(){
    this.url=this.router.url;
    this.router.navigateByUrl('auth/profile');
  }

  calendar(){
    this.url=this.router.url;
    this.router.navigateByUrl('medical-consultation/calendar');
  }

  waitingRoom(){
    this.url=this.router.url;
    this.router.navigateByUrl('medical-consultation/waiting-room');
  }


  patients(){
    this.url=this.router.url;
    this.router.navigateByUrl('patient-administration/patients');
  }

  doctorChat(){
    this.url=this.router.url;
    this.router.navigateByUrl('medical-advice/doctor-chat');
  }

  history(){
    this.url=this.router.url;
    this.router.navigateByUrl('/analitics/history');
  }

 blog(){
    this.url=this.router.url;
    this.router.navigateByUrl('/blog/blogs');
  }


  payments(){
    this.url=this.router.url;
    this.router.navigateByUrl('/payments/history');
  }


  logout(){
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }

}

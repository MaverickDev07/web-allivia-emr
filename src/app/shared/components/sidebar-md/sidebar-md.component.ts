import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar-md',
  templateUrl: './sidebar-md.component.html',
  styleUrls: ['./sidebar-md.component.css']
})
export class SidebarMdComponent implements OnInit  {
  pathFile="";
  url!:string;

  configurationLinks={
    class:'nav-link py-2 border-bottom',
    fillIconLink:'#d0dbe5',
    fillFontLink:'#151515',
    isActive:false
  };

  configurationLinksActive={
    class:'nav-link py-2 border-bottom',
    fillIconLink:'#00d897',
    fillFontLink:'#00d897',
    isActive:true
  };


  constructor(private router:Router,
    private authService: AuthService) {
      this.url=this.router.url;
     }
  ngOnInit(): void {
    this.pathFile=localStorage.getItem('photo_profile') as string;
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
    return this.url.includes('patient-administration/patients')?this.configurationLinksActive:this.configurationLinks;
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

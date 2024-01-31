import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WaitingRoom } from '../../interfaces/waiting-room.interface';
import {DialogService, DynamicDialogConfig} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-panel-calendar',
  templateUrl: './panel-calendar.component.html',
  styleUrls: ['./panel-calendar.component.css']
})
export class PanelCalendarComponent implements OnInit {

  waitingRoomData!:WaitingRoom;  
  constructor(private router:Router,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { 
   this.waitingRoomData=this.config.data.waitingRoomData as WaitingRoom;
  }
  ngOnInit(): void {
    
  }



  reschedule(){
    if (confirm(`Confirme la accion para reagendar`)) {
      this.ref.close();
    }
  }


  getImagePatient():string{

    if(this.waitingRoomData.path==undefined || this.waitingRoomData.path===''){
      return "../../../../assets/img/avatar.png";
    }

    return this.waitingRoomData.foto;

  }



}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment.prod';
import { GoalsSelected, MedicalBackground, Objetivos, Paciente } from '../interfaces/medical-background.interface';
import { WaitingRoom } from '../interfaces/waiting-room.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  socket:Socket;
  medicalBackground?:MedicalBackground;
  objetivos:Objetivos[]=[];
  objetivosSeleccionados:GoalsSelected[]=[];
  state:string='';
  conclusion:string='';
  categorizacionInicial:string='';
  id_agenda_cita:string='';
  paciente?:Paciente;

  constructor() { 
    
    this.socket= io(environment.serverSocket,{
      extraHeaders:{
        "x-token":localStorage.getItem('token') || "" 
      }
    });
  }

 

  calendarRequest() {
    this.socket.emit('calendar-request', {});
  }

  onCalendarData() {
    return new Observable(observer => {
      this.socket.on('calendar-data', (msg:any) => {
        observer.next(msg.data);
      });
    });
  }


  


  


}

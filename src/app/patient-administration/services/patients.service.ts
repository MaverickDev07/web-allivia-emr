import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  socket:Socket;


  constructor() { 
    
    this.socket= io(environment.serverSocket,{
      extraHeaders:{
        "x-token":localStorage.getItem('token') || "" 
      }
    });
  }

 

  patientsRequest() {
    this.socket.emit('patients-request', {});
  }

  onPatientsData() {
    return new Observable(observer => {
      this.socket.on('patients-data', (msg:any) => {
        observer.next(msg.data);
      });
    });
  }


  


  


}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment.prod';
import { AppointmentAgenda, GoalsSelected, MedicalBackground, Objetivos, Paciente } from '../interfaces/medical-background.interface';
import { Option } from '../interfaces/options.interface';

@Injectable({
  providedIn: 'root'
})
export class WaitingRoomService {
  socket:Socket;
  medicalBackground?:MedicalBackground;
  objetivos:Objetivos[]=[];
  objetivosSeleccionados:GoalsSelected[]=[];
  state:string='';
  conclusion:string='';
  categorizacionInicial:string='';
  id_agenda_cita:string='';
  paciente?:Paciente;
  cancer:Option[]=[];
  appointmentAgenda!:AppointmentAgenda;
  constructor() { 
    
    this.socket= io(environment.serverSocket,{
      extraHeaders:{
        "x-token":localStorage.getItem('token') || "" 
      }
    });
  }

  getNamePatient():string{

    if(!this.paciente){
      return "";
    }

    return this.paciente!.app_usuario.nombre+" "+this.paciente!.app_usuario.apellido;
  }

  createMedicalBackgroundRequestRequest(id_paciente: number) {
    this.socket.emit('patient-medical-background-create-request', {
      id_paciente
    });
  }

  waitingRoomRequest(limit: number) {
    this.socket.emit('waiting-room-request', {
      limit
    });
  }


  clinicHistoryRequest(medical_background_id: number,id_agenda:number) {
    this.socket.emit('clinic-history-request', {
      medical_background_id,
      id_agenda
    });
  }

  medicalBackgroundUpdate(medical_background: MedicalBackground) {
    this.medicalBackground=medical_background;


    this.medicalBackground.app_antecedente_familia.forEach((element,index) => {

      if(element.cancer.length>0 && element.cancer!=undefined && this.cancer.findIndex(
        x => x.descripcion.toLowerCase() === element.cancer.toLowerCase()
      )===-1){
        this.medicalBackground!.app_antecedente_familia[index].nuevo_valor_cancer=true;
      }


     
    });

    this.socket.emit('medical-background-update', {
      medical_background
    });
  }
  
  medicalBackgroundPhysicalStateUpdate(medical_background: MedicalBackground) {
    this.medicalBackground=medical_background;
    this.socket.emit('medical-background-physical-test-update', {
      medical_background
    });
  }

  onClinicHistoryData() {

    return new Observable(observer => {
      this.socket.on('clinic-history-data', msg => {
        this.medicalBackground=msg.medicalBackground as MedicalBackground;
        this.objetivos=msg.goals as Objetivos[];
        this.objetivosSeleccionados=msg.goalsSelected as GoalsSelected[];
        this.state=this.medicalBackground.categorizacion_paciente;
        this.categorizacionInicial=this.medicalBackground.categorizacion_paciente;
        this.paciente=msg.paciente as Paciente;
        this.cancer=msg.cancer as Option[];
        this.appointmentAgenda=msg.appointmentAgenda as AppointmentAgenda;
        observer.next(msg);
      });
    });
    
  }

  
  
  onWaitingRoomData() {
    return new Observable(observer => {
      this.socket.on('waiting-room', msg => {
        observer.next(msg);
      });
    });
  }

  onCreatedMedicalBackground() {
    return new Observable(observer => {
      this.socket.on('medical-background-created', msg => {
        observer.next(msg);
      });
    });
  }


  saveConclusion(conclusion: any) {
    this.socket.emit('conclusion-background-update', {
      conclusion
    });
    
    this.waitingRoomRequest(6);
  }


  onOperationState() {
    return new Observable(observer => {
      this.socket.on('operation-state', msg => {
        observer.next(msg);
      });
    });
  }


}

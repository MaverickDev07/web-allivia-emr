import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WaitingRoomService } from '../../services/waiting-room.service';

@Component({
  selector: 'app-mr-left-screen',
  templateUrl: './mr-left-screen.component.html',
  styleUrls: ['./mr-left-screen.component.css']
})
export class MrLeftScreenComponent implements OnInit,OnDestroy {
  textEditor: string = '';
  blockedDocument: boolean = false;
  private ngUnsubscribe = new Subject();
  name:string='';
  years!:number;
  constructor(private router:Router,public waitingRoomService:WaitingRoomService) { }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {

    this.waitingRoomService.onClinicHistoryData().
    pipe(takeUntil(this.ngUnsubscribe)
    ).subscribe((data: any) => {

      try {
        this.name=this.waitingRoomService.paciente?.app_usuario.nombre+" "+this.waitingRoomService.paciente?.app_usuario.apellido;
        this.years=this.calculateDiff(this.waitingRoomService.paciente!.app_usuario!.fecha_nacimiento.toString());
   
      } catch (error) {
        console.log(error);
      }

    });
  }

  calculateDiff(dateSentStr:string):number{
    let currentDate = new Date();
    let dateSent = new Date(dateSentStr);
    let days=Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
    return Math.floor(days/365)
}

  saveText(text:string){
   this.waitingRoomService.conclusion=text;
  }

  saveConclusions(){
    this.blockedDocument=true;
    this.waitingRoomService.saveConclusion({
      id_antecendente:this.waitingRoomService.medicalBackground?.id,
      customGoals:this.waitingRoomService.objetivosSeleccionados,
      id_paciente:this.waitingRoomService.medicalBackground!.id_paciente,
      state:this.waitingRoomService.state,
      conclusion:this.waitingRoomService.conclusion,
      state_initial:this.waitingRoomService.categorizacionInicial,
      id_agenda_cita:this.waitingRoomService.id_agenda_cita
    });

    setTimeout(() => {
      this.blockedDocument=false;
      this.router.navigateByUrl('medical-consultation/waiting-room');
   },2*1000);
  }

  getImagePatient():string{

    if(this.waitingRoomService.paciente?.app_usuario.path==undefined || this.waitingRoomService.paciente?.app_usuario.path===''){
      return "../../../../assets/img/avatar.png";
    }

    return this.waitingRoomService.paciente?.app_usuario.nombrearchivo;

  }

}

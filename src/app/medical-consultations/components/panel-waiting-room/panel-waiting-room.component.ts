import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WaitingRoom } from '../../interfaces/waiting-room.interface';
import { WaitingRoomService } from '../../services/waiting-room.service';

@Component({
  selector: 'app-panel-waiting-room',
  templateUrl: './panel-waiting-room.component.html',
})
export class PanelWaitingRoomComponent implements OnInit,OnDestroy {

  blockedDocument: boolean = false;
  private ngUnsubscribe = new Subject();
  @Output()
  blockUI = new EventEmitter<boolean>();


  @Input() waitingRoomData!:WaitingRoom;  
  constructor(private router:Router,private waitingRoomService:WaitingRoomService) { 
   
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  ngOnInit(): void {
    this.waitingRoomService.onCreatedMedicalBackground().
    pipe(takeUntil(this.ngUnsubscribe)
    ).subscribe((data: any) => {
      this.blockUI.emit(false);
      this.router.navigateByUrl('medical-consultation/waiting-room/'+data.medicalBackground.id+"/"+this.waitingRoomData.id);
   });
  }



  toMedicalRecord(id_antecedente_medico:string,id_agenda_cita:string){
  
    if(id_antecedente_medico===null){
      this.waitingRoomService.createMedicalBackgroundRequestRequest(this.waitingRoomData.id_paciente);
      this.blockUI.emit(true);
    }else{
      this.waitingRoomService.id_agenda_cita=id_agenda_cita;
      this.router.navigateByUrl('medical-consultation/waiting-room/'+id_antecedente_medico+"/"+this.waitingRoomData.id);
    }
 }


  getImagePatient():string{

    if(this.waitingRoomData.path==undefined || this.waitingRoomData.path===''){
      return "../../../../assets/img/avatar.png";
    }

    return this.waitingRoomData.foto;

  }


}

import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WaitingRoomService } from '../../services/waiting-room.service';

@Component({
  selector: 'app-mr-allivia-point',
  templateUrl: './mr-allivia-point.component.html',
  styleUrls: ['./mr-allivia-point.component.css'],
  providers: [MessageService]
})
export class MrAlliviaPointComponent implements OnInit  {

  timeLeft: number = 0;
  interval:any;
  timer: string = '0:00';
  public getScreenWidth: any;
  public getScreenHeight: any;
  private ngUnsubscribe = new Subject();
  blockedDocument: boolean = false;


  constructor(private messageService: MessageService,private waitingRoomService:WaitingRoomService,private route: ActivatedRoute,private router:Router) {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.startTimer();
   }

   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const id_agenda=this.route.snapshot.paramMap.get('id_agenda');
    this.waitingRoomService.clinicHistoryRequest(Number(id),Number(id_agenda));
    this.waitingRoomService.onClinicHistoryData().
    pipe(takeUntil(this.ngUnsubscribe)
    ).subscribe((data: any) => {

      try {
       
      } catch (error) {
        console.log(error);
      }

    });



    this.waitingRoomService.onOperationState()
    .pipe(takeUntil(this.ngUnsubscribe)
    ).subscribe((data: any) => {

      try {
       
    
        if(!data.error){
          this.messageService.add({key: 'tc', severity:'info', summary: 'Información', detail: 'Datos guardados correctamente'});
    
        }else{
          this.messageService.add({key: 'tc', severity:'error', summary: 'Error', detail: 'Ha ocurrido un error inesperado, contacte al administrado'});
    
        }


      } catch (error) {
        console.log(error);
      }

    });
  
  }

   @HostListener('window:resize', ['$event'])
   onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }





  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft < 50000) {
        this.timeLeft++;
      } else {
        this.timeLeft = 60;
      }
      this.millisToMinutesAndSeconds(this.timeLeft * 1000);
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  millisToMinutesAndSeconds(millis:number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = (millis % 60000) / 1000;
    var secondsStr = ((millis % 60000) / 1000).toFixed(0);

    let unit:string=minutes>=1?'min':'s';

    this.timer = minutes + ':' + (seconds < 10 ? '0' : '') + secondsStr+" "+unit;
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
}

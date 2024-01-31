import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MedicalBackground } from '../../interfaces/medical-background.interface';
import { PhysicalTest, PhysicalTestOption, PhysicalTestSection } from '../../interfaces/physical-test.interface';
import { WaitingRoomService } from '../../services/waiting-room.service';

@Component({
  selector: 'app-physical-examination-modal',
  templateUrl: './physical-examination-modal.component.html',
  styleUrls: ['./physical-examination-modal.component.css']
})
export class PhysicalExaminationModalComponent implements OnInit,OnDestroy {

  @Output()
  closePopupEvent = new EventEmitter<MedicalBackground>();
  private ngUnsubscribe = new Subject();
  blockedDocument: boolean = false;
  step = -1;

  
  medicalBackground?:MedicalBackground;

  constructor(private waitingRoomService:WaitingRoomService,private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const id_agenda=this.route.snapshot.paramMap.get('id_agenda');
    this.waitingRoomService.clinicHistoryRequest(Number(id),Number(id_agenda));
    this.waitingRoomService.onClinicHistoryData().
    pipe(takeUntil(this.ngUnsubscribe)
    ).subscribe((data: any) => {

      try {
        this.medicalBackground=data.medicalBackground as MedicalBackground;
      } catch (error) {
        console.log(error);
      }

    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


  setValueMinimalTest(data:PhysicalTest){
    this.medicalBackground!.mini_mental_test=data;
  }

  setValueSectionsHeadOptions(data:PhysicalTest){
    this.medicalBackground!.cabeza=data;
  }

  setValueSectionsNeckOptions(data:PhysicalTest){
    this.medicalBackground!.cuello=data;
  }

  setValueSectionsAnteriorToraxOptions(data:PhysicalTest){
    this.medicalBackground!.torax_anterior=data;
 }

  setValueSectionsPosteriorToraxOptions(data:PhysicalTest){
    this.medicalBackground!.torax_posterior=data;
 }

  setValueAbdomentOptions(data:PhysicalTest){
    this.medicalBackground!.abdomen=data;
  }

  setValuePeripheralNervousSysteOptions(data:PhysicalTest){
    this.medicalBackground!.sistema_nervioso_perfiferico=data;
  }

  setValueMotorNervousSysteOptions(data:PhysicalTest){
    this.medicalBackground!.sistema_nervioso_motor=data;
  }

  setValueExtremitiesOptions(data:PhysicalTest){
    this.medicalBackground!.extremidades=data;
  }

  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.blockedDocument=true;
    setTimeout(() => {
      this.blockedDocument=false;
      this.step++;
      this.waitingRoomService.medicalBackgroundPhysicalStateUpdate(this.medicalBackground as MedicalBackground);
   }, 500);

  }

  prevStep() {
    this.step--;
  }


  finish(){
    this.blockedDocument=true;
    setTimeout(() => {
      this.blockedDocument=false;
      this.waitingRoomService.medicalBackgroundPhysicalStateUpdate(this.medicalBackground as MedicalBackground);
      this.closePopupEvent.emit(this.medicalBackground);
   }, 500);


  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiabetesSection } from '../../../interfaces/diabetes-section.interfaces';
import { CancerSection } from '../../../interfaces/cancer-section.interface';
import { HeartDiseases } from '../../../interfaces/heart-diseases.interface';
import { Hypertension } from '../../../interfaces/hypertension-section.interface';
import { MedicalBackground } from 'src/app/medical-consultations/interfaces/medical-background.interface';

@Component({
  selector: 'app-family-background',
  templateUrl: './family-background.component.html',
  styleUrls: ['./family-background.component.css']
})
export class FamilyBackgroundComponent  {

  @Output()
  dataDiabetesEvent = new EventEmitter<DiabetesSection[]>();

  @Output()
  dataCancerEvent = new EventEmitter<CancerSection[]>();

  @Output()
  dataHeartDiseasesEvent = new EventEmitter<HeartDiseases>();

  @Output()
  dataHypertensionEvent = new EventEmitter<Hypertension>();

  medicalBackground?:MedicalBackground;

  @Input() set setMedicalBackground(medicalBackground: MedicalBackground| undefined) {
    this.medicalBackground=medicalBackground as MedicalBackground;
    
    if(!this.medicalBackground){
      return;
    }

  }


  constructor() { }

  dataDiabetesSection(data:DiabetesSection[]){
    this.dataDiabetesEvent.emit(data);
  }


  dataCancer(data:CancerSection[]){
    this.dataCancerEvent.emit(data);
  }


  dataHeart(data:HeartDiseases){
    this.dataHeartDiseasesEvent.emit(data);
  }
 
  dataHypertension(data:Hypertension){
    this.dataHypertensionEvent.emit(data);
  }

}

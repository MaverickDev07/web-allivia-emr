import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MedicalBackground } from 'src/app/medical-consultations/interfaces/medical-background.interface';
import { SocialAntecedent } from '../../../interfaces/social-antecedent.interface';

@Component({
  selector: 'app-social-background',
  templateUrl: './social-background.component.html',
})
export class SocialBackgroundComponent {
  medicalBackground?:MedicalBackground;
  @Output()
  dataEvent = new EventEmitter<SocialAntecedent[]>();
  
  @Input() set setMedicalBackground(medicalBackground: MedicalBackground| undefined) {
    this.medicalBackground=medicalBackground as MedicalBackground;
    if(!this.medicalBackground){
      return;
    }

 
    this.socialAntecedents[0].value=this.medicalBackground.fuma;
    this.socialAntecedents[1].value=this.medicalBackground.alcohol;
    this.socialAntecedents[2].value=this.medicalBackground.cafeina;
    this.socialAntecedents[3].value=this.medicalBackground.ejercicio;
    this.socialAntecedents[4].value=this.medicalBackground.drogas;

    this.dataEvent.emit(this.socialAntecedents);
  }


  socialAntecedents:SocialAntecedent[]=[];
  constructor() {
    this.socialAntecedents.push({
      id:1,
      label:"Fuma",
      value:0 
    });

    this.socialAntecedents.push({
      id:2,
      label:"Consumo de alcohol",
      value:0
    });

    this.socialAntecedents.push({
      id:3,
      label:"Consumo de cafeina",
      value:0 
    });

    this.socialAntecedents.push({
      id:4,
      label:"Ejercicio",
      value:0 
    });

    this.socialAntecedents.push({
      id:5,
      label:"Consumo de drogas",
      value:0 
    });
   }

   changeOptionValue(op:SocialAntecedent){
    let index=this.socialAntecedents.findIndex(x=>x.id==op.id)
    this.socialAntecedents[index]=op;
    this.dataEvent.emit(this.socialAntecedents);
  }


}

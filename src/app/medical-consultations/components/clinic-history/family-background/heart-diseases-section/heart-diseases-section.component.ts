import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppAntecedenteFamilia, MedicalBackground } from 'src/app/medical-consultations/interfaces/medical-background.interface';
import { HeartDiseases } from '../../../../interfaces/heart-diseases.interface';

@Component({
  selector: 'app-heart-diseases-section',
  templateUrl: './heart-diseases-section.component.html',
})
export class HeartDiseasesSectionComponent  {

  @Output()
  dataEvent = new EventEmitter<HeartDiseases>();
  grandfather!:boolean;
  father!:boolean;
  mother!:boolean;
  brother!:boolean;
  son!:boolean;
  medicalBackground?:MedicalBackground;

  @Input() set setMedicalBackground(medicalBackground: MedicalBackground| undefined) {
    this.medicalBackground=medicalBackground as MedicalBackground;
    
    if(!this.medicalBackground){
      return;
    }

    

    this.medicalBackground.app_antecedente_familia.forEach(element=>{

      if(element.nombre==='Abuelo' && element.enfemedad_corazon){
        this.grandfather=true;
      }

      if(element.nombre==='Padre' && element.enfemedad_corazon){
        this.father=true;
      }

      if(element.nombre==='Madre' && element.enfemedad_corazon){
        this.mother=true;
      }

      if(element.nombre==='Hermano' && element.enfemedad_corazon){
        this.brother=true;
      }

      if(element.nombre==='Hijo' && element.enfemedad_corazon){
        this.son=true;
      }

    });
   
  }
  
  constructor() { }

  changeData(){
    let data:HeartDiseases={
      grandfather:this.grandfather,
      father:this.father,
      mother:this.mother,
      brother:this.brother,
      son:this.son
    }
    this.dataEvent.emit(data);
  }

  processSelectedOption(familyAntecedent: AppAntecedenteFamilia) {
    
  }

}

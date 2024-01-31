import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppAntecedenteFamilia, MedicalBackground } from 'src/app/medical-consultations/interfaces/medical-background.interface';
import { DiabetesSection } from '../../../../interfaces/diabetes-section.interfaces';

@Component({
  selector: 'app-diabetes-section',
  templateUrl: './diabetes-section.component.html',
})
export class DiabetesSectionComponent {
  @Output()
  dataEvent = new EventEmitter<DiabetesSection[]>();
  diabetes:DiabetesSection[]=[];

  medicalBackground?:MedicalBackground;
  @Input() set setMedicalBackground(medicalBackground: MedicalBackground| undefined) {
    this.medicalBackground=medicalBackground as MedicalBackground;
    
    if(!this.medicalBackground){
      return;
    }

    this.medicalBackground.app_antecedente_familia.forEach(element=>{
     this.processSelectedOption(element);
    });


    

  }

  constructor() { 
    this.diabetes.push({
      id:1,
      label:"Abuelo",
      value:0,
      isSelected:false
    });
    this.diabetes.push({
      id:2,
      label:"Padre",
      value:0,
      isSelected:false
    });
    this.diabetes.push({
      id:3,
      label:"Madre",
      value:0,
      isSelected:false
    });
    this.diabetes.push({
      id:4,
      label:"Hermano",
      value:0,
      isSelected:false
    });
    this.diabetes.push({
      id:5,
      label:"Hijo",
      value:0,
      isSelected:false
    });
  }

  processSelectedOption(familyAntecedent:AppAntecedenteFamilia){
    let index=this.diabetes.findIndex(x=>x.label==familyAntecedent.nombre);
    if(index!=-1){
      this.diabetes[index].isSelected=familyAntecedent.diabetes!=-1?true:false;
      this.diabetes[index].value=this.diabetes[index].isSelected?familyAntecedent.diabetes:-1
    }
    
  }

  changeOptionValue(op:DiabetesSection){
    let index=this.diabetes.findIndex(x=>x.id==op.id)
    this.diabetes[index]=op;
    this.diabetes[index].value=this.diabetes[index].isSelected?op.value:-1;
    this.dataEvent.emit(this.diabetes);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppAntecedenteFamilia, MedicalBackground } from 'src/app/medical-consultations/interfaces/medical-background.interface';
import { WaitingRoomService } from 'src/app/medical-consultations/services/waiting-room.service';
import { DropdownOption } from 'src/app/shared/interfaces/dropdown-options.interface';
import { CancerSection } from '../../../../interfaces/cancer-section.interface';

@Component({
  selector: 'app-cancer-section',
  templateUrl: './cancer-section.component.html',
  styleUrls: ['./cancer-section.component.css']
})
export class CancerSectionComponent {
  @Output()
  dataCancerEvent = new EventEmitter<CancerSection[]>();
  medicalBackground?: MedicalBackground;

  @Input() set setMedicalBackground(medicalBackground: MedicalBackground | undefined) {
    this.medicalBackground = medicalBackground as MedicalBackground;

    if (!this.medicalBackground) {
      return;
    }


    this.medicalBackground.app_antecedente_familia.forEach(element => {
      this.processSelectedOption(element);
    });

  }
  familyCancerSelected: CancerSection[] = [];
  familyCancer: CancerSection[] = [
    {
      id: 1,
      label: "Abuelo",
      isSelected: false,
      value: ''
    },
    {
      id: 2,
      label: "Padre",
      isSelected: false,
      value: ''
    },
    {
      id: 3,
      label: "Madre",
      isSelected: false,
      value: ''
    },
    {
      id: 4,
      label: "Hermano",
      isSelected: false,
      value: ''
    },
    {
      id: 5,
      label: "Hijo",
      isSelected: false,
      value: ''
    }
  ];

  optionsCancer: DropdownOption[] = [];

    constructor(private waitingRoomService:WaitingRoomService) { 
      waitingRoomService.cancer.forEach(element=>{
        this.optionsCancer.push({
          id:Number(element.id),
          name:element.descripcion
        })
      })
    }

  dataCancer(data: CancerSection) {

    let index = this.familyCancer.findIndex(x => x.id == data.id)
    if(data.value.name){
      this.familyCancer[index].value = data.value.name as string;
    }else{
      this.familyCancer[index].value = data.value as string;
    }
    
    this.dataCancerEvent.emit(this.familyCancer);
  }

  processSelectedOption(familyAntecedent: AppAntecedenteFamilia) {

    let index = this.familyCancer.findIndex(
      x => x.label.toLowerCase() == familyAntecedent.nombre.toLowerCase() &&
      familyAntecedent.cancer.length!=0
      );

    if(index!=-1){
      this.familyCancer[index].isSelected=true;
      this.familyCancer[index].value = familyAntecedent.cancer;
      this.familyCancerSelected.push(this.familyCancer[index]);
    }

  }


  getDropdownOptionSelected(item:CancerSection):DropdownOption | boolean{

    try {
     
      let index = this.optionsCancer.findIndex(
        x => item.value.length!=0 && x.name.toLowerCase() == item.value.toLowerCase() 
      );
  
        if(index===-1){
          return false;
        }

      return this.optionsCancer[index];
    } catch (error) {
      return false;
    }

   


  }

}

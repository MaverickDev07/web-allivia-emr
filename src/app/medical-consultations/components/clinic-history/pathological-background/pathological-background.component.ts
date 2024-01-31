import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MedicalBackground } from 'src/app/medical-consultations/interfaces/medical-background.interface';
import { Option } from 'src/app/medical-consultations/interfaces/options.interface';
import { DropdownOption } from 'src/app/shared/interfaces/dropdown-options.interface';
import { PathologicalAntecedents } from '../../../interfaces/pathological-antecedents.interface';

@Component({
  selector: 'app-pathological-background',
  templateUrl: './pathological-background.component.html',
})
export class PathologicalBackgroundComponent   {

  @Output()
  dataEvent = new EventEmitter<PathologicalAntecedents>();

  date!:string;
  gender:string="M";
  diseases: Option[]=[];
  diseasesSelected: Option[]=[];
  surgeries: Option[]=[];
  surgeriesSelected: Option[]=[];
  vaccines: Option[]=[];
  vaccinesSelected: Option[]=[];
  allergies: Option[]=[];
  allergiesSelected: Option[]=[];
  medicalBackground?:MedicalBackground;
  data!:PathologicalAntecedents;



  @Input() set setDiseases(diseases: Option[] | undefined) {
    this.diseases=diseases as Option[];
  } 
 
  @Input() set setSurgeries(surgeries: Option[] | undefined) {
    this.surgeries=surgeries as Option[];
  } 
 
  @Input() set setVaccines(vaccines: Option[] | undefined) {
    this.vaccines=vaccines as Option[];
  } 

  @Input() set setAllergies(allergies: Option[] | undefined) {
    this.allergies=allergies as Option[];
  } 

  @Input() set setMedicalBackground(medicalBackground: MedicalBackground| undefined) {
    this.medicalBackground=medicalBackground as MedicalBackground;
    
    if(!this.medicalBackground){
      return;
    }

    this.gender=this.medicalBackground.genero;
    this.date=this.medicalBackground.fecha_nacimiento.toString();

    this.medicalBackground.app_antecedente_alergia.forEach(element => {
      this.allergiesSelected.push({
        id:element.id_alergia,
        descripcion: this.allergies.filter((x=>x.id==element.id_alergia))[0].descripcion
      });
    });

    this.medicalBackground.app_antecedente_cirugia.forEach(element => {
      this.surgeriesSelected.push({
        id:element.id_cirugia,
        descripcion: this.surgeries.filter((x=>x.id==element.id_cirugia))[0].descripcion
      });
    });


    this.medicalBackground.app_antecedente_vacunas.forEach(element => {
      this.vaccinesSelected.push({
        id:element.id_vacuna,
        descripcion: this.vaccines.filter((x=>x.id==element.id_vacuna))[0].descripcion
      });
    });

  
    this.medicalBackground.app_antecedente_enfermedad_bases.forEach(element => {
      this.diseasesSelected.push({
        id:element.id_enfermedad_base,
        descripcion: this.diseases.filter((x=>x.id==element.id_enfermedad_base))[0].descripcion
      });
    });

  } 

  constructor() { 

  }
  

  


  ngOnInit(): void {

  }

  changeDate(){
    this.setData();
    this.dataEvent.emit(this.data);
  }

  changeGender(gender:string){
    this.gender=gender;
    this.setData();
    this.dataEvent.emit(this.data);
  }

 
  diseasesSelectedEvent(options:Option[]){
    this.diseasesSelected=options;
    this.setData();
    this.dataEvent.emit(this.data);
  }

  surgeriesSelectedEvent(options:Option[]){
    this.surgeriesSelected=options;
    this.setData();
    this.dataEvent.emit(this.data);
  }

  vaccinesSelectedEvent(options:Option[]){
    this.vaccinesSelected=options;
    this.setData();
    this.dataEvent.emit(this.data);
  }

  allergiesSelectedEvent(options:Option[]){
    this.allergiesSelected=options;
    this.setData();
    this.dataEvent.emit(this.data);
  }

  setData(){
     this.data={
      date:this.date,
      gender:this.gender,
      allergiesSelected:this.allergiesSelected,
      diseasesSelected:this.diseasesSelected,
      surgeriesSelected:this.surgeriesSelected,
      vaccinesSelected:this.vaccinesSelected
    }
  }


}

import { Component, EventEmitter, Inject, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { DropdownOption } from 'src/app/shared/interfaces/dropdown-options.interface';
import { CancerSection } from '../../interfaces/cancer-section.interface';
import { DiabetesSection } from '../../interfaces/diabetes-section.interfaces';
import { HeartDiseases } from '../../interfaces/heart-diseases.interface';
import { PathologicalAntecedents } from '../../interfaces/pathological-antecedents.interface';
import { SocialAntecedent } from '../../interfaces/social-antecedent.interface';
import { Hypertension } from '../../interfaces/hypertension-section.interface';
import { ClinicHistory } from '../../interfaces/clinic-history.interface';
import { WaitingRoomService } from '../../services/waiting-room.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppAntecedenteAlergia, AppAntecedenteCirugia, AppAntecedenteEnfermedadBasis, AppAntecedenteFamilia, AppAntecedenteVacuna, MedicalBackground } from '../../interfaces/medical-background.interface';
import { Option } from '../../interfaces/options.interface';
import { DOCUMENT } from '@angular/common';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
  selector: 'app-clinic-history',
  templateUrl: './clinic-history.component.html',
  styleUrls: ['./clinic-history.component.css'],

})
export class ClinicHistoryComponent implements OnInit, OnDestroy {
  defaultOption: Option = {
    id: "-1",
    descripcion: "",
    eliminado: false,
  };

  medicalBackground?: MedicalBackground;
  vaccineOptions?: Option[];
  allergyOptions?: Option[];
  surgeriesOptions?: Option[];
  baseDisease?: Option[];
  familybackgroundDefault:AppAntecedenteFamilia[]=[
    {
      nombre:"Abuelo",
      hipertension:false,
      enfemedad_corazon:false,
      cancer:"",
      diabetes:-1,
      id_antecedente_medico:"-1",
      nuevo_valor_cancer:false
    },
    {
      nombre:"Padre",
      hipertension:false,
      enfemedad_corazon:false,
      cancer:"",
      diabetes:-1,
      id_antecedente_medico:"-1",
      nuevo_valor_cancer:false
    },
    {
      nombre:"Madre",
      hipertension:false,
      enfemedad_corazon:false,
      cancer:"",
      diabetes:-1,
      id_antecedente_medico:"-1",
      nuevo_valor_cancer:false
    },
    {
      nombre:"Hermano",
      hipertension:false,
      enfemedad_corazon:false,
      cancer:"",
      diabetes:-1,
      id_antecedente_medico:"-1",
      nuevo_valor_cancer:false
    },
    {
      nombre:"Hijo",
      hipertension:false,
      enfemedad_corazon:false,
      cancer:"",
      diabetes:-1,
      id_antecedente_medico:"-1",
      nuevo_valor_cancer:false
    }
  ];


  
  private ngUnsubscribe = new Subject();
  @Output()
  closePopupEvent = new EventEmitter<MedicalBackground>();
  constructor(@Inject(DOCUMENT) private _document: HTMLDocument, private waitingRoomService: WaitingRoomService, private route: ActivatedRoute) {

  }



  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const id_agenda=this.route.snapshot.paramMap.get('id_agenda');
    this.waitingRoomService.clinicHistoryRequest(Number(id),Number(id_agenda));
    this.waitingRoomService.onClinicHistoryData().
      pipe(takeUntil(this.ngUnsubscribe)
      ).subscribe((data: any) => {

        try {


          this.vaccineOptions = [this.defaultOption].concat(data.vaccines as Option[]);
          this.allergyOptions = [this.defaultOption].concat(data.allergies as Option[]);
          this.surgeriesOptions = [this.defaultOption].concat(data.surgeries as Option[]);
          this.baseDisease = [this.defaultOption].concat(data.baseDisease as Option[]);
          this.medicalBackground = data.medicalBackground as MedicalBackground;
          this.medicalBackground!.nuevas_alergias = [];
          this.medicalBackground!.nuevas_cirugia = [];
          this.medicalBackground!.nuevas_enfermedad_bases = [];
          this.medicalBackground!.nuevas_vacunas =[];

          this.familybackgroundDefault.forEach((element,index)=>{
            this.familybackgroundDefault[index].id_antecedente_medico=this.medicalBackground!.id;
          });

          if(this.medicalBackground.app_antecedente_familia.length===0){
            this.medicalBackground.app_antecedente_familia=this.familybackgroundDefault;
          }else{
            this.medicalBackground.app_antecedente_familia.forEach((element,index) => {
              this.medicalBackground!.app_antecedente_familia[index].nuevo_valor_cancer=false;
            });
          }

        } catch (error) {
          console.log(error);
        }

      });
  }

  closeDialog() {
    this.waitingRoomService.medicalBackgroundUpdate(this.medicalBackground as MedicalBackground);
    this.closePopupEvent.emit(this.medicalBackground);
  }



  dataPathologicalAntecedents(dataEvent: PathologicalAntecedents) {

    let allergies: AppAntecedenteAlergia[] = [];
    let vaccines: AppAntecedenteVacuna[] = [];
    let baseDisease: AppAntecedenteEnfermedadBasis[] = [];
    let surgeries: AppAntecedenteCirugia[] = [];

    //here process new base diseases
    let baseDiseasesNew: any[] = [];
    let allergiesNew: any[] = [];
    let vaccinesNew: any[] = [];
    let surgeriesNew: any[] = [];
    const id = this.route.snapshot.paramMap.get('id');



    dataEvent.allergiesSelected.forEach(element => {


      if (element.id === "-1") {
        allergiesNew.push({
          descripcion: element.descripcion,
          eliminado:false
        });
      } else {
        allergies.push({
          id_alergia: element.id,
          id_antecedente_medico: id as string
        });
      }

    });

    dataEvent.vaccinesSelected.forEach(element => {


      if (element.id === "-1") {
        vaccinesNew.push({
          descripcion: element.descripcion,
          eliminado:false
        });
      } else {
        vaccines.push({
          id_vacuna: element.id,
          id_antecedente_medico: id as string
        });
      }


    });

    dataEvent.diseasesSelected.forEach(element => {

      if (element.id === "-1") {
        baseDiseasesNew.push({
          descripcion: element.descripcion,
          eliminado:false
        });
      } else {
        baseDisease.push({
          id_enfermedad_base: element.id,
          id_antecedente_medico: id as string
        });
      }


    });

    dataEvent.surgeriesSelected.forEach(element => {


      if (element.id === "-1") {
        surgeriesNew.push({
          descripcion: element.descripcion,
          eliminado:false
        });
      } else {
        surgeries.push({
          id_cirugia: element.id,
          id_antecedente_medico: id as string
        });
      }


    });

  
    //clear all input p-dropdown editable
    var inputs: any[] = this._document.querySelectorAll('.p-dropdown-label') as any;
    inputs.forEach(element => {
      element.value = "";
    });

    this.medicalBackground!.nuevas_alergias = allergiesNew;
    this.medicalBackground!.nuevas_cirugia = surgeriesNew;
    this.medicalBackground!.nuevas_enfermedad_bases = baseDiseasesNew;
    this.medicalBackground!.nuevas_vacunas = vaccinesNew;
    this.medicalBackground!.genero = dataEvent.gender;
    this.medicalBackground!.fecha_nacimiento = dataEvent.date;
    this.medicalBackground!.app_antecedente_alergia = allergies as AppAntecedenteAlergia[];
    this.medicalBackground!.app_antecedente_vacunas = vaccines as AppAntecedenteVacuna[];
    this.medicalBackground!.app_antecedente_enfermedad_bases = baseDisease as AppAntecedenteEnfermedadBasis[];
    this.medicalBackground!.app_antecedente_cirugia = surgeries as AppAntecedenteCirugia[];
  }




  dataSocialAntecedents(dataEvent: SocialAntecedent[]) {

    this.medicalBackground!.fuma = dataEvent[0].value;
    this.medicalBackground!.alcohol = dataEvent[1].value;
    this.medicalBackground!.cafeina = dataEvent[2].value;
    this.medicalBackground!.ejercicio = dataEvent[3].value;
    this.medicalBackground!.drogas = dataEvent[4].value;
  }

  dataDiabetesSection(dataEvent: DiabetesSection[]) {

    dataEvent.forEach(element => {

      const index = this.medicalBackground?.app_antecedente_familia.findIndex(
        x => x.nombre.toLowerCase() === element.label.toLowerCase()
      );

      if (index != undefined && index != -1) {
        this.medicalBackground!.app_antecedente_familia[index].diabetes = element.isSelected ? element.value : -1;
      }



    });



  }

  dataCancerSection(dataEvent: CancerSection[]) {
  
    dataEvent.forEach(element => {

      const index = this.medicalBackground?.app_antecedente_familia.findIndex(
        x => x.nombre.toLowerCase() === element.label.toLowerCase()
      );

      if (index != undefined && index != -1) {
        this.medicalBackground!.app_antecedente_familia[index].cancer = element.isSelected ? element.value : '';
      }

    });

    console.log(this.medicalBackground);
  }

  dataHeart(dataEvent: HeartDiseases) {


    this.medicalBackground?.app_antecedente_familia.forEach((element, index) => {

      if (element.nombre === 'Abuelo') {
        this.medicalBackground!.app_antecedente_familia[index].enfemedad_corazon = dataEvent.grandfather;
      }

      if (element.nombre === 'Padre') {
        this.medicalBackground!.app_antecedente_familia[index].enfemedad_corazon = dataEvent.father;
      }

      if (element.nombre === 'Madre') {
        this.medicalBackground!.app_antecedente_familia[index].enfemedad_corazon = dataEvent.mother;
      }

      if (element.nombre === 'Hermano') {
        this.medicalBackground!.app_antecedente_familia[index].enfemedad_corazon = dataEvent.brother;
      }

      if (element.nombre === 'Hijo') {
        this.medicalBackground!.app_antecedente_familia[index].enfemedad_corazon = dataEvent.son;
      }


    });



  }

  dataHypertension(dataEvent: Hypertension) {

    this.medicalBackground?.app_antecedente_familia.forEach((element, index) => {

      if (element.nombre === 'Abuelo') {
        this.medicalBackground!.app_antecedente_familia[index].hipertension = dataEvent.grandfather;
      }

      if (element.nombre === 'Padre') {
        this.medicalBackground!.app_antecedente_familia[index].hipertension = dataEvent.father;
      }

      if (element.nombre === 'Madre') {
        this.medicalBackground!.app_antecedente_familia[index].hipertension = dataEvent.mother;
      }

      if (element.nombre === 'Hermano') {
        this.medicalBackground!.app_antecedente_familia[index].hipertension = dataEvent.brother;
      }

      if (element.nombre === 'Hijo') {
        this.medicalBackground!.app_antecedente_familia[index].hipertension = dataEvent.son;
      }


    });

  }

}

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Conclusions } from '../../interfaces/conclusions.interface';
import { GoalsSelected, Objetivos } from '../../interfaces/medical-background.interface';
import { WaitingRoomService } from '../../services/waiting-room.service';

@Component({
  selector: 'app-conclusions',
  templateUrl: './conclusions.component.html',
  styleUrls: ['./conclusions.component.css']
})
export class ConclusionsComponent implements OnInit {
  @Output()
  closePopupEvent = new EventEmitter<Conclusions>();

  healthy:boolean=true;
  ill:boolean=false;
  risk:boolean=false;
  critical:boolean=false;


  sugarGoal:boolean=false;
  fatGoal:boolean=false;
  alcoholGoal:boolean=false;
  smokeGoal:boolean=false;

  customGoals:Objetivos[]=this.waitingRoomService.objetivos as Objetivos[];
  selectedGoals:GoalsSelected[]=this.waitingRoomService.objetivosSeleccionados as GoalsSelected[];
  selectedOption?:GoalsSelected
  text:string = "";
  state:string = this.waitingRoomService.state as string;
  
  constructor(private waitingRoomService:WaitingRoomService) { }
  ngOnInit(): void {
    this.changeRadio(this.waitingRoomService.state);
  }

  closeDialog() {

  
    this.closePopupEvent.emit({
      healthy:this.healthy,
      ill:this.ill,
      risk:this.risk,
      critical:this.critical,
      sugarGoal:this.sugarGoal,
      fatGoal:this.fatGoal,
      alcoholGoal:this.alcoholGoal,
      smokeGoal:this.smokeGoal,
    });
  }

  onChange(event:any){

    this.selectedGoals.push({
      app_objetivo:event.value,
      creado:new Date(),
      modificado:new Date(),
      estado:"Pendiente",
      id_objetivo:event.value.id,
      id_paciente:this.waitingRoomService.medicalBackground!.id_paciente
    });
  }

  changeRadio(state:string){
    this.waitingRoomService.state=state;
    this.healthy=false;
    this.ill=false;
    this.risk=false;
    this.critical=false;

    switch(state) { 
      case 'Sano': { 
        this.healthy=true;
         break; 
      } 
      case  'Enfermo': { 
        this.ill=true;
         break; 
      } 
      case  'Riesgo': { 
        this.risk=true;
        break; 
     } 
     case  'Critico': { 
      this.critical=true;
      break; 
   } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }

 

  addGoal(){

    if(this.text.length==0){
      return;
    }

    this.customGoals.push({
      objetivo:this.text,
      estado:"Visible"
    });

/*    this.selectedGoals.push({
      app_objetivo:{
        objetivo:this.text,
        estado:"Visible"
      }
      objetivo:this.text,
      estado:"Visible"
    });*/

    this.text='';
  }

  changeCustomGoals(index:number){
   this.selectedGoals[index].estado= this.selectedGoals[index].estado==='Completado'?'Pendiente':'Completado';
  }


  deleteGoal(index:number){
    this.selectedGoals.splice(index, 1);
  }

}

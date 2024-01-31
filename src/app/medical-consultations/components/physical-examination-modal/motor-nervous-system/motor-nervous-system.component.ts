import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhysicalTestOption } from 'src/app/medical-consultations/interfaces/physical-test.interface';
import sectionsJson from "./motor-nerveous-system.json";
import { PhysicalTest } from '../../../interfaces/physical-test.interface';
import { WaitingRoomService } from 'src/app/medical-consultations/services/waiting-room.service';

@Component({
  selector: 'app-motor-nervous-system',
  templateUrl: './motor-nervous-system.component.html',
  styleUrls: ['./motor-nervous-system.component.css']
})
export class MotorNervousSystemComponent implements OnInit{
  @Output()
  dataSectionOptions = new EventEmitter<PhysicalTest>();
  sectionsOptions:any[]=sectionsJson;
  text:string='';
  constructor(private waitingRoomService:WaitingRoomService) { }

  ngOnInit(): void {
 try {
  const options=this.waitingRoomService.medicalBackground!.sistema_nervioso_motor.options as PhysicalTestOption[];
  options.forEach((element,index)=>{
    this.sectionsOptions[index].isSelected=element.isSelected;
  });
  this.text=this.waitingRoomService.medicalBackground!.sistema_nervioso_motor.text;
 } catch (error) {
   
 }
  }

  updateSections(value:boolean,indexData:number){
    let index=this.sectionsOptions.findIndex(x=>x.id==indexData)
    this.sectionsOptions[index].isSelected=value;
    this.dataSectionOptions.emit({
      text:this.text,
      options:this.sectionsOptions});
  }

  updateTxt(){
    this.dataSectionOptions.emit({
      text:  this.text,
      options:this.sectionsOptions
    });
  }
}

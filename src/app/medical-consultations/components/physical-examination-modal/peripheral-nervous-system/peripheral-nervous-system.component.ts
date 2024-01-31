import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhysicalTestOption } from 'src/app/medical-consultations/interfaces/physical-test.interface';
import sectionsJson from "./peripheral-nervous-system.json";
import { PhysicalTest } from '../../../interfaces/physical-test.interface';
import { WaitingRoomService } from 'src/app/medical-consultations/services/waiting-room.service';
@Component({
  selector: 'app-peripheral-nervous-system',
  templateUrl: './peripheral-nervous-system.component.html',
  styleUrls: ['./peripheral-nervous-system.component.css']
})
export class PeripheralNervousSystemComponent implements OnInit {
  @Output()
  dataSectionOptions = new EventEmitter<PhysicalTest>();
  sectionsOptions:any[]=sectionsJson;
  text:string='';
  constructor(private waitingRoomService:WaitingRoomService) { }

  ngOnInit(): void {
   try {
    const options=this.waitingRoomService.medicalBackground!.sistema_nervioso_perfiferico.options as PhysicalTestOption[];
    options.forEach((element,index)=>{
      this.sectionsOptions[index].isSelected=element.isSelected;
    });
    this.text=this.waitingRoomService.medicalBackground!.sistema_nervioso_perfiferico.text;
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

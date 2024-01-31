import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhysicalTest, PhysicalTestOption } from 'src/app/medical-consultations/interfaces/physical-test.interface';
import { WaitingRoomService } from 'src/app/medical-consultations/services/waiting-room.service';
import sectionsJson from "./extermities.json";
@Component({
  selector: 'app-extremities',
  templateUrl: './extremities.component.html',
  styleUrls: ['./extremities.component.css']
})
export class ExtremitiesComponent implements OnInit {

  @Output()
  dataSectionOptions = new EventEmitter<PhysicalTest>();
  sectionsOptions:any[]=sectionsJson;
  text:string='';
  constructor(private waitingRoomService:WaitingRoomService) { }

  ngOnInit(): void {
    try {
      const options=this.waitingRoomService.medicalBackground!.extremidades.options as PhysicalTestOption[];
      options.forEach((element,index)=>{
        this.sectionsOptions[index].isSelected=element.isSelected;
      });
      this.text=this.waitingRoomService.medicalBackground!.extremidades.text;
    } catch (error) {
      
    }

  }

  updateSections(value:boolean,indexData:number){
    let index=this.sectionsOptions.findIndex(x=>x.id==indexData)
    this.sectionsOptions[index].isSelected=value;
    this.dataSectionOptions.emit({
      text:this.text,
      options: this.sectionsOptions
    });
  }

  updateTxt(){
    this.dataSectionOptions.emit({
      text:  this.text,
      options:this.sectionsOptions
    });
  }

}

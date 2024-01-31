import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhysicalTest, PhysicalTestOption } from 'src/app/medical-consultations/interfaces/physical-test.interface';
import { WaitingRoomService } from 'src/app/medical-consultations/services/waiting-room.service';
import sectionsThorax from "./thorax.json";
@Component({
  selector: 'app-anterior-thorax',
  templateUrl: './anterior-thorax.component.html',
  styleUrls: ['./anterior-thorax.component.css']
})
export class AnteriorThoraxComponent implements OnInit  {
  @Output()
  dataSectionOptions = new EventEmitter<PhysicalTest>();
  sectionsOptions:PhysicalTestOption[]=sectionsThorax;
  text:string = "";
  constructor(private waitingRoomService:WaitingRoomService) { }

  ngOnInit(): void {
    try {
      const options=this.waitingRoomService.medicalBackground!.torax_anterior.options as PhysicalTestOption[];
      options.forEach((element,index)=>{
      this.sectionsOptions[index].isSelected=element.isSelected;
      this.text=this.waitingRoomService.medicalBackground!.torax_anterior.text;
    });
    } catch (error) {
      
    }
    
  }

  updateSections(value:boolean,indexData:number){
    let index=this.sectionsOptions.findIndex(x=>x.id==indexData)
    this.sectionsOptions[index].isSelected=value;
    this.dataSectionOptions.emit({
      text:this.text,
      options:this.sectionsOptions
    });
  }

  updateTxt(){
    this.dataSectionOptions.emit({
      text:  this.text,
      options:this.sectionsOptions
    });
  }

}

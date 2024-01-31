import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhysicalTest, PhysicalTestOption } from 'src/app/medical-consultations/interfaces/physical-test.interface';
import { WaitingRoomService } from 'src/app/medical-consultations/services/waiting-room.service';
import sectionsNeck from "./neck.json";
@Component({
  selector: 'app-neck',
  templateUrl: './neck.component.html',
  styleUrls: ['./neck.component.css']
})
export class NeckComponent implements OnInit {
  @Output()
  dataSectionsNeckOptions = new EventEmitter<PhysicalTest>();
  sectionsNeckOptions:PhysicalTestOption[]=sectionsNeck;
  text:string = "";
  constructor(private waitingRoomService:WaitingRoomService) {
   
  }

  ngOnInit(): void {
    try {
      const options=this.waitingRoomService.medicalBackground!.cuello.options as PhysicalTestOption[];
      options.forEach((element,index)=>{
      this.sectionsNeckOptions[index].isSelected=element.isSelected;
      this.text=this.waitingRoomService.medicalBackground!.cuello.text;
    });
    } catch (error) {
      
    }
  }

  updateSectionsNeck(value:boolean,indexData:number){
    let index=this.sectionsNeckOptions.findIndex(x=>x.id==indexData)
    this.sectionsNeckOptions[index].isSelected=value;
    this.dataSectionsNeckOptions.emit({
      text:this.text,
      options: this.sectionsNeckOptions
    });
  }


  updateTxt(){
    this.dataSectionsNeckOptions.emit({
      text:  this.text,
      options:this.sectionsNeckOptions
    });
  }

}

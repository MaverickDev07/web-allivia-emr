import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhysicalTestOption } from 'src/app/medical-consultations/interfaces/physical-test.interface';
import sectionsAbdomen from "./abdomen.json";
import { PhysicalTest } from '../../../interfaces/physical-test.interface';
import { WaitingRoomService } from 'src/app/medical-consultations/services/waiting-room.service';
@Component({
  selector: 'app-abdomen',
  templateUrl: './abdomen.component.html',
  styleUrls: ['./abdomen.component.css']
})
export class AbdomenComponent implements OnInit {
  @Output()
  dataSectionOptions = new EventEmitter<PhysicalTest>();
  sectionsOptions:any[]=sectionsAbdomen;
  text:string='';
  constructor(private waitingRoomService:WaitingRoomService) { }

  ngOnInit(): void {
    try {
      const options=this.waitingRoomService.medicalBackground!.abdomen.options as PhysicalTestOption[];
      options.forEach((element,index)=>{
        this.sectionsOptions[index].isSelected=element.isSelected;
      });
      this.text=this.waitingRoomService.medicalBackground!.abdomen.text;
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

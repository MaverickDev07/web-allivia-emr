import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhysicalTest, PhysicalTestOption } from 'src/app/medical-consultations/interfaces/physical-test.interface';
import { WaitingRoomService } from 'src/app/medical-consultations/services/waiting-room.service';
import configMinimalTest from "./minimalTest.json";
import sectionsHead from "./sections.head.json";
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Output()
  dataSectionsHeadOptions = new EventEmitter<PhysicalTest>();
  @Output()
  dataSectionsMinimalTest = new EventEmitter<PhysicalTest>();

  constructor(private waitingRoomService:WaitingRoomService) {
   
  }

  ngOnInit(): void {
    try {
 
    this.text=this.waitingRoomService.medicalBackground!.cabeza.text;
    const miniMentalTest=this.waitingRoomService.medicalBackground!.mini_mental_test.options as PhysicalTestOption[];
    const head=this.waitingRoomService.medicalBackground!.cabeza.options as PhysicalTestOption[];
 

    miniMentalTest.forEach((element,index)=>{
      this.minimalTest[index].isSelected=element.isSelected;
    });
    head.forEach((element,index)=>{
      this.sectionsHeadOptions[index].isSelected=element.isSelected;
    });
    } catch (error) {
      console.log(error);
    }
    
  }

  timeOrientation:boolean=false;
  minimalTest:PhysicalTestOption[]=configMinimalTest;
  sectionsHeadOptions:PhysicalTestOption[]=sectionsHead;
  text:string = "";

  updateValue(value:boolean,indexData:number){
    let index=this.minimalTest.findIndex(x=>x.id==indexData)
    this.minimalTest[index].isSelected=value;
    this.dataSectionsMinimalTest.emit({
      text:  this.text,
      options:this.minimalTest
    });
  }
 
  updateSectionsHead(value:boolean,indexData:number){
    let index=this.sectionsHeadOptions.findIndex(x=>x.id==indexData)
    this.sectionsHeadOptions[index].isSelected=value;
    this.dataSectionsHeadOptions.emit({
      text:  this.text,
      options:this.sectionsHeadOptions
    });
  }

  updateTxt(){
    this.dataSectionsHeadOptions.emit({
      text:  this.text,
      options:this.sectionsHeadOptions
    });
  }

}

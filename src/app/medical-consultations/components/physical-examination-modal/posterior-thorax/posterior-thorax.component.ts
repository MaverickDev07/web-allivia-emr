import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhysicalTestOption } from 'src/app/medical-consultations/interfaces/physical-test.interface';
import sectionsThorax from "./thorax.json";
import { PhysicalTest } from '../../../interfaces/physical-test.interface';
import { WaitingRoomService } from 'src/app/medical-consultations/services/waiting-room.service';
@Component({
  selector: 'app-posterior-thorax',
  templateUrl: './posterior-thorax.component.html',
  styleUrls: ['./posterior-thorax.component.css']
})
export class PosteriorThoraxComponent implements OnInit {
  @Output()
  dataSectionOptions = new EventEmitter<PhysicalTest>();
  sectionsOptions:any[]=sectionsThorax;
  text:string='';
  constructor(private waitingRoomService:WaitingRoomService) { }

  ngOnInit(): void {
    try {
      const options=this.waitingRoomService.medicalBackground!.torax_posterior.options as PhysicalTestOption[];
    options.forEach((element,index)=>{
      this.sectionsOptions[index].isSelected=element.isSelected;
    });
    this.text=this.waitingRoomService.medicalBackground!.torax_posterior.text;
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

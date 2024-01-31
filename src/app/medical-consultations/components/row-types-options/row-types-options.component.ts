import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiabetesSection } from '../../interfaces/diabetes-section.interfaces';

@Component({
  selector: 'app-row-types-options',
  templateUrl: './row-types-options.component.html',
  styleUrls: ['./row-types-options.component.css']
})
export class RowTypesOptionsComponent implements OnInit  {

  constructor() { }

  ngOnInit(): void {
   if(!this.data.isSelected){
     this.data.value=-1;
   }
  }

  @Input() data!:DiabetesSection;
  @Output()
  dataEvent = new EventEmitter<DiabetesSection>();
  changeType(op:number){
    this.data.value=op;
    this.dataEvent.emit(this.data);
  }

  changeSelected(){
    this.data.isSelected=!this.data.isSelected;
    this.dataEvent.emit(this.data);
  }

}

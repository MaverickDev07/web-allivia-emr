import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
})
export class CheckComponent  {

  @Input()   label!:string;
  @Input()   isSelected:boolean=true;
  @Input()   leftDesignLabel:boolean=false;
  @Output()  eventEmitter= new EventEmitter<boolean>();
  constructor() { }

  selected(){
    this.isSelected=true;
    this.eventEmitter.emit(this.isSelected);
  }
  
  deselected(){
    this.isSelected=false;
    this.eventEmitter.emit(this.isSelected);
  }

}

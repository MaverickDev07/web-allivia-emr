import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SocialAntecedent } from '../../interfaces/social-antecedent.interface';

@Component({
  selector: 'app-row-options',
  templateUrl: './row-options.component.html',
})
export class RowOptionsComponent  {

  @Output()
  dataEvent = new EventEmitter<SocialAntecedent>();

  @Input() object!:SocialAntecedent;
  constructor() {
   }

  changeOption(op:number){
    this.object.value=op;
    this.dataEvent.emit(this.object);
  }

}

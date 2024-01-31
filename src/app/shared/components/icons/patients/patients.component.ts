import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients-icon',
  templateUrl: './patients.component.html',
 
})
export class PatientsComponent  {
  @Input() fillIcon!: string;
  @Input() fillFont!: string;
  @Input() fontSize!: string;
  @Input() width!: string;
  @Input() heigth!: string;
  @Input() isActive!: boolean;
  constructor() { }

  

}

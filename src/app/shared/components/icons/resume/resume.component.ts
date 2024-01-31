import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',

})
export class ResumeComponent  {

  @Input() fillIcon!: string;
  @Input() fillFont!: string;
  @Input() fontSize!: string;
  @Input() width!:    string;
  @Input() heigth!:   string;
  @Input() isActive!: boolean;
  constructor() {
  
   }


 

}

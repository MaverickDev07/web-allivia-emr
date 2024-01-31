import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-icon',
  templateUrl: './payments.component.html',

})
export class PaymentsComponent  {
  @Input() fillIcon!: string;
  @Input() fillFont!: string;
  @Input() fontSize!: string;
  @Input() width!: string;
  @Input() heigth!: string;
  @Input() isActive!: boolean;
  constructor() { }

 

}

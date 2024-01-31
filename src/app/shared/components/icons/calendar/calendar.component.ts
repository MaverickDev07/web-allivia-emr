import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-icon',
  templateUrl: './calendar.component.html',
  
})
export class CalendarComponent  {
  @Input() fillIcon!: string;
  @Input() fillFont!: string;
  @Input() fontSize!: string;
  @Input() width!: string;
  @Input() heigth!: string;
  @Input() isActive!: boolean;
  constructor() { }

}

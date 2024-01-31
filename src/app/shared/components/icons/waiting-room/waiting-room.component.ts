import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-room-icon',
  templateUrl: './waiting-room.component.html',
  
})
export class WaitingRoomComponent  {
  @Input() fillIcon!: string;
  @Input() fillFont!: string;
  @Input() fontSize!: string;
  @Input() width!: string;
  @Input() heigth!: string;
  @Input() isActive!: boolean;
  constructor() { }


}

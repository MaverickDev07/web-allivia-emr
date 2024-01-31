import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-chat-icon',
  templateUrl: './doctor-chat.component.html',
  
})
export class DoctorChatComponent  {
  @Input() fillIcon!: string;
  @Input() fillFont!: string;
  @Input() fontSize!: string;
  @Input() width!: string;
  @Input() heigth!: string;
  @Input() isActive!: boolean;
  constructor() { }


}

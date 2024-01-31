import { Component, Input, OnInit, Type } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent  {

  constructor() { }
  @Input() contentHeader!: Type<any>;
  @Input() contentBody!: Type<any>;
 

}

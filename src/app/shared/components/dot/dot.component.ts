import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
})
export class DotComponent {

  @Input()
  isSelected:boolean=false;
  constructor() { }

 

}

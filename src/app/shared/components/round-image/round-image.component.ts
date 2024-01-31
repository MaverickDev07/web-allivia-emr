import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-image',
  templateUrl: './round-image.component.html',
  styleUrls: ['./round-image.component.css']
})
export class RoundImageComponent {

  @Input() path!:     string;
  constructor() { }


}

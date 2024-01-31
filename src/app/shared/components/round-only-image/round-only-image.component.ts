import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-only-image',
  templateUrl: './round-only-image.component.html',
  styleUrls: ['./round-only-image.component.css']
})
export class RoundOnlyImageComponent implements OnInit {
  @Input() path!:     string;
  constructor() { }

  ngOnInit(): void {
  }

}

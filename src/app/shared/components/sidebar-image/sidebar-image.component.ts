import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-image',
  templateUrl: './sidebar-image.component.html',
  styleUrls: ['./sidebar-image.component.css']
})
export class SidebarImageComponent implements OnInit {
  @Input() path!:     string;
  constructor() { }

  ngOnInit(): void {
  }

}

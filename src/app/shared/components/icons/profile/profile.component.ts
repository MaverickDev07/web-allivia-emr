import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile.component.html',
 
})
export class ProfileComponent implements OnInit {
  @Input() fillIcon!: string;
  @Input() fillFont!: string;
  @Input() fontSize!: string;
  @Input() width!:    string;
  @Input() heigth!:   string;
  @Input() isActive!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}

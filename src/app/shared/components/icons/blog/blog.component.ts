import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-icon',
  templateUrl: './blog.component.html',
 
})
export class BlogComponent  {
  @Input() fillIcon!: string;
  @Input() fillFont!: string;
  @Input() fontSize!: string;
  @Input() width!: string;
  @Input() heigth!: string;
  @Input() isActive!: boolean;
  constructor() { }

 

}

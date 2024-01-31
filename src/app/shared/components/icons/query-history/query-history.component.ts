import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-history-icon',
  templateUrl: './query-history.component.html',
 
})
export class QueryHistoryComponent  {
  @Input() fillIcon!: string;
  @Input() fillFont!: string;
  @Input() fontSize!: string;
  @Input() width!: string;
  @Input() heigth!: string;
  @Input() isActive!: boolean;
  constructor() { }

 

}

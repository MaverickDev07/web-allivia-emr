import { Component, OnInit, Type } from '@angular/core';
import { PanelBodyComponent } from 'src/app/shared/components/panel-body/panel-body.component';
import { PanelHeaderComponent } from 'src/app/shared/components/panel-header/panel-header.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  contentComponent!: Type<any>;
  headerComponent!: Type<any>;
  constructor() {}

  ngOnInit() {
    this.contentComponent = PanelBodyComponent;
    this.headerComponent=PanelHeaderComponent;
  }

}

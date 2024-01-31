import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BadgeModule} from 'primeng/badge';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import {ToastModule} from 'primeng/toast';


import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';

import {TableModule} from 'primeng/table';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BadgeModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    DropdownModule,
    TagModule,
    ToastModule,
    TableModule,
    InputTextModule
  ],
  exports:[
    BadgeModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    DropdownModule,
    TagModule,
    ToastModule,
    TableModule,
    InputTextModule]
})
export class PrimengModule { }

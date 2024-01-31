import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg } from '@fullcalendar/angular'; // useful for typechecking
import esLocale from '@fullcalendar/core/locales/es';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WaitingRoom } from '../../interfaces/waiting-room.interface';
import {DialogService} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { CalendarService } from '../../services/calendar.service';
import { PanelWaitingRoomComponent } from '../../components/panel-waiting-room/panel-waiting-room.component';
import { PanelCalendarComponent } from '../../components/panel-calendar/panel-calendar.component';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [DialogService, MessageService]
})
export class CalendarComponent implements OnInit,OnDestroy {

  blockedDocument:boolean=true;
  events!:any[];;
  calendarOptions!: CalendarOptions;
  private ngUnsubscribe = new Subject();

  ref!: DynamicDialogRef;
  constructor(public dialogService: DialogService, public messageService: MessageService,private calendarService:CalendarService) { }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  

  ngOnInit(): void {
    

    this.blockedDocument=true;
    this.calendarService.calendarRequest();

    this.calendarService.onCalendarData().
    pipe(takeUntil(this.ngUnsubscribe)
    ).subscribe( (data:any): void => {
      this.blockedDocument=false;
      this.events=[];
      let dataCalendar=data as WaitingRoom[];
   
      dataCalendar.forEach(element => {
        this.events.push({data:element, title: element.nombre+" ("+element.tipocita+")",  start:element.fecha,end:element.fecha_fin });
      });
    
      this.calendarOptions={
       /* customButtons: {
          myCustomButton: {
            text: 'Reagendar',
            click: function() {
            
            }
          }
        },*/
        locale: esLocale,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        events: this.events,
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
      };
   });



  }


  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
  /*  const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
    
    }*/
  }

  handleEventClick(clickInfo: EventClickArg) {

    this.ref = this.dialogService.open(PanelCalendarComponent, {
      data: {
        waitingRoomData: clickInfo.event.extendedProps.data
    },
      showHeader:false, 
      width: '300px',
      height:'auto',
      contentStyle: {"overflow-x": "hidden","background-color":"#F5F6FA","border-radius":" 25px"},
      baseZIndex: 10000,
      dismissableMask: true,
  });
   
  }
  

}

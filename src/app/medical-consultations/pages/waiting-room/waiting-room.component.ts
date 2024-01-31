import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AbstractSocketComponent } from 'src/app/shared/sockets/base.socket.component';
import { WaitingRoom } from '../../interfaces/waiting-room.interface';
import { WaitingRoomService } from '../../services/waiting-room.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css']
})
export class WaitingRoomComponent  implements OnInit,OnDestroy {
  
  waitingData:WaitingRoom[]=[];  
  blockedDocument: boolean = false;
  private ngUnsubscribe = new Subject();

  constructor(private waitingRoomService:WaitingRoomService) {
   
  }

  ngOnInit(): void {

    this.blockedDocument=true;
    this.waitingRoomService.waitingRoomRequest(6);

   setTimeout(() => {
    this.blockedDocument=false;
   },10*1000);
  

   this.waitingRoomService.onWaitingRoomData().
   pipe(takeUntil(this.ngUnsubscribe)
   ).subscribe((data: any) => {
     console.log(data);
    this.waitingData=data.data as WaitingRoom[];
    this.blockedDocument=false;
  });

  }



  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}


blockUI(event:boolean){
  this.blockedDocument=event;
}


}

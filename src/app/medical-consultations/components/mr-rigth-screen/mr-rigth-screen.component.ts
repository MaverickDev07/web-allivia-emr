import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mr-rigth-screen',
  templateUrl: './mr-rigth-screen.component.html',
  styleUrls: ['./mr-rigth-screen.component.css']
})
export class MrRigthScreenComponent {

  constructor() { 
    this.startTimer();
  }

  timeLeft: number = 0;
  interval:any;
  timer: string = '0:00';

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft < 50000) {
        this.timeLeft++;
      } else {
        this.timeLeft = 60;
      }
     
      this.millisToMinutesAndSeconds(this.timeLeft * 1000);
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  millisToMinutesAndSeconds(millis:number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = (millis % 60000) / 1000;
    var secondsStr = ((millis % 60000) / 1000).toFixed(0);

    let unit:string=minutes>=1?'min':'s';

    this.timer = minutes + ':' + (seconds < 10 ? '0' : '') + secondsStr+" "+unit;
  }

}

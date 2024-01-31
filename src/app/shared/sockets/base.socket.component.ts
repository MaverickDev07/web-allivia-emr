import { Router } from "@angular/router";
import { io, Socket } from "socket.io-client";
import { environment } from "src/environments/environment.prod";

 export abstract class AbstractSocketComponent{
    socket:Socket;

    abstract eventsComponent():void;


    constructor(protected routerComponent:Router){

        if(!localStorage.getItem('token')){
            this.routerComponent.navigateByUrl('/auth');
        }

        this.socket= io(environment.serverSocket,{
            extraHeaders:{
              "x-token":localStorage.getItem('token') || "" 
            }
          });


          this.eventsComponent();



    this.socket.on("invalid-token", () => {
        this.routerComponent.navigateByUrl('/auth');
      });

    }
}
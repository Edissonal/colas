import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket:Socket) {
    
    this.CheckStatus();

   }

 public socketStatus = false;

  CheckStatus(){

    this.socket.on('connect',() =>{
       console.log('Conectado al servidor');
       this.socketStatus = true;
    });

    this.socket.on('disconnect',() =>{
      console.log('Desconectado al servidor');
      this.socketStatus = true;
   });


  }

  emit(evento:string,payload?:any,callback?:Function){

    //emitir eventos

    this.socket.emit(evento,payload,callback);
  }

  listen(evento:string){
    return this.socket.fromEvent(evento);
  }
  
}

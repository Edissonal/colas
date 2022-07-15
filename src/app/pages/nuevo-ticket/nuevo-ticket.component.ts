import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {

  constructor( private wsservice:WebsocketService ) { }
  tiket:number;
  vista:boolean = false;
  estado:boolean =true;


  ngOnInit(): void {
   
    setTimeout(() => {

      this.titket();
      
    }, 300);
  }


  titket(){

    console.log('Mensaje enviado');
    this.wsservice.emit('tiketgenerado');

    //despues del mensaje enviado
  

    this.wsservice.listen('tiket-n')
    .subscribe((res:any)=>{

      this.tiket =res;
      this.vista =true; 
      this.estado= false;
    });

  }

}

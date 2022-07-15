import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {

  vista:boolean=false;
  valor:number;
  id:number;
 /* datos:{};*/

  constructor(private wservice:WebsocketService,
              private activateRoute:ActivatedRoute) {

                this.activateRoute.params
                .subscribe((res)=> this.id =res['id']);
               }

  ngOnInit(): void {
    this.caso();
   
  }


  caso(){
    this.wservice.listen('tiket-n2')
    .subscribe((res:any)=>{

      //console.log('Prueba de servicios'+ res);
      this.valor = res;
      this.vista= true;
     // localStorage.setItem('valor',res);

      const datos={
        id:this.id,
        valor:res
      }

      this.wservice.emit('generarE',datos);
      this.wservice.emit('noti',datos);
    })


  
     
  }

  invoca(){
    this.wservice.emit('atiende');
  }

}

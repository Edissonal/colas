import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {

  constructor(private wservice:WebsocketService,
              private http:HttpClient) { 

              }

  vista:boolean= false;
  buscar:any[]=[];
  tikets:any;
  vista2:boolean = false;
  //usuariosActivosObs: Observable<any>;

  ngOnInit(): void {
  this.http.get('http://localhost:5000/mensajes')
  .subscribe((res:any)=>{
   this.buscar = res.casos;
   this.vista = true;

  });


  setTimeout(() => {
    
    this.datos();
  }, 3000);


  
  }

  datos(){
    this.http.get('http://localhost:5000/tiket')
    .subscribe((res:any)=>{
    
      this.tikets= res.tiket;
      this.vista = true;

      console.log(res);
   
     });

   this.wservice.listen('unico')
    .subscribe(res=>{


    if(res == ''){
      return;
    }else{
      this.tikets= res;
    }

    });
  }

}

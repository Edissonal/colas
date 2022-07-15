import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  const body = document.getElementsByTagName('body')[0];
  body.classList.remove('container');

  }

  entrar(numero:number){
    if(!numero){return}

    console.log(numero);

    this.router.navigate(['/escritorio/',numero]);
  }

}

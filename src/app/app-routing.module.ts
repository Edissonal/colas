import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { HomeComponent } from './pages/home/home.component';
import { NuevoTicketComponent } from './pages/nuevo-ticket/nuevo-ticket.component';
import { PublicoComponent } from './pages/publico/publico.component';
import{RouterModule,Routes} from '@angular/router'


const routes :Routes=[

  {path:'escritorio/:id',component:EscritorioComponent},
  {path:'nuevo-tiket',component:NuevoTicketComponent},
  {path:'publico',component:PublicoComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

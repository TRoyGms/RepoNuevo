import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './components/evento/evento.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'crear-evento', component: EventoComponent },
  { path: 'eventos/:id', component: EventoComponent }, 
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

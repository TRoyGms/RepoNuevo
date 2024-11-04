import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component'; // Asegúrate de la ruta correcta
import { EventoComponent } from './components/evento/evento.component'; // Asegúrate de la ruta correcta

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'evento', component: EventoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a inicio por defecto
  { path: '**', redirectTo: '/inicio' } // Redirige cualquier ruta no existente a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Asegúrate de que esto esté importado

import { AppComponent } from './app.component';
import { ParticipanteComponent } from './components/participante/participante.component';
import { EventoComponent } from './components/evento/evento.component';
import { RegistroComponent } from './components/registro/registro.component'

@NgModule({
  declarations: [
    AppComponent,
    ParticipanteComponent,
    EventoComponent,
    RegistroComponent,
    // otros componentes...
  ],
  imports: [
    BrowserModule,
    FormsModule, // Asegúrate de añadir FormsModule aquí
    RouterModule.forRoot([
      { path: 'participantes', component: ParticipanteComponent },
      { path: 'eventos', component: EventoComponent },
      { path: 'eventos', component: RegistroComponent },
      { path: '', redirectTo: '/participantes', pathMatch: 'full' },
      { path: '**', redirectTo: '/participantes' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

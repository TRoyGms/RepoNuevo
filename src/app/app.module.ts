import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ParticipanteComponent } from './components/participante/participante.component';
import { EventoComponent } from './components/evento/evento.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ParticipanteComponent,
    EventoComponent,
    InicioComponent // Asegúrate de que también esté declarado aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

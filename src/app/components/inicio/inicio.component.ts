import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos(): void {
    this.eventoService.obtenerEventos().subscribe(
      (eventos) => {
        this.eventos = eventos;
      },
      (error) => {
        console.error('Error al cargar los eventos', error);
      }
    );
  }

  editarEvento(evento: Evento): void {
    console.log('Editando evento:', evento);
  }

  registrarParticipantes(evento: Evento): void {
    console.log('Registrando participantes para:', evento);
  }

  eliminarEvento(evento: Evento): void {
    if (confirm(`¿Estás seguro de que deseas eliminar el evento "${evento.nombre}"?`)) {
      this.eventoService.eliminarEvento(evento.id).subscribe(
        () => {
          this.eventos = this.eventos.filter(e => e.id !== evento.id);
          console.log(`Evento "${evento.nombre}" eliminado.`);
        },
        (error) => {
          console.error('Error al eliminar el evento', error);
        }
      );
    }
  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  nuevoEvento: Evento = {
    id: 0,
    nombre: '',
    fecha: new Date(),
    lugar: '',
    capacidadMaxima: 0,
    tipo: '' // Asegúrate de que el tipo esté incluido si lo necesitas
  };
  eventos: Evento[] = [];
  tipoFiltro: string = '';
  eventoEditando: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.cargarEventos();
  }

  cargarEventos() {
    this.eventos = this.dataService.obtenerEventos();
  }

  crearEvento() {
    if (this.nuevoEvento.nombre && this.nuevoEvento.lugar && this.nuevoEvento.capacidadMaxima > 0) {
      if (this.eventoEditando) {
        this.dataService.editarEvento(this.nuevoEvento);
      } else {
        this.dataService.agregarEvento(this.nuevoEvento);
      }
      this.limpiarFormulario();
      this.cargarEventos(); // Recargar la lista de eventos
    } else {
      alert('Por favor, complete todos los campos del evento.');
    }
  }

  editarEvento(evento: Evento) {
    this.nuevoEvento = { ...evento };
    this.eventoEditando = true;
  }

  eliminarEvento(id: number) {
    this.dataService.eliminarEventoPorId(id);
    this.cargarEventos(); // Refrescar la lista de eventos
  }

  verDetalles(evento: Evento) {
    this.router.navigate(['/eventos', evento.id]);
  }

  limpiarFormulario() {
    this.nuevoEvento = {
      id: 0,
      nombre: '',
      fecha: new Date(),
      lugar: '',
      capacidadMaxima: 0,
      tipo: '' // Reiniciar tipo si es necesario
    };
    this.eventoEditando = false;
  }

  get eventosFiltrados(): Evento[] {
    if (this.tipoFiltro) {
      return this.eventos.filter(evento => evento.tipo === this.tipoFiltro);
    }
    return this.eventos;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) {}

  obtenerEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  eliminarEvento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

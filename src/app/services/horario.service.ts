import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horario } from '../models/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private apiUrl = 'http://localhost:8080/api/horarios';

  constructor(private http: HttpClient) {}

  getAllHorarios(): Observable<Horario[]> {
    return this.http.get<Horario[]>(this.apiUrl);
  }

  getHorarioById(id: number): Observable<Horario> {
    return this.http.get<Horario>(`${this.apiUrl}/${id}`);
  }

  createHorario(horario: Horario): Observable<Horario> {
    return this.http.post<Horario>(this.apiUrl, horario);
  }

  updateHorario(id: number, horario: Horario): Observable<Horario> {
    return this.http.put<Horario>(`${this.apiUrl}/${id}`, horario);
  }

  deleteHorario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
